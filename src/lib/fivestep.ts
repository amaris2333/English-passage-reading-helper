import { tagTerms, type TaggedTerm } from './analyze';
import type { BreakPoint, FiveStep, ParallelGroup, PredicateItem, PredicateRole, Segment } from '../types';

/**
 * 长难句五步分析法
 *   ① 数谓语动词（定"几件事"） ② 找断点 ③ 定主句 ④ 拆修饰 ⑤ 翻译路径
 * 方法参照主流考研/雅思长难句教学法（先找谓语 → 再断句 → 定主干 → 拆修饰 → 再翻译）。
 */

/* ------------------------------------------------------------------ */
/* 词表                                                                */
/* ------------------------------------------------------------------ */

const SUB_INFO: Record<string, { type: string; relation: string }> = {
  if: { type: '条件状语从句', relation: '条件' },
  unless: { type: '条件状语从句', relation: '否定条件' },

  when: { type: '时间状语从句', relation: '时间' },
  whenever: { type: '时间状语从句', relation: '时间' },
  while: { type: '时间/让步状语从句', relation: '同时或让步' },
  whilst: { type: '时间/让步状语从句', relation: '同时或让步' },
  as: { type: '时间/原因状语从句', relation: '时间或原因' },
  after: { type: '时间状语从句', relation: '时间' },
  before: { type: '时间状语从句', relation: '时间' },
  until: { type: '时间状语从句', relation: '时间' },
  once: { type: '时间状语从句', relation: '时间' },
  since: { type: '时间/原因状语从句', relation: '时间或原因' },
  because: { type: '原因状语从句', relation: '原因' },
  although: { type: '让步状语从句', relation: '让步' },
  though: { type: '让步状语从句', relation: '让步' },
  whereas: { type: '对比状语从句', relation: '对比' },
  whether: { type: '名词性从句', relation: '选择' },
  that: { type: '名词性 / 定语从句', relation: '说明' },
  which: { type: '定语从句', relation: '修饰' },
  who: { type: '定语从句', relation: '修饰' },
  whom: { type: '定语从句', relation: '修饰' },
  whose: { type: '定语从句', relation: '修饰' },
  where: { type: '定语从句', relation: '修饰' },
  so: { type: '目的 / 结果状语从句', relation: '目的或结果' },
};

const RELATIVE = new Set(['which', 'who', 'whom', 'whose', 'where', 'that']);

const COORD = new Set(['and', 'but', 'or', 'yet', 'nor', 'so', 'for']);

/** 逻辑连接词 → 中文提示。第五步要体现转折/因果/递进关系 */
const LOGIC_WORDS: Record<string, string> = {
  however: '转折（然而）', nevertheless: '转折（尽管如此）', nonetheless: '转折（尽管如此）',
  instead: '转折（相反）', therefore: '因果（因此）', thus: '因果（因而）',
  consequently: '因果（结果）', accordingly: '因果（于是）', moreover: '递进（而且）',
  furthermore: '递进（此外）', besides: '递进（此外）', meanwhile: '并列（与此同时）',
  otherwise: '转折（否则）', 'in contrast': '对比（相反）', 'as a result': '因果（结果）',
  'for example': '举例（例如）', 'in fact': '递进（事实上）',
};

/** 常见副词 / 否定词：夹在助动词与实义动词之间，合并谓语时需跳过 */
const SKIP_IN_VP = new Set(['not', 'never', 'also', 'still', 'just', 'already', 'always', 'often', 'generally', 'actually', 'first', 'then', 'only', 'even', 'simply', 'really', 'likely', 'probably', 'partly', 'largely', 'widely', 'rapidly', 'significantly', 'notably', 'ultimately', 'typically', 'however', 'therefore', 'thus', 'meanwhile', 'further', 'instead']);

const clean = (s: string) => s.toLowerCase().replace(/[^a-z']/g, '');

/* ------------------------------------------------------------------ */
/* 第 1 步：谓语动词                                                    */
/* ------------------------------------------------------------------ */

/** 这些介词长得像动词，是学习者最容易误判的一类，值得单独点出 */
const CONFUSABLE_PREP = new Set(['like', 'past', 'save', 'except', 'given', 'considering', 'regarding', 'concerning', 'according', 'following', 'including', 'unlike', 'despite', 'barring', 'pending']);

function classifyVerb(t: TaggedTerm, terms: TaggedTerm[], i: number): PredicateRole | null {
  const tags = t.tags;
  const has = (...arr: string[]) => arr.some((x) => tags.includes(x));
  const w = clean(t.text);
  if (!w) return null;

  // 这些词天生像动词，优先判定为介词（如 like / given / according）
  if (CONFUSABLE_PREP.has(w)) return 'preposition';

  // 以 -ing 结尾且是动词 → 动名词 / 现在分词，绝不可能是谓语
  // （compromise 常把 having 标成 Auxiliary 而不是 Gerund，这里用形态兜底）
  if (w.endsWith('ing') && w.length > 4 && has('Verb', 'Auxiliary', 'Gerund')) {
    return 'nonfinite';
  }
  // ⚠️ compromise 会把「现在时拼写与不定式相同」的动词同时标上 Infinitive
  // （account / remove / provide …），所以必须先确认它是否真被 "to" 引导
  if (has('Infinitive')) {
    const prevWord = clean(terms[i - 1]?.text ?? '');
    if (prevWord === 'to') return 'nonfinite';
    // 没有被 to 引导，且带有时态标记 → 就是谓语，交给下面的判断
    if (!has('PresentTense', 'PastTense', 'Modal', 'Auxiliary', 'Copula')) return 'nonfinite';
  }

  // 介词：只保留容易误判成动词的那些，其余（in/at/of/with…）太常见，不必逐个列出
  if (has('Preposition')) return CONFUSABLE_PREP.has(w) ? 'preposition' : null;

  // 连词只起连接作用，其功能已在第 2 步「断点」体现，这里不再重复列出
  if (has('Conjunction', 'Subordinator')) return null;

  if (has('Modal', 'Auxiliary', 'Copula')) return 'predicate';

  // ⚠️ research / debate / increase / use / change 这类词既是名词又是动词，
  // compromise 会同时打上 Noun 和 Verb 标签。若它处在名词位置（前有形容词/限定词，
  // 或后面紧跟介词），应视为名词，不能算谓语。
  if (has('Noun') && has('Verb')) {
    const prev = terms[i - 1];
    const nxt = terms[i + 1];
    const prevIsModifier = !!prev && prev.tags.some((x) =>
      x === 'Adjective' || x === 'Determiner' || x === 'Possessive' || x === 'Gerund');
    const prevIsNounish = !!prev && prev.tags.some((x) => x === 'Noun' || x === 'ProperNoun' || x === 'Plural');
    const nextIsPrep = !!nxt && (nxt.tags.includes('Preposition') || CONFUSABLE_PREP.has(clean(nxt.text)));
    const coordWithNoun = !!prev && /^\s*(and|or)\s*$/i.test(prev.text);
    if ((prevIsModifier || nextIsPrep || coordWithNoun || prevIsNounish) && !has('Auxiliary', 'Modal')) {
      return null;   // 当作名词，不列入动词候选
    }
  }

  if (has('PastTense', 'PresentTense')) {
    if (has('Participle') && !has('PastTense')) return 'nonfinite';
    return 'predicate';
  }
  if (has('Participle')) return 'nonfinite';
  return null;
}

/**
 * 判断一个过去式动词其实是「过去分词作后置定语」（如 people associated with the Bauhaus）。
 * 关键排除项：若它紧跟在逗号/分号之后，说明这是新分句的谓语，不是后置定语。
 * （例如 "…a school of design, emigrated to the United States" 中的 emigrated 是谓语）
 */
function looksLikeReducedRelative(terms: TaggedTerm[], roles: Array<PredicateRole | null>, i: number, en: string): boolean {
  const prev = terms[i - 1];
  const next = terms[i + 1];
  if (!prev || !next) return false;

  // 紧跟标点 → 是新分句的谓语
  const before = en.slice(Math.max(0, terms[i].index - 2), terms[i].index);
  if (/[,;:—–]/.test(before)) return false;

  const isNounish = (t: TaggedTerm) => t.tags.some((x) => x === 'Noun' || x === 'ProperNoun' || x === 'Plural');
  if (!isNounish(prev)) return false;
  const isPrep = (t?: TaggedTerm, r?: PredicateRole | null) =>
    !!t && (r === 'preposition' || t.tags.includes('Preposition'));
  // compromise 有时把 "used to" 并成一个词，这里两种写法都兼容
  const selfEndsWithTo = /\bto$/.test(terms[i].text.trim());
  const after = terms[i + 2];
  const toInfinitive = (next.text.toLowerCase() === 'to' && !!after && after.tags.includes('Infinitive')) || selfEndsWithTo;
  if (!isPrep(next, roles[i + 1]) && !toInfinitive) return false;
  // "名词 + used to do" 是后置定语，不需要再往前找介词
  if (toInfinitive) return true;

  // 往前扫：遇到助动词/情态动词 → 是真谓语；遇到介词 → 该名词是介词宾语，故为后置定语
  for (let k = i - 2; k >= Math.max(0, i - 4); k--) {
    const rk = roles[k];
    if (rk === 'predicate') return false;
    if (rk === 'preposition' || terms[k].tags.includes('Preposition')) return true;
  }
  return false;
}

/** 引号内的内容（如书名、引言）不参与谓语统计 */
function quotedRanges(en: string): Array<[number, number]> {
  const out: Array<[number, number]> = [];
  const re = /["“”]([^"“”]{1,80})["“”]/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(en))) out.push([m.index, m.index + m[0].length]);
  return out;
}

const NONFINITE_NOTE: Record<string, string> = {
  Infinitive: '不定式 to do，不能作谓语',
  Gerund: '动名词 / 现在分词 doing，不能作谓语',
  Participle: '分词 done / doing，不能作谓语',
};

const DISTRACT_NOTE: Record<string, string> = {
  preposition: '是介词，不是动词',
  conjunction: '是连词，只起连接作用',
};

function buildPredicates(en: string): PredicateItem[] {
  const terms = tagTerms(en);
  const items: PredicateItem[] = [];
  if (!terms.length) return items;

  const quoted = quotedRanges(en);
  const inQuote = (idx: number) => quoted.some(([a, b]) => idx > a && idx < b);

  const baseRoles: Array<PredicateRole | null> = terms.map((t, i) => (inQuote(t.index) ? null : classifyVerb(t, terms, i)));

  // 宾语位置的「光杆动词形」纠正。
  // 难点：research / debate / increase / use 这类词的现在时与不定式同形，
  // compromise 只给 Verb,PresentTense,Infinitive 标签（连 Noun 都不给），
  // 于是 "have spurred further research and debate" 里的 research / debate 会被误当谓语。
  // 判据：① 是光杆形式（无 Modal/Auxiliary）
  //       ② 紧跟在副词或并列连词之后
  //       ③ 句中已经出现过谓语（说明它处在宾语位置而非主句谓语）
  let seenPredicate = false;
  for (let i = 0; i < terms.length; i++) {
    const t = terms[i];
    if (baseRoles[i] !== 'predicate') continue;
    const bare = t.tags.includes('Infinitive') && !t.tags.includes('Modal') && !t.tags.includes('Auxiliary');
    const prev = terms[i - 1];
    const prevIsOpen = !!prev && prev.tags.some((x) => x === 'Adverb' || x === 'Conjunction');
    if (seenPredicate && bare && prevIsOpen) {
      baseRoles[i] = null;            // 处在宾语位置，是名词而非谓语
      continue;
    }
    seenPredicate = true;
  }
  const roles: Array<PredicateRole | null> = baseRoles.map((r, i) =>
    r === 'predicate' && terms[i].tags.includes('PastTense') && looksLikeReducedRelative(terms, baseRoles, i, en)
      ? 'nonfinite'
      : r,
  );

  for (let i = 0; i < terms.length; i++) {
    const role = roles[i];
    if (!role) continue;
    const t = terms[i];
    const start = t.index;
    const end = start + t.text.length;

    if (role === 'predicate') {
      // 只向下合并「一个」动词（助动词 + 实义动词），中间最多夹一个副词。
      // 之前会连续吞并，导致 "have spurred further research and debate" 整段被当成谓语。
      const parts = [t.text];
      let lastEnd = end;
      let k = i + 1;
      let skipped = 0;
      while (k < terms.length && skipped < 4) {
        if (roles[k] === 'predicate') {
          parts.push(terms[k].text);
          lastEnd = terms[k].index + terms[k].text.length;
          i = k;
          break;
        }
        if (SKIP_IN_VP.has(clean(terms[k].text))) { k++; skipped++; continue; }
        break;
      }
      items.push({ text: parts.join(' '), start, end: lastEnd, role: 'predicate' });
      continue;
    }


    let note: string | undefined;
    if (role === 'nonfinite') {
      const which = t.tags.includes('Infinitive') ? 'Infinitive' : clean(t.text).endsWith('ing') ? 'Gerund' : 'Participle';
      note = NONFINITE_NOTE[which];
      if (which === 'Participle' && t.tags.includes('PastTense')) note = '过去分词作后置定语（相当于省略了 which is），不能作谓语';
    } else {
      note = DISTRACT_NOTE[role];
    }
    items.push({ text: t.text, start, end, role, note });
  }

  // 去掉与已有谓语重叠的干扰项
  const out: PredicateItem[] = [];
  for (const it of items) {
    if (out.some((o) => it.start < o.end && it.end > o.start)) continue;
    out.push(it);
  }
  return out.sort((a, b) => a.start - b.start);
}

/* ------------------------------------------------------------------ */
/* 第 2 步：断点                                                        */
/* ------------------------------------------------------------------ */

function buildBreaks(en: string, predicates: PredicateItem[]): BreakPoint[] {
  const breaks: BreakPoint[] = [];
  const terms = tagTerms(en);
  const seen = new Set<number>();

  // 标点断点
  const punctRe = /[,;—–:]/g;
  let m: RegExpExecArray | null;
  while ((m = punctRe.exec(en))) {
    const pos = m.index;
    // 看逗号后紧跟的第一个词
    const rest = en.slice(pos + 1);
    const nw = (rest.match(/^\s*([A-Za-z']+)/) || [])[1]?.toLowerCase() ?? '';
    const leadCoord = COORD.has(nw);

    // 逗号后是并列连词 → 说明后面是并列分句，可以断
    if (nw && SUB_INFO[nw]) {
      seen.add(pos);
      breaks.push({
        pos,
        marker: `${m[0]} + ${nw}`,
        reason: `${nw} 引导${SUB_INFO[nw].type}，此处必须断开`,
      });
    } else if (leadCoord) {
      seen.add(pos);
      breaks.push({ pos, marker: `${m[0]} + ${nw}`, reason: `${nw} 连接并列成分，可在标点处断开` });
    } else {
      seen.add(pos);
      breaks.push({ pos, marker: m[0], reason: '标点处断开——先按标点把长句切成短段' });
    }
  }

  // 从属连词断点（未被标点覆盖的）
  terms.forEach((t, i) => {
    const w = clean(t.text);
    if (!SUB_INFO[w]) return;
    if (i === 0) return;                       // 句首连词，断点在它之前无意义
    const pos = t.index;
    if (seen.has(pos - 1) || seen.has(pos - 2)) return; // 前一个字符已是逗号
    if (breaks.some((b) => Math.abs(b.pos - pos) <= 2)) return;
    breaks.push({ pos, marker: t.text, reason: `${t.text} 引导${SUB_INFO[w].type}` });
  });

  // 去重 + 排序
  const uniq: BreakPoint[] = [];
  for (const b of breaks.sort((a, b2) => a.pos - b2.pos)) {
    if (uniq.some((u) => Math.abs(u.pos - b.pos) < 2)) continue;
    uniq.push(b);
  }
  return uniq;
}

/* ------------------------------------------------------------------ */
/* 第 3 步：主句与分句                                                  */
/* ------------------------------------------------------------------ */

function leadingSubordinator(text: string): string | null {
  const words = text.trim().split(/\s+/).slice(0, 3).map(clean);
  for (const w of words) {
    if (!w) continue;
    if (COORD.has(w)) continue;   // 跳过句首并列连词
    if (SUB_INFO[w]) return w;
    return null;                  // 第一个非并列连词的实词不是连词 → 不是从句
  }
  return null;
}

function buildSegments(en: string, breaks: BreakPoint[]): Segment[] {
  const cuts = [0, ...breaks.map((b) => b.pos), en.length];
  const raw: Array<{ start: number; end: number }> = [];
  for (let i = 0; i < cuts.length - 1; i++) {
    let start = cuts[i];
    const end = cuts[i + 1];
    // 断点处的前导标点/空白归属上一段，避免出现 ", the other…" 这种碎片
    while (start < end && /[\s,;:—–]/.test(en[start])) start++;
    if (en.slice(start, end).trim().length < 4) continue;
    raw.push({ start, end });
  }

  // 碎段（<3 词）并入下一段，避免句首的 "Instead" 之类独占一段
  const mergedRaw: Array<{ start: number; end: number }> = [];
  for (let i = 0; i < raw.length; i++) {
    const cur = { ...raw[i] };
    const words = en.slice(cur.start, cur.end).trim().split(/\s+/).length;
    if (words < 3 && i + 1 < raw.length) {
      raw[i + 1] = { start: cur.start, end: raw[i + 1].end };
      continue;
    }
    mergedRaw.push(cur);
  }

  const segs: Segment[] = mergedRaw.map((r, i) => {
    const text = en.slice(r.start, r.end);
    const lead = leadingSubordinator(text);
    const before = en.slice(Math.max(0, r.start - 2), r.start);
    const nonRestrictive = /,\s*$/.test(before) && lead !== null && RELATIVE.has(lead);

    let type = '并列分句（承接前文）';
    let hint = '与前面的分句并列，翻译时按同一层级处理';
    if (lead && SUB_INFO[lead]) {
      const info = SUB_INFO[lead];
      type = nonRestrictive ? `非限定性${info.type}` : info.type;
      hint = nonRestrictive
        ? '对前面的名词做补充说明，翻译时可另起一小句'
        : `作${info.relation}成分，翻译时通常放在主句之前`;
    }
    return {
      id: `seg-${i}`,
      text: text.trim(),
      start: r.start + (text.length - text.trimStart().length),
      end: r.end - (text.length - text.trimEnd().length),
      type,
      isMain: false,
      hint,
    };
  });

  // 主句 = 第一个非从句、非承接的段
  const mainIdx = segs.findIndex((s) => !leadingSubordinator(s.text) && !COORD.has(clean(s.text.split(/\s+/)[0] ?? '')));
  segs.forEach((s, i) => {
    if (i === mainIdx) { s.isMain = true; s.type = '主句'; s.hint = '这是整句的骨架，先把它译通再挂修饰'; }
  });
  return segs;
}

/* ------------------------------------------------------------------ */
/* 第 4 步：平行结构与修饰成分                                          */
/* ------------------------------------------------------------------ */

const PARALLEL_PATTERNS: Array<{ re: RegExp; kind: string; note: string }> = [
  { re: /\beither\s+([^,;]{2,60}?)\s+or\s+([^,;.]{2,60})/gi, kind: 'either … or … 平行', note: '"要么…要么…"——两部分地位相同、形式一致' },
  { re: /\bneither\s+([^,;]{2,60}?)\s+nor\s+([^,;.]{2,60})/gi, kind: 'neither … nor … 平行', note: '"既不…也不…"——否定两件事' },
  { re: /\bboth\s+([^,;]{2,60}?)\s+and\s+([^,;.]{2,60})/gi, kind: 'both … and … 平行', note: '"两者都"——两部分并列' },
  { re: /\bnot only\s+([^,;]{2,60}?)\s+but\s+(?:also\s+)?([^,;.]{2,60})/gi, kind: 'not only … but also … 平行', note: '"不仅…而且…"——递进关系' },
  { re: /\b(?:from|between)\s+([^,;]{2,50}?)\s+(?:to|and)\s+([^,;.]{2,50})/gi, kind: 'from … to … 平行', note: '范围的两端，形式通常一致' },
];

function buildParallels(en: string): ParallelGroup[] {
  const out: ParallelGroup[] = [];
  for (const p of PARALLEL_PATTERNS) {
    p.re.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = p.re.exec(en))) {
      out.push({ kind: p.kind, members: [m[1].trim(), m[2].trim()], note: p.note });
      if (out.length >= 4) break;
    }
  }
  // 三项以上列举：A, B, and C
  const listRe = /\b([A-Za-z][^,;]{1,40}),\s*([A-Za-z][^,;]{1,40}),\s*(?:and|or)\s+([A-Za-z][^,;.]{1,40})/g;
  let lm: RegExpExecArray | null;
  while ((lm = listRe.exec(en)) && out.length < 4) {
    if (out.some((o) => o.members.join(' ').includes(lm![1].trim().slice(0, 12)))) continue;
    out.push({
      kind: '三项以上并列',
      members: [lm[1].trim(), lm[2].trim(), lm[3].trim()],
      note: '并列的几项词性相同、形式一致，可逐个对应翻译',
    });
  }
  return out.slice(0, 4);
}

function buildModifiers(en: string, terms: TaggedTerm[]): string[] {
  const out: string[] = [];
  const shrink = (t: string, n = 46) => (t.length > n ? t.slice(0, n - 2) + '…' : t);

  // ① 定语从句：关系词前面能找到先行名词
  for (let i = 1; i < terms.length; i++) {
    const w = clean(terms[i].text);
    if (!['who', 'which', 'whom', 'whose', 'where', 'that'].includes(w)) continue;
    const ante = [...terms.slice(0, i)].reverse().find((t) =>
      t.tags.some((x) => x === 'Noun' || x === 'ProperNoun' || x === 'Plural'));
    const tail = en.slice(terms[i].index).split(/[,;]/).slice(0, 2).join(',').trim();
    out.push(
      ante
        ? `"${shrink(tail)}"（定语从句，修饰名词 **${ante.text}**——它给这个名词补充信息，翻译时通常前置成"……的"）`
        : `"${shrink(tail)}"（定语从句，修饰前面的名词）`,
    );
    if (out.length >= 2) break;
  }

  // ② 句首的介词短语 / 分词短语 → 状语（修饰全句或主句动作）
  const head = en.match(/^([A-Za-z][A-Za-z'’\- ]{2,40}?[,，])/);
  if (head && !/^(The|This|That|These|Those|It|He|She|They|We|I|A|An)\b/.test(head[1])) {
    out.push(`"${head[1].trim()}"（句首状语，交代背景或前提——中文习惯先译它）`);
  }

  // ③ 名词后的介词短语 → 后置定语
  for (const m of en.matchAll(/\b([a-z]{4,})\s+(of|in|on|for|with|from|by|to)\s+([a-z][^,;.]{2,40})/gi)) {
    const seg = `${m[1]} ${m[2]} ${m[3]}`.trim();
    if (out.some((o) => o.includes(seg.slice(0, 14)))) continue;
    out.push(`"${shrink(seg)}"（后置定语，修饰名词 **${m[1]}**）`);
    if (out.length >= 4) break;
  }

  // ④ 插入语（成对逗号/破折号之间）
  for (const m of en.matchAll(/[,—–]\s*([^,;—–]{6,60})\s*[,—–]/g)) {
    const seg = m[1].trim();
    if (/\b(is|are|was|were|has|have|had|will|would|can|could|should|must)\b/i.test(seg)) continue;
    if (seg.split(/\s+/).length > 9) continue;
    if (out.some((o) => o.includes(seg.slice(0, 12)))) continue;
    out.push(`"${shrink(seg)}"（插入语——删掉不影响主句结构，可先跳过）`);
    if (out.length >= 5) break;
  }

  return out.slice(0, 5);
}

/* ------------------------------------------------------------------ */
/* 第 5 步：翻译路径                                                    */
/* ------------------------------------------------------------------ */

function buildPath(segs: Segment[], parallels: ParallelGroup[], en: string): { steps: string[]; summary: string } {
  const steps: string[] = [];
  const subs = segs.filter((s) => !s.isMain && !s.type.startsWith('并列分句'));
  const main = segs.find((s) => s.isMain);

  let n = 1;
  for (const s of subs) {
    const shrink = s.text.length > 34 ? s.text.slice(0, 32) + '…' : s.text;
    steps.push(`${n++}. 先译【${s.type}】「${shrink}」——${s.hint}`);
  }
  if (main) {
    const shrink = main.text.length > 34 ? main.text.slice(0, 32) + '…' : main.text;
    steps.push(`${n++}. 再译【主句】「${shrink}」——这是整句的骨架`);
  }
  if (parallels.length) {
    steps.push(`${n++}. 处理平行结构：${parallels[0].members.join(' ／ ')}——平行成分逐一对译，不要打乱顺序`);
  }
  // 逻辑连接词：转折 / 因果 / 递进，译文必须体现
  const hitLogic = Object.keys(LOGIC_WORDS).filter((w) =>
    new RegExp(`(^|[,;\\s])${w.replace(' ', '\\s+')}\\b`, 'i').test(en),
  );
  if (hitLogic.length) {
    const w = hitLogic[0];
    steps.push(`${n++}. 注意逻辑词 **${w}**：${LOGIC_WORDS[w]}——译文要把这层关系译出来，否则会读成平铺直叙。`);
  }

  const relation = subs.length ? (SUB_INFO[clean(subs[0].text.split(/\s+/).find((w) => SUB_INFO[clean(w)]) ?? '')]?.relation ?? '修饰') : null;
  steps.push(
    subs.length
      ? `${n}. 按「${relation}」关系组装：中文习惯把${relation}类信息放在主句之前，再补上主句的结论。`
      : `${n}. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。`,
  );

  return {
    steps,
    summary: subs.length
      ? `全句由 ${subs.length} 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。`
      : '这是单层结构，找到主干后直接顺译即可。',
  };
}

/* ------------------------------------------------------------------ */
/* 主入口                                                              */
/* ------------------------------------------------------------------ */

export function analyzeFiveStep(en: string): FiveStep | undefined {
  const text = en.trim();
  if (!text || text.length < 12) return undefined;

  const predicates = buildPredicates(text);
  const realPredicates = predicates.filter((p) => p.role === 'predicate');
  const distractors = predicates.filter((p) => p.role !== 'predicate');

  const breaks = buildBreaks(text, realPredicates);
  const segments = buildSegments(text, breaks);
  const parallels = buildParallels(text);
  const modifiers = buildModifiers(text, tagTerms(text));
  const path = buildPath(segments, parallels, text);

  const main = segments.find((s) => s.isMain);

  // 第三步补充：用句法分析取出主干的 主语 / 谓语 / 宾语或表语
  const sv = { chunks: [] as Array<{ role: string; text: string; start: number; end: number }> };
  const cut = (t?: string) => (t && t.length > 40 ? t.slice(0, 38) + '...' : t ?? '');
  // 从主句段自身拆主干：主句内的谓语动词之前的 = 主语，之后的 = 宾语/表语
  const mainPreds = main
    ? realPredicates.filter((q) => q.start >= main.start && q.end <= main.end)
    : [];
  const sPart = mainPreds.length
    ? { text: text.slice(main!.start, mainPreds[0].start).trim() }
    : undefined;
  const lastPred = mainPreds[mainPreds.length - 1];
  const vPart = mainPreds.length
    ? { text: mainPreds.map((q) => q.text).join(' + ') }
    : undefined;
  const oPart = lastPred && main
    ? { text: text.slice(lastPred.end, main!.end).trim() }
    : undefined;
  const parts: string[] = [];
  if (sPart) parts.push('主语 = "' + cut(sPart.text) + '"');
  if (vPart) parts.push('谓语 = "' + cut(vPart.text) + '"');
  if (oPart && oPart.text) parts.push('宾语/表语 = "' + cut(oPart.text) + '"');
  const trunk = parts.join('；');
  if (main && trunk) main.hint = '主干拆解 —— ' + trunk;

  return {
    step1: {
      predicates,
      count: realPredicates.length,
      summary: realPredicates.length
        ? `句中共有 ${realPredicates.length} 个谓语动词（${realPredicates.map((p) => p.text).join(' / ')}），意味着有 ${realPredicates.length} 件事要译${distractors.length ? `；另有 ${distractors.length} 个"看着像动词其实不是"的干扰项，需要排除` : ''}。`
        : '未识别到明确的谓语动词，可先按标点分段理解。',
    },
    step2: {
      breaks,
      summary: breaks.length
        ? `找到 ${breaks.length} 个断点，可以把句子切成 ${segments.length} 段。断句依据是标点与连接词。`
        : '句中无明显断点，结构较简单。',
    },
    step3: {
      segments,
      mainText: main?.text ?? '',
      summary: main
        ? `主句是「${main.text.length > 46 ? main.text.slice(0, 44) + '…' : main.text}」，其余 ${segments.length - 1} 段都是挂在这一主干上的修饰或从句。` +
          (trunk ? ` 主干拆解：${trunk}` : '')
        : '未能确定主句，建议先按标点切分逐段理解。',
    },
    step4: {
      parallels,
      modifiers,
      summary: parallels.length || modifiers.length
        ? `平行动 ${parallels.length} 处、修饰成分 ${modifiers.length} 处。平行结构要逐项对应翻译；插入语可先跳过。`
        : '本句没有明显的平行结构或插入成分。',
    },
    step5: path,
    generatedBy: 'rule',
  };
}
