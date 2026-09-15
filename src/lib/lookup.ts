export { lookupWord, lemmatize, ensureDict, dictReady, dictSize } from './dict';
export type { LookupResult } from './dict';

export const EXAM_LABEL: Record<string, string> = {
  cet4: '四级',
  cet6: '六级',
  ky: '考研',
  ielts: '雅思',
  toefl: '托福',
  gre: 'GRE',
  gk: '高考',
  zk: '中考',
};

export function getWordRangeAtPoint(x: number, y: number): { word: string; rect: DOMRect } | null {
  const caret = getCaretAtPoint(x, y);
  if (!caret) return null;
  const { node, offset } = caret;
  const text = node.nodeValue ?? '';
  if (!text.trim()) return null;

  let start = offset;
  let end = offset;
  const isWord = (ch: string | undefined) => !!ch && /[A-Za-z'-]/.test(ch);

  if (!isWord(text[offset]) && !isWord(text[offset - 1])) return null;
  while (start > 0 && isWord(text[start - 1])) start--;
  while (end < text.length && isWord(text[end])) end++;

  const word = text.slice(start, end).replace(/^[-']+|[-']+$/g, '');
  if (!word) return null;

  const range = document.createRange();
  const s = text.indexOf(word, start);
  const idx = s >= 0 && s < end ? s : start;
  range.setStart(node, idx);
  range.setEnd(node, idx + word.length);
  const rect = range.getBoundingClientRect();
  if (!rect || (rect.width === 0 && rect.height === 0)) return null;
  return { word, rect };
}

function getCaretAtPoint(x: number, y: number): { node: Text; offset: number } | null {
  const doc = document as Document & {
    caretRangeFromPoint?: (x: number, y: number) => Range | null;
    caretPositionFromPoint?: (x: number, y: number) => { offsetNode: Node; offset: number } | null;
  };
  if (doc.caretRangeFromPoint) {
    const range = doc.caretRangeFromPoint(x, y);
    if (range && range.startContainer.nodeType === Node.TEXT_NODE) {
      return { node: range.startContainer as Text, offset: range.startOffset };
    }
  }
  if (doc.caretPositionFromPoint) {
    const pos = doc.caretPositionFromPoint(x, y);
    if (pos && pos.offsetNode.nodeType === Node.TEXT_NODE) {
      return { node: pos.offsetNode as Text, offset: pos.offset };
    }
  }
  return null;
}
