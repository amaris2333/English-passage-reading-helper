import { useEffect, useRef, useState } from 'react';
import { useStore } from '../store';
import type { Note } from '../types';
import { downloadText } from '../lib/export';

const DEFAULT_NOTE: Note = {
  id: 'main-note',
  text: '',
  rect: { x: 60, y: 62, w: 22, h: 30 },
  visible: false,
  updatedAt: new Date().toISOString(),
};

function stamp(): string {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}_${p(d.getHours())}${p(d.getMinutes())}`;
}

export function StickyNote() {
  const notes = useStore((s) => s.notes);
  const saveNote = useStore((s) => s.saveNote);
  const visible = useStore((s) => s.noteVisible);
  const setVisible = useStore((s) => s.setNoteVisible);

  const note = notes.find((n) => n.id === DEFAULT_NOTE.id) ?? DEFAULT_NOTE;
  const [text, setText] = useState(note.text);
  const [rect, setRect] = useState(note.rect);
  const drag = useRef<{ mode: 'move' | 'resize' | null; sx: number; sy: number; orig: typeof note.rect }>({ mode: null, sx: 0, sy: 0, orig: rect });

  useEffect(() => {
    const n = notes.find((x) => x.id === DEFAULT_NOTE.id);
    if (n) {
      setText(n.text);
      setRect(n.rect);
    }
  }, [notes]);

  useEffect(() => {
    if (!visible) return;
    const t = window.setTimeout(() => {
      saveNote({ ...note, text, rect, updatedAt: new Date().toISOString() });
    }, 600);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, rect, visible]);

  if (!visible) return null;

  const onDown = (mode: 'move' | 'resize') => (e: React.PointerEvent) => {
    e.preventDefault();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    drag.current = { mode, sx: e.clientX, sy: e.clientY, orig: { ...rect } };
  };

  const onMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d.mode) return;
    const dxPct = ((e.clientX - d.sx) / window.innerWidth) * 100;
    const dyPct = ((e.clientY - d.sy) / window.innerHeight) * 100;
    if (d.mode === 'move') {
      setRect({
        ...d.orig,
        x: Math.min(92, Math.max(0, d.orig.x + dxPct)),
        y: Math.min(88, Math.max(0, d.orig.y + dyPct)),
      });
    } else {
      setRect({
        ...d.orig,
        w: Math.min(90, Math.max(16, d.orig.w + dxPct)),
        h: Math.min(90, Math.max(18, d.orig.h + dyPct)),
      });
    }
  };

  const onUp = () => { drag.current.mode = null; };

  return (
    <div
      className="sticky"
      style={{
        left: `${rect.x}vw`,
        top: `${rect.y}vh`,
        width: `${rect.w}vw`,
        height: `${rect.h}vh`,
      }}
      onPointerMove={onMove}
      onPointerUp={onUp}
    >
      <div className="sticky-head" onPointerDown={onDown('move')}>
        <span>便签</span>
        <span className="spacer" />
        <button className="icon-btn" title="保存到本地 txt" onClick={() => downloadText(`外刊精读笔记_${stamp()}.txt`, text)}>⭳</button>
        <button className="icon-btn" title="清空" onClick={() => { if (window.confirm('清空便签内容？')) setText(''); }}>⌫</button>
        <button className="icon-btn" title="关闭" onClick={() => setVisible(false)}>✕</button>
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="在此记录短语、灵感、疑问…（纯文本）&#10;点击 ⭳ 可保存为本地 .txt 文件"
        onPaste={(e) => {
          e.preventDefault();
          const t = e.clipboardData.getData('text/plain');
          setText((prev) => prev + t);
        }}
      />
      <div className="sticky-resize" onPointerDown={onDown('resize')} />
    </div>
  );
}
