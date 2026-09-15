import type { Highlight, Sentence } from '../types';
import { buildSegments } from '../lib/highlight';

interface Props {
  sentence: Sentence;
  display: 'en' | 'bilingual' | 'zh';
  focused: boolean;
  dimmed: boolean;
  highlightChunks: boolean;
  highlights: Highlight[];
  starred: boolean;
  onToggle: (sid: string) => void;
  onToggleStar: (sentence: Sentence) => void;
  children?: React.ReactNode;
}

export function SentenceRow({
  sentence, display, focused, dimmed, highlightChunks, highlights,
  starred, onToggle, onToggleStar, children,
}: Props) {
  const showEn = display !== 'zh';
  const showZh = display !== 'en';
  const segs = buildSegments(sentence, { chunks: highlightChunks, highlights });

  return (
    <div
      className={`sentence-row${focused ? ' focused' : ''}${dimmed ? ' dim' : ''}`}
      data-sid={sentence.id}
    >
      <span
        className={`tri${focused ? ' on' : ''}`}
        onClick={(e) => { e.stopPropagation(); onToggle(sentence.id); }}
        title={focused ? '收起讲解（Esc）' : '展开讲解：句型拆解 + 词组表达'}
      >
        {focused ? '▼' : '▶'}
      </span>
      <div className="sentence-body">
        {showEn && (
          <div className="sentence-en">
            {segs.map((s, i) => {
              const cls = [s.role ? `chunk-${s.role}` : '', s.hl ? `hl-${s.hl}` : ''].filter(Boolean).join(' ');
              return cls ? <span key={i} className={cls}>{s.text}</span> : <span key={i}>{s.text}</span>;
            })}
          </div>
        )}
        {showZh && <div className="sentence-zh">{sentence.zh || ''}</div>}
        {focused && children}
      </div>
      <button
        className={`star-btn${starred ? ' on' : ''}`}
        title={starred ? '取消收藏此句' : '收藏此句到「句子收藏」'}
        onClick={(e) => { e.stopPropagation(); onToggleStar(sentence); }}
      >
        {starred ? '★' : '☆'}
      </button>
    </div>
  );
}
