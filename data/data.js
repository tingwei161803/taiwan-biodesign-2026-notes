/* Site data: one shared file loaded by every page.
   window.SITE_META  - site title/subtitle + repo for the star button.
   window.SITE_PAGES - one entry per page; each entry carries its own layout data.
   Every human-visible string is {en, zh} so the language toggle can repaint everything. */

window.SITE_META = {
  "title": {
    "en": "Taipei Medical Congress 2026 Notes",
    "zh": "2026 台北醫學會演講筆記"
  },
  "subtitle": {
    "en": "Personal, unofficial notes from the Taipei Medical Congress 2026.",
    "zh": "2026 台北醫學會的個人非官方筆記。"
  },
  "repo": "tingwei161803/taiwan-biodesign-2026-notes"
};

window.SITE_PAGES = [
  {
    "slug": "home",
    "layout": "hub",
    "icon": "home",
    "title": {
      "en": "Overview",
      "zh": "總覽"
    },
    "subtitle": {
      "en": "Personal, unofficial notes from the Taipei Medical Congress 2026 (TMU Hospital's 50th-anniversary symposium), August 8, 2026, Taipei Medical University - four talks on health policy, AI in precision medicine, and global health innovation, plus a source-linked fact-check. Errors are the note-taker's own.",
      "zh": "2026 台北醫學會(北醫附醫 50 週年院慶研討會)個人非官方筆記,2026-08-08 於臺北醫學大學——四場演講(健康政策、AI 精準醫療、全球健康創新)整理,加上附來源連結的事實查證。內容如有錯誤由筆者負責。"
    },
    "stats": [
      {
        "value": 4,
        "label": {
          "en": "Talks covered",
          "zh": "場演講筆記"
        }
      },
      {
        "value": 31,
        "label": {
          "en": "Claims fact-checked",
          "zh": "項事實查證"
        }
      },
      {
        "value": 7,
        "label": {
          "en": "Speakers on stage",
          "zh": "位登台講者"
        }
      }
    ]
  },
  {
    "slug": "agenda",
    "layout": "timeline",
    "icon": "timeline",
    "title": {
      "en": "Program",
      "zh": "議程"
    },
    "subtitle": {
      "en": "The actual morning program on August 8, 2026, at Taipei Medical University.",
      "zh": "2026 年 8 月 8 日上午在臺北醫學大學進行的實際議程。"
    },
    "events": [
      {
        "date": {
          "en": "09:00",
          "zh": "09:00"
        },
        "title": {
          "en": "Opening Remarks",
          "zh": "開幕致詞"
        },
        "body": {
          "en": "President's address, an outlook on Taiwan's healthcare system, and the past, present, and future of TMU Hospital. Speakers: President Wu Mai-Si (Taipei Medical University), Deputy Minister Lin Ching-Yi (Ministry of Health and Welfare), and Superintendent Shih Chun-Ming (TMU Hospital).",
          "zh": "校長致詞、臺灣醫療展望,以及北醫附醫的過去現在未來。講者:吳麥斯校長(臺北醫學大學)、林靜儀次長(衛生福利部)、施俊明院長(北醫附醫)。"
        }
      },
      {
        "date": {
          "en": "09:35",
          "zh": "09:35"
        },
        "title": {
          "en": "Group Photo",
          "zh": "大合照"
        },
        "body": {
          "en": "No speaker for this segment.",
          "zh": "無講者。"
        }
      },
      {
        "date": {
          "en": "09:35–10:55",
          "zh": "09:35–10:55"
        },
        "title": {
          "en": "Plenary Lecture 1: Challenges and Strategies for National Health",
          "zh": "Plenary Lecture 1:國民健康的挑戰與策略"
        },
        "body": {
          "en": "Speaker: Sheu Huey-Herng (Deputy Director-General, National Health Research Institutes).",
          "zh": "講者:許惠恒(國家衛生研究院副院長)。"
        }
      },
      {
        "date": {
          "en": "09:35–10:55",
          "zh": "09:35–10:55"
        },
        "title": {
          "en": "Plenary Lecture 2: The End of Average Medicine",
          "zh": "Plenary Lecture 2:平均醫學的終結"
        },
        "body": {
          "en": "Speaker: Yu Shyr (Vanderbilt University Medical Center). This talk followed Plenary Lecture 1 within the same session block; the program listed no separate start time for it.",
          "zh": "講者:石瑜 Yu Shyr(范德堡大學醫學中心)。此場次緊接 Plenary Lecture 1、屬同一時段區塊,議程表未另列獨立時間。"
        }
      },
      {
        "date": {
          "en": "10:55–11:05",
          "zh": "10:55–11:05"
        },
        "title": {
          "en": "Coffee Break",
          "zh": "茶歇"
        },
        "body": {
          "en": "No speaker for this segment.",
          "zh": "無講者。"
        }
      },
      {
        "date": {
          "en": "11:05–11:45",
          "zh": "11:05–11:45"
        },
        "title": {
          "en": "Plenary Lecture 3: The Future of Global Health Innovation",
          "zh": "Plenary Lecture 3:全球健康創新的未來"
        },
        "body": {
          "en": "Speaker: Prof. Anurag Mairal (Stanford Mussallem Center for Biodesign).",
          "zh": "講者:Anurag Mairal 教授(史丹佛大學 Mussallem Center for Biodesign)。"
        }
      },
      {
        "date": {
          "en": "11:45–12:30",
          "zh": "11:45–12:30"
        },
        "title": {
          "en": "AI Reshaping the Healthcare System: Needs-Driven Innovation",
          "zh": "AI 重塑醫療體系:Needs Driven Innovation"
        },
        "body": {
          "en": "Speaker: Dr. Rush Bartlett (Stanford Mussallem Center for Biodesign). The note-taker did not attend this session, so no notes are available for it.",
          "zh": "講者:Rush Bartlett 博士(史丹佛大學 Mussallem Center for Biodesign)。筆記主人未參加此場次,無筆記。"
        }
      },
      {
        "date": {
          "en": "Afternoon",
          "zh": "下午"
        },
        "title": {
          "en": "Afternoon Sessions (Not Attended)",
          "zh": "下午場次(未參加)"
        },
        "body": {
          "en": "The congress continued in the afternoon with additional sessions, including on cancer care, which the note-taker did not attend; they fall outside the scope of these notes.",
          "zh": "大會下午另有癌症醫療等場次,筆記主人未參加,不在本筆記範圍。"
        }
      }
    ]
  },
  {
    "slug": "opening",
    "layout": "article",
    "icon": "campaign",
    "title": {
      "en": "Opening Remarks - Deputy Minister Lin Ching-Yi, \"Taiwan's Healthcare Outlook\"",
      "zh": "開幕致詞 — 林靜儀次長「臺灣醫療展望」"
    },
    "subtitle": {
      "en": "Deputy Minister of Health and Welfare Lin Ching-Yi outlined the next steps for Taiwan's health policy across four directions: prevention, governance, workplace-friendly care, and sustainable healthcare.",
      "zh": "衛福部政務次長林靜儀以「預防、治理、職場友善、永續醫療」四大方向,勾勒台灣醫療政策的下一步。"
    },
    "sections": [
      {
        "id": "at-a-glance",
        "heading": {
          "en": "At a Glance",
          "zh": "場次資訊"
        },
        "blocks": [
          {
            "type": "ul",
            "items": {
              "en": [
                "Session: 09:00 Opening Remarks - (1) President Wu Mai-Szu (10 min), (2) Deputy Minister Lin Ching-Yi, \"Taiwan's Healthcare Outlook\" (10 min), (3) Superintendent Shih Chun-Ming, \"The Past, Present, and Future of Taipei Medical University Hospital\" (15 min); Chairman Lin Chien-Huang also gave opening remarks",
                "Coverage: President Wu Mai-Szu's remarks are not covered in these notes. The Lin Ching-Yi session is covered in full. The speaker for the Taipei Medical University Hospital opening remarks segment is inferred to be Superintendent Shih Chun-Ming based on the agenda order, but this has not been confirmed"
              ],
              "zh": [
                "場次:09:00 開幕致詞——① 吳麥斯校長(10 分鐘)② 林靜儀政務次長「臺灣醫療展望」(10 分鐘)③ 施俊明院長「北醫附醫的過去、現在與未來」(15 分鐘);另有林建煌董事長開幕致詞",
                "記錄狀態:吳麥斯校長致詞未記錄;林靜儀場次記錄完整;北醫附醫代表致詞段落之講者身分依議程順序推斷為施俊明院長,未經證實"
              ]
            }
          }
        ]
      },
      {
        "id": "prevention",
        "heading": {
          "en": "Lin Ching-Yi: 1. From Treating Disease to Preventing Disease",
          "zh": "林靜儀:① 從疾病治療走向疾病預防"
        },
        "blocks": [
          {
            "type": "p",
            "text": {
              "en": "Deputy Minister Lin Ching-Yi laid out four key directions.",
              "zh": "林靜儀政務次長提出四大方向。"
            }
          },
          {
            "type": "ul",
            "items": {
              "en": [
                "Cancer screening and adult health check-up ages are being lowered, so younger people start health promotion earlier",
                "Goal: this echoes the \"Healthy Taiwan\" policy - living longer should also mean living healthier, cutting down the years people spend in poor health",
                "The Health Coin program launches this year. Its core design idea is an immediate small reward: telling people that eating healthy will mean fewer heart problems in ten years doesn't really move them, but getting a Health Coin right after a check-up or a vaccine, and cashing it in for small rewards in daily life, actually changes behavior",
                "She pointed out a tension built into National Health Insurance: it's called \"insurance,\" but the way premiums are set is actually more socialist in spirit, covering everyone under the same safety net. Health Coin brings back some of the personal responsibility that insurance is supposed to carry, this time on the prevention side"
              ],
              "zh": [
                "癌症篩檢、成人健檢年齡下修,讓更年輕族群及早接觸健康促進",
                "目標:呼應「健康台灣」政策——活得久也要活得健康,減少不健康餘命",
                "健康幣今年上路:設計核心是「立即的小獎賞」——跟民眾說健康飲食十年後心血管疾病比較少,沒有感覺;但做健檢、打疫苗立刻拿到健康幣、在生活中兌換小獎勵,行為就會改變",
                "她點出健保的內在張力:健保名為「保險」,但保費設計其實偏社會主義(把所有人 cover 進醫療安全網);健康幣則把「保險精神裡的自己責任」帶回預防端"
              ]
            }
          }
        ]
      },
      {
        "id": "governance",
        "heading": {
          "en": "Lin Ching-Yi: 2. From Treating Disease to Governing Disease",
          "zh": "林靜儀:② 從疾病治療走向疾病治理"
        },
        "blocks": [
          {
            "type": "ul",
            "items": {
              "en": [
                "Thirty years of National Health Insurance data is Taiwan's most valuable asset. Following a constitutional court ruling (Judicial Yuan Constitutional Judgment No. 13, 2022), a dedicated law governing the health insurance database has now passed its third reading (the National Health Insurance Data Management Act, December 2025), including an opt-out right (see the Fact Check page)",
                "Disease governance needs to be tiered, not one-size-fits-all: data should help clinicians and policymakers design different approaches for different diseases",
                "Paired with the National Health Insurance app, so people can manage their own health data on their phones, with AI support for both healthcare workers and patients planned next"
              ],
              "zh": [
                "健保 30 年累積的全民健康資料是最寶貴資產;因應釋憲(111 年憲判字第 13 號),健保資料庫專法已完成立法(「全民健康保險資料管理條例」2025 年 12 月三讀,含退出權)(見事實查證頁)",
                "疾病治理要分級、不齊頭式:用資料協助臨床人員與決策者針對不同疾病設計不同模式",
                "搭配健保 App 讓民眾用自己手機裡的健康資料自主管理;後續導入 AI 協助醫護與病人"
              ]
            }
          }
        ]
      },
      {
        "id": "workplace-friendly",
        "heading": {
          "en": "Lin Ching-Yi: 3. From Patient-Centered to Also Staff-Friendly Workplaces",
          "zh": "林靜儀:③ 從病人為中心走向兼顧醫療人員職場友善"
        },
        "blocks": [
          {
            "type": "p",
            "text": {
              "en": "Hospital governance shouldn't only center on patients; it also needs to look after frontline healthcare workers, their retention, and their working conditions.",
              "zh": "不只以病人為中心,醫院治理也要照顧第一線醫療人員的留任與工作環境。"
            }
          }
        ]
      },
      {
        "id": "sustainable-healthcare",
        "heading": {
          "en": "Lin Ching-Yi: 4. From High Energy Consumption to Resilient, Energy-Saving, Sustainable Healthcare",
          "zh": "林靜儀:④ 從高耗能走向韌性、節能、永續醫療"
        },
        "blocks": [
          {
            "type": "ul",
            "items": {
              "en": [
                "Healthcare is a triple-high-consumption industry, heavy on energy, resources, and labor, and it needs to shift toward sustainability",
                "Facing earthquakes, typhoons, extreme weather, and geopolitical risk, Taiwan is building up healthcare resilience preparedness, including plans for mass-casualty scenarios and drug supply chains (the program's official name is still unverified)",
                "She noted that Taipei Medical University is helping the Ministry of Health and Welfare push hospital energy-saving self-reporting and resilience preparedness",
                "Closing: marking Taipei Medical University's 66th anniversary and the hospital's 50th anniversary, the government will keep securing resources and pushing regulatory deregulation"
              ],
              "zh": [
                "醫療產業是能源、資源、人力的三重高消耗產業,要轉向永續",
                "台灣面對地震、颱風等極端氣候與地緣政治風險,推動醫療韌性準備(含大量傷患情境與藥品供應鏈相關計畫;計畫正式名稱待查證)",
                "提及北醫協助衛福部推動醫院節能自我報告與韌性醫療準備",
                "結語:呼應北醫 66 年校史與附醫 50 年院慶,政府持續爭取資源、推動法規鬆綁"
              ]
            }
          }
        ]
      },
      {
        "id": "other-remarks",
        "heading": {
          "en": "Other Opening Remarks",
          "zh": "其他開幕橋段"
        },
        "blocks": [
          {
            "type": "ul",
            "items": {
              "en": [
                "Lin Chien-Huang gave opening remarks as Chairman of the Board (the title shown on the on-site slide differs from some publicly available information online) (see the Fact Check page)",
                "Shih Chun-Ming, Superintendent of Taipei Medical University Hospital, spoke on \"The Past, Present, and Future of Taipei Medical University Hospital,\" covering the hospital's 50th-anniversary theme and guest introductions, and introduced the first keynote lecture"
              ],
              "zh": [
                "林建煌以「董事長」身分開幕致詞(現場投影片職稱與部分網路公開資訊有出入)(見事實查證頁)",
                "施俊明(北醫附醫院長)講「臺北醫學大學附設醫院的過去、現在與未來」,內容包括 50 週年主軸、貴賓介紹,並引言第一場主題演講"
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "slug": "sheu",
    "layout": "article",
    "icon": "monitor_heart",
    "title": {
      "en": "Wayne H.-H. Sheu - National Health Challenges and Strategies",
      "zh": "許惠恒 - 國民健康的挑戰與策略"
    },
    "subtitle": {
      "en": "Taiwan's top public health challenge has shifted from cancer to chronic conditions like high blood pressure, high blood sugar, high cholesterol, and CKM (cardiovascular-kidney-metabolic) syndrome. National databases (TDR, Taiwan Biobank, TPMI, NBCT) are being used to find and manage these patients, turning chronic disease control into a national strategy through the 888 target and integrated care.",
      "zh": "台灣的頭號公共衛生挑戰已從癌症轉向三高慢性病與 CKM(心-腎-代謝)症候群——用國家級資料庫(TDR、Taiwan Biobank、TPMI、NBCT)把病人「找出來、管起來」,以 888 目標與整合照護把慢性病治理變成國家戰略。"
    },
    "sections": [
      {
        "id": "at-a-glance",
        "heading": {
          "en": "At a Glance",
          "zh": "場次資訊"
        },
        "blocks": [
          {
            "type": "ul",
            "items": {
              "en": [
                "Session: Plenary Lecture 1 (approximately 09:22-09:50)",
                "Slide title: Challenges and Opportunities of National Health Policies (國民健康政策之挑戰與機會)",
                "Speaker: Distinguished Investigator and Vice President, National Health Research Institutes (since January 2023); former Superintendent of Taichung Veterans General Hospital; diabetes and endocrinology specialist"
              ],
              "zh": [
                "場次:Plenary Lecture 1(約 09:22–09:50)",
                "投影片標題:Challenges and Opportunities of National Health Policies(國民健康政策之挑戰與機會)",
                "講者:國家衛生研究院特聘研究員兼副院長(2023 年 1 月起);前台中榮總院長;糖尿病/內分泌專家"
              ]
            }
          }
        ]
      },
      {
        "id": "six-challenges",
        "heading": {
          "en": "Six Challenges Facing Taiwan's Healthcare System",
          "zh": "台灣醫療體系六大挑戰"
        },
        "blocks": [
          {
            "type": "ul",
            "items": {
              "en": [
                "A super-aged society (the pace of aging is accelerating rapidly, driving demand for home-based care)",
                "Financial pressure on National Health Insurance (new drugs, cancer drugs, and rare-disease drugs are expensive)",
                "The burden of chronic disease",
                "Workforce shortages (driven by the low birth rate)",
                "Empowering and enabling the public",
                "Geographic barriers in rural areas"
              ],
              "zh": [
                "超高齡社會(老化速度遽升、在宅照護需求增加)",
                "健保財務衝擊(新藥、癌藥、罕藥昂貴)",
                "慢性疾病負擔",
                "人力短缺(少子化)",
                "民眾賦能賦權",
                "偏鄉地理障礙"
              ]
            }
          }
        ]
      },
      {
        "id": "chronic-disease-leading-challenge",
        "heading": {
          "en": "Chronic Disease Is Now the Top Public Health Challenge",
          "zh": "慢性病已是頭號公衛挑戰"
        },
        "blocks": [
          {
            "type": "ul",
            "items": {
              "en": [
                "Half of the top ten causes of death are chronic diseases. Chronic conditions related to high blood pressure, high blood sugar, and high cholesterol together caused 62,164 deaths a year, 30 percent of all deaths, more than cancer's 53,126 deaths, or 26 percent. The point made was that these three conditions kill about as many people as cancer does (the slide used 2023 data, which checks out against official figures) (see the Fact Check page)",
                "Taiwan sees over 200,000 deaths a year nationwide (the official 2024 figure was 201,383)"
              ],
              "zh": [
                "十大死因中一半是慢性病;三高相關慢性病年死亡 62,164 人(30%),超過癌症的 53,126 人(26%)——「三高的致死衝擊不亞於癌症」(投影片採 2023 年數據,經查證吻合)(見事實查證頁)",
                "全台年死亡 20 多萬人(2024 年官方數字:201,383 人)"
              ]
            }
          }
        ]
      },
      {
        "id": "tdr-diabetes-registry",
        "heading": {
          "en": "Ten Years of Diabetes Care Results: TDR",
          "zh": "糖尿病照護 10 年成績單:TDR"
        },
        "blocks": [
          {
            "type": "ul",
            "items": {
              "en": [
                "The Taiwan Diabetes Registry (TDR) tracked patients from 2015 to 2025",
                "LDL cholesterol control (under 100) had the highest and most stable rate, around 73-85 percent",
                "HbA1c control (under 7 percent) kept improving, rising from about 37 percent to over 60 percent",
                "Blood pressure control (under 130/80) had the lowest rate and showed no improvement over the decade, staying around 33-47 percent",
                "The share of patients hitting all three targets at once (LDL-C, HbA1c, and blood pressure) - the \"model students\" - rose from about 11 percent a decade ago to about 20 percent now"
              ],
              "zh": [
                "Taiwan Diabetes Registry(TDR)追蹤 2015–2025 年的病人資料",
                "LDL-C 達標(<100)比例最高且穩定,約 73–85%",
                "HbA1c 達標(<7%)持續進步,約從 37% 進步到 60% 以上",
                "血壓達標(<130/80)比例最低,且十年沒有進步,約 33–47%",
                "ABC 三項(LDL-C、HbA1c、血壓)全達標的「模範生」比例,從十年前約 11% 進步到約 20%"
              ]
            }
          }
        ]
      },
      {
        "id": "policy-888-target",
        "heading": {
          "en": "Policy Target: The 888 Plan and Healthy Taiwan KPIs",
          "zh": "政策目標:888 與健康台灣 KPI"
        },
        "blocks": [
          {
            "type": "ul",
            "items": {
              "en": [
                "The \"888 Plan\" for controlling high blood pressure, high blood sugar, and high cholesterol: get 80 percent of patients into a care network, 80 percent receiving lifestyle counseling, and 80 percent hitting control targets (the official target year is 2030; the slide also listed a \"2028 Target\" as an interim KPI from the Healthy Taiwan Promotion Committee. As of November 2025: 60.7 percent enrolled in the network, 49.5 percent receiving counseling, 54.6 percent at control)",
                "Supporting measures: lowering the age for adult preventive health checkups to 30, raising the subsidy from NT$520 to NT$880, and targeting people at high risk for metabolic syndrome; Family Medicine Integrated Care 2.0, expanded SGLT2 inhibitor coverage, a family medicine platform, and AI-personalized health education",
                "Care pathway: Expanded Screening, then Risk Stratification, then Precision Education, then Precision Care"
              ],
              "zh": [
                "三高防治「888 計畫」:80% 病友入照護網、80% 接受生活型態諮商、80% 控制達標(官方目標年 2030;投影片另標「2028 Target」為健康台灣推動委員會階段 KPI——2025 年 11 月現況:入網 60.7%、諮商 49.5%、控制 54.6%)",
                "配套措施:成人預防保健年齡下修到 30 歲、給付從 520 元提高到 880 元、鎖定代謝症候群高風險族群;家醫整合照護 2.0、SGLT2 給付擴大、家醫平台與 AI 個人化衛教",
                "照護流程:擴大篩檢 → 風險分層 → 精準衛教 → 精準照護"
              ]
            }
          }
        ]
      },
      {
        "id": "precision-medicine-databases",
        "heading": {
          "en": "Precision Medicine Infrastructure: Three Layers of Databases",
          "zh": "精準醫療基礎建設:三層資料庫"
        },
        "blocks": [
          {
            "type": "ul",
            "items": {
              "en": [
                "Taiwan Biobank (community-based): has enrolled 200,000 people, with a third round of call-backs underway",
                "TPMI, the Taiwan Precision Medicine Initiative (a partnership between Academia Sinica and hospitals, hospital-based): originally aimed to enroll 1 million people but reached about 500,000 due to funding constraints. The speaker said a second phase is underway, re-consenting 300,000 previous participants plus enrolling 200,000 new ones (public information doesn't yet confirm this \"second phase,\" so this is noted as the speaker's stated claim)",
                "NBCT, the National Biobank Consortium of Taiwan (established 2019, an integration platform): brings together 33 databases nationwide, with 939,000 registered records covering 563,000 unique individuals, and is already used by 15 international pharmaceutical companies (as stated in the talk)"
              ],
              "zh": [
                "Taiwan Biobank(社區型):已收 20 萬人,第三波 call-back 正在進行",
                "TPMI 台灣精準醫療計畫(中研院與醫院合作,醫院型):原訂收案 100 萬人,因經費限制實收約 50 萬人;講者表示正推動第二階段,re-consent 找回 30 萬人加上新收 20 萬人(公開資訊尚無「第二期」的佐證,此為講者現場說法)",
                "NBCT 國家級人體生物資料庫整合平台(2019 年成立,整合型):整合全台 33 個資料庫;登記 93.9 萬筆、不重複 56.3 萬人;已有 15 家國際藥廠使用(口述數字)"
              ]
            }
          },
          {
            "type": "p",
            "text": {
              "en": "Academic output: around the same period in 2025, TPMI produced two Nature papers and one Nature Communications paper, covering polygenic risk scores for the Han Chinese population and pharmacogenomics (see the Fact Check page).",
              "zh": "學術產出:TPMI 在 2025 年同期發表兩篇 Nature 論文加一篇 Nature Communications 論文(漢人多基因風險分數、藥物基因體學)(見事實查證頁)。"
            }
          }
        ]
      },
      {
        "id": "ckm-cklm-syndrome",
        "heading": {
          "en": "Central Case Study: CKM/CKLM Syndrome",
          "zh": "主軸案例:CKM / CKLM 症候群"
        },
        "blocks": [
          {
            "type": "p",
            "text": {
              "en": "Data source: a large Taiwanese health-checkup cohort study (over 515,000 people, followed for 16 years), by Tsai MK et al., published in PLoS Medicine (2025). The key figures have been verified against the paper (see the Fact Check page).",
              "zh": "資料來源:台灣大型健檢世代研究(逾 51.5 萬人,追蹤 16 年),Tsai MK 等人發表於 PLoS Medicine(2025),關鍵數字經查證吻合(見事實查證頁)。"
            }
          },
          {
            "type": "ul",
            "items": {
              "en": [
                "71.5 percent of those screened met the criteria for CKM syndrome; Stage 2 was the largest group at 46.3 percent; after age 55, nearly 90 percent of people fell somewhere within the CKM staging system",
                "Progression was fast: with an average gap of 2.5 years between two checkups, 18.3 percent of people worsened to a more severe stage (14.3 percent improved, 67.4 percent stayed the same)",
                "Risk isn't linear: people with all four risk factors had 6.68 times the cardiovascular disease risk of people with none (a figure stated verbally in the talk)"
              ],
              "zh": [
                "71.5% 的受檢者符合 CKM 症候群條件;Stage 2 是最大宗(46.3%);55 歲後近九成的人落在 CKM 分期內",
                "病程進展快:兩次健檢平均間隔 2.5 年,18.3% 的人惡化到更嚴重分期(14.3% 改善、67.4% 維持不變)",
                "風險呈非線性:同時有 4 項危險因子的人,心血管疾病風險是完全沒有危險因子者的 6.68 倍(口述數字)"
              ]
            }
          },
          {
            "type": "quote",
            "text": {
              "en": "A \"wait and see\" approach mathematically guarantees irreversible stage progression for nearly 1 in 5 patients within 30 months.",
              "zh": "「觀望」的做法,在數學上幾乎注定讓將近五分之一的病人在 30 個月內出現不可逆的分期惡化。"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "CKM is evolving into CKLM: MASLD (metabolic dysfunction-associated steatotic liver disease, or fatty liver linked to metabolism) is being folded into the American Heart Association's staging system. The new model treats the heart, kidney, liver, and metabolic system as one connected network rather than four separate organs. SGLT2 inhibitors and incretin-based drugs (GLP-1 receptor agonists and dual GIP/GLP-1 receptor agonists) can protect all four organ systems at once, making them a key pharmacological opportunity for integrated care.",
              "zh": "CKM 進階為 CKLM:把 MASLD(代謝性脂肪肝疾病)整合進 AHA 的分期系統,新典範是把心臟、腎臟、肝臟、代謝四個器官網絡當作一個系統來治療——SGLT2 抑制劑與腸泌素類藥物(GLP-1 受體促效劑、GIP/GLP-1 雙重受體促效劑)可以同時保護這四個器官系統,是整合照護的重要藥理契機。"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "Three policy levers (drawing on Ndumele CE's 2023 paper in Circulation and the T-CaReMe Consortium framework):",
              "zh": "政策三槓桿(引用 Ndumele CE 於 Circulation 2023 的論文,以及 T-CaReMe Consortium 的架構):"
            }
          },
          {
            "type": "ul",
            "items": {
              "en": [
                "National Health Insurance coverage that supports multidisciplinary integrated clinics",
                "Shifting resources toward early prevention and social determinants of health (SDOH)",
                "Digital infrastructure: remote monitoring, wearables, and interoperability between electronic health records (EHR) and registries"
              ],
              "zh": [
                "健保給付支持多專科整合門診",
                "往早期預防與社會健康決定因子(SDOH)傾斜",
                "數位基礎建設:遠距監測、穿戴裝置、電子病歷(EHR)與登錄資料互通"
              ]
            }
          },
          {
            "type": "p",
            "text": {
              "en": "The National Health Research Institutes is bringing together kidney, lipid, and cardiology societies to jointly develop care guidelines, and is collaborating internationally with experts from Japan, South Korea, and Hong Kong.",
              "zh": "國家衛生研究院整合腎臟、血脂、心臟等相關學會,共同制定照護指引,並與日本、韓國、香港的專家展開跨國合作。"
            }
          }
        ]
      },
      {
        "id": "policy-vision",
        "heading": {
          "en": "Policy Vision and Notes",
          "zh": "政策願景與備註"
        },
        "blocks": [
          {
            "type": "p",
            "text": {
              "en": "This aligns with the \"Healthy Taiwan\" policy. With its healthcare capacity and integrated governance, Taiwan can become a global benchmark for integrated CKM care, establishing chronic disease governance as Taiwan's second national strategic pillar.",
              "zh": "對齊「健康台灣」政策;台灣可以憑藉醫療量能加上整合治理,成為全球 CKM 整合照護的標竿,把「慢性病健康治理」立為台灣的第二個國家戰略支柱。"
            }
          },
          {
            "type": "h3",
            "text": {
              "en": "Note",
              "zh": "備註"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "The percentage of Taiwan's population aged 65 and over stated verbally in the talk did not match the official figure (20.06 percent as of the end of 2025). This may be a slip of the tongue or a note-taking error, and the official figure should be treated as authoritative (see the Fact Check page).",
              "zh": "演講口述提到的台灣 65 歲以上人口比例,與官方數字(2025 年底 20.06%)不符,可能是口誤或記錄誤差,應以官方數字為準(見事實查證頁)。"
            }
          }
        ]
      }
    ]
  },
  {
    "slug": "shyr",
    "layout": "article",
    "icon": "psychology",
    "title": {
      "en": "Yu Shyr - The End of Average Medicine",
      "zh": "石瑜 - 告別平均值"
    },
    "subtitle": {
      "en": "Average treatment effects hide the few patients who truly benefit among the many who don't respond differently. The fix: generate real-world data with pragmatic trials, use machine learning (uplift modeling with Qini) to estimate each patient's individual treatment effect, and then feed the model back into the EHR to help doctors decide in real time.",
      "zh": "平均治療效果會把「少數真正受益者」淹沒在多數無差異者裡——用 pragmatic trial 產生真實世界資料、用機器學習(uplift modeling / Qini)估每個病人的個人化治療效果,再把模型接回 EHR 即時輔助決策。"
    },
    "sections": [
      {
        "id": "at-a-glance",
        "heading": {
          "en": "At a Glance",
          "zh": "場次資訊"
        },
        "blocks": [
          {
            "type": "ul",
            "items": {
              "en": [
                "Session: Plenary Lecture 2 (around 09:52-10:30)",
                "Slide title: The End of Average Medicine: How AI Identifies the Right Treatment for Every Patient",
                "Speaker: Professor and Chair, Department of Biostatistics, Vanderbilt University Medical Center; Harold L. Moses Chair in Cancer Research; voting member of an FDA advisory committee (self-described)",
                "Note on these notes: the tail end of the talk (the second half of the cfDNA case and the conclusion) wasn't fully captured live, so that part is filled in from the slides only"
              ],
              "zh": [
                "場次:Plenary Lecture 2(約 09:52–10:30)",
                "投影片標題:The End of Average Medicine: How AI Identifies the Right Treatment for Every Patient",
                "講者:Vanderbilt University Medical Center 生物統計學系教授兼主任;Harold L. Moses 癌症研究講座教授;FDA 外部諮詢委員會投票委員(自述)",
                "記錄狀態:演講尾段(cfDNA 案例後半與結論)記錄不完整,僅依投影片補述"
              ]
            }
          }
        ]
      },
      {
        "id": "outline-and-outlook",
        "heading": {
          "en": "Outline and the Five-Year Outlook",
          "zh": "大綱與 5 年展望"
        },
        "blocks": [
          {
            "type": "p",
            "text": {
              "en": "The talk moved through four themes: AI for smart biomedical research, AI for pragmatic clinical trials and real-world data, individualized treatment effects and machine learning, and then the conclusion.",
              "zh": "重點:AI for Smart Biomedical Research → AI for Pragmatic Clinical Trials & Real-World Data → Individualized Treatment Effects and Machine Learning → Conclusion。"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "Smart precision medicine rests on three things: computing power (from GPUs to TPUs to NPUs, including edge computing), new analytical tools (adaptive multimodal models), and high-quality data. Her vision: 'To achieve true AGI our models must be adaptive multimodal... they will all combine into a unified intelligence.'",
              "zh": "Smart Precision Medicine 三要素:運算力(GPU→TPU→NPU,邊緣運算)、新分析工具(adaptive multimodal)、高品質資料。願景:「To achieve true AGI our models must be adaptive multimodal… they will all combine into a unified intelligence.」"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "She offered an analogy: when the data changes, the decision should change with it. Deciding whether to bring an umbrella shouldn't be based on yesterday's forecast - you look out the window today. That's the difference between a static model and one that adapts to real-time data.",
              "zh": "講者比喻:資料矩陣會變、決策就會變——判斷要不要帶傘,不是看昨天的天氣預報,而是今天看窗外。(靜態模型 vs 自適應即時資料)"
            }
          }
        ]
      },
      {
        "id": "patient-heterogeneity-pragmatic-trials",
        "heading": {
          "en": "Patient Heterogeneity and Pragmatic Trials",
          "zh": "病人異質性與 Pragmatic Trial"
        },
        "blocks": [
          {
            "type": "p",
            "text": {
              "en": "Patients differ along many dimensions at once - genetics, clinical status, lifestyle, environment - so we need statistical methods flexible enough to handle that complexity.",
              "zh": "病人特徵複雜多維:Genetic / Clinical / Lifestyle / Environment——需要有彈性的統計方法。"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "An efficacy (explanatory) trial asks whether a treatment can work under ideal conditions. An effectiveness (pragmatic) trial asks whether it does work in the real world (citing Ford and Norrie, 'Pragmatic Trials,' NEJM 2016;375:454-63).",
              "zh": "Efficacy(explanatory)trial 問「理想條件下能不能有效」;effectiveness(pragmatic)trial 問「真實世界是否有效」(引 Ford & Norrie, Pragmatic Trials, NEJM 2016;375:454-63)。"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "Pragmatic trials have loose inclusion criteria, track patient-centered practical outcomes, are embedded in routine care, allow flexible interventions, and pull outcomes straight from EHR, claims, or registry data. A cluster-level design can even waive individual informed consent and traditional case report forms, cutting costs substantially.",
              "zh": "Pragmatic trial 特徵:寬鬆納入條件、以病人為中心的實務結果、嵌入常規照護、彈性介入、結果直接取自 EHR/申報/登錄資料——cluster 層級設計可豁免個別受試者同意書與傳統病例報告表,大幅降低成本。"
            }
          }
        ]
      },
      {
        "id": "case-study-icu-oxygen-target",
        "heading": {
          "en": "Case Study: ICU Oxygen Targets",
          "zh": "案例主軸:ICU 血氧目標"
        },
        "blocks": [
          {
            "type": "h3",
            "text": {
              "en": "Act One: The PILOT Trial (a Negative Result)",
              "zh": "第一幕 — PILOT trial(陰性結果)"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "About 2,500 mechanically ventilated patients were enrolled, with entire ICUs cluster-randomized and crossed over between SpO2 targets of 90%, 94%, and 98% (ranges 88-92, 92-96, and 96-100). The primary endpoint, ventilator-free days, came out almost identical across the three groups (about 20, 21, and 21 days, p is about 0.8). (Semler MW et al., NEJM 2022;387:1759-69)",
              "zh": "約 2,500 名機械通氣病人,以 ICU 為單位整群隨機交叉分派 SpO2 目標 90% / 94% / 98%(範圍 88–92 / 92–96 / 96–100);主要終點 ventilator-free days 三組幾乎相同(約 20/21/21 天,p≈0.8)。Semler MW et al., NEJM 2022;387:1759-69。"
            }
          },
          {
            "type": "h3",
            "text": {
              "en": "Act Two: Machine Learning Overturns the Verdict (JAMA 2024)",
              "zh": "第二幕 — 機器學習翻案(JAMA 2024)"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "The team went back to that same data and estimated individualized treatment effects instead. They tested six machine learning algorithms with k-fold cross-validation and selected the best one using the Qini statistic (an XGBoost-based model won), then validated externally against the Australia-New Zealand ICU-ROX trial. The result: some patients actually benefited from the high target, others from the low target - and those opposite effects canceled out into what looked like 'no difference' on average. (Buell KG et al., JAMA 2024;331(14):1195-1204)",
              "zh": "研究團隊用同批資料估個人化治療效果——六種 ML 演算法以 k-fold 交叉驗證 + Qini statistic 選模(XGBoost 系勝出),外部驗證用澳紐 ICU-ROX trial;結果顯示部分病人受益於高目標、部分受益於低目標,平均值互相抵銷成「無差異」。Buell KG et al., JAMA 2024;331(14):1195-1204。"
            }
          },
          {
            "type": "h3",
            "text": {
              "en": "Act Three: Back Into the Clinic (Vanderbilt)",
              "zh": "第三幕 — 接回臨床(Vanderbilt)"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "The model is now built into Vanderbilt's EHR system (Epic). It tracks patient variables day by day, and once they cross a threshold it prompts the physician to adjust the oxygen target - high, medium, or low. Early observations suggest patients whose care followed the model's suggestion did better, though she noted that, as the study's designer, she may be biased, and the paper is forthcoming.",
              "zh": "模型已整合進 Vanderbilt 醫院 EHR(Epic),每日累積病人變數,達閾值即提示醫師調整血氧目標(高/中/低);講者稱初步觀察遵循模型建議者結果較佳——並自陳身為研究設計者可能有偏誤,論文即將發表。"
            }
          }
        ]
      },
      {
        "id": "qini-statistic",
        "heading": {
          "en": "The Core Method: The Qini Statistic",
          "zh": "方法核心:Qini Statistic"
        },
        "blocks": [
          {
            "type": "p",
            "text": {
              "en": "Definition from the slides: if you use a model to target the people most likely to benefit, how much more outcome do you gain compared to targeting people at random? That's the Qini statistic - a performance metric for uplift modeling used across marketing, policy evaluation, and precision medicine. The point is finding who benefits most, not predicting risk.",
              "zh": "定義(投影片):「如果用模型鎖定最可能受益的人,相比隨機鎖定能多賺多少 outcome?」——uplift modeling 的效能指標,行銷、政策評估、精準醫療通用;重點是找 who benefits most,不是預測風險。"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "She gave an e-commerce analogy: if your budget only covers 100 phone calls, you want to pick the customers who will actually change their decision because of the call. The original Qini formulation even includes a penalty - some customers who would have bought anyway end up not buying because you called them. Applied to medicine, this becomes the extra benefit a new treatment gives this particular patient over the standard treatment, and cost can be folded into that individualized treatment effect too. (Qini reference)",
              "zh": "電商類比(口述):預算只夠打 100 通電話,要挑「打了電話才會改變決定」的客戶;原始 Qini 還有 penalty 概念——本來會買的人被你一打電話反而不買。應用到醫療 = 對這個病人,新治療相對標準治療的額外效益,且可把成本一併算進個人化治療效果。(Qini 參考)"
            }
          }
        ]
      },
      {
        "id": "closing-case-cfdna",
        "heading": {
          "en": "Closing Case (Reconstructed From Slides)",
          "zh": "尾段(依投影片補述)"
        },
        "blocks": [
          {
            "type": "p",
            "text": {
              "en": "A prenatal cfDNA screening example: in a routine first-trimester screening population, the Harmony test analyzes only specific chromosomal fragments rather than whole chromosomes, and does so with high throughput and accuracy. This corresponds to the NEXT study (Norton ME et al., NEJM 2015;372:1589-97), which found a 100% detection rate for trisomy 21 versus 78.9% for traditional screening.",
              "zh": "cfDNA 產前篩檢案例:第一孕期常規產檢族群,Harmony 檢測只分析特定染色體片段(非全染色體),高通量、準確——對應 NEXT study,Norton ME et al., NEJM 2015;372:1589-97(T21 偵測率 100% vs 傳統篩檢 78.9%)。"
            }
          }
        ]
      },
      {
        "id": "quote",
        "heading": {
          "en": "Quote",
          "zh": "金句"
        },
        "blocks": [
          {
            "type": "quote",
            "text": {
              "en": "The end of average medicine - a zero average treatment effect doesn't mean the treatment had no effect for anyone.",
              "zh": "「告別平均值」——平均治療效果為零,不代表對每個人都沒有效果。"
            }
          }
        ]
      }
    ]
  },
  {
    "slug": "mairal",
    "layout": "article",
    "icon": "public",
    "title": {
      "en": "Anurag Mairal - The Future of Global Health Innovation",
      "zh": "Anurag Mairal - 全球健康創新的未來"
    },
    "subtitle": {
      "en": "Taiwan shouldn't just try to copy Silicon Valley. Instead, learn five things from the U.S., avoid five of its pitfalls, bring together its own tech manufacturing and clinical strengths, build up the missing translation layer, and become an anchor point in the global innovation network.",
      "zh": "台灣不該只想複製矽谷——該學美國的五件事、避開美國的五個坑,把自己的科技製造與臨床量能「匯流」起來,補強轉譯層,成為全球創新網絡的錨點。"
    },
    "sections": [
      {
        "id": "at-a-glance",
        "heading": {
          "en": "At a Glance",
          "zh": "場次資訊"
        },
        "blocks": [
          {
            "type": "ul",
            "items": {
              "en": [
                "Session: Plenary Lecture 3 (11:05-11:45, about 25 minutes)",
                "Program title: The Future of Global Health Innovation: Comparing Startup Ecosystems in the U.S., Taiwan, and the Asia-Pacific Region",
                "Actual slide title: Future of Needs-Driven Global Health Innovation: Taiwan's Role in Building the Next Generation of Startup Ecosystems",
                "Speaker's titles (as stated on the slides): Adjunct Professor, Stanford School of Medicine; Director, Global Outreach, Stanford Mussallem Center for Biodesign; Core Leadership, Center for Innovation in Global Health; Chairman, APAC Biodesign Alliance"
              ],
              "zh": [
                "場次:Plenary Lecture 3(11:05–11:45,約 25 分鐘)",
                "議程講題:The Future of Global Health Innovation: Comparing Startup Ecosystems in the U.S., Taiwan, and the Asia-Pacific Region",
                "實際投影片標題:Future of Needs-Driven Global Health Innovation: Taiwan's Role in Building the Next Generation of Startup Ecosystems",
                "講者頭銜(投影片自述):Adjunct Professor, Stanford School of Medicine;Director, Global Outreach, Stanford Mussallem Center for Biodesign;Core Leadership, Center for Innovation in Global Health;Chairman, APAC Biodesign Alliance"
              ]
            }
          }
        ]
      },
      {
        "id": "stanford-biodesign",
        "heading": {
          "en": "What Is Stanford Biodesign",
          "zh": "Stanford Biodesign 是什麼"
        },
        "blocks": [
          {
            "type": "p",
            "text": {
              "en": "The center's mission: 'Advancing health outcomes and equity through innovation, education, translation, and policy.' It holds six core values: collaboration, innovation, diversity, integrity, empathy, and leadership.",
              "zh": "中心宗旨:「Advancing health outcomes and equity through innovation, education, translation, and policy」(六大價值:Collaboration / Innovation / Diversity / Integrity / Empathy / Leadership)。"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "Its core methodology is the 3I framework: Identify the unmet need, Invent around that need, and Implement it. As he put it in one line: 'understand the problem before you solve it.'",
              "zh": "核心方法論 3I 框架:Identify(找出未滿足需求)→ Invent(圍繞需求發明)→ Implement(落地)。一句話:「understand the problem before you solve it」。"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "The results so far: roughly 60 companies founded (58 by the official website's count), more than 22 million patients helped, and 25 years of hockey-stick growth. As he put it, 'our real product is the innovators we've trained.'",
              "zh": "成果:約 60 家公司(官網數字 58)、逾 2,200 萬名病人受惠、25 年「曲棍球棒」成長;「我們真正的產品是我們訓練出來的創新者」。"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "Biodesign has gone global: there's a Biodesign program on every continent except Antarctica, with more than 70 institutions now anchoring local ecosystems. Local case studies from India, Singapore, Japan, and Tanzania show the methodology can be replicated across very different environments.",
              "zh": "全球化:除南極洲外每個大陸都有 Biodesign 計畫、70+ 機構成為生態系錨點;印度、新加坡、日本、坦尚尼亞的在地案例證明方法論可跨環境複製。"
            }
          }
        ]
      },
      {
        "id": "healthcare-is-changing",
        "heading": {
          "en": "Healthcare Itself Is Changing",
          "zh": "醫療照護本身正在改變"
        },
        "blocks": [
          {
            "type": "p",
            "text": {
              "en": "Five forces are reshaping healthcare:",
              "zh": "五股力量正在改變醫療照護:"
            }
          },
          {
            "type": "ul",
            "items": {
              "en": [
                "Demographics: aging populations and chronic disease. Taiwan enters super-aged society status in 2025 (20% of the population 65 or older). As he put it, 'what many countries will experience tomorrow, Taiwan is experiencing today' - so treat being super-aged as a chance to develop solutions first.",
                "Technology: AI, robotics, semiconductor sensors, genomics and precision medicine, new materials. Taiwan is a good example of where these technologies converge.",
                "Economics: rising healthcare costs and workforce shortages (he misspoke and said U.S. healthcare spending is 'nearly 40% of GDP' - it's actually about 18%, see the Fact Check page). Europe spends around 10%; even the UK's NHS, despite heavy investment, still struggles with care and staffing shortfalls.",
                "Consumer expectations: people want care that's more convenient, personalized, and distributed - a trend COVID-19 accelerated.",
                "Globalization: innovation, capital, engineering, and manufacturing now happen in different places rather than all in one."
              ],
              "zh": [
                "Demographics(人口結構)——高齡化與慢性病。台灣 2025 年進入超高齡社會(65 歲以上佔 20%):「許多國家的明天,就是台灣的今天」——把超高齡當成率先開發解方的機會。",
                "Technology(科技)——AI、機器人、半導體感測器、基因體/精準醫療、新材料;台灣是這些技術匯流的範例。",
                "Economics(經濟)——醫療成本上升與人力短缺(講者口誤稱美國醫療支出「近 40% GDP」,實際約 18%,見事實查證頁);歐洲約 10%;英國 NHS 資源投入仍難挽照護與人力困境。",
                "Consumer expectations(消費者期待)——更便利、個人化、分散式照護,COVID-19 加速這個趨勢。",
                "Globalization(全球化)——創新、資本、工程、製造分散在不同地點發生。"
              ]
            }
          },
          {
            "type": "quote",
            "text": {
              "en": "Healthcare innovation is no longer simply about inventing a better medical device. We increasingly need to redesign how healthcare is delivered.",
              "zh": "醫療創新不再只是發明更好的醫療器材,我們愈來愈需要重新設計醫療照護的傳遞方式。"
            }
          }
        ]
      },
      {
        "id": "learn-from-the-us",
        "heading": {
          "en": "What to Learn (and Not Learn) From the U.S.",
          "zh": "跟美國學什麼/不學什麼"
        },
        "blocks": [
          {
            "type": "h3",
            "text": {
              "en": "Learn from the U.S.",
              "zh": "該向美國學習"
            }
          },
          {
            "type": "ul",
            "items": {
              "en": [
                "Clinical proximity - innovators stay close to the clinical setting",
                "Risk capital available across every stage of a company's growth",
                "Regulatory predictability - for example, the FDA proactively setting frameworks for AI medical devices",
                "Reimbursement thought through early, not as an afterthought",
                "Talent recycling - experienced people cycling back into new startups"
              ],
              "zh": [
                "Clinical proximity(創新者貼近臨床)",
                "Risk capital across stages(各階段風險資本)",
                "Regulatory predictability(如 FDA 主動訂 AI 醫材框架)",
                "Reimbursement considered early(及早想給付)",
                "Talent recycling(人才循環創業)"
              ]
            }
          },
          {
            "type": "h3",
            "text": {
              "en": "Don't Copy From the U.S.",
              "zh": "不該向美國學習(該避開的坑)"
            }
          },
          {
            "type": "ul",
            "items": {
              "en": [
                "Healthcare that's extremely expensive - 'sick care' rather than 'healthcare'",
                "A fragmented system",
                "Evidence generation costs so high they discourage innovation",
                "Reimbursement so complicated it slows adoption",
                "Capital increasingly concentrating on already-favored winners"
              ],
              "zh": [
                "醫療極度昂貴(「sick care」而非「healthcare」)",
                "體系碎片化",
                "實證產生成本高到令人卻步",
                "給付複雜拖慢採用",
                "資本日益集中於「已被看好的贏家」"
              ]
            }
          },
          {
            "type": "p",
            "text": {
              "en": "Silicon Valley's real advantage, in his words: 'The advantage of Silicon Valley isn't any single institution. It is the density of connections between them.' Everything is densely interconnected around a shared center - the unmet clinical need - linking universities, hospitals, engineers, entrepreneurs, venture capital, industry, the FDA, payers, seasoned operators, and acquirers.",
              "zh": "矽谷真正的優勢:「The advantage of Silicon Valley isn't any single institution. It is the density of connections between them.」——以 Unmet Clinical Need 為圓心,大學/醫院/工程師/創業者/創投/產業/FDA/付款方/資深營運者/收購方密集互連。"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "His proposed fix for the high cost of generating evidence: pragmatic trial design, real-world evidence, and machine learning paired with new statistical methods - echoing the themes from Yu Shyr's talk.",
              "zh": "降低實證成本的解方:pragmatic trial design + real-world evidence + 機器學習與新統計方法(與石瑜演講相呼應)。"
            }
          }
        ]
      },
      {
        "id": "taiwans-opportunity",
        "heading": {
          "en": "Taiwan's Opportunity: Convergence and the Translation Layer",
          "zh": "台灣的機會:匯流與轉譯層"
        },
        "blocks": [
          {
            "type": "p",
            "text": {
              "en": "Taiwan's opportunity is convergence, across eight areas: AI diagnostics, smart medical devices, hospital automation, surgical and rehabilitation robotics, remote monitoring, precision diagnostics, personalized treatment, and aging-in-place technology.",
              "zh": "台灣機會 = 匯流(Convergence),八個領域:AI 診斷、智慧醫材、醫院自動化、手術與復健機器人、遠距監測、精準診斷、個人化治療、居家老化科技。"
            }
          },
          {
            "type": "h3",
            "text": {
              "en": "Taiwan Must Strengthen Its Translation Layer",
              "zh": "台灣必須補強轉譯層(Translation Layer)"
            }
          },
          {
            "type": "ul",
            "items": {
              "en": [
                "What Taiwan already has: research, technology, engineering, data, and clinical expertise",
                "What's missing: needs-driven innovation, entrepreneurial leadership talent, clinical evidence, regulatory strategy, reimbursement, access to global markets, venture and strategic capital, and experienced operators",
                "What this should produce: globalized companies, commercial scale, and impact on patients"
              ],
              "zh": [
                "已有:Research(研究)、Technology(科技)、Engineering(工程)、Data(資料)、Clinical expertise(臨床專業)",
                "缺口:needs-driven innovation(需求導向創新)、創業領導人才、臨床證據、法規策略、給付、全球市場准入、創投與策略資本、資深營運者",
                "產出:全球化公司、商業規模、病人影響力"
              ]
            }
          },
          {
            "type": "p",
            "text": {
              "en": "From his time at Johnson & Johnson, he observed Israel's approach: companies build global market regulatory and clinical evidence strategy into their planning from day one. Since Taiwan's domestic market is small, this matters even more here.",
              "zh": "以色列經驗(講者在 J&J 任職時觀察):公司創立第一天就把全球市場的法規與臨床證據策略納入規劃——台灣市場小,更該如此。"
            }
          }
        ]
      },
      {
        "id": "ecosystem-of-ecosystems",
        "heading": {
          "en": "From an Ecosystem to a Network of Ecosystems",
          "zh": "從生態系到「生態系網絡」"
        },
        "blocks": [
          {
            "type": "p",
            "text": {
              "en": "Old model versus new: traditionally, a company's entire value chain sits in one place. The emerging model is globally distributed collaboration instead - the clinical need is discovered in Taiwan, the AI architecture is co-built with partners in California, the software engineering happens in India, and the sensors and precision manufacturing come back to Taiwan.",
              "zh": "新舊模式對比:傳統公司整條價值鏈鎖在單一地理區 vs 新興「全球分散式協作」——臨床需求在台灣發現、AI 架構與加州夥伴共建、軟體工程在印度、感測器與精密製造回台灣。"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "The scale of the Asia-Pacific region: about 60% of the world's population, more than a third of nominal GDP, and nearly half of purchasing-power-parity GDP (see the Fact Check page for exact figures). Taiwan should look outward while training inward - plugging its own ecosystem into regional networks like the APAC Biodesign Alliance to build a 'network of networks.'",
              "zh": "亞太體量:全球人口約 60%、名目 GDP 逾三分之一、購買力平價近一半(精確數字見事實查證頁)。台灣應「對外看、對內練」,把自身生態系插入 APAC Biodesign Alliance 等區域網絡,建立「網絡的網絡」。"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "Examples from Taiwan's startups (three out of eight teams from the August 7th pitch session; his colleague Rush Bartlett's comment was that the standout quality was insight - even when targeting a common clinical need, these teams found a genuinely differentiated angle): an orthopedic implant company (Jungu Stacable), AI-based surgical imaging recognition (OmniSurgica), and a wearable device for peripheral neuropathy.",
              "zh": "台灣新創案例(8/7 pitch session 八組團隊中三例;同行的 Rush Bartlett 評語:亮點在洞察 insight——即使鎖定常見臨床需求,也挖出差異化洞見):骨科植入物(Jungu Stacable)、AI 手術影像辨識(OmniSurgica)、周邊神經病變穿戴裝置。"
            }
          },
          {
            "type": "quote",
            "text": {
              "en": "We don't have poor countries and rich countries and bad health or super health - it's good health for everybody with shared resources.",
              "zh": "我們的世界不該分成窮國和富國、劣質醫療和頂級醫療——而是每個人都能在共享資源下擁有良好的健康。"
            }
          }
        ]
      },
      {
        "id": "quotes",
        "heading": {
          "en": "Quotes",
          "zh": "金句"
        },
        "blocks": [
          {
            "type": "quote",
            "text": {
              "en": "Understand the problem before you solve it.",
              "zh": "先理解問題,再解決問題。"
            }
          },
          {
            "type": "quote",
            "text": {
              "en": "A well-characterized need is the DNA of a great invention.",
              "zh": "被清楚描述的需求,就是偉大發明的 DNA。"
            }
          },
          {
            "type": "quote",
            "text": {
              "en": "The advantage of Silicon Valley isn't any single institution. It is the density of connections between them.",
              "zh": "矽谷的優勢不在於任何單一機構,而在於機構之間緊密連結的密度。"
            }
          },
          {
            "type": "quote",
            "text": {
              "en": "Many countries will be experiencing tomorrow what Taiwan is experiencing today.",
              "zh": "許多國家明天將經歷的,正是台灣今天正在經歷的。"
            }
          }
        ]
      }
    ]
  },
  {
    "slug": "factcheck",
    "layout": "table",
    "icon": "fact_check",
    "title": {
      "en": "Fact Check",
      "zh": "事實查證"
    },
    "subtitle": {
      "en": "Verifiable facts from the talks, checked item by item online; fact-checked on August 12, 2026.",
      "zh": "對演講中可查證的事實逐項於網路上核實查證,查證日期為 2026 年 8 月 12 日。"
    },
    "columns": [
      {
        "key": "talk",
        "label": {
          "en": "Talk",
          "zh": "場次"
        },
        "type": "tag",
        "filter": true
      },
      {
        "key": "claim",
        "label": {
          "en": "Claim",
          "zh": "查證項"
        },
        "type": "text"
      },
      {
        "key": "verdict",
        "label": {
          "en": "Verdict",
          "zh": "判定"
        },
        "type": "tag",
        "filter": true
      },
      {
        "key": "finding",
        "label": {
          "en": "Finding",
          "zh": "查證結果"
        },
        "type": "text"
      },
      {
        "key": "source",
        "label": {
          "en": "Source",
          "zh": "來源"
        },
        "type": "link"
      }
    ],
    "rows": [
      {
        "talk": {
          "en": "Opening",
          "zh": "開幕致詞"
        },
        "claim": {
          "en": "Lin Ching-Yi is the Deputy Minister of the Ministry of Health and Welfare",
          "zh": "林靜儀為衛福部政務次長"
        },
        "verdict": {
          "en": "Confirmed",
          "zh": "確認"
        },
        "finding": {
          "en": "Confirmed; she has held the post since May 2024.",
          "zh": "確認;自 2024 年 5 月起現任。"
        },
        "source": "https://www.mohw.gov.tw/cp-5-78673-1.html"
      },
      {
        "talk": {
          "en": "Opening",
          "zh": "開幕致詞"
        },
        "claim": {
          "en": "Wu Mai-Si is the President of Taipei Medical University",
          "zh": "吳麥斯為北醫校長"
        },
        "verdict": {
          "en": "Confirmed",
          "zh": "確認"
        },
        "finding": {
          "en": "Confirmed; he took office in 2023 and specializes in nephrology.",
          "zh": "確認;2023 年接任,專長為腎臟醫學。"
        },
        "source": "https://history.tmu.edu.tw/%E7%8F%BE%E4%BB%BB%E8%88%9E%E6%89%8B/%E7%8F%BE%E4%BB%BB%E8%91%A3%E4%BA%8B%E9%95%B7%E3%80%81%E6%A0%A1%E9%95%B7/"
      },
      {
        "talk": {
          "en": "Opening",
          "zh": "開幕致詞"
        },
        "claim": {
          "en": "Shih Chun-Ming is the Superintendent of TMU Hospital",
          "zh": "施俊明為北醫附醫院長"
        },
        "verdict": {
          "en": "Confirmed",
          "zh": "確認"
        },
        "finding": {
          "en": "Confirmed; he became the 14th superintendent in March 2023.",
          "zh": "確認;2023 年 3 月接任第 14 任院長。"
        },
        "source": "https://www.businesstoday.com.tw/article/category/183029/post/202304060036/"
      },
      {
        "talk": {
          "en": "Opening",
          "zh": "開幕致詞"
        },
        "claim": {
          "en": "Lin Chien-Huang is the Chairman of the TMU Board",
          "zh": "林建煌為北醫董事長"
        },
        "verdict": {
          "en": "Partly correct",
          "zh": "部分正確"
        },
        "finding": {
          "en": "Conflicting evidence: onsite slides and the emcee referred to him as Chairman, but the TMU history website lists Chen Jui-Chieh as Chairman since 2022, with Lin Chien-Huang listed only as a board member (he was previously President from 2017-2023). This may reflect an outdated webpage or an on-site title error; flagged as unresolved.",
          "zh": "證據矛盾:現場投影片與司儀稱其為董事長,但北醫校史館頁面顯示董事長為陳瑞杰(2022 年起),林建煌僅列為董事(曾任 2017–2023 校長)。可能是網頁未更新或現場職稱誤植,標注存疑。"
        },
        "source": "https://history.tmu.edu.tw/%E7%8F%BE%E4%BB%BB%E8%88%9E%E6%89%8B/%E7%8F%BE%E4%BB%BB%E8%91%A3%E4%BA%8B%E9%95%B7%E3%80%81%E6%A0%A1%E9%95%B7/"
      },
      {
        "talk": {
          "en": "Opening",
          "zh": "開幕致詞"
        },
        "claim": {
          "en": "The 'Health Coin' program launches in 2026",
          "zh": "「健康幣」2026 年上路"
        },
        "verdict": {
          "en": "Confirmed",
          "zh": "確認"
        },
        "finding": {
          "en": "Confirmed. It's the MOHW's health-incentive points program (earning points for vaccines, checkups, and screenings). Originally planned for April 2026, it has been delayed several times; as of this fact-check it's slated for September-October 2026.",
          "zh": "確認。為衛福部健康獎勵點數制度(疫苗/健檢/篩檢累點兌換),原訂 2026 年 4 月上路,數度延後,查證時規劃 9–10 月上路。"
        },
        "source": "https://www.businessweekly.com.tw/focus/blog/3021853"
      },
      {
        "talk": {
          "en": "Opening",
          "zh": "開幕致詞"
        },
        "claim": {
          "en": "A dedicated law now governs the National Health Insurance database (following Constitutional Court Judgment No. 13 of 2022)",
          "zh": "健保資料庫專法(因 111 年憲判字第 13 號)"
        },
        "verdict": {
          "en": "Confirmed",
          "zh": "確認"
        },
        "finding": {
          "en": "Confirmed. The National Health Insurance Data Management Act passed its third reading in December 2025, establishing an opt-out right and fines of up to NT$10 million for illegal use.",
          "zh": "確認。「全民健康保險資料管理條例」已於 2025 年 12 月三讀通過,明定退出權、違法使用最高罰 1,000 萬元。"
        },
        "source": "https://www.mohw.gov.tw/cp-7178-82512-1.html"
      },
      {
        "talk": {
          "en": "Opening",
          "zh": "開幕致詞"
        },
        "claim": {
          "en": "TMU Hospital celebrates its 50th anniversary in 2026",
          "zh": "北醫附醫 2026 年建院 50 週年"
        },
        "verdict": {
          "en": "Confirmed",
          "zh": "確認"
        },
        "finding": {
          "en": "Confirmed; the hospital was founded on August 6, 1976.",
          "zh": "確認;1976 年 8 月 6 日創院。"
        },
        "source": "https://udn.com/news/story/7266/9675128"
      },
      {
        "talk": {
          "en": "Sheu",
          "zh": "許惠恒"
        },
        "claim": {
          "en": "Sheu Huey-Herng is a Distinguished Investigator and Deputy Director-General of the National Health Research Institutes",
          "zh": "許惠恒為國衛院特聘研究員兼副院長"
        },
        "verdict": {
          "en": "Confirmed",
          "zh": "確認"
        },
        "finding": {
          "en": "Confirmed, effective since January 16, 2023. His English name is Wayne Huey-Herng Sheu; he previously served as Superintendent of Taichung Veterans General Hospital.",
          "zh": "確認,自 2023 年 1 月 16 日起。英文名 Wayne Huey-Herng Sheu,曾任台中榮總院長。"
        },
        "source": "https://enews.nhri.edu.tw/internal/8806/"
      },
      {
        "talk": {
          "en": "Sheu",
          "zh": "許惠恒"
        },
        "claim": {
          "en": "The '888 Plan' targets 80% enrolled in care networks, 80% receiving lifestyle counseling, and 80% reaching control goals",
          "zh": "「888 計畫」= 80% 入照護網 / 80% 生活諮商 / 80% 控制達標"
        },
        "verdict": {
          "en": "Partly correct",
          "zh": "部分正確"
        },
        "finding": {
          "en": "Partly correct. The three 80% figures are accurate, but the official target year is 2030. The '2028 Target' shown on the slide is actually an interim KPI from the Healthy Taiwan Promotion Committee, a different tier of goal.",
          "zh": "部分正確。三個 80% 數字正確,但官方目標年為 2030 年;投影片標示的「2028 Target」其實是健康台灣推動委員會的階段性 KPI,兩者層級不同。"
        },
        "source": "https://www.mohw.gov.tw/cp-16-82212-1.html"
      },
      {
        "talk": {
          "en": "Sheu",
          "zh": "許惠恒"
        },
        "claim": {
          "en": "Among Taiwan's top ten causes of death, hypertension/hyperglycemia/hyperlipidemia-related chronic diseases cause about 62,000 deaths a year (30%)",
          "zh": "十大死因中,三高相關慢性病每年死亡約 62,000 人(30%)"
        },
        "verdict": {
          "en": "Confirmed",
          "zh": "確認"
        },
        "finding": {
          "en": "Confirmed. In 2024, the five hypertension/hyperglycemia/hyperlipidemia-related causes of death totaled 61,009 deaths, or 30.3%, matching the claim.",
          "zh": "確認。2024 年五項三高相關死因合計 61,009 人,佔 30.3%,與說法吻合。"
        },
        "source": "https://dep.mohw.gov.tw/DOS/lp-5069-113.html"
      },
      {
        "talk": {
          "en": "Sheu",
          "zh": "許惠恒"
        },
        "claim": {
          "en": "Cancer caused 53,126 deaths (26%)",
          "zh": "癌症死亡 53,126 人(26%)"
        },
        "verdict": {
          "en": "Partly correct",
          "zh": "部分正確"
        },
        "finding": {
          "en": "Partly correct. That figure is from 2023 (25.8%); the latest 2024 data shows 54,032 deaths (26.8%).",
          "zh": "部分正確。該數字為 2023 年資料(25.8%);2024 年最新數字為 54,032 人(26.8%)。"
        },
        "source": "https://www.commonhealth.com.tw/article/92814"
      },
      {
        "talk": {
          "en": "Sheu",
          "zh": "許惠恒"
        },
        "claim": {
          "en": "Taiwan entered a super-aged society in 2025",
          "zh": "台灣 2025 年進入超高齡社會"
        },
        "verdict": {
          "en": "Confirmed",
          "zh": "確認"
        },
        "finding": {
          "en": "Confirmed. By the end of 2025, residents aged 65 and over made up 20.06% of the population (4.673 million people).",
          "zh": "確認。2025 年底 65 歲以上人口佔 20.06%(467.3 萬人)。"
        },
        "source": "https://www.cna.com.tw/news/ahel/202601090098.aspx"
      },
      {
        "talk": {
          "en": "Sheu",
          "zh": "許惠恒"
        },
        "claim": {
          "en": "Tsai MK et al., PLoS Medicine 2025 (the cardiovascular-kidney-metabolic cohort study)",
          "zh": "Tsai MK 等人,PLoS Medicine 2025(CKM 世代研究)"
        },
        "verdict": {
          "en": "Confirmed",
          "zh": "確認"
        },
        "finding": {
          "en": "Confirmed. All figures match: 515,602 participants, 71.5% CKM prevalence, an average 2.5-year interval between the two health checks, and 18.3% showing progression. DOI 10.1371/journal.pmed.1004629.",
          "zh": "確認。數字全部吻合:515,602 人、CKM 盛行率 71.5%、兩次健檢平均間隔 2.5 年、18.3% 惡化。DOI 10.1371/journal.pmed.1004629。"
        },
        "source": "https://journals.plos.org/plosmedicine/article?id=10.1371%2Fjournal.pmed.1004629"
      },
      {
        "talk": {
          "en": "Sheu",
          "zh": "許惠恒"
        },
        "claim": {
          "en": "TPMI phase two targets 500,000 participants",
          "zh": "TPMI 第二期、目標 50 萬人"
        },
        "verdict": {
          "en": "Unverified",
          "zh": "查無公開資訊"
        },
        "finding": {
          "en": "Unverified. No public source confirms a '500,000-person phase two.' TPMI phase one closed enrollment in December 2022 with about 570,000 participants, and in December 2025 two Nature papers were published using data from 560,000 of them. The speaker's on-site claim of aiming for a phase two that re-enrolls 300,000 plus recruits 200,000 new participants has no public documentation yet.",
          "zh": "查無公開資訊。公開資料查無「第二期 50 萬人」的說法:TPMI 一期已於 2022 年 12 月停止收案,實收約 57 萬人,2025 年 12 月以 56 萬人資料發表兩篇 Nature 論文。講者現場所說「拚第二期、找回 30 萬加新收 20 萬」目前尚無公開佐證。"
        },
        "source": "https://www.cna.com.tw/news/ahel/202208180109.aspx"
      },
      {
        "talk": {
          "en": "Sheu",
          "zh": "許惠恒"
        },
        "claim": {
          "en": "NBCT, the national biobank integration platform, was established in 2019",
          "zh": "NBCT 國家級人體生物資料庫整合平台成立於 2019 年"
        },
        "verdict": {
          "en": "Confirmed",
          "zh": "確認"
        },
        "finding": {
          "en": "Confirmed. Founded in October 2019, it now integrates 33 biobanks with over 836,000 participants. (The slide's figures of 939,000 registered records and 563,000 unique patients use a different counting method.)",
          "zh": "確認。2019 年 10 月成立,現整合 33 個生物資料庫、逾 83.6 萬參與者(投影片所稱登記案例 93.9 萬筆、不重複病人 56.3 萬,為不同統計口徑)。"
        },
        "source": "https://nbct.nhri.org.tw/en/"
      },
      {
        "talk": {
          "en": "Sheu",
          "zh": "許惠恒"
        },
        "claim": {
          "en": "The three 2025 papers cited on the slide (two in Nature, one in Nature Communications)",
          "zh": "投影片引用的三篇 2025 論文(Nature 兩篇、Nature Communications 一篇)"
        },
        "verdict": {
          "en": "Confirmed",
          "zh": "確認"
        },
        "finding": {
          "en": "Confirmed. These are the TPMI cohort papers published in 2025, covering cohort construction, a polygenic risk score for the Han Chinese population, and pharmacogenomics.",
          "zh": "確認。即 TPMI 於 2025 年發表的台灣精準醫療世代論文,分別為世代建置、漢人族群多基因風險分數、藥物基因體學。"
        },
        "source": "https://www.sinica.edu.tw/news_content/55/3338"
      },
      {
        "talk": {
          "en": "Shyr",
          "zh": "石瑜"
        },
        "claim": {
          "en": "Yu Shyr is Professor and Chair of the Department of Biostatistics at Vanderbilt University Medical Center",
          "zh": "石瑜為范德堡大學醫學中心生物統計系教授兼主任"
        },
        "verdict": {
          "en": "Confirmed",
          "zh": "確認"
        },
        "finding": {
          "en": "Confirmed; she also holds the Harold L. Moses Chair in Cancer Research.",
          "zh": "確認;另持有 Harold L. Moses 癌症研究講座教授頭銜。"
        },
        "source": "https://biostatistics.vmcweb.org/person/yu-shyr"
      },
      {
        "talk": {
          "en": "Shyr",
          "zh": "石瑜"
        },
        "claim": {
          "en": "The PILOT trial (Semler MW et al., NEJM 2022;387:1759-69)",
          "zh": "PILOT trial(Semler MW 等人,NEJM 2022;387:1759-69)"
        },
        "verdict": {
          "en": "Confirmed",
          "zh": "確認"
        },
        "finding": {
          "en": "Confirmed. A pragmatic cluster-randomized, cluster-crossover trial comparing SpO2 targets of 90%, 94%, and 98% (ranges 88-92 / 92-96 / 96-100); the main finding was no significant difference in ventilator-free days across the three groups.",
          "zh": "確認。為實用型分群隨機交叉試驗,比較 SpO2 三組目標值 90%/94%/98%(範圍 88–92/92–96/96–100);主要結論為三組 ventilator-free days 無顯著差異。"
        },
        "source": "https://www.nejm.org/doi/full/10.1056/NEJMoa2208415"
      },
      {
        "talk": {
          "en": "Shyr",
          "zh": "石瑜"
        },
        "claim": {
          "en": "A JAMA paper (March 19, 2024) used machine learning to analyze personalized oxygen targets",
          "zh": "JAMA(2024 年 3 月 19 日)以機器學習分析個人化氧氣目標"
        },
        "verdict": {
          "en": "Confirmed",
          "zh": "確認"
        },
        "finding": {
          "en": "Confirmed. First author Kevin G. Buell, JAMA 2024;331(14):1195-1204. The ML model analyzed PILOT trial data and validated externally on ICU-ROX; personalized targets may reduce mortality.",
          "zh": "確認。第一作者 Kevin G. Buell,JAMA 2024;331(14):1195-1204。以機器學習模型分析 PILOT 試驗資料,並以 ICU-ROX 做外部驗證,個人化目標可能降低死亡率。"
        },
        "source": "https://pubmed.ncbi.nlm.nih.gov/38501205/"
      },
      {
        "talk": {
          "en": "Shyr",
          "zh": "石瑜"
        },
        "claim": {
          "en": "Ford & Norrie, 'Pragmatic Trials' (NEJM 2016;375:454-463)",
          "zh": "Ford & Norrie,〈Pragmatic Trials〉(NEJM 2016;375:454-463)"
        },
        "verdict": {
          "en": "Confirmed",
          "zh": "確認"
        },
        "finding": {
          "en": "Confirmed; part of the 'Changing Face of Clinical Trials' series.",
          "zh": "確認;為《The Changing Face of Clinical Trials》系列文章之一。"
        },
        "source": "https://www.nejm.org/doi/abs/10.1056/NEJMra1510059"
      },
      {
        "talk": {
          "en": "Shyr",
          "zh": "石瑜"
        },
        "claim": {
          "en": "The Qini statistic",
          "zh": "Qini statistic"
        },
        "verdict": {
          "en": "Confirmed",
          "zh": "確認"
        },
        "finding": {
          "en": "Confirmed. A performance metric for uplift modeling (a generalization of the Gini coefficient to incremental-effect settings), used to measure how well a model ranks people by who benefits most; common in marketing and precision medicine.",
          "zh": "確認。為 uplift modeling 的效能指標(Gini 係數在增量效果情境下的推廣),用來衡量模型依「誰受益最多」排序的能力,常用於行銷與精準醫療。"
        },
        "source": "https://metricgate.com/docs/qini-curve-uplift-evaluation/"
      },
      {
        "talk": {
          "en": "Shyr",
          "zh": "石瑜"
        },
        "claim": {
          "en": "The cfDNA/Harmony prenatal screening study",
          "zh": "cfDNA/Harmony 產前篩檢研究"
        },
        "verdict": {
          "en": "Confirmed",
          "zh": "確認"
        },
        "finding": {
          "en": "Confirmed, most likely referring to the NEXT study (Norton ME et al., NEJM 2015;372:1589-97): among 18,955 pregnant women, the Harmony test detected 100% of Trisomy 21 cases versus 78.9% for conventional screening.",
          "zh": "確認,最可能指 NEXT study(Norton ME 等人,NEJM 2015;372:1589-97):18,955 名孕婦中,Harmony 檢測對 T21 偵測率達 100%,傳統篩檢為 78.9%。"
        },
        "source": "https://www.nejm.org/doi/full/10.1056/NEJMoa1407349"
      },
      {
        "talk": {
          "en": "Mairal",
          "zh": "Mairal"
        },
        "claim": {
          "en": "Stanford Biodesign: 60+ companies, 22 million patients, 25 years",
          "zh": "Stanford Biodesign:60 家以上公司、2200 萬病人、25 年"
        },
        "verdict": {
          "en": "Partly correct",
          "zh": "部分正確"
        },
        "finding": {
          "en": "Partly correct. The official website (as of August 2026) lists 58 companies, 22 million+ patients, and 25 years since 2001; the patient count and years match, but the talk rounded the company count up slightly.",
          "zh": "部分正確。官網(2026 年 8 月查證)顯示為 58 家公司、2200 萬以上病人、自 2001 年起共 25 年,病人數與年資吻合,但演講中的公司數略為調高。"
        },
        "source": "https://med.stanford.edu/biodesign/our-impact/companies.html"
      },
      {
        "talk": {
          "en": "Mairal",
          "zh": "Mairal"
        },
        "claim": {
          "en": "US healthcare spending is 'nearly 40% of GDP' (as stated in the talk)",
          "zh": "美國醫療支出「近 40% GDP」(演講原話)"
        },
        "verdict": {
          "en": "Contradicted",
          "zh": "與公開資訊不符"
        },
        "finding": {
          "en": "Contradicted. This appears to be a clear slip of the tongue: CMS data puts 2024 US healthcare spending at 18.0% of GDP (5.3 trillion dollars).",
          "zh": "與公開資訊不符。應為明顯口誤:CMS 資料顯示 2024 年美國醫療支出為 GDP 的 18.0%(5.3 兆美元)。"
        },
        "source": "https://www.cms.gov/data-research/statistics-trends-and-reports/national-health-expenditure-data/historical"
      },
      {
        "talk": {
          "en": "Mairal",
          "zh": "Mairal"
        },
        "claim": {
          "en": "Anurag Mairal is the founding chair of the APAC Biodesign Alliance",
          "zh": "Anurag Mairal 為 APAC Biodesign Alliance 創始主席"
        },
        "verdict": {
          "en": "Confirmed",
          "zh": "確認"
        },
        "finding": {
          "en": "Confirmed. The alliance was renamed from BME-IDEA APAC, with Mairal serving as Founding Chair.",
          "zh": "確認。該聯盟由 BME-IDEA APAC 更名而來,Mairal 擔任創始主席。"
        },
        "source": "https://eppicglobal.org/about-us/leadership/anurag-mairal/"
      },
      {
        "talk": {
          "en": "Mairal",
          "zh": "Mairal"
        },
        "claim": {
          "en": "Mairal's title, as stated on the slide",
          "zh": "Mairal 的頭銜(投影片自述)"
        },
        "verdict": {
          "en": "Confirmed",
          "zh": "確認"
        },
        "finding": {
          "en": "Confirmed; matches his official Stanford profile.",
          "zh": "確認;與史丹佛官方個人頁面一致。"
        },
        "source": "https://profiles.stanford.edu/anurag-mairal"
      },
      {
        "talk": {
          "en": "Mairal",
          "zh": "Mairal"
        },
        "claim": {
          "en": "Asia-Pacific accounts for 60% of world population, 30% of nominal GDP, and 50% of GDP at PPP",
          "zh": "亞太地區佔全球人口 60%、名目 GDP 30%、PPP 50%"
        },
        "verdict": {
          "en": "Partly correct",
          "zh": "部分正確"
        },
        "finding": {
          "en": "Roughly correct. The 60% population share checks out; nominal GDP share is closer to 36-37% and PPP share is about 46%. A more precise phrasing would be about 60% of population, over a third of nominal GDP, and nearly half of PPP-adjusted GDP.",
          "zh": "概略正確。人口佔比 60% 屬實;名目 GDP 佔比實際約 36–37%,PPP 佔比約 46%。較嚴謹的說法應為「約六成人口、逾三分之一名目 GDP、近半 PPP GDP」。"
        },
        "source": "https://www.imf.org/en/publications/reo/apac/issues/2025/10/24/regional-economic-outlook-for-asia-and-pacific-october-2025"
      },
      {
        "talk": {
          "en": "Mairal",
          "zh": "Mairal"
        },
        "claim": {
          "en": "Taiwan startup example 1: Jungu's Stacable (orthopedics)",
          "zh": "台灣新創案例 1:Jungu Stacable(骨科)"
        },
        "verdict": {
          "en": "Partly correct",
          "zh": "部分正確"
        },
        "finding": {
          "en": "Partly correct. The company exists (a Taiwanese spinal device maker) with a tethering product called Stacable; its official tagline is Minimum Trauma, Maximum Stability (worded slightly differently on the slide). The IMPLANET JAZZ PF shown on the same slide is a separate product from the French company Implanet, and should be read as a side-by-side reference, not the same company.",
          "zh": "部分正確。公司確實存在(台灣脊椎醫材廠商),產品 Stacable 為 tethering 系統,官方標語為 Minimum Trauma, Maximum Stability(投影片轉錄略有出入)。同頁的 IMPLANET JAZZ PF 為法國 Implanet 的產品,應理解為並列引用,並非同一家公司。"
        },
        "source": "https://www.jungu.com.tw/"
      },
      {
        "talk": {
          "en": "Mairal",
          "zh": "Mairal"
        },
        "claim": {
          "en": "Taiwan startup example 2: OmniSurgica's Omni-SureEye Recorder",
          "zh": "台灣新創案例 2:OmniSurgica / Omni-SureEye Recorder"
        },
        "verdict": {
          "en": "Partly correct",
          "zh": "部分正確"
        },
        "finding": {
          "en": "Partly correct. The company exists (a Taipei startup building AI-powered endoscopic surgery imaging), but its current official product name is TranScope; no official source confirms the name Omni-SureEye Recorder, which may be an unreleased product or an older name used on the slide.",
          "zh": "部分正確。公司確實存在(台北新創,開發 AI 內視鏡手術影像),但官網現行產品名為 TranScope;「Omni-SureEye Recorder」查無官方佐證,可能為新產品或投影片使用的舊名稱。"
        },
        "source": "https://www.omnisurgica.com/"
      },
      {
        "talk": {
          "en": "Mairal",
          "zh": "Mairal"
        },
        "claim": {
          "en": "Taiwan startup example 3: a wearable device for peripheral neuropathy",
          "zh": "台灣新創案例 3:周邊神經病變穿戴裝置"
        },
        "verdict": {
          "en": "Unverified",
          "zh": "查無公開資訊"
        },
        "finding": {
          "en": "Unverified. The slide didn't name a company, and no matching company could be found.",
          "zh": "查無公開資訊。投影片未標示公司名稱,查無對應公司。"
        },
        "source": ""
      },
      {
        "talk": {
          "en": "Bartlett",
          "zh": "Bartlett"
        },
        "claim": {
          "en": "Title: Associate Director, Corporate Innovation & Education",
          "zh": "職稱:Associate Director, Corporate Innovation & Education"
        },
        "verdict": {
          "en": "Confirmed",
          "zh": "確認"
        },
        "finding": {
          "en": "Confirmed; he still held this title as of the 2026 verification.",
          "zh": "確認;截至 2026 年查證仍為此職。"
        },
        "source": "https://biodesign.stanford.edu/programs/executive-education/program-leaders.html"
      }
    ]
  }
];
