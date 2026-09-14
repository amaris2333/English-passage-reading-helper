import { useState } from 'react';
import type { Sentence } from '../types';

const ROLE_LABEL: Record<string, string> = {
  S: '主语 S',
  V: '谓语 V',
  O: '宾语 O',
  C: '表/补 C',
  M: '状语 M',
  Clause: '从句',
  Appositive: '同位语',
  Insert: '插入语',
};

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

  const saveZh = () => {
    onUpdate({ zh });
    setEditing(false);
  };

  return (
    <div className="panel">
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
