import { useEffect, useRef, useState } from 'react';
import { useStore } from '../store';
import { track } from '../lib/analytics';
import { applyGrade, isDue, type Grade } from '../lib/review';
import type { ReviewCard } from '../types';
import '../styles/review.css';

export function ReviewDialog({ onClose }: { onClose: () => void }) {
  const reviewCards = useStore((s) => s.reviewCards);
  const syncReviewCards = useStore((s) => s.syncReviewCards);
  const setReviewCards = useStore((s) => s.setReviewCards);

  const [queue, setQueue] = useState<ReviewCard[]>([]);
  const [dueCount, setDueCount] = useState(0);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [results, setResults] = useState<Grade[]>([]);
  const [finished, setFinished] = useState(false);
  const startedRef = useRef(false);

  // 首次挂载：同步收藏→卡片，构建到期队列
  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    syncReviewCards();
    const cards = useStore.getState().reviewCards;
    const due = cards.filter(isDue);
    setQueue(due);
    setDueCount(due.length);
    track({ name: 'review_open', due: due.length });
  }, [syncReviewCards]);

  const current = queue[index];

  const grade = (g: Grade) => {
    if (!current || finished) return;
    const updated = applyGrade(current, g);
    const all = useStore.getState().reviewCards.map((c) => (c.id === updated.id ? updated : c));
    setReviewCards(all);
    setResults((r) => [...r, g]);
    track({ name: 'review_grade', kind: current.kind, box: updated.box, correct: g === 'remember' });
    setFlipped(false);
    if (index + 1 >= queue.length) setFinished(true);
    else setIndex(index + 1);
  };

  // 键盘：空格翻面；翻面后 1/2/3 对应 忘记/模糊/记住了
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (finished) return;
      if (e.code === 'Space') {
        e.preventDefault();
        setFlipped((f) => !f);
        return;
      }
      if (!flipped) return;
      if (e.key === '1') grade('forget');
      else if (e.key === '2') grade('vague');
      else if (e.key === '3') grade('remember');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [flipped, finished, index, queue, grade]);

  const remembered = results.filter((g) => g === 'remember').length;

  return (
    <div className="modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal review-modal">
        <h3>闪卡复习</h3>

        {queue.length === 0 ? (
          <div className="review-empty">
            {reviewCards.length === 0 ? (
              <>
                <div className="review-empty-emoji">🗂️</div>
                <p>还没有可复习的卡片。</p>
                <p className="hint">先去「收藏夹」收藏一些句子或单词，再来这里复习吧。</p>
              </>
            ) : (
              <>
                <div className="review-empty-emoji">🎉</div>
                <p>今天没有待复习的卡片 🎉</p>
                <p className="hint">已收藏的内容都记得很牢，明天再来看看。</p>
              </>
            )}
            <div className="actions">
              <button className="primary" onClick={onClose}>关闭</button>
            </div>
          </div>
        ) : finished ? (
          <div className="review-summary">
            <div className="review-empty-emoji">🎉</div>
            <h4>本轮复习完成</h4>
            <p>本次复习 <b>{queue.length}</b> 张，记住 <b>{remembered}</b> 张。</p>
            <div className="actions">
              <button className="primary" onClick={onClose}>关闭</button>
            </div>
          </div>
        ) : (
          <>
            <div className="review-progress">
              <span>待复习 {index + 1} / {queue.length}</span>
              <span className="review-due">今日到期 {dueCount} 张</span>
            </div>

            <div className="flashcard">
              {!flipped ? (
                <div
                  className="flashcard-face"
                  onClick={() => setFlipped(true)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setFlipped(true); }}
                >
                  <span className="flashcard-kind">{current.kind === 'word' ? '单词' : '句子'}</span>
                  <div className="flashcard-text">{current.front}</div>
                  <div className="flashcard-hint">点击卡片或按空格翻面</div>
                </div>
              ) : (
                <div className="flashcard-face">
                  <div className="flashcard-text">{current.back}</div>
                  {current.sub && <div className="flashcard-sub">来自：{current.sub}</div>}
                  <div className="grade-btns">
                    <button onClick={() => grade('forget')}>🤔 忘记 <kbd>1</kbd></button>
                    <button onClick={() => grade('vague')}>😐 模糊 <kbd>2</kbd></button>
                    <button className="primary" onClick={() => grade('remember')}>😎 记住了 <kbd>3</kbd></button>
                  </div>
                </div>
              )}
            </div>

            <div className="actions">
              <span style={{ flex: 1, fontSize: 12, color: 'var(--text-2)' }}>
                记住的卡片会拉长复习间隔，忘记的会很快再次出现。
              </span>
              <button onClick={onClose}>退出</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
