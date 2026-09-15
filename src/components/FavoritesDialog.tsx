import { useMemo, useState } from 'react';
import { useStore } from '../store';
import type { FavKind } from '../types';

const KIND_LABEL: Record<FavKind, string> = { sentence: '句子收藏', word: '单词收藏' };

export function FavoritesDialog() {
  const setFavOpen = useStore((s) => s.setFavOpen);
  const favFolders = useStore((s) => s.favFolders);
  const favItems = useStore((s) => s.favItems);
  const activeFolder = useStore((s) => s.activeFolder);
  const addFolder = useStore((s) => s.addFolder);
  const renameFolder = useStore((s) => s.renameFolder);
  const removeFolder = useStore((s) => s.removeFolder);
  const setActiveFolder = useStore((s) => s.setActiveFolder);
  const removeFavorite = useStore((s) => s.removeFavorite);
  const moveFavorite = useStore((s) => s.moveFavorite);
  const articles = useStore((s) => s.articles);
  const selectArticle = useStore((s) => s.selectArticle);
  const setFocus = useStore((s) => s.setFocus);

  const [kind, setKind] = useState<FavKind>('sentence');
  const [newName, setNewName] = useState('');

  const folders = useMemo(() => favFolders.filter((f) => f.kind === kind), [favFolders, kind]);
  const currentId = activeFolder[kind] ?? folders[0]?.id;
  const items = useMemo(
    () => favItems.filter((i) => i.kind === kind && i.folderId === currentId),
    [favItems, kind, currentId],
  );

  const jump = (articleId?: string, sentenceId?: string) => {
    if (!articleId) return;
    selectArticle(articleId);
    if (sentenceId) {
      setFocus(sentenceId);
      window.setTimeout(() => {
        document.querySelector<HTMLElement>(`[data-sid="${sentenceId}"]`)?.scrollIntoView({ block: 'center' });
      }, 250);
    }
    setFavOpen(false);
  };

  return (
    <div className="modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) setFavOpen(false); }}>
      <div className="modal fav-modal">
        <h3>收藏夹</h3>

        <div className="tabs">
          {(['sentence', 'word'] as FavKind[]).map((k) => (
            <button key={k} className={kind === k ? 'active' : ''} onClick={() => setKind(k)}>
              {KIND_LABEL[k]}（{favItems.filter((i) => i.kind === k).length}）
            </button>
          ))}
        </div>

        <div className="fav-body">
          <div className="fav-folders">
            {folders.map((f) => (
              <div
                key={f.id}
                className={`fav-folder${f.id === currentId ? ' on' : ''}`}
                onClick={() => setActiveFolder(kind, f.id)}
              >
                <span className="fav-folder-name" title={f.name}>{f.name}</span>
                <span className="fav-folder-count">{favItems.filter((i) => i.folderId === f.id).length}</span>
                <button
                  className="icon-btn"
                  title="重命名"
                  onClick={(e) => {
                    e.stopPropagation();
                    const name = window.prompt('收藏夹名称', f.name);
                    if (name !== null) renameFolder(f.id, name);
                  }}
                >✎</button>
                <button
                  className="icon-btn"
                  title="删除收藏夹（含其中条目）"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (window.confirm(`删除收藏夹「${f.name}」及其中全部条目？`)) removeFolder(f.id);
                  }}
                >✕</button>
              </div>
            ))}
            {!folders.length && <div className="hint">还没有收藏夹，新建一个吧。</div>}
            <div className="fav-new">
              <input
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="新建收藏夹名称"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && newName.trim()) {
                    addFolder(kind, newName);
                    setNewName('');
                  }
                }}
              />
              <button
                onClick={() => { if (newName.trim()) { addFolder(kind, newName); setNewName(''); } }}
                disabled={!newName.trim()}
              >新建</button>
            </div>
          </div>

          <div className="fav-items">
            {items.map((i) => (
              <div className="fav-item" key={i.id}>
                <div className="fav-item-main">
                  <div className="fav-item-text">{i.text}</div>
                  {i.sub && <div className="fav-item-sub">{i.sub}</div>}
                  <div className="fav-item-meta">
                    {i.articleTitle && (
                      <span className="fav-link" onClick={() => jump(i.articleId, i.sentenceId)}>
                        {i.articleTitle}
                      </span>
                    )}
                    <span>{new Date(i.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="fav-item-actions">
                  <select
                    value={i.folderId}
                    onChange={(e) => moveFavorite(i.id, e.target.value)}
                    title="移动到其他收藏夹"
                  >
                    {folders.map((f) => <option key={f.id} value={f.id}>{f.name}</option>)}
                  </select>
                  <button className="icon-btn" title="移除" onClick={() => removeFavorite(i.id)}>🗑</button>
                </div>
              </div>
            ))}
            {!items.length && (
              <div className="hint">
                {folders.length ? '这个收藏夹还是空的。' : `还没有${KIND_LABEL[kind]}，先新建一个收藏夹。`}
                <br />
                提示：{kind === 'sentence' ? '点击句子右侧的 ☆ 收藏句子' : '点击单词卡里的 ☆ 收藏单词'}。
              </div>
            )}
          </div>
        </div>

        <div className="actions">
          <span style={{ flex: 1, fontSize: 12, color: 'var(--text-2)' }}>
            句子与单词分属两个大类，不会混淆。数据保存在本机。
          </span>
          <button className="primary" onClick={() => setFavOpen(false)}>关闭</button>
        </div>
      </div>
    </div>
  );
}
