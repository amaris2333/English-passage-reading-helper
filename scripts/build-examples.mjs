import { readFileSync, writeFileSync } from 'node:fs';
import { gzipSync, gunzipSync } from 'node:zlib';

const ecdict = JSON.parse(gunzipSync(readFileSync('public/dict/ecdict.json.gz')).toString('utf8'));
const vocab = new Set(Object.keys(ecdict.idx));
console.log('词典词条:', vocab.size);

// WordNet 释义（作为没有例句时的兜底）
let wnDef = {};
try {
  const wn = JSON.parse(readFileSync('D:/workbuddy123/_examples.json', 'utf8'));
  for (const [w, v] of Object.entries(wn)) if (v[1]) wnDef[w] = v[1];
  console.log('WordNet 释义条数:', Object.keys(wnDef).length);
} catch { console.log('（未找到 WordNet 释义文件，跳过兜底）'); }

const COMPLEX = /\b(which|whom|whose|whereas|notwithstanding|nevertheless|consequently|thereby|inasmuch)\b/i;

/** 不当内容过滤：Tatoeba 是用户贡献语料，混有脏话/粗俗表达，教育产品必须剔除 */
const BANNED = /\b(fuck\w*|shit\w*|bitch\w*|bastard\w*|asshole|arse\w*|cunt|dick\w*|piss\w*|crap\w*|slut|whore|fag\w*|nigg\w*|wank\w*|bollock\w*|twat|douche\w*|jackass|dumbass|god damn|goddamn|damn|bloody hell|screw you|sucks ass|kiss my ass|shut the fuck|moron|idiot|stupid)\b/i;

/** 停用词：算相似度时排除，避免 "is a the" 这类虚词干扰 */
const STOP = new Set(('a an the this that these those is are was were be been being of to in on at for with by from as and or but not no ' +
  'it its he she they we i you his her their my our them him us who whom which that what there here').split(' '));

/** 归一化词集（去掉目标词与停用词） */
function wordSet(s, target) {
  return new Set((s.toLowerCase().match(/[a-z][a-z']*/g) || []).filter(w => w !== target && !STOP.has(w)));
}

/** 两句的内容词重合度（Jaccard）：越高越雷同 */
function similarity(a, b, target) {
  const A = wordSet(a, target), B = wordSet(b, target);
  if (!A.size || !B.size) return 1;
  let inter = 0;
  for (const w of A) if (B.has(w)) inter++;
  return inter / (new Set([...A, ...B]).size);
}

/** 「X is a Y」型空洞句：唯一动词是 be，且没有其他实义内容 */
function isCopulaShell(s) {
  return /^(the |a |an |this |that |it |he |she |they |we |my |his |her |their |our |there )?[a-z' -]{1,30}\s+(is|are|was|were)\s+(a |an |the )?[a-z' -]{2,40}[.!?]$/i.test(s.trim());
}

function isClean(s) {
  if (BANNED.test(s)) return false;
  if (/!{2,}|\?{2,}/.test(s)) return false;              // 连续标点，多为情绪化内容
  if (s === s.toUpperCase() && /[A-Z]{4,}/.test(s)) return false; // 全大写喊话
  if (/\b(kill|die|dead|murder|suicide|nazi|hitler|porn|sex|naked|rape|drug)\b/i.test(s)) return false;
  return true;
}

/** 简单度：分越低越简单 */
function score(s, words) {
  let v = 0;
  v += words.length * 1.6;                                  // 短句优先
  v += s.length * 0.05;
  v += (s.match(/,/g) || []).length * 3;                    // 逗号多 => 结构复杂
  v += (s.match(/\b[A-Za-z]{9,}\b/g) || []).length * 2.0;   // 长词多 => 难
  if (COMPLEX.test(s)) v += 8;                              // 从句标记
  if (/["“”]/.test(s)) v += 3;                              // 引号
  if (/\b\w+'/.test(s)) v += 1.5;                           // 缩写
  if (isCopulaShell(s)) v += 16;                          // 「X is a Y」空洞句，无学习价值
  if (/\b(please|thank you|thanks|sorry|hello)\b/i.test(s)) v -= 3;   // 日常礼貌用语最简单
  if (/\b(is|are|was|were|has|have|can|will)\b/i.test(s)) v -= 1;     // 常规句式更易读
  return v;
}

const best = new Map(); // word -> { ex: string[], score: number }

const raw = readFileSync('D:/workbuddy123/_tat/eng.tsv', 'utf8');
const lines = raw.split('\n');
console.log('Tatoeba 句子数:', lines.length);

let used = 0;
for (const line of lines) {
  if (!line) continue;
  const t1 = line.indexOf('\t');
  if (t1 < 0) continue;
  const t2 = line.indexOf('\t', t1 + 1);
  if (t2 < 0) continue;
  const s = line.slice(t2 + 1).trim();

  if (s.length < 18 || s.length > 105) continue;
  if (!/[.!?]$/.test(s)) continue;
  if (/\d|https?:|@|\/|\*|_|\||\[|\]/.test(s)) continue;
  if (!/^["“(]?[A-Z]/.test(s)) continue;
  if (!isClean(s)) continue;

  const words = s.match(/[A-Za-z][A-Za-z'’-]*/g) || [];
  if (words.length < 7 || words.length > 18) continue;

  const sc = score(s, words);
  const lower = words.map((w) => w.toLowerCase());
  const seen = new Set();
  for (let i = 0; i < lower.length; i++) {
    const w = lower[i];
    if (!vocab.has(w) || seen.has(w)) continue;
    seen.add(w);
    const cur = best.get(w);
    if (!cur) { best.set(w, { ex: [s], scores: [sc] }); continue; }
    if (cur.ex.includes(s)) continue;
    // 多样性约束：与已选例句的内容词重合度 > 34% 就弃用，
    // 避免「Tom is a national hero. / Sami is a National Guard.」这种只换了个词的雷同例句
    if (cur.ex.some(e => similarity(e, s, w) > 0.34)) continue;
    if (cur.ex.length < 2) { cur.ex.push(s); cur.scores.push(sc); continue; }
    // 已满 2 条：用更简单的替换掉最差的那条
    const worst = Math.max(...cur.scores);
    if (sc < worst) {
      const k = cur.scores.indexOf(worst);
      cur.ex[k] = s;
      cur.scores[k] = sc;
    }
  }
  used++;
}
console.log('参与统计的候选句子:', used);

// 二次筛选：只保留得分最低的 1~2 条
const result = [];
const idx = {};
for (const [w, rec] of best) {
  const exs = rec.ex.slice(0, 2);
  if (!exs.length) continue;
  idx[w] = result.length;
  result.push([exs.join('\u0001'), wnDef[w] ?? null]);
}
// 只靠 WordNet 释义、没有例句的词，也收进来做兜底
let defOnly = 0;
for (const [w, d] of Object.entries(wnDef)) {
  if (idx[w] !== undefined) continue;
  idx[w] = result.length;
  result.push(['', d]);
  defOnly++;
}

const payload = JSON.stringify({ idx, arr: result });
const gz = gzipSync(Buffer.from(payload, 'utf8'), { level: 9 });
writeFileSync('public/dict/examples.json.gz', gz);
console.log('有例句的词:', result.length - defOnly, '| 仅释义的词:', defOnly, '| 合计:', result.length);
console.log('原始:', (Buffer.byteLength(payload) / 1024 / 1024).toFixed(2), 'MB → 压缩:', (gz.length / 1024 / 1024).toFixed(2), 'MB');

for (const t of ['suite', 'significant', 'wetland', 'methane', 'emission', 'undermine', 'contingent', 'escalate']) {
  const i = idx[t];
  console.log(t, '->', i === undefined ? '(无)' : JSON.stringify(result[i]));
}
