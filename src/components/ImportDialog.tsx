import { useEffect, useRef, useState } from 'react';
import { useStore } from '../store';
import { buildArticle, autoTags, estimateDifficulty, TAG_VOCAB } from '../lib/article';
import { extractPdf } from '../lib/pdf';
import { initNlp } from '../lib/analyze';
import { countWords } from '../lib/split';

type Tab = 'paste' | 'pdf';

export function ImportDialog() {
  const setImportOpen = useStore((s) => s.setImportOpen);
  const addArticle = useStore((s) => s.addArticle);
  const translateArticle = useStore((s) => s.translateArticle);

  const [tab, setTab] = useState<Tab>('paste');
  const [raw, setRaw] = useState('');
  const [title, setTitle] = useState('');
  const [busy, setBusy] = useState(false);
  const [pageInfo, setPageInfo] = useState<{ p: number; total: number }>({ p: 0, total: 0 });
  const [elapsed, setElapsed] = useState(0);
  const [warnings, setWarnings] = useState<string[]>([]);
  const [stage, setStage] = useState<'input' | 'preview'>('input');
  const startRef = useRef(0);

  // 用户一打开导入弹窗就开始预热 NLP（compromise 分块加载），点保存时通常已就绪
  useEffect(() => {
    void initNlp();
  }, []);

  // 解析期间每秒刷新已用时长
  useEffect(() => {
    if (!busy) return;
    const timer = window.setInterval(() => {
      setElapsed(Math.floor((performance.now() - startRef.current) / 1000));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [busy]);

  const detectedTags = raw.trim() ? autoTags(raw) : [];
  const detectedDiff = raw.trim() ? estimateDifficulty(raw) : 3;

  const onFile = async (file: File) => {
    setBusy(true);
    setWarnings([]);
    setElapsed(0);
    setPageInfo({ p: 0, total: 0 });
    startRef.current = performance.now();
    try {
      const res = await extractPdf(file, (p, total) => setPageInfo({ p, total }));
      setRaw(res.paragraphs.join('\n\n'));
      if (!title && res.title) setTitle(res.title);
      if (!title) setTitle(file.name.replace(/\.pdf$/i, ''));
      setWarnings(res.warnings);
      setStage('preview');
    } catch (err) {
      setWarnings([`PDF 解析失败：${String(err)}`]);
    } finally {
      setBusy(false);
    }
  };

  const goPreview = () => {
    if (!raw.trim()) return;
    setStage('preview');
  };

  const save = async () => {
    await initNlp();
    const finalTitle = title.trim() || raw.trim().slice(0, 40) + '…';
    const article = buildArticle(raw, {
      title: finalTitle,
      source: tab === 'pdf' ? 'PDF 导入' : '粘贴导入',
      sourceType: tab === 'pdf' ? 'pdf' : 'paste',
    });
    addArticle(article);
    // 异步触发译文生成：不 await，避免阻塞弹窗关闭
    void translateArticle(article.id);
    setImportOpen(false);
  };

  return (
    <div className="modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) setImportOpen(false); }}>
      <div className="modal">
        <h3>导入文章</h3>

        {stage === 'input' && (
          <>
            <div className="tabs">
              <button className={tab === 'paste' ? 'active' : ''} onClick={() => setTab('paste')}>粘贴文本</button>
              <button className={tab === 'pdf' ? 'active' : ''} onClick={() => setTab('pdf')}>上传 PDF</button>
            </div>

            {tab === 'paste' ? (
              <>
                <div className="row">
                  <label>英文正文（空行分段，系统会自动按句切分）</label>
                  <textarea
                    value={raw}
                    onChange={(e) => setRaw(e.target.value)}
                    placeholder="在此粘贴外刊正文…"
                  />
                </div>
                <div className="hint">约 {countWords(raw)} 词</div>
              </>
            ) : (
              <>
                <div className="row">
                  <label>选择 PDF 文件</label>
                  <input
                    type="file"
                    accept="application/pdf,.pdf"
                    onChange={(e) => { const f = e.target.files?.[0]; if (f) void onFile(f); }}
                  />
                </div>
                <div className="hint">
                  纯本地解析，不会上传任何内容。双栏排版会自动识别，但复杂版面可能顺序有误，导入后可在预览中手动修正。
                </div>
              </>
            )}

            {warnings.map((w, i) => <div className="warn" key={i}>{w}</div>)}

            {busy && (
              <div className="hint" style={{ marginTop: 8 }}>
                {pageInfo.total
                  ? `正在解析 PDF 第 ${pageInfo.p}/${pageInfo.total} 页 · 已用 ${elapsed} 秒`
                  : '正在解析 PDF…'}
                <div className="import-sub">
                  大文件可能需要 1~2 分钟，请耐心等待，期间请不要关闭页面。
                </div>
              </div>
            )}

            <div className="row" style={{ marginTop: 12 }}>
              <label>标题</label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="留空则自动截取首行" style={{ width: '100%' }} />
            </div>

            <div className="actions">
              <button onClick={() => setImportOpen(false)}>取消</button>
              <button className="primary" disabled={!raw.trim()} onClick={goPreview}>下一步：检查分段</button>
            </div>
          </>
        )}

        {stage === 'preview' && (
          <>
            <div className="hint">
              请检查分段是否正确（空行 = 一个段落）。系统已自动识别标签：<b>{detectedTags.join(' / ')}</b>，难度：<b>{detectedDiff}</b>（可在导入后调整）。
            </div>
            <div className="row" style={{ marginTop: 10 }}>
              <label>段落文本（可直接编辑）</label>
              <textarea value={raw} onChange={(e) => setRaw(e.target.value)} style={{ minHeight: 260 }} />
            </div>
            <div className="row">
              <label>标题</label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} style={{ width: '100%' }} />
            </div>
            <div className="hint">预计 {countWords(raw)} 词 · 可选标签：{TAG_VOCAB.join('、')}</div>
            <div className="actions">
              <button onClick={() => setStage('input')}>返回</button>
              <button className="primary" onClick={() => void save()}>保存并开始精读</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
