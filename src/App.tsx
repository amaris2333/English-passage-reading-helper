import { useEffect, useRef, useState } from 'react';
import { useStore } from './store';
import { Toolbar } from './components/Toolbar';
import { Sidebar } from './components/Sidebar';
import { Reader } from './components/Reader';
import { StickyNote } from './components/StickyNote';
import { ImportDialog } from './components/ImportDialog';
import { ExportDialog } from './components/ExportDialog';
import { FavoritesDialog } from './components/FavoritesDialog';

/** 窄屏（手机/竖屏平板）提示：本工具为桌面端设计 */
function MobileNotice() {
  const [dismissed, setDismissed] = useState(() =>
    sessionStorage.getItem('mobile-notice-dismissed') === '1');
  if (dismissed) return null;
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999,
      background: '#fff8e1', borderBottom: '1px solid #f0dfb8',
      padding: '10px 14px', display: 'flex', gap: 10, alignItems: 'flex-start',
      fontFamily: 'system-ui, sans-serif', fontSize: 13, lineHeight: 1.6, color: '#6b5b1e',
    }}>
      <div style={{ flex: 1 }}>
        <b>建议在电脑上使用本工具。</b>
        手机或窄屏下，划词查词、荧光笔、画笔批注等功能无法正常操作。
        所有内容仍可浏览，但完整体验请在桌面浏览器中打开。
      </div>
      <button
        onClick={() => { sessionStorage.setItem('mobile-notice-dismissed', '1'); setDismissed(true); }}
        style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 16, color: '#6b5b1e', padding: '0 4px' }}
        title="关闭提示"
      >✕</button>
    </div>
  );
}

/** 启动加载画面：等待 IndexedDB 文章与词典就绪 */
function BootScreen() {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: 18,
      background: '#f7f6f3', fontFamily: 'system-ui, sans-serif', color: '#333',
    }}>
      <div style={{
        width: 52, height: 52, borderRadius: 12, background: '#4a5d8f',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'Georgia, serif', fontSize: 28, color: '#fff',
      }}>E</div>
      <div style={{ fontSize: 18, fontWeight: 500 }}>英语外刊精读</div>
      <div style={{ width: 180, height: 3, borderRadius: 2, background: '#e2ded4', overflow: 'hidden' }}>
        <div style={{
          width: '40%', height: '100%', background: '#4a5d8f', borderRadius: 2,
          animation: 'boot-slide 1.1s ease-in-out infinite',
        }} />
      </div>
      <div style={{ fontSize: 12.5, color: '#9a9384' }}>
        正在加载文章与词典…（首次访问约需下载 4MB，之后由浏览器缓存）
      </div>
      <style>{`@keyframes boot-slide{0%{margin-left:-40%}100%{margin-left:100%}}`}</style>
    </div>
  );
}

export default function App() {
  const ready = useStore((s) => s.ready);
  const init = useStore((s) => s.init);
  const articles = useStore((s) => s.articles);
  const currentId = useStore((s) => s.currentId);
  const libraryOpen = useStore((s) => s.libraryOpen);
  const importOpen = useStore((s) => s.importOpen);
  const exportOpen = useStore((s) => s.exportOpen);
  const favOpen = useStore((s) => s.favOpen);

  const readerRef = useRef<HTMLDivElement>(null);
  const inkCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [readerEl, setReaderEl] = useState<HTMLDivElement | null>(null);

  useEffect(() => { void init(); }, [init]);
  useEffect(() => { setReaderEl(readerRef.current); }, [ready, currentId]);

  const article = currentId ? articles[currentId] : undefined;

  if (!ready) return <BootScreen />;

  return (
    <div className="app">
      <MobileNotice />
      <Toolbar />
      <div className="main">
        {libraryOpen && <Sidebar />}
        {article ? (
          <Reader article={article} readerRef={readerRef} inkCanvasRef={inkCanvasRef} />
        ) : (
          <div className="center-msg">左侧选择一篇文章，或点击「导入」添加你自己的外刊。</div>
        )}
      </div>

      <StickyNote />
      {importOpen && <ImportDialog />}
      {favOpen && <FavoritesDialog />}
      {exportOpen && <ExportDialog readerEl={readerEl} inkCanvas={inkCanvasRef.current} />}
    </div>
  );
}
