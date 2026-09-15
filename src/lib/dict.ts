import { LEXICON } from '../data/lexicon';
import type { DictEntry } from '../types';

type Row = [string, string, string, string, number, number, string, string?];

let idx: Record<string, number> | null = null;
let rows: Row[] | null = null;
let loading: Promise<void> | null = null;
let failed = false;

/** 按 gzip 魔数判断是否需要解压（部分静态服务器会自动解压 .gz） */
async function decodeMaybeGzip(buf: ArrayBuffer): Promise<string> {
  const head = new Uint8Array(buf.slice(0, 2));
  if (head[0] === 0x1f && head[1] === 0x8b) {
    const ds = new DecompressionStream('gzip');
    const stream = new Blob([buf]).stream().pipeThrough(ds);
    return new Response(stream).text();
  }
  return new TextDecoder('utf-8').decode(buf);
}

export async function ensureDict(): Promise<boolean> {
  if (rows) return true;
  if (failed) return false;
  if (loading) return loading.then(() => !!rows);
  loading = (async () => {
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}dict/ecdict.json.gz`);
      if (!res.ok) throw new Error('dict fetch failed');
      const text = await decodeMaybeGzip(await res.arrayBuffer());
      const data = JSON.parse(text);
      idx = data.idx;
      rows = data.arr;
    } catch {
      failed = true;
    }
  })();
  return loading.then(() => !!rows);
}

export function dictReady(): boolean {
  return !!rows;
}

export function dictSize(): number {
  return rows?.length ?? 0;
}

function getRow(lemma: string): Row | undefined {
  if (!rows || !idx) return undefined;
  const i = idx[lemma];
  return i === undefined ? undefined : rows[i];
}

/** 把 ECDICT 的 "n. 停战, 休战 / vi. 停战" 拆成义项 */
function splitSenses(zh: string): Array<{ pos: string; text: string }> {
  return zh
    .split(' / ')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => {
      const m = s.match(/^([a-z]{1,5})\.\s*(.*)$/);
      return m ? { pos: m[1], text: m[2] } : { pos: '', text: s };
    });
}

export interface LookupResult {
  entry?: DictEntry;
  matchedLemma?: string;
  surface: string;
  senses: Array<{ pos: string; text: string }>;
  synonyms: string[];
}

const EMPTY: LookupResult = { surface: '', senses: [], synonyms: [] };

export function lookupWord(surface: string): LookupResult {
  const clean = surface.replace(/[^A-Za-z'-]/g, '');
  if (!clean) return { ...EMPTY, surface };

  const candidates = lemmatize(clean);
  const curatedFirst = candidates.find((c) => LEXICON[c]);

  for (const c of candidates) {
    const row = getRow(c);
    if (!row) continue;
    const [, ph, zh, tag, , , , synFromDict] = row;
    const cur = LEXICON[c];
    const syn = cur?.syn ?? synFromDict ?? '';
    return {
      surface: clean,
      matchedLemma: c,
      senses: splitSenses(zh || cur?.zh || ''),
      synonyms: syn.split(',').map((s) => s.trim()).filter(Boolean).slice(0, 5),
      entry: {
        lemma: c,
        ph: cur?.ph || ph || '',
        pos: '',
        zh: zh || cur?.zh || '',
        tags: tag || cur?.tags || '',
        syn,
      },
    };
  }

  if (curatedFirst) {
    const cur = LEXICON[curatedFirst];
    return {
      surface: clean,
      matchedLemma: curatedFirst,
      senses: splitSenses(cur.zh),
      synonyms: (cur.syn ?? '').split(',').map((s) => s.trim()).filter(Boolean).slice(0, 5),
      entry: cur,
    };
  }

  return { ...EMPTY, surface: clean };
}

// ---- 词形还原 ----
const IRREGULAR: Record<string, string> = {
  am: 'be', is: 'be', are: 'be', was: 'be', were: 'be', been: 'be', being: 'be',
  has: 'have', had: 'have', having: 'have',
  does: 'do', did: 'do', done: 'do', doing: 'do',
  went: 'go', gone: 'go', goes: 'go',
  made: 'make', said: 'say', saw: 'see', seen: 'see', took: 'take', taken: 'take',
  came: 'come', got: 'get', gotten: 'get', knew: 'know', known: 'know',
  thought: 'think', found: 'find', gave: 'give', given: 'give', told: 'tell',
  became: 'become', left: 'leave', felt: 'feel', brought: 'bring',
  began: 'begin', begun: 'begin', kept: 'keep', held: 'hold', wrote: 'write',
  written: 'write', stood: 'stand', heard: 'hear', meant: 'mean',
  met: 'meet', ran: 'run', paid: 'pay', sat: 'sit', spoke: 'speak',
  spoken: 'speak', lay: 'lie', led: 'lead', grew: 'grow', grown: 'grow',
  lost: 'lose', fell: 'fall', fallen: 'fall', sent: 'send', built: 'build',
  understood: 'understand', drew: 'draw', drawn: 'draw', broke: 'break',
  broken: 'break', spent: 'spend', rose: 'rise', risen: 'rise',
  drove: 'drive', driven: 'drive', bought: 'buy', wore: 'wear', worn: 'wear',
  chose: 'choose', chosen: 'choose',
  mice: 'mouse', feet: 'foot', teeth: 'tooth', geese: 'goose',
  children: 'child', people: 'person', men: 'man', women: 'woman',
  analyses: 'analysis', hypotheses: 'hypothesis', phenomena: 'phenomenon',
  criteria: 'criterion', bacteria: 'bacterium',
  better: 'good', best: 'good', worse: 'bad', worst: 'bad',
};

const DOUBLE = /([bcdfghjklmnpqrstvwxyz])\1$/i;

export function lemmatize(word: string): string[] {
  const w = word.toLowerCase();
  const out: string[] = [w];
  if (IRREGULAR[w]) out.push(IRREGULAR[w]);
  if (w.endsWith('ies') && w.length > 4) out.push(w.slice(0, -3) + 'y');
  if (w.endsWith('ves') && w.length > 4) { out.push(w.slice(0, -3) + 'f'); out.push(w.slice(0, -3) + 'fe'); }
  if (w.endsWith('es') && w.length > 3) out.push(w.slice(0, -2));
  if (w.endsWith('s') && !w.endsWith('ss') && w.length > 2) out.push(w.slice(0, -1));
  if (w.endsWith('n\'t')) out.push(w.slice(0, -3));
  if (w.endsWith('ing')) {
    const b = w.slice(0, -3);
    out.push(b); out.push(b + 'e');
    if (DOUBLE.test(b)) out.push(b.slice(0, -1));
  }
  if (w.endsWith('ed')) {
    const b = w.slice(0, -2);
    out.push(b); out.push(b + 'e');
    if (DOUBLE.test(b)) out.push(b.slice(0, -1));
    if (b.endsWith('i')) out.push(b.slice(0, -1) + 'y');
  }
  if (w.endsWith('ly') && w.length > 4) out.push(w.slice(0, -2));
  if (w.endsWith('er') && w.length > 4) out.push(w.slice(0, -2));
  if (w.endsWith('est') && w.length > 5) out.push(w.slice(0, -3));
  if (w.endsWith('ion') && w.length > 5) { out.push(w.slice(0, -3) + 'e'); out.push(w.slice(0, -3)); }
  if (w.endsWith('ment') && w.length > 6) out.push(w.slice(0, -4));
  if (w.endsWith('ness') && w.length > 6) out.push(w.slice(0, -4));
  if (w.endsWith('ity') && w.length > 5) out.push(w.slice(0, -3) + 'e');
  return Array.from(new Set(out));
}
