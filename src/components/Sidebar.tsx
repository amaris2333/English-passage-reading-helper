import { useMemo, useState } from 'react';
import { useStore } from '../store';
import { TAG_VOCAB, difficultyLabel } from '../lib/article';
import { ATLAS_IDS } from '../data/atlas';

const DIFF_GROUPS: Array<{ label: string; levels: number[] }> = [
  { label: '入门', levels: [1, 2] },
  { label: '进阶', levels: [3] },
  { label: '挑战', levels: [4] },
  { label: '高阶', levels: [5] },
];

export function Sidebar() {
  const articles = useStore((s) => s.articles);
  const order = useStore((s) => s.order);
  const currentId = useStore((s) => s.currentId);
  const selectArticle = useStore((s) => s.selectArticle);
  const removeArticle = useStore((s) => s.removeArticle);
  const setImportOpen = useStore((s) => s.setImportOpen);
  const customTags = useStore((s) => s.customTags);
  const addCustomTag = useStore((s) => s.addCustomTag);
  const removeCustomTag = useStore((s) => s.removeCustomTag);

  const [q, setQ] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [diff, setDiff] = useState<number[]>([]);
  const [newTag, setNewTag] = useState('');
  const [tagEditing, setTagEditing] = useState(false);

  const allTags = useMemo(() => {
    const set = new Set<string>([...TAG_VOCAB, ...customTags]);
    Object.values(articles).forEach((a) => a.meta.tags.forEach((t) => set.add(t)));
    return Array.from(set);
  }, [articles, customTags]);

  const list = useMemo(() => {
    return order
      .map((id) => articles[id])
      .filter(Boolean)
      .filter((a) => {
        if (q.trim()) {
          const hay = `${a.title} ${a.titleZh ?? ''} ${a.source}`.toLowerCase();
          if (!hay.includes(q.trim().toLowerCase())) return false;
        }
        if (tags.length && !tags.some((t) => a.meta.tags.includes(t))) return false;
        if (diff.length && !diff.includes(a.meta.difficulty)) return false;
        return true;
      });
  }, [order, articles, q, tags, diff]);

  const toggleTag = (t: string) => setTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));
  const toggleDiffGroup = (levels: number[]) =>
    setDiff((prev) => {
      const allOn = levels.every((l) => prev.includes(l));
      return allOn ? prev.filter((l) => !levels.includes(l)) : Array.from(new Set([...prev, ...levels]));
    });

  const commitTag = () => {
    const t = newTag.trim();
    if (!t) return;
    addCustomTag(t);
    setNewTag('');
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-scroll">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="搜索标题或来源…"
          style={{ width: '100%', marginBottom: 12 }}
        />

        <div className="filter-block">
          <div className="filter-title">
            主题标签
            <button className="mini" style={{ float: 'right' }} onClick={() => setTagEditing((v) => !v)}>
              {tagEditing ? '完成' : '管理标签'}
            </button>
          </div>
          <div className="tag-list">
            {allTags.map((t) => (
              <span
                key={t}
                className={`tag-chip${tags.includes(t) ? ' on' : ''}`}
                onClick={() => toggleTag(t)}
                title={customTags.includes(t) ? '自定义标签' : undefined}
              >
                {t}
                {tagEditing && customTags.includes(t) && (
                  <b
                    className="tag-del"
                    title="删除该自定义标签"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (window.confirm(`删除自定义标签「${t}」？它也会从所有文章上移除。`)) removeCustomTag(t);
                    }}
                  >
                    ×
                  </b>
                )}
              </span>
            ))}
          </div>
          <div className="fav-new" style={{ marginTop: 8 }}>
            <input
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              placeholder="新建自定义标签…"
              onKeyDown={(e) => { if (e.key === 'Enter') commitTag(); }}
            />
            <button onClick={commitTag} disabled={!newTag.trim()}>添加</button>
          </div>
        </div>

        <div className="filter-block">
          <div className="filter-title">难度</div>
          <div className="tag-list">
            {DIFF_GROUPS.map((g) => (
              <span
                key={g.label}
                className={`tag-chip${g.levels.some((l) => diff.includes(l)) ? ' on' : ''}`}
                onClick={() => toggleDiffGroup(g.levels)}
              >
                {g.label}
              </span>
            ))}
            {(tags.length > 0 || diff.length > 0 || q) && (
              <span className="tag-chip" onClick={() => { setTags([]); setDiff([]); setQ(''); }}>清空筛选</span>
            )}
          </div>
        </div>

        <div className="filter-title" style={{ marginBottom: 6 }}>文章（{list.length}）</div>
        {list.map((a) => (
          <div
            key={a.id}
            className={`article-card${a.id === currentId ? ' on' : ''}`}
            onClick={() => selectArticle(a.id)}
          >
            {!ATLAS_IDS.has(a.id) && (
              <span
                className="del"
                onClick={(e) => {
                  e.stopPropagation();
                  if (window.confirm(`删除《${a.title}》？`)) removeArticle(a.id);
                }}
              >删除</span>
            )}
            <div className="t">{a.title}</div>
            {a.titleZh && <div className="t-zh">{a.titleZh}</div>}
            <div className="m">
              <span className={`badge diff-${a.meta.difficulty}`}>{difficultyLabel(a.meta.difficulty)}</span>
              <span>{a.meta.wordCount} 词</span>
              <span>{a.meta.tags.length ? a.meta.tags.join(' / ') : '未分类'}</span>
            </div>
          </div>
        ))}

        {!list.length && <div className="hint">没有匹配的文章。</div>}
      </div>
      <div style={{ padding: 10, borderTop: '1px solid var(--border)' }}>
        <button className="primary" style={{ width: '100%' }} onClick={() => setImportOpen(true)}>+ 导入新文章</button>
      </div>
    </aside>
  );
}
