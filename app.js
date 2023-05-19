// app.ts

// #8a8a8a  底部tobBar 默认
// #2693ff  系统蓝色
// 淡蓝色  #97bdde 在 用背景
// #f9f9f9   tobBar 背景色
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用。。。。。。')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }


    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)


    // 获取系统信息
    const systemInfo = wx.getSystemInfoSync();
    // 胶囊按钮位置信息
    const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
    // 导航栏高度 = 状态栏高度 + 44
    this.globalData.navBarHeight = systemInfo.statusBarHeight + 44;
    this.globalData.menuRight = systemInfo.screenWidth - menuButtonInfo.right;
    this.globalData.menuTop = menuButtonInfo.top;
    this.globalData.menuHeight = menuButtonInfo.height;




  },
  globalData: {
    daySentence1: "",
    daySentence2: "",
    daySentence3: "",
    navBarHeight: 0, // 导航栏高度
    menuRight: 0, // 胶囊距右方间距（方保持左、右间距一致）
    menuTop: 0, // 胶囊距底部间距（保持底部间距一致）
    menuHeight: 0, // 胶囊高度（自定义内容可与胶囊高度保证一致）
    books: [{
        "_id": "CET4",
        "title": "四级核心词 『CET4』",
        "desc": "CET4",
        "name": "四级核心词",
        "wordsNumber": 1162,
        "peopleNumber": 200.0,
        "image": "../../images/books/book-CET4.png"
      },
      {
        "_id": "CET6",
        "title": "六级核心词 『CET6』",
        "desc": "CET6",
        "name": "六级核心词",
        "wordsNumber": 1228,
        "peopleNumber": 140.0,
        "image": "../../images/books/book-CET6.png"
      },
      {
        "_id": "kaoYan",
        "title": "考研必考词 『考研』",
        "desc": "考研",
        "name": "考研必考词",
        "wordsNumber": 1341,
        "peopleNumber": 165.0,
        "image": "../../images/books/book-kaoYan.png"
      },
      {
        "_id": "CET4Full",
        "title": "四级大纲词 『CET4+』",
        "desc": "CET4+",
        "name": "四级大纲词",
        "wordsNumber": 3739,
        "peopleNumber": 0.0,
        "image": "../../images/books/book-CET4Full.png"
      },
      {
        "_id": "CET6Full",
        "title": "六级大纲词 『CET6+』",
        "desc": "CET6+",
        "name": "六级大纲词",
        "wordsNumber": 2078,
        "peopleNumber": 0.0,
        "image": "../../images/books/book-CET6Full.png"
      },
      {
        "_id": "kaoYanFull",
        "title": "考研大纲词汇 『考研+』",
        "desc": "考研+",
        "name": "考研大纲词汇",
        "wordsNumber": 4533,
        "peopleNumber": 0.0,
        "image": "../../images/books/book-kaoYanFull.png"
      },
      {
        "_id": "middle",
        "title": "中考大纲词 『中考』",
        "desc": "中考",
        "name": "中考大纲词",
        "wordsNumber": 1420,
        "peopleNumber": 203.0,
        "image": "../../images/books/book-middle.png"
      },
      {
        "_id": "primary",
        "title": "小学词汇 『小学』",
        "desc": "小学",
        "name": "小学词汇",
        "wordsNumber": 611,
        "peopleNumber": 125.0,
        "image": "../../images/books/book-primary.png"
      },
      {
        "_id": "high",
        "title": "高考大纲词汇 『高考』",
        "desc": "高考",
        "name": "高考大纲词汇",
        "wordsNumber": 3668,
        "peopleNumber": 135.0,
        "image": "../../images/books/book-high.png"
      },
      {
        "_id": "IELTS",
        "title": "雅思大纲词 『雅思』",
        "desc": "雅思",
        "name": "雅思大纲词",
        "wordsNumber": 3427,
        "peopleNumber": 0.0,
        "image": "../../images/books/book-IELTS.png"
      },
      {
        "_id": "BEC",
        "title": "商务英语词汇 『商务』",
        "desc": "商务",
        "name": "商务英语",
        "wordsNumber": 2753,
        "peopleNumber": 0.0,
        "image": "../../images/books/book-BEC.png"
      },
      {
        "_id": "random",
        "title": "随机所有词汇 『随机』",
        "desc": "随机",
        "name": "随机所有词汇",
        "wordsNumber": 25960,
        "peopleNumber": "2万+",
        "image": "../../images/books/book-random.png"
      },
    ],
    value:0,
    mybook: 0,
    everydayWord: 100,
    learnedWord: 0,
    remWord: [{
        "wordRank": 1,
        "headWord": "revolt",
        "content": {
          "word": {
            "wordHead": "revolt",
            "wordId": "KaoYanluan_1_1",
            "content": {
              "sentence": {
                "sentences": [{
                  "sContent": "The prime minister is now facing a revolt by members of his own party.",
                  "sCn": "首相现在面临着党内倒戈。"
                }, {
                  "sContent": "the Polish revolt of 1863",
                  "sCn": "1863年的波兰起义"
                }, {
                  "sContent": "It was feared that the army would revolt against the government.",
                  "sCn": "有人担心军队会挥戈反对政府。"
                }, {
                  "sContent": "Some members of the government may revolt against this proposed legislation.",
                  "sCn": "一些政府成员可能会反对这项拟议中的法规。"
                }],
                "desc": "例句"
              },
              "usphone": "rɪ'volt",
              "ukspeech": "revolt&type=1",
              "star": 0,
              "usspeech": "revolt&type=2",
              "syno": {
                "synos": [{
                  "pos": "vi",
                  "tran": "反抗；反叛；反感，厌恶",
                  "hwds": [{
                    "w": "strive against"
                  }, {
                    "w": "come out against"
                  }]
                }, {
                  "pos": "vt",
                  "tran": "使反感；使恶心",
                  "hwds": [{
                    "w": "sicken"
                  }]
                }, {
                  "pos": "n",
                  "tran": "反抗；叛乱；反感",
                  "hwds": [{
                    "w": "resistance"
                  }, {
                    "w": "hate"
                  }, {
                    "w": "rebellion"
                  }]
                }],
                "desc": "同近"
              },
              "ukphone": "rɪ'vəʊlt",
              "phrase": {
                "phrases": [{
                  "pContent": "in revolt",
                  "pCn": "反抗；造反"
                }, {
                  "pContent": "revolt against",
                  "pCn": "反感；厌恶"
                }, {
                  "pContent": "revolt at",
                  "pCn": "厌恶；憎恶"
                }],
                "desc": "短语"
              },
              "phone": "ri'vəult, -'vɔ:lt",
              "speech": "revolt",
              "remMethod": {
                "val": "re(背)+volt(转)→把背转过来对着人→反抗",
                "desc": "记忆"
              },
              "relWord": {
                "desc": "同根",
                "rels": [{
                  "pos": "adj",
                  "words": [{
                    "hwd": "revolting",
                    "tran": "叛乱的；背叛的；讨厌的"
                  }]
                }, {
                  "pos": "adv",
                  "words": [{
                    "hwd": "revoltingly",
                    "tran": "背叛地；讨厌地；令人恶心地"
                  }]
                }, {
                  "pos": "v",
                  "words": [{
                    "hwd": "revolting",
                    "tran": "反叛，造反；起反感（revolt的现在分词形式）"
                  }]
                }]
              },
              "trans": [{
                "tranCn": "反抗；造反，起义",
                "descOther": "英释",
                "pos": "n",
                "descCn": "中释",
                "tranOther": "a refusal to accept someone’s authority or obey rules or laws"
              }, {
                "tranCn": "起义；反抗",
                "descOther": "英释",
                "pos": "v",
                "descCn": "中释",
                "tranOther": "if people revolt, they take strong and often violent action against the government, usually with the aim of taking power away from them"
              }]
            }
          }
        },
        "bookId": "KaoYanluan_1"
      },
      {
        "wordRank": 2,
        "headWord": "specialist",
        "content": {
          "word": {
            "wordHead": "specialist",
            "wordId": "KaoYanluan_1_2",
            "content": {
              "sentence": {
                "sentences": [{
                  "sContent": "an attorney who is a specialist in banking law",
                  "sCn": "一名专攻银行法的律师"
                }],
                "desc": "例句"
              },
              "usphone": "'spɛʃəlɪst",
              "syno": {
                "synos": [{
                  "pos": "n",
                  "tran": "专家；专门医师",
                  "hwds": [{
                    "w": "expert"
                  }, {
                    "w": "mavin"
                  }]
                }, {
                  "pos": "adj",
                  "tran": "专家的；专业的",
                  "hwds": [{
                    "w": "professional"
                  }]
                }],
                "desc": "同近"
              },
              "ukphone": "'speʃ(ə)lɪst",
              "ukspeech": "specialist&type=1",
              "star": 0,
              "phrase": {
                "phrases": [{
                  "pContent": "specialist system",
                  "pCn": "专家系统；专家制度"
                }, {
                  "pContent": "heart specialist",
                  "pCn": "心脏病专家"
                }],
                "desc": "短语"
              },
              "phone": "'speʃəlist",
              "speech": "specialist",
              "relWord": {
                "desc": "同根",
                "rels": [{
                  "pos": "adj",
                  "words": [{
                    "hwd": "special",
                    "tran": "特别的；专门的，专用的"
                  }, {
                    "hwd": "specialty",
                    "tran": "特色的；专门的；独立的"
                  }, {
                    "hwd": "specialized",
                    "tran": "专业的；专门的"
                  }, {
                    "hwd": "specialised",
                    "tran": "专门的；特别的（等于specialized）"
                  }, {
                    "hwd": "specialistic",
                    "tran": "专家的；专攻的；专门学科的"
                  }]
                }, {
                  "pos": "adv",
                  "words": [{
                    "hwd": "specially",
                    "tran": "特别地；专门地"
                  }]
                }, {
                  "pos": "n",
                  "words": [{
                    "hwd": "special",
                    "tran": "特使，特派人员；特刊；特色菜；专车；特价商品"
                  }, {
                    "hwd": "specialty",
                    "tran": "专业，专长；特产；特性；招牌菜"
                  }, {
                    "hwd": "speciality",
                    "tran": "专业，专长；特性"
                  }, {
                    "hwd": "specialization",
                    "tran": "专门化；特殊化；特化作用"
                  }, {
                    "hwd": "specialisation",
                    "tran": "专业化（等于specialization）；特化，适应化"
                  }, {
                    "hwd": "specialness",
                    "tran": "专门，特殊"
                  }, {
                    "hwd": "specialism",
                    "tran": "专长；专攻；专门研究"
                  }, {
                    "hwd": "specializer",
                    "tran": "专家"
                  }]
                }, {
                  "pos": "v",
                  "words": [{
                    "hwd": "specialized",
                    "tran": "专攻（specialize的过去分词）；使…专门化；详细说明"
                  }, {
                    "hwd": "specialised",
                    "tran": "使专门化；专攻；详细说明（specialise的过去分词）"
                  }]
                }, {
                  "pos": "vi",
                  "words": [{
                    "hwd": "specialize",
                    "tran": "专门从事；详细说明；特化"
                  }, {
                    "hwd": "specialise",
                    "tran": "专门研究（等于specialize）"
                  }]
                }, {
                  "pos": "vt",
                  "words": [{
                    "hwd": "specialize",
                    "tran": "使专门化；使适应特殊情况；详细说明"
                  }, {
                    "hwd": "specialise",
                    "tran": "使专门化；限定…的范围；深入（等于specialize）"
                  }]
                }]
              },
              "usspeech": "specialist&type=2",
              "trans": [{
                "tranCn": "专家",
                "descOther": "英释",
                "pos": "n",
                "descCn": "中释",
                "tranOther": "someone who knows a lot about a particular subject, or is very skilled at it"
              }]
            }
          }
        },
        "bookId": "KaoYanluan_1"
      },
      {
        "wordRank": 3,
        "headWord": "carpet",
        "content": {
          "word": {
            "wordHead": "carpet",
            "wordId": "KaoYanluan_1_3",
            "content": {
              "sentence": {
                "sentences": [{
                  "sContent": "My bedroom carpet is green.",
                  "sCn": "我卧室里的地毯是绿色的。"
                }, {
                  "sContent": "All the rooms had fitted carpets (= carpets cut to fit the shape of the rooms ) .",
                  "sCn": "所有的房间都铺了全室地毯。"
                }],
                "desc": "例句"
              },
              "usphone": "'kɑrpɪt",
              "syno": {
                "synos": [{
                  "pos": "vt",
                  "tran": "在…上铺地毯，把地毯铺在…上；斥责",
                  "hwds": [{
                    "w": "tongue"
                  }, {
                    "w": "be down on"
                  }]
                }, {
                  "pos": "n",
                  "tran": "[纺]地毯；地毯状覆盖物",
                  "hwds": [{
                    "w": "footcloth"
                  }]
                }],
                "desc": "同近"
              },
              "ukphone": "'kɑːpɪt",
              "ukspeech": "carpet&type=1",
              "star": 0,
              "phrase": {
                "phrases": [{
                  "pContent": "on the carpet",
                  "pCn": "在考虑中；在审议中"
                }, {
                  "pContent": "red carpet",
                  "pCn": "（迎接贵宾用的）红地毯；隆重的接待"
                }, {
                  "pContent": "magic carpet",
                  "pCn": "n. （《一千零一夜》中载人飞行的）魔毯；幻想中的神奇无比的交通工具"
                }, {
                  "pContent": "wool carpet",
                  "pCn": "羊毛地毯"
                }, {
                  "pContent": "persian carpet",
                  "pCn": "波斯地毯"
                }, {
                  "pContent": "carpet backing",
                  "pCn": "地毯底布"
                }],
                "desc": "短语"
              },
              "phone": "'kɑ:pit",
              "speech": "carpet",
              "usspeech": "carpet&type=2",
              "trans": [{
                "tranCn": "地毯",
                "descOther": "英释",
                "pos": "n",
                "descCn": "中释",
                "tranOther": "heavy woven material for covering floors or stairs, or a piece of this material"
              }]
            }
          }
        },
        "bookId": "KaoYanluan_1"
      },
      {
        "wordRank": 4,
        "headWord": "meditation",
        "content": {
          "word": {
            "wordHead": "meditation",
            "wordId": "KaoYanluan_1_4",
            "content": {
              "sentence": {
                "sentences": [{
                  "sContent": "Yoga involves breathing exercises, stretching, and meditation.",
                  "sCn": "瑜伽包括呼吸训练、伸展和冥想。"
                }, {
                  "sContent": "She found him sitting alone, deep in meditation.",
                  "sCn": "她发现他独自坐着，陷入沉思。"
                }],
                "desc": "例句"
              },
              "usphone": ",mɛdɪ'teʃən",
              "syno": {
                "synos": [{
                  "pos": "n",
                  "tran": "冥想；沉思，深思",
                  "hwds": [{
                    "w": "reflection"
                  }, {
                    "w": "contemplation"
                  }]
                }],
                "desc": "同近"
              },
              "ukphone": "medɪ'teɪʃ(ə)n",
              "ukspeech": "meditation&type=1",
              "star": 0,
              "phone": ",medi'teiʃən",
              "speech": "meditation",
              "remMethod": {
                "val": "来自meditate(v. 沉思)",
                "desc": "记忆"
              },
              "relWord": {
                "desc": "同根",
                "rels": [{
                  "pos": "adj",
                  "words": [{
                    "hwd": "meditative",
                    "tran": "冥想的，沉思的；耽于默想的"
                  }]
                }, {
                  "pos": "adv",
                  "words": [{
                    "hwd": "meditatively",
                    "tran": "沉思地，冥想地"
                  }]
                }, {
                  "pos": "vi",
                  "words": [{
                    "hwd": "meditate",
                    "tran": "冥想；沉思"
                  }]
                }, {
                  "pos": "vt",
                  "words": [{
                    "hwd": "meditate",
                    "tran": "考虑；计划；企图"
                  }]
                }]
              },
              "usspeech": "meditation&type=2",
              "trans": [{
                "tranCn": "默想，冥想；沉思，深思，思考",
                "descOther": "英释",
                "pos": "n",
                "descCn": "中释",
                "tranOther": "the practice of emptying your mind of thoughts and feelings, in order to relax completely or for religious reasons"
              }]
            }
          }
        },
        "bookId": "KaoYanluan_1"
      },
      {
        "wordRank": 5,
        "headWord": "persist",
        "content": {
          "word": {
            "wordHead": "persist",
            "wordId": "KaoYanluan_1_5",
            "content": {
              "sentence": {
                "sentences": [{
                  "sContent": "‘I don’t think it’s right,’ John persisted.",
                  "sCn": "“我认为那不对。”约翰坚持说道。"
                }, {
                  "sContent": "If the pain persists, you must see a doctor.",
                  "sCn": "如果一直痛，你就必须去看医生了。"
                }],
                "desc": "例句"
              },
              "usphone": "pɚ'sɪst",
              "ukspeech": "persist&type=1",
              "star": 0,
              "usspeech": "persist&type=2",
              "syno": {
                "synos": [{
                  "pos": "vi",
                  "tran": "存留，坚持；持续，固执",
                  "hwds": [{
                    "w": "stay"
                  }, {
                    "w": "abide"
                  }]
                }, {
                  "pos": "vt",
                  "tran": "坚持说，反复说",
                  "hwds": [{
                    "w": "iterate"
                  }]
                }],
                "desc": "同近"
              },
              "ukphone": "pə'sɪst",
              "phrase": {
                "phrases": [{
                  "pContent": "persist in",
                  "pCn": "坚持；固执于"
                }],
                "desc": "短语"
              },
              "phone": "pə'sist, -'zist",
              "speech": "persist",
              "remMethod": {
                "val": "per(始终)+sist(站立)→始终站立着→坚持， 持续",
                "desc": "记忆"
              },
              "relWord": {
                "desc": "同根",
                "rels": [{
                  "pos": "adj",
                  "words": [{
                    "hwd": "persistent",
                    "tran": "固执的，坚持的；持久稳固的"
                  }]
                }, {
                  "pos": "adv",
                  "words": [{
                    "hwd": "persistently",
                    "tran": "坚持地；固执地"
                  }]
                }, {
                  "pos": "n",
                  "words": [{
                    "hwd": "perseverance",
                    "tran": "坚持不懈；不屈不挠"
                  }, {
                    "hwd": "persistence",
                    "tran": "持续；固执；存留"
                  }, {
                    "hwd": "perseveration",
                    "tran": "持续言语（指言语反复不止的病态）；持续重复的行为；执拗"
                  }]
                }, {
                  "pos": "vi",
                  "words": [{
                    "hwd": "perseverate",
                    "tran": "患持续言语症；表现固执"
                  }]
                }]
              },
              "trans": [{
                "tranCn": "坚持；执意；继续存在[发生]；持续",
                "descOther": "英释",
                "pos": "v",
                "descCn": "中释",
                "tranOther": "to continue to do something, although this is difficult, or other people oppose it"
              }]
            }
          }
        },
        "bookId": "KaoYanluan_1"
      },
      {
        "wordRank": 6,
        "headWord": "avoid",
        "content": {
          "word": {
            "wordHead": "avoid",
            "wordId": "KaoYanluan_1_6",
            "content": {
              "sentence": {
                "sentences": [{
                  "sContent": "Road safety is taught to young children to avoid road accidents.",
                  "sCn": "小孩子受到道路安全知识的教育，以避免交通事故。"
                }, {
                  "sContent": "It is important to take measures to avoid the risk of fire.",
                  "sCn": "采取措施避免火灾风险很重要。"
                }, {
                  "sContent": "Alan narrowly avoided an accident.",
                  "sCn": "艾伦险出事故。"
                }, {
                  "sContent": "Everyone seemed to be avoiding Nick.",
                  "sCn": "似乎所有人都在躲着尼克。"
                }],
                "desc": "例句"
              },
              "usphone": "ə'vɔɪd",
              "ukspeech": "avoid&type=1",
              "star": 0,
              "usspeech": "avoid&type=2",
              "syno": {
                "synos": [{
                  "pos": "vt",
                  "tran": "避免；避开，躲避；消除",
                  "hwds": [{
                    "w": "eliminate"
                  }, {
                    "w": "escape"
                  }, {
                    "w": "shun"
                  }]
                }],
                "desc": "同近"
              },
              "ukphone": "ə'vɒɪd",
              "phrase": {
                "phrases": [{
                  "pContent": "avoid doing",
                  "pCn": "避免做某事；逃避…"
                }],
                "desc": "短语"
              },
              "phone": "ə'vɔid",
              "speech": "avoid",
              "remMethod": {
                "val": "a+void(空旷， 空虚)→逃避空虚→逃避",
                "desc": "记忆"
              },
              "relWord": {
                "desc": "同根",
                "rels": [{
                  "pos": "adj",
                  "words": [{
                    "hwd": "avoidable",
                    "tran": "可避免的；可作为无效的；可回避的"
                  }]
                }, {
                  "pos": "n",
                  "words": [{
                    "hwd": "avoidance",
                    "tran": "逃避；废止；职位空缺"
                  }]
                }]
              },
              "trans": [{
                "tranCn": "防止，避免；逃避，避开",
                "descOther": "英释",
                "pos": "v",
                "descCn": "中释",
                "tranOther": "to prevent something bad from happening"
              }]
            }
          }
        },
        "bookId": "KaoYanluan_1"
      },
      {
        "wordRank": 7,
        "headWord": "yellow",
        "content": {
          "word": {
            "wordHead": "yellow",
            "wordId": "KaoYanluan_1_7",
            "content": {
              "sentence": {
                "sentences": [{
                  "sContent": "yellow flowers",
                  "sCn": "黄花"
                }, {
                  "sContent": "Yellow doesn’t suit me at all.",
                  "sCn": "黄色一点都不适合我。"
                }],
                "desc": "例句"
              },
              "usphone": "'jeloʊ",
              "syno": {
                "synos": [{
                  "pos": "adj",
                  "tran": "[光]黄色的；黄皮肤的",
                  "hwds": [{
                    "w": "maize"
                  }, {
                    "w": "xanthic"
                  }]
                }, {
                  "pos": "n",
                  "tran": "[光]黄色；黄种人；[染料]黄色颜料",
                  "hwds": [{
                    "w": "sunking"
                  }, {
                    "w": "giallo"
                  }]
                }],
                "desc": "同近"
              },
              "ukphone": "'jeləʊ",
              "ukspeech": "yellow&type=1",
              "star": 0,
              "phrase": {
                "phrases": [{
                  "pContent": "yellow river",
                  "pCn": "黄河"
                }, {
                  "pContent": "yellow sea",
                  "pCn": "黄海"
                }, {
                  "pContent": "turn yellow",
                  "pCn": "变黄；胆怯起来"
                }, {
                  "pContent": "pale yellow",
                  "pCn": "adj. 淡黄色，浅黄色"
                }, {
                  "pContent": "bright yellow",
                  "pCn": "嫩黄"
                }, {
                  "pContent": "light yellow",
                  "pCn": "n. 淡黄色；鹅黄"
                }, {
                  "pContent": "golden yellow",
                  "pCn": "金黄；金黄色"
                }, {
                  "pContent": "yellow phosphorus",
                  "pCn": "黄磷"
                }, {
                  "pContent": "yellow light",
                  "pCn": "黄色灯"
                }, {
                  "pContent": "yellow card",
                  "pCn": "（足球）黄牌"
                }, {
                  "pContent": "yellow fever",
                  "pCn": "[医]黄热病"
                }, {
                  "pContent": "straw yellow",
                  "pCn": "n. 淡黄色"
                }, {
                  "pContent": "dark yellow",
                  "pCn": "深黄色"
                }, {
                  "pContent": "yellow wine",
                  "pCn": "n. 黄酒"
                }, {
                  "pContent": "yellow green",
                  "pCn": "黄绿色"
                }, {
                  "pContent": "yellow gold",
                  "pCn": "黄银铜合金"
                }, {
                  "pContent": "yellow page",
                  "pCn": "黄页（国际上对商业电话号码薄的固定称谓）"
                }, {
                  "pContent": "yellow line",
                  "pCn": "黄色标线"
                }, {
                  "pContent": "yellow crane tower",
                  "pCn": "黄鹤楼"
                }, {
                  "pContent": "orange yellow",
                  "pCn": "橙黄；桔黄"
                }],
                "desc": "短语"
              },
              "speech": "yellow",
              "relWord": {
                "desc": "同根",
                "rels": [{
                  "pos": "adj",
                  "words": [{
                    "hwd": "yellowish",
                    "tran": "微黄色的，淡黄色的"
                  }]
                }, {
                  "pos": "n",
                  "words": [{
                    "hwd": "yellowness",
                    "tran": "黄色；发黄；猜忌；胆怯"
                  }]
                }]
              },
              "usspeech": "yellow&type=2",
              "trans": [{
                "tranCn": "黄的，黄色的",
                "descOther": "英释",
                "pos": "adj",
                "descCn": "中释",
                "tranOther": "having the colour of butter or the middle part of an egg"
              }, {
                "tranCn": "黄色",
                "descOther": "英释",
                "pos": "n",
                "descCn": "中释",
                "tranOther": "the colour of butter or the middle part of an egg"
              }]
            }
          }
        },
        "bookId": "KaoYanluan_1"
      },
      {
        "wordRank": 8,
        "headWord": "consult",
        "content": {
          "word": {
            "wordHead": "consult",
            "wordId": "KaoYanluan_1_8",
            "content": {
              "sentence": {
                "sentences": [{
                  "sContent": "If symptoms persist, consult a doctor without delay.",
                  "sCn": "如果症状持续的话，马上咨询医生。"
                }, {
                  "sContent": "I can’t believe you sold the car without consulting me!",
                  "sCn": "我真不敢相信你不和我商量一下就把车给卖了！"
                }, {
                  "sContent": "Have you consulted a dictionary?",
                  "sCn": "你查过词典了吗？"
                }],
                "desc": "例句"
              },
              "usphone": "kən'sʌlt",
              "syno": {
                "synos": [{
                  "pos": "vt",
                  "tran": "查阅；商量；向…请教",
                  "hwds": [{
                    "w": "look up"
                  }, {
                    "w": "speak together"
                  }]
                }, {
                  "pos": "vi",
                  "tran": "请教；商议；当顾问",
                  "hwds": [{
                    "w": "take advice"
                  }, {
                    "w": "seek advice"
                  }]
                }],
                "desc": "同近"
              },
              "ukphone": "kən'sʌlt",
              "ukspeech": "consult&type=1",
              "star": 0,
              "phrase": {
                "phrases": [{
                  "pContent": "consult with",
                  "pCn": "商量，协商"
                }],
                "desc": "短语"
              },
              "phone": "kɔn'sʌlt, 'kɔnsʌlt",
              "speech": "consult",
              "relWord": {
                "desc": "同根",
                "rels": [{
                  "pos": "adj",
                  "words": [{
                    "hwd": "consultive",
                    "tran": "咨询的"
                  }]
                }, {
                  "pos": "n",
                  "words": [{
                    "hwd": "consultant",
                    "tran": "顾问；咨询者；会诊医生"
                  }, {
                    "hwd": "consultation",
                    "tran": "咨询；磋商；[临床] 会诊；讨论会"
                  }, {
                    "hwd": "consultancy",
                    "tran": "咨询公司；顾问工作"
                  }]
                }]
              },
              "usspeech": "consult&type=2",
              "trans": [{
                "tranCn": "请教，向...咨询；找...商量；查阅，查看",
                "descOther": "英释",
                "pos": "v",
                "descCn": "中释",
                "tranOther": "to ask for information or advice from someone because it is their job to know something"
              }]
            }
          }
        },
        "bookId": "KaoYanluan_1"
      },
      {
        "wordRank": 9,
        "headWord": "assume",
        "content": {
          "word": {
            "wordHead": "assume",
            "wordId": "KaoYanluan_1_9",
            "content": {
              "sentence": {
                "sentences": [{
                  "sContent": "I think we can safely assume (=  it is almost certain  ) that interest rates will go up again soon.",
                  "sCn": "我想我们几乎可以肯定，利率很快会再次上调。"
                }, {
                  "sContent": "When it got to midnight and Paul was still not back, I began to assume the worst (=  think that the worst possible thing had happened  ) .",
                  "sCn": "到午夜时保罗还没回来，我就开始往最坏的地方想了。"
                }, {
                  "sContent": "Jim Paton will assume the role of managing director.",
                  "sCn": "吉姆·帕顿将出任常务董事一职。"
                }, {
                  "sContent": "Andy assumed an air of indifference whenever her name was mentioned.",
                  "sCn": "每次提到她的名字，安迪都装出无所谓的样子。"
                }],
                "desc": "例句"
              },
              "usphone": "ə'sum",
              "syno": {
                "synos": [{
                  "pos": "vt",
                  "tran": "承担；假定；采取；呈现",
                  "hwds": [{
                    "w": "undertake"
                  }, {
                    "w": "adopt"
                  }, {
                    "w": "accept"
                  }, {
                    "w": "shoulder"
                  }, {
                    "w": "sustain"
                  }]
                }, {
                  "pos": "vi",
                  "tran": "装腔作势；多管闲事",
                  "hwds": [{
                    "w": "attitudinize"
                  }, {
                    "w": "put on the dog"
                  }]
                }],
                "desc": "同近"
              },
              "ukphone": "ə'sjuːm",
              "ukspeech": "assume&type=1",
              "star": 0,
              "phrase": {
                "phrases": [{
                  "pContent": "assume responsibility",
                  "pCn": "承担责任"
                }, {
                  "pContent": "assume liability",
                  "pCn": "承担责任"
                }, {
                  "pContent": "subjective assume",
                  "pCn": "主观臆断"
                }],
                "desc": "短语"
              },
              "speech": "assume",
              "remMethod": {
                "val": "as+sum(取)+e→采取",
                "desc": "记忆"
              },
              "relWord": {
                "desc": "同根",
                "rels": [{
                  "pos": "adj",
                  "words": [{
                    "hwd": "assumed",
                    "tran": "假定的；假装的"
                  }, {
                    "hwd": "assuming",
                    "tran": "傲慢的；不逊的；僭越的"
                  }, {
                    "hwd": "assumptive",
                    "tran": "假定的；设想的；傲慢的"
                  }]
                }, {
                  "pos": "adv",
                  "words": [{
                    "hwd": "assumedly",
                    "tran": "大概；多半"
                  }]
                }, {
                  "pos": "n",
                  "words": [{
                    "hwd": "assumption",
                    "tran": "假定；设想；担任；采取"
                  }]
                }, {
                  "pos": "v",
                  "words": [{
                    "hwd": "assuming",
                    "tran": "假设（assume的ing形式）"
                  }]
                }]
              },
              "usspeech": "assume&type=2",
              "trans": [{
                "tranCn": "假定，设想；开始掌管/承担责任等；假装[装出]…的态度/样子/表情等",
                "descOther": "英释",
                "pos": "v",
                "descCn": "中释",
                "tranOther": "to think that something is true, although you do not have definite proof"
              }]
            }
          }
        },
        "bookId": "KaoYanluan_1"
      },
      {
        "wordRank": 10,
        "headWord": "doctorate",
        "content": {
          "word": {
            "wordHead": "doctorate",
            "wordId": "KaoYanluan_1_10",
            "content": {
              "sentence": {
                "sentences": [{
                  "sContent": "Professor Lanphier obtained his doctorate in social psychology from the University of Michigan.",
                  "sCn": "兰菲尔教授从密歇根大学获得了社会心理学博士学位。"
                }],
                "desc": "例句"
              },
              "usphone": "'dɑktərət",
              "syno": {
                "synos": [{
                  "pos": "n",
                  "tran": "博士学位；博士头衔",
                  "hwds": [{
                    "w": "doctoral degree"
                  }]
                }],
                "desc": "同近"
              },
              "ukphone": "'dɒkt(ə)rət",
              "ukspeech": "doctorate&type=1",
              "star": 0,
              "phrase": {
                "phrases": [{
                  "pContent": "doctorate degree",
                  "pCn": "博士学位"
                }, {
                  "pContent": "post doctorate",
                  "pCn": "博士后"
                }],
                "desc": "短语"
              },
              "phone": "'dɔktərit",
              "speech": "doctorate",
              "relWord": {
                "desc": "同根",
                "rels": [{
                  "pos": "adj",
                  "words": [{
                    "hwd": "doctoral",
                    "tran": "博士的；博士学位的；有博士学位的"
                  }, {
                    "hwd": "doctorial",
                    "tran": "博士的；学者的（等于doctorel）"
                  }]
                }, {
                  "pos": "n",
                  "words": [{
                    "hwd": "doctor",
                    "tran": "医生；博士"
                  }, {
                    "hwd": "doctoral",
                    "tran": "博士论文"
                  }]
                }, {
                  "pos": "vi",
                  "words": [{
                    "hwd": "doctor",
                    "tran": "就医；行医"
                  }]
                }, {
                  "pos": "vt",
                  "words": [{
                    "hwd": "doctor",
                    "tran": "修理；窜改，伪造；为…治病；授以博士学位"
                  }]
                }]
              },
              "usspeech": "doctorate&type=2",
              "trans": [{
                "tranCn": "博士学位;博士头衔",
                "descOther": "英释",
                "pos": "n",
                "descCn": "中释",
                "tranOther": "a university degree of the highest level"
              }]
            }
          }
        },
        "bookId": "KaoYanluan_1"
      }

    ]

  },

})