import { useEffect, useRef, useState } from 'react';
import { useStore } from './store';
import { Toolbar } from './components/Toolbar';
import { Sidebar } from './components/Sidebar';
import { Reader } from './components/Reader';
import { StickyNote } from './components/StickyNote';
import { ImportDialog } from './components/ImportDialog';
import { ExportDialog } from './components/ExportDialog';

export default function App() {
  const ready = useStore((s) => s.ready);
  const init = useStore((s) => s.init);
  const articles = useStore((s) => s.articles);
  const currentId = useStore((s) => s.currentId);
  const libraryOpen = useStore((s) => s.libraryOpen);
  const importOpen = useStore((s) => s.importOpen);
  const exportOpen = useStore((s) => s.exportOpen);

  const readerRef = useRef<HTMLDivElement>(null);
  const inkCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [readerEl, setReaderEl] = useState<HTMLDivElement | null>(null);

  useEffect(() => { void init(); }, [init]);
  useEffect(() => { setReaderEl(readerRef.current); }, [ready, currentId]);

  const article = currentId ? articles[currentId] : undefined;

  if (!ready) {
    return <div className="center-msg" style={{ paddingTop: 120 }}>正在加载…</div>;
  }

  return (
    <div className="app">
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
      {exportOpen && <ExportDialog readerEl={readerEl} inkCanvas={inkCanvasRef.current} />}
    </div>
  );
}
