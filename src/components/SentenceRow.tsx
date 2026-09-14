import type { Sentence } from '../types';

interface Props {
  sentence: Sentence;
  display: 'en' | 'bilingual' | 'zh';
  focused: boolean;
  dimmed: boolean;
  highlightChunks: boolean;
  onToggle: (sid: string) => void;
  onUpdate: (patch: Partial<Sentence>) => void;
  children?: React.ReactNode;
}

interface Segment {
  text: string;
  role?: string;
}

function buildSegments(sentence: Sentence): Segment[] {
  const chunks = sentence.analysis?.chunks ?? [];
  if (!chunks.length) return [{ text: sentence.en }];
  const sorted = [...chunks]
    .filter((c) => c.end > c.start)
    .sort((a, b) => a.start - b.start);
  const segs: Segment[] = [];
  let cursor = 0;
  for (const c of sorted) {
    if (c.start > cursor) segs.push({ text: sentence.en.slice(cursor, c.start) });
    segs.push({ text: sentence.en.slice(c.start, c.end), role: c.role });
    cursor = Math.max(cursor, c.end);
  }
  if (cursor < sentence.en.length) segs.push({ text: sentence.en.slice(cursor) });
  return segs;
}

export function SentenceRow({
  sentence, display, focused, dimmed, highlightChunks,
  onToggle, onUpdate, children,
}: Props) {
  const showEn = display !== 'zh';
  const showZh = display !== 'en';
  const segs = highlightChunks ? buildSegments(sentence) : [{ text: sentence.en }];

  return (
    <div
      className={`sentence-row${focused ? ' focused' : ''}${dimmed ? ' dim' : ''}`}
      data-sid={sentence.id}
    >
      <span
        className={`tri${focused ? ' on' : ''}`}
        onClick={(e) => { e.stopPropagation(); onToggle(sentence.id); }}
        title={focused ? '收起讲解（Esc）' : '展开讲解：句型拆解 + 重点短语'}
      >
        {focused ? '▼' : '▶'}
      </span>
      <div className="sentence-body">
        {showEn && (
          <div className="sentence-en">
            {segs.map((s, i) =>
              s.role ? (
                <span key={i} className={`chunk-${s.role}`}>{s.text}</span>
              ) : (
                <span key={i}>{s.text}</span>
              ),
            )}
          </div>
        )}
        {showZh && <div className="sentence-zh">{sentence.zh || ''}</div>}
        {focused && children}
      </div>
    </div>
  );
}

export { buildSegments };
