const ABBREV = new Set([
  'mr', 'mrs', 'ms', 'dr', 'prof', 'sr', 'jr', 'st', 'vs', 'etc', 'inc', 'ltd',
  'co', 'no', 'fig', 'figs', 'approx', 'eg', 'ie', 'us', 'uk', 'un', 'eu',
  'am', 'pm', 'jan', 'feb', 'mar', 'apr', 'jun', 'jul', 'aug', 'sep', 'sept',
  'oct', 'nov', 'dec', 'cf', 'al', 'ed', 'pp', 'vol', 'ch', 'ibid', 'esp',
  'min', 'max', 'avg', 'dept', 'gov', 'corp', 'bros', 'phd', 'md', 'ba', 'ma',
]);

const SEGMENTER = (() => {
  const S = (Intl as unknown as { Segmenter?: new (l: string, o: object) => { segment(i: string): Iterable<{ segment: string }> } }).Segmenter;
  if (!S) return null;
  try {
    return new S('en', { granularity: 'sentence' });
  } catch {
    return null;
  }
})();

function fallbackSplit(text: string): string[] {
  const protectedText = text
    .replace(/\b([A-Za-z]\.){2,}/g, (m) => m.replace(/\./g, '\u0001'))
    .replace(/\b(\d)\.(\d)/g, '$1\u0001$2')
    .replace(/\.\.\./g, '\u0001\u0001\u0001');

  const out: string[] = [];
  let start = 0;
  for (let i = 0; i < protectedText.length; i++) {
    const c = protectedText[i];
    if (c !== '.' && c !== '!' && c !== '?') continue;
    let j = i + 1;
    while (j < protectedText.length && '!?'.includes(protectedText[j])) j++;
    while (j < protectedText.length && /["'”’)\]]/.test(protectedText[j])) j++;
    let k = j;
    while (k < protectedText.length && protectedText[k] === ' ') k++;
    if (k >= protectedText.length) {
      out.push(protectedText.slice(start));
      start = protectedText.length;
      break;
    }
    if (/[A-Z"'“‘(\[]/.test(protectedText[k])) {
      out.push(protectedText.slice(start, k));
      start = k;
      i = k - 1;
    }
  }
  if (start < protectedText.length) out.push(protectedText.slice(start));
  return out.map((s) => s.split('\u0001').join('.').trim()).filter(Boolean);
}

const TITLES = new Set(['mr', 'mrs', 'ms', 'dr', 'prof', 'sr', 'jr', 'st', 'hon', 'rev', 'fr', 'messrs']);

function shouldMerge(prev: string, next: string): boolean {
  if (!next) return false;
  const m = prev.match(/([A-Za-z.]+)[.!?]["'”’)\]]*$/);
  if (m) {
    const raw = m[1];
    const w = raw.toLowerCase().replace(/\./g, '');
    if (/^[A-Z]$/.test(raw)) return true;
    if (TITLES.has(w)) return true;
    if (/^\d+$/.test(w)) return true;
    if (ABBREV.has(w) && /^[a-z]/.test(next)) return true;
    if (/^[a-z](\.[a-z])+\.?$/.test(raw.toLowerCase()) && /^[a-z]/.test(next)) return true;
  }
  if (/^[a-z]/.test(next) && !/^(iPhone|iPad|iOS|eBay|eBook)/.test(next)) return true;
  if (/^[,;:)\]]/.test(next)) return true;
  return false;
}

export function splitSentences(text: string): string[] {
  const cleaned = text.replace(/\s+/g, ' ').trim();
  if (!cleaned) return [];

  let parts: string[] = [];
  if (SEGMENTER) {
    parts = Array.from(SEGMENTER.segment(cleaned))
      .map((s) => s.segment.trim())
      .filter(Boolean);
  }
  if (parts.length === 0) parts = fallbackSplit(cleaned);

  const out: string[] = [];
  for (const p of parts) {
    if (out.length && shouldMerge(out[out.length - 1], p)) {
      out[out.length - 1] += ' ' + p;
    } else {
      out.push(p);
    }
  }
  return out.map((s) => s.trim()).filter(Boolean);
}

export function splitParagraphs(text: string): string[] {
  return text
    .replace(/\r\n?/g, '\n')
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim())
    .filter(Boolean);
}

export function countWords(text: string): number {
  const m = text.match(/[A-Za-z][A-Za-z'’-]*/g);
  return m ? m.length : 0;
}
