import { useMemo, useState } from 'react';
import type { Sentence } from '../types';
import { buildStructure, ROLE_LABEL } from '../lib/structure';

interface Props {
  sentence: Sentence;
  showPhrases: boolean;
  onUpdate: (patch: Partial<Sentence>) => void;
  onCollapse: () => void;
}

export function AnalysisPanel({ sentence, showPhrases, onUpdate, onCollapse }: Props) {
  const [editing, setEditing] = useState(false);
  const [zh, setZh] = useState(sentence.zh ?? '');
  const a = sentence.analysis;
  const structure = useMemo(() => buildStructure(sentence), [sentence]);

  const saveZh = () => {
    onUpdate({ zh });
    setEditing(false);
  };

  return (
    <div className="panel">
      <div className="sec">
        <h4>结构拆解</h4>
        {structure ? (
          <div className="struct">
            <div className="struct-trunk">
              <span className="struct-label">句子主干</span>
              <div className="struct-trunk-text">{structure.trunk || '（暂无）'}</div>
              {structure.trunkParts.length > 0 && (
                <div className="struct-branch">
                  {structure.trunkParts.map((c, i) => (
                    <div className="struct-item" key={i}>
                      <span className="role-tag">{ROLE_LABEL[c.role] ?? c.role}</span>
                      <span className={`chunk-${c.role}`}>{c.text}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {structure.levels.map((lv) => (
              <div className="struct-branch" key={lv.key}>
                <span className="struct-label">{lv.label}</span>
                {lv.items.map((c, i) => (
                  <div className="struct-item" key={i}>
                    <span className="role-tag">{ROLE_LABEL[c.role] ?? c.role}</span>
                    <span>
                      <span className={`chunk-${c.role}`}>{c.text}</span>
                      {c.note && <div className="chunk-note">{c.note}</div>}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div style={{ fontSize: 12.5, color: 'var(--text-2)' }}>
            该句暂无预置结构拆解（短句或尚未标注）。
          </div>
        )}
      </div>

      <div className="sec">
        <h4>句型分析</h4>
        {a ? (
          <>
            {a.pattern && <div style={{ fontSize: 12.5, color: 'var(--text-2)', marginBottom: 6 }}>{a.pattern}</div>}
            {a.skeleton && <div className="skeleton">{a.skeleton}</div>}
            {a.chunks.map((c, i) => (
              <div className="chunk-item" key={i}>
                <span className="role-tag">{ROLE_LABEL[c.role] ?? c.role}</span>
                <span>
                  <span className={`chunk-${c.role}`}>{c.text}</span>
                  {c.note && <div className="chunk-note">{c.note}</div>}
                </span>
              </div>
            ))}
            {a.notes && a.notes.length > 0 && (
              <ul className="notes-list">
                {a.notes.map((n, i) => <li key={i}>{n}</li>)}
              </ul>
            )}
          </>
        ) : (
          <div style={{ fontSize: 12.5, color: 'var(--text-2)' }}>
            该句暂无预置句法分析（短句或尚未标注）。可点击上方原文任意单词查询释义。
          </div>
        )}
      </div>

      {showPhrases && sentence.phrases && sentence.phrases.length > 0 && (
        <div className="sec">
          <h4>重点短语与地道表达</h4>
          {sentence.phrases.map((p) => (
            <div className="phrase-item" key={p.id}>
              <b>{p.text}</b> — {p.zh}
            </div>
          ))}
        </div>
      )}

      <div className="sec">
        <h4>我的译文</h4>
        {editing ? (
          <>
            <textarea
              value={zh}
              onChange={(e) => setZh(e.target.value)}
              style={{ width: '100%', minHeight: 70, fontFamily: 'inherit', fontSize: 13, lineHeight: 1.7 }}
              placeholder="输入或修正这句的中文译文…"
            />
            <div className="panel-actions">
              <button className="primary" onClick={saveZh}>保存</button>
              <button onClick={() => { setZh(sentence.zh ?? ''); setEditing(false); }}>取消</button>
            </div>
          </>
        ) : (
          <>
            <div style={{ fontSize: 13 }}>{sentence.zh || <span style={{ color: 'var(--text-3)' }}>（暂无译文）</span>}</div>
            <div className="panel-actions">
              <button onClick={() => setEditing(true)}>{sentence.zh ? '编辑译文' : '添加译文'}</button>
              <button onClick={onCollapse}>收起</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
