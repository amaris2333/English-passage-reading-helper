import { useEffect, useRef, useState } from 'react';
import { EXAM_LABEL, lookupWord } from '../lib/lookup';
import { speak } from '../lib/speech';

interface Props {
  word: string;
  anchor: DOMRect;
  sentenceEn?: string;
  rate: number;
  onClose: () => void;
}

export function WordCard({ word, anchor, sentenceEn, rate, onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ top: number; left: number }>({ top: -9999, left: -9999 });
  const result = lookupWord(word);

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
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const entry = result.entry;
  const exams = entry?.tags?.split(',').filter(Boolean) ?? [];
  const syns = entry?.syn?.split(',').map((s) => s.trim()).filter(Boolean) ?? [];

  return (
    <div className="word-card" ref={ref} style={{ top: pos.top, left: pos.left }} onMouseDown={(e) => e.stopPropagation()}>
      <div className="wc-top">
        <span className="wc-word">{result.surface}</span>
        {entry?.ph && <span className="wc-ph">{entry.ph}</span>}
        <button className="icon-btn" title="朗读" onClick={() => speak(result.surface, rate)}>🔊</button>
        <span style={{ flex: 1 }} />
        <button className="icon-btn" title="关闭" onClick={onClose}>✕</button>
      </div>

      {entry ? (
        <>
          <div className="wc-row">
            <div className="wc-label">释义</div>
            <div><span style={{ color: 'var(--text-3)' }}>{entry.pos} </span>{entry.zh}</div>
          </div>
          {exams.length > 0 && (
            <div className="wc-row">
              <div className="wc-label">难度分级</div>
              <div>{exams.map((t) => <span className="exam" key={t}>{EXAM_LABEL[t] ?? t}</span>)}</div>
            </div>
          )}
          {syns.length > 0 && (
            <div className="wc-row">
              <div className="wc-label">同义替换</div>
              <div className="wc-syn">{syns.join(' · ')}</div>
            </div>
          )}
          {result.matchedLemma && result.matchedLemma !== result.surface.toLowerCase() && (
            <div className="wc-row" style={{ fontSize: 11.5, color: 'var(--text-3)' }}>
              原形：{result.matchedLemma}
            </div>
          )}
        </>
      ) : (
        <div className="wc-row wc-miss">
          本地词库未收录该词。可在设置中导入更大的词典，或手动记录到便签。
        </div>
      )}

      {sentenceEn && (
        <div className="wc-sent">
          {sentenceEn.replace(new RegExp(`\\b${result.surface}\\b`, 'i'), '【$&】')}
        </div>
      )}
    </div>
  );
}
