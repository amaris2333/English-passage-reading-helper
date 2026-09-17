import { useEffect, useMemo, useState } from 'react';
import type { Sentence } from '../types';
import { buildStructure, ROLE_LABEL } from '../lib/structure';

interface Props {
  sentence: Sentence;
  showPhrases: boolean;
  onUpdate: (patch: Partial<Sentence>) => void;
  onCollapse: () => void;
  onStarSentence: (s: Sentence) => void;
  starred: boolean;
}

export function AnalysisPanel({ sentence, showPhrases, onUpdate, onCollapse, onStarSentence, starred }: Props) {
  const [mine, setMine] = useState(sentence.userZh ?? '');
  const [showRef, setShowRef] = useState(false);
  const a = sentence.analysis;
  const fs = sentence.fiveStep;
  const structure = useMemo(() => buildStructure(sentence), [sentence]);

  // 切换句子时同步输入框
  useEffect(() => {
    setMine(sentence.userZh ?? '');
    setShowRef(false);
  }, [sentence.id]);

  // 自动保存我的翻译
  useEffect(() => {
    if (mine === (sentence.userZh ?? '')) return;
    const t = window.setTimeout(() => onUpdate({ userZh: mine }), 500);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mine]);

  return (
    <div className="panel">
      {/* ===== 模块一：我的翻译（初始空白） ===== */}
      <div className="sec">
        <h4>① 我的翻译</h4>
        <textarea
          className="my-trans"
          value={mine}
          onChange={(e) => setMine(e.target.value)}
          placeholder="先别看参考译文 —— 自己试着翻译这句话，写在这里。学完后再回来对照，检验掌握程度。"
        />
        <div className="panel-actions">
          <button onClick={() => setShowRef((v) => !v)}>
            {showRef ? '隐藏参考译文' : '对照参考译文'}
          </button>
          <button onClick={() => onStarSentence(sentence)}>{starred ? '★ 已收藏' : '☆ 收藏此句'}</button>
          <button onClick={onCollapse}>收起</button>
        </div>
        {showRef && (
          <div className="ref-trans">
            <span className="wc-label">参考译文</span>
            <div>{sentence.zh || '（本文暂无参考译文）'}</div>
          </div>
        )}
      </div>

      {/* ===== 模块二：长难句五步法 ===== */}
      <div className="sec">
        <h4>② 句型分析 · 五步拆解</h4>
        {fs ? (
          <div className="fs-wrap">
            <div className="fs-step">
              <div className="fs-head">
                <span className="fs-no">①</span><b>数谓语动词</b>
                <span className="fs-tag">{fs.step1.count} 件事</span>
              </div>
              <div className="fs-sum">{fs.step1.summary}</div>
              <div className="fs-preds">
                {fs.step1.predicates.map((p, i) => (
                  <span className={`fs-pred fs-${p.role}`} key={i}>
                    {p.text}
                    <em>{p.role === 'predicate' ? '谓语' : p.role === 'nonfinite' ? '非谓语' : '介词'}</em>
                  </span>
                ))}
              </div>
              {fs.step1.predicates.filter((p) => p.note).slice(0, 3).map((p, i) => (
                <div className="fs-note" key={i}>· <b>{p.text}</b> {p.note}</div>
              ))}
            </div>

            <div className="fs-step">
              <div className="fs-head">
                <span className="fs-no">②</span><b>找断点</b>
                <span className="fs-tag">{fs.step2.breaks.length} 处</span>
              </div>
              <div className="fs-sum">{fs.step2.summary}</div>
              {fs.step2.breaks.map((b, i) => (
                <div className="fs-break" key={i}><span className="fs-marker">【{b.marker}】</span>{b.reason}</div>
              ))}
            </div>

            <div className="fs-step">
              <div className="fs-head">
                <span className="fs-no">③</span><b>定主句</b>
                <span className="fs-tag">{fs.step3.segments.length} 段</span>
              </div>
              <div className="fs-sum">{fs.step3.summary}</div>
              {fs.step3.segments.map((sg, i) => (
                <div className={`fs-seg${sg.isMain ? ' main' : ''}`} key={i}>
                  <span className="fs-seg-type">{sg.type}</span>
                  <span className="fs-seg-text">{sg.text}</span>
                  {sg.hint && <div className="fs-seg-hint">{sg.hint}</div>}
                </div>
              ))}
            </div>

            <div className="fs-step">
              <div className="fs-head"><span className="fs-no">④</span><b>拆修饰</b></div>
              <div className="fs-sum">{fs.step4.summary}</div>
              {fs.step4.parallels.map((pl, i) => (
                <div className="fs-par" key={i}>
                  <span className="fs-par-kind">{pl.kind}</span>
                  {pl.members.map((m, j) => <div className="fs-par-m" key={j}>{j + 1}. {m}</div>)}
                  {pl.note && <div className="fs-note">· {pl.note}</div>}
                </div>
              ))}
              {fs.step4.modifiers.map((m, i) => <div className="fs-note" key={i}>· {m}</div>)}
            </div>

            <div className="fs-step">
              <div className="fs-head"><span className="fs-no">⑤</span><b>翻译路径</b></div>
              <div className="fs-sum">{fs.step5.summary}</div>
              {fs.step5.steps.map((t, i) => <div className="fs-tstep" key={i}>{t}</div>)}
            </div>
          </div>
        ) : structure || a ? (
          <>
            {a?.pattern && (
              <div className="struct-label-row">
                <span className="wc-label">句型</span>
                <span style={{ fontSize: 12.5 }}>{a.pattern}</span>
              </div>
            )}
            {structure && (
              <div className="struct">
                <span className="struct-label">句子主干</span>
                <div className="struct-trunk-text">{structure.trunk || '（暂无）'}</div>
                {structure.trunkParts.length > 0 && (
                  <div className="struct-branch">
                    <span className="struct-label">主干成分</span>
                    {structure.trunkParts.map((c, i) => (
                      <div className="struct-item" key={`t${i}`}>
                        <span className="role-tag">{ROLE_LABEL[c.role] ?? c.role}</span>
                        <span>
                          <span className={`chunk-${c.role}`}>{c.text}</span>
                          {c.note && <div className="chunk-note">{c.note}</div>}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
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
            )}
            {a?.skeleton && !structure && <div className="skeleton">主干：{a.skeleton}</div>}
            {a?.notes && a.notes.length > 0 && (
              <div className="struct-branch">
                <span className="struct-label">点拨</span>
                <ul className="notes-list">{a.notes.map((n, i) => <li key={i}>{n}</li>)}</ul>
              </div>
            )}
          </>
        ) : (
          <div style={{ fontSize: 12.5, color: 'var(--text-2)' }}>
            该句暂无预置句型分析（短句或尚未标注）。可点击原文任意单词查询释义。
          </div>
        )}
      </div>

      {/* ===== 模块三：词组与地道表达 ===== */}
      <div className="sec">
        <h4>③ 词组与地道表达</h4>
        {showPhrases && sentence.phrases && sentence.phrases.length > 0 ? (
          sentence.phrases.map((p) => (
            <div className="phrase-item" key={p.id}>
              <b>{p.text}</b>
              {p.kind && <span className="phrase-kind">{p.kind}</span>}
              {' — '}{p.zh}
            </div>
          ))
        ) : (
          <div style={{ fontSize: 12.5, color: 'var(--text-2)' }}>
            该句没有命中词组标准（短语动词 / 固定搭配 / 习语 / 介词框架），不强行凑数。
          </div>
        )}
      </div>
    </div>
  );
}
