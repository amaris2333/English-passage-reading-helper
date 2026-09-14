import type { ExportConfig } from '../types';

function wait(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

function sliceInkIntoParagraphs(canvas: HTMLCanvasElement, readerEl: HTMLElement) {
  const dpr = window.devicePixelRatio || 1;
  const paragraphs = Array.from(readerEl.querySelectorAll<HTMLElement>('[data-pid]'));
  const readerRect = readerEl.getBoundingClientRect();
  const created: HTMLElement[] = [];

  for (const p of paragraphs) {
    const rect = p.getBoundingClientRect();
    const top = (rect.top - readerRect.top) * dpr;
    const height = rect.height * dpr;
    if (height <= 2) continue;
    const slice = document.createElement('canvas');
    slice.width = Math.max(1, Math.round(canvas.width));
    slice.height = Math.max(1, Math.round(height));
    const ctx = slice.getContext('2d');
    if (!ctx) continue;
    ctx.drawImage(canvas, 0, -top);
    const url = slice.toDataURL('image/png');
    if (!url || url.length < 200) continue;

    const holder = document.createElement('div');
    holder.className = 'print-ink-only';
    const img = document.createElement('img');
    img.src = url;
    img.style.width = '100%';
    img.style.cssText += `margin-top:${-rect.height}px;position:relative;`;
    holder.appendChild(img);
    p.appendChild(holder);
    created.push(holder);
  }
  return created;
}

export async function exportToPdf(
  cfg: ExportConfig,
  readerEl: HTMLElement,
  inkCanvas: HTMLCanvasElement | null,
  noteText?: string,
): Promise<void> {
  const body = document.body;
  body.dataset.exportLang = cfg.lang;
  body.dataset.exportAnalysis = cfg.includeAnalysis ? '1' : '0';
  body.dataset.exportPhrases = cfg.includePhrases ? '1' : '0';

  const created: HTMLElement[] = [];
  if (cfg.includeInk && inkCanvas) {
    created.push(...sliceInkIntoParagraphs(inkCanvas, readerEl));
  }
  if (cfg.includeNote && noteText?.trim()) {
    const box = document.createElement('div');
    box.className = 'print-note';
    box.innerHTML = `<h3 style="margin:0 0 8px;font-size:14pt">我的便签</h3>`;
    const pre = document.createElement('div');
    pre.textContent = noteText;
    pre.style.whiteSpace = 'pre-wrap';
    pre.style.fontSize = '10pt';
    box.appendChild(pre);
    readerEl.appendChild(box);
    created.push(box);
  }

  try {
    await document.fonts?.ready;
  } catch {
    /* ignore */
  }
  await wait(120);

  const cleanup = () => {
    created.forEach((el) => el.remove());
    delete body.dataset.exportLang;
    delete body.dataset.exportAnalysis;
    delete body.dataset.exportPhrases;
    window.removeEventListener('afterprint', cleanup);
  };
  window.addEventListener('afterprint', cleanup);
  window.setTimeout(cleanup, 60000);

  window.print();
}

export function downloadText(filename: string, text: string): void {
  const blob = new Blob(['\ufeff' + text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function downloadJson(filename: string, data: string): void {
  const blob = new Blob([data], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
