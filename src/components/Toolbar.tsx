import { useRef, useState } from 'react';
import { useStore } from '../store';
import { clearAll, exportBackup, importBackup } from '../lib/storage';
import { downloadJson } from '../lib/export';

export function Toolbar() {
  const display = useStore((s) => s.settings.display);
  const setDisplay = useStore((s) => s.setDisplay);
  const fontScale = useStore((s) => s.settings.fontScale);
  const setFontScale = useStore((s) => s.setFontScale);
  const editMode = useStore((s) => s.editMode);
  const toggleEditMode = useStore((s) => s.toggleEditMode);
  const setImportOpen = useStore((s) => s.setImportOpen);
  const setExportOpen = useStore((s) => s.setExportOpen);
  const setFavOpen = useStore((s) => s.setFavOpen);
  const favCount = useStore((s) => s.favItems.length);
  const noteVisible = useStore((s) => s.noteVisible);
  const setNoteVisible = useStore((s) => s.setNoteVisible);
  const libraryOpen = useStore((s) => s.libraryOpen);
  const setLibraryOpen = useStore((s) => s.setLibraryOpen);

  const [settingsOpen, setSettingsOpen] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const [msg, setMsg] = useState('');

  return (
    <>
      <div className="toolbar no-print">
        <button className="icon" title="显示/隐藏文章列表" onClick={() => setLibraryOpen(!libraryOpen)}>☰</button>
        <span className="brand">英语外刊精读</span>

        <div className="seg">
          <button className={display === 'en' ? 'on' : ''} onClick={() => setDisplay('en')}>全英文</button>
          <button className={display === 'bilingual' ? 'on' : ''} onClick={() => setDisplay('bilingual')}>中英对照</button>
          <button className={display === 'zh' ? 'on' : ''} onClick={() => setDisplay('zh')}>仅中文</button>
        </div>

        <button onClick={() => setImportOpen(true)}>导入</button>
        <button className={editMode !== 'off' ? 'active' : ''} onClick={toggleEditMode}>
          {editMode !== 'off' ? '编辑中' : '编辑模式'}
        </button>
        <button className={noteVisible ? 'active' : ''} onClick={() => setNoteVisible(!noteVisible)}>便签</button>
        <button onClick={() => setFavOpen(true)}>收藏夹{favCount > 0 ? `（${favCount}）` : ''}</button>

        <span className="spacer" />

        <button className="icon" title="缩小字号" onClick={() => setFontScale(Math.max(0.85, +(fontScale - 0.1).toFixed(2)))}>A−</button>
        <button className="icon" title="放大字号" onClick={() => setFontScale(Math.min(1.6, +(fontScale + 0.1).toFixed(2)))}>A+</button>
        <button onClick={() => setSettingsOpen(true)}>设置</button>
        <button className="primary" onClick={() => setExportOpen(true)}>导出 PDF</button>
      </div>

      {settingsOpen && (
        <div className="modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) setSettingsOpen(false); }}>
          <div className="modal" style={{ width: 460 }}>
            <h3>设置与数据</h3>
            <div className="hint">
              所有数据都保存在本机浏览器（IndexedDB）中，不会上传。建议定期备份。
            </div>

            <div className="row" style={{ marginTop: 12 }}>
              <label>朗读语速：{useStore.getState().settings.ttsRate.toFixed(2)}</label>
              <input
                type="range" min={0.5} max={1.4} step={0.05}
                defaultValue={useStore.getState().settings.ttsRate}
                onChange={(e) => useStore.getState().setTtsRate(Number(e.target.value))}
                style={{ width: '100%' }}
              />
            </div>

            <label className="checkbox-row">
              <input
                type="checkbox"
                defaultChecked={useStore.getState().settings.showPhrases}
                onChange={(e) => useStore.getState().setShowPhrases(e.target.checked)}
              />
              在讲解面板中显示重点短语
            </label>

            <div className="actions" style={{ justifyContent: 'flex-start' }}>
              <button onClick={async () => {
                const json = await exportBackup();
                downloadJson(`外刊精读备份_${new Date().toISOString().slice(0, 10)}.json`, json);
                setMsg('备份已下载');
              }}>备份全部数据</button>
              <button onClick={() => fileRef.current?.click()}>恢复备份</button>
              <button onClick={async () => {
                if (!window.confirm('确定清空本机所有文章、笔迹与便签吗？建议先备份。')) return;
                await clearAll();
                location.reload();
              }}>清空所有数据</button>
            </div>

            <input
              ref={fileRef}
              type="file"
              accept="application/json,.json"
              style={{ display: 'none' }}
              onChange={async (e) => {
                const f = e.target.files?.[0];
                if (!f) return;
                try {
                  const n = await importBackup(await f.text());
                  setMsg(`已恢复 ${n} 篇文章，即将刷新…`);
                  setTimeout(() => location.reload(), 800);
                } catch (err) {
                  setMsg(`恢复失败：${String(err)}`);
                }
              }}
            />

            {msg && <div className="hint" style={{ marginTop: 10 }}>{msg}</div>}

            <div className="actions">
              <button className="primary" onClick={() => setSettingsOpen(false)}>关闭</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
