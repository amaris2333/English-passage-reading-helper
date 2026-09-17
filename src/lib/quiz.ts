import { nanoid } from 'nanoid';
import type { QuizKind, QuizQuestion, Sentence } from '../types';
import { lookupWord } from './dict';
import { ensureDict } from './lookup';

/* ================================================================== */
/* 题型维度（负责人配比：词汇30 / 语法20 / 篇章20 / 理解20 / 翻译10） */
/* ================================================================== */

export type Dimension =
  | 'vocabulary'   // 词汇与短语：熟词僻义、同义替换
  | 'syntax'       // 长难句与语法：主干识别、修饰逻辑
  | 'logic'        // 篇章逻辑：代词指代、连接词
  | 'comprehension'// 主旨细节：True / False / Not Given
  | 'translation'; // 翻译理解（补足 10%）

export const DIMENSION_LABEL: Record<Dimension, string> = {
  vocabulary: '词汇',
  syntax: '语法',
  logic: '篇章',
  comprehension: '理解',
  translation: '翻译',
};

export const DIMENSION_HINT: Record<Dimension, string> = {
  vocabulary: '请选择最恰当的选项',
  syntax: '关于本句语法结构',
  logic: '关于篇章逻辑关系',
  comprehension: '判断陈述与译文是否一致',
  translation: '选择对应的中文翻译',
};

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
  return uniq[Math.floor(Math.random() * uniq.length)] ?? lower + 'x';
}

/* ----------------------------- 难度过滤 ----------------------------- */
/* 初高中(zk/gk)、四级(cet4) 难度的词太简单，一律排除。             */
/* 优先选 cet6/ky/ielts/toefl/gre 等进阶标签的词。                    */

const BASIC_TAGS = new Set(['zk', 'gk', 'cet4']);
const ADV_TAGS = new Set(['cet6', 'ky', 'ielts', 'toefl', 'gre']);

function tagSet(tags: string | undefined): Set<string> {
  return new Set((tags ?? '').split(',').map((t) => t.trim()).filter(Boolean));
}
function isBasic(tags: string | undefined): boolean {
  const s = tagSet(tags);
  return [...s].some((t) => BASIC_TAGS.has(t));
}
function isAdvanced(tags: string | undefined): boolean {
  const s = tagSet(tags);
  return [...s].some((t) => ADV_TAGS.has(t));
}

/* ----------------------------- 题目构造 ----------------------------- */

interface WordEntry {
  word: string;
  zh: string;
  syn: string[];
  tags: string;
}

function makeQ(
  dim: Dimension,
  kind: QuizKind,
  stem: string,
  answer: string,
  explanation: string,
  options?: string[],
): QuizQuestion {
  return { id: nanoid(8), kind, stem, answer, explanation, options, word: dim };
}

function findSentenceWithWord(sentences: Sentence[], word: string): Sentence | undefined {
  const re = new RegExp(`\\b${escapeRegExp(word)}\\b`, 'i');
  return sentences.find((s) => re.test(s.en));
}

/* ---- 词汇：同义替换 / 熟词释义 / 拼写纠错 ---- */

function makeVocabSynonym(item: WordEntry, pool: string[]): QuizQuestion | null {
  if (!item.syn.length) return null;
  const correct = item.syn[0];
  const distractors = shuffle(pool.filter((s) => s && s !== correct)).slice(0, 3);
  if (distractors.length < 3) return null;
  return makeQ(
    'vocabulary',
    'choice',
    `「${item.word}」的近义表达是？`,
    correct,
    `「${item.word}」意为「${item.zh}」，近义表达如「${correct}」。`,
    shuffle([correct, ...distractors]),
  );
}

function makeVocabGloss(item: WordEntry, pool: string[]): QuizQuestion | null {
  const distractors = shuffle(pool.filter((s) => s && s !== item.zh)).slice(0, 3);
  if (distractors.length < 3) return null;
  return makeQ(
    'vocabulary',
    'choice',
    item.word,
    item.zh,
    `「${item.word}」的意思是「${item.zh}」。`,
    shuffle([item.zh, ...distractors]),
  );
}

function makeVocabSpelling(item: WordEntry, sentences: Sentence[]): QuizQuestion | null {
  const sent = findSentenceWithWord(sentences, item.word);
  if (!sent) return null;
  const correct = item.word.toLowerCase();
  const wrongs = new Set<string>();
  let guard = 0;
  while (wrongs.size < 3 && guard++ < 60) {
    const m = misspell(correct);
    if (m && m !== correct) wrongs.add(m);
  }
  const distractors = [...wrongs];
  while (distractors.length < 3) distractors.push(correct + 'x' + distractors.length);
  const stem = sent.en.replace(new RegExp(escapeRegExp(item.word), 'i'), distractors[0]);
  return makeQ(
    'vocabulary',
    'correct',
    stem,
    correct,
    `句中单词正确拼写为 ${correct}（${item.zh}）。`,
    shuffle([correct, ...distractors]),
  );
}

function buildVocabQuestions(pool: WordEntry[], sentences: Sentence[], count: number): QuizQuestion[] {
  if (!pool.length) return [];
  const allGloss = pool.flatMap((i) => [i.zh, ...i.syn]).filter(Boolean);
  const styles: Array<'syn' | 'gloss' | 'spell'> = ['syn', 'gloss', 'spell'];
  const qs: QuizQuestion[] = [];
  const used = new Set<string>();
  let si = 0;
  for (const item of pool) {
    if (qs.length >= count) break;
    if (used.has(item.word)) continue;
    const style = styles[si % styles.length];
    si++;
    let q: QuizQuestion | null = null;
    if (style === 'syn') q = makeVocabSynonym(item, allGloss) ?? makeVocabGloss(item, allGloss);
    else if (style === 'spell') q = makeVocabSpelling(item, sentences) ?? makeVocabGloss(item, allGloss);
    else q = makeVocabGloss(item, allGloss);
    if (q) {
      qs.push(q);
      used.add(item.word);
    }
  }
  return qs.slice(0, count);
}

/* ---- 语法：谓语动词个数 / 识别谓语动词（取自 fiveStep） ---- */

function makeCountOptions(cnt: number): string[] {
  const set = new Set<number>([cnt]);
  const cands = [cnt + 1, Math.max(1, cnt - 1), cnt + 2, Math.max(1, cnt - 2), cnt + 3, Math.max(1, cnt - 3)];
  for (const c of cands) {
    if (set.size >= 4) break;
    if (c >= 1) set.add(c);
  }
  while (set.size < 4) set.add(set.size + cnt + 1);
  return shuffle([...set]).map(String);
}

function buildSyntaxQuestions(sentences: Sentence[], count: number): QuizQuestion[] {
  const qs: QuizQuestion[] = [];
  let toggle = 0;
  for (const s of sentences) {
    if (qs.length >= count) break;
    const fs = s.fiveStep;
    if (!fs?.step1?.predicates?.length) continue;
    const preds = fs.step1.predicates;
    const cnt = fs.step1.count ?? preds.filter((p) => p.role === 'predicate').length;
    if (toggle % 2 === 0) {
      qs.push(
        makeQ(
          'syntax',
          'choice',
          '本句共有几个谓语动词？',
          String(cnt),
          `本句谓语动词共 ${cnt} 个（其余为不定式 / 分词 / 介词 / 连词，不作谓语）。`,
          makeCountOptions(cnt),
        ),
      );
    } else {
      const predTexts = preds.filter((p) => p.role === 'predicate').map((p) => p.text);
      const others = preds.filter((p) => p.role !== 'predicate').map((p) => p.text);
      if (predTexts.length && others.length) {
        const correct = predTexts[0];
        const distractors = shuffle(others).slice(0, 3);
        qs.push(
          makeQ(
            'syntax',
            'choice',
            '下列哪个是句中的谓语动词？',
            correct,
            `「${correct}」是本句的谓语动词；其余（${others.join(' / ')}）不作谓语。`,
            shuffle([correct, ...distractors]),
          ),
        );
      } else {
        qs.push(
          makeQ(
            'syntax',
            'choice',
            '本句共有几个谓语动词？',
            String(cnt),
            `本句谓语动词共 ${cnt} 个。`,
            makeCountOptions(cnt),
          ),
        );
      }
    }
    toggle++;
  }
  return qs.slice(0, count);
}

/* ---- 篇章逻辑：连接词填空（however / therefore / but / because） ---- */

const CONNECTORS = ['however', 'therefore', 'but', 'because'] as const;

function connMeaning(conn: string): string {
  switch (conn.toLowerCase()) {
    case 'however':
    case 'but':
      return '转折关系';
    case 'therefore':
      return '因果 / 结果关系';
    case 'because':
      return '原因关系';
    default:
      return '逻辑关系';
  }
}

function buildLogicQuestions(sentences: Sentence[], count: number): QuizQuestion[] {
  const qs: QuizQuestion[] = [];
  for (const conn of CONNECTORS) {
    if (qs.length >= count) break;
    const re = new RegExp(`\\b${conn}\\b`, 'i');
    const sent = sentences.find((s) => re.test(s.en));
    if (!sent) continue;
    const stem = sent.en.replace(re, '______');
    qs.push(
      makeQ(
        'logic',
        'choice',
        stem,
        conn.toLowerCase(),
        `句中此处用 ${conn} 连接，表示${connMeaning(conn)}。`,
        shuffle(['however', 'therefore', 'but', 'because']),
      ),
    );
  }
  return qs.slice(0, count);
}

/* ---- 理解：True / False / Not Given（基于参考译文） ---- */

const NG_EXTRA = [
  '，且这一趋势在未来几年将持续加剧。',
  '，相关技术已在多个国家得到广泛应用。',
  '，其对就业市场的长期影响仍存在争议。',
  '，政策制定者正密切监测相关风险。',
];

function buildComprehensionQuestions(sentences: Sentence[], count: number): QuizQuestion[] {
  const qs: QuizQuestion[] = [];
  for (const s of sentences) {
    if (qs.length >= count) break;
    if (!s.zh) continue;
    const zh = s.zh;
    const roll = Math.floor(Math.random() * 3);
    let statement: string;
    let answer: string;
    let relation: string;
    if (roll === 0) {
      statement = zh;
      answer = '正确';
      relation = '与译文一致，应为正确';
    } else if (roll === 1) {
      statement = '并非' + zh;
      answer = '错误';
      relation = '与译文意思相反，应为错误';
    } else {
      statement = zh + NG_EXTRA[Math.floor(Math.random() * NG_EXTRA.length)];
      answer = '未提及';
      relation = '译文并未提供该信息，应为未提及';
    }
    qs.push(
      makeQ(
        'comprehension',
        'judge',
        `【英文原句】${s.en}\n【陈述】${statement}`,
        answer,
        `原文翻译：「${zh}」。${relation}。`,
        ['正确', '错误', '未提及'],
      ),
    );
  }
  return qs.slice(0, count);
}

/* ---- 翻译：英→中选译文 ---- */

function buildTranslationQuestions(sentences: Sentence[], count: number, zhPool: string[]): QuizQuestion[] {
  const qs: QuizQuestion[] = [];
  for (const s of sentences) {
    if (qs.length >= count) break;
    if (!s.zh) continue;
    const distractors = shuffle(zhPool.filter((z) => z && z !== s.zh)).slice(0, 3);
    if (distractors.length < 3) continue;
    qs.push(
      makeQ(
        'translation',
        'choice',
        s.en,
        s.zh,
        `「${s.en}」的参考译文是「${s.zh}」。`,
        shuffle([s.zh, ...distractors]),
      ),
    );
  }
  return qs.slice(0, count);
}

/* ----------------------------- 组卷 ----------------------------- */

export interface BuildQuizParams {
  articleWords: string[];
  favWords: string[];
  /** 完整句子对象（需要 en / zh / fiveStep），用于语法、篇章、理解、翻译题 */
  sentences?: Sentence[];
  total?: number;
}

/**
 * 组一份 10 题测验，按四个维度（词汇30 / 语法20 / 篇章20 / 理解20 / 翻译10）出题。
 * 必须先 ensureDict()；只出有中文释义（zh 非空）的词，否则跳过。
 * 自动排除 zk/gk/cet4 等基础难度词，优先选 cet6/ky/ielts/toefl/gre。
 * 若某维度数据不足，减少该维度题数（宁少勿滥），但整体仍尽量凑满 10 题。
 */
export async function buildQuiz(params: BuildQuizParams): Promise<QuizQuestion[]> {
  await ensureDict();

  const { articleWords = [], favWords = [], sentences = [], total = 10 } = params;
  void total; // 题量由各维度配额决定，不强制填满

  // 候选词：有释义、且非基础难度（排除 zk/gk/cet4）
  const pool: WordEntry[] = [];
  const seen = new Set<string>();
  for (const raw of [...articleWords, ...favWords]) {
    const clean = raw.replace(/[^A-Za-z'-]/g, '').toLowerCase();
    if (!clean || seen.has(clean)) continue;
    const r = lookupWord(clean);
    if (!r.entry || !r.entry.zh || !r.entry.zh.trim()) continue;
    const tags = r.entry.tags ?? '';
    if (isBasic(tags)) continue; // 太简单，排除
    seen.add(clean);
    pool.push({
      word: clean,
      zh: r.entry.zh.trim(),
      syn: (r.entry.syn ?? '').split(',').map((s) => s.trim()).filter(Boolean),
      tags,
    });
  }
  // 进阶词优先
  pool.sort((a, b) => (isAdvanced(b.tags) ? 1 : 0) - (isAdvanced(a.tags) ? 1 : 0));

  const zhPool = pool.map((p) => p.zh).concat(
    sentences.filter((s) => s.zh).map((s) => s.zh as string),
  );

  const vocab = buildVocabQuestions(pool, sentences, 3);
  const syntax = buildSyntaxQuestions(sentences, 2);
  const logic = buildLogicQuestions(sentences, 2);
  const comp = buildComprehensionQuestions(sentences, 2);
  const trans = buildTranslationQuestions(sentences, 1, zhPool);

  return shuffle([...vocab, ...syntax, ...logic, ...comp, ...trans]);
}

export const QUIZ_KIND_LABEL: Record<QuizKind, string> = {
  choice: '选择',
  judge: '判断',
  correct: '拼写',
};
