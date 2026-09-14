import type { Article, ChunkRole, Difficulty, Paragraph, Phrase, Sentence } from '../types';
import { countWords } from '../lib/split';
import { SCHEMA_VERSION } from '../types';

type ChunkSpec = [ChunkRole, string, string?];

interface SentSpec {
  en: string;
  zh?: string;
  pt?: string;
  sk?: string;
  ch?: ChunkSpec[];
  notes?: string[];
  ph?: [string, string][];
}

interface ParaSpec {
  heading?: string;
  sents: SentSpec[];
}

interface ArticleSpec {
  id: string;
  title: string;
  titleZh: string;
  source: string;
  tags: string[];
  difficulty: Difficulty;
  paras: ParaSpec[];
}

const ARTICLES: ArticleSpec[] = [
  {
    id: 'sample-ai-hesitate',
    title: 'When Algorithms Learn to Hesitate',
    titleZh: '当算法学会迟疑',
    source: '样例范文（自撰）',
    tags: ['人工智能', '科技互联网'],
    difficulty: 4,
    paras: [
      {
        sents: [
          {
            en: 'For most of the past decade, the story of artificial intelligence was a story of speed.',
            zh: '在过去十年的大部分时间里，人工智能的故事是一个关于速度的故事。',
          },
          {
            en: 'Bigger models trained on more data produced better results, and the industry raced to build the largest systems it could afford.',
            zh: '用更多数据训练出的更大模型产生了更好的结果，整个行业竞相建造它负担得起的最大系统。',
            pt: '并列句：分句1 + and + 分句2（内含定语从句）',
            sk: 'Bigger models (S) produced (V) better results (O) | the industry (S) raced (V) to build... (O)',
            ch: [
              ['S', 'Bigger models trained on more data', '过去分词短语 trained on more data 作后置定语，修饰 models'],
              ['V', 'produced', ''],
              ['O', 'better results', ''],
              ['S', 'the industry', ''],
              ['V', 'raced', ''],
              ['O', 'to build the largest systems it could afford', '不定式作宾语；其中 it could afford 是省略 that 的定语从句，修饰 systems'],
            ],
            notes: ['race to do sth. 竞相做某事，比 try to do 更有"你追我赶"的画面感'],
            ph: [
              ['race to do sth.', '竞相做某事'],
              ['afford', '负担得起（常用于 can/could/be able to afford）'],
            ],
          },
        ],
      },
      {
        sents: [
          {
            en: 'That assumption is now being quietly revised.',
            zh: '这一假设如今正在被悄然修正。',
          },
          {
            en: 'As models grow more capable, researchers have begun to worry less about what they can do and more about whether they know when to stop.',
            zh: '随着模型能力越来越强，研究者们开始不那么担心它们能做什么，而更担心它们是否知道何时该停下来。',
            pt: 'As 状语从句 + 主句（less about A and more about B 对比结构）',
            sk: 'researchers (S) have begun (V) to worry less about A and more about B (O)',
            ch: [
              ['M', 'As models grow more capable', 'as 引导伴随/原因状语从句，意为"随着…"'],
              ['S', 'researchers', ''],
              ['V', 'have begun', ''],
              ['O', 'to worry less about what they can do and more about whether they know when to stop', 'what 从句与 whether 从句并列作 about 的宾语；when to stop 是不定式短语作 know 的宾语'],
            ],
            notes: ['less about A and more about B 是外刊高频对比结构，用来表达"重心转移"'],
            ph: [
              ['grow more capable', '能力越来越强（grow + adj. 表示逐渐变化）'],
              ['worry less about A and more about B', '不那么担心 A，而更担心 B'],
            ],
          },
        ],
      },
      {
        sents: [
          {
            en: 'The problem is not hallucination, the familiar failure in which a model invents facts with complete confidence.',
            zh: '问题不在于幻觉——那种模型以十足的自信编造事实的常见失误。',
            pt: '主句 + 同位语（内含 in which 定语从句）',
            sk: 'The problem (S) is (V) not hallucination (C)',
            ch: [
              ['S', 'The problem', ''],
              ['V', 'is', ''],
              ['C', 'not hallucination', ''],
              ['Appositive', 'the familiar failure in which a model invents facts with complete confidence', '作 hallucination 的同位语，起解释作用；in which 引导定语从句修饰 failure'],
            ],
            notes: ['同位语是对前面名词的"重命名/解释"，外刊常用它来夹带背景信息'],
            ph: [
              ['with complete confidence', '带着十足的自信'],
              ['invent facts', '编造事实'],
            ],
          },
          { en: 'It is something subtler.', zh: '而是某种更微妙的东西。' },
          {
            en: 'A model asked a question it cannot answer will often produce a fluent, plausible paragraph instead of admitting ignorance, and fluency is precisely what makes the error hard to detect.',
            zh: '一个被问到无法回答的问题的模型，往往会生成一段流畅、看似合理的文字，而不是承认自己的无知；而这种流畅恰恰使得错误难以察觉。',
            pt: '并列句：长主语 + 谓语 / and + 主句（what 从句作表语）',
            sk: 'A model (S) will produce (V) a paragraph (O) | fluency (S) is (V) what makes the error hard to detect (C)',
            ch: [
              ['S', 'A model asked a question it cannot answer', '中心词 model；asked a question 是过去分词短语作后置定语；it cannot answer 是省略 that 的定语从句修饰 question'],
              ['V', 'will often produce', ''],
              ['O', 'a fluent, plausible paragraph', ''],
              ['M', 'instead of admitting ignorance', '介词短语作对照状语'],
              ['S', 'fluency', ''],
              ['V', 'is', ''],
              ['C', 'what makes the error hard to detect', 'what 引导的表语从句；hard to detect 是宾语补足语'],
            ],
            notes: ['instead of + doing 表示"而不是…"，是并列对比的常用手段'],
            ph: [
              ['instead of doing sth.', '而不是做某事'],
              ['admit ignorance', '承认无知'],
              ['hard to detect', '难以察觉'],
            ],
          },
        ],
      },
      {
        sents: [
          {
            en: 'Several labs have therefore started training models to say "I don\'t know".',
            zh: '因此，若干实验室已开始训练模型说"我不知道"。',
          },
          {
            en: 'The technique sounds trivial, but it turns out to be surprisingly difficult to get right.',
            zh: '这个技巧听起来微不足道，但事实证明，要把它做对却出奇地困难。',
            pt: '转折并列句',
            sk: 'The technique (S) sounds (V) trivial (C) | it (S) turns out (V) to be difficult (C)',
            ch: [
              ['S', 'The technique', ''],
              ['V', 'sounds', '系动词'],
              ['C', 'trivial', ''],
              ['S', 'it', '形式主语'],
              ['V', 'turns out', ''],
              ['C', 'to be surprisingly difficult to get right', '真正的主语；get right 意为"做对、弄妥当"'],
            ],
            ph: [
              ['turn out to be', '结果是；事实证明是'],
              ['get sth. right', '把某事做对'],
            ],
          },
          {
            en: 'Reward a model too generously for hedging and it becomes evasive, refusing questions it could in fact answer well.',
            zh: '如果对模型的"含糊其辞"奖励得过于慷慨，它就会变得闪躲，拒绝那些它其实能很好回答的问题。',
            pt: '祈使句 + and + 结果句（祈使句相当于 if 条件句）',
            sk: 'Reward (V) a model (O) → it (S) becomes (V) evasive (C)',
            ch: [
              ['V', 'Reward', '祈使句开头，等价于 If you reward...'],
              ['O', 'a model', ''],
              ['S', 'it', ''],
              ['V', 'becomes', ''],
              ['C', 'evasive', ''],
              ['M', 'refusing questions it could in fact answer well', '现在分词短语作伴随状语；it could answer well 是定语从句修饰 questions'],
            ],
            notes: ['「祈使句 + and + 主句」是外刊常用的条件表达，比 if 更紧凑有力'],
            ph: [
              ['hedge', '（说话）含糊其辞、留有余地'],
              ['in fact', '事实上（用于纠正读者的预期）'],
            ],
          },
          {
            en: 'Punish hesitation too harshly and it reverts to confident fabrication.',
            zh: '如果对迟疑惩罚得过于严厉，它又会回到自信编造的老路上。',
            ph: [['revert to', '回到（某种状态）']],
          },
        ],
      },
      {
        sents: [
          {
            en: 'What makes this hard is that "knowing what you know" is not a single skill but a cluster of them.',
            zh: '这件事之所以困难，是因为"知道自己知道什么"并非单一技能，而是一组技能。',
            pt: 'What 主语从句 + that 表语从句（not A but B 结构）',
            sk: 'What makes this hard (S) is (V) that... (C)',
            ch: [
              ['S', 'What makes this hard', 'what 引导的主语从句，what 在从句中作主语'],
              ['V', 'is', ''],
              ['C', 'that "knowing what you know" is not a single skill but a cluster of them', 'that 引导表语从句；not...but... 意为"不是…而是…"'],
            ],
            notes: ['What makes X hard is that... 是外刊解释原因的经典句式'],
            ph: [
              ['not A but B', '不是 A 而是 B'],
              ['a cluster of', '一簇、一组'],
            ],
          },
          {
            en: 'It requires calibrating uncertainty, recognising the limits of one\'s training data, and distinguishing a genuinely open question from a poorly phrased one.',
            zh: '它需要校准不确定性、认识到自身训练数据的局限，并把一个真正开放的问题与一个表述拙劣的问题区分开来。',
            pt: '简单句 + 三项并列宾语',
            sk: 'It (S) requires (V) calibrating..., recognising..., and distinguishing... (O)',
            ch: [
              ['S', 'It', ''],
              ['V', 'requires', ''],
              ['O', 'calibrating uncertainty, recognising the limits of one\'s training data, and distinguishing a genuinely open question from a poorly phrased one', '三个动名词短语并列作宾语'],
            ],
            ph: [
              ['distinguish A from B', '区分 A 与 B'],
              ['calibrate', '校准（比 adjust 更专业，强调"量上的精确调整"）'],
            ],
          },
        ],
      },
      {
        sents: [
          { en: 'Progress has been uneven, and the benchmarks used to measure it remain crude.', zh: '进展并不均衡，而用来衡量进展的基准测试仍然粗糙。' },
          { en: 'Still, the shift in emphasis is significant.', zh: '尽管如此，这一重心的转移意义重大。' },
          {
            en: 'An industry that once sold certainty is now spending real money on doubt.',
            zh: '一个曾经贩卖确定性的行业，如今正在为"怀疑"投入真金白银。',
            pt: '定语从句 + 现在进行时',
            sk: 'An industry (S) is spending (V) real money (O)',
            ch: [
              ['S', 'An industry that once sold certainty', 'that 引导定语从句修饰 industry'],
              ['V', 'is now spending', ''],
              ['O', 'real money', ''],
              ['M', 'on doubt', '介词短语，与 once sold certainty 形成强烈对比'],
            ],
            notes: ['sell certainty / spend money on doubt 的对照是全句的修辞核心'],
            ph: [
              ['spend money on sth.', '在某事上花钱'],
              ['the shift in emphasis', '重心的转移'],
            ],
          },
        ],
      },
      {
        sents: [
          { en: 'Regulators have noticed.', zh: '监管机构已经注意到了这一点。' },
          {
            en: "Under the European Union's AI Act, systems deployed in high-risk domains must document how they handle uncertainty, a requirement that few current models can satisfy without substantial redesign.",
            zh: "根据欧盟的《人工智能法案》，部署在高风险领域的系统必须记录它们如何处理不确定性——而这一要求，目前几乎没有模型能在不做实质性重新设计的情况下满足。",
            pt: '主句 + 同位语（内含 that 定语从句）',
            sk: 'systems (S) must document (V) how they handle uncertainty (O)',
            ch: [
              ['M', "Under the European Union's AI Act", '句首介词短语作依据状语'],
              ['S', 'systems deployed in high-risk domains', 'deployed... 过去分词短语作后置定语'],
              ['V', 'must document', ''],
              ['O', 'how they handle uncertainty', 'how 引导的宾语从句'],
              ['Appositive', 'a requirement that few current models can satisfy without substantial redesign', '概括前面整件事，作同位语；that 从句修饰 requirement'],
            ],
            ph: [
              ['deploy', '部署（技术/系统的常用动词）'],
              ['without substantial redesign', '不进行实质性重新设计'],
            ],
          },
          {
            en: 'Whether such rules will make systems safer or merely better at paperwork remains an open question.',
            zh: '这类规则究竟会让系统更安全，还是仅仅让它们在 paperwork 上做得更好，仍然是一个悬而未决的问题。',
            pt: 'Whether 主语从句 + 谓语',
            sk: 'Whether such rules will make systems safer or better (S) remains (V) an open question (C)',
            ch: [
              ['S', 'Whether such rules will make systems safer or merely better at paperwork', 'whether...or... 引导的主语从句'],
              ['V', 'remains', ''],
              ['C', 'an open question', ''],
            ],
            notes: ['remains an open question 是外刊收尾常用语，表示"尚无定论"'],
            ph: [
              ['remain an open question', '仍然悬而未决'],
              ['merely', '仅仅（暗含"不过如此"的贬义）'],
            ],
          },
        ],
      },
      {
        sents: [
          {
            en: 'For now, the most useful thing a model can learn may be the oldest lesson in engineering: that a system which cannot say no is not yet finished.',
            zh: '就目前而言，一个模型能学到的最有用的东西，也许是工程学里最古老的一课：一个不会说"不"的系统，还没有真正完成。',
            pt: '主句 + 同位语从句（内含定语从句）',
            sk: 'the most useful thing (S) may be (V) the oldest lesson (C)',
            ch: [
              ['M', 'For now', ''],
              ['S', 'the most useful thing a model can learn', 'a model can learn 是省略 that 的定语从句'],
              ['V', 'may be', ''],
              ['C', 'the oldest lesson in engineering', ''],
              ['Appositive', 'that a system which cannot say no is not yet finished', 'that 引导同位语从句解释 lesson；其中 which cannot say no 修饰 system'],
            ],
            notes: ['冒号后的 that 从句是对 lesson 的具体说明，这是外刊结尾"点题"的常见写法'],
            ph: [
              ['for now', '就目前而言'],
              ['say no', '拒绝、说"不"'],
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'sample-crispr-quiet',
    title: 'The Quiet Revolution in Gene Editing',
    titleZh: '基因编辑的静默革命',
    source: '样例范文（自撰）',
    tags: ['生物医药', '科技互联网'],
    difficulty: 4,
    paras: [
      {
        sents: [
          {
            en: 'In 2012, two research groups independently demonstrated that a bacterial defence system could be reprogrammed to cut DNA at chosen locations.',
            zh: '2012 年，两个研究团队各自独立地证明，细菌的一套防御系统可以被重新编程，从而在选定的位置切割 DNA。',
            pt: '主句 + that 宾语从句（含被动语态）',
            sk: 'two research groups (S) demonstrated (V) that... (O)',
            ch: [
              ['M', 'In 2012', ''],
              ['S', 'two research groups', ''],
              ['V', 'demonstrated', ''],
              ['O', 'that a bacterial defence system could be reprogrammed to cut DNA at chosen locations', 'that 引导宾语从句；could be reprogrammed 为被动；to cut DNA 表目的'],
            ],
            ph: [
              ['reprogramme', '重新编程'],
              ['at chosen locations', '在选定的位置'],
            ],
          },
          {
            en: 'The technique, later called CRISPR, was cheap, fast and astonishingly easy to use.',
            zh: '这项后来被称为 CRISPR 的技术，便宜、快速，而且出奇地容易上手。',
            ch: [
              ['S', 'The technique, later called CRISPR', 'later called CRISPR 是过去分词短语作后置定语'],
              ['V', 'was', ''],
              ['C', 'cheap, fast and astonishingly easy to use', '三项并列表语'],
            ],
          },
          { en: 'Within five years it had spread to nearly every biology laboratory on earth.', zh: '五年之内，它就传播到了地球上几乎每一个生物学实验室。' },
        ],
      },
      {
        sents: [
          { en: 'The first generation of editing tools was, in retrospect, blunt.', zh: '回过头看，第一代编辑工具是粗糙的。' },
          {
            en: "They cut both strands of the double helix and waited for the cell's own repair machinery to paste the ends back together, a process that frequently introduced unwanted mutations.",
            zh: "它们切断双螺旋的两条链，然后等待细胞自身的修复机制把断端重新拼接起来——而这一过程常常引入不受欢迎的突变。",
            pt: '并列谓语 + 同位语（内含 that 定语从句）',
            sk: 'They (S) cut (V) both strands (O) and waited (V) for the machinery (O)',
            ch: [
              ['S', 'They', ''],
              ['V', 'cut', ''],
              ['O', 'both strands of the double helix', ''],
              ['V', 'waited', ''],
              ['O', "for the cell's own repair machinery to paste the ends back together", 'wait for sb./sth. to do 结构'],
              ['Appositive', 'a process that frequently introduced unwanted mutations', '概括前文整个过程；that 从句修饰 process'],
            ],
            ph: [
              ['in retrospect', '回过头看'],
              ['paste the ends back together', '把断端重新拼接起来'],
            ],
          },
          { en: 'For research, this was tolerable.', zh: '对于研究而言，这是可以容忍的。' },
          { en: 'For medicine, it was not.', zh: '对于医学而言，则不然。' },
        ],
      },
      {
        sents: [
          { en: 'A second generation of tools avoids cutting altogether.', zh: '第二代工具则完全避开了"切割"。' },
          {
            en: 'Base editors chemically convert one letter of the genetic code into another without breaking the helix, while prime editors can insert short sequences with a precision that earlier methods could not approach.',
            zh: '碱基编辑器在不破坏螺旋结构的前提下，以化学方式把遗传密码的一个"字母"转换成另一个；而先导编辑器则能以早期方法无法企及的精度插入短序列。',
            pt: 'while 连接的对比并列句（后半含 that 定语从句）',
            sk: 'Base editors (S) convert (V) one letter (O) | prime editors (S) can insert (V) short sequences (O)',
            ch: [
              ['S', 'Base editors', ''],
              ['V', 'convert', ''],
              ['O', 'one letter of the genetic code', ''],
              ['M', 'without breaking the helix', '介词短语作方式状语'],
              ['S', 'prime editors', 'while 引出对比'],
              ['V', 'can insert', ''],
              ['O', 'short sequences', ''],
              ['M', 'with a precision that earlier methods could not approach', 'that 引导定语从句修饰 precision'],
            ],
            notes: ['while 在这里表示"而"，用于两句之间的对比，不是"当…时候"'],
            ph: [
              ['convert A into B', '把 A 转换成 B'],
              ['a precision that... could not approach', '…无法企及的精度'],
            ],
          },
          {
            en: 'Neither is perfect, but both reduce the risk of the chaotic repairs that plagued their predecessors.',
            zh: '两者都不完美，但都降低了那种困扰前代技术的混乱修复的风险。',
            ch: [
              ['S', 'Neither', ''],
              ['V', 'is', ''],
              ['C', 'perfect', ''],
              ['S', 'both', ''],
              ['V', 'reduce', ''],
              ['O', 'the risk of the chaotic repairs that plagued their predecessors', 'that 从句修饰 repairs'],
            ],
            ph: [['plague', '困扰、折磨（比 trouble 语气更强）']],
          },
        ],
      },
      {
        sents: [
          { en: 'The clinical results have begun to arrive.', zh: '临床结果已经开始出现。' },
          {
            en: 'In late 2023 regulators in Britain and the United States approved the first CRISPR-based therapy for sickle-cell disease, a painful inherited condition that affects millions.',
            zh: '2023 年底，英国和美国的监管机构批准了首个基于 CRISPR 的镰状细胞病疗法——这是一种影响数百万人的痛苦遗传病。',
            pt: '主句 + 同位语（内含 that 定语从句）',
            sk: 'regulators (S) approved (V) the first CRISPR-based therapy (O)',
            ch: [
              ['M', 'In late 2023', ''],
              ['S', 'regulators in Britain and the United States', ''],
              ['V', 'approved', ''],
              ['O', 'the first CRISPR-based therapy for sickle-cell disease', ''],
              ['Appositive', 'a painful inherited condition that affects millions', '解释 sickle-cell disease'],
            ],
            ph: [['inherited condition', '遗传性疾病']],
          },
          {
            en: 'Trials in which a single infusion restores healthy haemoglobin production have reported remission in nearly all participants.',
            zh: '那些只需一次输注即可恢复健康血红蛋白生成的试验，报告称几乎全部受试者都出现了缓解。',
            pt: 'in which 定语从句 + 主句',
            sk: 'Trials (S) have reported (V) remission (O)',
            ch: [
              ['S', 'Trials in which a single infusion restores healthy haemoglobin production', 'in which 引导定语从句修饰 trials'],
              ['V', 'have reported', ''],
              ['O', 'remission', ''],
              ['M', 'in nearly all participants', ''],
            ],
            ph: [
              ['a single infusion', '一次输注'],
              ['remission', '（病症）缓解'],
            ],
          },
        ],
      },
      {
        sents: [
          {
            en: 'Cost, however, remains the obstacle that nobody has solved.',
            zh: '然而，成本依然是那个无人解决的障碍。',
            ch: [
              ['S', 'Cost', ''],
              ['V', 'remains', ''],
              ['C', 'the obstacle that nobody has solved', 'that 从句修饰 obstacle'],
            ],
          },
          {
            en: 'The approved therapy carries a price of more than two million dollars per patient, and the health systems most burdened by sickle-cell disease are least able to pay it.',
            zh: '已获批疗法的每位患者价格超过两百万美元，而受镰状细胞病负担最重的医疗体系，恰恰最无力支付。',
            pt: 'and 连接的对比并列句',
            sk: 'The therapy (S) carries (V) a price (O) | the health systems (S) are (V) least able to pay it (C)',
            ch: [
              ['S', 'The approved therapy', ''],
              ['V', 'carries', ''],
              ['O', 'a price of more than two million dollars per patient', ''],
              ['S', 'the health systems most burdened by sickle-cell disease', 'most burdened by... 过去分词短语作后置定语'],
              ['V', 'are', ''],
              ['C', 'least able to pay it', '与前文形成 the most... the least... 的对比'],
            ],
            notes: ['most burdened / least able 形成尖锐对照，是全句的情绪重心'],
            ph: [['carry a price of', '标价、价格高达']],
          },
          {
            en: 'Unless manufacturing becomes dramatically cheaper, the technology will deepen the very inequalities it was meant to relieve.',
            zh: '除非生产制造变得大幅便宜，否则这项技术只会加深它本该缓解的那些不平等。',
            pt: 'Unless 条件状语从句 + 主句（含定语从句）',
            sk: 'the technology (S) will deepen (V) the inequalities (O)',
            ch: [
              ['M', 'Unless manufacturing becomes dramatically cheaper', 'unless = if...not，引导否定条件'],
              ['S', 'the technology', ''],
              ['V', 'will deepen', ''],
              ['O', 'the very inequalities it was meant to relieve', 'very 加强语气（正是那些）；it was meant to relieve 是定语从句'],
            ],
            notes: ['the very + 名词 表示"正是那个…"，常与 meant to do 搭配形成讽刺效果'],
            ph: [
              ['unless', '除非（= if...not）'],
              ['be meant to do sth.', '本该做某事'],
            ],
          },
        ],
      },
      {
        sents: [
          { en: 'There is also a question of scope.', zh: '还有一个适用范围的问题。' },
          {
            en: 'Most inherited diseases are rare, and a regulatory framework designed for blockbuster drugs fits them poorly.',
            zh: '大多数遗传病都很罕见，而一套为"重磅炸弹"药物设计的监管框架，并不适合它们。',
            ch: [
              ['S', 'a regulatory framework designed for blockbuster drugs', 'designed for... 后置定语'],
              ['V', 'fits', ''],
              ['O', 'them', ''],
              ['M', 'poorly', ''],
            ],
            ph: [['blockbuster drug', '重磅炸弹药物（年销售额超 10 亿美元的药）']],
          },
          {
            en: 'Several proposals would treat the editing machinery as a platform and the specific genetic target as an interchangeable module, allowing one approved system to be retargeted without repeating the entire trial process.',
            zh: '若干提案主张：把编辑机制视为一个平台，而把具体的基因靶点视为可替换的模块——这样一来，一个已获批的系统就能被重新定向，而无需重复整个试验流程。',
            pt: '主句（treat A as B and C as D）+ 现在分词结果状语',
            sk: 'Several proposals (S) would treat (V) the machinery (O) as a platform (C) and the target (O) as a module (C)',
            ch: [
              ['S', 'Several proposals', ''],
              ['V', 'would treat', ''],
              ['O', 'the editing machinery', ''],
              ['C', 'as a platform', ''],
              ['O', 'the specific genetic target', ''],
              ['C', 'as an interchangeable module', ''],
              ['M', 'allowing one approved system to be retargeted without repeating the entire trial process', '现在分词短语作结果状语；to be retargeted 为被动不定式'],
            ],
            ph: [
              ['treat A as B', '把 A 当作 B 来对待'],
              ['interchangeable module', '可替换的模块'],
            ],
          },
          {
            en: 'Whether regulators will accept such an approach is unclear, but the alternative — approving thousands of near-identical therapies one at a time — is not viable.',
            zh: '监管机构是否会接受这种做法尚不明朗，但另一种选择——逐一审批数千种几乎相同的疗法——并不可行。',
            pt: 'Whether 主语从句 + but + 转折主句（破折号插入语）',
            sk: 'Whether regulators will accept such an approach (S) is (V) unclear (C) | the alternative (S) is (V) not viable (C)',
            ch: [
              ['S', 'Whether regulators will accept such an approach', 'whether 引导主语从句'],
              ['V', 'is', ''],
              ['C', 'unclear', ''],
              ['S', 'the alternative — approving thousands of near-identical therapies one at a time —', '破折号之间为解释性插入语'],
              ['V', 'is', ''],
              ['C', 'not viable', ''],
            ],
            ph: [
              ['viable', '可行的'],
              ['one at a time', '一次一个'],
            ],
          },
        ],
      },
    ],
  },
];

function buildSentence(spec: SentSpec, articleId: string, pIdx: number, sIdx: number): Sentence {
  const id = `${articleId}-p${pIdx}-s${sIdx}`;
  const analysis = spec.ch
    ? {
        pattern: spec.pt,
        skeleton: spec.sk,
        chunks: spec.ch.map(([role, text, note]) => {
          const start = spec.en.indexOf(text);
          return {
            role,
            text,
            start: start >= 0 ? start : 0,
            end: start >= 0 ? start + text.length : 0,
            note: note || undefined,
          };
        }),
        notes: spec.notes,
        generatedBy: 'human' as const,
      }
    : undefined;

  const phrases: Phrase[] | undefined = spec.ph
    ? spec.ph.map(([text, zh], i) => ({ id: `${id}-ph${i}`, text, zh, level: 'idiomatic' as const }))
    : undefined;

  return {
    id,
    index: sIdx,
    en: spec.en,
    zh: spec.zh,
    wordCount: countWords(spec.en),
    analysis,
    phrases: phrases,
  };
}

function buildArticle(spec: ArticleSpec): Article {
  const paragraphs: Paragraph[] = spec.paras.map((p, pIdx) => ({
    id: `${spec.id}-p${pIdx}`,
    index: pIdx,
    heading: p.heading,
    sentences: p.sents.map((s, sIdx) => buildSentence(s, spec.id, pIdx, sIdx)),
  }));

  const wordCount = paragraphs.reduce((n, p) => n + p.sentences.reduce((m, s) => m + s.wordCount, 0), 0);
  const sentenceCount = paragraphs.reduce((n, p) => n + p.sentences.length, 0);

  return {
    schemaVersion: SCHEMA_VERSION,
    id: spec.id,
    title: spec.title,
    titleZh: spec.titleZh,
    source: spec.source,
    sourceType: 'builtin',
    meta: {
      tags: spec.tags,
      difficulty: spec.difficulty,
      wordCount,
      sentenceCount,
      readMinutes: Math.max(1, Math.ceil(wordCount / 200)),
      license: '自撰范文，可自由使用',
    },
    paragraphs,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

export const SAMPLE_ARTICLES: Article[] = ARTICLES.map(buildArticle);

export const SAMPLE_IDS = new Set(ARTICLES.map((a) => a.id));
