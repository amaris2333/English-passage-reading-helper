import { useCallback, useEffect, useRef, useState } from 'react';
import type { InkDoc, InkPoint, Stroke } from '../types';
import { emptyInk, renderInk, resizeCanvas, createStroke } from '../lib/ink';
import { loadInk, saveInk } from '../lib/storage';
import { useStore, type EditMode } from '../store';

interface Props {
  articleId: string;
  containerRef: React.RefObject<HTMLDivElement>;
  editMode: EditMode;
  penColor: string;
  penSize: number;
  eraserSize: number;
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>;
  onExit: () => void;
}

const COLORS = ['#e53935', '#1e1e1e', '#1e63c8'];

export function InkLayer({
  articleId, containerRef, editMode, penColor, penSize, eraserSize, canvasRef, onExit,
}: Props) {
  const setPenColor = useStore((s) => s.setPenColor);
  const setEditModeStore = useStore((s) => s.setEditMode);
  const setPenSizeStore = useStore((s) => s.setPenSize);
  const setEraserSizeStore = useStore((s) => s.setEraserSize);

  const [doc, setDoc] = useState<InkDoc>(() => emptyInk(articleId, 1000, 1000));
  const drawing = useRef<Stroke | null>(null);
  const docRef = useRef(doc);
  docRef.current = doc;

  const paint = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    resizeCanvas(canvas, container.offsetWidth, container.offsetHeight);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    const dpr = window.devicePixelRatio || 1;
    ctx.scale(dpr, dpr);
    renderInk(ctx, docRef.current, container.offsetWidth, container.offsetHeight);
  }, [canvasRef, containerRef]);

  useEffect(() => {
    let cancelled = false;
    void loadInk(articleId).then((d) => {
      if (cancelled) return;
      setDoc(d ?? emptyInk(articleId, containerRef.current?.offsetWidth ?? 1000, containerRef.current?.offsetHeight ?? 1000));
    });
    return () => { cancelled = true; };
  }, [articleId, containerRef]);

  useEffect(() => { paint(); }, [doc, paint, editMode]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let timer: number | undefined;
    const ro = new ResizeObserver(() => {
      window.clearTimeout(timer);
      timer = window.setTimeout(paint, 150);
    });
    ro.observe(container);
    return () => { ro.disconnect(); window.clearTimeout(timer); };
  }, [containerRef, paint]);

  const toPoint = (e: React.PointerEvent): InkPoint | null => {
    const container = containerRef.current;
    if (!container) return null;
    const rect = container.getBoundingClientRect();
    return {
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
      p: e.pressure || 0.5,
    };
  };

  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (editMode === 'off') return;
    e.preventDefault();
    (e.target as HTMLCanvasElement).setPointerCapture(e.pointerId);
    const tool = editMode === 'eraser' ? 'eraser' : 'pen';
    const size = tool === 'eraser' ? eraserSize : penSize;
    drawing.current = createStroke(tool, penColor, size);
    const p = toPoint(e);
    if (p) drawing.current.points.push(p);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const s = drawing.current;
    if (!s) return;
    e.preventDefault();
    const p = toPoint(e);
    if (!p) return;
    const last = s.points[s.points.length - 1];
    if (last && Math.abs(last.x - p.x) < 0.0004 && Math.abs(last.y - p.y) < 0.0004) return;
    s.points.push(p);
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    renderInk(ctx, { ...docRef.current, strokes: [...docRef.current.strokes, s] }, container.offsetWidth, container.offsetHeight);
  };

  const finish = () => {
    const s = drawing.current;
    drawing.current = null;
    if (!s || s.points.length === 0) return;
    const container = containerRef.current;
    const next: InkDoc = {
      ...docRef.current,
      baseWidth: container?.offsetWidth ?? docRef.current.baseWidth,
      baseHeight: container?.offsetHeight ?? docRef.current.baseHeight,
      strokes: [...docRef.current.strokes, s],
    };
    setDoc(next);
    void saveInk(next);
  };

  const onPointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawing.current) return;
    e.preventDefault();
    finish();
  };

  const undo = () => {
    if (!doc.strokes.length) return;
    const next = { ...doc, strokes: doc.strokes.slice(0, -1) };
    setDoc(next);
    void saveInk(next);
  };

  const clear = () => {
    if (!doc.strokes.length) return;
    if (!window.confirm('确定清空本文的所有笔迹吗？此操作不可撤销。')) return;
    const next = { ...doc, strokes: [] };
    setDoc(next);
    void saveInk(next);
  };

  return (
    <>
      {editMode !== 'off' && (
        <div className="ink-toolbar no-print">
          <strong style={{ fontSize: 12.5 }}>编辑模式</strong>
          <div style={{ display: 'flex', gap: 6 }}>
            {COLORS.map((c) => (
              <span
                key={c}
                className={`swatch${penColor === c && editMode === 'pen' ? ' on' : ''}`}
                style={{ background: c }}
                onClick={() => { setPenColor(c); setEditModeStore('pen'); }}
                title="选择颜色"
              />
            ))}
          </div>
          <button className={editMode === 'pen' ? 'active' : ''} onClick={() => setEditModeStore('pen')}>画笔</button>
          <button className={editMode === 'eraser' ? 'active' : ''} onClick={() => setEditModeStore('eraser')}>橡皮</button>
          <label style={{ fontSize: 12, display: 'flex', alignItems: 'center', gap: 4 }}>
            粗细
            <input
              type="range"
              min={1}
              max={24}
              value={editMode === 'eraser' ? eraserSize : penSize}
              onChange={(e) => {
                const v = Number(e.target.value);
                if (editMode === 'eraser') setEraserSizeStore(v);
                else setPenSizeStore(v);
              }}
              style={{ width: 80 }}
            />
          </label>
          <button onClick={undo} disabled={!doc.strokes.length}>撤销</button>
          <button onClick={clear} disabled={!doc.strokes.length}>清空</button>
          <span style={{ flex: 1 }} />
          <span style={{ fontSize: 12, color: 'var(--text-2)' }}>已记录 {doc.strokes.length} 笔</span>
          <button className="primary" onClick={onExit}>退出编辑</button>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className={`ink-layer${editMode === 'off' ? ' off' : ''}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      />
    </>
  );
}
