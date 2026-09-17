import { nanoid } from 'nanoid';
import type { QuizKind, QuizQuestion } from '../types';
import { lookupWord } from './dict';
import { ensureDict } from './lookup';

/* ----------------------------- 基础工具 ----------------------------- */

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function sample<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n);
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** 生成一个与 w 不同、长度>0 的错拼变体 */
function misspell(w: string): string {
  const lower = w.toLowerCase();
  const arr = lower.split('');
  const variants: string[] = [];

  // 交换相邻字母
  if (arr.length > 3) {
    const i = Math.floor(Math.random() * (arr.length - 1));
    const c = arr.slice();
    [c[i], c[i + 1]] = [c[i + 1], c[i]];
    variants.push(c.join(''));
  }
  // 删去中间一个字母
  if (lower.length > 4) {
    const i = 1 + Math.floor(Math.random() * (lower.length - 2));
    variants.push(lower.slice(0, i) + lower.slice(i + 1));
  }
  // 重复一个字母
  {
    const i = Math.floor(Math.random() * lower.length);
    variants.push(lower.slice(0, i) + lower[i] + lower.slice(i));
  }
  // 元音替换
  {
    const vowels = 'aeiou';
    const idxs = arr.map((c, i) => (vowels.includes(c) ? i : -1)).filter((i) => i >= 0);
    if (idxs.length) {
      const i = idxs[Math.floor(Math.random() * idxs.length)];
      const others = 'aeiou'.split('').filter((v) => v !== arr[i]);
      const c = arr.slice();
      c[i] = others[Math.floor(Math.random() * others.length)];
      variants.push(c.join(''));
    }
  }

  const uniq = variants.filter((v) => v && v !== lower);
  return (uniq[Math.floor(Math.random() * uniq.length)] ?? lower + 'x');
}

/* ----------------------------- 题型构造 ----------------------------- */

function makeChoice(
  word: string,
  zh: string,
  zhPool: string[],
): QuizQuestion | null {
  const distractors = shuffle(zhPool.filter((z) => z !== zh)).slice(0, 3);
  if (distractors.length < 3) return null; // 干扰项不足，跳过该词
  return {
    id: nanoid(8),
    kind: 'choice',
    stem: word,
    options: shuffle([zh, ...distractors]),
    answer: zh,
    explanation: `「${word}」的意思是「${zh}」。`,
    word,
  };
}

function makeJudge(word: string, zh: string, zhPool: string[]): QuizQuestion {
  const isCorrect = Math.random() < 0.5;
  let shown = zh;
  if (!isCorrect) {
    const others = shuffle(zhPool.filter((z) => z !== zh));
    shown = others[0] ?? zh;
  }
  return {
    id: nanoid(8),
    kind: 'judge',
    stem: `${word} —— ${shown}`,
    options: ['对', '错'],
    answer: isCorrect ? '对' : '错',
    explanation: isCorrect
      ? `「${word}」确实意为「${zh}」。`
      : `「${word}」的意思是「${zh}」，不是「${shown}」。`,
    word,
  };
}

function makeCorrect(pair: { sentence: string; word: string; zh: string }): QuizQuestion {
  const { sentence, word, zh } = pair;
  const correct = word.toLowerCase();

  const wrongs = new Set<string>();
  let guard = 0;
  while (wrongs.size < 3 && guard++ < 60) {
    const m = misspell(correct);
    if (m && m !== correct) wrongs.add(m);
  }
  const distractors = [...wrongs];
  while (distractors.length < 3) distractors.push(correct + 'x' + distractors.length);

  // 句中该词替换为某个错拼，让用户挑出正确拼写
  const stem = sentence.replace(new RegExp(escapeRegExp(word), 'i'), distractors[0]);

  return {
    id: nanoid(8),
    kind: 'correct',
    stem,
    options: shuffle([correct, ...distractors]),
    answer: correct,
    explanation: `句中单词正确拼写为 ${correct}（${zh}）。`,
    word,
  };
}

/* ----------------------------- 组卷 ----------------------------- */

export interface BuildQuizParams {
  articleWords: string[];
  favWords: string[];
  sentences?: string[];
  total?: number;
}

/**
 * 组一份测验：当前文章的单词 + 用户收藏的单词，三种题型混合。
 * 必须先 ensureDict()；只出有中文释义（zh 非空）的词，否则跳过。
 * 若可用的词不足，返回少于 total 的题目（甚至空数组，交由 UI 显示空状态）。
 */
export async function buildQuiz(params: BuildQuizParams): Promise<QuizQuestion[]> {
  await ensureDict();

  const { articleWords = [], favWords = [], sentences = [], total = 10 } = params;

  // word(小写) -> 中文释义，仅保留命中词典且有释义的词
  const valid = new Map<string, string>();
  for (const raw of [...articleWords, ...favWords]) {
    const clean = raw.replace(/[^A-Za-z'-]/g, '').toLowerCase();
    if (!clean || valid.has(clean)) continue;
    const r = lookupWord(clean);
    if (r.entry && r.entry.zh && r.entry.zh.trim()) valid.set(clean, r.entry.zh.trim());
  }
  if (valid.size === 0) return [];

  const entries = [...valid.entries()];
  const zhPool = entries.map(([, zh]) => zh);

  // 从文章句子中挑出包含已收录单词的句子，作为 correct 题型素材
  const correctPairs: Array<{ sentence: string; word: string; zh: string }> = [];
  for (const sentence of sentences) {
    const ws = sentence.match(/[A-Za-z']+/g) ?? [];
    for (const w of ws) {
      const low = w.toLowerCase();
      if (valid.has(low)) {
        correctPairs.push({ sentence, word: w, zh: valid.get(low)! });
        break; // 每句至多取一个
      }
    }
  }

  const questions: QuizQuestion[] = [];
  const used = new Set<string>();
  const take = (n: number) => sample(entries.filter(([w]) => !used.has(w)), n);

  // choice 至多 4
  for (const [w, zh] of take(4)) {
    const q = makeChoice(w, zh, zhPool);
    if (q) {
      questions.push(q);
      used.add(w);
    }
  }
  // judge 至多 3
  for (const [w, zh] of take(3)) {
    questions.push(makeJudge(w, zh, zhPool));
    used.add(w);
  }
  // correct 至多 3
  for (const p of sample(correctPairs, 3)) {
    questions.push(makeCorrect(p));
  }
  // 若仍未满，用剩余词补齐（choice / judge 混合）
  while (questions.length < total) {
    const remain = take(1);
    if (!remain.length) break;
    const [w, zh] = remain[0];
    used.add(w);
    if (Math.random() < 0.5) {
      const q = makeChoice(w, zh, zhPool);
      questions.push(q ?? makeJudge(w, zh, zhPool));
    } else {
      questions.push(makeJudge(w, zh, zhPool));
    }
  }

  return shuffle(questions).slice(0, Math.max(total, questions.length));
}

export const QUIZ_KIND_LABEL: Record<QuizKind, string> = {
  choice: '选词释义',
  judge: '正误判断',
  correct: '拼写纠错',
};
