import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useStore } from '../store';
import type { Article, Highlight, Sentence } from '../types';
import { difficultyLabel, pendingAnalysisCount, TAG_VOCAB } from '../lib/article';
import { getWordRangeAtPoint } from '../lib/lookup';
import { caretInfo, rangeToHighlights, findSentence } from '../lib/highlight';
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
  sentenceId?: string;
  sentenceEn?: string;
}

const NO_HIGHLIGHTS: Highlight[] = [];

export function Reader({ article, readerRef, inkCanvasRef }: Props) {
  const display = useStore((s) => s.settings.display);
  const showPhrases = useStore((s) => s.settings.showPhrases);
  const fontScale = useStore((s) => s.settings.fontScale);
  const ttsRate = useStore((s) => s.settings.ttsRate);
  const ttsAccent = useStore((s) => s.settings.ttsAccent);
  const setTtsAccent = useStore((s) => s.setTtsAccent);
  const focusId = useStore((s) => s.focusSentenceId);
  const setFocus = useStore((s) => s.setFocus);
  const updateSentence = useStore((s) => s.updateSentence);
  const editMode = useStore((s) => s.editMode);
  const setEditMode = useStore((s) => s.setEditMode);
  const penColor = useStore((s) => s.penColor);
  const penSize = useStore((s) => s.penSize);
  const eraserSize = useStore((s) => s.eraserSize);
  const hlColor = useStore((s) => s.hlColor);
  const highlights = useStore((s) => s.highlights[article.id] ?? NO_HIGHLIGHTS);
  const addHighlights = useStore((s) => s.addHighlights);
  const removeHighlightAt = useStore((s) => s.removeHighlightAt);
  const favItems = useStore((s) => s.favItems);
  const toggleFavorite = useStore((s) => s.toggleFavorite);
  const customTags = useStore((s) => s.customTags);
  const allArticles = useStore((s) => s.articles);
  const toggleArticleTag = useStore((s) => s.toggleArticleTag);
  const generateAnalysis = useStore((s) => s.generateAnalysis);
  const analyzing = useStore((s) => s.analyzing);
  const [tagPickerOpen, setTagPickerOpen] = useState(false);

  const [pop, setPop] = useState<WordPop | null>(null);
  const [preview, setPreview] = useState<Highlight[]>([]);
  const pendingScroll = useRef<{ id: string; top: number } | null>(null);
  const downPos = useRef<{ x: number; y: number } | null>(null);
  const hlDrag = useRef<{ sid: string; off: number } | null>(null);

  const focusedParagraphId = focusId
    ? article.paragraphs.find((p) => p.sentences.some((s) => s.id === focusId))?.id
    : undefined;

  const hlBySentence = useMemo(() => {
    const map: Record<string, Highlight[]> = {};
    for (const h of [...highlights, ...preview]) (map[h.sentenceId] ||= []).push(h);
    return map;
  }, [highlights, preview]);

  const starredSet = useMemo(() => {
    const set = new Set<string>();
    for (const i of favItems) if (i.kind === 'sentence' && i.sentenceId) set.add(i.sentenceId);
    return set;
  }, [favItems]);

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
    const delta = el.getBoundingClientRect().top - p.top;
    if (Math.abs(delta) > 1) window.scrollBy({ top: delta, behavior: 'auto' });
  }, [focusId]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setFocus(null); setPop(null); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setFocus]);

  useEffect(() => { setPop(null); setPreview([]); setTagPickerOpen(false); }, [article.id]);

  const onToggleStarSentence = useCallback((s: Sentence) => {
    toggleFavorite({
      kind: 'sentence',
      articleId: article.id,
      sentenceId: s.id,
      articleTitle: article.title,
      text: s.en,
      sub: s.zh,
    });
  }, [article, toggleFavorite]);

  // ---------- 荧光笔 ----------
  const onHlDown = (e: React.PointerEvent) => {
    if (editMode !== 'highlight') return;
    const hit = caretInfo(e.clientX, e.clientY);
    if (!hit) return;
    e.preventDefault();
    hlDrag.current = hit;
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      /* 某些环境不支持指针捕获，忽略 */
    }
    setPreview([]);
  };

  const onHlMove = (e: React.PointerEvent) => {
    if (editMode !== 'highlight' || !hlDrag.current) return;
    const hit = caretInfo(e.clientX, e.clientY);
    if (!hit) return;
    setPreview(rangeToHighlights(article, hlDrag.current, hit, hlColor));
  };

  const onHlUp = (e: React.PointerEvent) => {
    if (editMode !== 'highlight') return;
    const start = hlDrag.current;
    if (!start) return;
    hlDrag.current = null;
    const hit = caretInfo(e.clientX, e.clientY) ?? start;
    const list = rangeToHighlights(article, start, hit, hlColor);
    if (list.length) {
      addHighlights(article.id, list);
    } else {
      // 零长度 = 单击（pointerdown 里 preventDefault 后浏览器不再派发 click），走擦除
      removeHighlightAt(article.id, start.sid, start.off);
    }
    setPreview([]);
  };

  // ---------- 单词卡（普通模式） ----------
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
    const sid = row?.getAttribute('data-sid') ?? undefined;
    const sentence = sid ? findSentence(article, sid) : undefined;
    setPop({ word: hit.word, rect: hit.rect, sentenceId: sid, sentenceEn: sentence?.en });
  };

  const patch = (s: Sentence) => (p: Partial<Sentence>) => updateSentence(article.id, s.id, p);
  const meta = article.meta;
  const pending = useMemo(() => pendingAnalysisCount(article), [article]);
  const availableTags = useMemo(() => {
    const set = new Set<string>([...TAG_VOCAB, ...customTags]);
    Object.values(allArticles).forEach((a) => a.meta.tags.forEach((t) => set.add(t)));
    return Array.from(set);
  }, [allArticles, customTags]);
  const popStarred = pop ? favItems.some((i) => i.kind === 'word' && i.text.toLowerCase() === pop.word.toLowerCase()) : false;

  return (
    <div
      className={`reader-wrap${editMode === 'highlight' ? ' hl-mode' : ''}`}
      onPointerDown={onPointerDownCapture}
      onPointerUp={onPointerUpCapture}
    >
      <div
        className="reader"
        ref={readerRef}
        style={{ ['--fs' as string]: fontScale }}
        onPointerDown={onHlDown}
        onPointerMove={onHlMove}
        onPointerUp={onHlUp}
      >
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
            {meta.tags.map((t) => (
              <span className="badge editable" key={t} title="点击移除该标签" onClick={() => toggleArticleTag(article.id, t)}>
                {t}<b className="tag-x">×</b>
              </span>
            ))}
            <span className="badge gray add-tag" title="给这篇文章添加标签" onClick={() => setTagPickerOpen((v) => !v)}>＋ 标签</span>
            {!meta.tags.length && <span className="badge gray">未分类</span>}
            <span className={`badge diff-${meta.difficulty}`}>{difficultyLabel(meta.difficulty)}</span>
            <span className="badge gray">总词数 {meta.wordCount.toLocaleString()} 词</span>
            <span className="badge gray">{meta.sentenceCount} 句</span>
            <span className="badge gray">预计阅读 {meta.readMinutes} 分钟</span>
            <span className="badge gray">来源：{article.source}</span>
          </div>

          {tagPickerOpen && (
            <div className="tag-picker">
              <span className="ts">给本文添加标签：</span>
              {availableTags.map((t) => (
                <span
                  key={t}
                  className={`tag-chip${meta.tags.includes(t) ? ' on' : ''}`}
                  onClick={() => toggleArticleTag(article.id, t)}
                >
                  {meta.tags.includes(t) ? '✓ ' : ''}{t}
                </span>
              ))}
              {!availableTags.length && <span className="ts">还没有可选标签，请先在左侧新建。</span>}
            </div>
          )}

          {meta.license && <div className="license-line">授权：{meta.license}</div>}
        </div>

        {pending > 0 && (
          <div className="analysis-bar no-print">
            <span>
              本文共 {meta.sentenceCount} 句，已分析 <b>{meta.sentenceCount - pending}</b> 句，还有 <b>{pending}</b> 句待生成。
            </span>
            <button className="primary" disabled={analyzing} onClick={() => void generateAnalysis(article.id)}>
              {analyzing ? '正在生成…' : '生成整篇句子分析'}
            </button>
          </div>
        )}
        {analyzing && <div className="analysis-bar no-print">正在分析整篇文章，请稍候…</div>}

        {article.paragraphs.map((p) => {
          const hidden = !!focusedParagraphId && p.id !== focusedParagraphId;
          return (
            <div className="paragraph" key={p.id} data-pid={p.id} style={hidden ? { display: 'none' } : undefined}>
              {p.heading && <div className="paragraph-heading">{p.heading}</div>}
              {p.sentences.map((s) => {
                const focused = s.id === focusId;
                return (
                  <SentenceRow
                    key={s.id}
                    sentence={s}
                    display={display}
                    focused={focused}
                    dimmed={!!focusId && !focused}
                    highlightChunks={focused}
                    highlights={hlBySentence[s.id] ?? []}
                    starred={starredSet.has(s.id)}
                    onToggle={toggle}
                    onToggleStar={onToggleStarSentence}
                  >
                    {focused && (
                      <AnalysisPanel
                        sentence={s}
                        showPhrases={showPhrases}
                        onUpdate={patch(s)}
                        onCollapse={() => setFocus(null)}
                        onStarSentence={onToggleStarSentence}
                        starred={starredSet.has(s.id)}
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
          sentenceEn={pop.sentenceEn}
          anchor={pop.rect}
          rate={ttsRate}
          accent={ttsAccent}
          onAccentChange={setTtsAccent}
          onClose={() => setPop(null)}
          starred={popStarred}
          onToggleStar={(word, zh) => toggleFavorite({
            kind: 'word',
            articleId: article.id,
            sentenceId: pop.sentenceId,
            articleTitle: article.title,
            text: word,
            sub: zh,
          })}
        />
      )}
    </div>
  );
}
