import { useEffect, useRef, useState } from 'react';
import { EXAM_LABEL, lookupWord, ensureDict, dictReady, dictSize } from '../lib/lookup';
import { speak, type Accent } from '../lib/speech';

interface Props {
  word: string;
  anchor: DOMRect;
  sentenceEn?: string;
  rate: number;
  accent: Accent;
  onAccentChange: (a: Accent) => void;
  onClose: () => void;
}

export function WordCard({ word, anchor, sentenceEn, rate, accent, onAccentChange, onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ top: number; left: number }>({ top: -9999, left: -9999 });
  const [, force] = useState(0);

  useEffect(() => {
    if (!dictReady()) void ensureDict().then(() => force((n) => n + 1));
  }, [word]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    let left = anchor.left;
    let top = anchor.bottom + 8;
    if (left + w > window.innerWidth - 12) left = window.innerWidth - w - 12;
    if (left < 12) left = 12;
    if (top + h > window.innerHeight - 12) top = anchor.top - h - 8;
    if (top < 12) top = 12;
    setPos({ top, left });
  }, [anchor, word]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const result = lookupWord(word);
  const entry = result.entry;
  const exams = entry?.tags?.split(',').filter(Boolean) ?? [];
  const ready = dictReady();

  return (
    <div className="word-card" ref={ref} style={{ top: pos.top, left: pos.left }} onMouseDown={(e) => e.stopPropagation()}>
      <div className="wc-top">
        <span className="wc-word">{result.surface}</span>
        {entry?.ph && <span className="wc-ph">/{entry.ph.replace(/^[/]|[/]$/g, '')}/</span>}
        <button className="icon-btn" title="朗读" onClick={() => speak(result.surface, accent, rate)}>🔊</button>
        <div className="seg" style={{ marginLeft: 2 }}>
          <button className={accent === 'us' ? 'on' : ''} onClick={() => onAccentChange('us')} style={{ padding: '1px 6px', fontSize: 11 }}>美</button>
          <button className={accent === 'uk' ? 'on' : ''} onClick={() => onAccentChange('uk')} style={{ padding: '1px 6px', fontSize: 11 }}>英</button>
        </div>
        <span style={{ flex: 1 }} />
        <button className="icon-btn" title="关闭" onClick={onClose}>✕</button>
      </div>

      {!ready ? (
        <div className="wc-row wc-miss">词典加载中…（首次约 2MB，之后浏览器缓存）</div>
      ) : entry ? (
        <>
          <div className="wc-row">
            <div className="wc-label">释义</div>
            {result.senses.length ? (
              result.senses.map((s, i) => (
                <div key={i}>
                  {s.pos && <span style={{ color: 'var(--text-3)', marginRight: 4 }}>{s.pos}.</span>}
                  {s.text}
                </div>
              ))
            ) : (
              <div>{entry.zh}</div>
            )}
          </div>
          {exams.length > 0 && (
            <div className="wc-row">
              <div className="wc-label">难度分级</div>
              <div>{exams.map((t) => <span className="exam" key={t}>{EXAM_LABEL[t] ?? t}</span>)}</div>
            </div>
          )}
          {result.synonyms.length > 0 && (
            <div className="wc-row">
              <div className="wc-label">同义替换</div>
              <div className="wc-syn">{result.synonyms.join(' · ')}</div>
            </div>
          )}
          {result.matchedLemma && result.matchedLemma !== result.surface.toLowerCase() && (
            <div className="wc-row" style={{ fontSize: 11.5, color: 'var(--text-3)' }}>
              原形：{result.matchedLemma}
            </div>
          )}
          <div className="wc-row" style={{ fontSize: 11, color: 'var(--text-3)' }}>
            词典词条 {dictSize().toLocaleString()} 条
          </div>
        </>
      ) : (
        <div className="wc-row wc-miss">未收录该词。可点 🔊 听发音，或记录到便签。</div>
      )}

      {sentenceEn && (
        <div className="wc-sent">
          {sentenceEn.replace(new RegExp(`\\b${result.surface.replace(/[-']/g, '.')}\\b`, 'i'), '【$&】')}
        </div>
      )}
    </div>
  );
}
