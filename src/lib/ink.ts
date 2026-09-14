import getStroke from 'perfect-freehand';
import type { InkDoc, Stroke } from '../types';

export function toOutline(points: number[][], size: number): number[][] {
  return getStroke(points, {
    size,
    thinning: 0.55,
    smoothing: 0.5,
    streamline: 0.5,
    simulatePressure: false,
    last: true,
  }) as number[][];
}

function outlineToPath(outline: number[][]): Path2D {
  const path = new Path2D();
  if (!outline.length) return path;
  path.moveTo(outline[0][0], outline[0][1]);
  for (let i = 1; i < outline.length; i++) {
    const prev = outline[i - 1];
    const cur = outline[i];
    const midX = (prev[0] + cur[0]) / 2;
    const midY = (prev[1] + cur[1]) / 2;
    if (i === 1) {
      path.lineTo(midX, midY);
    } else {
      path.quadraticCurveTo(prev[0], prev[1], midX, midY);
    }
  }
  const last = outline[outline.length - 1];
  path.lineTo(last[0], last[1]);
  path.closePath();
  return path;
}

export function renderInk(
  ctx: CanvasRenderingContext2D,
  doc: InkDoc,
  width: number,
  height: number,
): void {
  ctx.clearRect(0, 0, width, height);
  for (const s of doc.strokes) {
    const pts = s.points.map((p) => [p.x * width, p.y * height] as number[]);
    if (pts.length === 1) pts.push([pts[0][0] + 0.01, pts[0][1] + 0.01]);
    const outline = toOutline(pts, s.size);
    if (!outline.length) continue;
    ctx.globalCompositeOperation = s.tool === 'eraser' ? 'destination-out' : 'source-over';
    ctx.fillStyle = s.tool === 'eraser' ? '#000' : s.color;
    ctx.fill(outlineToPath(outline));
  }
  ctx.globalCompositeOperation = 'source-over';
}

export function resizeCanvas(canvas: HTMLCanvasElement, cssWidth: number, cssHeight: number): boolean {
  const dpr = window.devicePixelRatio || 1;
  const w = Math.max(1, Math.round(cssWidth * dpr));
  const h = Math.max(1, Math.round(cssHeight * dpr));
  if (canvas.width === w && canvas.height === h) return false;
  canvas.width = w;
  canvas.height = h;
  canvas.style.width = `${cssWidth}px`;
  canvas.style.height = `${cssHeight}px`;
  return true;
}

export function createStroke(tool: 'pen' | 'eraser', color: string, size: number): Stroke {
  return {
    id: `s_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    tool,
    color,
    size,
    points: [],
  };
}

export function emptyInk(articleId: string, baseWidth: number, baseHeight: number): InkDoc {
  return { schemaVersion: 1, articleId, baseWidth, baseHeight, strokes: [] };
}
