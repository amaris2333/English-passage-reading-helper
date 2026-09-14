import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useStore } from '../store';
import type { Article, Sentence } from '../types';
import { difficultyLabel } from '../lib/article';
import { getWordRangeAtPoint } from '../lib/lookup';
import { SentenceRow } from './SentenceRow';
import { AnalysisPanel } from './AnalysisPanel';
import { WordCard } from './WordCard';
import { InkLayer } from './InkLayer';

interface Props {
  article: Article;
  readerRef: React.RefObject<HTMLDivElement>;
  inkCanvasRef: React.MutableRefObject<HTMLCanvasElement | null>;
}

interface WordPop {
  word: string;
  rect: DOMRect;
  sentenceEn?: string;
}

export function Reader({ article, readerRef, inkCanvasRef }: Props) {
  const display = useStore((s) => s.settings.display);
  const showPhrases = useStore((s) => s.settings.showPhrases);
  const fontScale = useStore((s) => s.settings.fontScale);
  const ttsRate = useStore((s) => s.settings.ttsRate);
  const focusId = useStore((s) => s.focusSentenceId);
  const setFocus = useStore((s) => s.setFocus);
  const updateSentence = useStore((s) => s.updateSentence);
  const editMode = useStore((s) => s.editMode);
  const setEditMode = useStore((s) => s.setEditMode);
  const penColor = useStore((s) => s.penColor);
  const penSize = useStore((s) => s.penSize);
  const eraserSize = useStore((s) => s.eraserSize);

  const [pop, setPop] = useState<WordPop | null>(null);
  const pendingScroll = useRef<{ id: string; top: number } | null>(null);
  const downPos = useRef<{ x: number; y: number } | null>(null);

  const focusedParagraphId = focusId ? article.paragraphs.find((p) => p.sentences.some((s) => s.id === focusId))?.id : undefined;

  const toggle = useCallback((sid: string) => {
    const el = document.querySelector<HTMLElement>(`[data-sid="${sid}"]`);
    const top = el ? el.getBoundingClientRect().top : 0;
    pendingScroll.current = { id: sid, top };
    setFocus(focusId === sid ? null : sid);
  }, [focusId, setFocus]);

  useLayoutEffect(() => {
    const p = pendingScroll.current;
    if (!p) return;
    pendingScroll.current = null;
    const el = document.querySelector<HTMLElement>(`[data-sid="${p.id}"]`);
    if (!el) return;
    const newTop = el.getBoundingClientRect().top;
    const delta = newTop - p.top;
    if (Math.abs(delta) > 1) window.scrollBy({ top: delta, behavior: 'auto' });
  }, [focusId]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setFocus(null);
        setPop(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setFocus]);

  useEffect(() => { setPop(null); }, [article.id]);

  const onPointerDownCapture = (e: React.PointerEvent) => {
    downPos.current = { x: e.clientX, y: e.clientY };
  };

  const onPointerUpCapture = (e: React.PointerEvent) => {
    if (editMode !== 'off') return;
    const d = downPos.current;
    downPos.current = null;
    if (!d) return;
    if (Math.abs(e.clientX - d.x) > 4 || Math.abs(e.clientY - d.y) > 4) return;
    const target = e.target as HTMLElement;
    if (target.closest('button, textarea, input, .word-card, .tri')) return;
    const sel = window.getSelection();
    if (sel && !sel.isCollapsed) return;
    const hit = getWordRangeAtPoint(e.clientX, e.clientY);
    if (!hit) { setPop(null); return; }
    const row = document.elementFromPoint(e.clientX, e.clientY)?.closest('[data-sid]');
    const sid = row?.getAttribute('data-sid');
    const sentence = sid ? article.paragraphs.flatMap((p) => p.sentences).find((s) => s.id === sid) : undefined;
    setPop({ word: hit.word, rect: hit.rect, sentenceEn: sentence?.en });
  };

  const patch = (s: Sentence) => (p: Partial<Sentence>) => updateSentence(article.id, s.id, p);

  const meta = article.meta;

  return (
    <div className="reader-wrap" onPointerDown={onPointerDownCapture} onPointerUp={onPointerUpCapture}>
      <div className="reader" ref={readerRef} style={{ ['--fs' as string]: fontScale }}>
        <InkLayer
          articleId={article.id}
          containerRef={readerRef}
          editMode={editMode}
          penColor={penColor}
          penSize={penSize}
          eraserSize={eraserSize}
          canvasRef={inkCanvasRef}
          onExit={() => setEditMode('off')}
        />

        <div className="article-head">
          <h1>{article.title}</h1>
          {article.titleZh && <div className="zh">{article.titleZh}</div>}
          <div className="meta-row">
            {meta.tags.map((t) => <span className="badge" key={t}>{t}</span>)}
            <span className={`badge diff-${meta.difficulty}`}>{difficultyLabel(meta.difficulty)}</span>
            <span className="badge gray">总词数 {meta.wordCount.toLocaleString()} 词</span>
            <span className="badge gray">{meta.sentenceCount} 句</span>
            <span className="badge gray">预计阅读 {meta.readMinutes} 分钟</span>
            <span className="badge gray">来源：{article.source}</span>
          </div>
        </div>

        {article.paragraphs.map((p) => {
          const hidden = !!focusedParagraphId && p.id !== focusedParagraphId;
          return (
            <div
              className="paragraph"
              key={p.id}
              data-pid={p.id}
              style={hidden ? { display: 'none' } : undefined}
            >
              {p.heading && <div className="paragraph-heading">{p.heading}</div>}
              {p.sentences.map((s) => {
                const focused = s.id === focusId;
                const dimmed = !!focusId && !focused;
                return (
                  <SentenceRow
                    key={s.id}
                    sentence={s}
                    display={display}
                    focused={focused}
                    dimmed={dimmed}
                    highlightChunks={focused}
                    onToggle={toggle}
                    onUpdate={patch(s)}
                  >
                    {focused && (
                      <AnalysisPanel
                        sentence={s}
                        showPhrases={showPhrases}
                        onUpdate={patch(s)}
                        onCollapse={() => setFocus(null)}
                      />
                    )}
                  </SentenceRow>
                );
              })}
            </div>
          );
        })}

        {!article.paragraphs.length && <div className="center-msg">这篇文章还没有内容。</div>}
      </div>

      {pop && (
        <WordCard
          word={pop.word}
          anchor={pop.rect}
          sentenceEn={pop.sentenceEn}
          rate={ttsRate}
          onClose={() => setPop(null)}
        />
      )}
    </div>
  );
}
