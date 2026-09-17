import { createStore, get, set, del, keys } from 'idb-keyval';
import type {
  Article, InkDoc, Note, AppSettings,
  Highlight, FavoriteFolder, FavoriteItem, ReviewCard,
} from '../types';
import { SCHEMA_VERSION } from '../types';

const store = createStore('english-reader-db', 'kv');

export const K = {
  articles: 'articles',
  notes: 'notes',
  settings: 'settings',
  ink: (articleId: string) => `ink:${articleId}`,
  hl: (articleId: string) => `hl:${articleId}`,
  favFolders: 'favFolders',
  favItems: 'favItems',
  reviewCards: 'reviewCards',
  customTags: 'customTags',
};

export async function loadCustomTags(): Promise<string[]> {
  return (await get<string[]>(K.customTags, store)) ?? [];
}

export async function saveCustomTags(v: string[]): Promise<void> {
  await set(K.customTags, v, store);
}

export async function loadHighlights(articleId: string): Promise<Highlight[]> {
  const v = await get<Highlight[]>(K.hl(articleId), store);
  return v ?? [];
}

export async function saveHighlights(articleId: string, list: Highlight[]): Promise<void> {
  await set(K.hl(articleId), list, store);
}

export async function loadFavFolders(): Promise<FavoriteFolder[]> {
  const v = await get<FavoriteFolder[]>(K.favFolders, store);
  return v ?? [];
}

export async function saveFavFolders(v: FavoriteFolder[]): Promise<void> {
  await set(K.favFolders, v, store);
}

export async function loadFavItems(): Promise<FavoriteItem[]> {
  const v = await get<FavoriteItem[]>(K.favItems, store);
  return v ?? [];
}

export async function saveFavItems(v: FavoriteItem[]): Promise<void> {
  await set(K.favItems, v, store);
}

export async function loadReviewCards(): Promise<ReviewCard[]> {
  const v = await get<ReviewCard[]>(K.reviewCards, store);
  return v ?? [];
}

export async function saveReviewCards(v: ReviewCard[]): Promise<void> {
  await set(K.reviewCards, v, store);
}

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
  ttsAccent: 'us' as const,
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
  const [articles, notes, settings, favFolders, favItems] = await Promise.all([
    loadArticles(), loadNotes(), loadSettings(), loadFavFolders(), loadFavItems(),
  ]);
  const allKeys = await keys(store);
  const perArticleKeys = allKeys.filter(
    (k) => typeof k === 'string' && (k.startsWith('ink:') || k.startsWith('hl:')),
  );
  const perArticle: Record<string, unknown> = {};
  for (const k of perArticleKeys) {
    const v = await get(k, store);
    if (v) perArticle[String(k)] = v;
  }
  return JSON.stringify(
    {
      schemaVersion: SCHEMA_VERSION,
      exportedAt: new Date().toISOString(),
      articles, notes, settings, favFolders, favItems, perArticle,
    },
    null,
    2,
  );
}

export async function importBackup(json: string): Promise<number> {
  const data = JSON.parse(json);
  if (data.articles) await saveArticles(data.articles);
  if (data.notes) await saveNotes(data.notes);
  if (data.settings) await saveSettings({ ...DEFAULT_SETTINGS, ...data.settings });
  if (data.favFolders) await saveFavFolders(data.favFolders);
  if (data.favItems) await saveFavItems(data.favItems);
  const perArticle = { ...(data.ink ?? {}), ...(data.perArticle ?? {}) };
  for (const [k, v] of Object.entries(perArticle)) {
    await set(k, v, store);
  }
  return Object.keys(data.articles ?? {}).length;
}

export async function clearAll(): Promise<void> {
  const allKeys = await keys(store);
  for (const k of allKeys) await del(k, store);
}
