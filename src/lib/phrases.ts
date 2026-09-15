import { PHRASE_LIST } from '../data/phrases';
import type { Phrase } from '../types';

/** 常见不规则动词的首词变体，保证 "give rise to" 也能匹配 "gave rise to" */
const IRREG: Record<string, string> = {
  give: 'gives|giving|gave|given',
  take: 'takes|taking|took|taken',
  make: 'makes|making|made',
  come: 'comes|coming|came',
  lead: 'leads|leading|led',
  hold: 'holds|holding|held',
  keep: 'keeps|keeping|kept',
  break: 'breaks|breaking|broke|broken',
  run: 'runs|running|ran',
  stand: 'stands|standing|stood',
  find: 'finds|finding|found',
  bear: 'bears|bearing|bore|borne',
  meet: 'meets|meeting|met',
  draw: 'draws|drawing|drew|drawn',
  shed: 'sheds|shedding|shed',
  pay: 'pays|paying|paid',
  cast: 'casts|casting|cast',
  cut: 'cuts|cutting|cut',
  set: 'sets|setting|set',
  put: 'puts|putting|put',
  bring: 'brings|bringing|brought',
  build: 'builds|building|built',
  catch: 'catches|catching|caught',
  get: 'gets|getting|got|gotten',
  lay: 'lays|laying|laid',
  lose: 'loses|losing|lost',
  seek: 'seeks|seeking|sought',
  send: 'sends|sending|sent',
  speak: 'speaks|speaking|spoke|spoken',
  speed: 'speeds|speeding|sped',
  wear: 'wears|wearing|wore|worn',
  win: 'wins|winning|won',
  wipe: 'wipes|wiping|wiped',
  scale: 'scales|scaling|scaled',
  gain: 'gains|gaining|gained',
  raise: 'raises|raising|raised',
  turn: 'turns|turning|turned',
  end: 'ends|ending|ended',
  shore: 'shores|shoring|shored',
  phase: 'phases|phasing|phased',
  roll: 'rolls|rolling|rolled',
  weigh: 'weighs|weighing|weighed',
};

const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

interface Compiled {
  re: RegExp;
  text: string;
  zh: string;
  kind: string;
  words: number;
}

const COMPILED: Compiled[] = PHRASE_LIST
  .map(([text, zh, kind]) => {
    const words = text.split(' ');
    const head = words[0].toLowerCase();
    const variants = IRREG[head] ? `(?:${IRREG[head]}|${esc(head)})` : `${esc(head)}(?:s|es|ed|d|ing)?`;
    const tail = words.slice(1).map(esc).join('\\s+');
    const re = new RegExp(`\\b${variants}${tail ? '\\s+' + tail : ''}\\b`, 'i');
    return { re, text, zh, kind, words: words.length };
  });

/**
 * 从句子中提取「值得记录的词组」。
 * 标准：短语动词 / 固定学术搭配 / 习语 / 多词介词框架（见 src/data/phrases.ts 顶部说明）。
 * 长词组优先，避免 "give rise to" 被 "rise to" 抢走。
 */
export function extractPhrases(en: string): Phrase[] {
  const picked: Array<{ start: number; end: number; words: number; phrase: Phrase }> = [];
  for (const c of COMPILED) {
    const m = c.re.exec(en);
    if (!m) continue;
    picked.push({ start: m.index, end: m.index + m[0].length, words: c.words, phrase: { id: '', text: m[0], zh: c.zh, kind: c.kind } });
  }
  picked.sort((a, b) => b.words - a.words || a.start - b.start);

  const used: Array<[number, number]> = [];
  const out: Phrase[] = [];
  let n = 0;
  for (const f of picked) {
    if (used.some(([s, e]) => f.start < e && f.end > s)) continue;
    used.push([f.start, f.end]);
    out.push({ ...f.phrase, id: `ph-${f.start}-${n++}` });
    if (out.length >= 5) break;
  }
  return out;
}
