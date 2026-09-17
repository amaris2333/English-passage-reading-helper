/**
 * 埋点：只记录「行为」，从不记录用户内容。
 *
 * 明确不采集：用户译文（userZh）、笔记正文、收藏的具体词句、任何输入框内容。
 * 只采集：事件名 + 少量数值/枚举属性（如文章 id、句子序号、是否查到词）。
 *
 * 配置方式见 src/config.ts。未配置 Key 时全部为 no-op，网站照常运行。
 */

/** 允许上报的事件与属性（白名单，防止误传用户内容） */
export type AnalyticsEvent =
  | { name: 'app_open' }
  | { name: 'article_open'; articleId: string; source: string }
  | { name: 'article_import'; source: 'pdf' | 'paste'; sentenceCount: number }
  | { name: 'import_fail'; source: 'pdf' | 'paste'; reason: string }
  | { name: 'sentence_expand'; articleId: string; sentenceIndex: number; wordCount: number }
  | { name: 'word_lookup'; found: boolean; proper: boolean; length: number }
  | { name: 'translation_write'; articleId: string; sentenceIndex: number; length: number }
  | { name: 'analysis_generate_all'; articleId: string; sentenceCount: number }
  | { name: 'favorite_add'; kind: 'sentence' | 'word' }
  | { name: 'highlight_add'; color: string }
  | { name: 'note_save'; length: number }
  | { name: 'export_pdf'; lang: string; includeInk: boolean }
  | { name: 'review_open'; due: number }
  | { name: 'review_grade'; kind: 'word' | 'sentence'; box: number; correct: boolean }
  | { name: 'quiz_start'; total: number }
  | { name: 'quiz_finish'; total: number; right: number }
  | { name: 'error_boundary'; message: string };

let enabled = false;
let impl: ((e: AnalyticsEvent) => void) | null = null;

/** 由 PostHog 初始化流程注入真实实现；未注入时保持 no-op */
export function setAnalyticsSink(fn: ((e: AnalyticsEvent) => void) | null): void {
  impl = fn;
  enabled = !!fn;
}

export function analyticsEnabled(): boolean {
  return enabled;
}

/** 上报一个事件。任何异常都被吞掉——埋点绝不能影响主流程 */
export function track(event: AnalyticsEvent): void {
  if (!impl) return;
  try {
    impl(event);
  } catch {
    /* 静默失败 */
  }
}

/** 长文本一律只上报长度，绝不外传原文 */
export function textLength(s?: string): number {
  return s ? s.length : 0;
}
