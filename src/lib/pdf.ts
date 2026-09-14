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
  const binCount = 100;
  const binWidth = pageWidth / binCount;
  const bins = new Array(binCount).fill(0);
  for (const it of items) {
    const from = Math.max(0, Math.floor(it.x / binWidth));
    const to = Math.min(binCount - 1, Math.floor((it.x + it.w) / binWidth));
    for (let i = from; i <= to; i++) bins[i]++;
  }
  const lo = Math.floor(binCount * 0.3);
  const hi = Math.floor(binCount * 0.7);
  let runStart = -1;
  for (let i = lo; i <= hi; i++) {
    if (bins[i] === 0) {
      if (runStart < 0) runStart = i;
    } else {
      if (runStart >= 0 && i - runStart >= 6) {
        return ((runStart + i) / 2) * binWidth;
      }
      runStart = -1;
    }
  }
  if (runStart >= 0 && hi - runStart >= 6) return ((runStart + hi) / 2) * binWidth;
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
  const colWidth = Math.max(...lines.map((l) => l.endX)) - Math.min(...lines.map((l) => l.x));

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
  const buf = await file.arrayBuffer();
  const doc = await pdfjsLib.getDocument({ data: buf }).promise;
  const pageCount = doc.numPages;

  const allParagraphs: string[] = [];
  const firstLines: string[] = [];
  const lastLines: string[] = [];

  for (let p = 1; p <= pageCount; p++) {
    onProgress?.(p, pageCount);
    const page = await doc.getPage(p);
    const viewport = page.getViewport({ scale: 1 });
    const content = await page.getTextContent();
    const items: Item[] = (content.items as Array<{ str: string; width: number; transform: number[] }>)
      .filter((it) => typeof it.str === 'string' && it.str.trim())
      .map((it) => ({
        x: it.transform[4],
        y: it.transform[5],
        w: it.width || it.str.length * 4,
        text: it.str,
      }));

    if (!items.length) continue;

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
    allParagraphs.push(...linesToParagraphs(pageLines));
  }

  const threshold = Math.max(2, Math.ceil(pageCount * 0.6));
  const repeats = new Set<string>();
  for (const t of [...firstLines, ...lastLines]) {
    if (!t) continue;
    const n = [...firstLines, ...lastLines].filter((x) => x === t).length;
    if (n >= threshold && t.length < 120) repeats.add(t);
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
