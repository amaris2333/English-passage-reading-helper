import { useState } from 'react';
import { useStore } from '../store';
import { exportToPdf } from '../lib/export';
import type { ExportConfig } from '../types';

interface Props {
  readerEl: HTMLElement | null;
  inkCanvas: HTMLCanvasElement | null;
}

export function ExportDialog({ readerEl, inkCanvas }: Props) {
  const setExportOpen = useStore((s) => s.setExportOpen);
  const notes = useStore((s) => s.notes);
  const setFocus = useStore((s) => s.setFocus);
  const [cfg, setCfg] = useState<ExportConfig>({
    lang: 'bilingual',
    includeAnalysis: false,
    includePhrases: true,
    includeInk: true,
    includeNote: false,
  });

  const noteText = notes.find((n) => n.id === 'main-note')?.text ?? '';

  const run = async () => {
    if (!readerEl) return;
    setFocus(null);
    await new Promise((r) => setTimeout(r, 120));
    await exportToPdf(cfg, readerEl, inkCanvas, noteText);
    setExportOpen(false);
  };

  return (
    <div className="modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) setExportOpen(false); }}>
      <div className="modal" style={{ width: 480 }}>
        <h3>导出 PDF</h3>

        <div className="row">
          <label>内容语言</label>
          <div className="seg">
            <button className={cfg.lang === 'en' ? 'on' : ''} onClick={() => setCfg({ ...cfg, lang: 'en' })}>仅英文</button>
            <button className={cfg.lang === 'bilingual' ? 'on' : ''} onClick={() => setCfg({ ...cfg, lang: 'bilingual' })}>双语对照</button>
            <button className={cfg.lang === 'zh' ? 'on' : ''} onClick={() => setCfg({ ...cfg, lang: 'zh' })}>仅中文</button>
          </div>
        </div>

        <label className="checkbox-row">
          <input type="checkbox" checked={cfg.includeInk} onChange={(e) => setCfg({ ...cfg, includeInk: e.target.checked })} />
          包含我的手写批注
        </label>
        <label className="checkbox-row">
          <input type="checkbox" checked={cfg.includeAnalysis} onChange={(e) => setCfg({ ...cfg, includeAnalysis: e.target.checked })} />
          包含已展开句子的句法分析
        </label>
        <label className="checkbox-row">
          <input type="checkbox" checked={cfg.includePhrases} onChange={(e) => setCfg({ ...cfg, includePhrases: e.target.checked })} />
          包含重点短语
        </label>
        <label className="checkbox-row">
          <input type="checkbox" checked={cfg.includeNote} onChange={(e) => setCfg({ ...cfg, includeNote: e.target.checked })} />
          在文末附上便签内容
        </label>

        <div className="hint" style={{ marginTop: 10 }}>
          点击导出后，浏览器会弹出打印窗口，请在「目标打印机 / 目的地」中选择 <b>另存为 PDF</b>。
          这样导出的 PDF 是矢量的，文字可选中、可搜索。
        </div>

        <div className="actions">
          <button onClick={() => setExportOpen(false)}>取消</button>
          <button className="primary" onClick={() => void run()}>导出</button>
        </div>
      </div>
    </div>
  );
}
