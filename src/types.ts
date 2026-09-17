export type Id = string;
export type DisplayMode = 'en' | 'bilingual' | 'zh';
export type SourceType = 'builtin' | 'paste' | 'pdf' | 'local';
export type ExamTag = 'cet4' | 'cet6' | 'ky' | 'ielts' | 'toefl' | 'gre';
export type Difficulty = 1 | 2 | 3 | 4 | 5;

export type ChunkRole = 'S' | 'V' | 'O' | 'C' | 'M' | 'Clause' | 'Appositive' | 'Insert';

export interface Chunk {
  role: ChunkRole;
  text: string;
  start: number;
  end: number;
  note?: string;
}

export interface SentenceAnalysis {
  pattern?: string;
  skeleton?: string;
  chunks: Chunk[];
  notes?: string[];
  generatedBy: 'rule' | 'llm' | 'human';
}

/* ------------------------------------------------------------------ */
/* 长难句五步分析法                                                     */
/*   ① 数谓语动词 ② 找断点 ③ 定主句 ④ 拆修饰 ⑤ 翻译路径                */
/* ------------------------------------------------------------------ */

/** 第1步：动词候选。后三类是必须排除的干扰项 */
export type PredicateRole = 'predicate' | 'nonfinite' | 'preposition' | 'conjunction';

export interface PredicateItem {
  text: string;
  start: number;
  end: number;
  role: PredicateRole;
  /** 中文说明，如「过去分词作定语，不是谓语」 */
  note?: string;
}

export interface BreakPoint {
  /** 断点在原句中的字符位置 */
  pos: number;
  /** 断点标记，如「逗号 + if」「who」 */
  marker: string;
  reason: string;
}

export interface Segment {
  id: Id;
  text: string;
  start: number;
  end: number;
  /** 主句 / 条件状语从句 / 非限定性定语从句 / 名词性从句 / 让步状语从句 … */
  type: string;
  isMain: boolean;
  /** 该段的翻译提示 */
  hint?: string;
}

export interface ParallelGroup {
  /** 平行类型，如「介词短语平行」「谓语动词平行」 */
  kind: string;
  members: string[];
  note?: string;
}

export interface FiveStep {
  step1: { predicates: PredicateItem[]; count: number; summary: string };
  step2: { breaks: BreakPoint[]; summary: string };
  step3: { segments: Segment[]; mainText: string; summary: string };
  step4: { parallels: ParallelGroup[]; modifiers: string[]; summary: string };
  step5: { steps: string[]; summary: string };
  generatedBy: 'rule' | 'human';
}

/* ------------------------------------------------------------------ */
/* 复习：闪卡与小测                                                     */
/* ------------------------------------------------------------------ */

/** 间隔重复卡（正面/背面）。box 越大间隔越长：0→当天，5→约 30 天 */
export interface ReviewCard {
  id: Id;
  kind: FavKind;
  front: string;
  back: string;
  sub?: string;
  articleId?: Id;
  articleTitle?: string;
  sentenceId?: Id;
  box: number;
  /** 下次到期时间戳（ms） */
  due: number;
  right: number;
  wrong: number;
  updatedAt: string;
}

export type QuizKind = 'choice' | 'judge' | 'correct';

export interface QuizQuestion {
  id: Id;
  kind: QuizKind;
  /** 题干；correct 型题干是含错拼的句子 */
  stem: string;
  options?: string[];
  /** choice=选项原文；judge='对'|'错'；correct=正确拼写 */
  answer: string;
  explanation: string;
  /** 该题考查的词 */
  word?: string;
  articleId?: Id;
}

export interface QuizAttempt {
  id: Id;
  articleId?: Id;
  total: number;
  right: number;
  wrongIds: Id[];
  finishedAt: string;
}

export interface Sentence {
  id: Id;
  index: number;
  en: string;
  zh?: string;
  /** 用户自己的翻译，初始为空，用于先自译 / 学完检测 */
  userZh?: string;
  wordCount: number;
  analysis?: SentenceAnalysis;
  /** 五步法拆解（句型分析模块的主体） */
  fiveStep?: FiveStep;
  phrases?: Phrase[];
}

export interface Phrase {
  id: Id;
  text: string;
  zh: string;
  level?: 'common' | 'idiomatic' | 'academic';
  /** 词组类别：短语动词 / 固定搭配 / 习语 / 介词框架 */
  kind?: string;
}

export type HlColor = 'purple' | 'blue' | 'yellow';

export interface Highlight {
  id: Id;
  articleId: Id;
  sentenceId: Id;
  start: number;
  end: number;
  color: HlColor;
}

export type FavKind = 'sentence' | 'word';

export interface FavoriteFolder {
  id: Id;
  name: string;
  kind: FavKind;
  createdAt: string;
}

export interface FavoriteItem {
  id: Id;
  kind: FavKind;
  folderId: Id;
  articleId?: Id;
  sentenceId?: Id;
  articleTitle?: string;
  /** 句子原文 或 单词 */
  text: string;
  /** 句子参考译文 或 单词释义 */
  sub?: string;
  createdAt: string;
}

export interface Paragraph {
  id: Id;
  index: number;
  sentences: Sentence[];
  heading?: string;
}

export interface ArticleMeta {
  tags: string[];
  difficulty: Difficulty;
  wordCount: number;
  sentenceCount: number;
  readMinutes: number;
  license?: string;
  sourceUrl?: string;
}

export interface Article {
  schemaVersion: number;
  id: Id;
  title: string;
  titleZh?: string;
  source: string;
  sourceType: SourceType;
  meta: ArticleMeta;
  paragraphs: Paragraph[];
  createdAt: string;
  updatedAt: string;
}

export interface DictEntry {
  lemma: string;
  ph?: string;
  pos?: string;
  zh: string;
  tags?: string;
  syn?: string;
}

export interface InkPoint {
  x: number;
  y: number;
  p: number;
}

export interface Stroke {
  id: Id;
  tool: 'pen' | 'eraser';
  color: string;
  size: number;
  points: InkPoint[];
}

export interface InkDoc {
  schemaVersion: number;
  articleId: Id;
  baseWidth: number;
  baseHeight: number;
  strokes: Stroke[];
}

export interface Note {
  id: Id;
  text: string;
  rect: { x: number; y: number; w: number; h: number };
  visible: boolean;
  updatedAt: string;
}

export interface AppSettings {
  schemaVersion: number;
  display: DisplayMode;
  fontScale: number;
  ttsRate: number;
  ttsAccent: 'us' | 'uk';
  showPhrases: boolean;
  lastArticleId?: Id;
}

export interface ExportConfig {
  lang: 'en' | 'bilingual' | 'zh';
  includeAnalysis: boolean;
  includePhrases: boolean;
  includeInk: boolean;
  includeNote: boolean;
}

export const SCHEMA_VERSION = 1;
