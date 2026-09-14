import { useMemo, useState } from 'react';
import { useStore } from '../store';
import { TAG_VOCAB, difficultyLabel } from '../lib/article';
import { SAMPLE_IDS } from '../data/samples';

export function Sidebar() {
  const articles = useStore((s) => s.articles);
  const order = useStore((s) => s.order);
  const currentId = useStore((s) => s.currentId);
  const selectArticle = useStore((s) => s.selectArticle);
  const removeArticle = useStore((s) => s.removeArticle);
  const setImportOpen = useStore((s) => s.setImportOpen);

  const [q, setQ] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [diff, setDiff] = useState<number[]>([]);

  const allTags = useMemo(() => {
    const set = new Set<string>(TAG_VOCAB);
    Object.values(articles).forEach((a) => a.meta.tags.forEach((t) => set.add(t)));
    return Array.from(set);
  }, [articles]);

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
  const toggleDiff = (d: number) => setDiff((prev) => (prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]));

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
          <div className="filter-title">主题标签</div>
          <div className="tag-list">
            {allTags.map((t) => (
              <span key={t} className={`tag-chip${tags.includes(t) ? ' on' : ''}`} onClick={() => toggleTag(t)}>{t}</span>
            ))}
          </div>
        </div>

        <div className="filter-block">
          <div className="filter-title">难度</div>
          <div className="tag-list">
            {[1, 2, 3, 4, 5].map((d) => (
              <span key={d} className={`tag-chip${diff.includes(d) ? ' on' : ''}`} onClick={() => toggleDiff(d)}>
                {difficultyLabel(d as 1 | 2 | 3 | 4 | 5)}
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
            {!SAMPLE_IDS.has(a.id) && (
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
              <span>{a.meta.tags.join(' / ')}</span>
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
