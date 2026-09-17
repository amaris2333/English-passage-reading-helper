import { useEffect, useState } from 'react';
import { useStore } from '../store';
import { track } from '../lib/analytics';
import { buildQuiz, QUIZ_KIND_LABEL } from '../lib/quiz';
import type { QuizQuestion } from '../types';
import '../styles/review.css';

interface Result {
  q: QuizQuestion;
  userAnswer: string;
  correct: boolean;
}

export function QuizDialog({ onClose }: { onClose: () => void }) {
  const [status, setStatus] = useState<'loading' | 'empty' | 'playing' | 'done'>('loading');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [results, setResults] = useState<Result[]>([]);

  const start = async () => {
    setStatus('loading');
    setIndex(0);
    setSelected(null);
    setAnswered(false);
    setResults([]);

    const { currentId, articles, favItems } = useStore.getState();
    const article = currentId ? articles[currentId] : undefined;
    const sentences: string[] = [];
    const articleWords = new Set<string>();
    if (article) {
      for (const p of article.paragraphs) {
        for (const s of p.sentences) {
          sentences.push(s.en);
          for (const m of s.en.match(/[A-Za-z']+/g) ?? []) articleWords.add(m);
        }
      }
    }
    const favWords = favItems.filter((i) => i.kind === 'word').map((i) => i.text);

    const qs = await buildQuiz({ articleWords: [...articleWords], favWords, sentences });
    if (!qs.length) {
      setStatus('empty');
      return;
    }
    setQuestions(qs);
    setStatus('playing');
    track({ name: 'quiz_start', total: qs.length });
  };

  useEffect(() => {
    void start();
    // 仅在挂载时自动开始一次；「再测一次」由按钮显式触发
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const q = questions[index];

  const choose = (ans: string) => {
    if (answered || !q) return;
    const correct = ans === q.answer;
    setSelected(ans);
    setAnswered(true);
    setResults((r) => [...r, { q, userAnswer: ans, correct }]);
  };

  const next = () => {
    if (!answered) return;
    if (index + 1 >= questions.length) {
      const right = results.filter((r) => r.correct).length;
      track({ name: 'quiz_finish', total: questions.length, right });
      setStatus('done');
    } else {
      setIndex(index + 1);
      setSelected(null);
      setAnswered(false);
    }
  };

  const wrongList = results.filter((r) => !r.correct);
  const rightCount = results.filter((r) => r.correct).length;

  return (
    <div className="modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal quiz-modal">
        <h3>本文小测</h3>

        {status === 'loading' && (
          <div className="quiz-loading">
            <div className="spinner" />
            <p>正在准备测验…（首次使用需联网加载词典，请稍候）</p>
          </div>
        )}

        {status === 'empty' && (
          <div className="review-empty">
            <div className="review-empty-emoji">📝</div>
            <p>暂无可用的测验题目。</p>
            <p className="hint">
              可以：① 在文章中收藏一些单词（点击单词卡里的 ☆）；<br />
              ② 确认词典已加载（首次访问需下载词库）。
            </p>
            <div className="actions">
              <button onClick={() => void start()}>重试</button>
              <button className="primary" onClick={onClose}>关闭</button>
            </div>
          </div>
        )}

        {status === 'playing' && q && (
          <>
            <div className="quiz-progress">
              <span>第 {index + 1} / {questions.length} 题</span>
              <span className="quiz-kind">{QUIZ_KIND_LABEL[q.kind]}</span>
            </div>

            <div className="quiz-body">
              {q.kind === 'choice' && (
                <>
                  <div className="quiz-stem">{q.stem}</div>
                  <div className="quiz-sub">这个词的意思最接近？</div>
                </>
              )}
              {q.kind === 'judge' && (
                <>
                  <div className="quiz-stem">{q.stem}</div>
                  <div className="quiz-sub">这个「单词 — 释义」配对正确吗？</div>
                </>
              )}
              {q.kind === 'correct' && (
                <>
                  <div className="quiz-stem quiz-sentence">{q.stem}</div>
                  <div className="quiz-sub">句中有一个单词拼写不正确，请选择它的正确拼写：</div>
                </>
              )}

              <div className="quiz-options">
                {(q.options ?? []).map((opt) => {
                  let cls = 'quiz-opt';
                  if (answered) {
                    if (opt === q.answer) cls += ' ok';
                    else if (opt === selected) cls += ' bad';
                  }
                  return (
                    <button key={opt} className={cls} disabled={answered} onClick={() => choose(opt)}>
                      {opt}
                    </button>
                  );
                })}
              </div>

              {answered && (
                <div className={`quiz-feedback ${results[index]?.correct ? 'ok' : 'bad'}`}>
                  <div className="quiz-feedback-title">
                    {results[index]?.correct ? '✅ 回答正确' : '❌ 回答错误'}
                  </div>
                  <div className="quiz-feedback-row">正确答案：<b>{q.answer}</b></div>
                  <div className="quiz-feedback-row">{q.explanation}</div>
                </div>
              )}
            </div>

            <div className="actions">
              {answered && (
                <button className="primary" onClick={next}>
                  {index + 1 >= questions.length ? '查看结果' : '下一题'}
                </button>
              )}
              {!answered && <span style={{ flex: 1, fontSize: 12, color: 'var(--text-2)' }}>选择一项即可立即看到解析。</span>}
              <button onClick={onClose}>退出</button>
            </div>
          </>
        )}

        {status === 'done' && (
          <div className="quiz-result">
            <h4>本次测验得分</h4>
            <div className="quiz-score">
              <b>{rightCount}</b> / {questions.length}
            </div>
            {wrongList.length > 0 ? (
              <div className="wrong-list">
                <div className="wrong-title">错题回顾（{wrongList.length} 道）</div>
                {wrongList.map((r, i) => (
                  <div className="wrong-item" key={i}>
                    <div className="wrong-stem">{r.q.stem}</div>
                    <div className="wrong-row">你的答案：<span className="bad">{r.userAnswer}</span></div>
                    <div className="wrong-row">正确答案：<span className="ok">{r.q.answer}</span></div>
                    <div className="wrong-exp">{r.q.explanation}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="hint">全部答对，太棒了！🎉</p>
            )}
            <div className="actions">
              <button onClick={() => void start()}>再测一次</button>
              <button className="primary" onClick={onClose}>关闭</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
