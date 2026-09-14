import { createStore, get, set, del, keys } from 'idb-keyval';
import type { Article, InkDoc, Note, AppSettings } from '../types';
import { SCHEMA_VERSION } from '../types';

const store = createStore('english-reader-db', 'kv');

export const K = {
  articles: 'articles',
  notes: 'notes',
  settings: 'settings',
  ink: (articleId: string) => `ink:${articleId}`,
};

export async function loadArticles(): Promise<Record<string, Article>> {
  const v = await get<Record<string, Article>>(K.articles, store);
  return v ?? {};
}

export async function saveArticles(a: Record<string, Article>): Promise<void> {
  await set(K.articles, a, store);
}

export async function loadInk(articleId: string): Promise<InkDoc | undefined> {
  return get<InkDoc>(K.ink(articleId), store);
}

export async function saveInk(doc: InkDoc): Promise<void> {
  await set(K.ink(doc.articleId), doc, store);
}

export async function loadNotes(): Promise<Note[]> {
  const v = await get<Note[]>(K.notes, store);
  return v ?? [];
}

export async function saveNotes(n: Note[]): Promise<void> {
  await set(K.notes, n, store);
}

export const DEFAULT_SETTINGS: AppSettings = {
  schemaVersion: SCHEMA_VERSION,
  display: 'bilingual',
  fontScale: 1,
  ttsRate: 0.9,
  showPhrases: true,
};

export async function loadSettings(): Promise<AppSettings> {
  const v = await get<AppSettings>(K.settings, store);
  return { ...DEFAULT_SETTINGS, ...(v ?? {}) };
}

export async function saveSettings(s: AppSettings): Promise<void> {
  await set(K.settings, s, store);
}

export async function exportBackup(): Promise<string> {
  const [articles, notes, settings] = await Promise.all([loadArticles(), loadNotes(), loadSettings()]);
  const allKeys = await keys(store);
  const inkKeys = allKeys.filter((k) => typeof k === 'string' && k.startsWith('ink:'));
  const ink: Record<string, InkDoc> = {};
  for (const k of inkKeys) {
    const doc = await get<InkDoc>(k, store);
    if (doc) ink[String(k)] = doc;
  }
  return JSON.stringify({ schemaVersion: SCHEMA_VERSION, exportedAt: new Date().toISOString(), articles, notes, settings, ink }, null, 2);
}

export async function importBackup(json: string): Promise<number> {
  const data = JSON.parse(json);
  if (data.articles) await saveArticles(data.articles);
  if (data.notes) await saveNotes(data.notes);
  if (data.settings) await saveSettings({ ...DEFAULT_SETTINGS, ...data.settings });
  if (data.ink) {
    for (const [k, v] of Object.entries(data.ink)) {
      await set(k, v, store);
    }
  }
  return Object.keys(data.articles ?? {}).length;
}

export async function clearAll(): Promise<void> {
  const allKeys = await keys(store);
  for (const k of allKeys) await del(k, store);
}
