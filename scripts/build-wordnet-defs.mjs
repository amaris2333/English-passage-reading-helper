import { readFileSync, writeFileSync } from 'node:fs';
import { gunzipSync } from 'node:zlib';

const DICT = 'node_modules/wordnet-db/dict';
const FILES = ['data.noun', 'data.verb', 'data.adj', 'data.adv'];

// 现有 ECDICT 词表（决定保留哪些词，避免产出无用的例句）
const ecdict = JSON.parse(gunzipSync(readFileSync('public/dict/ecdict.json.gz')).toString('utf8'));
const vocab = new Set(Object.keys(ecdict.idx));
console.log('ECDICT 词条数:', vocab.size);

/** lemma -> { ex: Set, def: string } */
const out = new Map();

function addEx(lemma, ex) {
  if (!vocab.has(lemma)) return;
  let rec = out.get(lemma);
  if (!rec) { rec = { ex: new Set(), def: '' }; out.set(lemma, rec); }
  if (rec.ex.size < 4) rec.ex.add(ex);
}
function addDef(lemma, def) {
  if (!vocab.has(lemma)) return;
  let rec = out.get(lemma);
  if (!rec) { rec = { ex: new Set(), def: '' }; out.set(lemma, rec); }
  if (!rec.def && def) rec.def = def;
}

for (const f of FILES) {
  let n = 0;
  for (const line of readFileSync(`${DICT}/${f}`, 'utf8').split('\n')) {
    if (!/^\d/.test(line)) continue; // 跳过版权头
    const bar = line.indexOf(' | ');
    if (bar < 0) continue;
    const left = line.slice(0, bar);
    const gloss = line.slice(bar + 3).trim();

    // 词元：空格分词后，第 4 个字段是 w_cnt（十六进制），其后每 2 个字段一组
    const parts = left.split(' ');
    const wCnt = parseInt(parts[3], 16);
    if (!Number.isFinite(wCnt) || wCnt < 1 || wCnt > 20) continue;
    const lemmas = [];
    for (let i = 0; i < wCnt; i++) {
      const w = parts[4 + i * 2];
      if (w) lemmas.push(w.toLowerCase());
    }

    // 例句：gloss 中双引号内的部分
    const exs = [...gloss.matchAll(/"([^"]{6,120})"/g)].map((m) => m[1].trim());
    // 释义：去掉例句后的剩余部分
    const def = gloss.replace(/"[^"]*"/g, '').replace(/;\s*;/g, ';').replace(/^[;\s]+|[;\s]+$/g, '').split(';')[0].trim();

    for (const l of lemmas) {
      if (l.includes('_')) continue;          // 只保留单词
      if (!/^[a-z][a-z'-]*$/.test(l)) continue;
      for (const e of exs) addEx(l, e);
      addDef(l, def);
    }
    n++;
  }
  console.error(`${f}: 处理 ${n} 个同义词集`);
}

/** 例句简单度打分：越短越简单；优先完整句子 */
function score(s) {
  const words = (s.match(/[A-Za-z][A-Za-z'’-]*/g) || []).length;
  let v = words * 2 + Math.max(0, s.length - 40) * 0.15;
  if (!/[.!?]$/.test(s)) v += 6;                    // 不是完整句子，降权
  if (/[;:]/.test(s)) v += 4;                       // 含分号冒号，偏复杂
  if (/\b(which|whom|whose|whereas|notwithstanding)\b/i.test(s)) v += 4;
  if (words < 4) v += 5;                            // 太短（可能只是短语）
  return v;
}

const result = {};
let withEx = 0;
for (const [w, rec] of out) {
  const exs = [...rec.ex]
    .filter((s) => /^["“(]?[A-Za-z]/.test(s) && /[.!?]["”)]?$/.test(s))
    .sort((a, b) => score(a) - score(b))
    .slice(0, 2);
  const def = rec.def && rec.def.length > 8 && rec.def.length < 160 ? rec.def : '';
  if (!exs.length && !def) continue;
  if (exs.length) withEx++;
  result[w] = exs.length ? [exs, def] : [[], def];
}

const json = JSON.stringify(result);
writeFileSync('D:/workbuddy123/_examples.json', json, 'utf8');
console.log('有例句的词条:', withEx, '/ 总产出:', Object.keys(result).length);
console.log('原始大小:', (Buffer.byteLength(json) / 1024 / 1024).toFixed(2), 'MB');

for (const t of ['suite', 'significant', 'wetland', 'methane', 'emission', 'undermine', 'contingent']) {
  console.log(t, '->', JSON.stringify(result[t]));
}
