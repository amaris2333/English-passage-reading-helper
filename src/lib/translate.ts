/**
 * 免费、无需 API Key、支持跨域的中英翻译。
 *
 * 两个公开接口互相回退：
 *   源 1：Google 非官方 gtx 接口（支持 CORS）
 *   源 2：MyMemory（支持 CORS）
 *
 * 设计要点：
 *   - 并发限制 3，避免一次性发出几十个请求
 *   - 每个请求 8s 超时（AbortController）
 *   - 单句失败不影响整体：失败的句子跳过，不写译文
 *   - 结果做内存缓存：同一句不重复请求（跨文章也复用）
 */

const GOOGLE_URL = (q: string) =>
  `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-CN&dt=t&q=${encodeURIComponent(q)}`;

const MYMEMORY_URL = (q: string) =>
  `https://api.mymemory.translated.net/get?q=${encodeURIComponent(q)}&langpair=en|zh-CN`;

const TIMEOUT_MS = 8000;
const CONCURRENCY = 3;

const cache = new Map<string, string>();

/** 带超时的 fetch（用 AbortController 在超时后中断） */
function fetchWithTimeout(url: string): Promise<Response> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  return fetch(url, { signal: ctrl.signal }).finally(() => clearTimeout(timer));
}

/** 源 1：Google gtx。返回形如 [[["译文","原文",...],...],null,"en",...] */
async function translateGoogle(text: string): Promise<string> {
  const res = await fetchWithTimeout(GOOGLE_URL(text));
  if (!res.ok) throw new Error(`google ${res.status}`);
  const json: unknown = await res.json();
  const segs = Array.isArray(json) ? (json[0] as unknown[]) : [];
  const zh = (Array.isArray(segs) ? segs : [])
    .map((seg) => (Array.isArray(seg) ? (seg[0] as string) : ''))
    .join('');
  if (!zh.trim()) throw new Error('google empty result');
  return zh;
}

/** 源 2：MyMemory。返回 { responseData: { translatedText } } */
async function translateMyMemory(text: string): Promise<string> {
  const res = await fetchWithTimeout(MYMEMORY_URL(text));
  if (!res.ok) throw new Error(`mymemory ${res.status}`);
  const json = (await res.json()) as { responseData?: { translatedText?: string } };
  const translated = json?.responseData?.translatedText;
  // 免费额度用尽时接口会返回 MYMEMORY WARNING 文本，视为失败
  if (!translated || /MYMEMORY WARNING/i.test(translated)) {
    throw new Error('mymemory unavailable');
  }
  return translated;
}

/** 单句翻译：源 1 失败则回退到源 2；都失败抛错由上层吞掉 */
async function translateOne(text: string): Promise<string> {
  try {
    return await translateGoogle(text);
  } catch {
    return await translateMyMemory(text);
  }
}

/** 简易并发池：最多 concurrency 个任务同时在跑 */
async function runPool<T>(
  items: T[],
  worker: (item: T) => Promise<void>,
  concurrency: number,
): Promise<void> {
  let idx = 0;
  const runners = Array.from(
    { length: Math.min(concurrency, items.length) },
    async () => {
      while (idx < items.length) {
        const i = idx++;
        await worker(items[i]);
      }
    },
  );
  await Promise.all(runners);
}

export interface TranslateOptions {
  /** 进度回调（done/total 为去重后的句子数） */
  onProgress?: (done: number, total: number) => void;
  /** 每句翻译完成即回调，可用于增量写入 */
  onItem?: (en: string, zh: string) => void;
}

/**
 * 批量翻译英文句子为简体中文。
 *
 * @param sentences 英文句子数组
 * @param onProgress 进度回调（第 2 个参数，满足设计规范）
 * @param onItem 每句完成回调（第 3 个参数，扩展）
 * @returns 原文 -> 译文 的 Map（失败的句子不会出现在结果里）
 */
export async function translateSentences(
  sentences: string[],
  onProgress?: (done: number, total: number) => void,
  onItem?: (en: string, zh: string) => void,
): Promise<Map<string, string>> {
  // 去重：同一个句子只请求一次
  const unique: string[] = [];
  const seen = new Set<string>();
  for (const s of sentences) {
    const t = s?.trim();
    if (!t || seen.has(t)) continue;
    seen.add(t);
    unique.push(t);
  }

  const total = unique.length;
  const result = new Map<string, string>();
  let done = 0;
  const report = () => onProgress?.(done, total);

  await runPool(
    unique,
    async (text) => {
      let zh = cache.get(text);
      if (!zh) {
        try {
          zh = await translateOne(text);
        } catch {
          zh = undefined; // 单句失败：跳过，不阻断整体
        }
        if (zh) cache.set(text, zh);
      }
      if (zh) {
        result.set(text, zh);
        onItem?.(text, zh);
      }
      done += 1;
      report();
    },
    CONCURRENCY,
  );

  return result;
}
