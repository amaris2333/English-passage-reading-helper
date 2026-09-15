import { nanoid } from 'nanoid';
import type { Article, Highlight, HlColor, Sentence } from '../types';

export const HL_COLORS: Array<{ key: HlColor; label: string; css: string; swatch: string }> = [
  { key: 'yellow', label: '浅黄', css: 'rgba(253, 230, 122, .72)', swatch: '#fbe489' },
  { key: 'blue', label: '浅蓝', css: 'rgba(168, 212, 250, .72)', swatch: '#a8d4fa' },
  { key: 'purple', label: '浅紫', css: 'rgba(205, 189, 246, .72)', swatch: '#cdbdf6' },
];

/** 取某点所在句子的 id 与句内字符偏移 */
export function caretInfo(x: number, y: number): { sid: string; off: number } | null {
  const doc = document as Document & {
    caretRangeFromPoint?: (x: number, y: number) => Range | null;
    caretPositionFromPoint?: (x: number, y: number) => { offsetNode: Node; offset: number } | null;
  };
  let node: Text | null = null;
  let offset = 0;
  if (doc.caretRangeFromPoint) {
    const r = doc.caretRangeFromPoint(x, y);
    if (r && r.startContainer.nodeType === Node.TEXT_NODE) {
      node = r.startContainer as Text;
      offset = r.startOffset;
    }
  } else if (doc.caretPositionFromPoint) {
    const p = doc.caretPositionFromPoint(x, y);
    if (p && p.offsetNode.nodeType === Node.TEXT_NODE) {
      node = p.offsetNode as Text;
      offset = p.offset;
    }
  }
  if (!node) return null;
  const row = node.parentElement?.closest<HTMLElement>('[data-sid]');
  if (!row) return null;
  const sid = row.getAttribute('data-sid');
  const enEl = row.querySelector('.sentence-en');
  if (!sid || !enEl) return null;

  const walker = document.createTreeWalker(enEl, NodeFilter.SHOW_TEXT);
  let acc = 0;
  let n: Node | null = walker.nextNode();
  while (n) {
    if (n === node) return { sid, off: acc + offset };
    acc += (n.nodeValue ?? '').length;
    n = walker.nextNode();
  }
  return null;
}

export function flattenSentences(article: Article): Sentence[] {
  return article.paragraphs.flatMap((p) => p.sentences);
}

export function findSentence(article: Article, sid: string): Sentence | undefined {
  return flattenSentences(article).find((s) => s.id === sid);
}

/** 把「起点 → 终点」区间拆成逐句的高亮记录（允许跨句拖拽） */
export function rangeToHighlights(
  article: Article,
  a: { sid: string; off: number },
  b: { sid: string; off: number },
  color: HlColor,
): Highlight[] {
  const list = flattenSentences(article);
  let i = list.findIndex((s) => s.id === a.sid);
  let j = list.findIndex((s) => s.id === b.sid);
  if (i < 0 || j < 0) return [];
  let startOff = a.off;
  let endOff = b.off;
  if (i > j || (i === j && startOff > endOff)) {
    [i, j] = [j, i];
    [startOff, endOff] = [endOff, startOff];
  }
  const out: Highlight[] = [];
  for (let k = i; k <= j; k++) {
    const s = list[k];
    const from = k === i ? Math.min(startOff, s.en.length) : 0;
    const to = k === j ? Math.min(endOff, s.en.length) : s.en.length;
    if (to - from < 1) continue;
    out.push({
      id: nanoid(8),
      articleId: article.id,
      sentenceId: s.id,
      start: from,
      end: to,
      color,
    });
  }
  return out;
}

export interface Seg {
  text: string;
  role?: string;
  hl?: HlColor;
}

/** 按「成分标注」与「荧光笔」逐字符合成渲染片段 */
export function buildSegments(
  sentence: Sentence,
  opts: { chunks?: boolean; highlights?: Highlight[] },
): Seg[] {
  const en = sentence.en;
  const n = en.length;
  const roleAt: Array<string | undefined> = new Array(n);
  const hlAt: Array<HlColor | undefined> = new Array(n);

  if (opts.chunks && sentence.analysis) {
    for (const c of sentence.analysis.chunks) {
      const from = Math.max(0, c.start);
      const to = Math.min(n, c.end);
      for (let i = from; i < to; i++) roleAt[i] = c.role;
    }
  }
  for (const h of opts.highlights ?? []) {
    const from = Math.max(0, h.start);
    const to = Math.min(n, h.end);
    for (let i = from; i < to; i++) hlAt[i] = h.color;
  }

  const segs: Seg[] = [];
  let i = 0;
  while (i < n) {
    const r = roleAt[i];
    const h = hlAt[i];
    let j = i + 1;
    while (j < n && roleAt[j] === r && hlAt[j] === h) j++;
    segs.push({ text: en.slice(i, j), role: r, hl: h });
    i = j;
  }
  return segs.length ? segs : [{ text: en }];
}
