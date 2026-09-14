import { create } from 'zustand';
import type { AppSettings, Article, Note, Sentence } from './types';
import { SAMPLE_ARTICLES, SAMPLE_IDS } from './data/samples';
import {
  DEFAULT_SETTINGS,
  loadArticles,
  loadNotes,
  loadSettings,
  saveArticles,
  saveNotes,
  saveSettings,
} from './lib/storage';

export type EditMode = 'off' | 'pen' | 'eraser';

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

  libraryOpen: boolean;
  importOpen: boolean;
  exportOpen: boolean;

  init: () => Promise<void>;
  selectArticle: (id: string) => void;
  setDisplay: (d: AppSettings['display']) => void;
  setFontScale: (v: number) => void;
  setTtsRate: (v: number) => void;
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
  penSize: 4,
  eraserSize: 18,

  libraryOpen: true,
  importOpen: false,
  exportOpen: false,

  init: async () => {
    const [articles, settings, notes] = await Promise.all([loadArticles(), loadSettings(), loadNotes()]);
    const seeded = { ...articles };
    let changed = false;
    for (const s of SAMPLE_ARTICLES) {
      if (!seeded[s.id]) {
        seeded[s.id] = s;
        changed = true;
      }
    }
    if (changed) await saveArticles(seeded);

    const order = Object.values(seeded).sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)).map((a) => a.id);
    const currentId = settings.lastArticleId && seeded[settings.lastArticleId] ? settings.lastArticleId : order[0] ?? null;

    set({ ready: true, articles: seeded, order, settings, notes, currentId });
  },

  selectArticle: (id) => {
    const { settings } = get();
    const next = { ...settings, lastArticleId: id };
    set({ currentId: id, focusSentenceId: null, settings: next });
    void saveSettings(next);
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

  setShowPhrases: (showPhrases) => {
    const next = { ...get().settings, showPhrases };
    set({ settings: next });
    void saveSettings(next);
  },

  addArticle: (a) => {
    const articles = { ...get().articles, [a.id]: a };
    const order = [a.id, ...get().order];
    set({ articles, order, currentId: a.id, focusSentenceId: null });
    persistArticles(articles);
  },

  updateArticle: (a) => {
    const articles = { ...get().articles, [a.id]: { ...a, updatedAt: new Date().toISOString() } };
    set({ articles });
    persistArticles(articles);
  },

  removeArticle: (id) => {
    if (SAMPLE_IDS.has(id)) return;
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
