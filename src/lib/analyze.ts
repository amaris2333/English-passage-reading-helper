import type { Chunk, ChunkRole, SentenceAnalysis } from '../types';

/** compromise 以动态方式加载：装不上时自动退回内置规则，不影响构建 */
interface RawJson {
  text: string;
  terms?: Array<{ tags?: string[]; chunk?: string }>;
  offset?: { index: number; start?: number; length: number };
}
type NlpTerm = { text: string; tags: string[]; chunk: string; offset?: { index: number } };
type NlpDoc = { terms(): { json(opts?: unknown): RawJson[] } };
type NlpFn = (text: string) => NlpDoc;

/** 把 compromise 的嵌套结构压平成 {text, tags, offset} */
function flattenTerms(raw: RawJson[]): NlpTerm[] {
  return raw
    .filter((r) => r.text && r.text.trim())
    .map((r) => ({
      text: r.text,
      tags: r.terms?.[0]?.tags ?? [],
      chunk: r.terms?.[0]?.chunk ?? '',
      offset: r.offset ? { index: r.offset.start ?? r.offset.index } : undefined,
    }));
}

let nlp: NlpFn | null = null;
let nlpTried = false;

export async function initNlp(): Promise<boolean> {
  if (nlpTried) return !!nlp;
  nlpTried = true;
  try {
    const mod = (await import('compromise')) as unknown as { default?: NlpFn } & NlpFn;
    nlp = (mod.default ?? mod) as NlpFn;
  } catch {
    nlp = null;
  }
  return !!nlp;
}

export function nlpReady(): boolean {
  return !!nlp;
}

/* ------------------------------------------------------------------ */
/* 词表                                                                */
/* ------------------------------------------------------------------ */

const SUBORDINATORS = new Set([
  'which', 'who', 'whom', 'whose', 'that', 'where', 'when',
  'because', 'although', 'though', 'while', 'whilst', 'if', 'unless',
  'since', 'as', 'whereas', 'after', 'before', 'once', 'until', 'till',
  'whether', 'provided', 'given',
]);

const RELATIVE = new Set(['which', 'who', 'whom', 'whose', 'that', 'where', 'when']);

const ADVERBIAL_LEAD = new Set([
  'however', 'nevertheless', 'nonetheless', 'therefore', 'thus', 'meanwhile',
  'further', 'furthermore', 'moreover', 'instead', 'still', 'yet', 'overall',
  'consequently', 'accordingly', 'notably', 'specifically', 'similarly',
  'conversely', 'ultimately', 'importantly', 'generally', 'typically',
]);

const PARTICIPLE_HINT = /\b(\w+ing|\w+ed)\b/;

/** 层级说明文案 */
const ROLE_NOTE: Record<string, string> = {
  Clause: '从属分句，不能独立成句，需依附主句',
  Appositive: '同位语，对前面的名词做解释或重命名',
  Insert: '插入语，补充信息，去掉后主句依然完整',
  M: '修饰/状语成分，说明时间、地点、方式、原因等',
};

export interface AnalyzeOptions {
  /** 已知的句型标签（人工指定时跳过自动判断） */
  pattern?: string;
}

/* ------------------------------------------------------------------ */
/* 主入口                                                              */
/* ------------------------------------------------------------------ */

export function analyzeSentence(en: string, opts: AnalyzeOptions = {}): SentenceAnalysis {
  const text = en.trim();
  if (!text) {
    return { chunks: [], generatedBy: 'rule' };
  }
  const chunks = nlp ? chunkWithNlp(text) : chunkWithRules(text);
  const pattern = opts.pattern ?? detectPattern(text, chunks);
  const skeleton = buildSkeleton(chunks);
  const notes = buildNotes(text, chunks);
  return { pattern, skeleton, chunks, notes, generatedBy: 'rule' };
}

/* ------------------------------------------------------------------ */
/* compromise 路径                                                     */
/* ------------------------------------------------------------------ */

function chunkWithNlp(text: string): Chunk[] {
  const doc = (nlp as NlpFn)(text);
  let terms: NlpTerm[] = [];
  try {
    terms = flattenTerms(doc.terms().json({ offset: true }));
  } catch {
    return chunkWithRules(text);
  }
  if (!terms.length) return chunkWithRules(text);

  const at = (i: number) => terms[i]?.offset?.index ?? -1;

  const chunks: Chunk[] = [];
  const push = (role: ChunkRole, from: number, to: number, note?: string) => {
    if (from < 0 || to <= from) return;
    const start = at(from);
    const last = terms[to - 1];
    const end = (last.offset?.index ?? 0) + last.text.length;
    if (start < 0 || end <= start) return;
    chunks.push({ role, text: text.slice(start, end), start, end, note });
  };

  const clauses: Array<{ start: number; end: number }> = [];

  // 1a) 句首状语从句：Although/While/Because/If/When/As ... , 主句在后面
  let headStart = 0;
  const firstWord = terms[0].text.toLowerCase().replace(/[^a-z]/g, '');
  if (SUBORDINATORS.has(firstWord) && firstWord !== 'that' && firstWord !== 'which' && firstWord !== 'who') {
    const commaPos = text.indexOf(',');
    if (commaPos > 0) {
      let endTerm = terms.findIndex((t) => (t.offset?.index ?? 0) > commaPos);
      if (endTerm < 0) endTerm = terms.length;
      if (endTerm > 1) {
        push('Clause', 0, endTerm, '句首状语从句：先交代条件/让步/时间背景，主句在后面');
        clauses.push({ start: 0, end: endTerm });
        headStart = endTerm;
      }
    }
  }

  // 1b) 其余从属分句
  for (let i = headStart; i < terms.length; i++) {
    const w = terms[i].text.toLowerCase().replace(/[^a-z]/g, '');
    if (!SUBORDINATORS.has(w)) continue;
    if (i === headStart) continue;
    let end = terms.length;
    for (let j = i + 1; j < terms.length; j++) {
      const nw = terms[j].text.toLowerCase().replace(/[^a-z]/g, '');
      if (SUBORDINATORS.has(nw) && nw !== 'that') { end = j; break; }
    }
    clauses.push({ start: i, end });
    i = end - 1;
  }

  const inClause = (i: number) => clauses.find((c) => i >= c.start && i < c.end);

  // 2) 主句谓语：第一个不在从句内的动词
  const VERB_TAGS = ['Verb', 'Modal', 'Auxiliary', 'Copula', 'Gerund', 'Infinitive', 'Participle', 'PastTense', 'PresentTense'];
  const isVerb = (i: number) => (terms[i]?.tags ?? []).some((t) => VERB_TAGS.includes(t));
  let verbIdx = -1;
  for (let i = headStart; i < terms.length; i++) {
    if (inClause(i)) continue;
    if (isVerb(i)) { verbIdx = i; break; }
  }

  // 3) 句首评注副词（However / Meanwhile ... ,）
  if (headStart === 0) {
    const leadWord = terms[0].text.toLowerCase().replace(/[^a-z]/g, '');
    const firstComma = text.indexOf(',');
    const firstCommaTerm = firstComma > 0 ? terms.findIndex((t) => (t.offset?.index ?? 0) > firstComma) : -1;
    if (ADVERBIAL_LEAD.has(leadWord) && firstCommaTerm > 1 && (verbIdx < 0 || firstCommaTerm <= verbIdx)) {
      push('M', 0, firstCommaTerm, '句首评注副词，先交代立场或过渡，再给出主句');
      headStart = firstCommaTerm;
      for (let i = headStart; i < terms.length; i++) {
        if (inClause(i)) continue;
        if (isVerb(i)) { verbIdx = i; break; }
      }
    }
  }

  if (verbIdx < 0) {
    push('S', headStart, terms.length);
    return chunks.length ? chunks : [{ role: 'S', text, start: 0, end: text.length }];
  }

  push('S', headStart, verbIdx, '主句主语');

  let verbEnd = verbIdx + 1;
  while (verbEnd < terms.length && isVerb(verbEnd) && !inClause(verbEnd)) verbEnd++;
  push('V', verbIdx, verbEnd, '主句谓语');

  // 4) 谓语之后：从句 / 补语 / 状语
  let objEnd = verbEnd;
  const tailClauses = clauses.filter((c) => c.start >= verbEnd);
  if (tailClauses.length) {
    const first = tailClauses[0];
    push('C', verbEnd, first.start, '主句的宾语/表语');
    for (const c of tailClauses) {
      const lead = terms[c.start].text.toLowerCase().replace(/[^a-z]/g, '');
      const role: ChunkRole = RELATIVE.has(lead) ? 'Clause' : 'Clause';
      const isAppositive = lead === 'that' && c.start > verbEnd + 2 && /,\s*$/.test(text.slice(0, at(c.start)));
      push(
        isAppositive ? 'Appositive' : role,
        c.start,
        c.end,
        isAppositive
          ? '同位语从句，解释前面那个抽象名词的具体内容'
          : `由 ${terms[c.start].text} 引导的从句，${RELATIVE.has(lead) ? '修饰前面的名词（定语从句）' : '充当状语（状语从句）'}`,
      );
    }
    objEnd = terms.length;
  } else {
    objEnd = terms.length;
    push('O', verbEnd, objEnd, '宾语/表语或补充说明');
  }

  // 5) 插入语（成对逗号/破折号之间的短语）
  for (const m of text.matchAll(/[,—–]\s*([^,;—–]{8,90})\s*[,—–]/g)) {
    const idx = m.index ?? -1;
    if (idx < 0) continue;
    const start = idx + 1;
    const seg = m[1];
    const s = text.indexOf(seg, start);
    if (s < 0) continue;
    const e = s + seg.length;
    if (chunks.some((c) => s < c.end && e > c.start)) continue;
    chunks.push({ role: 'Insert', text: seg, start: s, end: e, note: ROLE_NOTE.Insert });
  }

  chunks.sort((a, b) => a.start - b.start);
  return dedupe(chunks);
}

/* ------------------------------------------------------------------ */
/* 无依赖时的兜底规则                                                  */
/* ------------------------------------------------------------------ */

function chunkWithRules(text: string): Chunk[] {
  const chunks: Chunk[] = [];
  const words = [...text.matchAll(/[A-Za-z][A-Za-z'’-]*/g)].map((m) => ({
    w: m[0],
    i: m.index ?? 0,
  }));
  if (!words.length) return [{ role: 'S', text, start: 0, end: text.length }];

  // 从句起点
  const clauseStarts: number[] = [];
  words.forEach((it, idx) => {
    if (idx === 0) return;
    if (SUBORDINATORS.has(it.w.toLowerCase())) clauseStarts.push(idx);
  });

  const firstClause = clauseStarts.length ? clauseStarts[0] : -1;

  // 谓语：常见动词后缀 / 助动词 / be 动词
  const AUX = new Set(['is', 'are', 'was', 'were', 'be', 'been', 'being', 'has', 'have', 'had', 'do', 'does', 'did', 'will', 'would', 'can', 'could', 'may', 'might', 'must', 'should', 'shall']);
  let verbIdx = -1;
  for (let i = 1; i < words.length; i++) {
    if (firstClause > 0 && i >= firstClause) break;
    const w = words[i].w.toLowerCase();
    if (AUX.has(w) || /(ed|ing|s)$/.test(w)) { verbIdx = i; break; }
  }

  const seg = (a: number, b: number) => {
    const s = words[a]?.i ?? 0;
    const e = b < words.length ? words[b].i : text.length;
    return { s, e };
  };

  if (verbIdx > 0) {
    const { s, e } = seg(0, verbIdx);
    chunks.push({ role: 'S', text: text.slice(s, e).trim(), start: s, end: e, note: '主句主语' });
    const v = seg(verbIdx, verbIdx + 1);
    chunks.push({ role: 'V', text: words[verbIdx].w, start: v.s, end: v.s + words[verbIdx].w.length, note: '主句谓语' });
    if (firstClause > verbIdx) {
      const c = seg(firstClause, words.length);
      const lead = words[firstClause].w.toLowerCase();
      chunks.push({
        role: 'Clause',
        text: text.slice(c.s, c.e).trim(),
        start: c.s,
        end: c.e,
        note: `由 ${words[firstClause].w} 引导，${RELATIVE.has(lead) ? '修饰前面的名词' : '作状语'}`,
      });
      const o = seg(verbIdx + 1, firstClause);
      const ot = text.slice(o.s, o.e).trim();
      if (ot) chunks.push({ role: 'O', text: ot, start: o.s, end: o.e, note: '主句的宾语/表语' });
    } else {
      const o = seg(verbIdx + 1, words.length);
      const ot = text.slice(o.s, o.e).trim();
      if (ot) chunks.push({ role: 'O', text: ot, start: o.s, end: o.e, note: '宾语/表语或补充说明' });
    }
  } else {
    chunks.push({ role: 'S', text, start: 0, end: text.length });
  }

  // 插入语
  for (const m of text.matchAll(/[,—–]\s*([^,;—–]{8,90})\s*[,—–]/g)) {
    const seg2 = m[1];
    const s = text.indexOf(seg2, (m.index ?? 0) + 1);
    if (s < 0) continue;
    const e = s + seg2.length;
    if (chunks.some((c) => s < c.end && e > c.start)) continue;
    chunks.push({ role: 'Insert', text: seg2, start: s, end: e, note: ROLE_NOTE.Insert });
  }

  chunks.sort((a, b) => a.start - b.start);
  return dedupe(chunks);
}

function dedupe(chunks: Chunk[]): Chunk[] {
  const out: Chunk[] = [];
  for (const c of chunks) {
    if (!c.text.trim()) continue;
    if (out.some((o) => o.start === c.start && o.end === c.end)) continue;
    // 与已有成分重叠时，保留先出现的（主干优先）
    if (out.some((o) => c.start < o.end && c.end > o.start)) continue;
    out.push(c);
  }
  return out;
}

/* ------------------------------------------------------------------ */
/* 文案                                                                */
/* ------------------------------------------------------------------ */

function detectPattern(text: string, chunks: Chunk[]): string {
  const has = (r: ChunkRole) => chunks.some((c) => c.role === r);
  const clauseCount = chunks.filter((c) => c.role === 'Clause').length;
  const parts: string[] = [];
  if (has('S') && has('V') && has('O')) parts.push('主谓宾');
  else if (has('S') && has('V') && has('C')) parts.push('主系表');
  else if (has('S') && has('V')) parts.push('主谓');
  else parts.push('结构待拆');

  const insert = chunks.filter((c) => c.role === 'Insert' || c.role === 'Appositive').length;
  if (clauseCount === 0 && insert === 0 && chunks.filter((c) => c.role === 'M').length === 0) {
    return parts[0] + '（简单句）';
  }
  if (clauseCount === 0) return parts[0] + ' + 插入语';
  if (clauseCount >= 2) return parts[0] + ` + ${clauseCount} 个从句（多重复合句）`;
  const lead = /,\s*(which|who|whom|whose)\b/i.test(text) ? '非限定性定语从句' : '从句';
  return parts[0] + ' + ' + lead;
}

function buildSkeleton(chunks: Chunk[]): string {
  const order: ChunkRole[] = ['S', 'V', 'O', 'C'];
  const LABEL: Record<string, string> = { S: 'S', V: 'V', O: 'O', C: 'C' };
  const parts = order
    .map((role) => {
      const c = chunks.find((x) => x.role === role);
      if (!c) return null;
      const t = c.text.length > 40 ? c.text.slice(0, 38) + '…' : c.text;
      return `${t} (${LABEL[role]})`;
    })
    .filter(Boolean);
  return parts.join(' + ') || '（未识别出主干）';
}

function buildNotes(text: string, chunks: Chunk[]): string[] {
  const notes: string[] = [];
  const clauseCount = chunks.filter((c) => c.role === 'Clause').length;
  if (clauseCount) notes.push(`本句含 ${clauseCount} 个从属分句，先锁定主句主干，再逐层挂回修饰成分。`);
  if (/[,—–][^,;—–]{8,90}[,—–]/.test(text)) notes.push('句中有插入成分，阅读时可先跳过，主句依然完整。');
  if (/^[A-Z][a-z]+(ing|ed)\b/.test(text) || PARTICIPLE_HINT.test(text.split(/[,;]/)[0] ?? '')) {
    notes.push('句首出现分词短语时，它通常作状语，真正的主语在逗号之后。');
  }
  if (/\bnot\b|\bnever\b|\bno\b/i.test(text)) notes.push('注意句中的否定范围，否定词可能只作用于局部成分。');
  return notes.slice(0, 3);
}

/** 供批处理使用：一次分析整篇文章的所有句子 */
export function analyzeArticleSentences(list: Array<{ id: string; en: string }>): Map<string, SentenceAnalysis> {
  const map = new Map<string, SentenceAnalysis>();
  for (const s of list) map.set(s.id, analyzeSentence(s.en));
  return map;
}
