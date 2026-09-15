import { lemmatize } from './dict';

export interface NetDef {
  pos: string;
  text: string;
}

const mem = new Map<string, NetDef[] | null>();
const pending = new Map<string, Promise<NetDef[] | null>>();

/** 单个请求的超时：卡住的源不能拖死整个查询 */
const PER_REQUEST_MS = 2600;
/** 整个查询的总超时：宁可告诉用户"没查到"，也不让他干等十几秒 */
const TOTAL_MS = 4200;
/** 最多尝试几个词形（原形 + 前两个还原形），避免请求次数爆炸 */
const MAX_FORMS = 3;

function stripHtml(s: string): string {
  const div = document.createElement('div');
  div.innerHTML = s;
  return (div.textContent || '').replace(/\s+/g, ' ').trim();
}

async function fetchJson(url: string): Promise<unknown | null> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), PER_REQUEST_MS);
  try {
    const res = await fetch(url, { signal: ctrl.signal, headers: { Accept: 'application/json' } });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

/** 源 1：Wiktionary REST API（免费、无 Key、支持跨域） */
async function fromWiktionary(word: string): Promise<NetDef[] | null> {
  try {
    const data = (await fetchJson(`https://en.wiktionary.org/api/rest_v1/page/definition/${encodeURIComponent(word)}`)) as
      | Record<string, Array<{ partOfSpeech?: string; definitions?: Array<{ definition?: string }> }>>
      | null;
    if (!data) return null;
    const defs = (data.en ?? []).flatMap((sec) =>
      (sec.definitions ?? []).map((d) => ({
        pos: (sec.partOfSpeech || '').slice(0, 12),
        text: stripHtml(d.definition || ''),
      })).filter((d) => d.text.length > 1),
    );
    return defs.length ? defs : null;
  } catch {
    return null;
  }
}

/** 源 2：Free Dictionary API（免费、无 Key） */
async function fromFreeDictionary(word: string): Promise<NetDef[] | null> {
  try {
    const arr = (await fetchJson(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`)) as
      | Array<{ meanings?: Array<{ partOfSpeech?: string; definitions?: Array<{ definition?: string }> }> }>
      | null;
    if (!arr?.length) return null;
    const defs = (arr[0]?.meanings ?? []).flatMap((m) =>
      (m.definitions ?? []).map((d) => ({
        pos: (m.partOfSpeech || '').slice(0, 12),
        text: stripHtml(d.definition || ''),
      })).filter((d) => d.text.length > 1),
    );
    return defs.length ? defs : null;
  } catch {
    return null;
  }
}

/**
 * 判断是否「专有名词」：人名/地名/机构名等，词典不会收录，查了也白查。
 * 规则：内部还有大写（ChatGPT / McDonald）、全大写，或出现在句中而非句首的大写词。
 */
export function isLikelyProperNoun(surface: string, sentence?: string): boolean {
  const w = surface.trim();
  if (!/^[A-Za-z][A-Za-z'’-]*$/.test(w)) return false;
  if (/[0-9]/.test(w)) return false;
  if (w.length <= 2) return false;
  if (w.slice(1) === w.slice(1).toLowerCase()) {
    // 首字母大写、其余小写：需借助上下文判断
    if (sentence) {
      const idx = sentence.indexOf(w);
      if (idx > 1) return true;          // 不在句首却大写 → 专有名词
    }
    return false;
  }
  return true;                            // 内部大写或全大写：ChatGPT / NASA / McDonald
}

/** 联网查释义：两个源并行竞速，整体限时，结果只存本机内存 */
export async function lookupOnline(word: string): Promise<NetDef[] | null> {
  const clean = word.replace(/[^A-Za-z'-]/g, '').toLowerCase();
  if (!clean) return null;
  if (mem.has(clean)) return mem.get(clean)!;
  if (pending.has(clean)) return pending.get(clean)!;

  const forms = [clean, ...lemmatize(clean).filter((x) => x !== clean)].slice(0, MAX_FORMS);

  const run = async (): Promise<NetDef[] | null> => {
    for (const f of forms) {
      // 两个源同时发，谁先返回有效结果用谁
      const [wk, fd] = await Promise.all([fromWiktionary(f), fromFreeDictionary(f)]);
      const hit = wk ?? fd;
      if (hit) { mem.set(clean, hit); return hit; }
    }
    mem.set(clean, null);                  // 负结果也缓存，重复点击不再发请求
    return null;
  };

  const timeout = new Promise<null>((r) => setTimeout(() => r(null), TOTAL_MS));
  const pr = Promise.race([run(), timeout])
    .then((r) => { mem.set(clean, r); return r; })
    .finally(() => pending.delete(clean));
  pending.set(clean, pr);
  return pr;
}
