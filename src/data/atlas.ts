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
            "phrases": []
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
            ]
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
            ]
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            ]
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
            "phrases": []
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
            ]
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
            ]
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
            ]
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
            ]
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
            ]
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
            "phrases": []
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
            ]
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            ]
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
            ]
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
            ]
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
            "phrases": []
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
            "phrases": []
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
            ]
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
            "phrases": []
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
            ]
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
            "phrases": []
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
            ]
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            ]
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
            "phrases": []
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
            ]
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
            ]
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
            ]
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            ]
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
            ]
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            ]
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
            ]
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            ]
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
            ]
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
            ]
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
            "phrases": []
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
            ]
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
            "phrases": []
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
            "phrases": []
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
            ]
          }
        ]
      }
    ],
    "createdAt": "2026-09-15T00:00:00.000Z",
    "updatedAt": "2026-09-15T00:00:00.000Z"
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            ]
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
            "phrases": []
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
            ]
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            ]
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
            ]
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            ]
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            ]
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
            "phrases": []
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
            ]
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
            "phrases": []
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
            ]
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
            ]
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            ]
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
            "phrases": []
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
            "phrases": []
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
            ]
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            "phrases": []
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
            ]
          }
        ]
      }
    ],
    "createdAt": "2026-09-15T00:00:00.000Z",
    "updatedAt": "2026-09-15T00:00:00.000Z"
  }
];

export const ATLAS_IDS = new Set(ATLAS_ARTICLES.map((a) => a.id));
