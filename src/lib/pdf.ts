import * as pdfjsLib from 'pdfjs-dist';
import workerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

pdfjsLib.GlobalWorkerOptions.workerSrc = workerUrl;

interface Item {
  x: number;
  y: number;
  w: number;
  text: string;
}

interface Line {
  y: number;
  x: number;
  endX: number;
  text: string;
}

function buildLines(items: Item[]): Line[] {
  if (!items.length) return [];
  const sorted = [...items].sort((a, b) => b.y - a.y || a.x - b.x);
  const lines: Line[] = [];
  let current: Item[] = [];
  let baseY = sorted[0].y;

  const flush = () => {
    if (!current.length) return;
    current.sort((a, b) => a.x - b.x);
    let text = '';
    let prevEnd = -1;
    for (const it of current) {
      if (prevEnd >= 0 && it.x - prevEnd > 1.2) text += ' ';
      text += it.text;
      prevEnd = it.x + it.w;
    }
    lines.push({
      y: baseY,
      x: current[0].x,
      endX: prevEnd,
      text: text.replace(/\s+/g, ' ').trim(),
    });
    current = [];
  };

  for (const it of sorted) {
    if (Math.abs(it.y - baseY) > 3) {
      flush();
      baseY = it.y;
    }
    current.push(it);
  }
  flush();
  return lines.filter((l) => l.text);
}

function findColumnSplit(items: Item[], pageWidth: number): number | null {
  if (pageWidth <= 0) return null;
  // bin 数从 100 降到 48：双栏之间的空白带通常很宽，48 个 bin 足够分辨，
  // 同时把每页统计开销几乎减半（仍保持分栏识别质量）。
  const binCount = 48;
  const binWidth = pageWidth / binCount;
  const bins = new Array(binCount).fill(0);
  for (const it of items) {
    const from = Math.max(0, Math.floor(it.x / binWidth));
    const to = Math.min(binCount - 1, Math.floor((it.x + it.w) / binWidth));
    for (let i = from; i <= to; i++) bins[i]++;
  }
  const lo = Math.floor(binCount * 0.3);
  const hi = Math.floor(binCount * 0.7);
  // 判定“中间出现空白带”所需的最小连续空 bin 数（≈ 6% 页宽），随 bin 数缩放
  const MIN_RUN = Math.max(2, Math.round(binCount * 0.06));
  let runStart = -1;
  for (let i = lo; i <= hi; i++) {
    if (bins[i] === 0) {
      if (runStart < 0) runStart = i;
    } else {
      if (runStart >= 0 && i - runStart >= MIN_RUN) {
        return ((runStart + i) / 2) * binWidth;
      }
      runStart = -1;
    }
  }
  if (runStart >= 0 && hi - runStart >= MIN_RUN) return ((runStart + hi) / 2) * binWidth;
  return null;
}

function median(nums: number[]): number {
  if (!nums.length) return 0;
  const s = [...nums].sort((a, b) => a - b);
  return s[Math.floor(s.length / 2)];
}

function linesToParagraphs(lines: Line[]): string[] {
  if (!lines.length) return [];
  const gaps: number[] = [];
  for (let i = 1; i < lines.length; i++) {
    const g = lines[i - 1].y - lines[i].y;
    if (g > 0) gaps.push(g);
  }
  const medGap = median(gaps) || 12;
  // 不用 Math.max(...lines.map())：页面行数很大时展开数组既慢又可能爆栈，改为一次线性扫描
  let minX = Infinity;
  let maxEndX = -Infinity;
  for (const l of lines) {
    if (l.x < minX) minX = l.x;
    if (l.endX > maxEndX) maxEndX = l.endX;
  }
  const colWidth = maxEndX - minX;

  const out: string[] = [];
  let buf = '';
  const flush = () => {
    const t = buf.trim();
    if (t) out.push(t);
    buf = '';
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    buf += (buf ? ' ' : '') + line.text;
    const next = lines[i + 1];
    if (!next) break;

    const gap = line.y - next.y;
    const shortLine = line.endX - line.x < colWidth * 0.88;
    const endsSentence = /[.!?]["'”’)\]]?$/.test(line.text);
    const hyphenBreak = line.text.endsWith('-') && /^[a-z]/.test(next.text);

    if (hyphenBreak) {
      buf = buf.slice(0, -1);
      continue;
    }
    if (gap > medGap * 1.5 || (shortLine && endsSentence) || next.x - line.x > 6) flush();
  }
  flush();
  return out;
}

export interface PdfResult {
  paragraphs: string[];
  pageCount: number;
  title?: string;
  warnings: string[];
}

export async function extractPdf(file: File, onProgress?: (p: number, total: number) => void): Promise<PdfResult> {
  const warnings: string[] = [];
  const tStart = performance.now();
  const buf = await file.arrayBuffer();
  const doc = await pdfjsLib.getDocument({ data: buf }).promise;
  const pageCount = doc.numPages;

  const allParagraphs: string[] = [];
  const firstLines: string[] = [];
  const lastLines: string[] = [];

  let sumGetPage = 0;
  let sumGetText = 0;
  let sumBuild = 0;
  let sumToParas = 0;
  let maxPage = 0;

  for (let p = 1; p <= pageCount; p++) {
    onProgress?.(p, pageCount);
    const tp0 = performance.now();
    const page = await doc.getPage(p);
    const tp1 = performance.now();
    const viewport = page.getViewport({ scale: 1 });
    const content = await page.getTextContent();
    const tp2 = performance.now();
    const items: Item[] = (content.items as Array<{ str: string; width: number; transform: number[] }>)
      .filter((it) => typeof it.str === 'string' && it.str.trim())
      .map((it) => ({
        x: it.transform[4],
        y: it.transform[5],
        w: it.width || it.str.length * 4,
        text: it.str,
      }));

    if (!items.length) {
      const tpEnd = performance.now();
      sumGetPage += tp1 - tp0;
      sumGetText += tp2 - tp1;
      maxPage = Math.max(maxPage, tpEnd - tp0);
      await new Promise((r) => setTimeout(r, 0)); // 每页让出主线程，保证进度条刷新、界面不假死
      continue;
    }

    const lines = buildLines(items);
    const split = findColumnSplit(items, viewport.width);

    let pageLines: Line[];
    if (split) {
      const left = lines.filter((l) => l.x + (l.endX - l.x) / 2 < split);
      const right = lines.filter((l) => l.x + (l.endX - l.x) / 2 >= split);
      pageLines = [...left, ...right];
      if (p === 1) warnings.push('检测到双栏排版，已按左右栏顺序还原，请核对段落顺序。');
    } else {
      pageLines = lines;
    }

    if (pageLines.length) {
      firstLines.push(pageLines[0].text);
      lastLines.push(pageLines[pageLines.length - 1].text);
    }
    const tp3 = performance.now();
    allParagraphs.push(...linesToParagraphs(pageLines));
    const tp4 = performance.now();

    sumGetPage += tp1 - tp0;
    sumGetText += tp2 - tp1;
    sumBuild += tp3 - tp2;
    sumToParas += tp4 - tp3;
    maxPage = Math.max(maxPage, tp4 - tp0);

    // 每页让出主线程，保证 onProgress 触发后界面能刷新、不假死
    await new Promise((r) => setTimeout(r, 0));
  }

  // 分阶段耗时输出（每页 getTextContent 是绝对大头，本机解析瓶颈在此；其余阶段已做优化）
  console.log(
    `[pdf] 解析完成：共 ${pageCount} 页，总耗时 ${(performance.now() - tStart).toFixed(1)}ms，` +
    `单页最慢 ${maxPage.toFixed(1)}ms。各阶段累计：getPage ${(sumGetPage).toFixed(1)}ms，` +
    `getTextContent ${(sumGetText).toFixed(1)}ms，建行+分栏 ${(sumBuild).toFixed(1)}ms，段落合并 ${(sumToParas).toFixed(1)}ms`,
  );

  const threshold = Math.max(2, Math.ceil(pageCount * 0.6));
  // 用 Map 计数替代原 O(n²) 的「每句都全量 filter」，首末行数量大时差距明显
  const counts = new Map<string, number>();
  for (const t of [...firstLines, ...lastLines]) {
    if (t && t.length < 120) counts.set(t, (counts.get(t) ?? 0) + 1);
  }
  const repeats = new Set<string>();
  for (const [t, n] of counts) {
    if (n >= threshold) repeats.add(t);
  }

  let paragraphs = allParagraphs.filter((p) => !repeats.has(p) && !repeats.has(p.slice(0, 60)));
  if (repeats.size) warnings.push(`已自动剔除 ${repeats.size} 处页眉/页脚重复文本。`);

  if (!paragraphs.length) {
    warnings.push('未能从该 PDF 中提取到文本层，可能是扫描版 PDF。请改用粘贴文本，或先用 OCR 工具转换。');
  }

  const meta = await doc.getMetadata().catch(() => null);
  const title = (meta?.info as { Title?: string })?.Title;

  return { paragraphs, pageCount, title, warnings };
}
