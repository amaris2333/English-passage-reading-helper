import { useEffect, useRef, useState } from 'react';
import { EXAM_LABEL, lookupWord, ensureDict, dictReady, dictSize } from '../lib/lookup';
import { speak, type Accent } from '../lib/speech';
import { ensureExamples, examplesReady, getExamples } from '../lib/examples';
import { lookupOnline, isLikelyProperNoun, type NetDef } from '../lib/netdict';

interface Props {
  word: string;
  sentenceEn?: string;
  anchor: DOMRect;
  rate: number;
  accent: Accent;
  onAccentChange: (a: Accent) => void;
  starred: boolean;
  onToggleStar: (word: string, zh: string) => void;
  onClose: () => void;
}

export function WordCard({
  word, anchor, sentenceEn, rate, accent, onAccentChange, starred, onToggleStar, onClose,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ top: number; left: number }>({ top: -9999, left: -9999 });
  const [, force] = useState(0);
  const [net, setNet] = useState<NetDef[] | null | undefined>(undefined);

  const result = lookupWord(word);
  const entry = result.entry;
  const netDefs = net;

  useEffect(() => {
    if (!dictReady()) void ensureDict().then(() => force((n) => n + 1));
    if (!examplesReady()) void ensureExamples().then(() => force((n) => n + 1));
  }, [word]);

  // 词典未收录时，联网补一条基础释义（结果只存本机）
  useEffect(() => {
    if (!dictReady() || entry || net !== undefined) return;
    if (isLikelyProperNoun(result.surface, sentenceEn)) return;
    let alive = true;
    void lookupOnline(result.surface).then((d) => {
      if (!alive) return;
      setNet(d ?? null);
      force((n) => n + 1);
    });
    return () => { alive = false; };
  }, [word, entry, net, result.surface]);

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

  const exams = entry?.tags?.split(',').filter(Boolean) ?? [];
  const ready = dictReady();
  const ex = getExamples(result.surface);
  const isProper = !entry && isLikelyProperNoun(result.surface, sentenceEn);

  return (
    <div className="word-card" ref={ref} style={{ top: pos.top, left: pos.left }} onMouseDown={(e) => e.stopPropagation()}>
      <div className="wc-top">
        <span className="wc-word">{result.surface}</span>
        {entry?.ph && (
          <span className="wc-ph">
            /{entry.ph.replace(/^[/]|[/]$/g, '').replace(/^[.·]+|[.·]+$/g, '')}/
          </span>
        )}
        <button className="icon-btn" title="朗读" onClick={() => speak(result.surface, accent, rate)}>🔊</button>
        <button
          className="accent-btn"
          title={accent === 'us' ? '当前：美音（点击切换为英音）' : '当前：英音（点击切换为美音）'}
          onClick={() => onAccentChange(accent === 'us' ? 'uk' : 'us')}
        >
          {accent === 'us' ? '美' : '英'}
        </button>
        <button
          className={`star-btn inline${starred ? ' on' : ''}`}
          title={starred ? '取消收藏此词' : '收藏此词到「单词收藏」'}
          onClick={() => onToggleStar(result.surface, result.senses.map((s) => s.text).join('；') || entry?.zh || '')}
        >
          {starred ? '★' : '☆'}
        </button>
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
            词典词条 {dictSize().toLocaleString()} 条 · 例句来源 Tatoeba (CC BY 2.0 FR)
          </div>
        </>
      ) : (
        <>
          {isProper ? (
            <div className="wc-row">
              这看起来是<b>专有名词</b>（人名 / 地名 / 机构名等），词典一般不会收录，也不影响理解。
              <div style={{ marginTop: 4, color: 'var(--text-3)', fontSize: 12 }}>可点 🔊 听发音，或收藏到便签。</div>
            </div>
          ) : (
            <>
              <div className="wc-row wc-miss">
                本地词库未收录该词。
                {net === undefined && <div style={{ marginTop: 4 }}>正在联网查询基础释义…（最长约 4 秒）</div>}
                {net !== undefined && netDefs == null && <div style={{ marginTop: 4 }}>网络释义也未查到。可点 🔊 听发音，或记录到便签。</div>}
              </div>
              {netDefs && netDefs.length > 0 && (
                <div className="wc-row">
                  <div className="wc-label">网络释义</div>
                  {netDefs.slice(0, 4).map((d, i) => (
                    <div key={i}>
                      {d.pos && <span style={{ color: 'var(--text-3)', marginRight: 4 }}>{d.pos}.</span>}
                      {d.text}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
          {netDefs && netDefs.length > 0 && (
            <div className="wc-row">
              <div className="wc-label">网络释义</div>
              {netDefs.slice(0, 4).map((d, i) => (
                <div key={i}>
                  {d.pos && <span style={{ color: 'var(--text-3)', marginRight: 4 }}>{d.pos}.</span>}
                  {d.text}
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {ex.examples.length > 0 && (
        <div className="wc-sent">
          <div className="wc-label">例句</div>
          {ex.examples.map((s, i) => (
            <div className="wc-eg" key={i}>
              {s.replace(new RegExp(`\\b${result.surface.replace(/[-']/g, '.')}\\w{0,3}\\b`, 'i'), '【$&】')}
            </div>
          ))}
        </div>
      )}
      {!ex.examples.length && ex.definition && (
        <div className="wc-sent">
          <div className="wc-label">英文释义</div>
          <div className="wc-eg">{ex.definition}</div>
        </div>
      )}
    </div>
  );
}
