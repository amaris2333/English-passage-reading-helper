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

export interface Phrase {
  id: Id;
  text: string;
  zh: string;
  level?: 'common' | 'idiomatic' | 'academic';
}

export interface Sentence {
  id: Id;
  index: number;
  en: string;
  zh?: string;
  wordCount: number;
  analysis?: SentenceAnalysis;
  phrases?: Phrase[];
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
