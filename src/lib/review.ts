import type { FavKind, ReviewCard } from '../types';

/** 一天的毫秒数 */
export const DAY = 86_400_000;

/** 间隔重复曲线：索引即 box，单位天。box 越大间隔越长。 */
export const INTERVALS = [0, 1, 2, 4, 7, 15, 30];

/** box 上限（索引 6 → 约 30 天） */
export const MAX_BOX = 6;

export type Grade = 'forget' | 'vague' | 'remember';

/** 根据 box 计算下次到期时间戳 */
export function nextDue(box: number, now: number = Date.now()): number {
  const b = Math.max(0, Math.min(box, INTERVALS.length - 1));
  return now + INTERVALS[b] * DAY;
}

/** 是否到期（可进入本轮复习队列） */
export function isDue(card: ReviewCard, now: number = Date.now()): boolean {
  return card.due <= now;
}

/**
 * 应用一次评分，返回更新后的卡片（不修改入参）。
 * - 记住了：box +1（封顶 MAX_BOX），right+1
 * - 忘记：   box 归零，wrong+1
 * - 模糊：   box 与统计均不变（稍后按原间隔再见面）
 */
export function applyGrade(card: ReviewCard, grade: Grade): ReviewCard {
  let box = card.box;
  let right = card.right;
  let wrong = card.wrong;

  if (grade === 'remember') {
    box = Math.min(box + 1, MAX_BOX);
    right += 1;
  } else if (grade === 'forget') {
    box = 0;
    wrong += 1;
  }
  // 模糊：box / right / wrong 均不变

  return {
    ...card,
    box,
    right,
    wrong,
    due: nextDue(box),
    updatedAt: new Date().toISOString(),
  };
}

/** 由收藏项新建一张初始卡：box=0、立即到期（首次打开即进入队列） */
export function cardFromFavItem(item: {
  id: string;
  kind: FavKind;
  text: string;
  sub?: string;
  articleId?: string;
  articleTitle?: string;
  sentenceId?: string;
}): ReviewCard {
  const now = Date.now();
  return {
    id: item.id,
    kind: item.kind,
    front: item.text,
    back: item.sub ?? '',
    sub: item.articleTitle,
    articleId: item.articleId,
    articleTitle: item.articleTitle,
    sentenceId: item.sentenceId,
    box: 0,
    due: now,
    right: 0,
    wrong: 0,
    updatedAt: new Date(now).toISOString(),
  };
}
