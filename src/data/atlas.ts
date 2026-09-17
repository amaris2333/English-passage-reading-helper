/* 自动生成：由 _atlas_crs.json / _atlas_nasa.json 经 scripts 构建，请勿手改。
 * 两篇素材均为公共领域（CRS 官方声明不受版权保护；NASA 内容不受美国版权保护）。
 * 句子分析由 src/lib/analyze.ts 在构建期生成。 */
import type { Article } from '../types';

export const ATLAS_ARTICLES: Article[] = [
  {
    "schemaVersion": 1,
    "id": "crs-if12762-ai-macro",
    "title": "The Macroeconomic Effects of Artificial Intelligence",
    "titleZh": "人工智能的宏观经济影响",
    "source": "Congressional Research Service · In Focus IF12762 · 2025-04-01",
    "sourceType": "builtin",
    "meta": {
      "tags": [
        "人工智能",
        "商业经济",
        "国际政治"
      ],
      "difficulty": 5,
      "wordCount": 1464,
      "sentenceCount": 66,
      "readMinutes": 8,
      "license": "Public Domain（美国联邦政府作品，不受版权保护；CRS 官方声明可整篇转载）",
      "sourceUrl": "https://crsreports.congress.gov/product/details?prodcode=IF12762"
    },
    "paragraphs": [
      {
        "id": "crs-if12762-ai-macro-p0",
        "index": 0,
        "sentences": [
          {
            "id": "crs-if12762-ai-macro-p0-s0",
            "index": 0,
            "en": "While various forms of artificial intelligence (AI) technologies have existed and been used for decades, the recent popularization of AI products such as ChatGPT have spurred further research and debate about how these technologies could impact the economy.",
            "zh": "尽管各种形式的人工智能技术已经存在并应用了数十年，但近年 ChatGPT 等 AI 产品的普及，激起了关于这些技术将如何影响经济的进一步研究与争论。",
            "wordCount": 38,
            "analysis": {
              "pattern": "结构待拆 + 从句",
              "skeleton": "the recent popularization of AI produc… (S)",
              "chunks": [
                {
                  "role": "Clause",
                  "text": "While various forms of artificial intelligence (AI) technologies have existed and been used for decades,",
                  "start": 0,
                  "end": 104,
                  "note": "句首状语从句：先交代条件/让步/时间背景，主句在后面"
                },
                {
                  "role": "S",
                  "text": "the recent popularization of AI products such as ChatGPT have spurred further research and debate about how these technologies could impact the economy.",
                  "start": 105,
                  "end": 257
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "have existed",
                    "start": 65,
                    "end": 77,
                    "role": "predicate"
                  },
                  {
                    "text": "been used",
                    "start": 82,
                    "end": 91,
                    "role": "predicate"
                  },
                  {
                    "text": "have spurred further research",
                    "start": 162,
                    "end": 191,
                    "role": "predicate"
                  },
                  {
                    "text": "debate",
                    "start": 196,
                    "end": 202,
                    "role": "predicate"
                  },
                  {
                    "text": "could impact",
                    "start": 232,
                    "end": 244,
                    "role": "predicate"
                  }
                ],
                "count": 5,
                "summary": "句中共有 5 个谓语动词（have existed / been used / have spurred further research / debate / could impact），意味着有 5 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 103,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 146,
                    "marker": "such",
                    "reason": "such 引导定语从句"
                  },
                  {
                    "pos": 151,
                    "marker": "as",
                    "reason": "as 引导时间/原因状语从句"
                  }
                ],
                "summary": "找到 3 个断点，可以把句子切成 3 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "While various forms of artificial intelligence (AI) technologies have existed and been used for decades",
                    "start": 0,
                    "end": 103,
                    "type": "时间/让步状语从句",
                    "isMain": false,
                    "hint": "作同时或让步成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-1",
                    "text": "the recent popularization of AI products",
                    "start": 105,
                    "end": 145,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"the recent popularization of AI produc...\""
                  },
                  {
                    "id": "seg-2",
                    "text": "such as ChatGPT have spurred further research and debate about how these technologies could impact the economy.",
                    "start": 146,
                    "end": 257,
                    "type": "定语从句",
                    "isMain": false,
                    "hint": "作修饰成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "the recent popularization of AI products",
                "summary": "主句是「the recent popularization of AI products」，其余 2 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"the recent popularization of AI produc...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"forms of artificial intelligence (AI) techno…\"（后置定语，修饰名词 **forms**）",
                  "\"used for decades\"（后置定语，修饰名词 **used**）",
                  "\"popularization of AI products such as ChatGP…\"（后置定语，修饰名词 **popularization**）"
                ],
                "summary": "平行动 0 处、修饰成分 3 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【时间/让步状语从句】「While various forms of artificia…」——作同时或让步成分，翻译时通常放在主句之前",
                  "2. 先译【定语从句】「such as ChatGPT have spurred fur…」——作修饰成分，翻译时通常放在主句之前",
                  "3. 再译【主句】「the recent popularization of AI …」——这是整句的骨架",
                  "4. 按「同时或让步」关系组装：中文习惯把同时或让步类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 2 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p0-s1",
            "index": 1,
            "en": "AI potentially has wide-ranging uses in the production of goods and services, which could affect the macroeconomy through the labor market, productivity growth, and economic growth, to name a few.",
            "zh": "人工智能在商品和服务的生产中可能有广泛用途，进而可能通过劳动力市场、生产率增长和经济增长等渠道影响宏观经济。",
            "wordCount": 30,
            "analysis": {
              "pattern": "主系表 + 非限定性定语从句",
              "skeleton": "AI potentially (S) + has (V) + wide-ranging uses in the production of… (C)",
              "chunks": [
                {
                  "role": "S",
                  "text": "AI potentially",
                  "start": 0,
                  "end": 14,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "has",
                  "start": 15,
                  "end": 18,
                  "note": "主句谓语"
                },
                {
                  "role": "C",
                  "text": "wide-ranging uses in the production of goods and services,",
                  "start": 19,
                  "end": 77,
                  "note": "主句的宾语/表语"
                },
                {
                  "role": "Clause",
                  "text": "which could affect the macroeconomy through the labor market, productivity growth, and economic growth, to name a few.",
                  "start": 78,
                  "end": 196,
                  "note": "由 which 引导的从句，修饰前面的名词（定语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句中有插入成分，阅读时可先跳过，主句依然完整。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-182-0",
                "text": "to name a few",
                "zh": "仅举几例",
                "kind": "习语"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "has",
                    "start": 15,
                    "end": 18,
                    "role": "predicate"
                  },
                  {
                    "text": "uses",
                    "start": 32,
                    "end": 36,
                    "role": "predicate"
                  },
                  {
                    "text": "services,",
                    "start": 68,
                    "end": 77,
                    "role": "predicate"
                  },
                  {
                    "text": "could affect",
                    "start": 84,
                    "end": 96,
                    "role": "predicate"
                  },
                  {
                    "text": "name",
                    "start": 185,
                    "end": 189,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  }
                ],
                "count": 4,
                "summary": "句中共有 4 个谓语动词（has / uses / services, / could affect），意味着有 4 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 76,
                    "marker": ", + which",
                    "reason": "which 引导定语从句，此处必须断开"
                  },
                  {
                    "pos": 138,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 159,
                    "marker": ", + and",
                    "reason": "and 连接并列成分，可在标点处断开"
                  },
                  {
                    "pos": 180,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 4 个断点，可以把句子切成 4 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "AI potentially has wide-ranging uses in the production of goods and services",
                    "start": 0,
                    "end": 76,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"AI potentially\"；谓语 = \"has\"；表语 = \"wide-ranging uses in the production of...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "which could affect the macroeconomy through the labor market",
                    "start": 78,
                    "end": 138,
                    "type": "非限定性定语从句",
                    "isMain": false,
                    "hint": "对前面的名词做补充说明，翻译时可另起一小句"
                  },
                  {
                    "id": "seg-2",
                    "text": "productivity growth, and economic growth",
                    "start": 140,
                    "end": 180,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-3",
                    "text": "to name a few.",
                    "start": 182,
                    "end": 196,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "AI potentially has wide-ranging uses in the production of goods and services",
                "summary": "主句是「AI potentially has wide-ranging uses in the …」，其余 3 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"AI potentially\"；谓语 = \"has\"；表语 = \"wide-ranging uses in the production of...\""
              },
              "step4": {
                "parallels": [
                  {
                    "kind": "三项以上并列",
                    "members": [
                      "the macroeconomy through the labor market",
                      "productivity growth",
                      "economic growth"
                    ],
                    "note": "并列的几项词性相同、形式一致，可逐个对应翻译"
                  }
                ],
                "modifiers": [
                  "\"which could affect the macroeconomy through …\"（定语从句，修饰名词 **goods**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"uses in the production of goods and services\"（后置定语，修饰名词 **uses**）",
                  "\"and economic growth\"（插入语——删掉不影响主句结构，可先跳过）"
                ],
                "summary": "平行动 1 处、修饰成分 3 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【非限定性定语从句】「which could affect the macroecon…」——对前面的名词做补充说明，翻译时可另起一小句",
                  "2. 再译【主句】「AI potentially has wide-ranging …」——这是整句的骨架",
                  "3. 处理平行结构：the macroeconomy through the labor market ／ productivity growth ／ economic growth——平行成分逐一对译，不要打乱顺序",
                  "4. 按「修饰」关系组装：中文习惯把修饰类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p0-s2",
            "index": 2,
            "en": "However, whether AI will prove to be as economically transformational as some suggest remains to be seen and will depend on a number of complex factors.",
            "zh": "然而，人工智能是否真如一些人所言具有如此大的经济变革力，尚待观察，并取决于一系列复杂因素。",
            "wordCount": 26,
            "analysis": {
              "pattern": "结构待拆（简单句）",
              "skeleton": "However, whether AI will prove to be a… (S)",
              "chunks": [
                {
                  "role": "S",
                  "text": "However, whether AI will prove to be as economically transformational as some suggest remains to be seen and will depend on a number of complex factors.",
                  "start": 0,
                  "end": 152
                }
              ],
              "notes": [],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-114-0",
                "text": "depend on",
                "zh": "取决于；依赖",
                "kind": "短语动词"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "will prove",
                    "start": 20,
                    "end": 30,
                    "role": "predicate"
                  },
                  {
                    "text": "be",
                    "start": 34,
                    "end": 36,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  },
                  {
                    "text": "suggest remains",
                    "start": 78,
                    "end": 93,
                    "role": "predicate"
                  },
                  {
                    "text": "be seen",
                    "start": 97,
                    "end": 104,
                    "role": "predicate"
                  },
                  {
                    "text": "will",
                    "start": 109,
                    "end": 113,
                    "role": "predicate"
                  },
                  {
                    "text": "depend",
                    "start": 114,
                    "end": 120,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  }
                ],
                "count": 4,
                "summary": "句中共有 4 个谓语动词（will prove / suggest remains / be seen / will），意味着有 4 件事要译；另有 2 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 7,
                    "marker": ", + whether",
                    "reason": "whether 引导名词性从句，此处必须断开"
                  },
                  {
                    "pos": 37,
                    "marker": "as",
                    "reason": "as 引导时间/原因状语从句"
                  },
                  {
                    "pos": 70,
                    "marker": "as",
                    "reason": "as 引导时间/原因状语从句"
                  }
                ],
                "summary": "找到 3 个断点，可以把句子切成 3 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "However, whether AI will prove to be",
                    "start": 0,
                    "end": 36,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"However, whether AI will prove to be a...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "as economically transformational",
                    "start": 37,
                    "end": 69,
                    "type": "时间/原因状语从句",
                    "isMain": false,
                    "hint": "作时间或原因成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-2",
                    "text": "as some suggest remains to be seen and will depend on a number of complex factors.",
                    "start": 70,
                    "end": 152,
                    "type": "时间/原因状语从句",
                    "isMain": false,
                    "hint": "作时间或原因成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "However, whether AI will prove to be",
                "summary": "主句是「However, whether AI will prove to be」，其余 2 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"However, whether AI will prove to be a...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"However,\"（句首状语，交代背景或前提——中文习惯先译它）",
                  "\"prove to be as economically transformational…\"（后置定语，修饰名词 **prove**）",
                  "\"remains to be seen and will depend on a numb…\"（后置定语，修饰名词 **remains**）"
                ],
                "summary": "平行动 0 处、修饰成分 3 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【时间/原因状语从句】「as economically transformational」——作时间或原因成分，翻译时通常放在主句之前",
                  "2. 先译【时间/原因状语从句】「as some suggest remains to be se…」——作时间或原因成分，翻译时通常放在主句之前",
                  "3. 再译【主句】「However, whether AI will prove t…」——这是整句的骨架",
                  "4. 注意逻辑词 **however**：转折（然而）——译文要把这层关系译出来，否则会读成平铺直叙。",
                  "5. 按「时间或原因」关系组装：中文习惯把时间或原因类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 2 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p0-s3",
            "index": 3,
            "en": "Some Members of Congress are increasingly interested in AI, including its economic impacts.",
            "zh": "越来越多的国会议员开始关注人工智能，包括其经济影响。",
            "wordCount": 13,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "Some Members of Congress (S) + are (V) + increasingly interested in AI, includi… (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Some Members of Congress",
                  "start": 0,
                  "end": 24,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "are",
                  "start": 25,
                  "end": 28,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "increasingly interested in AI, including its economic impacts.",
                  "start": 29,
                  "end": 91,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "are",
                    "start": 25,
                    "end": 28,
                    "role": "predicate"
                  },
                  {
                    "text": "interested",
                    "start": 42,
                    "end": 52,
                    "role": "predicate"
                  },
                  {
                    "text": "including",
                    "start": 60,
                    "end": 69,
                    "role": "preposition",
                    "note": "是介词，不是动词"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（are / interested），意味着有 2 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 58,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Some Members of Congress are increasingly interested in AI",
                    "start": 0,
                    "end": 58,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Some Members of Congress\"；谓语 = \"are\"；宾语 = \"increasingly interested in AI, includi...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "including its economic impacts.",
                    "start": 60,
                    "end": 91,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "Some Members of Congress are increasingly interested in AI",
                "summary": "主句是「Some Members of Congress are increasingly in…」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Some Members of Congress\"；谓语 = \"are\"；宾语 = \"increasingly interested in AI, includi...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"Members of Congress are increasingly interes…\"（后置定语，修饰名词 **Members**）"
                ],
                "summary": "平行动 0 处、修饰成分 1 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「Some Members of Congress are inc…」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p0-s4",
            "index": 4,
            "en": "For example, the House announced a bipartisan task force on AI in February 2024.",
            "zh": "例如，众议院于 2024 年 2 月宣布成立了一个跨党派的人工智能工作组。",
            "wordCount": 13,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "For example, the House (S) + announced (V) + a bipartisan task force on AI in Febru… (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "For example, the House",
                  "start": 0,
                  "end": 22,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "announced",
                  "start": 23,
                  "end": 32,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "a bipartisan task force on AI in February 2024.",
                  "start": 33,
                  "end": 80,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "announced",
                    "start": 23,
                    "end": 32,
                    "role": "predicate"
                  }
                ],
                "count": 1,
                "summary": "句中共有 1 个谓语动词（announced），意味着有 1 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 11,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 1 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "For example, the House announced a bipartisan task force on AI in February 2024.",
                    "start": 0,
                    "end": 80,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "",
                "summary": "未能确定主句，建议先按标点切分逐段理解。"
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"For example,\"（句首状语，交代背景或前提——中文习惯先译它）",
                  "\"force on AI in February 2024\"（后置定语，修饰名词 **force**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 注意逻辑词 **for example**：举例（例如）——译文要把这层关系译出来，否则会读成平铺直叙。",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          }
        ]
      },
      {
        "id": "crs-if12762-ai-macro-p1",
        "index": 1,
        "heading": "What Is Artificial Intelligence?",
        "sentences": [
          {
            "id": "crs-if12762-ai-macro-p1-s0",
            "index": 0,
            "en": "AI is a broad term referring to algorithms and techniques that aim to give computer systems the ability to learn new concepts or tasks and to reason and solve complex problems in a manner that mimics human intelligence.",
            "zh": "人工智能是一个宽泛的术语，指旨在让计算机系统获得学习新概念或新任务、并以模仿人类智能的方式进行推理和解决复杂问题的算法与技术。",
            "wordCount": 38,
            "analysis": {
              "pattern": "主系表 + 从句",
              "skeleton": "AI (S) + is (V) + a broad term referring to algorithms a… (C)",
              "chunks": [
                {
                  "role": "S",
                  "text": "AI",
                  "start": 0,
                  "end": 2,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "is",
                  "start": 3,
                  "end": 5,
                  "note": "主句谓语"
                },
                {
                  "role": "C",
                  "text": "a broad term referring to algorithms and techniques",
                  "start": 6,
                  "end": 57,
                  "note": "主句的宾语/表语"
                },
                {
                  "role": "Clause",
                  "text": "that aim to give computer systems the ability to learn new concepts or tasks and to reason and solve complex problems in a manner that mimics human intelligence.",
                  "start": 58,
                  "end": 219,
                  "note": "由 that 引导的从句，修饰前面的名词（定语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "is",
                    "start": 3,
                    "end": 5,
                    "role": "predicate"
                  },
                  {
                    "text": "referring",
                    "start": 19,
                    "end": 28,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  },
                  {
                    "text": "aim",
                    "start": 63,
                    "end": 66,
                    "role": "predicate"
                  },
                  {
                    "text": "give",
                    "start": 70,
                    "end": 74,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  },
                  {
                    "text": "learn",
                    "start": 107,
                    "end": 112,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  },
                  {
                    "text": "tasks",
                    "start": 129,
                    "end": 134,
                    "role": "predicate"
                  },
                  {
                    "text": "reason",
                    "start": 142,
                    "end": 148,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  },
                  {
                    "text": "solve",
                    "start": 153,
                    "end": 158,
                    "role": "predicate"
                  },
                  {
                    "text": "mimics",
                    "start": 193,
                    "end": 199,
                    "role": "predicate"
                  }
                ],
                "count": 5,
                "summary": "句中共有 5 个谓语动词（is / aim / tasks / solve / mimics），意味着有 5 件事要译；另有 4 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 58,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  },
                  {
                    "pos": 188,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  }
                ],
                "summary": "找到 2 个断点，可以把句子切成 3 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "AI is a broad term referring to algorithms and techniques",
                    "start": 0,
                    "end": 57,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"AI\"；谓语 = \"is\"；表语 = \"a broad term referring to algorithms a...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "that aim to give computer systems the ability to learn new concepts or tasks and to reason and solve complex problems in a manner",
                    "start": 58,
                    "end": 187,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-2",
                    "text": "that mimics human intelligence.",
                    "start": 188,
                    "end": 219,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "AI is a broad term referring to algorithms and techniques",
                "summary": "主句是「AI is a broad term referring to algorithms a…」，其余 2 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"AI\"；谓语 = \"is\"；表语 = \"a broad term referring to algorithms a...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"that aim to give computer systems the abilit…\"（定语从句，修饰名词 **techniques**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"that mimics human intelligence.\"（定语从句，修饰名词 **manner**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"referring to algorithms and techniques that …\"（后置定语，修饰名词 **referring**）",
                  "\"ability to learn new concepts or tasks and t…\"（后置定语，修饰名词 **ability**）"
                ],
                "summary": "平行动 0 处、修饰成分 4 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【名词性 / 定语从句】「that aim to give computer system…」——作说明成分，翻译时通常放在主句之前",
                  "2. 先译【名词性 / 定语从句】「that mimics human intelligence.」——作说明成分，翻译时通常放在主句之前",
                  "3. 再译【主句】「AI is a broad term referring to …」——这是整句的骨架",
                  "4. 按「说明」关系组装：中文习惯把说明类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 2 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p1-s1",
            "index": 1,
            "en": "Machine learning (ML) is generally considered a subfield of AI focused on developing systems that can learn (i.e., optimize model parameters) from data without explicit programming.",
            "zh": "机器学习通常被视为人工智能的一个分支，专注于开发无需显式编程即可从数据中学习（即优化模型参数）的系统。",
            "wordCount": 27,
            "analysis": {
              "pattern": "主系表 + 从句",
              "skeleton": "Machine learning (ML)  (S) + is (V) + generally considered a subfield of AI … (C)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Machine learning (ML) ",
                  "start": 0,
                  "end": 22,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "is",
                  "start": 22,
                  "end": 24,
                  "note": "主句谓语"
                },
                {
                  "role": "C",
                  "text": "generally considered a subfield of AI focused on developing systems",
                  "start": 25,
                  "end": 92,
                  "note": "主句的宾语/表语"
                },
                {
                  "role": "Clause",
                  "text": "that can learn (i.e., optimize model parameters) from data without explicit programming.",
                  "start": 93,
                  "end": 181,
                  "note": "由 that 引导的从句，修饰前面的名词（定语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-63-0",
                "text": "focused on",
                "zh": "聚焦于；集中于",
                "kind": "短语动词"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "is generally considered",
                    "start": 22,
                    "end": 45,
                    "role": "predicate"
                  },
                  {
                    "text": "focused",
                    "start": 63,
                    "end": 70,
                    "role": "nonfinite",
                    "note": "过去分词作后置定语（相当于省略了 which is），不能作谓语"
                  },
                  {
                    "text": "can learn",
                    "start": 98,
                    "end": 107,
                    "role": "predicate"
                  },
                  {
                    "text": "optimize",
                    "start": 115,
                    "end": 123,
                    "role": "predicate"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（is generally considered / can learn / optimize），意味着有 3 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 93,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  },
                  {
                    "pos": 113,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 2 个断点，可以把句子切成 3 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Machine learning (ML) is generally considered a subfield of AI focused on developing systems",
                    "start": 0,
                    "end": 92,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Machine learning (ML) \"；谓语 = \"is\"；表语 = \"generally considered a subfield of AI ...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "that can learn (i.e.",
                    "start": 93,
                    "end": 113,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-2",
                    "text": "optimize model parameters) from data without explicit programming.",
                    "start": 115,
                    "end": 181,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "Machine learning (ML) is generally considered a subfield of AI focused on developing systems",
                "summary": "主句是「Machine learning (ML) is generally considere…」，其余 2 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Machine learning (ML) \"；谓语 = \"is\"；表语 = \"generally considered a subfield of AI ...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"that can learn (i.e., optimize model paramet…\"（定语从句，修饰名词 **systems**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"subfield of AI focused on developing systems…\"（后置定语，修饰名词 **subfield**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【名词性 / 定语从句】「that can learn (i.e.」——作说明成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「Machine learning (ML) is general…」——这是整句的骨架",
                  "3. 按「说明」关系组装：中文习惯把说明类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p1-s2",
            "index": 2,
            "en": "AI/ML is neither one thing, such as a discrete computer application, nor one technology.",
            "zh": "人工智能／机器学习既不是某一具体事物（比如某个独立的计算机应用），也不是某一项单一技术。",
            "wordCount": 15,
            "analysis": {
              "pattern": "主系表 + 从句",
              "skeleton": "AI/ML (S) + is (V) + neither one thing, such (C)",
              "chunks": [
                {
                  "role": "S",
                  "text": "AI/ML",
                  "start": 0,
                  "end": 5,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "is",
                  "start": 6,
                  "end": 8,
                  "note": "主句谓语"
                },
                {
                  "role": "C",
                  "text": "neither one thing, such",
                  "start": 9,
                  "end": 32,
                  "note": "主句的宾语/表语"
                },
                {
                  "role": "Clause",
                  "text": "as a discrete computer application, nor one technology.",
                  "start": 33,
                  "end": 88,
                  "note": "由 as 引导的从句，充当状语（状语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句中有插入成分，阅读时可先跳过，主句依然完整。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "is",
                    "start": 6,
                    "end": 8,
                    "role": "predicate"
                  }
                ],
                "count": 1,
                "summary": "句中共有 1 个谓语动词（is），意味着有 1 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 26,
                    "marker": ", + such",
                    "reason": "such 引导定语从句，此处必须断开"
                  },
                  {
                    "pos": 33,
                    "marker": "as",
                    "reason": "as 引导时间/原因状语从句"
                  },
                  {
                    "pos": 67,
                    "marker": ", + nor",
                    "reason": "nor 连接并列成分，可在标点处断开"
                  }
                ],
                "summary": "找到 3 个断点，可以把句子切成 3 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "AI/ML is neither one thing",
                    "start": 0,
                    "end": 26,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"AI/ML\"；谓语 = \"is\"；表语 = \"neither one thing, such\""
                  },
                  {
                    "id": "seg-1",
                    "text": "such as a discrete computer application",
                    "start": 28,
                    "end": 67,
                    "type": "定语从句",
                    "isMain": false,
                    "hint": "作修饰成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-2",
                    "text": "nor one technology.",
                    "start": 69,
                    "end": 88,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "AI/ML is neither one thing",
                "summary": "主句是「AI/ML is neither one thing」，其余 2 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"AI/ML\"；谓语 = \"is\"；表语 = \"neither one thing, such\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"such as a discrete computer application\"（插入语——删掉不影响主句结构，可先跳过）"
                ],
                "summary": "平行动 0 处、修饰成分 1 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【定语从句】「such as a discrete computer appl…」——作修饰成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「AI/ML is neither one thing」——这是整句的骨架",
                  "3. 按「修饰」关系组装：中文习惯把修饰类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p1-s3",
            "index": 3,
            "en": "Instead, it is a group of systems that is defined in part by the type of information used to train the model and the amount of involvement provided by human trainers.",
            "zh": "相反，它是一组系统，其界定部分取决于用于训练模型的信息类型，以及人工训练者的参与程度。",
            "wordCount": 31,
            "analysis": {
              "pattern": "主系表 + 2 个从句（多重复合句）",
              "skeleton": "Instead, it (S) + is (V) + a group of systems (C)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Instead, it",
                  "start": 0,
                  "end": 11,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "is",
                  "start": 12,
                  "end": 14,
                  "note": "主句谓语"
                },
                {
                  "role": "C",
                  "text": "a group of systems",
                  "start": 15,
                  "end": 33,
                  "note": "主句的宾语/表语"
                },
                {
                  "role": "Clause",
                  "text": "that is defined in part by the type of information used to train the model and the amount of involvement",
                  "start": 34,
                  "end": 138,
                  "note": "由 that 引导的从句，修饰前面的名词（定语从句）"
                },
                {
                  "role": "Clause",
                  "text": "provided by human trainers.",
                  "start": 139,
                  "end": 166,
                  "note": "由 provided 引导的从句，充当状语（状语从句）"
                }
              ],
              "notes": [
                "本句含 2 个从属分句，先锁定主句主干，再逐层挂回修饰成分。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-50-0",
                "text": "in part",
                "zh": "部分地",
                "kind": "习语"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "is",
                    "start": 12,
                    "end": 14,
                    "role": "predicate"
                  },
                  {
                    "text": "is defined",
                    "start": 39,
                    "end": 49,
                    "role": "predicate"
                  },
                  {
                    "text": "used to",
                    "start": 85,
                    "end": 92,
                    "role": "predicate"
                  },
                  {
                    "text": "train",
                    "start": 93,
                    "end": 98,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  },
                  {
                    "text": "provided",
                    "start": 139,
                    "end": 147,
                    "role": "nonfinite",
                    "note": "过去分词作后置定语（相当于省略了 which is），不能作谓语"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（is / is defined / used to），意味着有 3 件事要译；另有 2 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 7,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 34,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  }
                ],
                "summary": "找到 2 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Instead, it is a group of systems",
                    "start": 0,
                    "end": 33,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Instead, it\"；谓语 = \"is\"；表语 = \"a group of systems\""
                  },
                  {
                    "id": "seg-1",
                    "text": "that is defined in part by the type of information used to train the model and the amount of involvement provided by human trainers.",
                    "start": 34,
                    "end": 166,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "Instead, it is a group of systems",
                "summary": "主句是「Instead, it is a group of systems」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Instead, it\"；谓语 = \"is\"；表语 = \"a group of systems\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"that is defined in part by the type of infor…\"（定语从句，修饰名词 **systems**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"Instead,\"（句首状语，交代背景或前提——中文习惯先译它）",
                  "\"group of systems that is defined in part by …\"（后置定语，修饰名词 **group**）",
                  "\"used to train the model and the amount of in…\"（后置定语，修饰名词 **used**）"
                ],
                "summary": "平行动 0 处、修饰成分 4 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【名词性 / 定语从句】「that is defined in part by the t…」——作说明成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「Instead, it is a group of systems」——这是整句的骨架",
                  "3. 注意逻辑词 **instead**：转折（相反）——译文要把这层关系译出来，否则会读成平铺直叙。",
                  "4. 按「说明」关系组装：中文习惯把说明类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p1-s4",
            "index": 4,
            "en": "The suite of AI products in the spotlight since late 2022 are “generative AI” tools.",
            "zh": "自 2022 年底以来备受关注的那一组人工智能产品，是“生成式人工智能”工具。",
            "wordCount": 14,
            "analysis": {
              "pattern": "结构待拆（简单句）",
              "skeleton": "The suite of AI products in the spotli… (S)",
              "chunks": [
                {
                  "role": "S",
                  "text": "The suite of AI products in the spotlight since late 2022 are “generative AI” tools.",
                  "start": 0,
                  "end": 84
                }
              ],
              "notes": [],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-25-0",
                "text": "in the spotlight",
                "zh": "备受关注",
                "kind": "习语"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "are",
                    "start": 58,
                    "end": 61,
                    "role": "predicate"
                  }
                ],
                "count": 1,
                "summary": "句中共有 1 个谓语动词（are），意味着有 1 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 42,
                    "marker": "since",
                    "reason": "since 引导时间/原因状语从句"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "The suite of AI products in the spotlight",
                    "start": 0,
                    "end": 41,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"The suite of AI products in the spotli...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "since late 2022 are “generative AI” tools.",
                    "start": 42,
                    "end": 84,
                    "type": "时间/原因状语从句",
                    "isMain": false,
                    "hint": "作时间或原因成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "The suite of AI products in the spotlight",
                "summary": "主句是「The suite of AI products in the spotlight」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"The suite of AI products in the spotli...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"suite of AI products in the spotlight since …\"（后置定语，修饰名词 **suite**）"
                ],
                "summary": "平行动 0 处、修饰成分 1 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【时间/原因状语从句】「since late 2022 are “generative …」——作时间或原因成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「The suite of AI products in the …」——这是整句的骨架",
                  "3. 按「时间或原因」关系组装：中文习惯把时间或原因类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p1-s5",
            "index": 5,
            "en": "Generative AI refers to AI systems that can generate content—such as written material, art, or computer code—from prompts using advanced techniques that help models better understand how data elements influence and depend on one another.",
            "zh": "生成式人工智能指能够依据提示词生成内容（如文字材料、美术作品或计算机代码）的人工智能系统，其所用的先进技术有助于模型更好地理解数据要素之间如何相互影响与依赖。",
            "wordCount": 37,
            "analysis": {
              "pattern": "结构待拆（简单句）",
              "skeleton": "Generative AI refers to AI systems tha… (S)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Generative AI refers to AI systems that can generate content—such as written material, art, or computer code—from prompts using advanced techniques that help models better understand how data elements influence and depend on one another.",
                  "start": 0,
                  "end": 237
                }
              ],
              "notes": [
                "句中有插入成分，阅读时可先跳过，主句依然完整。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-14-0",
                "text": "refers to",
                "zh": "指的是；提及",
                "kind": "短语动词"
              },
              {
                "id": "ph-215-1",
                "text": "depend on",
                "zh": "取决于；依赖",
                "kind": "短语动词"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "can generate",
                    "start": 40,
                    "end": 52,
                    "role": "predicate"
                  },
                  {
                    "text": "written",
                    "start": 69,
                    "end": 76,
                    "role": "predicate"
                  },
                  {
                    "text": "prompts",
                    "start": 114,
                    "end": 121,
                    "role": "predicate"
                  },
                  {
                    "text": "using",
                    "start": 122,
                    "end": 127,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  },
                  {
                    "text": "help models better understand",
                    "start": 153,
                    "end": 182,
                    "role": "predicate"
                  },
                  {
                    "text": "influence",
                    "start": 201,
                    "end": 210,
                    "role": "predicate"
                  },
                  {
                    "text": "depend",
                    "start": 215,
                    "end": 221,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  }
                ],
                "count": 5,
                "summary": "句中共有 5 个谓语动词（can generate / written / prompts / help models better understand / influence），意味着有 5 件事要译；另有 2 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 35,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  },
                  {
                    "pos": 60,
                    "marker": "— + such",
                    "reason": "such 引导定语从句，此处必须断开"
                  },
                  {
                    "pos": 66,
                    "marker": "as",
                    "reason": "as 引导时间/原因状语从句"
                  },
                  {
                    "pos": 85,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 90,
                    "marker": ", + or",
                    "reason": "or 连接并列成分，可在标点处断开"
                  },
                  {
                    "pos": 108,
                    "marker": "—",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 148,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  }
                ],
                "summary": "找到 7 个断点，可以把句子切成 6 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Generative AI refers to AI systems",
                    "start": 0,
                    "end": 34,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Generative AI refers to AI systems tha...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "that can generate content",
                    "start": 35,
                    "end": 60,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-2",
                    "text": "such as written material",
                    "start": 61,
                    "end": 85,
                    "type": "定语从句",
                    "isMain": false,
                    "hint": "作修饰成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-3",
                    "text": "or computer code",
                    "start": 92,
                    "end": 108,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-4",
                    "text": "from prompts using advanced techniques",
                    "start": 109,
                    "end": 147,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-5",
                    "text": "that help models better understand how data elements influence and depend on one another.",
                    "start": 148,
                    "end": 237,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "Generative AI refers to AI systems",
                "summary": "主句是「Generative AI refers to AI systems」，其余 5 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Generative AI refers to AI systems tha...\""
              },
              "step4": {
                "parallels": [
                  {
                    "kind": "三项以上并列",
                    "members": [
                      "generate content—such as written material",
                      "art",
                      "computer code—from prompts using advanced"
                    ],
                    "note": "并列的几项词性相同、形式一致，可逐个对应翻译"
                  }
                ],
                "modifiers": [
                  "\"that can generate content—such as written ma…\"（定语从句，修饰名词 **systems**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"that help models better understand how data …\"（定语从句，修饰名词 **techniques**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"refers to AI systems that can generate conte…\"（后置定语，修饰名词 **refers**）",
                  "\"depend on one another\"（后置定语，修饰名词 **depend**）",
                  "\"or computer code\"（插入语——删掉不影响主句结构，可先跳过）"
                ],
                "summary": "平行动 1 处、修饰成分 5 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【名词性 / 定语从句】「that can generate content」——作说明成分，翻译时通常放在主句之前",
                  "2. 先译【定语从句】「such as written material」——作修饰成分，翻译时通常放在主句之前",
                  "3. 先译【名词性 / 定语从句】「that help models better understa…」——作说明成分，翻译时通常放在主句之前",
                  "4. 再译【主句】「Generative AI refers to AI systems」——这是整句的骨架",
                  "5. 处理平行结构：generate content—such as written material ／ art ／ computer code—from prompts using advanced——平行成分逐一对译，不要打乱顺序",
                  "6. 按「说明」关系组装：中文习惯把说明类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 3 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p1-s6",
            "index": 6,
            "en": "While proponents of the technology believe it can transform delivery of services in industries that rely on both general and specialized knowledge alike, it has also raised concerns of misuse by bad actors and misrepresentation in the form of “deep fakes,” among others.",
            "zh": "支持该技术的人相信，它能够变革那些既依赖通用知识、也依赖专业知识之行业的服务提供方式；但它同时也引发了人们对恶意行为者滥用、以及“深度伪造”等虚假呈现形式的担忧。",
            "wordCount": 43,
            "analysis": {
              "pattern": "主谓宾 + 从句",
              "skeleton": "it (S) + has (V) + also raised concerns of misuse by bad … (O)",
              "chunks": [
                {
                  "role": "Clause",
                  "text": "While proponents of the technology believe it can transform delivery of services in industries that rely on both general and specialized knowledge alike,",
                  "start": 0,
                  "end": 153,
                  "note": "句首状语从句：先交代条件/让步/时间背景，主句在后面"
                },
                {
                  "role": "S",
                  "text": "it",
                  "start": 154,
                  "end": 156,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "has",
                  "start": 157,
                  "end": 160,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "also raised concerns of misuse by bad actors and misrepresentation in the form of “deep fakes,” among others.",
                  "start": 161,
                  "end": 270,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-228-0",
                "text": "in the form of",
                "zh": "以…的形式",
                "kind": "介词框架"
              },
              {
                "id": "ph-166-1",
                "text": "raised concerns",
                "zh": "引发担忧",
                "kind": "固定搭配"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "believe",
                    "start": 35,
                    "end": 42,
                    "role": "predicate"
                  },
                  {
                    "text": "can transform",
                    "start": 46,
                    "end": 59,
                    "role": "predicate"
                  },
                  {
                    "text": "rely",
                    "start": 100,
                    "end": 104,
                    "role": "predicate"
                  },
                  {
                    "text": "has also raised",
                    "start": 157,
                    "end": 172,
                    "role": "predicate"
                  }
                ],
                "count": 4,
                "summary": "句中共有 4 个谓语动词（believe / can transform / rely / has also raised），意味着有 4 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 95,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  },
                  {
                    "pos": 152,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 254,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 3 个断点，可以把句子切成 4 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "While proponents of the technology believe it can transform delivery of services in industries",
                    "start": 0,
                    "end": 94,
                    "type": "时间/让步状语从句",
                    "isMain": false,
                    "hint": "作同时或让步成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-1",
                    "text": "that rely on both general and specialized knowledge alike",
                    "start": 95,
                    "end": 152,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-2",
                    "text": "it has also raised concerns of misuse by bad actors and misrepresentation in the form of “deep fakes",
                    "start": 154,
                    "end": 254,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"it\"；谓语 = \"has\"；宾语 = \"also raised concerns of misuse by bad ...\""
                  },
                  {
                    "id": "seg-3",
                    "text": "” among others.",
                    "start": 255,
                    "end": 270,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "it has also raised concerns of misuse by bad actors and misrepresentation in the form of “deep fakes",
                "summary": "主句是「it has also raised concerns of misuse by bad…」，其余 3 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"it\"；谓语 = \"has\"；宾语 = \"also raised concerns of misuse by bad ...\""
              },
              "step4": {
                "parallels": [
                  {
                    "kind": "both … and … 平行",
                    "members": [
                      "general",
                      "specialized knowledge alike"
                    ],
                    "note": "\"两者都\"——两部分并列"
                  }
                ],
                "modifiers": [
                  "\"that rely on both general and specialized kn…\"（定语从句，修饰名词 **industries**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"proponents of the technology believe it can …\"（后置定语，修饰名词 **proponents**）",
                  "\"services in industries that rely on both gen…\"（后置定语，修饰名词 **services**）",
                  "\"concerns of misuse by bad actors and misrepr…\"（后置定语，修饰名词 **concerns**）"
                ],
                "summary": "平行动 1 处、修饰成分 4 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【时间/让步状语从句】「While proponents of the technolo…」——作同时或让步成分，翻译时通常放在主句之前",
                  "2. 先译【名词性 / 定语从句】「that rely on both general and sp…」——作说明成分，翻译时通常放在主句之前",
                  "3. 再译【主句】「it has also raised concerns of m…」——这是整句的骨架",
                  "4. 处理平行结构：general ／ specialized knowledge alike——平行成分逐一对译，不要打乱顺序",
                  "5. 按「同时或让步」关系组装：中文习惯把同时或让步类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 2 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          }
        ]
      },
      {
        "id": "crs-if12762-ai-macro-p2",
        "index": 2,
        "heading": "AI Adoption and Diffusion",
        "sentences": [
          {
            "id": "crs-if12762-ai-macro-p2-s0",
            "index": 0,
            "en": "The effects of AI on the economy largely depend on the extent of AI use.",
            "zh": "人工智能对经济的影响，很大程度上取决于其使用范围。",
            "wordCount": 15,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "The effects of AI on the economy largely (S) + depend (V) + on the extent of AI use. (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "The effects of AI on the economy largely",
                  "start": 0,
                  "end": 40,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "depend",
                  "start": 41,
                  "end": 47,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "on the extent of AI use.",
                  "start": 48,
                  "end": 72,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-41-0",
                "text": "depend on",
                "zh": "取决于；依赖",
                "kind": "短语动词"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "depend",
                    "start": 41,
                    "end": 47,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  },
                  {
                    "text": "use.",
                    "start": 68,
                    "end": 72,
                    "role": "predicate"
                  }
                ],
                "count": 1,
                "summary": "句中共有 1 个谓语动词（use.），意味着有 1 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [],
                "summary": "句中无明显断点，结构较简单。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "The effects of AI on the economy largely depend on the extent of AI use.",
                    "start": 0,
                    "end": 72,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"The effects of AI on the economy largely\"；谓语 = \"depend\"；宾语 = \"on the extent of AI use.\""
                  }
                ],
                "mainText": "The effects of AI on the economy largely depend on the extent of AI use.",
                "summary": "主句是「The effects of AI on the economy largely dep…」，其余 0 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"The effects of AI on the economy largely\"；谓语 = \"depend\"；宾语 = \"on the extent of AI use.\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"effects of AI on the economy largely depend …\"（后置定语，修饰名词 **effects**）"
                ],
                "summary": "平行动 0 处、修饰成分 1 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「The effects of AI on the economy…」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p2-s1",
            "index": 1,
            "en": "The overall adoption of AI by businesses to this point has been limited.",
            "zh": "迄今为止，企业对人工智能的总体采用程度仍然有限。",
            "wordCount": 13,
            "analysis": {
              "pattern": "主谓（简单句）",
              "skeleton": "The overall adoption of AI by business… (S) + has been limited. (V)",
              "chunks": [
                {
                  "role": "S",
                  "text": "The overall adoption of AI by businesses to this point",
                  "start": 0,
                  "end": 54,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "has been limited.",
                  "start": 55,
                  "end": 72,
                  "note": "主句谓语"
                }
              ],
              "notes": [
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "has been limited.",
                    "start": 55,
                    "end": 72,
                    "role": "predicate"
                  }
                ],
                "count": 1,
                "summary": "句中共有 1 个谓语动词（has been limited.），意味着有 1 件事要译。"
              },
              "step2": {
                "breaks": [],
                "summary": "句中无明显断点，结构较简单。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "The overall adoption of AI by businesses to this point has been limited.",
                    "start": 0,
                    "end": 72,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"The overall adoption of AI by business...\"；谓语 = \"has been limited.\""
                  }
                ],
                "mainText": "The overall adoption of AI by businesses to this point has been limited.",
                "summary": "主句是「The overall adoption of AI by businesses to …」，其余 0 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"The overall adoption of AI by business...\"；谓语 = \"has been limited.\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"adoption of AI by businesses to this point h…\"（后置定语，修饰名词 **adoption**）"
                ],
                "summary": "平行动 0 处、修饰成分 1 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「The overall adoption of AI by bu…」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p2-s2",
            "index": 2,
            "en": "According to the Census Business Trends and Outlook Survey (BTOS), the number of businesses using AI rose from 3.7% in September 2023 to 5.4% in February 2024.",
            "zh": "根据美国人口普查局的《商业趋势与展望调查》，使用人工智能的企业比例从 2023 年 9 月的 3.7% 上升到 2024 年 2 月的 5.4%。",
            "wordCount": 23,
            "analysis": {
              "pattern": "结构待拆（简单句）",
              "skeleton": "According (V) + to the Census Business Trends and Outl… (O)",
              "chunks": [
                {
                  "role": "V",
                  "text": "According",
                  "start": 0,
                  "end": 9,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "to the Census Business Trends and Outlook Survey (BTOS), the number of businesses using AI rose from 3.7% in September 2023 to 5.4% in February 2024.",
                  "start": 10,
                  "end": 159,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-67-0",
                "text": "the number of",
                "zh": "…的数量",
                "kind": "习语"
              },
              {
                "id": "ph-0-1",
                "text": "According to",
                "zh": "根据",
                "kind": "介词框架"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "According",
                    "start": 0,
                    "end": 9,
                    "role": "preposition",
                    "note": "是介词，不是动词"
                  },
                  {
                    "text": "using",
                    "start": 92,
                    "end": 97,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  }
                ],
                "count": 0,
                "summary": "未识别到明确的谓语动词，可先按标点分段理解。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 65,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "According to the Census Business Trends and Outlook Survey (BTOS)",
                    "start": 0,
                    "end": 65,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 谓语 = \"According\"；宾语 = \"to the Census Business Trends and Outl...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "the number of businesses using AI rose from 3.7% in September 2023 to 5.4% in February 2024.",
                    "start": 67,
                    "end": 159,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "According to the Census Business Trends and Outlook Survey (BTOS)",
                "summary": "主句是「According to the Census Business Trends and …」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：谓语 = \"According\"；宾语 = \"to the Census Business Trends and Outl...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"According to the Census Business Trends and …\"（后置定语，修饰名词 **According**）",
                  "\"number of businesses using AI rose from 3\"（后置定语，修饰名词 **number**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「According to the Census Business…」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p2-s3",
            "index": 3,
            "en": "Further, as shown in Figure 1, adoption across sectors has varied widely.",
            "zh": "此外，如图 1 所示，各行业的采用情况差异很大。",
            "wordCount": 11,
            "analysis": {
              "pattern": "结构待拆（简单句）",
              "skeleton": "Further, as shown in Figure 1, adoptio… (S)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Further, as shown in Figure 1, adoption across sectors has varied widely.",
                  "start": 0,
                  "end": 73
                }
              ],
              "notes": [
                "句中有插入成分，阅读时可先跳过，主句依然完整。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "shown",
                    "start": 12,
                    "end": 17,
                    "role": "predicate"
                  },
                  {
                    "text": "has varied",
                    "start": 55,
                    "end": 65,
                    "role": "predicate"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（shown / has varied），意味着有 2 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 7,
                    "marker": ", + as",
                    "reason": "as 引导时间/原因状语从句，此处必须断开"
                  },
                  {
                    "pos": 29,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 2 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Further, as shown in Figure 1",
                    "start": 0,
                    "end": 29,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Further, as shown in Figure 1, adoptio...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "adoption across sectors has varied widely.",
                    "start": 31,
                    "end": 73,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "Further, as shown in Figure 1",
                "summary": "主句是「Further, as shown in Figure 1」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Further, as shown in Figure 1, adoptio...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"Further,\"（句首状语，交代背景或前提——中文习惯先译它）",
                  "\"shown in Figure 1\"（后置定语，修饰名词 **shown**）",
                  "\"as shown in Figure 1\"（插入语——删掉不影响主句结构，可先跳过）"
                ],
                "summary": "平行动 0 处、修饰成分 3 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「Further, as shown in Figure 1」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p2-s4",
            "index": 4,
            "en": "The information sector’s usage of AI (18.1%) far surpasses usage in other sectors, but it nonetheless still indicates that a majority of information sector businesses are not yet using AI.",
            "zh": "信息行业的人工智能使用率（18.1%）远超其他行业，但这仍表明信息行业中的多数企业尚未使用人工智能。",
            "wordCount": 29,
            "analysis": {
              "pattern": "结构待拆（简单句）",
              "skeleton": "The information sector’s usage of AI (… (S)",
              "chunks": [
                {
                  "role": "S",
                  "text": "The information sector’s usage of AI (18.1%) far surpasses usage in other sectors, but it nonetheless still indicates that a majority of information sector businesses are not yet using AI.",
                  "start": 0,
                  "end": 188
                }
              ],
              "notes": [
                "注意句中的否定范围，否定词可能只作用于局部成分。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "are",
                    "start": 167,
                    "end": 170,
                    "role": "predicate"
                  },
                  {
                    "text": "using",
                    "start": 179,
                    "end": 184,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  }
                ],
                "count": 1,
                "summary": "句中共有 1 个谓语动词（are），意味着有 1 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 81,
                    "marker": ", + but",
                    "reason": "but 连接并列成分，可在标点处断开"
                  },
                  {
                    "pos": 118,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  }
                ],
                "summary": "找到 2 个断点，可以把句子切成 3 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "The information sector’s usage of AI (18.1%) far surpasses usage in other sectors",
                    "start": 0,
                    "end": 81,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"The information sector’s usage of AI (...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "but it nonetheless still indicates",
                    "start": 83,
                    "end": 117,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-2",
                    "text": "that a majority of information sector businesses are not yet using AI.",
                    "start": 118,
                    "end": 188,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "The information sector’s usage of AI (18.1%) far surpasses usage in other sectors",
                "summary": "主句是「The information sector’s usage of AI (18.1%)…」，其余 2 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"The information sector’s usage of AI (...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"that a majority of information sector busine…\"（定语从句，修饰名词 **indicates**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"usage of AI (18\"（后置定语，修饰名词 **usage**）",
                  "\"usage in other sectors\"（后置定语，修饰名词 **usage**）"
                ],
                "summary": "平行动 0 处、修饰成分 3 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【名词性 / 定语从句】「that a majority of information s…」——作说明成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「The information sector’s usage o…」——这是整句的骨架",
                  "3. 注意逻辑词 **nonetheless**：转折（尽管如此）——译文要把这层关系译出来，否则会读成平铺直叙。",
                  "4. 按「说明」关系组装：中文习惯把说明类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p2-s5",
            "index": 5,
            "en": "That use of AI has been somewhat limited does not necessarily indicate that it will remain so.",
            "zh": "人工智能的使用迄今较为有限，但这并不必然意味着它会一直如此。",
            "wordCount": 17,
            "analysis": {
              "pattern": "主系表 + 从句",
              "skeleton": "That (S) + use (V) + of AI has been somewhat limited does n… (C)",
              "chunks": [
                {
                  "role": "S",
                  "text": "That",
                  "start": 0,
                  "end": 4,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "use",
                  "start": 5,
                  "end": 8,
                  "note": "主句谓语"
                },
                {
                  "role": "C",
                  "text": "of AI has been somewhat limited does not necessarily indicate",
                  "start": 9,
                  "end": 70,
                  "note": "主句的宾语/表语"
                },
                {
                  "role": "Clause",
                  "text": "that it will remain so.",
                  "start": 71,
                  "end": 94,
                  "note": "由 that 引导的从句，修饰前面的名词（定语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。",
                "注意句中的否定范围，否定词可能只作用于局部成分。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "use",
                    "start": 5,
                    "end": 8,
                    "role": "predicate"
                  },
                  {
                    "text": "has been",
                    "start": 15,
                    "end": 23,
                    "role": "predicate"
                  },
                  {
                    "text": "limited does",
                    "start": 33,
                    "end": 45,
                    "role": "predicate"
                  },
                  {
                    "text": "indicate",
                    "start": 62,
                    "end": 70,
                    "role": "predicate"
                  },
                  {
                    "text": "will remain",
                    "start": 79,
                    "end": 90,
                    "role": "predicate"
                  }
                ],
                "count": 5,
                "summary": "句中共有 5 个谓语动词（use / has been / limited does / indicate / will remain），意味着有 5 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 71,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  },
                  {
                    "pos": 91,
                    "marker": "so.",
                    "reason": "so. 引导目的 / 结果状语从句"
                  }
                ],
                "summary": "找到 2 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "That use of AI has been somewhat limited does not necessarily indicate",
                    "start": 0,
                    "end": 70,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-1",
                    "text": "that it will remain",
                    "start": 71,
                    "end": 90,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "",
                "summary": "未能确定主句，建议先按标点切分逐段理解。"
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"that it will remain so.\"（定语从句，修饰名词 **AI**——它给这个名词补充信息，翻译时通常前置成\"……的\"）"
                ],
                "summary": "平行动 0 处、修饰成分 1 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【名词性 / 定语从句】「That use of AI has been somewhat…」——作说明成分，翻译时通常放在主句之前",
                  "2. 先译【名词性 / 定语从句】「that it will remain」——作说明成分，翻译时通常放在主句之前",
                  "3. 按「说明」关系组装：中文习惯把说明类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 2 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p2-s6",
            "index": 6,
            "en": "In February 2024, businesses indicated an expected rate of AI use at 6.6% by fall 2024, an increase from earlier in the year.",
            "zh": "2024 年 2 月，企业预计到 2024 年秋季人工智能使用率将达到 6.6%，高于当年早些时候的水平。",
            "wordCount": 20,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "In February 2024, businesses (S) + indicated (V) + an expected rate of AI use at 6.6% by … (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "In February 2024, businesses",
                  "start": 0,
                  "end": 28,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "indicated",
                  "start": 29,
                  "end": 38,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "an expected rate of AI use at 6.6% by fall 2024, an increase from earlier in the year.",
                  "start": 39,
                  "end": 125,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "句中有插入成分，阅读时可先跳过，主句依然完整。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "indicated",
                    "start": 29,
                    "end": 38,
                    "role": "predicate"
                  },
                  {
                    "text": "use",
                    "start": 62,
                    "end": 65,
                    "role": "predicate"
                  },
                  {
                    "text": "fall",
                    "start": 77,
                    "end": 81,
                    "role": "predicate"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（indicated / use / fall），意味着有 3 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 16,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 86,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 2 个断点，可以把句子切成 3 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "In February 2024",
                    "start": 0,
                    "end": 16,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"In February 2024, businesses\"；谓语 = \"indicated\"；宾语 = \"an expected rate of AI use at 6.6% by ...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "businesses indicated an expected rate of AI use at 6.6% by fall 2024",
                    "start": 18,
                    "end": 86,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-2",
                    "text": "an increase from earlier in the year.",
                    "start": 88,
                    "end": 125,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "In February 2024",
                "summary": "主句是「In February 2024」，其余 2 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"In February 2024, businesses\"；谓语 = \"indicated\"；宾语 = \"an expected rate of AI use at 6.6% by ...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"rate of AI use at 6\"（后置定语，修饰名词 **rate**）",
                  "\"increase from earlier in the year\"（后置定语，修饰名词 **increase**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「In February 2024」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p2-s7",
            "index": 7,
            "en": "Other estimates indicate that certain types of AI—such as large language models, which underpin many generative AI tools—could be adopted by a large swath of businesses.",
            "zh": "其他估算则显示，某些类型的人工智能——例如支撑众多生成式人工智能工具的大语言模型——可能被相当大一部分企业采用。",
            "wordCount": 28,
            "analysis": {
              "pattern": "主谓 + 3 个从句（多重复合句）",
              "skeleton": "Other estimates (S) + indicate (V)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Other estimates",
                  "start": 0,
                  "end": 15,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "indicate",
                  "start": 16,
                  "end": 24,
                  "note": "主句谓语"
                },
                {
                  "role": "Clause",
                  "text": "that certain types of AI—such",
                  "start": 25,
                  "end": 54,
                  "note": "由 that 引导的从句，修饰前面的名词（定语从句）"
                },
                {
                  "role": "Clause",
                  "text": "as large language models,",
                  "start": 55,
                  "end": 80,
                  "note": "由 as 引导的从句，充当状语（状语从句）"
                },
                {
                  "role": "Clause",
                  "text": "which underpin many generative AI tools—could be adopted by a large swath of businesses.",
                  "start": 81,
                  "end": 169,
                  "note": "由 which 引导的从句，修饰前面的名词（定语从句）"
                }
              ],
              "notes": [
                "本句含 3 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句中有插入成分，阅读时可先跳过，主句依然完整。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "indicate",
                    "start": 16,
                    "end": 24,
                    "role": "predicate"
                  },
                  {
                    "text": "could be adopted",
                    "start": 121,
                    "end": 137,
                    "role": "predicate"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（indicate / could be adopted），意味着有 2 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 25,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  },
                  {
                    "pos": 49,
                    "marker": "— + such",
                    "reason": "such 引导定语从句，此处必须断开"
                  },
                  {
                    "pos": 55,
                    "marker": "as",
                    "reason": "as 引导时间/原因状语从句"
                  },
                  {
                    "pos": 79,
                    "marker": ", + which",
                    "reason": "which 引导定语从句，此处必须断开"
                  },
                  {
                    "pos": 120,
                    "marker": "—",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 5 个断点，可以把句子切成 5 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Other estimates indicate",
                    "start": 0,
                    "end": 24,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Other estimates\"；谓语 = \"indicate\""
                  },
                  {
                    "id": "seg-1",
                    "text": "that certain types of AI",
                    "start": 25,
                    "end": 49,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-2",
                    "text": "such as large language models",
                    "start": 50,
                    "end": 79,
                    "type": "定语从句",
                    "isMain": false,
                    "hint": "作修饰成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-3",
                    "text": "which underpin many generative AI tools",
                    "start": 81,
                    "end": 120,
                    "type": "非限定性定语从句",
                    "isMain": false,
                    "hint": "对前面的名词做补充说明，翻译时可另起一小句"
                  },
                  {
                    "id": "seg-4",
                    "text": "could be adopted by a large swath of businesses.",
                    "start": 121,
                    "end": 169,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "Other estimates indicate",
                "summary": "主句是「Other estimates indicate」，其余 4 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Other estimates\"；谓语 = \"indicate\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"that certain types of AI—such as large langu…\"（定语从句，修饰名词 **estimates**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"which underpin many generative AI tools—coul…\"（定语从句，修饰名词 **models,**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"adopted by a large swath of businesses\"（后置定语，修饰名词 **adopted**）"
                ],
                "summary": "平行动 0 处、修饰成分 3 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【名词性 / 定语从句】「that certain types of AI」——作说明成分，翻译时通常放在主句之前",
                  "2. 先译【定语从句】「such as large language models」——作修饰成分，翻译时通常放在主句之前",
                  "3. 先译【非限定性定语从句】「which underpin many generative A…」——对前面的名词做补充说明，翻译时可另起一小句",
                  "4. 再译【主句】「Other estimates indicate」——这是整句的骨架",
                  "5. 按「说明」关系组装：中文习惯把说明类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 3 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p2-s8",
            "index": 8,
            "en": "One projection of future private U.S. investment in AI also indicates growth to $81.7 billion in 2025 from $47.4 billion in 2022.",
            "zh": "一项对美国未来私营部门人工智能投资的预测也显示，投资额将从 2022 年的 474 亿美元增长到 2025 年的 817 亿美元。",
            "wordCount": 19,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "One projection of future private U.S. … (S) + indicates (V) + growth to $81.7 billion in 2025 from $… (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "One projection of future private U.S. investment in AI also",
                  "start": 0,
                  "end": 59,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "indicates",
                  "start": 60,
                  "end": 69,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "growth to $81.7 billion in 2025 from $47.4 billion in 2022.",
                  "start": 70,
                  "end": 129,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "indicates",
                    "start": 60,
                    "end": 69,
                    "role": "predicate"
                  }
                ],
                "count": 1,
                "summary": "句中共有 1 个谓语动词（indicates），意味着有 1 件事要译。"
              },
              "step2": {
                "breaks": [],
                "summary": "句中无明显断点，结构较简单。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "One projection of future private U.S. investment in AI also indicates growth to $81.7 billion in 2025 from $47.4 billion in 2022.",
                    "start": 0,
                    "end": 129,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"One projection of future private U.S. ...\"；谓语 = \"indicates\"；宾语 = \"growth to $81.7 billion in 2025 from $...\""
                  }
                ],
                "mainText": "One projection of future private U.S. investment in AI also indicates growth to $81.7 billion in 2025 from $47.4 billion in 2022.",
                "summary": "主句是「One projection of future private U.S. invest…」，其余 0 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"One projection of future private U.S. ...\"；谓语 = \"indicates\"；宾语 = \"growth to $81.7 billion in 2025 from $...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"projection of future private U\"（后置定语，修饰名词 **projection**）",
                  "\"investment in AI also indicates growth to $81\"（后置定语，修饰名词 **investment**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「One projection of future private…」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p2-s9",
            "index": 9,
            "en": "How much usage would be necessary to create structural shifts in the economy is uncertain, although the effects to this point appear somewhat limited.",
            "zh": "需要多大的使用规模才能带来经济结构性的转变，目前尚不确定；不过迄今为止的影响似乎还比较有限。",
            "wordCount": 24,
            "analysis": {
              "pattern": "主系表 + 从句",
              "skeleton": "How much usage (S) + would be (V) + necessary to create structural shifts … (C)",
              "chunks": [
                {
                  "role": "S",
                  "text": "How much usage",
                  "start": 0,
                  "end": 14,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "would be",
                  "start": 15,
                  "end": 23,
                  "note": "主句谓语"
                },
                {
                  "role": "C",
                  "text": "necessary to create structural shifts in the economy is uncertain,",
                  "start": 24,
                  "end": 90,
                  "note": "主句的宾语/表语"
                },
                {
                  "role": "Clause",
                  "text": "although the effects to this point appear somewhat limited.",
                  "start": 91,
                  "end": 150,
                  "note": "由 although 引导的从句，充当状语（状语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "would be",
                    "start": 15,
                    "end": 23,
                    "role": "predicate"
                  },
                  {
                    "text": "create",
                    "start": 37,
                    "end": 43,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  },
                  {
                    "text": "is",
                    "start": 77,
                    "end": 79,
                    "role": "predicate"
                  },
                  {
                    "text": "appear",
                    "start": 126,
                    "end": 132,
                    "role": "predicate"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（would be / is / appear），意味着有 3 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 89,
                    "marker": ", + although",
                    "reason": "although 引导让步状语从句，此处必须断开"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "How much usage would be necessary to create structural shifts in the economy is uncertain",
                    "start": 0,
                    "end": 89,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"How much usage\"；谓语 = \"would be\"；表语 = \"necessary to create structural shifts ...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "although the effects to this point appear somewhat limited.",
                    "start": 91,
                    "end": 150,
                    "type": "让步状语从句",
                    "isMain": false,
                    "hint": "作让步成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "How much usage would be necessary to create structural shifts in the economy is uncertain",
                "summary": "主句是「How much usage would be necessary to create …」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"How much usage\"；谓语 = \"would be\"；表语 = \"necessary to create structural shifts ...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"necessary to create structural shifts in the…\"（后置定语，修饰名词 **necessary**）",
                  "\"effects to this point appear somewhat limited\"（后置定语，修饰名词 **effects**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【让步状语从句】「although the effects to this poi…」——作让步成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「How much usage would be necessar…」——这是整句的骨架",
                  "3. 按「让步」关系组装：中文习惯把让步类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p2-s10",
            "index": 10,
            "en": "Further, just because a technology has the capacity for use does not necessarily indicate that it will be used quickly and broadly across economic activity or at all.",
            "zh": "此外，一项技术具备被使用的能力，并不必然意味着它会被迅速而广泛地用于各类经济活动，甚至不意味着它一定会被使用。",
            "wordCount": 28,
            "analysis": {
              "pattern": "结构待拆（简单句）",
              "skeleton": "Further, just because a technology has… (S)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Further, just because a technology has the capacity for use does not necessarily indicate that it will be used quickly and broadly across economic activity or at all.",
                  "start": 0,
                  "end": 166
                }
              ],
              "notes": [
                "注意句中的否定范围，否定词可能只作用于局部成分。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "has",
                    "start": 35,
                    "end": 38,
                    "role": "predicate"
                  },
                  {
                    "text": "use",
                    "start": 56,
                    "end": 59,
                    "role": "predicate"
                  },
                  {
                    "text": "indicate",
                    "start": 81,
                    "end": 89,
                    "role": "predicate"
                  },
                  {
                    "text": "will be used",
                    "start": 98,
                    "end": 110,
                    "role": "predicate"
                  }
                ],
                "count": 4,
                "summary": "句中共有 4 个谓语动词（has / use / indicate / will be used），意味着有 4 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 7,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 14,
                    "marker": "because",
                    "reason": "because 引导原因状语从句"
                  },
                  {
                    "pos": 90,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  }
                ],
                "summary": "找到 3 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Further, just because a technology has the capacity for use does not necessarily indicate",
                    "start": 0,
                    "end": 89,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Further, just because a technology has...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "that it will be used quickly and broadly across economic activity or at all.",
                    "start": 90,
                    "end": 166,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "Further, just because a technology has the capacity for use does not necessarily indicate",
                "summary": "主句是「Further, just because a technology has the c…」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Further, just because a technology has...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"that it will be used quickly and broadly acr…\"（定语从句，修饰名词 **does**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"Further,\"（句首状语，交代背景或前提——中文习惯先译它）",
                  "\"capacity for use does not necessarily indica…\"（后置定语，修饰名词 **capacity**）"
                ],
                "summary": "平行动 0 处、修饰成分 3 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【名词性 / 定语从句】「that it will be used quickly and…」——作说明成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「Further, just because a technolo…」——这是整句的骨架",
                  "3. 按「说明」关系组装：中文习惯把说明类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p2-s11",
            "index": 11,
            "en": "The diffusion of past technologies has varied widely.",
            "zh": "过往技术的扩散情况差异极大。",
            "wordCount": 8,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "The diffusion of past technologies (S) + has varied (V) + widely. (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "The diffusion of past technologies",
                  "start": 0,
                  "end": 34,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "has varied",
                  "start": 35,
                  "end": 45,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "widely.",
                  "start": 46,
                  "end": 53,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "past",
                    "start": 17,
                    "end": 21,
                    "role": "preposition",
                    "note": "是介词，不是动词"
                  },
                  {
                    "text": "has varied",
                    "start": 35,
                    "end": 45,
                    "role": "predicate"
                  }
                ],
                "count": 1,
                "summary": "句中共有 1 个谓语动词（has varied），意味着有 1 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [],
                "summary": "句中无明显断点，结构较简单。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "The diffusion of past technologies has varied widely.",
                    "start": 0,
                    "end": 53,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"The diffusion of past technologies\"；谓语 = \"has varied\"；宾语 = \"widely.\""
                  }
                ],
                "mainText": "The diffusion of past technologies has varied widely.",
                "summary": "主句是「The diffusion of past technologies has varie…」，其余 0 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"The diffusion of past technologies\"；谓语 = \"has varied\"；宾语 = \"widely.\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"diffusion of past technologies has varied wi…\"（后置定语，修饰名词 **diffusion**）"
                ],
                "summary": "平行动 0 处、修饰成分 1 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「The diffusion of past technologi…」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p2-s12",
            "index": 12,
            "en": "According to the Federal Reserve Bank of St. Louis, the diffusion of AI appears to be following a pattern similar to personal computers or cloud computing, which were adopted slowly over multiple decades.",
            "zh": "据圣路易斯联邦储备银行的说法，人工智能的扩散似乎正遵循与个人电脑或云计算类似的模式——后两者都是在数十年间缓慢普及的。",
            "wordCount": 33,
            "analysis": {
              "pattern": "结构待拆 + 非限定性定语从句",
              "skeleton": "According (V) + to the Federal Reserve Bank of St. Lou… (C)",
              "chunks": [
                {
                  "role": "V",
                  "text": "According",
                  "start": 0,
                  "end": 9,
                  "note": "主句谓语"
                },
                {
                  "role": "C",
                  "text": "to the Federal Reserve Bank of St. Louis, the diffusion of AI appears to be following a pattern similar to personal computers or cloud computing,",
                  "start": 10,
                  "end": 155,
                  "note": "主句的宾语/表语"
                },
                {
                  "role": "Clause",
                  "text": "which were adopted slowly over multiple decades.",
                  "start": 156,
                  "end": 204,
                  "note": "由 which 引导的从句，修饰前面的名词（定语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-0-0",
                "text": "According to",
                "zh": "根据",
                "kind": "介词框架"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "According",
                    "start": 0,
                    "end": 9,
                    "role": "preposition",
                    "note": "是介词，不是动词"
                  },
                  {
                    "text": "appears",
                    "start": 72,
                    "end": 79,
                    "role": "predicate"
                  },
                  {
                    "text": "be",
                    "start": 83,
                    "end": 85,
                    "role": "predicate"
                  },
                  {
                    "text": "following",
                    "start": 86,
                    "end": 95,
                    "role": "preposition",
                    "note": "是介词，不是动词"
                  },
                  {
                    "text": "cloud",
                    "start": 139,
                    "end": 144,
                    "role": "predicate"
                  },
                  {
                    "text": "computing,",
                    "start": 145,
                    "end": 155,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  },
                  {
                    "text": "were adopted",
                    "start": 162,
                    "end": 174,
                    "role": "predicate"
                  }
                ],
                "count": 4,
                "summary": "句中共有 4 个谓语动词（appears / be / cloud / were adopted），意味着有 4 件事要译；另有 3 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 50,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 154,
                    "marker": ", + which",
                    "reason": "which 引导定语从句，此处必须断开"
                  }
                ],
                "summary": "找到 2 个断点，可以把句子切成 3 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "According to the Federal Reserve Bank of St. Louis",
                    "start": 0,
                    "end": 50,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 谓语 = \"According\"；表语 = \"to the Federal Reserve Bank of St. Lou...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "the diffusion of AI appears to be following a pattern similar to personal computers or cloud computing",
                    "start": 52,
                    "end": 154,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-2",
                    "text": "which were adopted slowly over multiple decades.",
                    "start": 156,
                    "end": 204,
                    "type": "非限定性定语从句",
                    "isMain": false,
                    "hint": "对前面的名词做补充说明，翻译时可另起一小句"
                  }
                ],
                "mainText": "According to the Federal Reserve Bank of St. Louis",
                "summary": "主句是「According to the Federal Reserve Bank of St.…」，其余 2 段都是挂在这一主干上的修饰或从句。 主干拆解：谓语 = \"According\"；表语 = \"to the Federal Reserve Bank of St. Lou...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"which were adopted slowly over multiple deca…\"（定语从句，修饰名词 **computers**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"According to the Federal Reserve Bank of St\"（后置定语，修饰名词 **According**）",
                  "\"diffusion of AI appears to be following a pa…\"（后置定语，修饰名词 **diffusion**）"
                ],
                "summary": "平行动 0 处、修饰成分 3 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【非限定性定语从句】「which were adopted slowly over m…」——对前面的名词做补充说明，翻译时可另起一小句",
                  "2. 再译【主句】「According to the Federal Reserve…」——这是整句的骨架",
                  "3. 按「修饰」关系组装：中文习惯把修饰类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p2-s13",
            "index": 13,
            "en": "The extent to which AI use becomes ubiquitous in the workplace is uncertain, but current evidence suggests that workplace use of roughly 40% or more could take over a decade.",
            "zh": "人工智能在工作场所普及到何种程度尚不确定，但现有证据表明，要让约 40% 以上的工作场所加以使用，可能需要十多年时间。",
            "wordCount": 29,
            "analysis": {
              "pattern": "结构待拆（简单句）",
              "skeleton": "The extent to which AI use becomes ubi… (S)",
              "chunks": [
                {
                  "role": "S",
                  "text": "The extent to which AI use becomes ubiquitous in the workplace is uncertain, but current evidence suggests that workplace use of roughly 40% or more could take over a decade.",
                  "start": 0,
                  "end": 174
                }
              ],
              "notes": [],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-155-0",
                "text": "take over",
                "zh": "接管；取代",
                "kind": "短语动词"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "use",
                    "start": 23,
                    "end": 26,
                    "role": "predicate"
                  },
                  {
                    "text": "is",
                    "start": 63,
                    "end": 65,
                    "role": "predicate"
                  },
                  {
                    "text": "suggests",
                    "start": 98,
                    "end": 106,
                    "role": "predicate"
                  },
                  {
                    "text": "use",
                    "start": 122,
                    "end": 125,
                    "role": "predicate"
                  },
                  {
                    "text": "could take",
                    "start": 149,
                    "end": 159,
                    "role": "predicate"
                  }
                ],
                "count": 5,
                "summary": "句中共有 5 个谓语动词（use / is / suggests / use / could take），意味着有 5 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 14,
                    "marker": "which",
                    "reason": "which 引导定语从句"
                  },
                  {
                    "pos": 75,
                    "marker": ", + but",
                    "reason": "but 连接并列成分，可在标点处断开"
                  },
                  {
                    "pos": 107,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  }
                ],
                "summary": "找到 3 个断点，可以把句子切成 4 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "The extent to",
                    "start": 0,
                    "end": 13,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"The extent to which AI use becomes ubi...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "which AI use becomes ubiquitous in the workplace is uncertain",
                    "start": 14,
                    "end": 75,
                    "type": "定语从句",
                    "isMain": false,
                    "hint": "作修饰成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-2",
                    "text": "but current evidence suggests",
                    "start": 77,
                    "end": 106,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-3",
                    "text": "that workplace use of roughly 40% or more could take over a decade.",
                    "start": 107,
                    "end": 174,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "The extent to",
                "summary": "主句是「The extent to」，其余 3 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"The extent to which AI use becomes ubi...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"which AI use becomes ubiquitous in the workp…\"（定语从句，修饰名词 **extent**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"that workplace use of roughly 40% or more co…\"（定语从句，修饰名词 **evidence**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"extent to which AI use becomes ubiquitous in…\"（后置定语，修饰名词 **extent**）"
                ],
                "summary": "平行动 0 处、修饰成分 3 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【定语从句】「which AI use becomes ubiquitous …」——作修饰成分，翻译时通常放在主句之前",
                  "2. 先译【名词性 / 定语从句】「that workplace use of roughly 40…」——作说明成分，翻译时通常放在主句之前",
                  "3. 再译【主句】「The extent to」——这是整句的骨架",
                  "4. 按「修饰」关系组装：中文习惯把修饰类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 2 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p2-s14",
            "index": 14,
            "en": "As such, the effects of AI on the economy may be relatively small for the time being but may grow over time.",
            "zh": "因此，人工智能对经济的影响在当下可能相对较小，但会随时间推移而增大。",
            "wordCount": 22,
            "analysis": {
              "pattern": "主谓宾 + 从句",
              "skeleton": "the effects of AI on the economy (S) + may be (V) + relatively small for the time being bu… (O)",
              "chunks": [
                {
                  "role": "Clause",
                  "text": "As such,",
                  "start": 0,
                  "end": 8,
                  "note": "句首状语从句：先交代条件/让步/时间背景，主句在后面"
                },
                {
                  "role": "S",
                  "text": "the effects of AI on the economy",
                  "start": 9,
                  "end": 41,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "may be",
                  "start": 42,
                  "end": 48,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "relatively small for the time being but may grow over time.",
                  "start": 49,
                  "end": 108,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-0-0",
                "text": "As such",
                "zh": "因此；就其本身而言",
                "kind": "习语"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "may be",
                    "start": 42,
                    "end": 48,
                    "role": "predicate"
                  },
                  {
                    "text": "being",
                    "start": 79,
                    "end": 84,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  },
                  {
                    "text": "may grow",
                    "start": 89,
                    "end": 97,
                    "role": "predicate"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（may be / may grow），意味着有 2 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 3,
                    "marker": "such,",
                    "reason": "such, 引导定语从句"
                  },
                  {
                    "pos": 7,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 2 个断点，可以把句子切成 1 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "such, the effects of AI on the economy may be relatively small for the time being but may grow over time.",
                    "start": 3,
                    "end": 108,
                    "type": "定语从句",
                    "isMain": false,
                    "hint": "作修饰成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "",
                "summary": "未能确定主句，建议先按标点切分逐段理解。"
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"As such,\"（句首状语，交代背景或前提——中文习惯先译它）",
                  "\"effects of AI on the economy may be relative…\"（后置定语，修饰名词 **effects**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【定语从句】「such, the effects of AI on the e…」——作修饰成分，翻译时通常放在主句之前",
                  "2. 按「修饰」关系组装：中文习惯把修饰类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          }
        ]
      },
      {
        "id": "crs-if12762-ai-macro-p3",
        "index": 3,
        "heading": "AI and the Labor Market",
        "sentences": [
          {
            "id": "crs-if12762-ai-macro-p3-s0",
            "index": 0,
            "en": "Questions around how technologies may cause structural labor market shifts are long-standing.",
            "zh": "关于技术如何引发劳动力市场结构性变化的问题由来已久。",
            "wordCount": 12,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "Questions around how technologies (S) + may cause (V) + structural labor market shifts are lon… (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Questions around how technologies",
                  "start": 0,
                  "end": 33,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "may cause",
                  "start": 34,
                  "end": 43,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "structural labor market shifts are long-standing.",
                  "start": 44,
                  "end": 93,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "may cause",
                    "start": 34,
                    "end": 43,
                    "role": "predicate"
                  },
                  {
                    "text": "are",
                    "start": 75,
                    "end": 78,
                    "role": "predicate"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（may cause / are），意味着有 2 件事要译。"
              },
              "step2": {
                "breaks": [],
                "summary": "句中无明显断点，结构较简单。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Questions around how technologies may cause structural labor market shifts are long-standing.",
                    "start": 0,
                    "end": 93,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Questions around how technologies\"；谓语 = \"may cause\"；宾语 = \"structural labor market shifts are lon...\""
                  }
                ],
                "mainText": "Questions around how technologies may cause structural labor market shifts are long-standing.",
                "summary": "主句是「Questions around how technologies may cause …」，其余 0 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Questions around how technologies\"；谓语 = \"may cause\"；宾语 = \"structural labor market shifts are lon...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [],
                "summary": "本句没有明显的平行结构或插入成分。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「Questions around how technologie…」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p3-s1",
            "index": 1,
            "en": "In the past, some economists voiced concerns about the extent to which automation could replace jobs, such as in manufacturing.",
            "zh": "过去，一些经济学家曾对自动化可能取代就业的程度表示担忧，例如在制造业中。",
            "wordCount": 20,
            "analysis": {
              "pattern": "主系表 + 2 个从句（多重复合句）",
              "skeleton": "In the past, some economists (S) + voiced concerns (V) + about the extent to (C)",
              "chunks": [
                {
                  "role": "S",
                  "text": "In the past, some economists",
                  "start": 0,
                  "end": 28,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "voiced concerns",
                  "start": 29,
                  "end": 44,
                  "note": "主句谓语"
                },
                {
                  "role": "C",
                  "text": "about the extent to",
                  "start": 45,
                  "end": 64,
                  "note": "主句的宾语/表语"
                },
                {
                  "role": "Clause",
                  "text": "which automation could replace jobs, such",
                  "start": 65,
                  "end": 106,
                  "note": "由 which 引导的从句，修饰前面的名词（定语从句）"
                },
                {
                  "role": "Clause",
                  "text": "as in manufacturing.",
                  "start": 107,
                  "end": 127,
                  "note": "由 as 引导的从句，充当状语（状语从句）"
                }
              ],
              "notes": [
                "本句含 2 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句中有插入成分，阅读时可先跳过，主句依然完整。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "past,",
                    "start": 7,
                    "end": 12,
                    "role": "preposition",
                    "note": "是介词，不是动词"
                  },
                  {
                    "text": "voiced concerns",
                    "start": 29,
                    "end": 44,
                    "role": "predicate"
                  },
                  {
                    "text": "could replace",
                    "start": 82,
                    "end": 95,
                    "role": "predicate"
                  },
                  {
                    "text": "manufacturing.",
                    "start": 113,
                    "end": 127,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（voiced concerns / could replace），意味着有 2 件事要译；另有 2 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 11,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 65,
                    "marker": "which",
                    "reason": "which 引导定语从句"
                  },
                  {
                    "pos": 100,
                    "marker": ", + such",
                    "reason": "such 引导定语从句，此处必须断开"
                  },
                  {
                    "pos": 107,
                    "marker": "as",
                    "reason": "as 引导时间/原因状语从句"
                  }
                ],
                "summary": "找到 4 个断点，可以把句子切成 4 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "In the past",
                    "start": 0,
                    "end": 11,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"In the past, some economists\"；谓语 = \"voiced concerns\"；表语 = \"about the extent to\""
                  },
                  {
                    "id": "seg-1",
                    "text": "some economists voiced concerns about the extent to",
                    "start": 13,
                    "end": 64,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-2",
                    "text": "which automation could replace jobs",
                    "start": 65,
                    "end": 100,
                    "type": "定语从句",
                    "isMain": false,
                    "hint": "作修饰成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-3",
                    "text": "such as in manufacturing.",
                    "start": 102,
                    "end": 127,
                    "type": "定语从句",
                    "isMain": false,
                    "hint": "作修饰成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "In the past",
                "summary": "主句是「In the past」，其余 3 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"In the past, some economists\"；谓语 = \"voiced concerns\"；表语 = \"about the extent to\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"which automation could replace jobs, such as…\"（定语从句，修饰名词 **extent**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"In the past,\"（句首状语，交代背景或前提——中文习惯先译它）",
                  "\"extent to which automation could replace jobs\"（后置定语，修饰名词 **extent**）"
                ],
                "summary": "平行动 0 处、修饰成分 3 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【定语从句】「which automation could replace j…」——作修饰成分，翻译时通常放在主句之前",
                  "2. 先译【定语从句】「such as in manufacturing.」——作修饰成分，翻译时通常放在主句之前",
                  "3. 再译【主句】「In the past」——这是整句的骨架",
                  "4. 按「修饰」关系组装：中文习惯把修饰类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 2 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p3-s2",
            "index": 2,
            "en": "Today, similar questions are being asked with regard to AI.",
            "zh": "如今，围绕人工智能也提出了类似的问题。",
            "wordCount": 10,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "Today, similar questions (S) + are being asked (V) + with regard to AI. (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Today, similar questions",
                  "start": 0,
                  "end": 24,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "are being asked",
                  "start": 25,
                  "end": 40,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "with regard to AI.",
                  "start": 41,
                  "end": 59,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-41-0",
                "text": "with regard to",
                "zh": "关于",
                "kind": "习语"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "are",
                    "start": 25,
                    "end": 28,
                    "role": "predicate"
                  },
                  {
                    "text": "being",
                    "start": 29,
                    "end": 34,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  },
                  {
                    "text": "asked",
                    "start": 35,
                    "end": 40,
                    "role": "predicate"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（are / asked），意味着有 2 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 5,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 1 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Today, similar questions are being asked with regard to AI.",
                    "start": 0,
                    "end": 59,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Today, similar questions\"；谓语 = \"are being asked\"；宾语 = \"with regard to AI.\""
                  }
                ],
                "mainText": "Today, similar questions are being asked with regard to AI.",
                "summary": "主句是「Today, similar questions are being asked wit…」，其余 0 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Today, similar questions\"；谓语 = \"are being asked\"；宾语 = \"with regard to AI.\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"Today,\"（句首状语，交代背景或前提——中文习惯先译它）",
                  "\"asked with regard to AI\"（后置定语，修饰名词 **asked**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「Today, similar questions are bei…」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p3-s3",
            "index": 3,
            "en": "As shown in Table 1, BTOS data indicate that while businesses that use AI report it replacing some number of tasks, employment effects in either direction are relatively small.",
            "zh": "如表 1 所示，BTOS 的数据表明，虽然使用人工智能的企业报告称其取代了一定数量的任务，但无论增加还是减少，对就业的影响都相对较小。",
            "wordCount": 28,
            "analysis": {
              "pattern": "主谓 + 3 个从句（多重复合句）",
              "skeleton": "BTOS data (S) + indicate (V)",
              "chunks": [
                {
                  "role": "Clause",
                  "text": "As shown in Table 1,",
                  "start": 0,
                  "end": 20,
                  "note": "句首状语从句：先交代条件/让步/时间背景，主句在后面"
                },
                {
                  "role": "S",
                  "text": "BTOS data",
                  "start": 21,
                  "end": 30,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "indicate",
                  "start": 31,
                  "end": 39,
                  "note": "主句谓语"
                },
                {
                  "role": "Clause",
                  "text": "that",
                  "start": 40,
                  "end": 44,
                  "note": "由 that 引导的从句，修饰前面的名词（定语从句）"
                },
                {
                  "role": "Clause",
                  "text": "while businesses that use AI report it replacing some number of tasks, employment effects in either direction are relatively small.",
                  "start": 45,
                  "end": 176,
                  "note": "由 while 引导的从句，充当状语（状语从句）"
                }
              ],
              "notes": [
                "本句含 3 个从属分句，先锁定主句主干，再逐层挂回修饰成分。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "shown",
                    "start": 3,
                    "end": 8,
                    "role": "predicate"
                  },
                  {
                    "text": "indicate",
                    "start": 31,
                    "end": 39,
                    "role": "predicate"
                  },
                  {
                    "text": "use",
                    "start": 67,
                    "end": 70,
                    "role": "predicate"
                  },
                  {
                    "text": "report",
                    "start": 74,
                    "end": 80,
                    "role": "predicate"
                  },
                  {
                    "text": "replacing",
                    "start": 84,
                    "end": 93,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  },
                  {
                    "text": "effects",
                    "start": 127,
                    "end": 134,
                    "role": "predicate"
                  },
                  {
                    "text": "are",
                    "start": 155,
                    "end": 158,
                    "role": "predicate"
                  }
                ],
                "count": 6,
                "summary": "句中共有 6 个谓语动词（shown / indicate / use / report / effects / are），意味着有 6 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 19,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 40,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  },
                  {
                    "pos": 45,
                    "marker": "while",
                    "reason": "while 引导时间/让步状语从句"
                  },
                  {
                    "pos": 62,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  },
                  {
                    "pos": 114,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 5 个断点，可以把句子切成 5 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "As shown in Table 1",
                    "start": 0,
                    "end": 19,
                    "type": "时间/原因状语从句",
                    "isMain": false,
                    "hint": "作时间或原因成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-1",
                    "text": "BTOS data indicate",
                    "start": 21,
                    "end": 39,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"BTOS data\"；谓语 = \"indicate\""
                  },
                  {
                    "id": "seg-2",
                    "text": "that while businesses",
                    "start": 40,
                    "end": 61,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-3",
                    "text": "that use AI report it replacing some number of tasks",
                    "start": 62,
                    "end": 114,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-4",
                    "text": "employment effects in either direction are relatively small.",
                    "start": 116,
                    "end": 176,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "BTOS data indicate",
                "summary": "主句是「BTOS data indicate」，其余 4 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"BTOS data\"；谓语 = \"indicate\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"that while businesses that use AI report it …\"（定语从句，修饰名词 **data**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"that use AI report it replacing some number …\"（定语从句，修饰名词 **businesses**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"shown in Table 1\"（后置定语，修饰名词 **shown**）",
                  "\"number of tasks\"（后置定语，修饰名词 **number**）"
                ],
                "summary": "平行动 0 处、修饰成分 4 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【时间/原因状语从句】「As shown in Table 1」——作时间或原因成分，翻译时通常放在主句之前",
                  "2. 先译【名词性 / 定语从句】「that while businesses」——作说明成分，翻译时通常放在主句之前",
                  "3. 先译【名词性 / 定语从句】「that use AI report it replacing …」——作说明成分，翻译时通常放在主句之前",
                  "4. 再译【主句】「BTOS data indicate」——这是整句的骨架",
                  "5. 按「时间或原因」关系组装：中文习惯把时间或原因类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 3 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p3-s4",
            "index": 4,
            "en": "This indicates that, as used currently, AI is not replacing workers on average.",
            "zh": "这表明，就目前的使用方式而言，人工智能总体上并未取代劳动者。",
            "wordCount": 13,
            "analysis": {
              "pattern": "主谓 + 2 个从句（多重复合句）",
              "skeleton": "This (S) + indicates (V)",
              "chunks": [
                {
                  "role": "S",
                  "text": "This",
                  "start": 0,
                  "end": 4,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "indicates",
                  "start": 5,
                  "end": 14,
                  "note": "主句谓语"
                },
                {
                  "role": "Clause",
                  "text": "that,",
                  "start": 15,
                  "end": 20,
                  "note": "由 that, 引导的从句，修饰前面的名词（定语从句）"
                },
                {
                  "role": "Clause",
                  "text": "as used currently, AI is not replacing workers on average.",
                  "start": 21,
                  "end": 79,
                  "note": "由 as 引导的从句，充当状语（状语从句）"
                }
              ],
              "notes": [
                "本句含 2 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句中有插入成分，阅读时可先跳过，主句依然完整。",
                "注意句中的否定范围，否定词可能只作用于局部成分。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-68-0",
                "text": "on average",
                "zh": "平均而言",
                "kind": "习语"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "indicates",
                    "start": 5,
                    "end": 14,
                    "role": "predicate"
                  },
                  {
                    "text": "used",
                    "start": 24,
                    "end": 28,
                    "role": "predicate"
                  },
                  {
                    "text": "is",
                    "start": 43,
                    "end": 45,
                    "role": "predicate"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（indicates / used / is），意味着有 3 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 15,
                    "marker": "that,",
                    "reason": "that, 引导名词性 / 定语从句"
                  },
                  {
                    "pos": 19,
                    "marker": ", + as",
                    "reason": "as 引导时间/原因状语从句，此处必须断开"
                  },
                  {
                    "pos": 38,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 3 个断点，可以把句子切成 3 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "This indicates that",
                    "start": 0,
                    "end": 19,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"This\"；谓语 = \"indicates\""
                  },
                  {
                    "id": "seg-1",
                    "text": "as used currently",
                    "start": 21,
                    "end": 38,
                    "type": "时间/原因状语从句",
                    "isMain": false,
                    "hint": "作时间或原因成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-2",
                    "text": "AI is not replacing workers on average.",
                    "start": 40,
                    "end": 79,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "This indicates that",
                "summary": "主句是「This indicates that」，其余 2 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"This\"；谓语 = \"indicates\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"that, as used currently\"（定语从句，修饰前面的名词）",
                  "\"workers on average\"（后置定语，修饰名词 **workers**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【时间/原因状语从句】「as used currently」——作时间或原因成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「This indicates that」——这是整句的骨架",
                  "3. 按「时间或原因」关系组装：中文习惯把时间或原因类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p3-s5",
            "index": 5,
            "en": "However, businesses report expectations that AI will have a growing impact on firm employment.",
            "zh": "不过，企业表示预计人工智能对企业用工的影响将日益增大。",
            "wordCount": 14,
            "analysis": {
              "pattern": "主系表 + 从句",
              "skeleton": "However, businesses (S) + report (V) + expectations (C)",
              "chunks": [
                {
                  "role": "S",
                  "text": "However, businesses",
                  "start": 0,
                  "end": 19,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "report",
                  "start": 20,
                  "end": 26,
                  "note": "主句谓语"
                },
                {
                  "role": "C",
                  "text": "expectations",
                  "start": 27,
                  "end": 39,
                  "note": "主句的宾语/表语"
                },
                {
                  "role": "Clause",
                  "text": "that AI will have a growing impact on firm employment.",
                  "start": 40,
                  "end": 94,
                  "note": "由 that 引导的从句，修饰前面的名词（定语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "report",
                    "start": 20,
                    "end": 26,
                    "role": "predicate"
                  },
                  {
                    "text": "will have",
                    "start": 48,
                    "end": 57,
                    "role": "predicate"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（report / will have），意味着有 2 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 7,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 40,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  }
                ],
                "summary": "找到 2 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "However, businesses report expectations",
                    "start": 0,
                    "end": 39,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"However, businesses\"；谓语 = \"report\"；表语 = \"expectations\""
                  },
                  {
                    "id": "seg-1",
                    "text": "that AI will have a growing impact on firm employment.",
                    "start": 40,
                    "end": 94,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "However, businesses report expectations",
                "summary": "主句是「However, businesses report expectations」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"However, businesses\"；谓语 = \"report\"；表语 = \"expectations\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"that AI will have a growing impact on firm e…\"（定语从句，修饰名词 **expectations**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"However,\"（句首状语，交代背景或前提——中文习惯先译它）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【名词性 / 定语从句】「that AI will have a growing impa…」——作说明成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「However, businesses report expec…」——这是整句的骨架",
                  "3. 注意逻辑词 **however**：转折（然而）——译文要把这层关系译出来，否则会读成平铺直叙。",
                  "4. 按「说明」关系组装：中文习惯把说明类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p3-s6",
            "index": 6,
            "en": "Nonetheless, as has happened in past episodes of technological change, AI may result in a changing mix of available jobs, including the creation of new ones but not fewer total jobs in the long run.",
            "zh": "尽管如此，正如以往的技术变革时期那样，人工智能可能导致可用岗位的结构发生变化——既会创造新岗位，从长期看也不会使岗位总量减少。",
            "wordCount": 35,
            "analysis": {
              "pattern": "结构待拆（简单句）",
              "skeleton": "Nonetheless, as has happened in past e… (S)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Nonetheless, as has happened in past episodes of technological change, AI may result in a changing mix of available jobs, including the creation of new ones but not fewer total jobs in the long run.",
                  "start": 0,
                  "end": 198
                }
              ],
              "notes": [
                "句中有插入成分，阅读时可先跳过，主句依然完整。",
                "注意句中的否定范围，否定词可能只作用于局部成分。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-182-0",
                "text": "in the long run",
                "zh": "从长远来看",
                "kind": "习语"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "has happened",
                    "start": 16,
                    "end": 28,
                    "role": "predicate"
                  },
                  {
                    "text": "past",
                    "start": 32,
                    "end": 36,
                    "role": "preposition",
                    "note": "是介词，不是动词"
                  },
                  {
                    "text": "may result",
                    "start": 74,
                    "end": 84,
                    "role": "predicate"
                  },
                  {
                    "text": "including",
                    "start": 122,
                    "end": 131,
                    "role": "preposition",
                    "note": "是介词，不是动词"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（has happened / may result），意味着有 2 件事要译；另有 2 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 11,
                    "marker": ", + as",
                    "reason": "as 引导时间/原因状语从句，此处必须断开"
                  },
                  {
                    "pos": 69,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 120,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 3 个断点，可以把句子切成 3 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Nonetheless, as has happened in past episodes of technological change",
                    "start": 0,
                    "end": 69,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Nonetheless, as has happened in past e...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "AI may result in a changing mix of available jobs",
                    "start": 71,
                    "end": 120,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-2",
                    "text": "including the creation of new ones but not fewer total jobs in the long run.",
                    "start": 122,
                    "end": 198,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "Nonetheless, as has happened in past episodes of technological change",
                "summary": "主句是「Nonetheless, as has happened in past episode…」，其余 2 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Nonetheless, as has happened in past e...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"Nonetheless,\"（句首状语，交代背景或前提——中文习惯先译它）",
                  "\"happened in past episodes of technological c…\"（后置定语，修饰名词 **happened**）",
                  "\"result in a changing mix of available jobs\"（后置定语，修饰名词 **result**）",
                  "\"creation of new ones but not fewer total job…\"（后置定语，修饰名词 **creation**）"
                ],
                "summary": "平行动 0 处、修饰成分 4 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「Nonetheless, as has happened in …」——这是整句的骨架",
                  "2. 注意逻辑词 **nonetheless**：转折（尽管如此）——译文要把这层关系译出来，否则会读成平铺直叙。",
                  "3. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          }
        ]
      },
      {
        "id": "crs-if12762-ai-macro-p4",
        "index": 4,
        "heading": "Potential Effects on Productivity",
        "sentences": [
          {
            "id": "crs-if12762-ai-macro-p4-s0",
            "index": 0,
            "en": "Economists generally agree that the main avenue by which AI is likely to affect the economy is labor productivity.",
            "zh": "经济学家普遍认为，人工智能影响经济的主要途径是劳动生产率。",
            "wordCount": 19,
            "analysis": {
              "pattern": "主谓 + 2 个从句（多重复合句）",
              "skeleton": "Economists generally (S) + agree (V)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Economists generally",
                  "start": 0,
                  "end": 20,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "agree",
                  "start": 21,
                  "end": 26,
                  "note": "主句谓语"
                },
                {
                  "role": "Clause",
                  "text": "that the main avenue by",
                  "start": 27,
                  "end": 50,
                  "note": "由 that 引导的从句，修饰前面的名词（定语从句）"
                },
                {
                  "role": "Clause",
                  "text": "which AI is likely to affect the economy is labor productivity.",
                  "start": 51,
                  "end": 114,
                  "note": "由 which 引导的从句，修饰前面的名词（定语从句）"
                }
              ],
              "notes": [
                "本句含 2 个从属分句，先锁定主句主干，再逐层挂回修饰成分。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "agree",
                    "start": 21,
                    "end": 26,
                    "role": "predicate"
                  },
                  {
                    "text": "is",
                    "start": 60,
                    "end": 62,
                    "role": "predicate"
                  },
                  {
                    "text": "affect",
                    "start": 73,
                    "end": 79,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  },
                  {
                    "text": "is",
                    "start": 92,
                    "end": 94,
                    "role": "predicate"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（agree / is / is），意味着有 3 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 27,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  },
                  {
                    "pos": 51,
                    "marker": "which",
                    "reason": "which 引导定语从句"
                  }
                ],
                "summary": "找到 2 个断点，可以把句子切成 3 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Economists generally agree",
                    "start": 0,
                    "end": 26,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Economists generally\"；谓语 = \"agree\""
                  },
                  {
                    "id": "seg-1",
                    "text": "that the main avenue by",
                    "start": 27,
                    "end": 50,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-2",
                    "text": "which AI is likely to affect the economy is labor productivity.",
                    "start": 51,
                    "end": 114,
                    "type": "定语从句",
                    "isMain": false,
                    "hint": "作修饰成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "Economists generally agree",
                "summary": "主句是「Economists generally agree」，其余 2 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Economists generally\"；谓语 = \"agree\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"that the main avenue by which AI is likely t…\"（定语从句，修饰名词 **Economists**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"which AI is likely to affect the economy is …\"（定语从句，修饰名词 **avenue**——它给这个名词补充信息，翻译时通常前置成\"……的\"）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【名词性 / 定语从句】「that the main avenue by」——作说明成分，翻译时通常放在主句之前",
                  "2. 先译【定语从句】「which AI is likely to affect the…」——作修饰成分，翻译时通常放在主句之前",
                  "3. 再译【主句】「Economists generally agree」——这是整句的骨架",
                  "4. 按「说明」关系组装：中文习惯把说明类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 2 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p4-s1",
            "index": 1,
            "en": "Many estimates suggest that AI can affect task productivity notably, although these effects may differ across skill levels.",
            "zh": "许多估算表明，人工智能能显著影响任务层面的生产率，尽管这种影响在不同技能水平之间可能存在差异。",
            "wordCount": 18,
            "analysis": {
              "pattern": "主谓 + 2 个从句（多重复合句）",
              "skeleton": "Many estimates (S) + suggest (V)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Many estimates",
                  "start": 0,
                  "end": 14,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "suggest",
                  "start": 15,
                  "end": 22,
                  "note": "主句谓语"
                },
                {
                  "role": "Clause",
                  "text": "that AI can affect task productivity notably,",
                  "start": 23,
                  "end": 68,
                  "note": "由 that 引导的从句，修饰前面的名词（定语从句）"
                },
                {
                  "role": "Clause",
                  "text": "although these effects may differ across skill levels.",
                  "start": 69,
                  "end": 123,
                  "note": "由 although 引导的从句，充当状语（状语从句）"
                }
              ],
              "notes": [
                "本句含 2 个从属分句，先锁定主句主干，再逐层挂回修饰成分。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "suggest",
                    "start": 15,
                    "end": 22,
                    "role": "predicate"
                  },
                  {
                    "text": "can affect",
                    "start": 31,
                    "end": 41,
                    "role": "predicate"
                  },
                  {
                    "text": "may differ",
                    "start": 92,
                    "end": 102,
                    "role": "predicate"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（suggest / can affect / may differ），意味着有 3 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 23,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  },
                  {
                    "pos": 67,
                    "marker": ", + although",
                    "reason": "although 引导让步状语从句，此处必须断开"
                  }
                ],
                "summary": "找到 2 个断点，可以把句子切成 3 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Many estimates suggest",
                    "start": 0,
                    "end": 22,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Many estimates\"；谓语 = \"suggest\""
                  },
                  {
                    "id": "seg-1",
                    "text": "that AI can affect task productivity notably",
                    "start": 23,
                    "end": 67,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-2",
                    "text": "although these effects may differ across skill levels.",
                    "start": 69,
                    "end": 123,
                    "type": "让步状语从句",
                    "isMain": false,
                    "hint": "作让步成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "Many estimates suggest",
                "summary": "主句是「Many estimates suggest」，其余 2 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Many estimates\"；谓语 = \"suggest\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"that AI can affect task productivity notably…\"（定语从句，修饰名词 **estimates**——它给这个名词补充信息，翻译时通常前置成\"……的\"）"
                ],
                "summary": "平行动 0 处、修饰成分 1 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【名词性 / 定语从句】「that AI can affect task producti…」——作说明成分，翻译时通常放在主句之前",
                  "2. 先译【让步状语从句】「although these effects may diffe…」——作让步成分，翻译时通常放在主句之前",
                  "3. 再译【主句】「Many estimates suggest」——这是整句的骨架",
                  "4. 按「说明」关系组装：中文习惯把说明类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 2 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p4-s2",
            "index": 2,
            "en": "In general, studies tend to conclude that the use of AI increases task productivity and performance, although some studies have found that errors made by AI can be counterproductive.",
            "zh": "总体而言，研究往往得出人工智能的使用能提升任务生产率与绩效的结论，不过也有研究发现人工智能所犯的错误会适得其反。",
            "wordCount": 29,
            "analysis": {
              "pattern": "主系表 + 2 个从句（多重复合句）",
              "skeleton": "In general, studies (S) + tend (V) + to conclude (C)",
              "chunks": [
                {
                  "role": "S",
                  "text": "In general, studies",
                  "start": 0,
                  "end": 19,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "tend",
                  "start": 20,
                  "end": 24,
                  "note": "主句谓语"
                },
                {
                  "role": "C",
                  "text": "to conclude",
                  "start": 25,
                  "end": 36,
                  "note": "主句的宾语/表语"
                },
                {
                  "role": "Clause",
                  "text": "that the use of AI increases task productivity and performance,",
                  "start": 37,
                  "end": 100,
                  "note": "由 that 引导的从句，修饰前面的名词（定语从句）"
                },
                {
                  "role": "Clause",
                  "text": "although some studies have found that errors made by AI can be counterproductive.",
                  "start": 101,
                  "end": 182,
                  "note": "由 although 引导的从句，充当状语（状语从句）"
                }
              ],
              "notes": [
                "本句含 2 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句中有插入成分，阅读时可先跳过，主句依然完整。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "tend",
                    "start": 20,
                    "end": 24,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  },
                  {
                    "text": "conclude",
                    "start": 28,
                    "end": 36,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  },
                  {
                    "text": "have found",
                    "start": 123,
                    "end": 133,
                    "role": "predicate"
                  },
                  {
                    "text": "made",
                    "start": 146,
                    "end": 150,
                    "role": "predicate"
                  },
                  {
                    "text": "can be",
                    "start": 157,
                    "end": 163,
                    "role": "predicate"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（have found / made / can be），意味着有 3 件事要译；另有 2 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 10,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 37,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  },
                  {
                    "pos": 99,
                    "marker": ", + although",
                    "reason": "although 引导让步状语从句，此处必须断开"
                  },
                  {
                    "pos": 134,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  }
                ],
                "summary": "找到 4 个断点，可以把句子切成 4 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "In general, studies tend to conclude",
                    "start": 0,
                    "end": 36,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"In general, studies\"；谓语 = \"tend\"；表语 = \"to conclude\""
                  },
                  {
                    "id": "seg-1",
                    "text": "that the use of AI increases task productivity and performance",
                    "start": 37,
                    "end": 99,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-2",
                    "text": "although some studies have found",
                    "start": 101,
                    "end": 133,
                    "type": "让步状语从句",
                    "isMain": false,
                    "hint": "作让步成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-3",
                    "text": "that errors made by AI can be counterproductive.",
                    "start": 134,
                    "end": 182,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "In general, studies tend to conclude",
                "summary": "主句是「In general, studies tend to conclude」，其余 3 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"In general, studies\"；谓语 = \"tend\"；表语 = \"to conclude\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"that the use of AI increases task productivi…\"（定语从句，修饰名词 **studies**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"that errors made by AI can be counterproduct…\"（定语从句，修饰名词 **studies**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"In general,\"（句首状语，交代背景或前提——中文习惯先译它）",
                  "\"tend to conclude that the use of AI increase…\"（后置定语，修饰名词 **tend**）"
                ],
                "summary": "平行动 0 处、修饰成分 4 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【名词性 / 定语从句】「that the use of AI increases tas…」——作说明成分，翻译时通常放在主句之前",
                  "2. 先译【让步状语从句】「although some studies have found」——作让步成分，翻译时通常放在主句之前",
                  "3. 先译【名词性 / 定语从句】「that errors made by AI can be co…」——作说明成分，翻译时通常放在主句之前",
                  "4. 再译【主句】「In general, studies tend to conc…」——这是整句的骨架",
                  "5. 按「说明」关系组装：中文习惯把说明类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 3 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p4-s3",
            "index": 3,
            "en": "How total labor productivity may be affected by AI is harder to estimate, because it depends, in part, on how many and what types of tasks use AI.",
            "zh": "人工智能对总体劳动生产率的影响更难估算，因为它部分取决于有多少任务、以及哪些类型的任务使用了人工智能。",
            "wordCount": 28,
            "analysis": {
              "pattern": "主系表 + 从句",
              "skeleton": "How total labor productivity (S) + may be affected (V) + by AI is harder to estimate, (C)",
              "chunks": [
                {
                  "role": "S",
                  "text": "How total labor productivity",
                  "start": 0,
                  "end": 28,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "may be affected",
                  "start": 29,
                  "end": 44,
                  "note": "主句谓语"
                },
                {
                  "role": "C",
                  "text": "by AI is harder to estimate,",
                  "start": 45,
                  "end": 73,
                  "note": "主句的宾语/表语"
                },
                {
                  "role": "Clause",
                  "text": "because it depends, in part, on how many and what types of tasks use AI.",
                  "start": 74,
                  "end": 146,
                  "note": "由 because 引导的从句，充当状语（状语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句中有插入成分，阅读时可先跳过，主句依然完整。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-94-0",
                "text": "in part",
                "zh": "部分地",
                "kind": "习语"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "may be affected",
                    "start": 29,
                    "end": 44,
                    "role": "predicate"
                  },
                  {
                    "text": "is",
                    "start": 51,
                    "end": 53,
                    "role": "predicate"
                  },
                  {
                    "text": "estimate,",
                    "start": 64,
                    "end": 73,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  },
                  {
                    "text": "depends,",
                    "start": 85,
                    "end": 93,
                    "role": "predicate"
                  },
                  {
                    "text": "tasks use",
                    "start": 133,
                    "end": 142,
                    "role": "predicate"
                  }
                ],
                "count": 4,
                "summary": "句中共有 4 个谓语动词（may be affected / is / depends, / tasks use），意味着有 4 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 72,
                    "marker": ", + because",
                    "reason": "because 引导原因状语从句，此处必须断开"
                  },
                  {
                    "pos": 92,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 101,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 3 个断点，可以把句子切成 3 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "How total labor productivity may be affected by AI is harder to estimate",
                    "start": 0,
                    "end": 72,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"How total labor productivity\"；谓语 = \"may be affected\"；表语 = \"by AI is harder to estimate,\""
                  },
                  {
                    "id": "seg-1",
                    "text": "because it depends",
                    "start": 74,
                    "end": 92,
                    "type": "原因状语从句",
                    "isMain": false,
                    "hint": "作原因成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-2",
                    "text": "in part, on how many and what types of tasks use AI.",
                    "start": 94,
                    "end": 146,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "How total labor productivity may be affected by AI is harder to estimate",
                "summary": "主句是「How total labor productivity may be affected…」，其余 2 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"How total labor productivity\"；谓语 = \"may be affected\"；表语 = \"by AI is harder to estimate,\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"affected by AI is harder to estimate\"（后置定语，修饰名词 **affected**）",
                  "\"types of tasks use AI\"（后置定语，修饰名词 **types**）",
                  "\"because it depends\"（插入语——删掉不影响主句结构，可先跳过）"
                ],
                "summary": "平行动 0 处、修饰成分 3 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【原因状语从句】「because it depends」——作原因成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「How total labor productivity may…」——这是整句的骨架",
                  "3. 按「原因」关系组装：中文习惯把原因类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p4-s4",
            "index": 4,
            "en": "Goldman Sachs estimates that if 25% of total work tasks are automated by generative AI, labor productivity would increase 15%.",
            "zh": "高盛估计，若全部工作任务中有 25% 由生成式人工智能实现自动化，劳动生产率将提高 15%。",
            "wordCount": 18,
            "analysis": {
              "pattern": "主谓 + 2 个从句（多重复合句）",
              "skeleton": "Goldman Sachs (S) + estimates (V)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Goldman Sachs",
                  "start": 0,
                  "end": 13,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "estimates",
                  "start": 14,
                  "end": 23,
                  "note": "主句谓语"
                },
                {
                  "role": "Clause",
                  "text": "that",
                  "start": 24,
                  "end": 28,
                  "note": "由 that 引导的从句，修饰前面的名词（定语从句）"
                },
                {
                  "role": "Clause",
                  "text": "if 25% of total work tasks are automated by generative AI, labor productivity would increase 15%.",
                  "start": 29,
                  "end": 126,
                  "note": "由 if 引导的从句，充当状语（状语从句）"
                }
              ],
              "notes": [
                "本句含 2 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "estimates",
                    "start": 14,
                    "end": 23,
                    "role": "predicate"
                  },
                  {
                    "text": "tasks are automated",
                    "start": 50,
                    "end": 69,
                    "role": "predicate"
                  },
                  {
                    "text": "would increase",
                    "start": 107,
                    "end": 121,
                    "role": "predicate"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（estimates / tasks are automated / would increase），意味着有 3 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 24,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  },
                  {
                    "pos": 29,
                    "marker": "if",
                    "reason": "if 引导条件状语从句"
                  },
                  {
                    "pos": 86,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 3 个断点，可以把句子切成 3 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Goldman Sachs estimates",
                    "start": 0,
                    "end": 23,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Goldman Sachs\"；谓语 = \"estimates\""
                  },
                  {
                    "id": "seg-1",
                    "text": "that if 25% of total work tasks are automated by generative AI",
                    "start": 24,
                    "end": 86,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-2",
                    "text": "labor productivity would increase 15%.",
                    "start": 88,
                    "end": 126,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "Goldman Sachs estimates",
                "summary": "主句是「Goldman Sachs estimates」，其余 2 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Goldman Sachs\"；谓语 = \"estimates\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"that if 25% of total work tasks are automate…\"（定语从句，修饰名词 **Sachs**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"automated by generative AI\"（后置定语，修饰名词 **automated**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【名词性 / 定语从句】「that if 25% of total work tasks …」——作说明成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「Goldman Sachs estimates」——这是整句的骨架",
                  "3. 按「说明」关系组装：中文习惯把说明类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p4-s5",
            "index": 5,
            "en": "AI also has the potential to impact total factor productivity (TFP), which accounts for the impact of technological growth.",
            "zh": "人工智能还可能影响全要素生产率——该指标涵盖技术增长所带来的影响。",
            "wordCount": 19,
            "analysis": {
              "pattern": "主系表 + 非限定性定语从句",
              "skeleton": "AI also (S) + has (V) + the potential to impact total factor p… (C)",
              "chunks": [
                {
                  "role": "S",
                  "text": "AI also",
                  "start": 0,
                  "end": 7,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "has",
                  "start": 8,
                  "end": 11,
                  "note": "主句谓语"
                },
                {
                  "role": "C",
                  "text": "the potential to impact total factor productivity (TFP), ",
                  "start": 12,
                  "end": 69,
                  "note": "主句的宾语/表语"
                },
                {
                  "role": "Clause",
                  "text": "which accounts for the impact of technological growth.",
                  "start": 69,
                  "end": 123,
                  "note": "由 which 引导的从句，修饰前面的名词（定语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-75-0",
                "text": "accounts for",
                "zh": "解释；占（比例）；导致",
                "kind": "短语动词"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "has",
                    "start": 8,
                    "end": 11,
                    "role": "predicate"
                  },
                  {
                    "text": "impact",
                    "start": 29,
                    "end": 35,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  },
                  {
                    "text": "accounts",
                    "start": 75,
                    "end": 83,
                    "role": "predicate"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（has / accounts），意味着有 2 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 67,
                    "marker": ", + which",
                    "reason": "which 引导定语从句，此处必须断开"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "AI also has the potential to impact total factor productivity (TFP)",
                    "start": 0,
                    "end": 67,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"AI also\"；谓语 = \"has\"；表语 = \"the potential to impact total factor p...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "which accounts for the impact of technological growth.",
                    "start": 69,
                    "end": 123,
                    "type": "非限定性定语从句",
                    "isMain": false,
                    "hint": "对前面的名词做补充说明，翻译时可另起一小句"
                  }
                ],
                "mainText": "AI also has the potential to impact total factor productivity (TFP)",
                "summary": "主句是「AI also has the potential to impact total fa…」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"AI also\"；谓语 = \"has\"；表语 = \"the potential to impact total factor p...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"which accounts for the impact of technologic…\"（定语从句，修饰名词 **(TFP),**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"potential to impact total factor productivit…\"（后置定语，修饰名词 **potential**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【非限定性定语从句】「which accounts for the impact of…」——对前面的名词做补充说明，翻译时可另起一小句",
                  "2. 再译【主句】「AI also has the potential to imp…」——这是整句的骨架",
                  "3. 按「修饰」关系组装：中文习惯把修饰类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p4-s6",
            "index": 6,
            "en": "If the adoption of AI results in an increased pace of research and development, this would increase the growth rate of TFP and long-run economic growth.",
            "zh": "如果人工智能的采用加快了研发步伐，就会提高全要素生产率的增速以及长期经济增长率。",
            "wordCount": 26,
            "analysis": {
              "pattern": "主谓宾 + 从句",
              "skeleton": "this (S) + would increase (V) + the growth rate of TFP and long-run ec… (O)",
              "chunks": [
                {
                  "role": "Clause",
                  "text": "If the adoption of AI results in an increased pace of research and development,",
                  "start": 0,
                  "end": 79,
                  "note": "句首状语从句：先交代条件/让步/时间背景，主句在后面"
                },
                {
                  "role": "S",
                  "text": "this",
                  "start": 80,
                  "end": 84,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "would increase",
                  "start": 85,
                  "end": 99,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "the growth rate of TFP and long-run economic growth.",
                  "start": 100,
                  "end": 152,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-22-0",
                "text": "results in",
                "zh": "导致；造成",
                "kind": "短语动词"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "would increase",
                    "start": 85,
                    "end": 99,
                    "role": "predicate"
                  }
                ],
                "count": 1,
                "summary": "句中共有 1 个谓语动词（would increase），意味着有 1 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 78,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "If the adoption of AI results in an increased pace of research and development",
                    "start": 0,
                    "end": 78,
                    "type": "条件状语从句",
                    "isMain": false,
                    "hint": "作条件成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-1",
                    "text": "this would increase the growth rate of TFP and long-run economic growth.",
                    "start": 80,
                    "end": 152,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"this\"；谓语 = \"would increase\"；宾语 = \"the growth rate of TFP and long-run ec...\""
                  }
                ],
                "mainText": "this would increase the growth rate of TFP and long-run economic growth.",
                "summary": "主句是「this would increase the growth rate of TFP a…」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"this\"；谓语 = \"would increase\"；宾语 = \"the growth rate of TFP and long-run ec...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"adoption of AI results in an increased pace …\"（后置定语，修饰名词 **adoption**）",
                  "\"rate of TFP and long-run economic growth\"（后置定语，修饰名词 **rate**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【条件状语从句】「If the adoption of AI results in…」——作条件成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「this would increase the growth r…」——这是整句的骨架",
                  "3. 按「条件」关系组装：中文习惯把条件类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p4-s7",
            "index": 7,
            "en": "One study suggests that in the short run (10 years), the effects of AI on TFP would be a roughly 0.53% cumulative increase.",
            "zh": "一项研究认为，在短期（10 年）内，人工智能对全要素生产率的累计提升约为 0.53%。",
            "wordCount": 21,
            "analysis": {
              "pattern": "主谓 + 从句",
              "skeleton": "One study (S) + suggests (V)",
              "chunks": [
                {
                  "role": "S",
                  "text": "One study",
                  "start": 0,
                  "end": 9,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "suggests",
                  "start": 10,
                  "end": 18,
                  "note": "主句谓语"
                },
                {
                  "role": "Clause",
                  "text": "that in the short run (10 years), the effects of AI on TFP would be a roughly 0.53% cumulative increase.",
                  "start": 19,
                  "end": 123,
                  "note": "由 that 引导的从句，修饰前面的名词（定语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-24-0",
                "text": "in the short run",
                "zh": "从短期来看",
                "kind": "习语"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "suggests",
                    "start": 10,
                    "end": 18,
                    "role": "predicate"
                  },
                  {
                    "text": "would be",
                    "start": 78,
                    "end": 86,
                    "role": "predicate"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（suggests / would be），意味着有 2 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 19,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  },
                  {
                    "pos": 51,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 2 个断点，可以把句子切成 3 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "One study suggests",
                    "start": 0,
                    "end": 18,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"One study\"；谓语 = \"suggests\""
                  },
                  {
                    "id": "seg-1",
                    "text": "that in the short run (10 years)",
                    "start": 19,
                    "end": 51,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-2",
                    "text": "the effects of AI on TFP would be a roughly 0.53% cumulative increase.",
                    "start": 53,
                    "end": 123,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "One study suggests",
                "summary": "主句是「One study suggests」，其余 2 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"One study\"；谓语 = \"suggests\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"that in the short run (10 years), the effect…\"（定语从句，修饰名词 **study**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"effects of AI on TFP would be a roughly 0\"（后置定语，修饰名词 **effects**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【名词性 / 定语从句】「that in the short run (10 years)」——作说明成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「One study suggests」——这是整句的骨架",
                  "3. 按「说明」关系组装：中文习惯把说明类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p4-s8",
            "index": 8,
            "en": "Productivity growth is an important determinant of long-term economic growth and income.",
            "zh": "生产率增长是长期经济增长与收入水平的重要决定因素。",
            "wordCount": 12,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "Productivity growth (S) + is (V) + an important determinant of long-term … (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Productivity growth",
                  "start": 0,
                  "end": 19,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "is",
                  "start": 20,
                  "end": 22,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "an important determinant of long-term economic growth and income.",
                  "start": 23,
                  "end": 88,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "is",
                    "start": 20,
                    "end": 22,
                    "role": "predicate"
                  }
                ],
                "count": 1,
                "summary": "句中共有 1 个谓语动词（is），意味着有 1 件事要译。"
              },
              "step2": {
                "breaks": [],
                "summary": "句中无明显断点，结构较简单。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Productivity growth is an important determinant of long-term economic growth and income.",
                    "start": 0,
                    "end": 88,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Productivity growth\"；谓语 = \"is\"；宾语 = \"an important determinant of long-term ...\""
                  }
                ],
                "mainText": "Productivity growth is an important determinant of long-term economic growth and income.",
                "summary": "主句是「Productivity growth is an important determin…」，其余 0 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Productivity growth\"；谓语 = \"is\"；宾语 = \"an important determinant of long-term ...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"determinant of long-term economic growth and…\"（后置定语，修饰名词 **determinant**）"
                ],
                "summary": "平行动 0 处、修饰成分 1 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「Productivity growth is an import…」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p4-s9",
            "index": 9,
            "en": "Gains in productivity allow for the more efficient production of goods and services, thereby increasing the productive capacity of the economy.",
            "zh": "生产率的提高使商品和服务能以更高效率生产，从而提升经济的生产能力。",
            "wordCount": 21,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "Gains in productivity (S) + allow (V) + for the more efficient production of g… (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Gains in productivity",
                  "start": 0,
                  "end": 21,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "allow",
                  "start": 22,
                  "end": 27,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "for the more efficient production of goods and services, thereby increasing the productive capacity of the economy.",
                  "start": 28,
                  "end": 143,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "allow",
                    "start": 22,
                    "end": 27,
                    "role": "predicate"
                  },
                  {
                    "text": "services,",
                    "start": 75,
                    "end": 84,
                    "role": "predicate"
                  },
                  {
                    "text": "increasing",
                    "start": 93,
                    "end": 103,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（allow / services,），意味着有 2 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 83,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Gains in productivity allow for the more efficient production of goods and services",
                    "start": 0,
                    "end": 83,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Gains in productivity\"；谓语 = \"allow\"；宾语 = \"for the more efficient production of g...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "thereby increasing the productive capacity of the economy.",
                    "start": 85,
                    "end": 143,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "Gains in productivity allow for the more efficient production of goods and services",
                "summary": "主句是「Gains in productivity allow for the more eff…」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Gains in productivity\"；谓语 = \"allow\"；宾语 = \"for the more efficient production of g...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"Gains in productivity allow for the more eff…\"（后置定语，修饰名词 **Gains**）",
                  "\"production of goods and services\"（后置定语，修饰名词 **production**）",
                  "\"capacity of the economy\"（后置定语，修饰名词 **capacity**）"
                ],
                "summary": "平行动 0 处、修饰成分 3 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「Gains in productivity allow for …」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p4-s10",
            "index": 10,
            "en": "Estimates of the effects of AI on U.S. gross domestic product (GDP) in the short and long run vary but are typically positive.",
            "zh": "关于人工智能对美国国内生产总值短期与长期影响的估算各不相同，但通常为正值。",
            "wordCount": 24,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "Estimates of the effects of AI on U.S.… (S) + vary (V) + but are typically positive. (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Estimates of the effects of AI on U.S. gross domestic product (GDP) in the short and long run",
                  "start": 0,
                  "end": 93,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "vary",
                  "start": 94,
                  "end": 98,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "but are typically positive.",
                  "start": 99,
                  "end": 126,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "vary",
                    "start": 94,
                    "end": 98,
                    "role": "predicate"
                  },
                  {
                    "text": "are",
                    "start": 103,
                    "end": 106,
                    "role": "predicate"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（vary / are），意味着有 2 件事要译。"
              },
              "step2": {
                "breaks": [],
                "summary": "句中无明显断点，结构较简单。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Estimates of the effects of AI on U.S. gross domestic product (GDP) in the short and long run vary but are typically positive.",
                    "start": 0,
                    "end": 126,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Estimates of the effects of AI on U.S....\"；谓语 = \"vary\"；宾语 = \"but are typically positive.\""
                  }
                ],
                "mainText": "Estimates of the effects of AI on U.S. gross domestic product (GDP) in the short and long run vary but are typically positive.",
                "summary": "主句是「Estimates of the effects of AI on U.S. gross…」，其余 0 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Estimates of the effects of AI on U.S....\"；谓语 = \"vary\"；宾语 = \"but are typically positive.\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"Estimates of the effects of AI on U\"（后置定语，修饰名词 **Estimates**）"
                ],
                "summary": "平行动 0 处、修饰成分 1 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「Estimates of the effects of AI o…」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p4-s11",
            "index": 11,
            "en": "The Goldman Sachs study estimates that this productivity increase could result in an up to 0.9% cumulative increase in GDP over the same time frame.",
            "zh": "高盛的研究估计，这一生产率提升可能使同期国内生产总值累计增长最多 0.9%。",
            "wordCount": 24,
            "analysis": {
              "pattern": "主谓 + 从句",
              "skeleton": "The Goldman Sachs study (S) + estimates (V)",
              "chunks": [
                {
                  "role": "S",
                  "text": "The Goldman Sachs study",
                  "start": 0,
                  "end": 23,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "estimates",
                  "start": 24,
                  "end": 33,
                  "note": "主句谓语"
                },
                {
                  "role": "Clause",
                  "text": "that this productivity increase could result in an up to 0.9% cumulative increase in GDP over the same time frame.",
                  "start": 34,
                  "end": 148,
                  "note": "由 that 引导的从句，修饰前面的名词（定语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-72-0",
                "text": "result in",
                "zh": "导致；造成",
                "kind": "短语动词"
              },
              {
                "id": "ph-85-1",
                "text": "up to",
                "zh": "多达；直到",
                "kind": "介词框架"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "estimates",
                    "start": 24,
                    "end": 33,
                    "role": "predicate"
                  },
                  {
                    "text": "could result",
                    "start": 66,
                    "end": 78,
                    "role": "predicate"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（estimates / could result），意味着有 2 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 34,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "The Goldman Sachs study estimates",
                    "start": 0,
                    "end": 33,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"The Goldman Sachs study\"；谓语 = \"estimates\""
                  },
                  {
                    "id": "seg-1",
                    "text": "that this productivity increase could result in an up to 0.9% cumulative increase in GDP over the same time frame.",
                    "start": 34,
                    "end": 148,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "The Goldman Sachs study estimates",
                "summary": "主句是「The Goldman Sachs study estimates」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"The Goldman Sachs study\"；谓语 = \"estimates\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"that this productivity increase could result…\"（定语从句，修饰名词 **study**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"result in an up to 0\"（后置定语，修饰名词 **result**）",
                  "\"increase in GDP over the same time frame\"（后置定语，修饰名词 **increase**）"
                ],
                "summary": "平行动 0 处、修饰成分 3 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【名词性 / 定语从句】「that this productivity increase …」——作说明成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「The Goldman Sachs study estimates」——这是整句的骨架",
                  "3. 按「说明」关系组装：中文习惯把说明类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p4-s12",
            "index": 12,
            "en": "When considering the longer run, more questions arise: How many and what types of new tasks will AI create in addition to automating existing ones?",
            "zh": "而着眼更长期，会引出更多问题：除了自动化现有任务之外，人工智能还将创造多少、何种类型的新任务？",
            "wordCount": 25,
            "analysis": {
              "pattern": "主谓宾 + 从句",
              "skeleton": "more questions (S) + arise: (V) + How many and what types of new tasks w… (O)",
              "chunks": [
                {
                  "role": "Clause",
                  "text": "When considering the longer run,",
                  "start": 0,
                  "end": 32,
                  "note": "句首状语从句：先交代条件/让步/时间背景，主句在后面"
                },
                {
                  "role": "S",
                  "text": "more questions",
                  "start": 33,
                  "end": 47,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "arise:",
                  "start": 48,
                  "end": 54,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "How many and what types of new tasks will AI create in addition to automating existing ones?",
                  "start": 55,
                  "end": 147,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-107-0",
                "text": "in addition to",
                "zh": "除…之外还",
                "kind": "介词框架"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "considering",
                    "start": 5,
                    "end": 16,
                    "role": "preposition",
                    "note": "是介词，不是动词"
                  },
                  {
                    "text": "arise:",
                    "start": 48,
                    "end": 54,
                    "role": "predicate"
                  },
                  {
                    "text": "tasks will",
                    "start": 86,
                    "end": 96,
                    "role": "predicate"
                  },
                  {
                    "text": "create",
                    "start": 100,
                    "end": 106,
                    "role": "predicate"
                  },
                  {
                    "text": "automating",
                    "start": 122,
                    "end": 132,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（arise: / tasks will / create），意味着有 3 件事要译；另有 2 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 31,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 53,
                    "marker": ":",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 2 个断点，可以把句子切成 3 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "When considering the longer run",
                    "start": 0,
                    "end": 31,
                    "type": "时间状语从句",
                    "isMain": false,
                    "hint": "作时间成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-1",
                    "text": "more questions arise",
                    "start": 33,
                    "end": 53,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"more questions\"；谓语 = \"arise:\"；宾语 = \"How many and what types of new tasks w...\""
                  },
                  {
                    "id": "seg-2",
                    "text": "How many and what types of new tasks will AI create in addition to automating existing ones?",
                    "start": 55,
                    "end": 147,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "more questions arise",
                "summary": "主句是「more questions arise」，其余 2 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"more questions\"；谓语 = \"arise:\"；宾语 = \"How many and what types of new tasks w...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"When considering the longer run,\"（句首状语，交代背景或前提——中文习惯先译它）",
                  "\"types of new tasks will AI create in additio…\"（后置定语，修饰名词 **types**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【时间状语从句】「When considering the longer run」——作时间成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「more questions arise」——这是整句的骨架",
                  "3. 按「时间」关系组装：中文习惯把时间类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p4-s13",
            "index": 13,
            "en": "Will AI-based tasks become more advanced and therefore harder to learn?",
            "zh": "基于人工智能的任务是否会变得更高级，因而更难学会？",
            "wordCount": 11,
            "analysis": {
              "pattern": "结构待拆（简单句）",
              "skeleton": "Will (V) + AI-based tasks become more advanced an… (O)",
              "chunks": [
                {
                  "role": "V",
                  "text": "Will",
                  "start": 0,
                  "end": 4,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "AI-based tasks become more advanced and therefore harder to learn?",
                  "start": 5,
                  "end": 71,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "Will",
                    "start": 0,
                    "end": 4,
                    "role": "predicate"
                  },
                  {
                    "text": "based tasks become",
                    "start": 8,
                    "end": 26,
                    "role": "predicate"
                  },
                  {
                    "text": "learn?",
                    "start": 65,
                    "end": 71,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（Will / based tasks become），意味着有 2 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [],
                "summary": "句中无明显断点，结构较简单。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Will AI-based tasks become more advanced and therefore harder to learn?",
                    "start": 0,
                    "end": 71,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 谓语 = \"Will\"；宾语 = \"AI-based tasks become more advanced an...\""
                  }
                ],
                "mainText": "Will AI-based tasks become more advanced and therefore harder to learn?",
                "summary": "主句是「Will AI-based tasks become more advanced and…」，其余 0 段都是挂在这一主干上的修饰或从句。 主干拆解：谓语 = \"Will\"；宾语 = \"AI-based tasks become more advanced an...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"harder to learn?\"（后置定语，修饰名词 **harder**）"
                ],
                "summary": "平行动 0 处、修饰成分 1 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「Will AI-based tasks become more …」——这是整句的骨架",
                  "2. 注意逻辑词 **therefore**：因果（因此）——译文要把这层关系译出来，否则会读成平铺直叙。",
                  "3. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p4-s14",
            "index": 14,
            "en": "Will AI adoption be even across sectors or types of tasks?",
            "zh": "人工智能的采用在各行业或各类任务之间是否均衡？",
            "wordCount": 11,
            "analysis": {
              "pattern": "结构待拆（简单句）",
              "skeleton": "Will (V) + AI adoption be even across sectors or … (O)",
              "chunks": [
                {
                  "role": "V",
                  "text": "Will",
                  "start": 0,
                  "end": 4,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "AI adoption be even across sectors or types of tasks?",
                  "start": 5,
                  "end": 58,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "Will",
                    "start": 0,
                    "end": 4,
                    "role": "predicate"
                  },
                  {
                    "text": "be",
                    "start": 17,
                    "end": 19,
                    "role": "predicate"
                  },
                  {
                    "text": "tasks?",
                    "start": 52,
                    "end": 58,
                    "role": "predicate"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（Will / be / tasks?），意味着有 3 件事要译。"
              },
              "step2": {
                "breaks": [],
                "summary": "句中无明显断点，结构较简单。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Will AI adoption be even across sectors or types of tasks?",
                    "start": 0,
                    "end": 58,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 谓语 = \"Will\"；宾语 = \"AI adoption be even across sectors or ...\""
                  }
                ],
                "mainText": "Will AI adoption be even across sectors or types of tasks?",
                "summary": "主句是「Will AI adoption be even across sectors or t…」，其余 0 段都是挂在这一主干上的修饰或从句。 主干拆解：谓语 = \"Will\"；宾语 = \"AI adoption be even across sectors or ...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"types of tasks?\"（后置定语，修饰名词 **types**）"
                ],
                "summary": "平行动 0 处、修饰成分 1 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「Will AI adoption be even across …」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p4-s15",
            "index": 15,
            "en": "How will short-run effects of AI and policy decisions in the coming years affect future economic and policy responses?",
            "zh": "未来数年人工智能的短期影响与政策决定，将如何影响日后的经济与政策应对？",
            "wordCount": 19,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "How (S) + will (V) + short-run effects of AI and policy dec… (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "How",
                  "start": 0,
                  "end": 3,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "will",
                  "start": 4,
                  "end": 8,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "short-run effects of AI and policy decisions in the coming years affect future economic and policy responses?",
                  "start": 9,
                  "end": 118,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "will",
                    "start": 4,
                    "end": 8,
                    "role": "predicate"
                  },
                  {
                    "text": "affect",
                    "start": 74,
                    "end": 80,
                    "role": "predicate"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（will / affect），意味着有 2 件事要译。"
              },
              "step2": {
                "breaks": [],
                "summary": "句中无明显断点，结构较简单。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "How will short-run effects of AI and policy decisions in the coming years affect future economic and policy responses?",
                    "start": 0,
                    "end": 118,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"How\"；谓语 = \"will\"；宾语 = \"short-run effects of AI and policy dec...\""
                  }
                ],
                "mainText": "How will short-run effects of AI and policy decisions in the coming years affect future economic and policy responses?",
                "summary": "主句是「How will short-run effects of AI and policy …」，其余 0 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"How\"；谓语 = \"will\"；宾语 = \"short-run effects of AI and policy dec...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"effects of AI and policy decisions in the co…\"（后置定语，修饰名词 **effects**）"
                ],
                "summary": "平行动 0 处、修饰成分 1 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「How will short-run effects of AI…」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p4-s16",
            "index": 16,
            "en": "One study suggests that the effects of AI on GDP in the long run could vary substantially based on a number of factors, including which industries AI adoption is concentrated in and whether or not productivity gains from AI adoption are expected.",
            "zh": "一项研究认为，长期来看人工智能对国内生产总值的影响可能因多种因素而有很大差异，包括人工智能的采用集中在哪些行业，以及是否预期能从采用中获得生产率提升。",
            "wordCount": 42,
            "analysis": {
              "pattern": "主谓 + 3 个从句（多重复合句）",
              "skeleton": "One study (S) + suggests (V)",
              "chunks": [
                {
                  "role": "S",
                  "text": "One study",
                  "start": 0,
                  "end": 9,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "suggests",
                  "start": 10,
                  "end": 18,
                  "note": "主句谓语"
                },
                {
                  "role": "Clause",
                  "text": "that the effects of AI on GDP in the long run could vary substantially based on a number of factors, including",
                  "start": 19,
                  "end": 129,
                  "note": "由 that 引导的从句，修饰前面的名词（定语从句）"
                },
                {
                  "role": "Clause",
                  "text": "which industries AI adoption is concentrated in and",
                  "start": 130,
                  "end": 181,
                  "note": "由 which 引导的从句，修饰前面的名词（定语从句）"
                },
                {
                  "role": "Clause",
                  "text": "whether or not productivity gains from AI adoption are expected.",
                  "start": 182,
                  "end": 246,
                  "note": "由 whether 引导的从句，充当状语（状语从句）"
                }
              ],
              "notes": [
                "本句含 3 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。",
                "注意句中的否定范围，否定词可能只作用于局部成分。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-49-0",
                "text": "in the long run",
                "zh": "从长远来看",
                "kind": "习语"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "suggests",
                    "start": 10,
                    "end": 18,
                    "role": "predicate"
                  },
                  {
                    "text": "could vary",
                    "start": 65,
                    "end": 75,
                    "role": "predicate"
                  },
                  {
                    "text": "based",
                    "start": 90,
                    "end": 95,
                    "role": "predicate"
                  },
                  {
                    "text": "including",
                    "start": 120,
                    "end": 129,
                    "role": "preposition",
                    "note": "是介词，不是动词"
                  },
                  {
                    "text": "is concentrated",
                    "start": 159,
                    "end": 174,
                    "role": "predicate"
                  },
                  {
                    "text": "gains",
                    "start": 210,
                    "end": 215,
                    "role": "predicate"
                  },
                  {
                    "text": "are",
                    "start": 233,
                    "end": 236,
                    "role": "predicate"
                  }
                ],
                "count": 6,
                "summary": "句中共有 6 个谓语动词（suggests / could vary / based / is concentrated / gains / are），意味着有 6 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 19,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  },
                  {
                    "pos": 118,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 130,
                    "marker": "which",
                    "reason": "which 引导定语从句"
                  },
                  {
                    "pos": 182,
                    "marker": "whether",
                    "reason": "whether 引导名词性从句"
                  }
                ],
                "summary": "找到 4 个断点，可以把句子切成 4 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "One study suggests",
                    "start": 0,
                    "end": 18,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"One study\"；谓语 = \"suggests\""
                  },
                  {
                    "id": "seg-1",
                    "text": "that the effects of AI on GDP in the long run could vary substantially based on a number of factors",
                    "start": 19,
                    "end": 118,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-2",
                    "text": "including which industries AI adoption is concentrated in and",
                    "start": 120,
                    "end": 181,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-3",
                    "text": "whether or not productivity gains from AI adoption are expected.",
                    "start": 182,
                    "end": 246,
                    "type": "名词性从句",
                    "isMain": false,
                    "hint": "作选择成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "One study suggests",
                "summary": "主句是「One study suggests」，其余 3 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"One study\"；谓语 = \"suggests\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"that the effects of AI on GDP in the long ru…\"（定语从句，修饰名词 **study**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"which industries AI adoption is concentrated…\"（定语从句，修饰名词 **factors,**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"based on a number of factors\"（后置定语，修饰名词 **based**）",
                  "\"concentrated in and whether or not productiv…\"（后置定语，修饰名词 **concentrated**）"
                ],
                "summary": "平行动 0 处、修饰成分 4 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【名词性 / 定语从句】「that the effects of AI on GDP in…」——作说明成分，翻译时通常放在主句之前",
                  "2. 先译【名词性从句】「whether or not productivity gain…」——作选择成分，翻译时通常放在主句之前",
                  "3. 再译【主句】「One study suggests」——这是整句的骨架",
                  "4. 按「说明」关系组装：中文习惯把说明类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 2 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p4-s17",
            "index": 17,
            "en": "The study suggests that GDP could rise to about 35% above baseline in the long run but could be much smaller depending on the scenario.",
            "zh": "该研究认为，长期来看国内生产总值可能升至基准水平之上约 35%，但视不同情景也可能小得多。",
            "wordCount": 24,
            "analysis": {
              "pattern": "主谓 + 从句",
              "skeleton": "The study (S) + suggests (V)",
              "chunks": [
                {
                  "role": "S",
                  "text": "The study",
                  "start": 0,
                  "end": 9,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "suggests",
                  "start": 10,
                  "end": 18,
                  "note": "主句谓语"
                },
                {
                  "role": "Clause",
                  "text": "that GDP could rise to about 35% above baseline in the long run but could be much smaller depending on the scenario.",
                  "start": 19,
                  "end": 135,
                  "note": "由 that 引导的从句，修饰前面的名词（定语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-67-0",
                "text": "in the long run",
                "zh": "从长远来看",
                "kind": "习语"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "suggests",
                    "start": 10,
                    "end": 18,
                    "role": "predicate"
                  },
                  {
                    "text": "could rise",
                    "start": 28,
                    "end": 38,
                    "role": "predicate"
                  },
                  {
                    "text": "could be",
                    "start": 87,
                    "end": 95,
                    "role": "predicate"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（suggests / could rise / could be），意味着有 3 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 19,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "The study suggests",
                    "start": 0,
                    "end": 18,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"The study\"；谓语 = \"suggests\""
                  },
                  {
                    "id": "seg-1",
                    "text": "that GDP could rise to about 35% above baseline in the long run but could be much smaller depending on the scenario.",
                    "start": 19,
                    "end": 135,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "The study suggests",
                "summary": "主句是「The study suggests」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"The study\"；谓语 = \"suggests\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"that GDP could rise to about 35% above basel…\"（定语从句，修饰名词 **study**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"depending on the scenario\"（后置定语，修饰名词 **depending**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【名词性 / 定语从句】「that GDP could rise to about 35%…」——作说明成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「The study suggests」——这是整句的骨架",
                  "3. 按「说明」关系组装：中文习惯把说明类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          }
        ]
      },
      {
        "id": "crs-if12762-ai-macro-p5",
        "index": 5,
        "heading": "AI and Inequality",
        "sentences": [
          {
            "id": "crs-if12762-ai-macro-p5-s0",
            "index": 0,
            "en": "Owing to the expected effects on productivity growth, AI has the potential to increase total income in the economy.",
            "zh": "由于预期会影响生产率增长，人工智能有可能提高经济中的总收入。",
            "wordCount": 19,
            "analysis": {
              "pattern": "结构待拆（简单句）",
              "skeleton": "Owing (V) + to the expected effects on productivit… (O)",
              "chunks": [
                {
                  "role": "V",
                  "text": "Owing",
                  "start": 0,
                  "end": 5,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "to the expected effects on productivity growth, AI has the potential to increase total income in the economy.",
                  "start": 6,
                  "end": 115,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "Owing",
                    "start": 0,
                    "end": 5,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  },
                  {
                    "text": "has",
                    "start": 57,
                    "end": 60,
                    "role": "predicate"
                  },
                  {
                    "text": "increase",
                    "start": 78,
                    "end": 86,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  }
                ],
                "count": 1,
                "summary": "句中共有 1 个谓语动词（has），意味着有 1 件事要译；另有 2 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 52,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Owing to the expected effects on productivity growth",
                    "start": 0,
                    "end": 52,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 谓语 = \"Owing\"；宾语 = \"to the expected effects on productivit...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "AI has the potential to increase total income in the economy.",
                    "start": 54,
                    "end": 115,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "Owing to the expected effects on productivity growth",
                "summary": "主句是「Owing to the expected effects on productivit…」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：谓语 = \"Owing\"；宾语 = \"to the expected effects on productivit...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"Owing to the expected effects on productivit…\"（后置定语，修饰名词 **Owing**）",
                  "\"potential to increase total income in the ec…\"（后置定语，修饰名词 **potential**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「Owing to the expected effects on…」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p5-s1",
            "index": 1,
            "en": "However, this does not mean that all economic actors will benefit.",
            "zh": "然而，这并不意味着所有经济主体都会受益。",
            "wordCount": 11,
            "analysis": {
              "pattern": "主系表 + 从句",
              "skeleton": "However, this (S) + does (V) + not mean (C)",
              "chunks": [
                {
                  "role": "S",
                  "text": "However, this",
                  "start": 0,
                  "end": 13,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "does",
                  "start": 14,
                  "end": 18,
                  "note": "主句谓语"
                },
                {
                  "role": "C",
                  "text": "not mean",
                  "start": 19,
                  "end": 27,
                  "note": "主句的宾语/表语"
                },
                {
                  "role": "Clause",
                  "text": "that all economic actors will benefit.",
                  "start": 28,
                  "end": 66,
                  "note": "由 that 引导的从句，修饰前面的名词（定语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "注意句中的否定范围，否定词可能只作用于局部成分。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "does not mean",
                    "start": 14,
                    "end": 27,
                    "role": "predicate"
                  },
                  {
                    "text": "will benefit.",
                    "start": 53,
                    "end": 66,
                    "role": "predicate"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（does not mean / will benefit.），意味着有 2 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 7,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 28,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  }
                ],
                "summary": "找到 2 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "However, this does not mean",
                    "start": 0,
                    "end": 27,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"However, this\"；谓语 = \"does\"；表语 = \"not mean\""
                  },
                  {
                    "id": "seg-1",
                    "text": "that all economic actors will benefit.",
                    "start": 28,
                    "end": 66,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "However, this does not mean",
                "summary": "主句是「However, this does not mean」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"However, this\"；谓语 = \"does\"；表语 = \"not mean\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"that all economic actors will benefit.\"（定语从句，修饰前面的名词）",
                  "\"However,\"（句首状语，交代背景或前提——中文习惯先译它）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【名词性 / 定语从句】「that all economic actors will be…」——作说明成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「However, this does not mean」——这是整句的骨架",
                  "3. 注意逻辑词 **however**：转折（然而）——译文要把这层关系译出来，否则会读成平铺直叙。",
                  "4. 按「说明」关系组装：中文习惯把说明类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p5-s2",
            "index": 2,
            "en": "For example, in recent decades, productivity gains from technological innovation have largely been concentrated among high-income, skilled workers.",
            "zh": "例如，近几十年来技术创新带来的生产率收益，主要集中在高收入的技能型劳动者手中。",
            "wordCount": 18,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "For example, in recent decades, produc… (S) + gains (V) + from technological innovation have lar… (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "For example, in recent decades, productivity",
                  "start": 0,
                  "end": 44,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "gains",
                  "start": 45,
                  "end": 50,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "from technological innovation have largely been concentrated among high-income, skilled workers.",
                  "start": 51,
                  "end": 147,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "句中有插入成分，阅读时可先跳过，主句依然完整。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "gains",
                    "start": 45,
                    "end": 50,
                    "role": "predicate"
                  },
                  {
                    "text": "have largely been concentrated",
                    "start": 81,
                    "end": 111,
                    "role": "predicate"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（gains / have largely been concentrated），意味着有 2 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 11,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 30,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 129,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 3 个断点，可以把句子切成 3 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "For example, in recent decades",
                    "start": 0,
                    "end": 30,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-1",
                    "text": "productivity gains from technological innovation have largely been concentrated among high-income",
                    "start": 32,
                    "end": 129,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"For example, in recent decades, produc...\"；谓语 = \"gains\"；宾语 = \"from technological innovation have lar...\""
                  },
                  {
                    "id": "seg-2",
                    "text": "skilled workers.",
                    "start": 131,
                    "end": 147,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "productivity gains from technological innovation have largely been concentrated among high-income",
                "summary": "主句是「productivity gains from technological innova…」，其余 2 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"For example, in recent decades, produc...\"；谓语 = \"gains\"；宾语 = \"from technological innovation have lar...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"For example,\"（句首状语，交代背景或前提——中文习惯先译它）",
                  "\"gains from technological innovation have lar…\"（后置定语，修饰名词 **gains**）",
                  "\"in recent decades\"（插入语——删掉不影响主句结构，可先跳过）"
                ],
                "summary": "平行动 0 处、修饰成分 3 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「productivity gains from technolo…」——这是整句的骨架",
                  "2. 注意逻辑词 **for example**：举例（例如）——译文要把这层关系译出来，否则会读成平铺直叙。",
                  "3. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p5-s3",
            "index": 3,
            "en": "It is not clear whether AI use would have a similar effect.",
            "zh": "人工智能的使用是否会产生类似效果，目前尚不清楚。",
            "wordCount": 12,
            "analysis": {
              "pattern": "主系表 + 从句",
              "skeleton": "It (S) + is (V) + not clear (C)",
              "chunks": [
                {
                  "role": "S",
                  "text": "It",
                  "start": 0,
                  "end": 2,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "is",
                  "start": 3,
                  "end": 5,
                  "note": "主句谓语"
                },
                {
                  "role": "C",
                  "text": "not clear",
                  "start": 6,
                  "end": 15,
                  "note": "主句的宾语/表语"
                },
                {
                  "role": "Clause",
                  "text": "whether AI use would have a similar effect.",
                  "start": 16,
                  "end": 59,
                  "note": "由 whether 引导的从句，充当状语（状语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "注意句中的否定范围，否定词可能只作用于局部成分。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "is",
                    "start": 3,
                    "end": 5,
                    "role": "predicate"
                  },
                  {
                    "text": "use would have",
                    "start": 27,
                    "end": 41,
                    "role": "predicate"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（is / use would have），意味着有 2 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 16,
                    "marker": "whether",
                    "reason": "whether 引导名词性从句"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "It is not clear",
                    "start": 0,
                    "end": 15,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"It\"；谓语 = \"is\"；表语 = \"not clear\""
                  },
                  {
                    "id": "seg-1",
                    "text": "whether AI use would have a similar effect.",
                    "start": 16,
                    "end": 59,
                    "type": "名词性从句",
                    "isMain": false,
                    "hint": "作选择成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "It is not clear",
                "summary": "主句是「It is not clear」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"It\"；谓语 = \"is\"；表语 = \"not clear\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [],
                "summary": "本句没有明显的平行结构或插入成分。"
              },
              "step5": {
                "steps": [
                  "1. 先译【名词性从句】「whether AI use would have a simi…」——作选择成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「It is not clear」——这是整句的骨架",
                  "3. 按「选择」关系组装：中文习惯把选择类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p5-s4",
            "index": 4,
            "en": "On the one hand, evidence has suggested that within certain types of work, lower-skilled workers may benefit more from AI.",
            "zh": "一方面，有证据表明在某些类型的工作中，技能水平较低的劳动者可能从人工智能中获益更多。",
            "wordCount": 20,
            "analysis": {
              "pattern": "主谓 + 从句",
              "skeleton": "On the one hand, evidence (S) + has suggested (V)",
              "chunks": [
                {
                  "role": "S",
                  "text": "On the one hand, evidence",
                  "start": 0,
                  "end": 25,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "has suggested",
                  "start": 26,
                  "end": 39,
                  "note": "主句谓语"
                },
                {
                  "role": "Clause",
                  "text": "that within certain types of work, lower-skilled workers may benefit more from AI.",
                  "start": 40,
                  "end": 122,
                  "note": "由 that 引导的从句，修饰前面的名词（定语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句中有插入成分，阅读时可先跳过，主句依然完整。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "has suggested",
                    "start": 26,
                    "end": 39,
                    "role": "predicate"
                  },
                  {
                    "text": "may benefit",
                    "start": 97,
                    "end": 108,
                    "role": "predicate"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（has suggested / may benefit），意味着有 2 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 15,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 40,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  },
                  {
                    "pos": 73,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 3 个断点，可以把句子切成 4 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "On the one hand",
                    "start": 0,
                    "end": 15,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"On the one hand, evidence\"；谓语 = \"has suggested\""
                  },
                  {
                    "id": "seg-1",
                    "text": "evidence has suggested",
                    "start": 17,
                    "end": 39,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-2",
                    "text": "that within certain types of work",
                    "start": 40,
                    "end": 73,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-3",
                    "text": "lower-skilled workers may benefit more from AI.",
                    "start": 75,
                    "end": 122,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "On the one hand",
                "summary": "主句是「On the one hand」，其余 3 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"On the one hand, evidence\"；谓语 = \"has suggested\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"that within certain types of work, lower-ski…\"（定语从句，修饰名词 **evidence**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"On the one hand,\"（句首状语，交代背景或前提——中文习惯先译它）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【名词性 / 定语从句】「that within certain types of work」——作说明成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「On the one hand」——这是整句的骨架",
                  "3. 按「说明」关系组装：中文习惯把说明类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p5-s5",
            "index": 5,
            "en": "For example, in a recent study the authors conducted an experiment in which customer support agents of varying experience and skill level used an AI-based conversational assistant.",
            "zh": "例如，在一项近期研究中，作者开展了一项实验，让经验与技能水平各异的客服人员使用一款基于人工智能的对话助手。",
            "wordCount": 27,
            "analysis": {
              "pattern": "主系表 + 从句",
              "skeleton": "For example, in a recent study the aut… (S) + conducted (V) + an experiment in (C)",
              "chunks": [
                {
                  "role": "S",
                  "text": "For example, in a recent study the authors",
                  "start": 0,
                  "end": 42,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "conducted",
                  "start": 43,
                  "end": 52,
                  "note": "主句谓语"
                },
                {
                  "role": "C",
                  "text": "an experiment in",
                  "start": 53,
                  "end": 69,
                  "note": "主句的宾语/表语"
                },
                {
                  "role": "Clause",
                  "text": "which customer support agents of varying experience and skill level used an AI-based conversational assistant.",
                  "start": 70,
                  "end": 180,
                  "note": "由 which 引导的从句，修饰前面的名词（定语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "conducted",
                    "start": 43,
                    "end": 52,
                    "role": "predicate"
                  },
                  {
                    "text": "used",
                    "start": 138,
                    "end": 142,
                    "role": "predicate"
                  },
                  {
                    "text": "based",
                    "start": 149,
                    "end": 154,
                    "role": "predicate"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（conducted / used / based），意味着有 3 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 11,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 70,
                    "marker": "which",
                    "reason": "which 引导定语从句"
                  }
                ],
                "summary": "找到 2 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "For example, in a recent study the authors conducted an experiment in",
                    "start": 0,
                    "end": 69,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-1",
                    "text": "which customer support agents of varying experience and skill level used an AI-based conversational assistant.",
                    "start": 70,
                    "end": 180,
                    "type": "定语从句",
                    "isMain": false,
                    "hint": "作修饰成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "",
                "summary": "未能确定主句，建议先按标点切分逐段理解。"
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"which customer support agents of varying exp…\"（定语从句，修饰名词 **experiment**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"For example,\"（句首状语，交代背景或前提——中文习惯先译它）",
                  "\"experiment in which customer support agents …\"（后置定语，修饰名词 **experiment**）"
                ],
                "summary": "平行动 0 处、修饰成分 3 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【定语从句】「which customer support agents of…」——作修饰成分，翻译时通常放在主句之前",
                  "2. 注意逻辑词 **for example**：举例（例如）——译文要把这层关系译出来，否则会读成平铺直叙。",
                  "3. 按「修饰」关系组装：中文习惯把修饰类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p5-s6",
            "index": 6,
            "en": "On average, this use of AI increased productivity significantly more for those with less experience or lower skill levels than for more experienced, higher-skilled workers.",
            "zh": "平均而言，与经验更丰富、技能更高的员工相比，这种人工智能的使用对经验较少或技能较低者的生产率提升明显更大。",
            "wordCount": 25,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "On average, this (S) + use (V) + of AI increased productivity significa… (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "On average, this",
                  "start": 0,
                  "end": 16,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "use",
                  "start": 17,
                  "end": 20,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "of AI increased productivity significantly more for those with less experience or lower skill levels than for more experienced, higher-skilled workers.",
                  "start": 21,
                  "end": 172,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-0-0",
                "text": "On average",
                "zh": "平均而言",
                "kind": "习语"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "use",
                    "start": 17,
                    "end": 20,
                    "role": "predicate"
                  },
                  {
                    "text": "increased",
                    "start": 27,
                    "end": 36,
                    "role": "predicate"
                  },
                  {
                    "text": "levels",
                    "start": 115,
                    "end": 121,
                    "role": "predicate"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（use / increased / levels），意味着有 3 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 10,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 147,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 2 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "On average, this use of AI increased productivity significantly more for those with less experience or lower skill levels than for more experienced",
                    "start": 0,
                    "end": 147,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"On average, this\"；谓语 = \"use\"；宾语 = \"of AI increased productivity significa...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "higher-skilled workers.",
                    "start": 149,
                    "end": 172,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "On average, this use of AI increased productivity significantly more for those with less experience or lower skill levels than for more experienced",
                "summary": "主句是「On average, this use of AI increased product…」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"On average, this\"；谓语 = \"use\"；宾语 = \"of AI increased productivity significa...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"On average,\"（句首状语，交代背景或前提——中文习惯先译它）",
                  "\"more for those with less experience or lower…\"（后置定语，修饰名词 **more**）",
                  "\"than for more experienced\"（后置定语，修饰名词 **than**）"
                ],
                "summary": "平行动 0 处、修饰成分 3 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「On average, this use of AI incre…」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p5-s7",
            "index": 7,
            "en": "Thus, AI could potentially normalize outcomes across workers within businesses, in theory resulting in equalizing productivity and wages.",
            "zh": "因此，人工智能有可能抹平企业内部劳动者之间的表现差异，理论上可带来生产率与工资的均等化。",
            "wordCount": 18,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "Thus, AI (S) + could (V) + potentially normalize outcomes across … (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Thus, AI",
                  "start": 0,
                  "end": 8,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "could",
                  "start": 9,
                  "end": 14,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "potentially normalize outcomes across workers within businesses, in theory resulting in equalizing productivity and wages.",
                  "start": 15,
                  "end": 137,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "句中有插入成分，阅读时可先跳过，主句依然完整。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-90-0",
                "text": "resulting in",
                "zh": "导致；造成",
                "kind": "短语动词"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "could",
                    "start": 9,
                    "end": 14,
                    "role": "predicate"
                  },
                  {
                    "text": "normalize",
                    "start": 27,
                    "end": 36,
                    "role": "predicate"
                  },
                  {
                    "text": "resulting",
                    "start": 90,
                    "end": 99,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  },
                  {
                    "text": "equalizing",
                    "start": 103,
                    "end": 113,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（could / normalize），意味着有 2 件事要译；另有 2 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 4,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 78,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 2 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Thus, AI could potentially normalize outcomes across workers within businesses",
                    "start": 0,
                    "end": 78,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Thus, AI\"；谓语 = \"could\"；宾语 = \"potentially normalize outcomes across ...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "in theory resulting in equalizing productivity and wages.",
                    "start": 80,
                    "end": 137,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "Thus, AI could potentially normalize outcomes across workers within businesses",
                "summary": "主句是「Thus, AI could potentially normalize outcome…」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Thus, AI\"；谓语 = \"could\"；宾语 = \"potentially normalize outcomes across ...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"Thus,\"（句首状语，交代背景或前提——中文习惯先译它）",
                  "\"resulting in equalizing productivity and wages\"（后置定语，修饰名词 **resulting**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「Thus, AI could potentially norma…」——这是整句的骨架",
                  "2. 注意逻辑词 **thus**：因果（因而）——译文要把这层关系译出来，否则会读成平铺直叙。",
                  "3. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p5-s8",
            "index": 8,
            "en": "On the other hand, AI is expected to generally produce higher productivity gains for higher income and skilled workers.",
            "zh": "另一方面，人工智能预计总体上会为高收入、高技能劳动者带来更大的生产率提升。",
            "wordCount": 19,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "On the other hand, AI (S) + is expected (V) + to generally produce higher productivi… (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "On the other hand, AI",
                  "start": 0,
                  "end": 21,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "is expected",
                  "start": 22,
                  "end": 33,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "to generally produce higher productivity gains for higher income and skilled workers.",
                  "start": 34,
                  "end": 119,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-0-0",
                "text": "On the other hand",
                "zh": "另一方面",
                "kind": "习语"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "is expected",
                    "start": 22,
                    "end": 33,
                    "role": "predicate"
                  },
                  {
                    "text": "produce",
                    "start": 47,
                    "end": 54,
                    "role": "predicate"
                  },
                  {
                    "text": "gains",
                    "start": 75,
                    "end": 80,
                    "role": "predicate"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（is expected / produce / gains），意味着有 3 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 17,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "On the other hand",
                    "start": 0,
                    "end": 17,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"On the other hand, AI\"；谓语 = \"is expected\"；宾语 = \"to generally produce higher productivi...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "AI is expected to generally produce higher productivity gains for higher income and skilled workers.",
                    "start": 19,
                    "end": 119,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "On the other hand",
                "summary": "主句是「On the other hand」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"On the other hand, AI\"；谓语 = \"is expected\"；宾语 = \"to generally produce higher productivi...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"On the other hand,\"（句首状语，交代背景或前提——中文习惯先译它）",
                  "\"expected to generally produce higher product…\"（后置定语，修饰名词 **expected**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「On the other hand」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p5-s9",
            "index": 9,
            "en": "For example, some research suggests that productivity gains from large language models could be significantly larger for higher-income workers.",
            "zh": "例如，一些研究认为，大语言模型带来的生产率提升对高收入劳动者可能显著更大。",
            "wordCount": 19,
            "analysis": {
              "pattern": "主谓 + 从句",
              "skeleton": "For example, some research (S) + suggests (V)",
              "chunks": [
                {
                  "role": "S",
                  "text": "For example, some research",
                  "start": 0,
                  "end": 26,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "suggests",
                  "start": 27,
                  "end": 35,
                  "note": "主句谓语"
                },
                {
                  "role": "Clause",
                  "text": "that productivity gains from large language models could be significantly larger for higher-income workers.",
                  "start": 36,
                  "end": 143,
                  "note": "由 that 引导的从句，修饰前面的名词（定语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "suggests",
                    "start": 27,
                    "end": 35,
                    "role": "predicate"
                  },
                  {
                    "text": "gains",
                    "start": 54,
                    "end": 59,
                    "role": "predicate"
                  },
                  {
                    "text": "could be",
                    "start": 87,
                    "end": 95,
                    "role": "predicate"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（suggests / gains / could be），意味着有 3 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 11,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 36,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  }
                ],
                "summary": "找到 2 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "For example, some research suggests",
                    "start": 0,
                    "end": 35,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-1",
                    "text": "that productivity gains from large language models could be significantly larger for higher-income workers.",
                    "start": 36,
                    "end": 143,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "",
                "summary": "未能确定主句，建议先按标点切分逐段理解。"
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"that productivity gains from large language …\"（定语从句，修饰名词 **research**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"For example,\"（句首状语，交代背景或前提——中文习惯先译它）",
                  "\"larger for higher-income workers\"（后置定语，修饰名词 **larger**）"
                ],
                "summary": "平行动 0 处、修饰成分 3 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【名词性 / 定语从句】「that productivity gains from lar…」——作说明成分，翻译时通常放在主句之前",
                  "2. 注意逻辑词 **for example**：举例（例如）——译文要把这层关系译出来，否则会读成平铺直叙。",
                  "3. 按「说明」关系组装：中文习惯把说明类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          }
        ]
      },
      {
        "id": "crs-if12762-ai-macro-p6",
        "index": 6,
        "heading": "Policy Questions",
        "sentences": [
          {
            "id": "crs-if12762-ai-macro-p6-s0",
            "index": 0,
            "en": "Numerous policy questions arise from the adoption and use of AI in the production process.",
            "zh": "人工智能在生产过程中的采用与使用，引出了大量政策问题。",
            "wordCount": 15,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "Numerous policy questions (S) + arise (V) + from the adoption and use of AI in the… (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Numerous policy questions",
                  "start": 0,
                  "end": 25,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "arise",
                  "start": 26,
                  "end": 31,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "from the adoption and use of AI in the production process.",
                  "start": 32,
                  "end": 90,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-26-0",
                "text": "arise from",
                "zh": "由…产生",
                "kind": "短语动词"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "arise",
                    "start": 26,
                    "end": 31,
                    "role": "predicate"
                  },
                  {
                    "text": "use",
                    "start": 54,
                    "end": 57,
                    "role": "predicate"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（arise / use），意味着有 2 件事要译。"
              },
              "step2": {
                "breaks": [],
                "summary": "句中无明显断点，结构较简单。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Numerous policy questions arise from the adoption and use of AI in the production process.",
                    "start": 0,
                    "end": 90,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Numerous policy questions\"；谓语 = \"arise\"；宾语 = \"from the adoption and use of AI in the...\""
                  }
                ],
                "mainText": "Numerous policy questions arise from the adoption and use of AI in the production process.",
                "summary": "主句是「Numerous policy questions arise from the ado…」，其余 0 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Numerous policy questions\"；谓语 = \"arise\"；宾语 = \"from the adoption and use of AI in the...\""
              },
              "step4": {
                "parallels": [
                  {
                    "kind": "from … to … 平行",
                    "members": [
                      "the adoption",
                      "use of AI in the production process"
                    ],
                    "note": "范围的两端，形式通常一致"
                  }
                ],
                "modifiers": [
                  "\"arise from the adoption and use of AI in the…\"（后置定语，修饰名词 **arise**）"
                ],
                "summary": "平行动 1 处、修饰成分 1 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「Numerous policy questions arise …」——这是整句的骨架",
                  "2. 处理平行结构：the adoption ／ use of AI in the production process——平行成分逐一对译，不要打乱顺序",
                  "3. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p6-s1",
            "index": 1,
            "en": "Many of the most frequently asked questions involve labor market outcomes, as evidenced by recent House Oversight and Accountability Committee and Joint Economic Committee hearings on AI and the labor market.",
            "zh": "其中最常被问及的问题多与劳动力市场结果有关——众议院监督与问责委员会和联合经济委员会近期就人工智能与劳动力市场举行的听证会即为明证。",
            "wordCount": 31,
            "analysis": {
              "pattern": "主系表 + 从句",
              "skeleton": "Many of the most frequently (S) + asked (V) + questions involve labor market outcomes, (C)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Many of the most frequently",
                  "start": 0,
                  "end": 27,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "asked",
                  "start": 28,
                  "end": 33,
                  "note": "主句谓语"
                },
                {
                  "role": "C",
                  "text": "questions involve labor market outcomes,",
                  "start": 34,
                  "end": 74,
                  "note": "主句的宾语/表语"
                },
                {
                  "role": "Clause",
                  "text": "as evidenced by recent House Oversight and Accountability Committee and Joint Economic Committee hearings on AI and the labor market.",
                  "start": 75,
                  "end": 208,
                  "note": "由 as 引导的从句，充当状语（状语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "asked",
                    "start": 28,
                    "end": 33,
                    "role": "predicate"
                  },
                  {
                    "text": "involve",
                    "start": 44,
                    "end": 51,
                    "role": "predicate"
                  },
                  {
                    "text": "evidenced",
                    "start": 78,
                    "end": 87,
                    "role": "predicate"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（asked / involve / evidenced），意味着有 3 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 73,
                    "marker": ", + as",
                    "reason": "as 引导时间/原因状语从句，此处必须断开"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Many of the most frequently asked questions involve labor market outcomes",
                    "start": 0,
                    "end": 73,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Many of the most frequently\"；谓语 = \"asked\"；表语 = \"questions involve labor market outcomes,\""
                  },
                  {
                    "id": "seg-1",
                    "text": "as evidenced by recent House Oversight and Accountability Committee and Joint Economic Committee hearings on AI and the labor market.",
                    "start": 75,
                    "end": 208,
                    "type": "时间/原因状语从句",
                    "isMain": false,
                    "hint": "作时间或原因成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "Many of the most frequently asked questions involve labor market outcomes",
                "summary": "主句是「Many of the most frequently asked questions …」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Many of the most frequently\"；谓语 = \"asked\"；表语 = \"questions involve labor market outcomes,\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"Many of the most frequently asked questions …\"（后置定语，修饰名词 **Many**）",
                  "\"evidenced by recent House Oversight and Acco…\"（后置定语，修饰名词 **evidenced**）",
                  "\"hearings on AI and the labor market\"（后置定语，修饰名词 **hearings**）"
                ],
                "summary": "平行动 0 处、修饰成分 3 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【时间/原因状语从句】「as evidenced by recent House Ove…」——作时间或原因成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「Many of the most frequently aske…」——这是整句的骨架",
                  "3. 按「时间或原因」关系组装：中文习惯把时间或原因类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p6-s2",
            "index": 2,
            "en": "Questions often consider whether AI could structurally change the nature of work and, if so, how the costs and benefits of such a change might be distributed.",
            "zh": "这些问题常常思考：人工智能是否会从结构上改变工作的性质；倘若如此，这种变化的成本与收益又将如何分配。",
            "wordCount": 27,
            "analysis": {
              "pattern": "主谓 + 2 个从句（多重复合句）",
              "skeleton": "Questions often (S) + consider (V)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Questions often",
                  "start": 0,
                  "end": 15,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "consider",
                  "start": 16,
                  "end": 24,
                  "note": "主句谓语"
                },
                {
                  "role": "Clause",
                  "text": "whether AI could structurally change the nature of work and,",
                  "start": 25,
                  "end": 85,
                  "note": "由 whether 引导的从句，充当状语（状语从句）"
                },
                {
                  "role": "Clause",
                  "text": "if so, how the costs and benefits of such a change might be distributed.",
                  "start": 86,
                  "end": 158,
                  "note": "由 if 引导的从句，充当状语（状语从句）"
                }
              ],
              "notes": [
                "本句含 2 个从属分句，先锁定主句主干，再逐层挂回修饰成分。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "consider",
                    "start": 16,
                    "end": 24,
                    "role": "predicate"
                  },
                  {
                    "text": "could",
                    "start": 36,
                    "end": 41,
                    "role": "predicate"
                  },
                  {
                    "text": "change",
                    "start": 55,
                    "end": 61,
                    "role": "predicate"
                  },
                  {
                    "text": "might be distributed.",
                    "start": 137,
                    "end": 158,
                    "role": "predicate"
                  }
                ],
                "count": 4,
                "summary": "句中共有 4 个谓语动词（consider / could / change / might be distributed.），意味着有 4 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 25,
                    "marker": "whether",
                    "reason": "whether 引导名词性从句"
                  },
                  {
                    "pos": 84,
                    "marker": ", + if",
                    "reason": "if 引导条件状语从句，此处必须断开"
                  },
                  {
                    "pos": 91,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 123,
                    "marker": "such",
                    "reason": "such 引导定语从句"
                  }
                ],
                "summary": "找到 4 个断点，可以把句子切成 4 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Questions often consider",
                    "start": 0,
                    "end": 24,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Questions often\"；谓语 = \"consider\""
                  },
                  {
                    "id": "seg-1",
                    "text": "whether AI could structurally change the nature of work and",
                    "start": 25,
                    "end": 84,
                    "type": "名词性从句",
                    "isMain": false,
                    "hint": "作选择成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-2",
                    "text": "if so, how the costs and benefits of",
                    "start": 86,
                    "end": 122,
                    "type": "条件状语从句",
                    "isMain": false,
                    "hint": "作条件成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-3",
                    "text": "such a change might be distributed.",
                    "start": 123,
                    "end": 158,
                    "type": "定语从句",
                    "isMain": false,
                    "hint": "作修饰成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "Questions often consider",
                "summary": "主句是「Questions often consider」，其余 3 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Questions often\"；谓语 = \"consider\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"nature of work and\"（后置定语，修饰名词 **nature**）",
                  "\"benefits of such a change might be distributed\"（后置定语，修饰名词 **benefits**）",
                  "\"if so\"（插入语——删掉不影响主句结构，可先跳过）"
                ],
                "summary": "平行动 0 处、修饰成分 3 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【名词性从句】「whether AI could structurally ch…」——作选择成分，翻译时通常放在主句之前",
                  "2. 先译【条件状语从句】「if so, how the costs and benefit…」——作条件成分，翻译时通常放在主句之前",
                  "3. 先译【定语从句】「such a change might be distribut…」——作修饰成分，翻译时通常放在主句之前",
                  "4. 再译【主句】「Questions often consider」——这是整句的骨架",
                  "5. 按「选择」关系组装：中文习惯把选择类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 3 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "crs-if12762-ai-macro-p6-s3",
            "index": 3,
            "en": "Congress may wish to consider policies that would either prevent or mitigate changes to the labor market or otherwise provide assistance to those workers who are fully or partially displaced once any changes do take effect.",
            "zh": "国会或许希望考虑这样的政策：要么防止或减轻劳动力市场的变化，要么在变化真正发生后，为完全或部分被替代的劳动者提供援助。",
            "wordCount": 36,
            "analysis": {
              "pattern": "主系表 + 3 个从句（多重复合句）",
              "skeleton": "Congress (S) + may wish (V) + to consider policies (C)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Congress",
                  "start": 0,
                  "end": 8,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "may wish",
                  "start": 9,
                  "end": 17,
                  "note": "主句谓语"
                },
                {
                  "role": "C",
                  "text": "to consider policies",
                  "start": 18,
                  "end": 38,
                  "note": "主句的宾语/表语"
                },
                {
                  "role": "Clause",
                  "text": "that would either prevent or mitigate changes to the labor market or otherwise provide assistance to those workers",
                  "start": 39,
                  "end": 153,
                  "note": "由 that 引导的从句，修饰前面的名词（定语从句）"
                },
                {
                  "role": "Clause",
                  "text": "who are fully or partially displaced",
                  "start": 154,
                  "end": 190,
                  "note": "由 who 引导的从句，修饰前面的名词（定语从句）"
                },
                {
                  "role": "Clause",
                  "text": "once any changes do take effect.",
                  "start": 191,
                  "end": 223,
                  "note": "由 once 引导的从句，充当状语（状语从句）"
                }
              ],
              "notes": [
                "本句含 3 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-211-0",
                "text": "take effect",
                "zh": "生效",
                "kind": "固定搭配"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "may wish",
                    "start": 9,
                    "end": 17,
                    "role": "predicate"
                  },
                  {
                    "text": "consider",
                    "start": 21,
                    "end": 29,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  },
                  {
                    "text": "would",
                    "start": 44,
                    "end": 49,
                    "role": "predicate"
                  },
                  {
                    "text": "prevent",
                    "start": 57,
                    "end": 64,
                    "role": "predicate"
                  },
                  {
                    "text": "mitigate",
                    "start": 68,
                    "end": 76,
                    "role": "predicate"
                  },
                  {
                    "text": "provide",
                    "start": 118,
                    "end": 125,
                    "role": "predicate"
                  },
                  {
                    "text": "are",
                    "start": 158,
                    "end": 161,
                    "role": "predicate"
                  },
                  {
                    "text": "displaced",
                    "start": 181,
                    "end": 190,
                    "role": "predicate"
                  },
                  {
                    "text": "do take",
                    "start": 208,
                    "end": 215,
                    "role": "predicate"
                  }
                ],
                "count": 8,
                "summary": "句中共有 8 个谓语动词（may wish / would / prevent / mitigate / provide / are / displaced / do take），意味着有 8 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 39,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  },
                  {
                    "pos": 154,
                    "marker": "who",
                    "reason": "who 引导定语从句"
                  },
                  {
                    "pos": 191,
                    "marker": "once",
                    "reason": "once 引导时间状语从句"
                  }
                ],
                "summary": "找到 3 个断点，可以把句子切成 4 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Congress may wish to consider policies",
                    "start": 0,
                    "end": 38,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Congress\"；谓语 = \"may wish\"；表语 = \"to consider policies\""
                  },
                  {
                    "id": "seg-1",
                    "text": "that would either prevent or mitigate changes to the labor market or otherwise provide assistance to those workers",
                    "start": 39,
                    "end": 153,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-2",
                    "text": "who are fully or partially displaced",
                    "start": 154,
                    "end": 190,
                    "type": "定语从句",
                    "isMain": false,
                    "hint": "作修饰成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-3",
                    "text": "once any changes do take effect.",
                    "start": 191,
                    "end": 223,
                    "type": "时间状语从句",
                    "isMain": false,
                    "hint": "作时间成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "Congress may wish to consider policies",
                "summary": "主句是「Congress may wish to consider policies」，其余 3 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Congress\"；谓语 = \"may wish\"；表语 = \"to consider policies\""
              },
              "step4": {
                "parallels": [
                  {
                    "kind": "either … or … 平行",
                    "members": [
                      "prevent",
                      "mitigate changes to the labor market or otherwise provide as"
                    ],
                    "note": "\"要么…要么…\"——两部分地位相同、形式一致"
                  }
                ],
                "modifiers": [
                  "\"that would either prevent or mitigate change…\"（定语从句，修饰名词 **policies**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"who are fully or partially displaced once an…\"（定语从句，修饰名词 **workers**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"wish to consider policies that would either …\"（后置定语，修饰名词 **wish**）",
                  "\"changes to the labor market or otherwise pro…\"（后置定语，修饰名词 **changes**）"
                ],
                "summary": "平行动 1 处、修饰成分 4 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【名词性 / 定语从句】「that would either prevent or mit…」——作说明成分，翻译时通常放在主句之前",
                  "2. 先译【定语从句】「who are fully or partially displ…」——作修饰成分，翻译时通常放在主句之前",
                  "3. 先译【时间状语从句】「once any changes do take effect.」——作时间成分，翻译时通常放在主句之前",
                  "4. 再译【主句】「Congress may wish to consider po…」——这是整句的骨架",
                  "5. 处理平行结构：prevent ／ mitigate changes to the labor market or otherwise provide as——平行成分逐一对译，不要打乱顺序",
                  "6. 注意逻辑词 **otherwise**：转折（否则）——译文要把这层关系译出来，否则会读成平铺直叙。",
                  "7. 按「说明」关系组装：中文习惯把说明类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 3 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          }
        ]
      }
    ],
    "createdAt": "2026-09-15T00:00:00.000Z",
    "updatedAt": "2026-09-17T07:53:31.110Z"
  },
  {
    "schemaVersion": 1,
    "id": "nasa-coastal-wetlands-blue-carbon",
    "title": "NASA Researchers Study Coastal Wetlands, Champions of Carbon Capture",
    "titleZh": "NASA 研究滨海湿地：碳捕获的隐形冠军",
    "source": "NASA Science · Earth Science（BlueFlux Campaign）· 2025-08-28",
    "sourceType": "builtin",
    "meta": {
      "tags": [
        "环境气候",
        "生物医药",
        "科技互联网"
      ],
      "difficulty": 4,
      "wordCount": 1377,
      "sentenceCount": 63,
      "readMinutes": 7,
      "license": "Public Domain（NASA 官方声明：其内容在美国不受版权保护）",
      "sourceUrl": "https://science.nasa.gov/earth/nasa-researchers-study-coastal-wetlands-champions-of-carbon-capture/"
    },
    "paragraphs": [
      {
        "id": "nasa-coastal-wetlands-blue-carbon-p0",
        "index": 0,
        "sentences": [
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p0-s0",
            "index": 0,
            "en": "Across the street from the Flamingo Visitor’s Center at the foot of Florida’s Everglades National Park, there was once a thriving mangrove population — part of the largest stand of mangroves in the Western Hemisphere.",
            "zh": "在佛罗里达大沼泽地国家公园尽头的弗拉明戈游客中心对面，曾经有一片繁茂的红树林——它属于西半球最大的一片红树林。",
            "wordCount": 34,
            "analysis": {
              "pattern": "主谓 + 从句",
              "skeleton": "Across the street from the Flamingo Vi… (S) + was (V)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Across the street from the Flamingo Visitor’s Center at the foot of Florida’s Everglades National Park, there",
                  "start": 0,
                  "end": 109,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "was",
                  "start": 110,
                  "end": 113,
                  "note": "主句谓语"
                },
                {
                  "role": "Clause",
                  "text": "once a thriving mangrove population — part of the largest stand of mangroves in the Western Hemisphere.",
                  "start": 114,
                  "end": 217,
                  "note": "由 once 引导的从句，充当状语（状语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句中有插入成分，阅读时可先跳过，主句依然完整。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "was",
                    "start": 110,
                    "end": 113,
                    "role": "predicate"
                  }
                ],
                "count": 1,
                "summary": "句中共有 1 个谓语动词（was），意味着有 1 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 102,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 114,
                    "marker": "once",
                    "reason": "once 引导时间状语从句"
                  },
                  {
                    "pos": 150,
                    "marker": "—",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 3 个断点，可以把句子切成 3 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Across the street from the Flamingo Visitor’s Center at the foot of Florida’s Everglades National Park",
                    "start": 0,
                    "end": 102,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Across the street from the Flamingo Vi...\"；谓语 = \"was\""
                  },
                  {
                    "id": "seg-1",
                    "text": "there was once a thriving mangrove population",
                    "start": 104,
                    "end": 149,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-2",
                    "text": "part of the largest stand of mangroves in the Western Hemisphere.",
                    "start": 152,
                    "end": 217,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "Across the street from the Flamingo Visitor’s Center at the foot of Florida’s Everglades National Park",
                "summary": "主句是「Across the street from the Flamingo Visitor’…」，其余 2 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Across the street from the Flamingo Vi...\"；谓语 = \"was\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"street from the Flamingo Visitor’s Center at…\"（后置定语，修饰名词 **street**）",
                  "\"part of the largest stand of mangroves in th…\"（后置定语，修饰名词 **part**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「Across the street from the Flami…」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p0-s1",
            "index": 1,
            "en": "Now, the skeletal remains of the trees form one of the Everglades’ largest ghost forests.",
            "zh": "如今，这些树木的残骸构成了大沼泽地最大的一片“幽灵森林”。",
            "wordCount": 15,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "Now, the skeletal remains of the trees (S) + form (V) + one of the Everglades’ largest ghost f… (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Now, the skeletal remains of the trees",
                  "start": 0,
                  "end": 38,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "form",
                  "start": 39,
                  "end": 43,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "one of the Everglades’ largest ghost forests.",
                  "start": 44,
                  "end": 89,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "form",
                    "start": 39,
                    "end": 43,
                    "role": "predicate"
                  }
                ],
                "count": 1,
                "summary": "句中共有 1 个谓语动词（form），意味着有 1 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 3,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 1 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "the skeletal remains of the trees form one of the Everglades’ largest ghost forests.",
                    "start": 5,
                    "end": 89,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Now, the skeletal remains of the trees\"；谓语 = \"form\"；宾语 = \"one of the Everglades’ largest ghost f...\""
                  }
                ],
                "mainText": "the skeletal remains of the trees form one of the Everglades’ largest ghost forests.",
                "summary": "主句是「the skeletal remains of the trees form one o…」，其余 0 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Now, the skeletal remains of the trees\"；谓语 = \"form\"；宾语 = \"one of the Everglades’ largest ghost f...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"Now,\"（句首状语，交代背景或前提——中文习惯先译它）",
                  "\"remains of the trees form one of the Evergla…\"（后置定语，修饰名词 **remains**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「the skeletal remains of the tree…」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p0-s2",
            "index": 2,
            "en": "When Hurricane Irma made landfall in September 2017 as a category 4 storm, violent winds battered the shore and a storm surge swept across the coast, decimating large swaths of mangrove forest.",
            "zh": "2017 年 9 月，四级飓风“厄玛”登陆，狂风猛击海岸，风暴潮席卷沿岸，大片红树林被摧毁。",
            "wordCount": 30,
            "analysis": {
              "pattern": "主谓宾 + 从句",
              "skeleton": "violent winds (S) + battered (V) + the shore and a storm surge swept acro… (O)",
              "chunks": [
                {
                  "role": "Clause",
                  "text": "When Hurricane Irma made landfall in September 2017 as a category 4 storm,",
                  "start": 0,
                  "end": 74,
                  "note": "句首状语从句：先交代条件/让步/时间背景，主句在后面"
                },
                {
                  "role": "S",
                  "text": "violent winds",
                  "start": 75,
                  "end": 88,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "battered",
                  "start": 89,
                  "end": 97,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "the shore and a storm surge swept across the coast, decimating large swaths of mangrove forest.",
                  "start": 98,
                  "end": 193,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句中有插入成分，阅读时可先跳过，主句依然完整。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "made",
                    "start": 20,
                    "end": 24,
                    "role": "predicate"
                  },
                  {
                    "text": "battered",
                    "start": 89,
                    "end": 97,
                    "role": "predicate"
                  },
                  {
                    "text": "swept",
                    "start": 126,
                    "end": 131,
                    "role": "predicate"
                  },
                  {
                    "text": "decimating",
                    "start": 150,
                    "end": 160,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（made / battered / swept），意味着有 3 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 52,
                    "marker": "as",
                    "reason": "as 引导时间/原因状语从句"
                  },
                  {
                    "pos": 73,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 148,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 3 个断点，可以把句子切成 4 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "When Hurricane Irma made landfall in September 2017",
                    "start": 0,
                    "end": 51,
                    "type": "时间状语从句",
                    "isMain": false,
                    "hint": "作时间成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-1",
                    "text": "as a category 4 storm",
                    "start": 52,
                    "end": 73,
                    "type": "时间/原因状语从句",
                    "isMain": false,
                    "hint": "作时间或原因成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-2",
                    "text": "violent winds battered the shore and a storm surge swept across the coast",
                    "start": 75,
                    "end": 148,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"violent winds\"；谓语 = \"battered\"；宾语 = \"the shore and a storm surge swept acro...\""
                  },
                  {
                    "id": "seg-3",
                    "text": "decimating large swaths of mangrove forest.",
                    "start": 150,
                    "end": 193,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "violent winds battered the shore and a storm surge swept across the coast",
                "summary": "主句是「violent winds battered the shore and a storm…」，其余 3 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"violent winds\"；谓语 = \"battered\"；宾语 = \"the shore and a storm surge swept acro...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"landfall in September 2017 as a category 4 s…\"（后置定语，修饰名词 **landfall**）",
                  "\"swaths of mangrove forest\"（后置定语，修饰名词 **swaths**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【时间状语从句】「When Hurricane Irma made landfal…」——作时间成分，翻译时通常放在主句之前",
                  "2. 先译【时间/原因状语从句】「as a category 4 storm」——作时间或原因成分，翻译时通常放在主句之前",
                  "3. 再译【主句】「violent winds battered the shore…」——这是整句的骨架",
                  "4. 按「时间」关系组装：中文习惯把时间类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 2 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p0-s3",
            "index": 3,
            "en": "Seven years later, most of the mangroves here haven’t seen any new growth.",
            "zh": "七年之后，这里的红树林大多仍未长出新芽。",
            "wordCount": 13,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "Seven years later, most of the mangrov… (S) + haven’t seen (V) + any new growth. (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Seven years later, most of the mangroves here",
                  "start": 0,
                  "end": 45,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "haven’t seen",
                  "start": 46,
                  "end": 58,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "any new growth.",
                  "start": 59,
                  "end": 74,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "haven’t seen",
                    "start": 46,
                    "end": 58,
                    "role": "predicate"
                  }
                ],
                "count": 1,
                "summary": "句中共有 1 个谓语动词（haven’t seen），意味着有 1 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 17,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Seven years later",
                    "start": 0,
                    "end": 17,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Seven years later, most of the mangrov...\"；谓语 = \"haven’t seen\"；宾语 = \"any new growth.\""
                  },
                  {
                    "id": "seg-1",
                    "text": "most of the mangroves here haven’t seen any new growth.",
                    "start": 19,
                    "end": 74,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "Seven years later",
                "summary": "主句是「Seven years later」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Seven years later, most of the mangrov...\"；谓语 = \"haven’t seen\"；宾语 = \"any new growth.\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"Seven years later,\"（句首状语，交代背景或前提——中文习惯先译它）",
                  "\"most of the mangroves here haven’t seen any …\"（后置定语，修饰名词 **most**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「Seven years later」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p0-s4",
            "index": 4,
            "en": "“At this point, I doubt they’ll recover,” said David Lagomasino, a professor of coastal studies at East Carolina University.",
            "zh": "“到这一步，我怀疑它们恢复不了了，”东卡罗来纳大学海岸研究教授戴维·拉戈马西诺说。",
            "wordCount": 19,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "At this point, I (S) + doubt (V) + they’ll recover,” said David Lagomasin… (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "At this point, I",
                  "start": 1,
                  "end": 17,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "doubt",
                  "start": 18,
                  "end": 23,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "they’ll recover,” said David Lagomasino, a professor of coastal studies at East Carolina University.",
                  "start": 24,
                  "end": 124,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "句中有插入成分，阅读时可先跳过，主句依然完整。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "said",
                    "start": 42,
                    "end": 46,
                    "role": "predicate"
                  }
                ],
                "count": 1,
                "summary": "句中共有 1 个谓语动词（said），意味着有 1 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 14,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 39,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 63,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 3 个断点，可以把句子切成 4 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "“At this point",
                    "start": 0,
                    "end": 14,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"At this point, I\"；谓语 = \"doubt\"；宾语 = \"they’ll recover,” said David Lagomasin...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "I doubt they’ll recover",
                    "start": 16,
                    "end": 39,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-2",
                    "text": "” said David Lagomasino",
                    "start": 40,
                    "end": 63,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-3",
                    "text": "a professor of coastal studies at East Carolina University.",
                    "start": 65,
                    "end": 124,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "“At this point",
                "summary": "主句是「“At this point」，其余 3 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"At this point, I\"；谓语 = \"doubt\"；宾语 = \"they’ll recover,” said David Lagomasin...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"professor of coastal studies at East Carolin…\"（后置定语，修饰名词 **professor**）",
                  "\"I doubt they’ll recover\"（插入语——删掉不影响主句结构，可先跳过）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「“At this point」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          }
        ]
      },
      {
        "id": "nasa-coastal-wetlands-blue-carbon-p1",
        "index": 1,
        "sentences": [
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p1-s0",
            "index": 0,
            "en": "Lagomasino was in the Everglades conducting fieldwork as part of NASA’s BlueFlux Campaign, a three-year project that aims to study how sub-tropical wetlands influence atmospheric levels of carbon dioxide (CO2) and methane.",
            "zh": "拉戈马西诺当时正在大沼泽地进行野外考察，这是 NASA“BlueFlux”项目的一部分——该项目为期三年，旨在研究亚热带湿地如何影响大气中的二氧化碳和甲烷含量。",
            "wordCount": 32,
            "analysis": {
              "pattern": "主系表 + 从句",
              "skeleton": "Lagomasino (S) + was (V) + in the Everglades conducting fieldwork (C)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Lagomasino",
                  "start": 0,
                  "end": 10,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "was",
                  "start": 11,
                  "end": 14,
                  "note": "主句谓语"
                },
                {
                  "role": "C",
                  "text": "in the Everglades conducting fieldwork",
                  "start": 15,
                  "end": 53,
                  "note": "主句的宾语/表语"
                },
                {
                  "role": "Clause",
                  "text": "as part of NASA’s BlueFlux Campaign, a three-year project that aims to study how sub-tropical wetlands influence atmospheric levels of carbon dioxide (CO2) and methane.",
                  "start": 54,
                  "end": 222,
                  "note": "由 as 引导的从句，充当状语（状语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "was",
                    "start": 11,
                    "end": 14,
                    "role": "predicate"
                  },
                  {
                    "text": "aims",
                    "start": 117,
                    "end": 121,
                    "role": "predicate"
                  },
                  {
                    "text": "study",
                    "start": 125,
                    "end": 130,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  },
                  {
                    "text": "influence",
                    "start": 157,
                    "end": 166,
                    "role": "predicate"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（was / aims / influence），意味着有 3 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 54,
                    "marker": "as",
                    "reason": "as 引导时间/原因状语从句"
                  },
                  {
                    "pos": 89,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 112,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  }
                ],
                "summary": "找到 3 个断点，可以把句子切成 4 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Lagomasino was in the Everglades conducting fieldwork",
                    "start": 0,
                    "end": 53,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Lagomasino\"；谓语 = \"was\"；表语 = \"in the Everglades conducting fieldwork\""
                  },
                  {
                    "id": "seg-1",
                    "text": "as part of NASA’s BlueFlux Campaign",
                    "start": 54,
                    "end": 89,
                    "type": "时间/原因状语从句",
                    "isMain": false,
                    "hint": "作时间或原因成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-2",
                    "text": "a three-year project",
                    "start": 91,
                    "end": 111,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-3",
                    "text": "that aims to study how sub-tropical wetlands influence atmospheric levels of carbon dioxide (CO2) and methane.",
                    "start": 112,
                    "end": 222,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "Lagomasino was in the Everglades conducting fieldwork",
                "summary": "主句是「Lagomasino was in the Everglades conducting …」，其余 3 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Lagomasino\"；谓语 = \"was\"；表语 = \"in the Everglades conducting fieldwork\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"that aims to study how sub-tropical wetlands…\"（定语从句，修饰名词 **project**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"part of NASA’s BlueFlux Campaign\"（后置定语，修饰名词 **part**）",
                  "\"levels of carbon dioxide (CO2) and methane\"（后置定语，修饰名词 **levels**）"
                ],
                "summary": "平行动 0 处、修饰成分 3 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【时间/原因状语从句】「as part of NASA’s BlueFlux Campa…」——作时间或原因成分，翻译时通常放在主句之前",
                  "2. 先译【名词性 / 定语从句】「that aims to study how sub-tropi…」——作说明成分，翻译时通常放在主句之前",
                  "3. 再译【主句】「Lagomasino was in the Everglades…」——这是整句的骨架",
                  "4. 按「时间或原因」关系组装：中文习惯把时间或原因类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 2 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p1-s1",
            "index": 1,
            "en": "Both gases absorb solar radiation and have a warming effect on Earth’s atmosphere.",
            "zh": "这两种气体都会吸收太阳辐射，对地球大气产生增温效应。",
            "wordCount": 13,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "Both gases (S) + absorb (V) + solar radiation and have a warming eff… (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Both gases",
                  "start": 0,
                  "end": 10,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "absorb",
                  "start": 11,
                  "end": 17,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "solar radiation and have a warming effect on Earth’s atmosphere.",
                  "start": 18,
                  "end": 82,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "absorb",
                    "start": 11,
                    "end": 17,
                    "role": "predicate"
                  },
                  {
                    "text": "have",
                    "start": 38,
                    "end": 42,
                    "role": "predicate"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（absorb / have），意味着有 2 件事要译。"
              },
              "step2": {
                "breaks": [],
                "summary": "句中无明显断点，结构较简单。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Both gases absorb solar radiation and have a warming effect on Earth’s atmosphere.",
                    "start": 0,
                    "end": 82,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Both gases\"；谓语 = \"absorb\"；宾语 = \"solar radiation and have a warming eff...\""
                  }
                ],
                "mainText": "Both gases absorb solar radiation and have a warming effect on Earth’s atmosphere.",
                "summary": "主句是「Both gases absorb solar radiation and have a…」，其余 0 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Both gases\"；谓语 = \"absorb\"；宾语 = \"solar radiation and have a warming eff...\""
              },
              "step4": {
                "parallels": [
                  {
                    "kind": "both … and … 平行",
                    "members": [
                      "gases absorb solar radiation",
                      "have a warming effect on Earth’s atmosphere"
                    ],
                    "note": "\"两者都\"——两部分并列"
                  }
                ],
                "modifiers": [
                  "\"effect on Earth’s atmosphere\"（后置定语，修饰名词 **effect**）"
                ],
                "summary": "平行动 1 处、修饰成分 1 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「Both gases absorb solar radiatio…」——这是整句的骨架",
                  "2. 处理平行结构：gases absorb solar radiation ／ have a warming effect on Earth’s atmosphere——平行成分逐一对译，不要打乱顺序",
                  "3. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          }
        ]
      },
      {
        "id": "nasa-coastal-wetlands-blue-carbon-p2",
        "index": 2,
        "sentences": [
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p2-s0",
            "index": 0,
            "en": "The campaign is led by Ben Poulter, a researcher at NASA’s Goddard Space Flight Center in Greenbelt, Maryland, who studies the way human activity and climate change affect the carbon cycle.",
            "zh": "该项目由马里兰州格林贝尔特 NASA 戈达德太空飞行中心的研究员本·波尔特牵头，他研究人类活动与气候变化如何影响碳循环。",
            "wordCount": 31,
            "analysis": {
              "pattern": "主系表 + 非限定性定语从句",
              "skeleton": "The campaign (S) + is led (V) + by Ben Poulter, a researcher at NASA’s… (C)",
              "chunks": [
                {
                  "role": "S",
                  "text": "The campaign",
                  "start": 0,
                  "end": 12,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "is led",
                  "start": 13,
                  "end": 19,
                  "note": "主句谓语"
                },
                {
                  "role": "C",
                  "text": "by Ben Poulter, a researcher at NASA’s Goddard Space Flight Center in Greenbelt, Maryland,",
                  "start": 20,
                  "end": 110,
                  "note": "主句的宾语/表语"
                },
                {
                  "role": "Clause",
                  "text": "who studies the way human activity and climate change affect the carbon cycle.",
                  "start": 111,
                  "end": 189,
                  "note": "由 who 引导的从句，修饰前面的名词（定语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句中有插入成分，阅读时可先跳过，主句依然完整。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "is led",
                    "start": 13,
                    "end": 19,
                    "role": "predicate"
                  },
                  {
                    "text": "studies",
                    "start": 115,
                    "end": 122,
                    "role": "predicate"
                  },
                  {
                    "text": "affect",
                    "start": 165,
                    "end": 171,
                    "role": "predicate"
                  },
                  {
                    "text": "cycle.",
                    "start": 183,
                    "end": 189,
                    "role": "predicate"
                  }
                ],
                "count": 4,
                "summary": "句中共有 4 个谓语动词（is led / studies / affect / cycle.），意味着有 4 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 34,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 99,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 109,
                    "marker": ", + who",
                    "reason": "who 引导定语从句，此处必须断开"
                  }
                ],
                "summary": "找到 3 个断点，可以把句子切成 3 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "The campaign is led by Ben Poulter",
                    "start": 0,
                    "end": 34,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"The campaign\"；谓语 = \"is led\"；表语 = \"by Ben Poulter, a researcher at NASA’s...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "a researcher at NASA’s Goddard Space Flight Center in Greenbelt",
                    "start": 36,
                    "end": 99,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-2",
                    "text": "Maryland, who studies the way human activity and climate change affect the carbon cycle.",
                    "start": 101,
                    "end": 189,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "The campaign is led by Ben Poulter",
                "summary": "主句是「The campaign is led by Ben Poulter」，其余 2 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"The campaign\"；谓语 = \"is led\"；表语 = \"by Ben Poulter, a researcher at NASA’s...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"who studies the way human activity and clima…\"（定语从句，修饰名词 **Maryland,**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"Center in Greenbelt\"（后置定语，修饰名词 **Center**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「The campaign is led by Ben Poulter」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p2-s1",
            "index": 1,
            "en": "As wetland vegetation responds to increasing temperatures, rising sea levels, and severe weather, Poulter’s team is trying to determine how much carbon dioxide wetland vegetation removes from the atmosphere and how much methane it produces.",
            "zh": "随着湿地植被对气温升高、海平面上升和极端天气作出反应，波尔特的团队正试图确定湿地植被从大气中移除了多少二氧化碳、又产生了多少甲烷。",
            "wordCount": 35,
            "analysis": {
              "pattern": "结构待拆 + 从句",
              "skeleton": "rising (V) + sea levels, and severe weather, Poulte… (O)",
              "chunks": [
                {
                  "role": "Clause",
                  "text": "As wetland vegetation responds to increasing temperatures,",
                  "start": 0,
                  "end": 58,
                  "note": "句首状语从句：先交代条件/让步/时间背景，主句在后面"
                },
                {
                  "role": "V",
                  "text": "rising",
                  "start": 59,
                  "end": 65,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "sea levels, and severe weather, Poulter’s team is trying to determine how much carbon dioxide wetland vegetation removes from the atmosphere and how much methane it produces.",
                  "start": 66,
                  "end": 240,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句中有插入成分，阅读时可先跳过，主句依然完整。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-22-0",
                "text": "responds to",
                "zh": "对…作出反应",
                "kind": "短语动词"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "responds",
                    "start": 22,
                    "end": 30,
                    "role": "predicate"
                  },
                  {
                    "text": "increasing",
                    "start": 34,
                    "end": 44,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  },
                  {
                    "text": "rising",
                    "start": 59,
                    "end": 65,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  },
                  {
                    "text": "is",
                    "start": 113,
                    "end": 115,
                    "role": "predicate"
                  },
                  {
                    "text": "trying",
                    "start": 116,
                    "end": 122,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  },
                  {
                    "text": "determine",
                    "start": 126,
                    "end": 135,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  },
                  {
                    "text": "removes",
                    "start": 179,
                    "end": 186,
                    "role": "predicate"
                  },
                  {
                    "text": "methane",
                    "start": 220,
                    "end": 227,
                    "role": "predicate"
                  },
                  {
                    "text": "produces.",
                    "start": 231,
                    "end": 240,
                    "role": "predicate"
                  }
                ],
                "count": 5,
                "summary": "句中共有 5 个谓语动词（responds / is / removes / methane / produces.），意味着有 5 件事要译；另有 4 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 57,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 76,
                    "marker": ", + and",
                    "reason": "and 连接并列成分，可在标点处断开"
                  },
                  {
                    "pos": 96,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 3 个断点，可以把句子切成 4 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "As wetland vegetation responds to increasing temperatures",
                    "start": 0,
                    "end": 57,
                    "type": "时间/原因状语从句",
                    "isMain": false,
                    "hint": "作时间或原因成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-1",
                    "text": "rising sea levels",
                    "start": 59,
                    "end": 76,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 谓语 = \"rising\"；宾语 = \"sea levels, and severe weather, Poulte...\""
                  },
                  {
                    "id": "seg-2",
                    "text": "and severe weather",
                    "start": 78,
                    "end": 96,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-3",
                    "text": "Poulter’s team is trying to determine how much carbon dioxide wetland vegetation removes from the atmosphere and how much methane it produces.",
                    "start": 98,
                    "end": 240,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "rising sea levels",
                "summary": "主句是「rising sea levels」，其余 3 段都是挂在这一主干上的修饰或从句。 主干拆解：谓语 = \"rising\"；宾语 = \"sea levels, and severe weather, Poulte...\""
              },
              "step4": {
                "parallels": [
                  {
                    "kind": "from … to … 平行",
                    "members": [
                      "the atmosphere",
                      "how much methane it produces"
                    ],
                    "note": "范围的两端，形式通常一致"
                  },
                  {
                    "kind": "三项以上并列",
                    "members": [
                      "responds to increasing temperatures",
                      "rising sea levels",
                      "severe weather"
                    ],
                    "note": "并列的几项词性相同、形式一致，可逐个对应翻译"
                  }
                ],
                "modifiers": [
                  "\"responds to increasing temperatures\"（后置定语，修饰名词 **responds**）",
                  "\"trying to determine how much carbon dioxide …\"（后置定语，修饰名词 **trying**）",
                  "\"removes from the atmosphere and how much met…\"（后置定语，修饰名词 **removes**）",
                  "\"rising sea levels\"（插入语——删掉不影响主句结构，可先跳过）"
                ],
                "summary": "平行动 2 处、修饰成分 4 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【时间/原因状语从句】「As wetland vegetation responds t…」——作时间或原因成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「rising sea levels」——这是整句的骨架",
                  "3. 处理平行结构：the atmosphere ／ how much methane it produces——平行成分逐一对译，不要打乱顺序",
                  "4. 按「时间或原因」关系组装：中文习惯把时间或原因类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p2-s2",
            "index": 2,
            "en": "Ultimately this research will help scientists develop models to estimate and monitor greenhouse gas concentrations in coastal areas around the globe.",
            "zh": "这项研究最终将帮助科学家建立模型，用以估算和监测全球沿海地区的温室气体浓度。",
            "wordCount": 21,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "Ultimately this research (S) + will help (V) + scientists develop models to estimate … (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Ultimately this research",
                  "start": 0,
                  "end": 24,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "will help",
                  "start": 25,
                  "end": 34,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "scientists develop models to estimate and monitor greenhouse gas concentrations in coastal areas around the globe.",
                  "start": 35,
                  "end": 149,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "will help",
                    "start": 25,
                    "end": 34,
                    "role": "predicate"
                  },
                  {
                    "text": "develop",
                    "start": 46,
                    "end": 53,
                    "role": "predicate"
                  },
                  {
                    "text": "estimate",
                    "start": 64,
                    "end": 72,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  },
                  {
                    "text": "monitor",
                    "start": 77,
                    "end": 84,
                    "role": "predicate"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（will help / develop / monitor），意味着有 3 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [],
                "summary": "句中无明显断点，结构较简单。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Ultimately this research will help scientists develop models to estimate and monitor greenhouse gas concentrations in coastal areas around the globe.",
                    "start": 0,
                    "end": 149,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Ultimately this research\"；谓语 = \"will help\"；宾语 = \"scientists develop models to estimate ...\""
                  }
                ],
                "mainText": "Ultimately this research will help scientists develop models to estimate and monitor greenhouse gas concentrations in coastal areas around the globe.",
                "summary": "主句是「Ultimately this research will help scientist…」，其余 0 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Ultimately this research\"；谓语 = \"will help\"；宾语 = \"scientists develop models to estimate ...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"models to estimate and monitor greenhouse ga…\"（后置定语，修饰名词 **models**）"
                ],
                "summary": "平行动 0 处、修饰成分 1 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「Ultimately this research will he…」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          }
        ]
      },
      {
        "id": "nasa-coastal-wetlands-blue-carbon-p3",
        "index": 3,
        "sentences": [
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p3-s0",
            "index": 0,
            "en": "Although coastal wetlands account for less than 2% of the planet’s land-surface area, they remove a significant amount of carbon dioxide from the atmosphere.",
            "zh": "尽管滨海湿地只占地球陆地面积不到 2%，却从大气中移除了相当可观的二氧化碳。",
            "wordCount": 23,
            "analysis": {
              "pattern": "主谓宾 + 从句",
              "skeleton": "they (S) + remove (V) + a significant amount of carbon dioxide… (O)",
              "chunks": [
                {
                  "role": "Clause",
                  "text": "Although coastal wetlands account for less than 2% of the planet’s land-surface area,",
                  "start": 0,
                  "end": 85,
                  "note": "句首状语从句：先交代条件/让步/时间背景，主句在后面"
                },
                {
                  "role": "S",
                  "text": "they",
                  "start": 86,
                  "end": 90,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "remove",
                  "start": 91,
                  "end": 97,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "a significant amount of carbon dioxide from the atmosphere.",
                  "start": 98,
                  "end": 157,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-26-0",
                "text": "account for",
                "zh": "解释；占（比例）；导致",
                "kind": "短语动词"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "account",
                    "start": 26,
                    "end": 33,
                    "role": "predicate"
                  },
                  {
                    "text": "remove",
                    "start": 91,
                    "end": 97,
                    "role": "predicate"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（account / remove），意味着有 2 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 84,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Although coastal wetlands account for less than 2% of the planet’s land-surface area",
                    "start": 0,
                    "end": 84,
                    "type": "让步状语从句",
                    "isMain": false,
                    "hint": "作让步成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-1",
                    "text": "they remove a significant amount of carbon dioxide from the atmosphere.",
                    "start": 86,
                    "end": 157,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"they\"；谓语 = \"remove\"；宾语 = \"a significant amount of carbon dioxide...\""
                  }
                ],
                "mainText": "they remove a significant amount of carbon dioxide from the atmosphere.",
                "summary": "主句是「they remove a significant amount of carbon d…」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"they\"；谓语 = \"remove\"；宾语 = \"a significant amount of carbon dioxide...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"account for less than 2% of the planet’s lan…\"（后置定语，修饰名词 **account**）",
                  "\"amount of carbon dioxide from the atmosphere\"（后置定语，修饰名词 **amount**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【让步状语从句】「Although coastal wetlands accoun…」——作让步成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「they remove a significant amount…」——这是整句的骨架",
                  "3. 按「让步」关系组装：中文习惯把让步类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p3-s1",
            "index": 1,
            "en": "Florida’s coastal wetlands alone remove an estimated 31.8 million metric tons each year.",
            "zh": "仅佛罗里达的滨海湿地每年就移除约 3180 万吨。",
            "wordCount": 12,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "Florida’s coastal wetlands alone (S) + remove (V) + an estimated 31.8 million metric tons … (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Florida’s coastal wetlands alone",
                  "start": 0,
                  "end": 32,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "remove",
                  "start": 33,
                  "end": 39,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "an estimated 31.8 million metric tons each year.",
                  "start": 40,
                  "end": 88,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "remove",
                    "start": 33,
                    "end": 39,
                    "role": "predicate"
                  },
                  {
                    "text": "estimated",
                    "start": 43,
                    "end": 52,
                    "role": "predicate"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（remove / estimated），意味着有 2 件事要译。"
              },
              "step2": {
                "breaks": [],
                "summary": "句中无明显断点，结构较简单。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Florida’s coastal wetlands alone remove an estimated 31.8 million metric tons each year.",
                    "start": 0,
                    "end": 88,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Florida’s coastal wetlands alone\"；谓语 = \"remove\"；宾语 = \"an estimated 31.8 million metric tons ...\""
                  }
                ],
                "mainText": "Florida’s coastal wetlands alone remove an estimated 31.8 million metric tons each year.",
                "summary": "主句是「Florida’s coastal wetlands alone remove an e…」，其余 0 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Florida’s coastal wetlands alone\"；谓语 = \"remove\"；宾语 = \"an estimated 31.8 million metric tons ...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [],
                "summary": "本句没有明显的平行结构或插入成分。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「Florida’s coastal wetlands alone…」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p3-s2",
            "index": 2,
            "en": "A commercial aircraft would have to circle the globe more than 26,000 times to produce the same amount of carbon dioxide.",
            "zh": "一架商用客机要绕地球飞行 26,000 多圈，才能排出等量的二氧化碳。",
            "wordCount": 20,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "A commercial aircraft (S) + would have to circle (V) + the globe more than 26,000 times to pr… (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "A commercial aircraft",
                  "start": 0,
                  "end": 21,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "would have to circle",
                  "start": 22,
                  "end": 42,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "the globe more than 26,000 times to produce the same amount of carbon dioxide.",
                  "start": 43,
                  "end": 121,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "would have",
                    "start": 22,
                    "end": 32,
                    "role": "predicate"
                  },
                  {
                    "text": "circle",
                    "start": 36,
                    "end": 42,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  },
                  {
                    "text": "produce",
                    "start": 79,
                    "end": 86,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  }
                ],
                "count": 1,
                "summary": "句中共有 1 个谓语动词（would have），意味着有 1 件事要译；另有 2 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 65,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "A commercial aircraft would have to circle the globe more than 26",
                    "start": 0,
                    "end": 65,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"A commercial aircraft\"；谓语 = \"would have to circle\"；宾语 = \"the globe more than 26,000 times to pr...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "000 times to produce the same amount of carbon dioxide.",
                    "start": 66,
                    "end": 121,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "A commercial aircraft would have to circle the globe more than 26",
                "summary": "主句是「A commercial aircraft would have to circle t…」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"A commercial aircraft\"；谓语 = \"would have to circle\"；宾语 = \"the globe more than 26,000 times to pr...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"have to circle the globe more than 26\"（后置定语，修饰名词 **have**）",
                  "\"times to produce the same amount of carbon d…\"（后置定语，修饰名词 **times**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「A commercial aircraft would have…」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p3-s3",
            "index": 3,
            "en": "Coastal wetlands also store carbon in marine sediments, keeping it underground — and out of the atmosphere — for thousands of years.",
            "zh": "滨海湿地还把碳储存在海洋沉积物中，使其在地下、也就是在大气之外留存数千年。",
            "wordCount": 20,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "Coastal wetlands also (S) + store (V) + carbon in marine sediments, keeping it… (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Coastal wetlands also",
                  "start": 0,
                  "end": 21,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "store",
                  "start": 22,
                  "end": 27,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "carbon in marine sediments, keeping it underground — and out of the atmosphere — for thousands of years.",
                  "start": 28,
                  "end": 132,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "句中有插入成分，阅读时可先跳过，主句依然完整。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "store",
                    "start": 22,
                    "end": 27,
                    "role": "predicate"
                  },
                  {
                    "text": "keeping",
                    "start": 56,
                    "end": 63,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  }
                ],
                "count": 1,
                "summary": "句中共有 1 个谓语动词（store），意味着有 1 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 54,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 79,
                    "marker": "— + and",
                    "reason": "and 连接并列成分，可在标点处断开"
                  },
                  {
                    "pos": 107,
                    "marker": "— + for",
                    "reason": "for 连接并列成分，可在标点处断开"
                  }
                ],
                "summary": "找到 3 个断点，可以把句子切成 4 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Coastal wetlands also store carbon in marine sediments",
                    "start": 0,
                    "end": 54,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Coastal wetlands also\"；谓语 = \"store\"；宾语 = \"carbon in marine sediments, keeping it...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "keeping it underground",
                    "start": 56,
                    "end": 78,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-2",
                    "text": "and out of the atmosphere",
                    "start": 81,
                    "end": 106,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-3",
                    "text": "for thousands of years.",
                    "start": 109,
                    "end": 132,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "Coastal wetlands also store carbon in marine sediments",
                "summary": "主句是「Coastal wetlands also store carbon in marine…」，其余 3 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Coastal wetlands also\"；谓语 = \"store\"；宾语 = \"carbon in marine sediments, keeping it...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"carbon in marine sediments\"（后置定语，修饰名词 **carbon**）",
                  "\"thousands of years\"（后置定语，修饰名词 **thousands**）",
                  "\"keeping it underground\"（插入语——删掉不影响主句结构，可先跳过）"
                ],
                "summary": "平行动 0 处、修饰成分 3 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「Coastal wetlands also store carb…」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p3-s4",
            "index": 4,
            "en": "This carbon storage capacity of oceans and wetlands is so robust that it has its own name: blue carbon.",
            "zh": "海洋与湿地的这种储碳能力如此突出，以至于它有了专门的名称：蓝碳。",
            "wordCount": 19,
            "analysis": {
              "pattern": "主系表 + 从句",
              "skeleton": "This carbon storage capacity of oceans… (S) + is (V) + so robust (C)",
              "chunks": [
                {
                  "role": "S",
                  "text": "This carbon storage capacity of oceans and wetlands",
                  "start": 0,
                  "end": 51,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "is",
                  "start": 52,
                  "end": 54,
                  "note": "主句谓语"
                },
                {
                  "role": "C",
                  "text": "so robust",
                  "start": 55,
                  "end": 64,
                  "note": "主句的宾语/表语"
                },
                {
                  "role": "Clause",
                  "text": "that it has its own name: blue carbon.",
                  "start": 65,
                  "end": 103,
                  "note": "由 that 引导的从句，修饰前面的名词（定语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "is",
                    "start": 52,
                    "end": 54,
                    "role": "predicate"
                  },
                  {
                    "text": "has",
                    "start": 73,
                    "end": 76,
                    "role": "predicate"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（is / has），意味着有 2 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 55,
                    "marker": "so",
                    "reason": "so 引导目的 / 结果状语从句"
                  },
                  {
                    "pos": 65,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  },
                  {
                    "pos": 89,
                    "marker": ":",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 3 个断点，可以把句子切成 3 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "This carbon storage capacity of oceans and wetlands is",
                    "start": 0,
                    "end": 54,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"This carbon storage capacity of oceans...\"；谓语 = \"is\"；表语 = \"so robust\""
                  },
                  {
                    "id": "seg-1",
                    "text": "so robust that it has its own name",
                    "start": 55,
                    "end": 89,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-2",
                    "text": "blue carbon.",
                    "start": 91,
                    "end": 103,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "This carbon storage capacity of oceans and wetlands is",
                "summary": "主句是「This carbon storage capacity of oceans and w…」，其余 2 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"This carbon storage capacity of oceans...\"；谓语 = \"is\"；表语 = \"so robust\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"that it has its own name: blue carbon.\"（定语从句，修饰名词 **wetlands**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"capacity of oceans and wetlands is so robust…\"（后置定语，修饰名词 **capacity**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「This carbon storage capacity of …」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          }
        ]
      },
      {
        "id": "nasa-coastal-wetlands-blue-carbon-p4",
        "index": 4,
        "sentences": [
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p4-s0",
            "index": 0,
            "en": "“We’re worried about losing that stored carbon,” Poulter said.",
            "zh": "“我们担心失去那些已储存的碳，”波尔特说。",
            "wordCount": 9,
            "analysis": {
              "pattern": "主谓 + 从句",
              "skeleton": "We’re worried about (S) + losing (V)",
              "chunks": [
                {
                  "role": "S",
                  "text": "We’re worried about",
                  "start": 1,
                  "end": 20,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "losing",
                  "start": 21,
                  "end": 27,
                  "note": "主句谓语"
                },
                {
                  "role": "Clause",
                  "text": "that stored carbon,” Poulter said.",
                  "start": 28,
                  "end": 62,
                  "note": "由 that 引导的从句，修饰前面的名词（定语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "said.",
                    "start": 57,
                    "end": 62,
                    "role": "predicate"
                  }
                ],
                "count": 1,
                "summary": "句中共有 1 个谓语动词（said.），意味着有 1 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 28,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  },
                  {
                    "pos": 46,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 2 个断点，可以把句子切成 3 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "“We’re worried about losing",
                    "start": 0,
                    "end": 27,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"We’re worried about\"；谓语 = \"losing\""
                  },
                  {
                    "id": "seg-1",
                    "text": "that stored carbon",
                    "start": 28,
                    "end": 46,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-2",
                    "text": "” Poulter said.",
                    "start": 47,
                    "end": 62,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "“We’re worried about losing",
                "summary": "主句是「“We’re worried about losing」，其余 2 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"We’re worried about\"；谓语 = \"losing\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"that stored carbon,” Poulter said.\"（定语从句，修饰名词 **“We’re**——它给这个名词补充信息，翻译时通常前置成\"……的\"）"
                ],
                "summary": "平行动 0 处、修饰成分 1 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【名词性 / 定语从句】「that stored carbon」——作说明成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「“We’re worried about losing」——这是整句的骨架",
                  "3. 按「说明」关系组装：中文习惯把说明类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p4-s1",
            "index": 1,
            "en": "“But blue carbon also offers tremendous opportunities for climate mitigation if conservation and restoration are properly supported by science.”",
            "zh": "“但如果保护与修复工作能得到科学的适当支撑，蓝碳也为减缓气候变化提供了巨大的机会。”",
            "wordCount": 19,
            "analysis": {
              "pattern": "主系表 + 从句",
              "skeleton": "But blue carbon also (S) + offers (V) + tremendous opportunities for climate m… (C)",
              "chunks": [
                {
                  "role": "S",
                  "text": "But blue carbon also",
                  "start": 1,
                  "end": 21,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "offers",
                  "start": 22,
                  "end": 28,
                  "note": "主句谓语"
                },
                {
                  "role": "C",
                  "text": "tremendous opportunities for climate mitigation",
                  "start": 29,
                  "end": 76,
                  "note": "主句的宾语/表语"
                },
                {
                  "role": "Clause",
                  "text": "if conservation and restoration are properly supported by science.”",
                  "start": 77,
                  "end": 144,
                  "note": "由 if 引导的从句，充当状语（状语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "offers",
                    "start": 22,
                    "end": 28,
                    "role": "predicate"
                  },
                  {
                    "text": "are",
                    "start": 109,
                    "end": 112,
                    "role": "predicate"
                  },
                  {
                    "text": "supported",
                    "start": 122,
                    "end": 131,
                    "role": "predicate"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（offers / are / supported），意味着有 3 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 77,
                    "marker": "if",
                    "reason": "if 引导条件状语从句"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "“But blue carbon also offers tremendous opportunities for climate mitigation",
                    "start": 0,
                    "end": 76,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-1",
                    "text": "if conservation and restoration are properly supported by science.”",
                    "start": 77,
                    "end": 144,
                    "type": "条件状语从句",
                    "isMain": false,
                    "hint": "作条件成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "",
                "summary": "未能确定主句，建议先按标点切分逐段理解。"
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"opportunities for climate mitigation if cons…\"（后置定语，修饰名词 **opportunities**）",
                  "\"supported by science\"（后置定语，修饰名词 **supported**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【条件状语从句】「if conservation and restoration …」——作条件成分，翻译时通常放在主句之前",
                  "2. 按「条件」关系组装：中文习惯把条件类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          }
        ]
      },
      {
        "id": "nasa-coastal-wetlands-blue-carbon-p5",
        "index": 5,
        "sentences": [
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p5-s0",
            "index": 0,
            "en": "The one-meter core samples collected by Lagomasino will be used to identify historic rates of blue carbon development in mangrove forests and to evaluate how rates of carbon storage respond to specific environmental pressures, like sea level rise or the increasing frequency of tropical cyclones.",
            "zh": "拉戈马西诺采集的一米岩芯样本将被用来确定红树林中蓝碳形成的历史速率，并评估碳储存速率如何回应特定环境压力，例如海平面上升或热带气旋日益频繁。",
            "wordCount": 45,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "The one-meter core samples (S) + collected (V) + by Lagomasino will be used to identify… (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "The one-meter core samples",
                  "start": 0,
                  "end": 26,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "collected",
                  "start": 27,
                  "end": 36,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "by Lagomasino will be used to identify historic rates of blue carbon development in mangrove forests and to evaluate how rates of carbon storage respond to specific environmental pressures, like sea level rise or the increasing frequency of tropical cyclones.",
                  "start": 37,
                  "end": 296,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-182-0",
                "text": "respond to",
                "zh": "对…作出反应",
                "kind": "短语动词"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "collected",
                    "start": 27,
                    "end": 36,
                    "role": "predicate"
                  },
                  {
                    "text": "will be used to",
                    "start": 51,
                    "end": 66,
                    "role": "predicate"
                  },
                  {
                    "text": "identify",
                    "start": 67,
                    "end": 75,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  },
                  {
                    "text": "evaluate",
                    "start": 145,
                    "end": 153,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  },
                  {
                    "text": "respond",
                    "start": 182,
                    "end": 189,
                    "role": "predicate"
                  },
                  {
                    "text": "like",
                    "start": 227,
                    "end": 231,
                    "role": "preposition",
                    "note": "是介词，不是动词"
                  },
                  {
                    "text": "cyclones.",
                    "start": 287,
                    "end": 296,
                    "role": "predicate"
                  }
                ],
                "count": 4,
                "summary": "句中共有 4 个谓语动词（collected / will be used to / respond / cyclones.），意味着有 4 件事要译；另有 3 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 225,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "The one-meter core samples collected by Lagomasino will be used to identify historic rates of blue carbon development in mangrove forests and to evaluate how rates of carbon storage respond to specific environmental pressures",
                    "start": 0,
                    "end": 225,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"The one-meter core samples\"；谓语 = \"collected\"；宾语 = \"by Lagomasino will be used to identify...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "like sea level rise or the increasing frequency of tropical cyclones.",
                    "start": 227,
                    "end": 296,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "The one-meter core samples collected by Lagomasino will be used to identify historic rates of blue carbon development in mangrove forests and to evaluate how rates of carbon storage respond to specific environmental pressures",
                "summary": "主句是「The one-meter core samples collected by Lago…」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"The one-meter core samples\"；谓语 = \"collected\"；宾语 = \"by Lagomasino will be used to identify...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"collected by Lagomasino will be used to iden…\"（后置定语，修饰名词 **collected**）",
                  "\"rates of blue carbon development in mangrove…\"（后置定语，修饰名词 **rates**）",
                  "\"rates of carbon storage respond to specific …\"（后置定语，修饰名词 **rates**）",
                  "\"frequency of tropical cyclones\"（后置定语，修饰名词 **frequency**）"
                ],
                "summary": "平行动 0 处、修饰成分 4 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「The one-meter core samples colle…」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          }
        ]
      },
      {
        "id": "nasa-coastal-wetlands-blue-carbon-p6",
        "index": 6,
        "sentences": [
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p6-s0",
            "index": 0,
            "en": "Early findings from space-based flux data confirm that, in addition to acting as a sink of carbon dioxide, tropical wetlands are a significant source of methane — a greenhouse gas that traps heat roughly 80 times more efficiently than carbon dioxide.",
            "zh": "基于太空通量数据的早期发现证实，热带湿地除了作为二氧化碳的“汇”之外，还是甲烷的重要来源——而甲烷这种温室气体截留热量的效率约为二氧化碳的 80 倍。",
            "wordCount": 39,
            "analysis": {
              "pattern": "主谓 + 2 个从句（多重复合句）",
              "skeleton": "Early findings from space-based flux d… (S) + confirm (V)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Early findings from space-based flux data",
                  "start": 0,
                  "end": 41,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "confirm",
                  "start": 42,
                  "end": 49,
                  "note": "主句谓语"
                },
                {
                  "role": "Clause",
                  "text": "that, in addition to acting",
                  "start": 50,
                  "end": 77,
                  "note": "由 that, 引导的从句，修饰前面的名词（定语从句）"
                },
                {
                  "role": "Clause",
                  "text": "as a sink of carbon dioxide, tropical wetlands are a significant source of methane — a greenhouse gas that traps heat roughly 80 times more efficiently than carbon dioxide.",
                  "start": 78,
                  "end": 250,
                  "note": "由 as 引导的从句，充当状语（状语从句）"
                }
              ],
              "notes": [
                "本句含 2 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句中有插入成分，阅读时可先跳过，主句依然完整。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-56-0",
                "text": "in addition to",
                "zh": "除…之外还",
                "kind": "介词框架"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "confirm",
                    "start": 42,
                    "end": 49,
                    "role": "predicate"
                  },
                  {
                    "text": "acting",
                    "start": 71,
                    "end": 77,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  },
                  {
                    "text": "are",
                    "start": 125,
                    "end": 128,
                    "role": "predicate"
                  },
                  {
                    "text": "traps heat",
                    "start": 185,
                    "end": 195,
                    "role": "predicate"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（confirm / are / traps heat），意味着有 3 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 50,
                    "marker": "that,",
                    "reason": "that, 引导名词性 / 定语从句"
                  },
                  {
                    "pos": 54,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 78,
                    "marker": "as",
                    "reason": "as 引导时间/原因状语从句"
                  },
                  {
                    "pos": 105,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 161,
                    "marker": "—",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 180,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  }
                ],
                "summary": "找到 6 个断点，可以把句子切成 6 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Early findings from space-based flux data confirm",
                    "start": 0,
                    "end": 49,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Early findings from space-based flux d...\"；谓语 = \"confirm\""
                  },
                  {
                    "id": "seg-1",
                    "text": "that, in addition to acting",
                    "start": 50,
                    "end": 77,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-2",
                    "text": "as a sink of carbon dioxide",
                    "start": 78,
                    "end": 105,
                    "type": "时间/原因状语从句",
                    "isMain": false,
                    "hint": "作时间或原因成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-3",
                    "text": "tropical wetlands are a significant source of methane",
                    "start": 107,
                    "end": 160,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-4",
                    "text": "a greenhouse gas",
                    "start": 163,
                    "end": 179,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-5",
                    "text": "that traps heat roughly 80 times more efficiently than carbon dioxide.",
                    "start": 180,
                    "end": 250,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "Early findings from space-based flux data confirm",
                "summary": "主句是「Early findings from space-based flux data co…」，其余 5 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Early findings from space-based flux d...\"；谓语 = \"confirm\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"that, in addition to acting as a sink of car…\"（定语从句，修饰名词 **data**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"that traps heat roughly 80 times more effici…\"（定语从句，修饰名词 **gas**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"findings from space-based flux data confirm …\"（后置定语，修饰名词 **findings**）",
                  "\"source of methane — a greenhouse gas that tr…\"（后置定语，修饰名词 **source**）"
                ],
                "summary": "平行动 0 处、修饰成分 4 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【名词性 / 定语从句】「that, in addition to acting」——作说明成分，翻译时通常放在主句之前",
                  "2. 先译【时间/原因状语从句】「as a sink of carbon dioxide」——作时间或原因成分，翻译时通常放在主句之前",
                  "3. 先译【名词性 / 定语从句】「that traps heat roughly 80 times…」——作说明成分，翻译时通常放在主句之前",
                  "4. 再译【主句】「Early findings from space-based …」——这是整句的骨架",
                  "5. 按「说明」关系组装：中文习惯把说明类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 3 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p6-s1",
            "index": 1,
            "en": "In fact, researchers estimate that Florida’s entire wetland expanse produces enough methane to offset the benefits of wetland carbon removal by about 5%.",
            "zh": "事实上，研究人员估计，佛罗里达全部湿地产生的甲烷，足以抵消湿地固碳所带来的效益约 5%。",
            "wordCount": 22,
            "analysis": {
              "pattern": "主谓 + 从句",
              "skeleton": "In fact, researchers (S) + estimate (V)",
              "chunks": [
                {
                  "role": "S",
                  "text": "In fact, researchers",
                  "start": 0,
                  "end": 20,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "estimate",
                  "start": 21,
                  "end": 29,
                  "note": "主句谓语"
                },
                {
                  "role": "Clause",
                  "text": "that Florida’s entire wetland expanse produces enough methane to offset the benefits of wetland carbon removal by about 5%.",
                  "start": 30,
                  "end": 153,
                  "note": "由 that 引导的从句，修饰前面的名词（定语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "estimate",
                    "start": 21,
                    "end": 29,
                    "role": "predicate"
                  },
                  {
                    "text": "produces",
                    "start": 68,
                    "end": 76,
                    "role": "predicate"
                  },
                  {
                    "text": "offset",
                    "start": 95,
                    "end": 101,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（estimate / produces），意味着有 2 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 7,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 30,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  }
                ],
                "summary": "找到 2 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "In fact, researchers estimate",
                    "start": 0,
                    "end": 29,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"In fact, researchers\"；谓语 = \"estimate\""
                  },
                  {
                    "id": "seg-1",
                    "text": "that Florida’s entire wetland expanse produces enough methane to offset the benefits of wetland carbon removal by about 5%.",
                    "start": 30,
                    "end": 153,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "In fact, researchers estimate",
                "summary": "主句是「In fact, researchers estimate」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"In fact, researchers\"；谓语 = \"estimate\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"that Florida’s entire wetland expanse produc…\"（定语从句，修饰名词 **researchers**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"In fact,\"（句首状语，交代背景或前提——中文习惯先译它）",
                  "\"methane to offset the benefits of wetland ca…\"（后置定语，修饰名词 **methane**）"
                ],
                "summary": "平行动 0 处、修饰成分 3 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【名词性 / 定语从句】「that Florida’s entire wetland ex…」——作说明成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「In fact, researchers estimate」——这是整句的骨架",
                  "3. 注意逻辑词 **in fact**：递进（事实上）——译文要把这层关系译出来，否则会读成平铺直叙。",
                  "4. 按「说明」关系组装：中文习惯把说明类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          }
        ]
      },
      {
        "id": "nasa-coastal-wetlands-blue-carbon-p7",
        "index": 7,
        "heading": "Everglades peat contains history of captured carbon",
        "sentences": [
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p7-s0",
            "index": 0,
            "en": "During his most recent fieldwork deployment, Lagomasino used a small skiff to taxi from one research site to the next; many parts of the Everglades are virtually unreachable on foot.",
            "zh": "在最近一次野外作业中，拉戈马西诺乘一艘小艇在考察点之间往返；大沼泽地的许多区域几乎无法步行抵达。",
            "wordCount": 30,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "During his most recent fieldwork deplo… (S) + used (V) + a small skiff to taxi from one researc… (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "During his most recent fieldwork deployment, Lagomasino",
                  "start": 0,
                  "end": 55,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "used",
                  "start": 56,
                  "end": 60,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "a small skiff to taxi from one research site to the next; many parts of the Everglades are virtually unreachable on foot.",
                  "start": 61,
                  "end": 182,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "used",
                    "start": 56,
                    "end": 60,
                    "role": "predicate"
                  },
                  {
                    "text": "are",
                    "start": 148,
                    "end": 151,
                    "role": "predicate"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（used / are），意味着有 2 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 43,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 117,
                    "marker": ";",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 2 个断点，可以把句子切成 3 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "During his most recent fieldwork deployment",
                    "start": 0,
                    "end": 43,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"During his most recent fieldwork deplo...\"；谓语 = \"used\"；宾语 = \"a small skiff to taxi from one researc...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "Lagomasino used a small skiff to taxi from one research site to the next",
                    "start": 45,
                    "end": 117,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-2",
                    "text": "many parts of the Everglades are virtually unreachable on foot.",
                    "start": 119,
                    "end": 182,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "During his most recent fieldwork deployment",
                "summary": "主句是「During his most recent fieldwork deployment」，其余 2 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"During his most recent fieldwork deplo...\"；谓语 = \"used\"；宾语 = \"a small skiff to taxi from one researc...\""
              },
              "step4": {
                "parallels": [
                  {
                    "kind": "from … to … 平行",
                    "members": [
                      "one research site",
                      "the next"
                    ],
                    "note": "范围的两端，形式通常一致"
                  }
                ],
                "modifiers": [
                  "\"skiff to taxi from one research site to the …\"（后置定语，修饰名词 **skiff**）",
                  "\"parts of the Everglades are virtually unreac…\"（后置定语，修饰名词 **parts**）"
                ],
                "summary": "平行动 1 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「During his most recent fieldwork…」——这是整句的骨架",
                  "2. 处理平行结构：one research site ／ the next——平行成分逐一对译，不要打乱顺序",
                  "3. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p7-s1",
            "index": 1,
            "en": "At each site, he opened a broad, black case and removed a metallic peat auger, which resembles a giant letter opener.",
            "zh": "每到一处，他就打开一个宽大的黑色箱子，取出一支金属泥炭取样钻——外形像一把巨大的拆信刀。",
            "wordCount": 21,
            "analysis": {
              "pattern": "主系表 + 非限定性定语从句",
              "skeleton": "At each site, he (S) + opened (V) + a broad, black case and removed a meta… (C)",
              "chunks": [
                {
                  "role": "S",
                  "text": "At each site, he",
                  "start": 0,
                  "end": 16,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "opened",
                  "start": 17,
                  "end": 23,
                  "note": "主句谓语"
                },
                {
                  "role": "C",
                  "text": "a broad, black case and removed a metallic peat auger,",
                  "start": 24,
                  "end": 78,
                  "note": "主句的宾语/表语"
                },
                {
                  "role": "Clause",
                  "text": "which resembles a giant letter opener.",
                  "start": 79,
                  "end": 117,
                  "note": "由 which 引导的从句，修饰前面的名词（定语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句中有插入成分，阅读时可先跳过，主句依然完整。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "opened",
                    "start": 17,
                    "end": 23,
                    "role": "predicate"
                  },
                  {
                    "text": "removed",
                    "start": 48,
                    "end": 55,
                    "role": "predicate"
                  },
                  {
                    "text": "resembles",
                    "start": 85,
                    "end": 94,
                    "role": "predicate"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（opened / removed / resembles），意味着有 3 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 12,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 31,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 77,
                    "marker": ", + which",
                    "reason": "which 引导定语从句，此处必须断开"
                  }
                ],
                "summary": "找到 3 个断点，可以把句子切成 4 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "At each site",
                    "start": 0,
                    "end": 12,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"At each site, he\"；谓语 = \"opened\"；表语 = \"a broad, black case and removed a meta...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "he opened a broad",
                    "start": 14,
                    "end": 31,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-2",
                    "text": "black case and removed a metallic peat auger",
                    "start": 33,
                    "end": 77,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-3",
                    "text": "which resembles a giant letter opener.",
                    "start": 79,
                    "end": 117,
                    "type": "非限定性定语从句",
                    "isMain": false,
                    "hint": "对前面的名词做补充说明，翻译时可另起一小句"
                  }
                ],
                "mainText": "At each site",
                "summary": "主句是「At each site」，其余 3 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"At each site, he\"；谓语 = \"opened\"；表语 = \"a broad, black case and removed a meta...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"which resembles a giant letter opener.\"（定语从句，修饰名词 **auger,**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"At each site,\"（句首状语，交代背景或前提——中文习惯先译它）",
                  "\"he opened a broad\"（插入语——删掉不影响主句结构，可先跳过）"
                ],
                "summary": "平行动 0 处、修饰成分 3 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【非限定性定语从句】「which resembles a giant letter o…」——对前面的名词做补充说明，翻译时可另起一小句",
                  "2. 再译【主句】「At each site」——这是整句的骨架",
                  "3. 按「修饰」关系组装：中文习惯把修饰类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p7-s2",
            "index": 2,
            "en": "The instrument is designed to extract core samples from soft soils.",
            "zh": "该仪器是为从松软土壤中提取岩芯样本而设计的。",
            "wordCount": 11,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "The instrument (S) + is designed (V) + to extract core samples from soft soils. (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "The instrument",
                  "start": 0,
                  "end": 14,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "is designed",
                  "start": 15,
                  "end": 26,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "to extract core samples from soft soils.",
                  "start": 27,
                  "end": 67,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "is designed",
                    "start": 15,
                    "end": 26,
                    "role": "predicate"
                  },
                  {
                    "text": "extract",
                    "start": 30,
                    "end": 37,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  }
                ],
                "count": 1,
                "summary": "句中共有 1 个谓语动词（is designed），意味着有 1 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [],
                "summary": "句中无明显断点，结构较简单。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "The instrument is designed to extract core samples from soft soils.",
                    "start": 0,
                    "end": 67,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"The instrument\"；谓语 = \"is designed\"；宾语 = \"to extract core samples from soft soils.\""
                  }
                ],
                "mainText": "The instrument is designed to extract core samples from soft soils.",
                "summary": "主句是「The instrument is designed to extract core s…」，其余 0 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"The instrument\"；谓语 = \"is designed\"；宾语 = \"to extract core samples from soft soils.\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"designed to extract core samples from soft s…\"（后置定语，修饰名词 **designed**）"
                ],
                "summary": "平行动 0 处、修饰成分 1 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「The instrument is designed to ex…」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p7-s3",
            "index": 3,
            "en": "Everglades peat — which is composed almost entirely of the carbon-rich, partially decomposed roots, stems, and leaves of mangroves — offers a perfect study subject.",
            "zh": "大沼泽地的泥炭几乎完全由红树林富含碳的、部分分解的根、茎和叶构成，因此是极理想的研究对象。",
            "wordCount": 23,
            "analysis": {
              "pattern": "结构待拆（简单句）",
              "skeleton": "Everglades peat — which is composed al… (S)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Everglades peat — which is composed almost entirely of the carbon-rich, partially decomposed roots, stems, and leaves of mangroves — offers a perfect study subject.",
                  "start": 0,
                  "end": 164
                }
              ],
              "notes": [
                "句中有插入成分，阅读时可先跳过，主句依然完整。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "is composed",
                    "start": 24,
                    "end": 35,
                    "role": "predicate"
                  },
                  {
                    "text": "decomposed",
                    "start": 82,
                    "end": 92,
                    "role": "predicate"
                  },
                  {
                    "text": "stems,",
                    "start": 100,
                    "end": 106,
                    "role": "predicate"
                  },
                  {
                    "text": "offers",
                    "start": 133,
                    "end": 139,
                    "role": "predicate"
                  }
                ],
                "count": 4,
                "summary": "句中共有 4 个谓语动词（is composed / decomposed / stems, / offers），意味着有 4 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 16,
                    "marker": "— + which",
                    "reason": "which 引导定语从句，此处必须断开"
                  },
                  {
                    "pos": 70,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 98,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 105,
                    "marker": ", + and",
                    "reason": "and 连接并列成分，可在标点处断开"
                  },
                  {
                    "pos": 131,
                    "marker": "—",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 5 个断点，可以把句子切成 4 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Everglades peat — which is composed almost entirely of the carbon-rich",
                    "start": 0,
                    "end": 70,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Everglades peat — which is composed al...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "partially decomposed roots",
                    "start": 72,
                    "end": 98,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-2",
                    "text": "stems, and leaves of mangroves",
                    "start": 100,
                    "end": 130,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-3",
                    "text": "offers a perfect study subject.",
                    "start": 133,
                    "end": 164,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "Everglades peat — which is composed almost entirely of the carbon-rich",
                "summary": "主句是「Everglades peat — which is composed almost e…」，其余 3 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Everglades peat — which is composed al...\""
              },
              "step4": {
                "parallels": [
                  {
                    "kind": "三项以上并列",
                    "members": [
                      "partially decomposed roots",
                      "stems",
                      "leaves of mangroves — offers a perfect st"
                    ],
                    "note": "并列的几项词性相同、形式一致，可逐个对应翻译"
                  }
                ],
                "modifiers": [
                  "\"which is composed almost entirely of the car…\"（定语从句，修饰名词 **peat —**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"leaves of mangroves — offers a perfect study…\"（后置定语，修饰名词 **leaves**）",
                  "\"stems\"（插入语——删掉不影响主句结构，可先跳过）"
                ],
                "summary": "平行动 1 处、修饰成分 3 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「Everglades peat — which is compo…」——这是整句的骨架",
                  "2. 处理平行结构：partially decomposed roots ／ stems ／ leaves of mangroves — offers a perfect st——平行成分逐一对译，不要打乱顺序",
                  "3. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p7-s4",
            "index": 4,
            "en": "Lagomasino plunged the auger into the soil, using his body weight to push the instrument into the ground.",
            "zh": "拉戈马西诺把取样钻插入土中，用身体重量将其压入地下。",
            "wordCount": 18,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "Lagomasino (S) + plunged (V) + the auger into the soil, using his bod… (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Lagomasino",
                  "start": 0,
                  "end": 10,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "plunged",
                  "start": 11,
                  "end": 18,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "the auger into the soil, using his body weight to push the instrument into the ground.",
                  "start": 19,
                  "end": 105,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "plunged",
                    "start": 11,
                    "end": 18,
                    "role": "predicate"
                  },
                  {
                    "text": "using",
                    "start": 44,
                    "end": 49,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  },
                  {
                    "text": "push",
                    "start": 69,
                    "end": 73,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  }
                ],
                "count": 1,
                "summary": "句中共有 1 个谓语动词（plunged），意味着有 1 件事要译；另有 2 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 42,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Lagomasino plunged the auger into the soil",
                    "start": 0,
                    "end": 42,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Lagomasino\"；谓语 = \"plunged\"；宾语 = \"the auger into the soil, using his bod...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "using his body weight to push the instrument into the ground.",
                    "start": 44,
                    "end": 105,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "Lagomasino plunged the auger into the soil",
                "summary": "主句是「Lagomasino plunged the auger into the soil」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Lagomasino\"；谓语 = \"plunged\"；宾语 = \"the auger into the soil, using his bod...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"weight to push the instrument into the ground\"（后置定语，修饰名词 **weight**）"
                ],
                "summary": "平行动 0 处、修饰成分 1 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「Lagomasino plunged the auger int…」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p7-s5",
            "index": 5,
            "en": "Once the sample was secured, he freed the tool from the Earth, presenting a half-cylinder of soil.",
            "zh": "样本固定后，他把工具从土中拔出，取出一段半圆柱形的土壤。",
            "wordCount": 17,
            "analysis": {
              "pattern": "主谓宾 + 从句",
              "skeleton": "he (S) + freed (V) + the tool from the Earth, presenting a … (O)",
              "chunks": [
                {
                  "role": "Clause",
                  "text": "Once the sample was secured,",
                  "start": 0,
                  "end": 28,
                  "note": "句首状语从句：先交代条件/让步/时间背景，主句在后面"
                },
                {
                  "role": "S",
                  "text": "he",
                  "start": 29,
                  "end": 31,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "freed",
                  "start": 32,
                  "end": 37,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "the tool from the Earth, presenting a half-cylinder of soil.",
                  "start": 38,
                  "end": 98,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句中有插入成分，阅读时可先跳过，主句依然完整。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "was secured,",
                    "start": 16,
                    "end": 28,
                    "role": "predicate"
                  },
                  {
                    "text": "freed",
                    "start": 32,
                    "end": 37,
                    "role": "predicate"
                  },
                  {
                    "text": "presenting",
                    "start": 63,
                    "end": 73,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（was secured, / freed），意味着有 2 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 27,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 61,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 2 个断点，可以把句子切成 3 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Once the sample was secured",
                    "start": 0,
                    "end": 27,
                    "type": "时间状语从句",
                    "isMain": false,
                    "hint": "作时间成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-1",
                    "text": "he freed the tool from the Earth",
                    "start": 29,
                    "end": 61,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"he\"；谓语 = \"freed\"；宾语 = \"the tool from the Earth, presenting a ...\""
                  },
                  {
                    "id": "seg-2",
                    "text": "presenting a half-cylinder of soil.",
                    "start": 63,
                    "end": 98,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "he freed the tool from the Earth",
                "summary": "主句是「he freed the tool from the Earth」，其余 2 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"he\"；谓语 = \"freed\"；宾语 = \"the tool from the Earth, presenting a ...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"Once the sample was secured,\"（句首状语，交代背景或前提——中文习惯先译它）",
                  "\"tool from the Earth\"（后置定语，修饰名词 **tool**）",
                  "\"cylinder of soil\"（后置定语，修饰名词 **cylinder**）",
                  "\"he freed the tool from the Earth\"（插入语——删掉不影响主句结构，可先跳过）"
                ],
                "summary": "平行动 0 处、修饰成分 4 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【时间状语从句】「Once the sample was secured」——作时间成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「he freed the tool from the Earth」——这是整句的骨架",
                  "3. 按「时间」关系组装：中文习惯把时间类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p7-s6",
            "index": 6,
            "en": "Each sample was sealed and shipped back to the lab — where they are sliced horizontally into flat discs and analyzed for their age and carbon content.",
            "zh": "每个样本都被密封并运回实验室——在那里被水平切成薄片，用以分析其年代和碳含量。",
            "wordCount": 26,
            "analysis": {
              "pattern": "主系表 + 从句",
              "skeleton": "Each sample (S) + was sealed (V) + and shipped back to the lab — (C)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Each sample",
                  "start": 0,
                  "end": 11,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "was sealed",
                  "start": 12,
                  "end": 22,
                  "note": "主句谓语"
                },
                {
                  "role": "C",
                  "text": "and shipped back to the lab —",
                  "start": 23,
                  "end": 52,
                  "note": "主句的宾语/表语"
                },
                {
                  "role": "Clause",
                  "text": "where they are sliced horizontally into flat discs and analyzed for their age and carbon content.",
                  "start": 53,
                  "end": 150,
                  "note": "由 where 引导的从句，修饰前面的名词（定语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "was sealed",
                    "start": 12,
                    "end": 22,
                    "role": "predicate"
                  },
                  {
                    "text": "shipped",
                    "start": 27,
                    "end": 34,
                    "role": "predicate"
                  },
                  {
                    "text": "are sliced",
                    "start": 64,
                    "end": 74,
                    "role": "predicate"
                  },
                  {
                    "text": "analyzed",
                    "start": 108,
                    "end": 116,
                    "role": "predicate"
                  }
                ],
                "count": 4,
                "summary": "句中共有 4 个谓语动词（was sealed / shipped / are sliced / analyzed），意味着有 4 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 51,
                    "marker": "— + where",
                    "reason": "where 引导定语从句，此处必须断开"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Each sample was sealed and shipped back to the lab",
                    "start": 0,
                    "end": 50,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Each sample\"；谓语 = \"was sealed\"；表语 = \"and shipped back to the lab —\""
                  },
                  {
                    "id": "seg-1",
                    "text": "where they are sliced horizontally into flat discs and analyzed for their age and carbon content.",
                    "start": 53,
                    "end": 150,
                    "type": "定语从句",
                    "isMain": false,
                    "hint": "作修饰成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "Each sample was sealed and shipped back to the lab",
                "summary": "主句是「Each sample was sealed and shipped back to t…」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Each sample\"；谓语 = \"was sealed\"；表语 = \"and shipped back to the lab —\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"where they are sliced horizontally into flat…\"（定语从句，修饰名词 **lab —**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"back to the lab — where they are sliced hori…\"（后置定语，修饰名词 **back**）",
                  "\"analyzed for their age and carbon content\"（后置定语，修饰名词 **analyzed**）"
                ],
                "summary": "平行动 0 处、修饰成分 3 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【定语从句】「where they are sliced horizontal…」——作修饰成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「Each sample was sealed and shipp…」——这是整句的骨架",
                  "3. 按「修饰」关系组装：中文习惯把修饰类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p7-s7",
            "index": 7,
            "en": "Everglades peat forms quickly.",
            "zh": "大沼泽地的泥炭形成得很快。",
            "wordCount": 4,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "Everglades peat (S) + forms (V) + quickly. (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Everglades peat",
                  "start": 0,
                  "end": 15,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "forms",
                  "start": 16,
                  "end": 21,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "quickly.",
                  "start": 22,
                  "end": 30,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "forms",
                    "start": 16,
                    "end": 21,
                    "role": "predicate"
                  }
                ],
                "count": 1,
                "summary": "句中共有 1 个谓语动词（forms），意味着有 1 件事要译。"
              },
              "step2": {
                "breaks": [],
                "summary": "句中无明显断点，结构较简单。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Everglades peat forms quickly.",
                    "start": 0,
                    "end": 30,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Everglades peat\"；谓语 = \"forms\"；宾语 = \"quickly.\""
                  }
                ],
                "mainText": "Everglades peat forms quickly.",
                "summary": "主句是「Everglades peat forms quickly.」，其余 0 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Everglades peat\"；谓语 = \"forms\"；宾语 = \"quickly.\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [],
                "summary": "本句没有明显的平行结构或插入成分。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「Everglades peat forms quickly.」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p7-s8",
            "index": 8,
            "en": "In Florida’s mangrove forests, around 2 to 10 millimeters of soil are added to the forest floor each year, building up over time like sand filling an hourglass.",
            "zh": "在佛罗里达的红树林中，林地每年约新增 2 至 10 毫米土壤，日积月累，如同沙子填满沙漏。",
            "wordCount": 26,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "In Florida’s mangrove forests, around … (S) + are added (V) + to the forest floor each year, buildin… (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "In Florida’s mangrove forests, around 2 to 10 millimeters of soil",
                  "start": 0,
                  "end": 65,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "are added",
                  "start": 66,
                  "end": 75,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "to the forest floor each year, building up over time like sand filling an hourglass.",
                  "start": 76,
                  "end": 160,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "句中有插入成分，阅读时可先跳过，主句依然完整。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-107-0",
                "text": "building up",
                "zh": "逐渐积累；增强",
                "kind": "短语动词"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "are added",
                    "start": 66,
                    "end": 75,
                    "role": "predicate"
                  },
                  {
                    "text": "building",
                    "start": 107,
                    "end": 115,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  },
                  {
                    "text": "like",
                    "start": 129,
                    "end": 133,
                    "role": "preposition",
                    "note": "是介词，不是动词"
                  }
                ],
                "count": 1,
                "summary": "句中共有 1 个谓语动词（are added），意味着有 1 件事要译；另有 2 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 29,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 105,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 2 个断点，可以把句子切成 3 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "In Florida’s mangrove forests",
                    "start": 0,
                    "end": 29,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"In Florida’s mangrove forests, around ...\"；谓语 = \"are added\"；宾语 = \"to the forest floor each year, buildin...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "around 2 to 10 millimeters of soil are added to the forest floor each year",
                    "start": 31,
                    "end": 105,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-2",
                    "text": "building up over time like sand filling an hourglass.",
                    "start": 107,
                    "end": 160,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "In Florida’s mangrove forests",
                "summary": "主句是「In Florida’s mangrove forests」，其余 2 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"In Florida’s mangrove forests, around ...\"；谓语 = \"are added\"；宾语 = \"to the forest floor each year, buildin...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"In Florida’s mangrove forests,\"（句首状语，交代背景或前提——中文习惯先译它）",
                  "\"millimeters of soil are added to the forest …\"（后置定语，修饰名词 **millimeters**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「In Florida’s mangrove forests」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p7-s9",
            "index": 9,
            "en": "Much like an ice core, sediment cores offer a window into Earth’s past.",
            "zh": "与冰芯很相似，沉积物岩芯为我们打开了一扇观察地球过去的窗口。",
            "wordCount": 13,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "Much (S) + like (V) + an ice core, sediment cores offer a wi… (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Much",
                  "start": 0,
                  "end": 4,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "like",
                  "start": 5,
                  "end": 9,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "an ice core, sediment cores offer a window into Earth’s past.",
                  "start": 10,
                  "end": 71,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "like",
                    "start": 5,
                    "end": 9,
                    "role": "preposition",
                    "note": "是介词，不是动词"
                  },
                  {
                    "text": "offer",
                    "start": 38,
                    "end": 43,
                    "role": "predicate"
                  },
                  {
                    "text": "past.",
                    "start": 66,
                    "end": 71,
                    "role": "preposition",
                    "note": "是介词，不是动词"
                  }
                ],
                "count": 1,
                "summary": "句中共有 1 个谓语动词（offer），意味着有 1 件事要译；另有 2 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 21,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Much like an ice core",
                    "start": 0,
                    "end": 21,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Much\"；谓语 = \"like\"；宾语 = \"an ice core, sediment cores offer a wi...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "sediment cores offer a window into Earth’s past.",
                    "start": 23,
                    "end": 71,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "Much like an ice core",
                "summary": "主句是「Much like an ice core」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Much\"；谓语 = \"like\"；宾语 = \"an ice core, sediment cores offer a wi...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"Much like an ice core,\"（句首状语，交代背景或前提——中文习惯先译它）"
                ],
                "summary": "平行动 0 处、修饰成分 1 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「Much like an ice core」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p7-s10",
            "index": 10,
            "en": "The deeper the core, the further into the past one can see.",
            "zh": "岩芯越深，能看到的年代就越久远。",
            "wordCount": 12,
            "analysis": {
              "pattern": "主谓（简单句）",
              "skeleton": "The deeper the core, the further into … (S) + can see. (V)",
              "chunks": [
                {
                  "role": "S",
                  "text": "The deeper the core, the further into the past one",
                  "start": 0,
                  "end": 50,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "can see.",
                  "start": 51,
                  "end": 59,
                  "note": "主句谓语"
                }
              ],
              "notes": [],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "past",
                    "start": 42,
                    "end": 46,
                    "role": "preposition",
                    "note": "是介词，不是动词"
                  },
                  {
                    "text": "can see.",
                    "start": 51,
                    "end": 59,
                    "role": "predicate"
                  }
                ],
                "count": 1,
                "summary": "句中共有 1 个谓语动词（can see.），意味着有 1 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 19,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "The deeper the core",
                    "start": 0,
                    "end": 19,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"The deeper the core, the further into ...\"；谓语 = \"can see.\""
                  },
                  {
                    "id": "seg-1",
                    "text": "the further into the past one can see.",
                    "start": 21,
                    "end": 59,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "The deeper the core",
                "summary": "主句是「The deeper the core」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"The deeper the core, the further into ...\"；谓语 = \"can see.\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [],
                "summary": "本句没有明显的平行结构或插入成分。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「The deeper the core」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p7-s11",
            "index": 11,
            "en": "By looking closely at the contents of the soil, researchers can uncover information about the climate conditions from the time the soil formed.",
            "zh": "通过仔细观察土壤的成分，研究人员可以揭示土壤形成时期的气候状况。",
            "wordCount": 23,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "By (S) + looking (V) + closely at the contents of the soil, r… (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "By",
                  "start": 0,
                  "end": 2,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "looking",
                  "start": 3,
                  "end": 10,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "closely at the contents of the soil, researchers can uncover information about the climate conditions from the time the soil formed.",
                  "start": 11,
                  "end": 143,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "looking",
                    "start": 3,
                    "end": 10,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  },
                  {
                    "text": "can uncover",
                    "start": 60,
                    "end": 71,
                    "role": "predicate"
                  },
                  {
                    "text": "formed.",
                    "start": 136,
                    "end": 143,
                    "role": "predicate"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（can uncover / formed.），意味着有 2 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 46,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "By looking closely at the contents of the soil",
                    "start": 0,
                    "end": 46,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"By\"；谓语 = \"looking\"；宾语 = \"closely at the contents of the soil, r...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "researchers can uncover information about the climate conditions from the time the soil formed.",
                    "start": 48,
                    "end": 143,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "By looking closely at the contents of the soil",
                "summary": "主句是「By looking closely at the contents of the soil」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"By\"；谓语 = \"looking\"；宾语 = \"closely at the contents of the soil, r...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"contents of the soil\"（后置定语，修饰名词 **contents**）",
                  "\"conditions from the time the soil formed\"（后置定语，修饰名词 **conditions**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「By looking closely at the conten…」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          }
        ]
      },
      {
        "id": "nasa-coastal-wetlands-blue-carbon-p8",
        "index": 8,
        "sentences": [
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p8-s0",
            "index": 0,
            "en": "In some parts of the Everglades, soil deposits can reach depths of up to 3 meters (10 feet), where one meter might represent close to 100 years of peat accumulation, Lagomasino said.",
            "zh": "拉戈马西诺说，在大沼泽地的某些区域，沉积层厚度可达 3 米，其中一米可能代表近 100 年的泥炭积累。",
            "wordCount": 29,
            "analysis": {
              "pattern": "主系表 + 从句",
              "skeleton": "In some parts of the Everglades, soil … (S) + can reach (V) + depths of up to 3 meters (10 feet), (C)",
              "chunks": [
                {
                  "role": "S",
                  "text": "In some parts of the Everglades, soil deposits",
                  "start": 0,
                  "end": 46,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "can reach",
                  "start": 47,
                  "end": 56,
                  "note": "主句谓语"
                },
                {
                  "role": "C",
                  "text": "depths of up to 3 meters (10 feet),",
                  "start": 57,
                  "end": 92,
                  "note": "主句的宾语/表语"
                },
                {
                  "role": "Clause",
                  "text": "where one meter might represent close to 100 years of peat accumulation, Lagomasino said.",
                  "start": 93,
                  "end": 182,
                  "note": "由 where 引导的从句，修饰前面的名词（定语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句中有插入成分，阅读时可先跳过，主句依然完整。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-67-0",
                "text": "up to",
                "zh": "多达；直到",
                "kind": "介词框架"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "can reach",
                    "start": 47,
                    "end": 56,
                    "role": "predicate"
                  },
                  {
                    "text": "might represent",
                    "start": 109,
                    "end": 124,
                    "role": "predicate"
                  },
                  {
                    "text": "said.",
                    "start": 177,
                    "end": 182,
                    "role": "predicate"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（can reach / might represent / said.），意味着有 3 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 31,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 91,
                    "marker": ", + where",
                    "reason": "where 引导定语从句，此处必须断开"
                  },
                  {
                    "pos": 164,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 3 个断点，可以把句子切成 4 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "In some parts of the Everglades",
                    "start": 0,
                    "end": 31,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"In some parts of the Everglades, soil ...\"；谓语 = \"can reach\"；表语 = \"depths of up to 3 meters (10 feet),\""
                  },
                  {
                    "id": "seg-1",
                    "text": "soil deposits can reach depths of up to 3 meters (10 feet)",
                    "start": 33,
                    "end": 91,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-2",
                    "text": "where one meter might represent close to 100 years of peat accumulation",
                    "start": 93,
                    "end": 164,
                    "type": "非限定性定语从句",
                    "isMain": false,
                    "hint": "对前面的名词做补充说明，翻译时可另起一小句"
                  },
                  {
                    "id": "seg-3",
                    "text": "Lagomasino said.",
                    "start": 166,
                    "end": 182,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "In some parts of the Everglades",
                "summary": "主句是「In some parts of the Everglades」，其余 3 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"In some parts of the Everglades, soil ...\"；谓语 = \"can reach\"；表语 = \"depths of up to 3 meters (10 feet),\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"where one meter might represent close to 100…\"（定语从句，修饰名词 **feet),**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"In some parts of the Everglades,\"（句首状语，交代背景或前提——中文习惯先译它）",
                  "\"depths of up to 3 meters (10 feet)\"（后置定语，修饰名词 **depths**）",
                  "\"years of peat accumulation\"（后置定语，修饰名词 **years**）"
                ],
                "summary": "平行动 0 处、修饰成分 4 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【非限定性定语从句】「where one meter might represent …」——对前面的名词做补充说明，翻译时可另起一小句",
                  "2. 再译【主句】「In some parts of the Everglades」——这是整句的骨架",
                  "3. 按「修饰」关系组装：中文习惯把修饰类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p8-s1",
            "index": 1,
            "en": "Deep in the Amazon rainforest, by comparison, a similarly sized, one-meter deposit could take more than 1,000 years to develop.",
            "zh": "相比之下，在亚马逊雨林深处，同样厚度的一米沉积层可能需要 1000 多年才能形成。",
            "wordCount": 19,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "Deep in the Amazon rainforest, by comp… (S) + sized, (V) + one-meter deposit could take more than… (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Deep in the Amazon rainforest, by comparison, a similarly",
                  "start": 0,
                  "end": 57,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "sized,",
                  "start": 58,
                  "end": 64,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "one-meter deposit could take more than 1,000 years to develop.",
                  "start": 65,
                  "end": 127,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "句中有插入成分，阅读时可先跳过，主句依然完整。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "sized,",
                    "start": 58,
                    "end": 64,
                    "role": "predicate"
                  },
                  {
                    "text": "could take",
                    "start": 83,
                    "end": 93,
                    "role": "predicate"
                  },
                  {
                    "text": "develop.",
                    "start": 119,
                    "end": 127,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（sized, / could take），意味着有 2 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 29,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 44,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 63,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 105,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 4 个断点，可以把句子切成 4 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Deep in the Amazon rainforest",
                    "start": 0,
                    "end": 29,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Deep in the Amazon rainforest, by comp...\"；谓语 = \"sized,\"；宾语 = \"one-meter deposit could take more than...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "by comparison, a similarly sized",
                    "start": 31,
                    "end": 63,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-2",
                    "text": "one-meter deposit could take more than 1",
                    "start": 65,
                    "end": 105,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-3",
                    "text": "000 years to develop.",
                    "start": 106,
                    "end": 127,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "Deep in the Amazon rainforest",
                "summary": "主句是「Deep in the Amazon rainforest」，其余 3 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Deep in the Amazon rainforest, by comp...\"；谓语 = \"sized,\"；宾语 = \"one-meter deposit could take more than...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"Deep in the Amazon rainforest,\"（句首状语，交代背景或前提——中文习惯先译它）",
                  "\"years to develop\"（后置定语，修饰名词 **years**）",
                  "\"by comparison\"（插入语——删掉不影响主句结构，可先跳过）"
                ],
                "summary": "平行动 0 处、修饰成分 3 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「Deep in the Amazon rainforest」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p8-s2",
            "index": 2,
            "en": "This is important in the context of restoration efforts: in coastal wetlands, peat losses can be restored up to 10 times faster than they might be in other forest types.",
            "zh": "这对修复工作意义重大：在滨海湿地，泥炭的损失可以以比其他森林类型快 10 倍的速度得到恢复。",
            "wordCount": 29,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "This (S) + is (V) + important in the context of restoratio… (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "This",
                  "start": 0,
                  "end": 4,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "is",
                  "start": 5,
                  "end": 7,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "important in the context of restoration efforts: in coastal wetlands, peat losses can be restored up to 10 times faster than they might be in other forest types.",
                  "start": 8,
                  "end": 169,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-106-0",
                "text": "up to",
                "zh": "多达；直到",
                "kind": "介词框架"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "is",
                    "start": 5,
                    "end": 7,
                    "role": "predicate"
                  },
                  {
                    "text": "can be restored",
                    "start": 90,
                    "end": 105,
                    "role": "predicate"
                  },
                  {
                    "text": "might be",
                    "start": 138,
                    "end": 146,
                    "role": "predicate"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（is / can be restored / might be），意味着有 3 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 55,
                    "marker": ":",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 76,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 2 个断点，可以把句子切成 3 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "This is important in the context of restoration efforts",
                    "start": 0,
                    "end": 55,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"This\"；谓语 = \"is\"；宾语 = \"important in the context of restoratio...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "in coastal wetlands",
                    "start": 57,
                    "end": 76,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-2",
                    "text": "peat losses can be restored up to 10 times faster than they might be in other forest types.",
                    "start": 78,
                    "end": 169,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "This is important in the context of restoration efforts",
                "summary": "主句是「This is important in the context of restorat…」，其余 2 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"This\"；谓语 = \"is\"；宾语 = \"important in the context of restoratio...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"important in the context of restoration effo…\"（后置定语，修饰名词 **important**）"
                ],
                "summary": "平行动 0 处、修饰成分 1 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「This is important in the context…」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          }
        ]
      },
      {
        "id": "nasa-coastal-wetlands-blue-carbon-p9",
        "index": 9,
        "heading": "Wetland methane: A naturally occurring but potent greenhouse gas",
        "sentences": [
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p9-s0",
            "index": 0,
            "en": "“There are also significant differences in fluxes between healthy mangroves and degraded ones,” said Lola Fatoyinbo, a research scientist in the Biospheric Sciences Laboratory at NASA’s Goddard Space Flight Center.",
            "zh": "“健康红树林与退化红树林之间的通量也存在显著差异，”NASA 戈达德太空飞行中心生物圈科学实验室研究科学家洛拉·法托因博说。",
            "wordCount": 30,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "There  (S) + are (V) + also significant differences in fluxes… (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "There ",
                  "start": 1,
                  "end": 7,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "are",
                  "start": 7,
                  "end": 10,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "also significant differences in fluxes between healthy mangroves and degraded ones,” said Lola Fatoyinbo, a research scientist in the Biospheric Sciences Laboratory at NASA’s Goddard Space Flight Center.",
                  "start": 11,
                  "end": 214,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "句中有插入成分，阅读时可先跳过，主句依然完整。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "are",
                    "start": 7,
                    "end": 10,
                    "role": "predicate"
                  },
                  {
                    "text": "degraded",
                    "start": 80,
                    "end": 88,
                    "role": "predicate"
                  },
                  {
                    "text": "said",
                    "start": 96,
                    "end": 100,
                    "role": "predicate"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（are / degraded / said），意味着有 3 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 93,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 115,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 2 个断点，可以把句子切成 3 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "“There are also significant differences in fluxes between healthy mangroves and degraded ones",
                    "start": 0,
                    "end": 93,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"There \"；谓语 = \"are\"；宾语 = \"also significant differences in fluxes...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "” said Lola Fatoyinbo",
                    "start": 94,
                    "end": 115,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-2",
                    "text": "a research scientist in the Biospheric Sciences Laboratory at NASA’s Goddard Space Flight Center.",
                    "start": 117,
                    "end": 214,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "“There are also significant differences in fluxes between healthy mangroves and degraded ones",
                "summary": "主句是「“There are also significant differences in f…」，其余 2 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"There \"；谓语 = \"are\"；宾语 = \"also significant differences in fluxes...\""
              },
              "step4": {
                "parallels": [
                  {
                    "kind": "from … to … 平行",
                    "members": [
                      "healthy mangroves",
                      "degraded ones"
                    ],
                    "note": "范围的两端，形式通常一致"
                  }
                ],
                "modifiers": [
                  "\"differences in fluxes between healthy mangro…\"（后置定语，修饰名词 **differences**）",
                  "\"scientist in the Biospheric Sciences Laborat…\"（后置定语，修饰名词 **scientist**）",
                  "\"” said Lola Fatoyinbo\"（插入语——删掉不影响主句结构，可先跳过）"
                ],
                "summary": "平行动 1 处、修饰成分 3 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「“There are also significant diff…」——这是整句的骨架",
                  "2. 处理平行结构：healthy mangroves ／ degraded ones——平行成分逐一对译，不要打乱顺序",
                  "3. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p9-s1",
            "index": 1,
            "en": "In areas where mangrove forests are suffering, for example, after a major hurricane, “you end up with more greenhouse gases in the atmosphere,” she said.",
            "zh": "她说，在红树林受损的区域，例如遭受强飓风之后，“结果是大气中的温室气体更多了”。",
            "wordCount": 25,
            "analysis": {
              "pattern": "结构待拆（简单句）",
              "skeleton": "In areas where mangrove forests are su… (S)",
              "chunks": [
                {
                  "role": "S",
                  "text": "In areas where mangrove forests are suffering, for example, after a major hurricane, “you end up with more greenhouse gases in the atmosphere,” she said.",
                  "start": 0,
                  "end": 153
                }
              ],
              "notes": [
                "句中有插入成分，阅读时可先跳过，主句依然完整。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-90-0",
                "text": "end up with",
                "zh": "以…收场",
                "kind": "短语动词"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "are",
                    "start": 32,
                    "end": 35,
                    "role": "predicate"
                  },
                  {
                    "text": "suffering,",
                    "start": 36,
                    "end": 46,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  },
                  {
                    "text": "said.",
                    "start": 148,
                    "end": 153,
                    "role": "predicate"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（are / said.），意味着有 2 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 9,
                    "marker": "where",
                    "reason": "where 引导定语从句"
                  },
                  {
                    "pos": 45,
                    "marker": ", + for",
                    "reason": "for 连接并列成分，可在标点处断开"
                  },
                  {
                    "pos": 58,
                    "marker": ", + after",
                    "reason": "after 引导时间状语从句，此处必须断开"
                  },
                  {
                    "pos": 83,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 141,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 5 个断点，可以把句子切成 4 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "In areas where mangrove forests are suffering",
                    "start": 0,
                    "end": 45,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"In areas where mangrove forests are su...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "for example, after a major hurricane",
                    "start": 47,
                    "end": 83,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-2",
                    "text": "“you end up with more greenhouse gases in the atmosphere",
                    "start": 85,
                    "end": 141,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-3",
                    "text": "” she said.",
                    "start": 142,
                    "end": 153,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "In areas where mangrove forests are suffering",
                "summary": "主句是「In areas where mangrove forests are suffering」，其余 3 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"In areas where mangrove forests are su...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"where mangrove forests are suffering, for ex…\"（定语从句，修饰名词 **areas**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"gases in the atmosphere\"（后置定语，修饰名词 **gases**）",
                  "\"for example\"（插入语——删掉不影响主句结构，可先跳过）"
                ],
                "summary": "平行动 0 处、修饰成分 3 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「In areas where mangrove forests …」——这是整句的骨架",
                  "2. 注意逻辑词 **for example**：举例（例如）——译文要把这层关系译出来，否则会读成平铺直叙。",
                  "3. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p9-s2",
            "index": 2,
            "en": "As wetland ecology responds to intensifying natural and human pressures, the data product will help researchers precisely monitor the impact of ecological changes on global carbon dioxide and methane levels.",
            "zh": "随着湿地生态对日益加剧的自然与人为压力作出反应，这一数据产品将帮助研究人员精确监测生态变化对全球二氧化碳和甲烷水平的影响。",
            "wordCount": 30,
            "analysis": {
              "pattern": "主谓宾 + 从句",
              "skeleton": "the data product (S) + will help (V) + researchers precisely monitor the impa… (O)",
              "chunks": [
                {
                  "role": "Clause",
                  "text": "As wetland ecology responds to intensifying natural and human pressures,",
                  "start": 0,
                  "end": 72,
                  "note": "句首状语从句：先交代条件/让步/时间背景，主句在后面"
                },
                {
                  "role": "S",
                  "text": "the data product",
                  "start": 73,
                  "end": 89,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "will help",
                  "start": 90,
                  "end": 99,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "researchers precisely monitor the impact of ecological changes on global carbon dioxide and methane levels.",
                  "start": 100,
                  "end": 207,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-19-0",
                "text": "responds to",
                "zh": "对…作出反应",
                "kind": "短语动词"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "responds",
                    "start": 19,
                    "end": 27,
                    "role": "predicate"
                  },
                  {
                    "text": "intensifying",
                    "start": 31,
                    "end": 43,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  },
                  {
                    "text": "will help",
                    "start": 90,
                    "end": 99,
                    "role": "predicate"
                  },
                  {
                    "text": "monitor",
                    "start": 122,
                    "end": 129,
                    "role": "predicate"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（responds / will help / monitor），意味着有 3 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 71,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "As wetland ecology responds to intensifying natural and human pressures",
                    "start": 0,
                    "end": 71,
                    "type": "时间/原因状语从句",
                    "isMain": false,
                    "hint": "作时间或原因成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-1",
                    "text": "the data product will help researchers precisely monitor the impact of ecological changes on global carbon dioxide and methane levels.",
                    "start": 73,
                    "end": 207,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"the data product\"；谓语 = \"will help\"；宾语 = \"researchers precisely monitor the impa...\""
                  }
                ],
                "mainText": "the data product will help researchers precisely monitor the impact of ecological changes on global carbon dioxide and methane levels.",
                "summary": "主句是「the data product will help researchers preci…」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"the data product\"；谓语 = \"will help\"；宾语 = \"researchers precisely monitor the impa...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"responds to intensifying natural and human p…\"（后置定语，修饰名词 **responds**）",
                  "\"impact of ecological changes on global carbo…\"（后置定语，修饰名词 **impact**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【时间/原因状语从句】「As wetland ecology responds to i…」——作时间或原因成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「the data product will help resea…」——这是整句的骨架",
                  "3. 按「时间或原因」关系组装：中文习惯把时间或原因类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p9-s3",
            "index": 3,
            "en": "Methane is naturally produced by microbes that live in wetland soils.",
            "zh": "甲烷由生活在湿地土壤中的微生物自然产生。",
            "wordCount": 11,
            "analysis": {
              "pattern": "主系表 + 从句",
              "skeleton": "Methane (S) + is (V) + naturally produced by microbes (C)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Methane",
                  "start": 0,
                  "end": 7,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "is",
                  "start": 8,
                  "end": 10,
                  "note": "主句谓语"
                },
                {
                  "role": "C",
                  "text": "naturally produced by microbes",
                  "start": 11,
                  "end": 41,
                  "note": "主句的宾语/表语"
                },
                {
                  "role": "Clause",
                  "text": "that live in wetland soils.",
                  "start": 42,
                  "end": 69,
                  "note": "由 that 引导的从句，修饰前面的名词（定语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "is",
                    "start": 8,
                    "end": 10,
                    "role": "predicate"
                  },
                  {
                    "text": "produced",
                    "start": 21,
                    "end": 29,
                    "role": "predicate"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（is / produced），意味着有 2 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 42,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Methane is naturally produced by microbes",
                    "start": 0,
                    "end": 41,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Methane\"；谓语 = \"is\"；表语 = \"naturally produced by microbes\""
                  },
                  {
                    "id": "seg-1",
                    "text": "that live in wetland soils.",
                    "start": 42,
                    "end": 69,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "Methane is naturally produced by microbes",
                "summary": "主句是「Methane is naturally produced by microbes」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Methane\"；谓语 = \"is\"；表语 = \"naturally produced by microbes\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"that live in wetland soils.\"（定语从句，修饰名词 **microbes**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"produced by microbes that live in wetland so…\"（后置定语，修饰名词 **produced**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【名词性 / 定语从句】「that live in wetland soils.」——作说明成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「Methane is naturally produced by…」——这是整句的骨架",
                  "3. 按「说明」关系组装：中文习惯把说明类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p9-s4",
            "index": 4,
            "en": "But as wetland conditions change, the growth rate of methane-producing microbes can spike, releasing the gas into the atmosphere at prodigious rates.",
            "zh": "但随着湿地条件改变，产甲烷微生物的增殖速度可能骤升，从而以惊人的速率把这种气体释放到大气中。",
            "wordCount": 22,
            "analysis": {
              "pattern": "结构待拆（简单句）",
              "skeleton": "But as wetland conditions change, the … (S)",
              "chunks": [
                {
                  "role": "S",
                  "text": "But as wetland conditions change, the growth rate of methane-producing microbes can spike, releasing the gas into the atmosphere at prodigious rates.",
                  "start": 0,
                  "end": 149
                }
              ],
              "notes": [
                "句中有插入成分，阅读时可先跳过，主句依然完整。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "change,",
                    "start": 26,
                    "end": 33,
                    "role": "predicate"
                  },
                  {
                    "text": "can spike,",
                    "start": 80,
                    "end": 90,
                    "role": "predicate"
                  },
                  {
                    "text": "releasing",
                    "start": 91,
                    "end": 100,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（change, / can spike,），意味着有 2 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 4,
                    "marker": "as",
                    "reason": "as 引导时间/原因状语从句"
                  },
                  {
                    "pos": 32,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 89,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 3 个断点，可以把句子切成 3 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "as wetland conditions change",
                    "start": 4,
                    "end": 32,
                    "type": "时间/原因状语从句",
                    "isMain": false,
                    "hint": "作时间或原因成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-1",
                    "text": "the growth rate of methane-producing microbes can spike",
                    "start": 34,
                    "end": 89,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"But as wetland conditions change, the ...\""
                  },
                  {
                    "id": "seg-2",
                    "text": "releasing the gas into the atmosphere at prodigious rates.",
                    "start": 91,
                    "end": 149,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "the growth rate of methane-producing microbes can spike",
                "summary": "主句是「the growth rate of methane-producing microbe…」，其余 2 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"But as wetland conditions change, the ...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"But as wetland conditions change,\"（句首状语，交代背景或前提——中文习惯先译它）",
                  "\"rate of methane-producing microbes can spike\"（后置定语，修饰名词 **rate**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【时间/原因状语从句】「as wetland conditions change」——作时间或原因成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「the growth rate of methane-produ…」——这是整句的骨架",
                  "3. 按「时间或原因」关系组装：中文习惯把时间或原因类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p9-s5",
            "index": 5,
            "en": "Since methane is a significantly more potent greenhouse gas than carbon dioxide, possessing a warming potential 84 times greater over a 25-year period, methane emissions undermine some of the beneficial services that blue carbon ecosystems provide as natural sinks for atmospheric carbon dioxide.",
            "zh": "由于甲烷作为温室气体远比二氧化碳强烈——在 25 年尺度上的增温潜势高出 84 倍——甲烷排放会削弱蓝碳生态系统作为大气二氧化碳天然“汇”所提供的一些有益功能。",
            "wordCount": 42,
            "analysis": {
              "pattern": "结构待拆 + 3 个从句（多重复合句）",
              "skeleton": "possessing (V) + a warming potential 84 times greater o… (C)",
              "chunks": [
                {
                  "role": "Clause",
                  "text": "Since methane is a significantly more potent greenhouse gas than carbon dioxide,",
                  "start": 0,
                  "end": 80,
                  "note": "句首状语从句：先交代条件/让步/时间背景，主句在后面"
                },
                {
                  "role": "V",
                  "text": "possessing",
                  "start": 81,
                  "end": 91,
                  "note": "主句谓语"
                },
                {
                  "role": "C",
                  "text": "a warming potential 84 times greater over a 25-year period, methane emissions undermine some of the beneficial services",
                  "start": 92,
                  "end": 211,
                  "note": "主句的宾语/表语"
                },
                {
                  "role": "Clause",
                  "text": "that blue carbon ecosystems provide",
                  "start": 212,
                  "end": 247,
                  "note": "由 that 引导的从句，修饰前面的名词（定语从句）"
                },
                {
                  "role": "Clause",
                  "text": "as natural sinks for atmospheric carbon dioxide.",
                  "start": 248,
                  "end": 296,
                  "note": "由 as 引导的从句，充当状语（状语从句）"
                }
              ],
              "notes": [
                "本句含 3 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句中有插入成分，阅读时可先跳过，主句依然完整。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "is",
                    "start": 14,
                    "end": 16,
                    "role": "predicate"
                  },
                  {
                    "text": "possessing",
                    "start": 81,
                    "end": 91,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  },
                  {
                    "text": "undermine",
                    "start": 170,
                    "end": 179,
                    "role": "predicate"
                  },
                  {
                    "text": "provide",
                    "start": 240,
                    "end": 247,
                    "role": "predicate"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（is / undermine / provide），意味着有 3 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 79,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 150,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 212,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  },
                  {
                    "pos": 248,
                    "marker": "as",
                    "reason": "as 引导时间/原因状语从句"
                  }
                ],
                "summary": "找到 4 个断点，可以把句子切成 5 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Since methane is a significantly more potent greenhouse gas than carbon dioxide",
                    "start": 0,
                    "end": 79,
                    "type": "时间/原因状语从句",
                    "isMain": false,
                    "hint": "作时间或原因成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-1",
                    "text": "possessing a warming potential 84 times greater over a 25-year period",
                    "start": 81,
                    "end": 150,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 谓语 = \"possessing\"；表语 = \"a warming potential 84 times greater o...\""
                  },
                  {
                    "id": "seg-2",
                    "text": "methane emissions undermine some of the beneficial services",
                    "start": 152,
                    "end": 211,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-3",
                    "text": "that blue carbon ecosystems provide",
                    "start": 212,
                    "end": 247,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-4",
                    "text": "as natural sinks for atmospheric carbon dioxide.",
                    "start": 248,
                    "end": 296,
                    "type": "时间/原因状语从句",
                    "isMain": false,
                    "hint": "作时间或原因成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "possessing a warming potential 84 times greater over a 25-year period",
                "summary": "主句是「possessing a warming potential 84 times grea…」，其余 4 段都是挂在这一主干上的修饰或从句。 主干拆解：谓语 = \"possessing\"；表语 = \"a warming potential 84 times greater o...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"that blue carbon ecosystems provide as natur…\"（定语从句，修饰名词 **services**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"some of the beneficial services that blue ca…\"（后置定语，修饰名词 **some**）",
                  "\"sinks for atmospheric carbon dioxide\"（后置定语，修饰名词 **sinks**）"
                ],
                "summary": "平行动 0 处、修饰成分 3 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【时间/原因状语从句】「Since methane is a significantly…」——作时间或原因成分，翻译时通常放在主句之前",
                  "2. 先译【名词性 / 定语从句】「that blue carbon ecosystems prov…」——作说明成分，翻译时通常放在主句之前",
                  "3. 先译【时间/原因状语从句】「as natural sinks for atmospheric…」——作时间或原因成分，翻译时通常放在主句之前",
                  "4. 再译【主句】「possessing a warming potential 8…」——这是整句的骨架",
                  "5. 按「时间或原因」关系组装：中文习惯把时间或原因类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 3 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p9-s6",
            "index": 6,
            "en": "While Lagomasino studied the soil to understand long-term storage of greenhouse gases, Lola Fatoyinbo, a research scientist in NASA’s Biospheric Sciences Lab, and Peter Raymond, an ecologist at Yale University’s School of the Environment, measured the rate at which these gases are exchanged between wetland vegetation and the atmosphere.",
            "zh": "拉戈马西诺研究土壤以了解温室气体的长期储存，而 NASA 生物圈科学实验室研究科学家洛拉·法托因博与耶鲁大学环境学院生态学家彼得·雷蒙德则测量这些气体在湿地植被与大气之间交换的速率。",
            "wordCount": 49,
            "analysis": {
              "pattern": "主系表 + 2 个从句（多重复合句）",
              "skeleton": "Lola Fatoyinbo, a research scientist i… (S) + measured (V) + the rate at (C)",
              "chunks": [
                {
                  "role": "Clause",
                  "text": "While Lagomasino studied the soil to understand long-term storage of greenhouse gases,",
                  "start": 0,
                  "end": 86,
                  "note": "句首状语从句：先交代条件/让步/时间背景，主句在后面"
                },
                {
                  "role": "S",
                  "text": "Lola Fatoyinbo, a research scientist in NASA’s Biospheric Sciences Lab, and Peter Raymond, an ecologist at Yale University’s School of the Environment,",
                  "start": 87,
                  "end": 238,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "measured",
                  "start": 239,
                  "end": 247,
                  "note": "主句谓语"
                },
                {
                  "role": "C",
                  "text": "the rate at",
                  "start": 248,
                  "end": 259,
                  "note": "主句的宾语/表语"
                },
                {
                  "role": "Clause",
                  "text": "which these gases are exchanged between wetland vegetation and the atmosphere.",
                  "start": 260,
                  "end": 338,
                  "note": "由 which 引导的从句，修饰前面的名词（定语从句）"
                }
              ],
              "notes": [
                "本句含 2 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句中有插入成分，阅读时可先跳过，主句依然完整。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "studied",
                    "start": 17,
                    "end": 24,
                    "role": "predicate"
                  },
                  {
                    "text": "understand",
                    "start": 37,
                    "end": 47,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  },
                  {
                    "text": "measured",
                    "start": 239,
                    "end": 247,
                    "role": "predicate"
                  },
                  {
                    "text": "are exchanged",
                    "start": 278,
                    "end": 291,
                    "role": "predicate"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（studied / measured / are exchanged），意味着有 3 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 85,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 101,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 157,
                    "marker": ", + and",
                    "reason": "and 连接并列成分，可在标点处断开"
                  },
                  {
                    "pos": 176,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 237,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 260,
                    "marker": "which",
                    "reason": "which 引导定语从句"
                  }
                ],
                "summary": "找到 6 个断点，可以把句子切成 6 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "While Lagomasino studied the soil to understand long-term storage of greenhouse gases",
                    "start": 0,
                    "end": 85,
                    "type": "时间/让步状语从句",
                    "isMain": false,
                    "hint": "作同时或让步成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-1",
                    "text": "Lola Fatoyinbo, a research scientist in NASA’s Biospheric Sciences Lab",
                    "start": 87,
                    "end": 157,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Lola Fatoyinbo, a research scientist i...\"；谓语 = \"measured\"；表语 = \"the rate at\""
                  },
                  {
                    "id": "seg-2",
                    "text": "and Peter Raymond",
                    "start": 159,
                    "end": 176,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-3",
                    "text": "an ecologist at Yale University’s School of the Environment",
                    "start": 178,
                    "end": 237,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-4",
                    "text": "measured the rate at",
                    "start": 239,
                    "end": 259,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-5",
                    "text": "which these gases are exchanged between wetland vegetation and the atmosphere.",
                    "start": 260,
                    "end": 338,
                    "type": "定语从句",
                    "isMain": false,
                    "hint": "作修饰成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "Lola Fatoyinbo, a research scientist in NASA’s Biospheric Sciences Lab",
                "summary": "主句是「Lola Fatoyinbo, a research scientist in NASA…」，其余 5 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Lola Fatoyinbo, a research scientist i...\"；谓语 = \"measured\"；表语 = \"the rate at\""
              },
              "step4": {
                "parallels": [
                  {
                    "kind": "from … to … 平行",
                    "members": [
                      "wetland vegetation",
                      "the atmosphere"
                    ],
                    "note": "范围的两端，形式通常一致"
                  }
                ],
                "modifiers": [
                  "\"which these gases are exchanged between wetl…\"（定语从句，修饰名词 **rate**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"soil to understand long-term storage of gree…\"（后置定语，修饰名词 **soil**）",
                  "\"scientist in NASA’s Biospheric Sciences Lab\"（后置定语，修饰名词 **scientist**）",
                  "\"School of the Environment\"（后置定语，修饰名词 **School**）",
                  "\"Lola Fatoyinbo\"（插入语——删掉不影响主句结构，可先跳过）"
                ],
                "summary": "平行动 1 处、修饰成分 5 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【时间/让步状语从句】「While Lagomasino studied the soi…」——作同时或让步成分，翻译时通常放在主句之前",
                  "2. 先译【定语从句】「which these gases are exchanged …」——作修饰成分，翻译时通常放在主句之前",
                  "3. 再译【主句】「Lola Fatoyinbo, a research scien…」——这是整句的骨架",
                  "4. 处理平行结构：wetland vegetation ／ the atmosphere——平行成分逐一对译，不要打乱顺序",
                  "5. 按「同时或让步」关系组装：中文习惯把同时或让步类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 2 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p9-s7",
            "index": 7,
            "en": "This metric is known as gaseous flux.",
            "zh": "这一指标被称为气体通量。",
            "wordCount": 7,
            "analysis": {
              "pattern": "主谓 + 从句",
              "skeleton": "This metric (S) + is known (V)",
              "chunks": [
                {
                  "role": "S",
                  "text": "This metric",
                  "start": 0,
                  "end": 11,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "is known",
                  "start": 12,
                  "end": 20,
                  "note": "主句谓语"
                },
                {
                  "role": "Clause",
                  "text": "as gaseous flux.",
                  "start": 21,
                  "end": 37,
                  "note": "由 as 引导的从句，充当状语（状语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "is known",
                    "start": 12,
                    "end": 20,
                    "role": "predicate"
                  }
                ],
                "count": 1,
                "summary": "句中共有 1 个谓语动词（is known），意味着有 1 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 21,
                    "marker": "as",
                    "reason": "as 引导时间/原因状语从句"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "This metric is known",
                    "start": 0,
                    "end": 20,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"This metric\"；谓语 = \"is known\""
                  },
                  {
                    "id": "seg-1",
                    "text": "as gaseous flux.",
                    "start": 21,
                    "end": 37,
                    "type": "时间/原因状语从句",
                    "isMain": false,
                    "hint": "作时间或原因成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "This metric is known",
                "summary": "主句是「This metric is known」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"This metric\"；谓语 = \"is known\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [],
                "summary": "本句没有明显的平行结构或插入成分。"
              },
              "step5": {
                "steps": [
                  "1. 先译【时间/原因状语从句】「as gaseous flux.」——作时间或原因成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「This metric is known」——这是整句的骨架",
                  "3. 按「时间或原因」关系组装：中文习惯把时间或原因类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p9-s8",
            "index": 8,
            "en": "The scientists measure flux using chambers designed to adhere neatly to points where significant rates of gas exchange occur.",
            "zh": "科学家们用气室来测量通量，这些气室被设计成能紧密贴合在气体交换速率较高的位置。",
            "wordCount": 19,
            "analysis": {
              "pattern": "主系表 + 从句",
              "skeleton": "The scientists (S) + measure (V) + flux using chambers designed to adhere… (C)",
              "chunks": [
                {
                  "role": "S",
                  "text": "The scientists",
                  "start": 0,
                  "end": 14,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "measure",
                  "start": 15,
                  "end": 22,
                  "note": "主句谓语"
                },
                {
                  "role": "C",
                  "text": "flux using chambers designed to adhere neatly to points",
                  "start": 23,
                  "end": 78,
                  "note": "主句的宾语/表语"
                },
                {
                  "role": "Clause",
                  "text": "where significant rates of gas exchange occur.",
                  "start": 79,
                  "end": 125,
                  "note": "由 where 引导的从句，修饰前面的名词（定语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "measure",
                    "start": 15,
                    "end": 22,
                    "role": "predicate"
                  },
                  {
                    "text": "using",
                    "start": 28,
                    "end": 33,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  },
                  {
                    "text": "designed",
                    "start": 43,
                    "end": 51,
                    "role": "predicate"
                  },
                  {
                    "text": "points",
                    "start": 72,
                    "end": 78,
                    "role": "predicate"
                  },
                  {
                    "text": "occur.",
                    "start": 119,
                    "end": 125,
                    "role": "predicate"
                  }
                ],
                "count": 4,
                "summary": "句中共有 4 个谓语动词（measure / designed / points / occur.），意味着有 4 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 79,
                    "marker": "where",
                    "reason": "where 引导定语从句"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "The scientists measure flux using chambers designed to adhere neatly to points",
                    "start": 0,
                    "end": 78,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"The scientists\"；谓语 = \"measure\"；表语 = \"flux using chambers designed to adhere...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "where significant rates of gas exchange occur.",
                    "start": 79,
                    "end": 125,
                    "type": "定语从句",
                    "isMain": false,
                    "hint": "作修饰成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "The scientists measure flux using chambers designed to adhere neatly to points",
                "summary": "主句是「The scientists measure flux using chambers d…」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"The scientists\"；谓语 = \"measure\"；表语 = \"flux using chambers designed to adhere...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"where significant rates of gas exchange occur.\"（定语从句，修饰名词 **adhere**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"designed to adhere neatly to points where si…\"（后置定语，修饰名词 **designed**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【定语从句】「where significant rates of gas e…」——作修饰成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「The scientists measure flux usin…」——这是整句的骨架",
                  "3. 按「修饰」关系组装：中文习惯把修饰类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p9-s9",
            "index": 9,
            "en": "They secure box-like chambers to above-ground roots and branches while domed chambers measure gas escaping from the forest floor.",
            "zh": "他们把箱状气室固定在地面以上的根系和枝干上，而圆顶状气室则用于测量从林地表面逸出的气体。",
            "wordCount": 19,
            "analysis": {
              "pattern": "主系表 + 从句",
              "skeleton": "They (S) + secure (V) + box-like chambers to above-ground root… (C)",
              "chunks": [
                {
                  "role": "S",
                  "text": "They",
                  "start": 0,
                  "end": 4,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "secure",
                  "start": 5,
                  "end": 11,
                  "note": "主句谓语"
                },
                {
                  "role": "C",
                  "text": "box-like chambers to above-ground roots and branches",
                  "start": 12,
                  "end": 64,
                  "note": "主句的宾语/表语"
                },
                {
                  "role": "Clause",
                  "text": "while domed chambers measure gas escaping from the forest floor.",
                  "start": 65,
                  "end": 129,
                  "note": "由 while 引导的从句，充当状语（状语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "secure",
                    "start": 5,
                    "end": 11,
                    "role": "predicate"
                  },
                  {
                    "text": "branches",
                    "start": 56,
                    "end": 64,
                    "role": "predicate"
                  },
                  {
                    "text": "domed",
                    "start": 71,
                    "end": 76,
                    "role": "predicate"
                  },
                  {
                    "text": "escaping",
                    "start": 98,
                    "end": 106,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（secure / branches / domed），意味着有 3 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 65,
                    "marker": "while",
                    "reason": "while 引导时间/让步状语从句"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "They secure box-like chambers to above-ground roots and branches",
                    "start": 0,
                    "end": 64,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"They\"；谓语 = \"secure\"；表语 = \"box-like chambers to above-ground root...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "while domed chambers measure gas escaping from the forest floor.",
                    "start": 65,
                    "end": 129,
                    "type": "时间/让步状语从句",
                    "isMain": false,
                    "hint": "作同时或让步成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "They secure box-like chambers to above-ground roots and branches",
                "summary": "主句是「They secure box-like chambers to above-groun…」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"They\"；谓语 = \"secure\"；表语 = \"box-like chambers to above-ground root...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"chambers to above-ground roots and branches …\"（后置定语，修饰名词 **chambers**）",
                  "\"escaping from the forest floor\"（后置定语，修饰名词 **escaping**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【时间/让步状语从句】「while domed chambers measure gas…」——作同时或让步成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「They secure box-like chambers to…」——这是整句的骨架",
                  "3. 按「同时或让步」关系组装：中文习惯把同时或让步类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p9-s10",
            "index": 10,
            "en": "The concentration of gases trapped in each chamber is measured over time.",
            "zh": "每个气室内所捕获气体的浓度会随时间被测量。",
            "wordCount": 12,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "The concentration of gases (S) + trapped (V) + in each chamber is measured over time. (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "The concentration of gases",
                  "start": 0,
                  "end": 26,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "trapped",
                  "start": 27,
                  "end": 34,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "in each chamber is measured over time.",
                  "start": 35,
                  "end": 73,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "trapped",
                    "start": 27,
                    "end": 34,
                    "role": "nonfinite",
                    "note": "过去分词作后置定语（相当于省略了 which is），不能作谓语"
                  },
                  {
                    "text": "is",
                    "start": 51,
                    "end": 53,
                    "role": "predicate"
                  }
                ],
                "count": 1,
                "summary": "句中共有 1 个谓语动词（is），意味着有 1 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [],
                "summary": "句中无明显断点，结构较简单。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "The concentration of gases trapped in each chamber is measured over time.",
                    "start": 0,
                    "end": 73,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"The concentration of gases\"；谓语 = \"trapped\"；宾语 = \"in each chamber is measured over time.\""
                  }
                ],
                "mainText": "The concentration of gases trapped in each chamber is measured over time.",
                "summary": "主句是「The concentration of gases trapped in each c…」，其余 0 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"The concentration of gases\"；谓语 = \"trapped\"；宾语 = \"in each chamber is measured over time.\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"concentration of gases trapped in each chamb…\"（后置定语，修饰名词 **concentration**）"
                ],
                "summary": "平行动 0 处、修饰成分 1 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「The concentration of gases trapp…」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p9-s11",
            "index": 11,
            "en": "In general, as the health of wetland ecology declines, less carbon dioxide is removed, and more methane is released.",
            "zh": "总体而言，随着湿地生态健康状况下降，被移除的二氧化碳减少，而释放的甲烷增多。",
            "wordCount": 19,
            "analysis": {
              "pattern": "结构待拆（简单句）",
              "skeleton": "In general, as the health of wetland e… (S)",
              "chunks": [
                {
                  "role": "S",
                  "text": "In general, as the health of wetland ecology declines, less carbon dioxide is removed, and more methane is released.",
                  "start": 0,
                  "end": 116
                }
              ],
              "notes": [
                "句中有插入成分，阅读时可先跳过，主句依然完整。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "declines,",
                    "start": 45,
                    "end": 54,
                    "role": "predicate"
                  },
                  {
                    "text": "is",
                    "start": 75,
                    "end": 77,
                    "role": "predicate"
                  },
                  {
                    "text": "methane is",
                    "start": 96,
                    "end": 106,
                    "role": "predicate"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（declines, / is / methane is），意味着有 3 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 10,
                    "marker": ", + as",
                    "reason": "as 引导时间/原因状语从句，此处必须断开"
                  },
                  {
                    "pos": 53,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 85,
                    "marker": ", + and",
                    "reason": "and 连接并列成分，可在标点处断开"
                  }
                ],
                "summary": "找到 3 个断点，可以把句子切成 3 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "In general, as the health of wetland ecology declines",
                    "start": 0,
                    "end": 53,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"In general, as the health of wetland e...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "less carbon dioxide is removed",
                    "start": 55,
                    "end": 85,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-2",
                    "text": "and more methane is released.",
                    "start": 87,
                    "end": 116,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "In general, as the health of wetland ecology declines",
                "summary": "主句是「In general, as the health of wetland ecology…」，其余 2 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"In general, as the health of wetland e...\""
              },
              "step4": {
                "parallels": [
                  {
                    "kind": "三项以上并列",
                    "members": [
                      "as the health of wetland ecology declines",
                      "less carbon dioxide is removed",
                      "more methane is released"
                    ],
                    "note": "并列的几项词性相同、形式一致，可逐个对应翻译"
                  }
                ],
                "modifiers": [
                  "\"In general,\"（句首状语，交代背景或前提——中文习惯先译它）",
                  "\"health of wetland ecology declines\"（后置定语，修饰名词 **health**）",
                  "\"as the health of wetland ecology declines\"（插入语——删掉不影响主句结构，可先跳过）"
                ],
                "summary": "平行动 1 处、修饰成分 3 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「In general, as the health of wet…」——这是整句的骨架",
                  "2. 处理平行结构：as the health of wetland ecology declines ／ less carbon dioxide is removed ／ more methane is released——平行成分逐一对译，不要打乱顺序",
                  "3. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p9-s12",
            "index": 12,
            "en": "But the exact nature of the relationship between wetland health and gaseous flux is not well understood.",
            "zh": "但湿地健康状况与气体通量之间关系的具体性质，目前尚未被充分理解。",
            "wordCount": 17,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "But the exact nature of the relationsh… (S) + is (V) + not well understood. (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "But the exact nature of the relationship between wetland health and gaseous flux",
                  "start": 0,
                  "end": 80,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "is",
                  "start": 81,
                  "end": 83,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "not well understood.",
                  "start": 84,
                  "end": 104,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "注意句中的否定范围，否定词可能只作用于局部成分。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "is",
                    "start": 81,
                    "end": 83,
                    "role": "predicate"
                  }
                ],
                "count": 1,
                "summary": "句中共有 1 个谓语动词（is），意味着有 1 件事要译。"
              },
              "step2": {
                "breaks": [],
                "summary": "句中无明显断点，结构较简单。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "But the exact nature of the relationship between wetland health and gaseous flux is not well understood.",
                    "start": 0,
                    "end": 104,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "",
                "summary": "未能确定主句，建议先按标点切分逐段理解。"
              },
              "step4": {
                "parallels": [
                  {
                    "kind": "from … to … 平行",
                    "members": [
                      "wetland health",
                      "gaseous flux is not well understood"
                    ],
                    "note": "范围的两端，形式通常一致"
                  }
                ],
                "modifiers": [
                  "\"nature of the relationship between wetland h…\"（后置定语，修饰名词 **nature**）"
                ],
                "summary": "平行动 1 处、修饰成分 1 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 处理平行结构：wetland health ／ gaseous flux is not well understood——平行成分逐一对译，不要打乱顺序",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p9-s13",
            "index": 13,
            "en": "What does flux look like in ghost forests, for example?",
            "zh": "例如，在“幽灵森林”中，通量呈现什么状况？",
            "wordCount": 10,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "What (S) + does (V) + flux look like in ghost forests, for e… (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "What",
                  "start": 0,
                  "end": 4,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "does",
                  "start": 5,
                  "end": 9,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "flux look like in ghost forests, for example?",
                  "start": 10,
                  "end": 55,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "does",
                    "start": 5,
                    "end": 9,
                    "role": "predicate"
                  },
                  {
                    "text": "like",
                    "start": 20,
                    "end": 24,
                    "role": "preposition",
                    "note": "是介词，不是动词"
                  }
                ],
                "count": 1,
                "summary": "句中共有 1 个谓语动词（does），意味着有 1 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 41,
                    "marker": ", + for",
                    "reason": "for 连接并列成分，可在标点处断开"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "What does flux look like in ghost forests",
                    "start": 0,
                    "end": 41,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"What\"；谓语 = \"does\"；宾语 = \"flux look like in ghost forests, for e...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "for example?",
                    "start": 43,
                    "end": 55,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "What does flux look like in ghost forests",
                "summary": "主句是「What does flux look like in ghost forests」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"What\"；谓语 = \"does\"；宾语 = \"flux look like in ghost forests, for e...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"What does flux look like in ghost forests,\"（句首状语，交代背景或前提——中文习惯先译它）"
                ],
                "summary": "平行动 0 处、修饰成分 1 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「What does flux look like in ghos…」——这是整句的骨架",
                  "2. 注意逻辑词 **for example**：举例（例如）——译文要把这层关系译出来，否则会读成平铺直叙。",
                  "3. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p9-s14",
            "index": 14,
            "en": "And how do more subtle changes in variables like canopy coverage or species distribution influence levels of carbon dioxide sequestration or methane production?",
            "zh": "又如，林冠覆盖度或物种分布等变量的更细微变化，会如何影响二氧化碳固存或甲烷产生的水平？",
            "wordCount": 23,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "And how (S) + do (V) + more subtle changes in variables like … (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "And how",
                  "start": 0,
                  "end": 7,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "do",
                  "start": 8,
                  "end": 10,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "more subtle changes in variables like canopy coverage or species distribution influence levels of carbon dioxide sequestration or methane production?",
                  "start": 11,
                  "end": 160,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "do",
                    "start": 8,
                    "end": 10,
                    "role": "predicate"
                  },
                  {
                    "text": "like",
                    "start": 44,
                    "end": 48,
                    "role": "preposition",
                    "note": "是介词，不是动词"
                  }
                ],
                "count": 1,
                "summary": "句中共有 1 个谓语动词（do），意味着有 1 件事要译；另有 1 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [],
                "summary": "句中无明显断点，结构较简单。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "And how do more subtle changes in variables like canopy coverage or species distribution influence levels of carbon dioxide sequestration or methane production?",
                    "start": 0,
                    "end": 160,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "",
                "summary": "未能确定主句，建议先按标点切分逐段理解。"
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"changes in variables like canopy coverage or…\"（后置定语，修饰名词 **changes**）",
                  "\"levels of carbon dioxide sequestration or me…\"（后置定语，修饰名词 **levels**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p9-s15",
            "index": 15,
            "en": "“We’re especially interested in the methane part,” Fatoyinbo said.",
            "zh": "“我们对甲烷这部分特别感兴趣，”法托因博说。",
            "wordCount": 9,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "We’re especially (S) + interested (V) + in the methane part,” Fatoyinbo said. (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "We’re especially",
                  "start": 1,
                  "end": 17,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "interested",
                  "start": 18,
                  "end": 28,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "in the methane part,” Fatoyinbo said.",
                  "start": 29,
                  "end": 66,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "said.",
                    "start": 61,
                    "end": 66,
                    "role": "predicate"
                  }
                ],
                "count": 1,
                "summary": "句中共有 1 个谓语动词（said.），意味着有 1 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 48,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "“We’re especially interested in the methane part",
                    "start": 0,
                    "end": 48,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"We’re especially\"；谓语 = \"interested\"；宾语 = \"in the methane part,” Fatoyinbo said.\""
                  },
                  {
                    "id": "seg-1",
                    "text": "” Fatoyinbo said.",
                    "start": 49,
                    "end": 66,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "“We’re especially interested in the methane part",
                "summary": "主句是「“We’re especially interested in the methane …」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"We’re especially\"；谓语 = \"interested\"；宾语 = \"in the methane part,” Fatoyinbo said.\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"interested in the methane part\"（后置定语，修饰名词 **interested**）"
                ],
                "summary": "平行动 0 处、修饰成分 1 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「“We’re especially interested in …」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p9-s16",
            "index": 16,
            "en": "“It’s the least understood, and there’s a lot more of it than we previously thought.”",
            "zh": "“它是最不为人所理解的，而且它的量比我们此前以为的多得多。”",
            "wordCount": 15,
            "analysis": {
              "pattern": "主谓（简单句）",
              "skeleton": "It’s the least understood, and there’s… (S) + thought.” (V)",
              "chunks": [
                {
                  "role": "S",
                  "text": "It’s the least understood, and there’s a lot more of it than we previously",
                  "start": 1,
                  "end": 75,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "thought.”",
                  "start": 76,
                  "end": 85,
                  "note": "主句谓语"
                }
              ],
              "notes": [],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "thought.”",
                    "start": 76,
                    "end": 85,
                    "role": "predicate"
                  }
                ],
                "count": 1,
                "summary": "句中共有 1 个谓语动词（thought.”），意味着有 1 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 26,
                    "marker": ", + and",
                    "reason": "and 连接并列成分，可在标点处断开"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "“It’s the least understood",
                    "start": 0,
                    "end": 26,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"It’s the least understood, and there’s...\"；谓语 = \"thought.”\""
                  },
                  {
                    "id": "seg-1",
                    "text": "and there’s a lot more of it than we previously thought.”",
                    "start": 28,
                    "end": 85,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "“It’s the least understood",
                "summary": "主句是「“It’s the least understood」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"It’s the least understood, and there’s...\"；谓语 = \"thought.”\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"more of it than we previously thought\"（后置定语，修饰名词 **more**）"
                ],
                "summary": "平行动 0 处、修饰成分 1 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「“It’s the least understood」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p9-s17",
            "index": 17,
            "en": "Based on data collected during BlueFlux fieldwork, “we’re finding that coastal wetlands remove massive amounts of carbon dioxide and produce substantial amounts of methane,” Poulter said.",
            "zh": "波尔特说，根据 BlueFlux 野外工作所收集的数据，“我们发现滨海湿地移除了大量二氧化碳，同时也产生了相当多的甲烷”。",
            "wordCount": 26,
            "analysis": {
              "pattern": "结构待拆 + 从句",
              "skeleton": "Based (V) + on data collected during BlueFlux fiel… (C)",
              "chunks": [
                {
                  "role": "V",
                  "text": "Based",
                  "start": 0,
                  "end": 5,
                  "note": "主句谓语"
                },
                {
                  "role": "C",
                  "text": "on data collected during BlueFlux fieldwork, “we’re finding",
                  "start": 6,
                  "end": 65,
                  "note": "主句的宾语/表语"
                },
                {
                  "role": "Clause",
                  "text": "that coastal wetlands remove massive amounts of carbon dioxide and produce substantial amounts of methane,” Poulter said.",
                  "start": 66,
                  "end": 187,
                  "note": "由 that 引导的从句，修饰前面的名词（定语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "Based",
                    "start": 0,
                    "end": 5,
                    "role": "predicate"
                  },
                  {
                    "text": "collected",
                    "start": 14,
                    "end": 23,
                    "role": "nonfinite",
                    "note": "过去分词作后置定语（相当于省略了 which is），不能作谓语"
                  },
                  {
                    "text": "finding",
                    "start": 58,
                    "end": 65,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  },
                  {
                    "text": "remove",
                    "start": 88,
                    "end": 94,
                    "role": "predicate"
                  },
                  {
                    "text": "produce",
                    "start": 133,
                    "end": 140,
                    "role": "predicate"
                  },
                  {
                    "text": "said.",
                    "start": 182,
                    "end": 187,
                    "role": "predicate"
                  }
                ],
                "count": 4,
                "summary": "句中共有 4 个谓语动词（Based / remove / produce / said.），意味着有 4 件事要译；另有 2 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 49,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 66,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  },
                  {
                    "pos": 171,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 3 个断点，可以把句子切成 3 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Based on data collected during BlueFlux fieldwork",
                    "start": 0,
                    "end": 49,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 谓语 = \"Based\"；表语 = \"on data collected during BlueFlux fiel...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "“we’re finding that coastal wetlands remove massive amounts of carbon dioxide and produce substantial amounts of methane",
                    "start": 51,
                    "end": 171,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-2",
                    "text": "” Poulter said.",
                    "start": 172,
                    "end": 187,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "Based on data collected during BlueFlux fieldwork",
                "summary": "主句是「Based on data collected during BlueFlux fiel…」，其余 2 段都是挂在这一主干上的修饰或从句。 主干拆解：谓语 = \"Based\"；表语 = \"on data collected during BlueFlux fiel...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"that coastal wetlands remove massive amounts…\"（定语从句，修饰名词 **“we’re**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"Based on data collected during BlueFlux fiel…\"（后置定语，修饰名词 **Based**）",
                  "\"amounts of carbon dioxide and produce substa…\"（后置定语，修饰名词 **amounts**）"
                ],
                "summary": "平行动 0 处、修饰成分 3 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「Based on data collected during B…」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p9-s18",
            "index": 18,
            "en": "“But overall, these ecosystems appear to provide a net climate benefit, removing more greenhouse gases than they produce.”",
            "zh": "“但总体上看，这些生态系统似乎提供了净的气候效益——移除的温室气体多于它们产生的量。”",
            "wordCount": 18,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "But overall, these ecosystems (S) + appear (V) + to provide a net climate benefit, remo… (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "But overall, these ecosystems",
                  "start": 1,
                  "end": 30,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "appear",
                  "start": 31,
                  "end": 37,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "to provide a net climate benefit, removing more greenhouse gases than they produce.”",
                  "start": 38,
                  "end": 122,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "句中有插入成分，阅读时可先跳过，主句依然完整。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "appear",
                    "start": 31,
                    "end": 37,
                    "role": "predicate"
                  },
                  {
                    "text": "provide",
                    "start": 41,
                    "end": 48,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  },
                  {
                    "text": "removing",
                    "start": 72,
                    "end": 80,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  },
                  {
                    "text": "greenhouse",
                    "start": 86,
                    "end": 96,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  },
                  {
                    "text": "produce.”",
                    "start": 113,
                    "end": 122,
                    "role": "predicate"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（appear / produce.”），意味着有 2 件事要译；另有 3 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 12,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 70,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 2 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "“But overall, these ecosystems appear to provide a net climate benefit",
                    "start": 0,
                    "end": 70,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-1",
                    "text": "removing more greenhouse gases than they produce.”",
                    "start": 72,
                    "end": 122,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"But overall, these ecosystems\"；谓语 = \"appear\"；宾语 = \"to provide a net climate benefit, remo...\""
                  }
                ],
                "mainText": "removing more greenhouse gases than they produce.”",
                "summary": "主句是「removing more greenhouse gases than they pro…」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"But overall, these ecosystems\"；谓语 = \"appear\"；宾语 = \"to provide a net climate benefit, remo...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"appear to provide a net climate benefit\"（后置定语，修饰名词 **appear**）",
                  "\"these ecosystems appear to provide a net cli…\"（插入语——删掉不影响主句结构，可先跳过）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「removing more greenhouse gases t…」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p9-s19",
            "index": 19,
            "en": "That could change as Florida’s wetlands respond to continued climate disturbances.",
            "zh": "但随着佛罗里达湿地持续回应气候扰动，这种情况可能会改变。",
            "wordCount": 11,
            "analysis": {
              "pattern": "主谓 + 从句",
              "skeleton": "That (S) + could change (V)",
              "chunks": [
                {
                  "role": "S",
                  "text": "That",
                  "start": 0,
                  "end": 4,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "could change",
                  "start": 5,
                  "end": 17,
                  "note": "主句谓语"
                },
                {
                  "role": "Clause",
                  "text": "as Florida’s wetlands respond to continued climate disturbances.",
                  "start": 18,
                  "end": 82,
                  "note": "由 as 引导的从句，充当状语（状语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-40-0",
                "text": "respond to",
                "zh": "对…作出反应",
                "kind": "短语动词"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "could change",
                    "start": 5,
                    "end": 17,
                    "role": "predicate"
                  },
                  {
                    "text": "respond",
                    "start": 40,
                    "end": 47,
                    "role": "predicate"
                  },
                  {
                    "text": "continued",
                    "start": 51,
                    "end": 60,
                    "role": "predicate"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（could change / respond / continued），意味着有 3 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 18,
                    "marker": "as",
                    "reason": "as 引导时间/原因状语从句"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "That could change",
                    "start": 0,
                    "end": 17,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-1",
                    "text": "as Florida’s wetlands respond to continued climate disturbances.",
                    "start": 18,
                    "end": 82,
                    "type": "时间/原因状语从句",
                    "isMain": false,
                    "hint": "作时间或原因成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "",
                "summary": "未能确定主句，建议先按标点切分逐段理解。"
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"respond to continued climate disturbances\"（后置定语，修饰名词 **respond**）"
                ],
                "summary": "平行动 0 处、修饰成分 1 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【名词性 / 定语从句】「That could change」——作说明成分，翻译时通常放在主句之前",
                  "2. 先译【时间/原因状语从句】「as Florida’s wetlands respond to…」——作时间或原因成分，翻译时通常放在主句之前",
                  "3. 按「说明」关系组装：中文习惯把说明类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 2 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          }
        ]
      },
      {
        "id": "nasa-coastal-wetlands-blue-carbon-p10",
        "index": 10,
        "heading": "The future of South Florida’s ecology",
        "sentences": [
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p10-s0",
            "index": 0,
            "en": "Florida’s wetlands are roughly 5,000 years old.",
            "zh": "佛罗里达的湿地大约已有 5000 年历史。",
            "wordCount": 6,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "Florida’s wetlands (S) + are (V) + roughly 5,000 years old. (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Florida’s wetlands",
                  "start": 0,
                  "end": 18,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "are",
                  "start": 19,
                  "end": 22,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "roughly 5,000 years old.",
                  "start": 23,
                  "end": 47,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "are",
                    "start": 19,
                    "end": 22,
                    "role": "predicate"
                  }
                ],
                "count": 1,
                "summary": "句中共有 1 个谓语动词（are），意味着有 1 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 32,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Florida’s wetlands are roughly 5",
                    "start": 0,
                    "end": 32,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Florida’s wetlands\"；谓语 = \"are\"；宾语 = \"roughly 5,000 years old.\""
                  },
                  {
                    "id": "seg-1",
                    "text": "000 years old.",
                    "start": 33,
                    "end": 47,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "Florida’s wetlands are roughly 5",
                "summary": "主句是「Florida’s wetlands are roughly 5」，其余 1 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Florida’s wetlands\"；谓语 = \"are\"；宾语 = \"roughly 5,000 years old.\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [],
                "summary": "本句没有明显的平行结构或插入成分。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「Florida’s wetlands are roughly 5」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p10-s1",
            "index": 1,
            "en": "But in just the past century, more than half of the state’s original wetland coverage has been lost as vegetation was cleared and water was drained to accommodate the growing population.",
            "zh": "但仅在过去一个世纪里，随着植被被清除、水源被排干以容纳不断增长的人口，该州原有湿地面积的一半以上已经消失。",
            "wordCount": 31,
            "analysis": {
              "pattern": "主谓 + 从句",
              "skeleton": "But in just the past century, more tha… (S) + has been lost (V)",
              "chunks": [
                {
                  "role": "S",
                  "text": "But in just the past century, more than half of the state’s original wetland coverage",
                  "start": 0,
                  "end": 85,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "has been lost",
                  "start": 86,
                  "end": 99,
                  "note": "主句谓语"
                },
                {
                  "role": "Clause",
                  "text": "as vegetation was cleared and water was drained to accommodate the growing population.",
                  "start": 100,
                  "end": 186,
                  "note": "由 as 引导的从句，充当状语（状语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "past",
                    "start": 16,
                    "end": 20,
                    "role": "preposition",
                    "note": "是介词，不是动词"
                  },
                  {
                    "text": "has been lost",
                    "start": 86,
                    "end": 99,
                    "role": "predicate"
                  },
                  {
                    "text": "was cleared",
                    "start": 114,
                    "end": 125,
                    "role": "predicate"
                  },
                  {
                    "text": "was drained",
                    "start": 136,
                    "end": 147,
                    "role": "predicate"
                  },
                  {
                    "text": "accommodate",
                    "start": 151,
                    "end": 162,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（has been lost / was cleared / was drained），意味着有 3 件事要译；另有 2 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 28,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 100,
                    "marker": "as",
                    "reason": "as 引导时间/原因状语从句"
                  }
                ],
                "summary": "找到 2 个断点，可以把句子切成 3 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "But in just the past century",
                    "start": 0,
                    "end": 28,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-1",
                    "text": "more than half of the state’s original wetland coverage has been lost",
                    "start": 30,
                    "end": 99,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"But in just the past century, more tha...\"；谓语 = \"has been lost\""
                  },
                  {
                    "id": "seg-2",
                    "text": "as vegetation was cleared and water was drained to accommodate the growing population.",
                    "start": 100,
                    "end": 186,
                    "type": "时间/原因状语从句",
                    "isMain": false,
                    "hint": "作时间或原因成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "more than half of the state’s original wetland coverage has been lost",
                "summary": "主句是「more than half of the state’s original wetla…」，其余 2 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"But in just the past century, more tha...\"；谓语 = \"has been lost\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"But in just the past century,\"（句首状语，交代背景或前提——中文习惯先译它）",
                  "\"half of the state’s original wetland coverag…\"（后置定语，修饰名词 **half**）",
                  "\"drained to accommodate the growing population\"（后置定语，修饰名词 **drained**）"
                ],
                "summary": "平行动 0 处、修饰成分 3 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【时间/原因状语从句】「as vegetation was cleared and wa…」——作时间或原因成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「more than half of the state’s or…」——这是整句的骨架",
                  "3. 按「时间或原因」关系组装：中文习惯把时间或原因类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p10-s2",
            "index": 2,
            "en": "The Everglades system now contains 65% less peat and 77% less stored carbon than it did prior to drainage.",
            "zh": "与排干之前相比，大沼泽地系统目前的泥炭减少了 65%，储存的碳减少了 77%。",
            "wordCount": 17,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "The Everglades system now (S) + contains (V) + 65% less peat and 77% less stored carb… (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "The Everglades system now",
                  "start": 0,
                  "end": 25,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "contains",
                  "start": 26,
                  "end": 34,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "65% less peat and 77% less stored carbon than it did prior to drainage.",
                  "start": 35,
                  "end": 106,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-88-0",
                "text": "prior to",
                "zh": "在…之前",
                "kind": "介词框架"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "contains",
                    "start": 26,
                    "end": 34,
                    "role": "predicate"
                  },
                  {
                    "text": "stored",
                    "start": 62,
                    "end": 68,
                    "role": "predicate"
                  },
                  {
                    "text": "did",
                    "start": 84,
                    "end": 87,
                    "role": "predicate"
                  }
                ],
                "count": 3,
                "summary": "句中共有 3 个谓语动词（contains / stored / did），意味着有 3 件事要译。"
              },
              "step2": {
                "breaks": [],
                "summary": "句中无明显断点，结构较简单。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "The Everglades system now contains 65% less peat and 77% less stored carbon than it did prior to drainage.",
                    "start": 0,
                    "end": 106,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"The Everglades system now\"；谓语 = \"contains\"；宾语 = \"65% less peat and 77% less stored carb...\""
                  }
                ],
                "mainText": "The Everglades system now contains 65% less peat and 77% less stored carbon than it did prior to drainage.",
                "summary": "主句是「The Everglades system now contains 65% less …」，其余 0 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"The Everglades system now\"；谓语 = \"contains\"；宾语 = \"65% less peat and 77% less stored carb...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"prior to drainage\"（后置定语，修饰名词 **prior**）"
                ],
                "summary": "平行动 0 处、修饰成分 1 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「The Everglades system now contai…」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p10-s3",
            "index": 3,
            "en": "The future of the ecosystem — which is not only an important reservoir for atmospheric carbon, but a source of drinking water for more than 7 million Floridians and a home to flora and fauna found nowhere else on Earth — is uncertain.",
            "zh": "这一生态系统的前景尚不明朗——它不仅是大气碳的重要储库，也是 700 多万佛罗里达人的饮用水来源，还是地球上别处难觅的动植物的家园。",
            "wordCount": 40,
            "analysis": {
              "pattern": "结构待拆（简单句）",
              "skeleton": "The future of the ecosystem — which is… (S)",
              "chunks": [
                {
                  "role": "S",
                  "text": "The future of the ecosystem — which is not only an important reservoir for atmospheric carbon, but a source of drinking water for more than 7 million Floridians and a home to flora and fauna found nowhere else on Earth — is uncertain.",
                  "start": 0,
                  "end": 234
                }
              ],
              "notes": [
                "句中有插入成分，阅读时可先跳过，主句依然完整。",
                "注意句中的否定范围，否定词可能只作用于局部成分。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "is",
                    "start": 36,
                    "end": 38,
                    "role": "predicate"
                  },
                  {
                    "text": "home",
                    "start": 167,
                    "end": 171,
                    "role": "predicate"
                  },
                  {
                    "text": "found",
                    "start": 191,
                    "end": 196,
                    "role": "predicate"
                  },
                  {
                    "text": "is",
                    "start": 221,
                    "end": 223,
                    "role": "predicate"
                  }
                ],
                "count": 4,
                "summary": "句中共有 4 个谓语动词（is / home / found / is），意味着有 4 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 28,
                    "marker": "— + which",
                    "reason": "which 引导定语从句，此处必须断开"
                  },
                  {
                    "pos": 93,
                    "marker": ", + but",
                    "reason": "but 连接并列成分，可在标点处断开"
                  },
                  {
                    "pos": 219,
                    "marker": "—",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 3 个断点，可以把句子切成 4 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "The future of the ecosystem",
                    "start": 0,
                    "end": 27,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"The future of the ecosystem — which is...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "which is not only an important reservoir for atmospheric carbon",
                    "start": 30,
                    "end": 93,
                    "type": "定语从句",
                    "isMain": false,
                    "hint": "作修饰成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-2",
                    "text": "but a source of drinking water for more than 7 million Floridians and a home to flora and fauna found nowhere else on Earth",
                    "start": 95,
                    "end": 218,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-3",
                    "text": "is uncertain.",
                    "start": 221,
                    "end": 234,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "The future of the ecosystem",
                "summary": "主句是「The future of the ecosystem」，其余 3 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"The future of the ecosystem — which is...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"which is not only an important reservoir for…\"（定语从句，修饰名词 **ecosystem —**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"future of the ecosystem — which is not only …\"（后置定语，修饰名词 **future**）",
                  "\"reservoir for atmospheric carbon\"（后置定语，修饰名词 **reservoir**）",
                  "\"source of drinking water for more than 7 mil…\"（后置定语，修饰名词 **source**）"
                ],
                "summary": "平行动 0 处、修饰成分 4 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【定语从句】「which is not only an important r…」——作修饰成分，翻译时通常放在主句之前",
                  "2. 再译【主句】「The future of the ecosystem」——这是整句的骨架",
                  "3. 按「修饰」关系组装：中文习惯把修饰类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p10-s4",
            "index": 4,
            "en": "Scientists who have dedicated their careers to understanding and restoring South Florida’s ecology are hopeful.",
            "zh": "那些将职业生涯献给理解与修复南佛罗里达生态的科学家们仍怀抱希望。",
            "wordCount": 15,
            "analysis": {
              "pattern": "结构待拆（简单句）",
              "skeleton": "Scientists who have dedicated their ca… (S)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Scientists who have dedicated their careers to understanding and restoring South Florida’s ecology are hopeful.",
                  "start": 0,
                  "end": 111
                }
              ],
              "notes": [
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "have dedicated",
                    "start": 15,
                    "end": 29,
                    "role": "predicate"
                  },
                  {
                    "text": "understanding",
                    "start": 47,
                    "end": 60,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  },
                  {
                    "text": "restoring",
                    "start": 65,
                    "end": 74,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  },
                  {
                    "text": "are",
                    "start": 99,
                    "end": 102,
                    "role": "predicate"
                  }
                ],
                "count": 2,
                "summary": "句中共有 2 个谓语动词（have dedicated / are），意味着有 2 件事要译；另有 2 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 11,
                    "marker": "who",
                    "reason": "who 引导定语从句"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 1 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "Scientists who have dedicated their careers to understanding and restoring South Florida’s ecology are hopeful.",
                    "start": 0,
                    "end": 111,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Scientists who have dedicated their ca...\""
                  }
                ],
                "mainText": "Scientists who have dedicated their careers to understanding and restoring South Florida’s ecology are hopeful.",
                "summary": "主句是「Scientists who have dedicated their careers …」，其余 0 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Scientists who have dedicated their ca...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"who have dedicated their careers to understa…\"（定语从句，修饰名词 **Scientists**——它给这个名词补充信息，翻译时通常前置成\"……的\"）"
                ],
                "summary": "平行动 0 处、修饰成分 1 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「Scientists who have dedicated th…」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p10-s5",
            "index": 5,
            "en": "“Nature and people can coexist,” said Meenakshi Chabba, an ecologist and resilience scientist at the Everglades Foundation in Florida’s Miami-Dade County.",
            "zh": "“自然与人可以共存，”佛罗里达州迈阿密-戴德县大沼泽地基金会的生态学家与韧性科学家米纳克希·查巴说。",
            "wordCount": 21,
            "analysis": {
              "pattern": "主谓宾（简单句）",
              "skeleton": "Nature and people (S) + can coexist,” said (V) + Meenakshi Chabba, an ecologist and res… (O)",
              "chunks": [
                {
                  "role": "S",
                  "text": "Nature and people",
                  "start": 1,
                  "end": 18,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "can coexist,” said",
                  "start": 19,
                  "end": 37,
                  "note": "主句谓语"
                },
                {
                  "role": "O",
                  "text": "Meenakshi Chabba, an ecologist and resilience scientist at the Everglades Foundation in Florida’s Miami-Dade County.",
                  "start": 38,
                  "end": 154,
                  "note": "宾语/表语或补充说明"
                }
              ],
              "notes": [
                "句中有插入成分，阅读时可先跳过，主句依然完整。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "said",
                    "start": 33,
                    "end": 37,
                    "role": "predicate"
                  }
                ],
                "count": 1,
                "summary": "句中共有 1 个谓语动词（said），意味着有 1 件事要译。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 30,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  },
                  {
                    "pos": 54,
                    "marker": ",",
                    "reason": "标点处断开——先按标点把长句切成短段"
                  }
                ],
                "summary": "找到 2 个断点，可以把句子切成 3 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "“Nature and people can coexist",
                    "start": 0,
                    "end": 30,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"Nature and people\"；谓语 = \"can coexist,” said\"；宾语 = \"Meenakshi Chabba, an ecologist and res...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "” said Meenakshi Chabba",
                    "start": 31,
                    "end": 54,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-2",
                    "text": "an ecologist and resilience scientist at the Everglades Foundation in Florida’s Miami-Dade County.",
                    "start": 56,
                    "end": 154,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  }
                ],
                "mainText": "“Nature and people can coexist",
                "summary": "主句是「“Nature and people can coexist」，其余 2 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"Nature and people\"；谓语 = \"can coexist,” said\"；宾语 = \"Meenakshi Chabba, an ecologist and res...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"Foundation in Florida’s Miami-Dade County\"（后置定语，修饰名词 **Foundation**）",
                  "\"” said Meenakshi Chabba\"（插入语——删掉不影响主句结构，可先跳过）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 再译【主句】「“Nature and people can coexist」——这是整句的骨架",
                  "2. 按中文语序顺译即可；若句中有插入语，先译出来再删掉试试通不通顺。"
                ],
                "summary": "这是单层结构，找到主干后直接顺译即可。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p10-s6",
            "index": 6,
            "en": "“But we need good science and good management to reach that goal.”",
            "zh": "“但我们需要扎实的科学和良好的管理才能达成这一目标。”",
            "wordCount": 12,
            "analysis": {
              "pattern": "主系表 + 从句",
              "skeleton": "But we (S) + need (V) + good science and good management to re… (C)",
              "chunks": [
                {
                  "role": "S",
                  "text": "But we",
                  "start": 1,
                  "end": 7,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "need",
                  "start": 8,
                  "end": 12,
                  "note": "主句谓语"
                },
                {
                  "role": "C",
                  "text": "good science and good management to reach",
                  "start": 13,
                  "end": 54,
                  "note": "主句的宾语/表语"
                },
                {
                  "role": "Clause",
                  "text": "that goal.”",
                  "start": 55,
                  "end": 66,
                  "note": "由 that 引导的从句，修饰前面的名词（定语从句）"
                }
              ],
              "notes": [
                "本句含 1 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [],
            "fiveStep": {
              "step1": {
                "predicates": [],
                "count": 0,
                "summary": "未识别到明确的谓语动词，可先按标点分段理解。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 55,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  }
                ],
                "summary": "找到 1 个断点，可以把句子切成 2 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "“But we need good science and good management to reach",
                    "start": 0,
                    "end": 54,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-1",
                    "text": "that goal.”",
                    "start": 55,
                    "end": 66,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "",
                "summary": "未能确定主句，建议先按标点切分逐段理解。"
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"that goal.”\"（定语从句，修饰名词 **management**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"management to reach that goal\"（后置定语，修饰名词 **management**）"
                ],
                "summary": "平行动 0 处、修饰成分 2 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【名词性 / 定语从句】「that goal.”」——作说明成分，翻译时通常放在主句之前",
                  "2. 按「说明」关系组装：中文习惯把说明类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 1 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          },
          {
            "id": "nasa-coastal-wetlands-blue-carbon-p10-s7",
            "index": 7,
            "en": "The next step for NASA’s BlueFlux campaign is the development of a satellite-based data product that can help regional stakeholders evaluate in real-time how Florida’s wetlands are responding to restoration efforts designed to protect one of the state’s most precious natural resources — and all those who depend on it.",
            "zh": "NASA BlueFlux 项目的下一步，是开发一套基于卫星的数据产品，帮助区域利益相关方实时评估佛罗里达湿地对修复工作的响应——这些修复旨在保护该州最珍贵的自然资源之一，以及所有依赖它的人们。",
            "wordCount": 49,
            "analysis": {
              "pattern": "主系表 + 2 个从句（多重复合句）",
              "skeleton": "The next step for NASA’s BlueFlux (S) + campaign is (V) + the development of a satellite-based d… (C)",
              "chunks": [
                {
                  "role": "S",
                  "text": "The next step for NASA’s BlueFlux",
                  "start": 0,
                  "end": 33,
                  "note": "主句主语"
                },
                {
                  "role": "V",
                  "text": "campaign is",
                  "start": 34,
                  "end": 45,
                  "note": "主句谓语"
                },
                {
                  "role": "C",
                  "text": "the development of a satellite-based data product",
                  "start": 46,
                  "end": 95,
                  "note": "主句的宾语/表语"
                },
                {
                  "role": "Clause",
                  "text": "that can help regional stakeholders evaluate in real-time how Florida’s wetlands are responding to restoration efforts designed to protect one of the state’s most precious natural resources — and all those",
                  "start": 96,
                  "end": 301,
                  "note": "由 that 引导的从句，修饰前面的名词（定语从句）"
                },
                {
                  "role": "Clause",
                  "text": "who depend on it.",
                  "start": 302,
                  "end": 319,
                  "note": "由 who 引导的从句，修饰前面的名词（定语从句）"
                }
              ],
              "notes": [
                "本句含 2 个从属分句，先锁定主句主干，再逐层挂回修饰成分。",
                "句首出现分词短语时，它通常作状语，真正的主语在逗号之后。"
              ],
              "generatedBy": "rule"
            },
            "phrases": [
              {
                "id": "ph-181-0",
                "text": "responding to",
                "zh": "对…作出反应",
                "kind": "短语动词"
              },
              {
                "id": "ph-306-1",
                "text": "depend on",
                "zh": "取决于；依赖",
                "kind": "短语动词"
              }
            ],
            "fiveStep": {
              "step1": {
                "predicates": [
                  {
                    "text": "campaign is",
                    "start": 34,
                    "end": 45,
                    "role": "predicate"
                  },
                  {
                    "text": "can help",
                    "start": 101,
                    "end": 109,
                    "role": "predicate"
                  },
                  {
                    "text": "evaluate",
                    "start": 132,
                    "end": 140,
                    "role": "predicate"
                  },
                  {
                    "text": "time",
                    "start": 149,
                    "end": 153,
                    "role": "predicate"
                  },
                  {
                    "text": "are",
                    "start": 177,
                    "end": 180,
                    "role": "predicate"
                  },
                  {
                    "text": "responding",
                    "start": 181,
                    "end": 191,
                    "role": "nonfinite",
                    "note": "动名词 / 现在分词 doing，不能作谓语"
                  },
                  {
                    "text": "designed",
                    "start": 215,
                    "end": 223,
                    "role": "nonfinite",
                    "note": "过去分词作后置定语（相当于省略了 which is），不能作谓语"
                  },
                  {
                    "text": "protect",
                    "start": 227,
                    "end": 234,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  },
                  {
                    "text": "depend",
                    "start": 306,
                    "end": 312,
                    "role": "nonfinite",
                    "note": "不定式 to do，不能作谓语"
                  }
                ],
                "count": 5,
                "summary": "句中共有 5 个谓语动词（campaign is / can help / evaluate / time / are），意味着有 5 件事要译；另有 4 个\"看着像动词其实不是\"的干扰项，需要排除。"
              },
              "step2": {
                "breaks": [
                  {
                    "pos": 96,
                    "marker": "that",
                    "reason": "that 引导名词性 / 定语从句"
                  },
                  {
                    "pos": 286,
                    "marker": "— + and",
                    "reason": "and 连接并列成分，可在标点处断开"
                  },
                  {
                    "pos": 302,
                    "marker": "who",
                    "reason": "who 引导定语从句"
                  }
                ],
                "summary": "找到 3 个断点，可以把句子切成 4 段。断句依据是标点与连接词。"
              },
              "step3": {
                "segments": [
                  {
                    "id": "seg-0",
                    "text": "The next step for NASA’s BlueFlux campaign is the development of a satellite-based data product",
                    "start": 0,
                    "end": 95,
                    "type": "主句",
                    "isMain": true,
                    "hint": "主干拆解 —— 主语 = \"The next step for NASA’s BlueFlux\"；谓语 = \"campaign is\"；表语 = \"the development of a satellite-based d...\""
                  },
                  {
                    "id": "seg-1",
                    "text": "that can help regional stakeholders evaluate in real-time how Florida’s wetlands are responding to restoration efforts designed to protect one of the state’s most precious natural resources",
                    "start": 96,
                    "end": 285,
                    "type": "名词性 / 定语从句",
                    "isMain": false,
                    "hint": "作说明成分，翻译时通常放在主句之前"
                  },
                  {
                    "id": "seg-2",
                    "text": "and all those",
                    "start": 288,
                    "end": 301,
                    "type": "并列分句（承接前文）",
                    "isMain": false,
                    "hint": "与前面的分句并列，翻译时按同一层级处理"
                  },
                  {
                    "id": "seg-3",
                    "text": "who depend on it.",
                    "start": 302,
                    "end": 319,
                    "type": "定语从句",
                    "isMain": false,
                    "hint": "作修饰成分，翻译时通常放在主句之前"
                  }
                ],
                "mainText": "The next step for NASA’s BlueFlux campaign is the development of a satellite-based data product",
                "summary": "主句是「The next step for NASA’s BlueFlux campaign i…」，其余 3 段都是挂在这一主干上的修饰或从句。 主干拆解：主语 = \"The next step for NASA’s BlueFlux\"；谓语 = \"campaign is\"；表语 = \"the development of a satellite-based d...\""
              },
              "step4": {
                "parallels": [],
                "modifiers": [
                  "\"that can help regional stakeholders evaluate…\"（定语从句，修饰名词 **product**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"who depend on it.\"（定语从句，修饰名词 **resources —**——它给这个名词补充信息，翻译时通常前置成\"……的\"）",
                  "\"step for NASA’s BlueFlux campaign is the dev…\"（后置定语，修饰名词 **step**）",
                  "\"evaluate in real-time how Florida’s wetlands…\"（后置定语，修饰名词 **evaluate**）"
                ],
                "summary": "平行动 0 处、修饰成分 4 处。平行结构要逐项对应翻译；插入语可先跳过。"
              },
              "step5": {
                "steps": [
                  "1. 先译【名词性 / 定语从句】「that can help regional stakehold…」——作说明成分，翻译时通常放在主句之前",
                  "2. 先译【定语从句】「who depend on it.」——作修饰成分，翻译时通常放在主句之前",
                  "3. 再译【主句】「The next step for NASA’s BlueFlu…」——这是整句的骨架",
                  "4. 按「说明」关系组装：中文习惯把说明类信息放在主句之前，再补上主句的结论。"
                ],
                "summary": "全句由 2 个从属分句 + 1 个主句构成，按「先分句、后主句」的顺序翻译，最后按逻辑关系组装。"
              },
              "generatedBy": "rule"
            }
          }
        ]
      }
    ],
    "createdAt": "2026-09-15T00:00:00.000Z",
    "updatedAt": "2026-09-17T07:53:31.110Z"
  }
];

export const ATLAS_IDS = new Set(ATLAS_ARTICLES.map((a) => a.id));
