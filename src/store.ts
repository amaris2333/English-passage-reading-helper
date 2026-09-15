import { create } from 'zustand';
import { nanoid } from 'nanoid';
import type {
  AppSettings, Article, Note, Sentence,
  Highlight, HlColor, FavoriteFolder, FavoriteItem, FavKind,
} from './types';
import { ATLAS_ARTICLES, ATLAS_IDS } from './data/atlas';
import { ensureDict } from './lib/lookup';
import { ensureExamples } from './lib/examples';
import { initNlp } from './lib/analyze';
import { analyzeFirstSentenceOnly, analyzeWholeArticle, recalcMeta, TAG_VOCAB } from './lib/article';
import {
  DEFAULT_SETTINGS,
  loadArticles,
  loadNotes,
  loadSettings,
  saveArticles,
  saveNotes,
  saveSettings,
  loadCustomTags,
  saveCustomTags,
  loadHighlights,
  saveHighlights,
  loadFavFolders,
  saveFavFolders,
  loadFavItems,
  saveFavItems,
} from './lib/storage';

export type EditMode = 'off' | 'pen' | 'eraser' | 'highlight';

interface AppState {
  ready: boolean;
  articles: Record<string, Article>;
  order: string[];
  currentId: string | null;
  settings: AppSettings;
  notes: Note[];
  noteVisible: boolean;

  focusSentenceId: string | null;
  editMode: EditMode;
  penColor: string;
  penSize: number;
  eraserSize: number;
  hlColor: HlColor;
  highlights: Record<string, Highlight[]>;

  favFolders: FavoriteFolder[];
  favItems: FavoriteItem[];
  favOpen: boolean;
  activeFolder: Partial<Record<FavKind, string>>;

  customTags: string[];
  addCustomTag: (name: string) => void;
  removeCustomTag: (name: string) => void;
  toggleArticleTag: (articleId: string, tag: string) => void;

  analyzing: boolean;
  generateAnalysis: (articleId: string) => Promise<void>;

  libraryOpen: boolean;
  importOpen: boolean;
  exportOpen: boolean;

  init: () => Promise<void>;
  initHighlightsFor: (articleId: string) => Promise<void>;
  selectArticle: (id: string) => void;
  setDisplay: (d: AppSettings['display']) => void;
  setFontScale: (v: number) => void;
  setTtsRate: (v: number) => void;
  setTtsAccent: (v: 'us' | 'uk') => void;
  setShowPhrases: (v: boolean) => void;
  addArticle: (a: Article) => void;
  updateArticle: (a: Article) => void;
  removeArticle: (id: string) => void;
  updateSentence: (articleId: string, sentenceId: string, patch: Partial<Sentence>) => void;
  setFocus: (id: string | null) => void;
  setEditMode: (m: EditMode) => void;
  toggleEditMode: () => void;
  setPenColor: (c: string) => void;
  setPenSize: (n: number) => void;
  setEraserSize: (n: number) => void;
  setHlColor: (c: HlColor) => void;

  addHighlights: (articleId: string, list: Highlight[]) => void;
  removeHighlightAt: (articleId: string, sentenceId: string, off: number) => void;
  clearHighlights: (articleId: string) => void;

  addFolder: (kind: FavKind, name: string) => string;
  renameFolder: (id: string, name: string) => void;
  removeFolder: (id: string) => void;
  setActiveFolder: (kind: FavKind, id: string) => void;
  ensureFolder: (kind: FavKind) => string;
  toggleFavorite: (item: Omit<FavoriteItem, 'id' | 'folderId' | 'createdAt'>) => boolean;
  removeFavorite: (id: string) => void;
  moveFavorite: (id: string, folderId: string) => void;
  isFavorited: (kind: FavKind, key: string) => boolean;
  setFavOpen: (v: boolean) => void;

  setLibraryOpen: (v: boolean) => void;
  setImportOpen: (v: boolean) => void;
  setExportOpen: (v: boolean) => void;
  saveNote: (n: Note) => void;
  setNoteVisible: (v: boolean) => void;
}

let saveTimer: number | undefined;

function persistArticles(articles: Record<string, Article>) {
  window.clearTimeout(saveTimer);
  saveTimer = window.setTimeout(() => void saveArticles(articles), 400);
}

/** 收藏项的去重键：句子用 sentenceId，单词用小写形式 */
export function favKey(kind: FavKind, text: string, sentenceId?: string): string {
  return kind === 'sentence' ? `s:${sentenceId ?? text}` : `w:${text.toLowerCase()}`;
}

export const useStore = create<AppState>((set, get) => ({
  ready: false,
  articles: {},
  order: [],
  currentId: null,
  settings: DEFAULT_SETTINGS,
  notes: [],
  noteVisible: false,

  focusSentenceId: null,
  editMode: 'off',
  penColor: '#e53935',
  penSize: 3,
  eraserSize: 18,
  hlColor: 'yellow',
  highlights: {},

  favFolders: [],
  favItems: [],
  favOpen: false,
  activeFolder: {},

  customTags: [],
  analyzing: false,

  libraryOpen: true,
  importOpen: false,
  exportOpen: false,

  init: async () => {
    const [articles, settings, notes, favFolders, favItems, customTags] = await Promise.all([
      loadArticles(), loadSettings(), loadNotes(), loadFavFolders(), loadFavItems(), loadCustomTags(),
    ]);
    // 内置范例（公共领域素材）在版本升级时会覆盖旧副本，保证内容与分析同步更新
    const seeded = { ...articles };
    let changed = false;
    for (const s of ATLAS_ARTICLES) {
      const old = seeded[s.id];
      if (!old || old.updatedAt !== s.updatedAt) {
        seeded[s.id] = s;
        changed = true;
      }
    }
    // 清掉历史遗留的内置/本地文章：这些范例已从代码库移除，但副本可能还留在本机 IndexedDB 里。
    // 只清 builtin / local，用户自己导入的（paste / pdf）一律保留。
    for (const [id, a] of Object.entries(seeded)) {
      if ((a.sourceType === 'builtin' || a.sourceType === 'local') && !ATLAS_IDS.has(id)) {
        delete seeded[id];
        changed = true;
      }
    }
    if (changed) await saveArticles(seeded);

    const order = Object.values(seeded).sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)).map((a) => a.id);
    const currentId = settings.lastArticleId && seeded[settings.lastArticleId] ? settings.lastArticleId : order[0] ?? null;

    set({ ready: true, articles: seeded, order, settings, notes, currentId, favFolders, favItems, customTags });
    void ensureDict().then(() => {
      // 例句库延后 1.5s 再拉，让词典（点词时立即需要）优先下载
      window.setTimeout(() => void ensureExamples(), 1500);
    });
    void initNlp();
    if (currentId) void get().initHighlightsFor(currentId);
  },

  initHighlightsFor: async (articleId: string) => {
    const list = await loadHighlights(articleId);
    set({ highlights: { ...get().highlights, [articleId]: list } });
  },

  selectArticle: (id) => {
    const { settings } = get();
    const next = { ...settings, lastArticleId: id };
    set({ currentId: id, focusSentenceId: null, settings: next });
    void saveSettings(next);
    if (!get().highlights[id]) void get().initHighlightsFor(id);
  },

  setDisplay: (display) => {
    const next = { ...get().settings, display };
    set({ settings: next });
    void saveSettings(next);
  },

  setFontScale: (fontScale) => {
    const next = { ...get().settings, fontScale };
    set({ settings: next });
    void saveSettings(next);
  },

  setTtsRate: (ttsRate) => {
    const next = { ...get().settings, ttsRate };
    set({ settings: next });
    void saveSettings(next);
  },

  setTtsAccent: (ttsAccent) => {
    const next = { ...get().settings, ttsAccent };
    set({ settings: next });
    void saveSettings(next);
  },

  setShowPhrases: (showPhrases) => {
    const next = { ...get().settings, showPhrases };
    set({ settings: next });
    void saveSettings(next);
  },

  addArticle: (raw) => {
    // 导入的文章默认只分析第一句，用户看完后可按需生成全篇
    const a = analyzeFirstSentenceOnly(recalcMeta(raw));
    const articles = { ...get().articles, [a.id]: a };
    const order = [a.id, ...get().order];
    set({ articles, order, currentId: a.id, focusSentenceId: null });
    persistArticles(articles);
  },

  addCustomTag: (name) => {
    const t = name.trim();
    if (!t) return;
    if (get().customTags.includes(t) || (TAG_VOCAB as readonly string[]).includes(t)) return;
    const customTags = [...get().customTags, t];
    set({ customTags });
    void saveCustomTags(customTags);
  },

  removeCustomTag: (name) => {
    const customTags = get().customTags.filter((t) => t !== name);
    set({ customTags });
    void saveCustomTags(customTags);
    // 同时从所有文章上摘掉这个标签
    const articles = { ...get().articles };
    let dirty = false;
    for (const [id, a] of Object.entries(articles)) {
      if (a.meta.tags.includes(name)) {
        articles[id] = { ...a, meta: { ...a.meta, tags: a.meta.tags.filter((t) => t !== name) } };
        dirty = true;
      }
    }
    if (dirty) {
      set({ articles });
      persistArticles(articles);
    }
  },

  toggleArticleTag: (articleId, tag) => {
    const a = get().articles[articleId];
    if (!a) return;
    const has = a.meta.tags.includes(tag);
    const tags = has ? a.meta.tags.filter((t) => t !== tag) : [...a.meta.tags, tag];
    get().updateArticle({ ...a, meta: { ...a.meta, tags } });
  },

  generateAnalysis: async (articleId) => {
    const a = get().articles[articleId];
    if (!a || get().analyzing) return;
    set({ analyzing: true });
    try {
      await initNlp();
      // 让出两帧，先让进度提示渲染出来
      await new Promise((r) => window.setTimeout(r, 60));
      get().updateArticle(analyzeWholeArticle(a));
    } finally {
      set({ analyzing: false });
    }
  },

  updateArticle: (a) => {
    const articles = { ...get().articles, [a.id]: { ...a, updatedAt: new Date().toISOString() } };
    set({ articles });
    persistArticles(articles);
  },

  removeArticle: (id) => {
    if (ATLAS_IDS.has(id)) return;
    const articles = { ...get().articles };
    delete articles[id];
    const order = get().order.filter((x) => x !== id);
    const currentId = get().currentId === id ? order[0] ?? null : get().currentId;
    set({ articles, order, currentId });
    persistArticles(articles);
  },

  updateSentence: (articleId, sentenceId, patch) => {
    const article = get().articles[articleId];
    if (!article) return;
    const paragraphs = article.paragraphs.map((p) => ({
      ...p,
      sentences: p.sentences.map((s) => (s.id === sentenceId ? { ...s, ...patch } : s)),
    }));
    get().updateArticle({ ...article, paragraphs });
  },

  setFocus: (id) => set({ focusSentenceId: id }),
  setEditMode: (m) => set({ editMode: m }),
  toggleEditMode: () => set({ editMode: get().editMode === 'off' ? 'pen' : 'off' }),
  setPenColor: (penColor) => set({ penColor }),
  setPenSize: (penSize) => set({ penSize }),
  setEraserSize: (eraserSize) => set({ eraserSize }),
  setHlColor: (hlColor) => set({ hlColor }),

  addHighlights: (articleId, list) => {
    if (!list.length) return;
    const merged = [...(get().highlights[articleId] ?? []), ...list];
    set({ highlights: { ...get().highlights, [articleId]: merged } });
    void saveHighlights(articleId, merged);
  },

  removeHighlightAt: (articleId, sentenceId, off) => {
    const list = (get().highlights[articleId] ?? []).filter(
      (h) => !(h.sentenceId === sentenceId && off >= h.start && off < h.end),
    );
    set({ highlights: { ...get().highlights, [articleId]: list } });
    void saveHighlights(articleId, list);
  },

  clearHighlights: (articleId) => {
    set({ highlights: { ...get().highlights, [articleId]: [] } });
    void saveHighlights(articleId, []);
  },

  addFolder: (kind, name) => {
    const folder: FavoriteFolder = {
      id: nanoid(8),
      name: name.trim() || '未命名收藏夹',
      kind,
      createdAt: new Date().toISOString(),
    };
    const favFolders = [...get().favFolders, folder];
    set({ favFolders, activeFolder: { ...get().activeFolder, [kind]: folder.id } });
    void saveFavFolders(favFolders);
    return folder.id;
  },

  renameFolder: (id, name) => {
    const favFolders = get().favFolders.map((f) => (f.id === id ? { ...f, name: name.trim() || f.name } : f));
    set({ favFolders });
    void saveFavFolders(favFolders);
  },

  removeFolder: (id) => {
    const favFolders = get().favFolders.filter((f) => f.id !== id);
    const favItems = get().favItems.filter((i) => i.folderId !== id);
    const activeFolder = { ...get().activeFolder };
    for (const k of Object.keys(activeFolder) as FavKind[]) {
      if (activeFolder[k] === id) delete activeFolder[k];
    }
    set({ favFolders, favItems, activeFolder });
    void saveFavFolders(favFolders);
    void saveFavItems(favItems);
  },

  setActiveFolder: (kind, id) => set({ activeFolder: { ...get().activeFolder, [kind]: id } }),

  ensureFolder: (kind) => {
    const existing = get().favFolders.filter((f) => f.kind === kind);
    const active = get().activeFolder[kind];
    if (active && existing.some((f) => f.id === active)) return active;
    if (existing.length) {
      set({ activeFolder: { ...get().activeFolder, [kind]: existing[0].id } });
      return existing[0].id;
    }
    return get().addFolder(kind, '默认收藏');
  },

  toggleFavorite: (item) => {
    const key = favKey(item.kind, item.text, item.sentenceId);
    const existing = get().favItems.find((i) => favKey(i.kind, i.text, i.sentenceId) === key);
    if (existing) {
      const favItems = get().favItems.filter((i) => i.id !== existing.id);
      set({ favItems });
      void saveFavItems(favItems);
      return false;
    }
    const folderId = get().ensureFolder(item.kind);
    const favItems = [
      ...get().favItems,
      { ...item, id: nanoid(8), folderId, createdAt: new Date().toISOString() },
    ];
    set({ favItems });
    void saveFavItems(favItems);
    return true;
  },

  removeFavorite: (id) => {
    const favItems = get().favItems.filter((i) => i.id !== id);
    set({ favItems });
    void saveFavItems(favItems);
  },

  moveFavorite: (id, folderId) => {
    const favItems = get().favItems.map((i) => (i.id === id ? { ...i, folderId } : i));
    set({ favItems });
    void saveFavItems(favItems);
  },

  isFavorited: (kind, key) => get().favItems.some((i) => favKey(i.kind, i.text, i.sentenceId) === key),

  setFavOpen: (favOpen) => set({ favOpen }),

  setLibraryOpen: (libraryOpen) => set({ libraryOpen }),
  setImportOpen: (importOpen) => set({ importOpen }),
  setExportOpen: (exportOpen) => set({ exportOpen }),

  saveNote: (n) => {
    const notes = get().notes.filter((x) => x.id !== n.id).concat(n);
    set({ notes });
    void saveNotes(notes);
  },

  setNoteVisible: (noteVisible) => set({ noteVisible }),
}));
