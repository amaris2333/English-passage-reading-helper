import { lemmatize } from './dict';

type Row = [string, string | null];

let idx: Record<string, number> | null = null;
let rows: Row[] | null = null;
let loading: Promise<void> | null = null;
let failed = false;

async function decodeMaybeGzip(buf: ArrayBuffer): Promise<string> {
  const head = new Uint8Array(buf.slice(0, 2));
  if (head[0] === 0x1f && head[1] === 0x8b) {
    const ds = new DecompressionStream('gzip');
    return new Response(new Blob([buf]).stream().pipeThrough(ds)).text();
  }
  return new TextDecoder('utf-8').decode(buf);
}

/** 例句库（来自 Tatoeba，CC BY 2.0 FR）。体积小，词典加载后随即预取，点词时零等待。 */
export async function ensureExamples(): Promise<boolean> {
  if (rows) return true;
  if (failed) return false;
  if (loading) return loading.then(() => !!rows);
  loading = (async () => {
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}dict/examples.json.gz`);
      if (!res.ok) throw new Error('examples fetch failed');
      const data = JSON.parse(await decodeMaybeGzip(await res.arrayBuffer()));
      idx = data.idx;
      rows = data.arr;
    } catch {
      failed = true;
    }
  })();
  return loading.then(() => !!rows);
}

export function examplesReady(): boolean {
  return !!rows;
}

export interface WordExamples {
  examples: string[];
  definition: string | null;
}

const EMPTY: WordExamples = { examples: [], definition: null };

export function getExamples(surface: string): WordExamples {
  const clean = surface.replace(/[^A-Za-z'-]/g, '').toLowerCase();
  if (!clean || !rows || !idx) return EMPTY;
  for (const c of lemmatize(clean)) {
    const i = idx[c];
    if (i === undefined) continue;
    const row = rows[i];
    return { examples: row[0] ? row[0].split('\u0001') : [], definition: row[1] ?? null };
  }
  return EMPTY;
}
