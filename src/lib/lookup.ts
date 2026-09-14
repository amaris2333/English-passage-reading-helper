import { LEXICON } from '../data/lexicon';
import type { DictEntry } from '../types';

const IRREGULAR: Record<string, string> = {
  am: 'be', is: 'be', are: 'be', was: 'be', were: 'be', been: 'be', being: 'be',
  has: 'have', had: 'have', having: 'have',
  does: 'do', did: 'do', done: 'do', doing: 'do',
  went: 'go', gone: 'go', goes: 'go',
  made: 'make', said: 'say', saw: 'see', seen: 'see', took: 'take', taken: 'take',
  came: 'come', got: 'get', gotten: 'get', knew: 'know', known: 'know',
  thought: 'think', found: 'find', gave: 'give', given: 'give', told: 'tell',
  became: 'become', left: 'leave', felt: 'feel', put: 'put', brought: 'bring',
  began: 'begin', begun: 'begin', kept: 'keep', held: 'hold', wrote: 'write',
  written: 'write', stood: 'stand', heard: 'hear', let: 'let', meant: 'mean',
  met: 'meet', ran: 'run', paid: 'pay', sat: 'sit', spoke: 'speak',
  spoken: 'speak', lay: 'lie', led: 'lead', grew: 'grow', grown: 'grow',
  lost: 'lose', fell: 'fall', fallen: 'fall', sent: 'send', built: 'build',
  understood: 'understand', drew: 'draw', drawn: 'draw', broke: 'break',
  broken: 'break', spent: 'spend', cut: 'cut', rose: 'rise', risen: 'rise',
  drove: 'drive', driven: 'drive', bought: 'buy', wore: 'wear', worn: 'wear',
  chose: 'choose', chosen: 'choose',
  mice: 'mouse', feet: 'foot', teeth: 'tooth', geese: 'goose',
  children: 'child', people: 'person', men: 'man', women: 'woman',
  analyses: 'analysis', hypotheses: 'hypothesis', phenomena: 'phenomenon',
  criteria: 'criterion', data: 'datum', media: 'medium', bacteria: 'bacterium',
  better: 'good', best: 'good', worse: 'bad', worst: 'bad',
  further: 'far', farther: 'far',
};

const DOUBLE_CONSONANT = /([bcdfghjklmnpqrstvwxyz])\1$/i;

export function lemmatize(word: string): string[] {
  const w = word.toLowerCase();
  const out: string[] = [w];
  if (IRREGULAR[w]) out.push(IRREGULAR[w]);

  if (w.endsWith('ies') && w.length > 4) out.push(w.slice(0, -3) + 'y');
  if (w.endsWith('ves') && w.length > 4) {
    out.push(w.slice(0, -3) + 'f');
    out.push(w.slice(0, -3) + 'fe');
  }
  if (w.endsWith('es') && w.length > 3) out.push(w.slice(0, -2));
  if (w.endsWith('s') && !w.endsWith('ss') && w.length > 2) out.push(w.slice(0, -1));

  if (w.endsWith('ing')) {
    const base = w.slice(0, -3);
    out.push(base);
    out.push(base + 'e');
    if (DOUBLE_CONSONANT.test(base)) out.push(base.slice(0, -1));
  }
  if (w.endsWith('ed')) {
    const base = w.slice(0, -2);
    out.push(base);
    out.push(base + 'e');
    if (DOUBLE_CONSONANT.test(base)) out.push(base.slice(0, -1));
    if (base.endsWith('i')) out.push(base.slice(0, -1) + 'y');
  }
  if (w.endsWith('ly') && w.length > 4) out.push(w.slice(0, -2));
  if (w.endsWith('er') && w.length > 4) out.push(w.slice(0, -2));
  if (w.endsWith('est') && w.length > 5) out.push(w.slice(0, -3));
  if (w.endsWith('ion') && w.length > 5) {
    out.push(w.slice(0, -3) + 'e');
    out.push(w.slice(0, -3));
  }
  if (w.endsWith('ment') && w.length > 6) out.push(w.slice(0, -4));
  if (w.endsWith('ness') && w.length > 6) out.push(w.slice(0, -4));
  if (w.endsWith('ity') && w.length > 5) out.push(w.slice(0, -3) + 'e');

  return Array.from(new Set(out));
}

export const EXAM_LABEL: Record<string, string> = {
  cet4: '四级',
  cet6: '六级',
  ky: '考研',
  ielts: '雅思',
  toefl: '托福',
  gre: 'GRE',
};

export interface LookupResult {
  entry?: DictEntry;
  matchedLemma?: string;
  surface: string;
}

export function lookupWord(surface: string): LookupResult {
  const clean = surface.replace(/[^A-Za-z'-]/g, '');
  if (!clean) return { surface };
  const candidates = lemmatize(clean);
  for (const c of candidates) {
    if (LEXICON[c]) return { entry: LEXICON[c], matchedLemma: c, surface: clean };
  }
  return { surface: clean };
}

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

  let word = text.slice(start, end).replace(/^[-']+|[-']+$/g, '');
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
