import { nanoid } from 'nanoid';
import type { Article, Paragraph, Sentence, Difficulty } from '../types';
import { countWords, splitParagraphs, splitSentences } from './split';
import { analyzeSentence } from './analyze';
import { extractPhrases } from './phrases';
import { analyzeFiveStep } from './fivestep';
import { SCHEMA_VERSION } from '../types';

export const TAG_VOCAB = [
  '人工智能',
  '生物医药',
  '环境气候',
  '商业经济',
  '科技互联网',
  '心理与社会',
  '文化教育',
  '国际政治',
] as const;

const TAG_KEYWORDS: Record<string, string[]> = {
  人工智能: [
    'artificial intelligence', 'machine learning', 'deep learning', 'neural network', 'algorithm',
    'transformer', 'large language model', 'llm', 'gpt', 'training data', 'inference', 'chatbot',
    'automation', 'robot', 'model', 'ai ', 'openai', 'benchmark', 'compute',
  ],
  生物医药: [
    'gene', 'genome', 'dna', 'rna', 'protein', 'cell', 'enzyme', 'vaccine', 'virus', 'bacteria',
    'crispr', 'mutation', 'drug', 'clinical trial', 'patient', 'disease', 'immune', 'cancer',
    'therapy', 'biology', 'organism', 'species', 'protein', 'antibody',
  ],
  环境气候: [
    'climate', 'carbon', 'emission', 'greenhouse', 'warming', 'fossil fuel', 'renewable',
    'deforestation', 'biodiversity', 'ecosystem', 'pollution', 'drought', 'flood', 'glacier',
    'sustainability', 'energy', 'solar', 'wind power', 'temperature',
  ],
  商业经济: [
    'market', 'economy', 'economic', 'inflation', 'revenue', 'profit', 'invest', 'stock',
    'company', 'firm', 'industry', 'trade', 'tariff', 'supply chain', 'consumer', 'price',
    'growth', 'gdp', 'bank', 'startup', 'merger', 'valuation',
  ],
  科技互联网: [
    'internet', 'software', 'platform', 'smartphone', 'chip', 'semiconductor', 'cloud',
    'smartphone', 'app', 'digital', 'smartphone', 'smartphone', 'cyber', 'data center',
    'smartphone', 'browser', 'social media', 'smartphone', 'device', 'network',
  ],
  心理与社会: [
    'psychology', 'behaviour', 'behavior', 'society', 'social', 'inequality', 'poverty',
    'wellbeing', 'mental health', 'cognition', 'memory', 'emotion', 'identity', 'culture',
    'community', 'demographic', 'survey', 'attitude',
  ],
  文化教育: [
    'education', 'school', 'university', 'student', 'teacher', 'curriculum', 'learning',
    'literacy', 'art', 'literature', 'museum', 'language', 'history', 'heritage', 'media',
    'publishing', 'book',
  ],
  国际政治: [
    'government', 'policy', 'election', 'parliament', 'congress', 'president', 'minister',
    'treaty', 'sanction', 'diplomacy', 'war', 'conflict', 'military', 'regulation', 'law',
    'legislation', 'court', 'vote', 'campaign', 'nation',
  ],
};

export function autoTags(text: string): string[] {
  const lower = text.toLowerCase();
  const scored: Array<[string, number]> = [];
  for (const [tag, words] of Object.entries(TAG_KEYWORDS)) {
    let n = 0;
    for (const w of words) {
      if (lower.includes(w)) n += 1;
    }
    if (n > 0) scored.push([tag, n]);
  }
  scored.sort((a, b) => b[1] - a[1]);
  const tags = scored.slice(0, 3).map(([t]) => t);
  return tags.length ? tags : ['未分类'];
}

export function estimateDifficulty(text: string): Difficulty {
  const sentences = splitSentences(text);
  if (!sentences.length) return 2;
  const words = countWords(text);
  const avgLen = words / sentences.length;
  const longWords = (text.match(/[A-Za-z]{9,}/g) ?? []).length;
  const longRatio = longWords / Math.max(1, words);
  const clauseDensity = (text.match(/,|\bwhich\b|\bthat\b|\balthough\b|\bwhereas\b/gi) ?? []).length / sentences.length;

  let score = 0;
  if (avgLen > 14) score += 1;
  if (avgLen > 20) score += 1;
  if (avgLen > 26) score += 1;
  if (longRatio > 0.12) score += 1;
  if (longRatio > 0.2) score += 1;
  if (clauseDensity > 1.6) score += 1;

  const d = Math.min(5, Math.max(1, 1 + Math.round(score * 0.8))) as Difficulty;
  return d;
}

export function difficultyLabel(d: Difficulty): string {
  if (d <= 2) return '入门';
  if (d === 3) return '进阶';
  if (d === 4) return '挑战';
  return '高阶';
}

export function buildSentences(paragraphText: string, articleId: string, pIdx: number): Sentence[] {
  return splitSentences(paragraphText).map((en, i) => ({
    id: `${articleId}-p${pIdx}-s${i}`,
    index: i,
    en,
    wordCount: countWords(en),
  }));
}

export function flattenSentences(article: Article): Sentence[] {
  return article.paragraphs.flatMap((p) => p.sentences);
}

/** 导入时只分析第一句：先让用户看到"能拆"，再决定要不要花时间跑全篇 */
export function analyzeFirstSentenceOnly(article: Article): Article {
  let done = false;
  const paragraphs = article.paragraphs.map((p) => ({
    ...p,
    sentences: p.sentences.map((s) => {
      if (done || s.analysis) return s;
      done = true;
      return { ...s, analysis: analyzeSentence(s.en), fiveStep: analyzeFiveStep(s.en), phrases: extractPhrases(s.en) };
    }),
  }));
  return { ...article, paragraphs };
}

/** 生成整篇的句子分析 */
export function analyzeWholeArticle(article: Article): Article {
  const paragraphs = article.paragraphs.map((p) => ({
    ...p,
    sentences: p.sentences.map((s) =>
      s.analysis ? { ...s, fiveStep: s.fiveStep ?? analyzeFiveStep(s.en) } : { ...s, analysis: analyzeSentence(s.en), fiveStep: analyzeFiveStep(s.en), phrases: extractPhrases(s.en) },
    ),
  }));
  return { ...article, paragraphs };
}

export function pendingAnalysisCount(article: Article): number {
  return flattenSentences(article).filter((s) => !s.analysis).length;
}

export interface BuildOptions {
  title: string;
  titleZh?: string;
  source?: string;
  sourceType?: 'builtin' | 'paste' | 'pdf';
  tags?: string[];
  difficulty?: Difficulty;
  license?: string;
}

export function buildArticle(rawText: string, opts: BuildOptions): Article {
  const id = nanoid(10);
  const paragraphTexts = splitParagraphs(rawText);
  const paragraphs: Paragraph[] = paragraphTexts.map((t, pIdx) => ({
    id: `${id}-p${pIdx}`,
    index: pIdx,
    sentences: buildSentences(t, id, pIdx),
  }));

  const flat = rawText;
  const wordCount = countWords(flat);
  const sentenceCount = paragraphs.reduce((n, p) => n + p.sentences.length, 0);

  return {
    schemaVersion: SCHEMA_VERSION,
    id,
    title: opts.title || '未命名文章',
    titleZh: opts.titleZh,
    source: opts.source ?? '导入',
    sourceType: opts.sourceType ?? 'paste',
    meta: {
      tags: opts.tags ?? autoTags(flat),
      difficulty: opts.difficulty ?? estimateDifficulty(flat),
      wordCount,
      sentenceCount,
      readMinutes: Math.max(1, Math.ceil(wordCount / 200)),
      license: opts.license,
    },
    paragraphs,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

export function recalcMeta(article: Article): Article {
  const flat = article.paragraphs.map((p) => p.sentences.map((s) => s.en).join(' ')).join(' ');
  const wordCount = countWords(flat);
  const sentenceCount = article.paragraphs.reduce((n, p) => n + p.sentences.length, 0);
  return {
    ...article,
    meta: {
      ...article.meta,
      wordCount,
      sentenceCount,
      readMinutes: Math.max(1, Math.ceil(wordCount / 200)),
    },
  };
}
