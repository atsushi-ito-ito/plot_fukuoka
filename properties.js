const properties = [
  {
    name: "ザ・サンパーク姪浜",
    lat: 33.5880366,
    lng: 130.3253023,
    tsubo: "@300",
    units: "42戸",
    developer: "（大英産業）",
    sale: "2025/07",
    completion: "2027/01",
    walk: "7分",          // ← 最寄り駅まで徒歩7分
  　ward: "西区",     // ← 行政区
  },
  {
    name: "サンメゾン姪浜",
    lat: 33.578526,
    lng: 130.3259178,
    tsubo: "@330",
    units: "31戸",
    developer: "（サンヨーホームズ）",
    sale: "2025/10",
    completion: "2027/01",
    walk: "8分",          // ← 最寄り駅まで徒歩7分
    ward: "西区",     // ← 行政区
  },
  {
    name: "家庭裁判所跡地PJ",
    lat: 33.5888106,
    lng: 130.3830918,
    tsubo: "@1000~",
    units: "225戸",
    developer: "（野村不動産/東京建物/西日本鉄道/九電不動産）",
    sale: "未定",
    completion: "未定",
    walk: "不明",          // ← 最寄り駅まで徒歩7分
    ward: "中央区",     // ← 行政区
  },
  {
    name: "オープンレジデンシア室見",
    lat: 33.5824796,
    lng: 130.3363656,
    tsubo: "@300",
    units: "52戸",
    developer: "（オープンハウス･ディベロップメント）",
    sale: "2024/10",
    completion: "2025/11",
    walk: "5分",          // ← 最寄り駅まで徒歩7分
    ward: "西区",     // ← 行政区
  },
  {
    name: "グランフォーレ西新ナチュリア",
    lat: 33.5847222,
    lng: 130.3646278,
    tsubo: "@330",
    units: "33戸",
    developer: "（コーセーアールイー）",
    sale: "2025/01",
    completion: "2025/12",
    walk: "6分",          // ← 最寄り駅まで徒歩7分
    ward: "中央区",     // ← 行政区
  },
  {
    name: "グランドメゾンONE大濠PARK",
    lat: 33.5916698,
    lng: 130.3748383,
    tsubo: "@610",
    units: "162戸",
    developer: "（積水ハウス/九電不動産/三菱地所レジデンス）",
    sale: "2025/09",
    completion: "2027/10",
    walk: "6分",          // ← 最寄り駅まで徒歩7分
    ward: "中央区",     // ← 行政区
  },
  {
    name: "イノバス大濠公園",
    lat: 33.5942644,
    lng: 130.3727228,
    tsubo: "@390",
    units: "25戸",
    developer: "（オープンハウス･ディベロップメント）",
    sale: "2025/03",
    completion: "2026/05",
    walk: "8分",          // ← 最寄り駅まで徒歩7分
    ward: "中央区",     // ← 行政区
  },

  {
    name: "パークホームズ大濠ミッド",
    lat: 33.5927422,
    lng: 130.3747022,
    tsubo: "@450",
    units: "104戸",
    developer: "（三井不動産レジデンシャル）",
    sale: "2026/03",
    completion: "2027/09",
    walk: "7分",          // ← 最寄り駅まで徒歩7分
    ward: "中央区",     // ← 行政区
  },
  {
    name: "ラ・アトレレジデンス大濠公園",
    lat: 33.591119,
    lng: 130.373169,
    tsubo: "@480",
    units: "25戸",
    developer: "（ラ・アトレ）",
    sale: "2025/10",
    completion: "2027/05",
    walk: "4分",          // ← 最寄り駅まで徒歩7分
    ward: "中央区",     // ← 行政区
  },
  {
    name: "リビオ西新二丁目",
    lat: 33.5876899,
    lng: 130.3598094,
    tsubo: "@450",
    units: "43戸",
    developer: "（日鉄興和不動産）",
    sale: "2025/02",
    completion: "2026/01",
    walk: "7分",          // ← 最寄り駅まで徒歩7分
    ward: "早良区",     // ← 行政区
  },
  {
    name: "イノバス西新",
    lat: 33.5825904,
    lng: 130.3642717,
    tsubo: "@420",
    units: "29戸",
    developer: "（オープンハウス･ディベロップメント）",
    sale: "2025/05",
    completion: "2026/05",
    walk: "7分",          // ← 最寄り駅まで徒歩7分
    ward: "早良区",     // ← 行政区
  },
  {
    name: "城西1丁目PJ",
    lat: 33.5813671,
    lng: 130.3632921,
    tsubo: "@450",
    units: "総戸数_未定",
    developer: "（九州旅客鉄道/関電不動産開発）",
    sale: "未定",
    completion: "未定",
    walk: "不明",          // ← 最寄り駅まで徒歩7分
    ward: "早良区",     // ← 行政区
  },
  {
    name: "西新7丁目PJ",
    lat: 33.5867699,
    lng: 130.3450001,
    tsubo: "@450",
    units: "90戸",
    developer: "（住友不動産）",
    sale: "未定",
    completion: "未定",
    walk: "不明",          // ← 最寄り駅まで徒歩7分
    ward: "早良区",     // ← 行政区
  },
  {
    name: "グランフォーレ姪浜駅南レジデンス",
    lat: 33.5778509,
    lng: 130.3270725,
    tsubo: "@280",
    units: "30戸",
    developer: "（コーセーアールイー）",
    sale: "2025/02",
    completion: "2025/10",
    walk: "10分",          // ← 最寄り駅まで徒歩7分
    ward: "西区",     // ← 行政区
  },
  {
    name: "グランフォーレ室見レジデンス",
    lat: 33.5772672,
    lng: 130.3384022,
    tsubo: "@277",
    units: "21戸",
    developer: "（コーセーアールイー）",
    sale: "2025/02",
    completion: "2025/12",
    walk: "6分",          // ← 最寄り駅まで徒歩7分
    ward: "早良区",     // ← 行政区
  },
  {
    name: "ブライトクロス橋本",
    lat: 33.554471,
    lng: 130.321246,
    tsubo: "@270",
    units: "130戸",
    developer: "（大和ハウス工業/西日本鉄道）",
    sale: "未定",
    completion: "未定",
    walk: "2分",          // ← 最寄り駅まで徒歩7分
    ward: "西区",     // ← 行政区
  },
  {
    name: "フリーディア草香江1丁目",
    lat: 33.5803729,
    lng: 130.3722243,
    tsubo: "@470",
    units: "15戸",
    developer: "（東宝住宅）",
    sale: "未定",
    completion: "未定",
    walk: "不明",          // ← 最寄り駅まで徒歩7分
    ward: "中央区",     // ← 行政区
  },
  
  {
    name: "ウエリス赤坂BAYSIDE",
    lat: 33.5927395,
    lng: 130.3824216,
    tsubo: "@350",
    units: "55戸",
    developer: "（NTT都市開発）",
    sale: "2025/10",
    completion: "2026/11",
    walk: "11分",          // ← 最寄り駅まで徒歩7分
    ward: "中央区",     // ← 行政区
  },
  {
    name: "舞鶴PJ",
    lat: 33.5912312,
    lng: 130.3929035,
    tsubo: "@500",
    units: "136戸",
    developer: "（三菱地所レジデンス）",
    sale: "未定",
    completion: "未定",
    walk: "不明",          // ← 最寄り駅まで徒歩7分
    ward: "中央区",     // ← 行政区
  },
  {
    name: "MJRゲートタワー",
    lat: 33.5855005,
    lng: 130.3912035,
    tsubo: "@600～",
    units: "161戸",
    developer: "（九州旅客鉄道/長谷工不動産/日鉄興和不動産）",
    sale: "未定",
    completion: "未定",
    walk: "6分",          // ← 最寄り駅まで徒歩7分
    ward: "中央区",     // ← 行政区
  },
  {
    name: "DEUX･RESIA大濠並木通り",
    lat: 33.5890971,
    lng: 130.3650846,
    tsubo: "@420",
    units: "62戸",
    developer: "（LANDIC）",
    sale: "2025/10",
    completion: "2027/05",
    walk: "2分",          // ← 最寄り駅まで徒歩7分
    ward: "中央区",     // ← 行政区
  },
  {
    name: "ザ・サンパーク西新",
    lat: 33.5793202,
    lng: 130.3595099,
    tsubo: "@370",
    units: "24戸",
    developer: "（大英産業）",
    sale: "2025/06",
    completion: "2026/11",
    walk: "6分",          // ← 最寄り駅まで徒歩7分
    ward: "早良区",     // ← 行政区
  },
  {
    name: "アルファステイツ野芥駅Ⅱ",
    lat: 33.5550091,
    lng: 130.3485345,
    tsubo: "@240",
    units: "53戸",
    developer: "（穴吹興産）",
    sale: "2025/09",
    completion: "2027/04",
    walk: "10分",          // ← 最寄り駅まで徒歩7分
    ward: "早良区",     // ← 行政区
  },
  {
    name: "クレアネクスト別府4丁目",
    lat: 33.5739649,
    lng: 130.3642969,
    tsubo: "@370",
    units: "36戸",
    developer: "（セントラル総合開発）",
    sale: "2025/10",
    completion: "2026/07",
    walk: "7分",          // ← 最寄り駅まで徒歩7分
    ward: "城南区",     // ← 行政区
  },
  {
    name: "サンパーク西新南レジデンス",
    lat: 33.572551,
    lng: 130.356757,
    tsubo: "@290",
    units: "38戸",
    developer: "（大英産業）",
    sale: "2026/02",
    completion: "2027/06",
    walk: "17分",          // ← 最寄り駅まで徒歩7分
    ward: "早良区",     // ← 行政区
  },
  {
    name: "大濠PJ",
    lat: 33.5831358,
    lng: 130.3757063,
    tsubo: "@500",
    units: "8戸",
    developer: "（NTT都市開発）",
    sale: "2024/07",
    completion: "未定",
    walk: "不明",          // ← 最寄り駅まで徒歩7分
    ward: "中央区",     // ← 行政区
  },
  
  {
    name: "エンクレストガーデン福岡",
    lat: 33.5690947,
    lng: 130.3858227,
    tsubo: "@220",
    units: "364戸",
    developer: "（えんホールディングス）",
    sale: "2023/07",
    completion: "2025/12",
    walk: "-",          // ← 最寄り駅まで徒歩7分
    ward: "中央区",     // ← 行政区
  },
  {
    name: "クラブスタイル神松寺",
    lat: 33.5542348,
    lng: 130.3783493,
    tsubo: "@230",
    units: "22戸",
    developer: "（アライアンス）",
    sale: "2025/07",
    completion: "2026/02",
    walk: "-",          // ← 最寄り駅まで徒歩7分
    ward: "城南区",     // ← 行政区
  },
  {
    name: "アクロス六本松ラ・クラス",
    lat: 33.5753145,
    lng: 130.3764759,
    tsubo: "@350",
    units: "30戸",
    developer: "（福岡知行）",
    sale: "2025/02",
    completion: "2025/12",
    walk: "4分",          // ← 最寄り駅まで徒歩7分
    ward: "中央区",     // ← 行政区
  },
  {
    name: "モントーレ六本松ザ・マーク",
    lat: 33.5752051,
    lng: 130.3763078,
    tsubo: "@430",
    units: "33戸",
    developer: "（西武ハウス）",
    sale: "2025/08",
    completion: "2026/12",
    walk: "4分",          // ← 最寄り駅まで徒歩7分
    ward: "中央区",     // ← 行政区
  },
  {
    name: "パークホームズ福岡浄水通",
    lat: 33.57683,
    lng: 130.3915651,
    tsubo: "@450",
    units: "55戸",
    developer: "（三井不動産レジデンシャル）",
    sale: "2025/09",
    completion: "2026/07",
    walk: "7分",          // ← 最寄り駅まで徒歩7分
    ward: "中央区",     // ← 行政区
  },
  {
    name: "ジェイグラン六本松レジデンス",
    lat: 33.5758323,
    lng: 130.3827844,
    tsubo: "@308",
    units: "34戸",
    developer: "（JR西日本不動産開発）",
    sale: "2025/12",
    completion: "2025/11",
    walk: "7分",          // ← 最寄り駅まで徒歩7分
    ward: "中央区",     // ← 行政区
  },
  {
    name: "六本松4丁目PJ",
    lat: 33.5760917,
    lng: 130.3761051,
    tsubo: null,
    units: "68戸",
    developer: "（JR西日本不動産開発）",
    sale: "不明",
    completion: "不明",
    walk: "不明",          // ← 最寄り駅まで徒歩7分
    ward: "中央区",     // ← 行政区
  },
  {
    name: "スタンスレジデンス平尾市崎",
    lat: 33.5724014,
    lng: 130.4040462,
    tsubo: "@380",
    units: "44戸",
    developer: "（LANDIC）",
    sale: "2025/03",
    completion: "2026/08",
    walk: "4分",          // ← 最寄り駅まで徒歩7分
    ward: "南区",     // ← 行政区
  },
  {
    name: "デュ･レジア薬院ザ･シティ",
    lat: 33.5774632,
    lng: 130.4022098,
    tsubo: "@480",
    units: "39戸",
    developer: "（LANDIC）",
    sale: "2025/04",
    completion: "2026/08",
    walk: "6分",          // ← 最寄り駅まで徒歩7分
    ward: "中央区",     // ← 行政区
  },
  {
    name: "アクロス薬院グレイスステージ",
    lat: 33.58,
    lng: 130.3984722,
    tsubo: "@399",
    units: "21戸",
    developer: "（福岡知行）",
    sale: "2024/10",
    completion: "2025/09",
    walk: "3分",          // ← 最寄り駅まで徒歩7分
    ward: "中央区",     // ← 行政区
  },
  {
    name: "アトラス薬院タワーレジデンス",
    lat: 33.5823345,
    lng: 130.4000282,
    tsubo: "@500",
    units: "106戸",
    developer: "（旭化成不動産レジデンス）",
    sale: "未定",
    completion: "未定",
    walk: "不明",          // ← 最寄り駅まで徒歩7分
    ward: "中央区",     // ← 行政区
  },
  {
    name: "ファーネスト博多南駅グレイス",
    lat: 33.5205183,
    lng: 130.4402891,
    tsubo: "@190",
    units: "70戸",
    developer: "（ファミリー）",
    sale: "2025/11",
    completion: "2027/02",
    walk: "9分",          // ← 最寄り駅まで徒歩7分
    ward: "春日市",     // ← 行政区
  },
  {
    name: "トラスト博多南駅レジデンス",
    lat: 33.5519912,
    lng: 130.4088829,
    tsubo: "@210",
    units: "23戸",
    developer: "（トラスト不動産開発）",
    sale: "2024/06",
    completion: "2025/04",
    walk: "14分",          // ← 最寄り駅まで徒歩7分
    ward: "南区",     // ← 行政区
  },
  {
    name: "テラススタイル春日公園",
    lat: 33.523853,
    lng: 130.4703862,
    tsubo: "@225",
    units: "16戸",
    developer: "（照栄建設）",
    sale: "2025/07",
    completion: "2025/11",
    walk: "13分",          // ← 最寄り駅まで徒歩7分
    ward: "春日市",     // ← 行政区
  },
  {
    name: "アルバガーデングランデージ下大利",
    lat: 33.5193258,
    lng: 130.4886989,
    tsubo: "@220",
    units: "52戸",
    developer: "（アルバクリエイト）",
    sale: "2025/04",
    completion: "2026/05",
    walk: "4分",          // ← 最寄り駅まで徒歩7分
    ward: "大野城市",     // ← 行政区
  },
  {
    name: "サンリヤン大野城駅前ブランシエラ",
    lat: 33.5244497,
    lng: 130.4808144,
    tsubo: "@245",
    units: "42戸",
    developer: "（西日本鉄道/長谷工不動産）",
    sale: "2024/07",
    completion: "2025/07",
    walk: "3分",          // ← 最寄り駅まで徒歩7分
    ward: "大野城市",     // ← 行政区
  },
  {
    name: "トラスト白木原レジデンス",
    lat: 33.5306365,
    lng: 130.4880204,
    tsubo: "@220",
    units: "28戸",
    developer: "（トラスト不動産開発）",
    sale: "2025/09",
    completion: "2026/05",
    walk: "9分",          // ← 最寄り駅まで徒歩7分
    ward: "大野城市",     // ← 行政区
  },
  {
    name: "ウエリス白木原",
    lat: 33.5275522,
    lng: 130.4809656,
    tsubo: "@220",
    units: "160戸",
    developer: "（NTT都市開発/住友不動産）",
    sale: "2023/11",
    completion: "2025/03",
    walk: "5分",          // ← 最寄り駅まで徒歩7分
    ward: "大野城市",     // ← 行政区
  },
  {
    name: "大野城PJ",
    lat: 33.5254991,
    lng: 130.4810435,
    tsubo: "@245",
    units: "30戸",
    developer: "（第一交通産業）",
    sale: "未定",
    completion: "未定",
    walk: "不明",          // ← 最寄り駅まで徒歩7分
    ward: "大野城市",     // ← 行政区
  },
  {
    name: "セレンシオ春日THE NEXT",
    lat: 33.5287914,
    lng: 130.4566061,
    tsubo: "@205",
    units: "41戸",
    developer: "（辰巳開発）",
    sale: "2024/02",
    completion: "2025/02",
    walk: "4分",          // ← 最寄り駅まで徒歩7分
    ward: "春日市",     // ← 行政区
  },
  {
    name: "オープンレジデンシア春日公園",
    lat: 33.5265193,
    lng: 130.477976,
    tsubo: "@270",
    units: "58戸",
    developer: "（オープンハウス･ディベロップメント）",
    sale: "2024/10",
    completion: "2025/08",
    walk: "3分",          // ← 最寄り駅まで徒歩7分
    ward: "春日市",     // ← 行政区
  },
  {
    name: "ザ・サンパーク春日原駅レジデンス",
    lat: 33.5362353,
    lng: 130.4767118,
    tsubo: "@270",
    units: "36戸",
    developer: "（大英産業）",
    sale: "2024/02",
    completion: "2025/03",
    walk: "6分",          // ← 最寄り駅まで徒歩7分
    ward: "大野城市",     // ← 行政区
  },
  {
    name: "サンパーク春日原駅EXIA",
    lat: 33.5392352,
    lng: 130.4720904,
    tsubo: null,
    units: "52戸",
    developer: "（大英産業）",
    sale: "2025/08",
    completion: "2027/04",
    walk: "2分",          // ← 最寄り駅まで徒歩7分
    ward: "大野城市",     // ← 行政区
  },
  {
    name: "ジェイグラン春日原",
    lat: 33.5382215,
    lng: 130.4694999,
    tsubo: "@260",
    units: "52戸",
    developer: "（JR西日本不動産開発）",
    sale: "2025/02",
    completion: "2026/01",
    walk: "6分",          // ← 最寄り駅まで徒歩7分
    ward: "大野城市",     // ← 行政区
  },
  {
    name: "サンパーク春日原駅グラッセ",
    lat: 33.54096,
    lng: 130.4704721,
    tsubo: null,
    units: "33戸",
    developer: "（大英産業）",
    sale: "2025/08",
    completion: "2027/01",
    walk: "6分",          // ← 最寄り駅まで徒歩7分
    ward: "大野城市",     // ← 行政区
  },
  {
    name: "ファーネスト桜並木駅レジスタ",
    lat: 33.5458382,
    lng: 130.4644834,
    tsubo: "@210",
    units: "53戸",
    developer: "（ファミリー）",
    sale: "2025/07",
    completion: "2026/10",
    walk: "6分",          // ← 最寄り駅まで徒歩7分
    ward: "大野城市",     // ← 行政区
  },
  {
    name: "サングレート博多グランシティ エグゼ",
    lat: 33.5522255,
    lng: 130.4649969,
    tsubo: "@200",
    units: "140戸",
    developer: "（タイヘイ）",
    sale: "2024/11",
    completion: "2026/08",
    walk: "11分",          // ← 最寄り駅まで徒歩7分
    ward: "博多区",     // ← 行政区
  },
  {
    name: "アーバンパレス博多グロウサイド",
    lat: 33.5459003,
    lng: 130.4637956,
    tsubo: "@230",
    units: "104戸",
    developer: "（第一交通産業）",
    sale: "2023/11",
    completion: "2025/02",
    walk: "2分",          // ← 最寄り駅まで徒歩7分
    ward: "博多区",     // ← 行政区
  },
  {
    name: "グランフォーレ春日原駅前レジデンス",
    lat: 33.5362037,
    lng: 130.472549,
    tsubo: "@285",
    units: "25戸",
    developer: "（コーセーアールイー）",
    sale: "2024/04",
    completion: "2025/01",
    walk: "3分",          // ← 最寄り駅まで徒歩7分
    ward: "春日市",     // ← 行政区
  },
  {
    name: "クラブスタイル井尻ファミーユ",
    lat: 33.5495757,
    lng: 130.4373318,
    tsubo: "@230",
    units: "28戸",
    developer: "（アライアンス）",
    sale: "2025/02",
    completion: "2026/03",
    walk: "12分",          // ← 最寄り駅まで徒歩7分
    ward: "南区",     // ← 行政区
  },
  {
    name: "CLUB STYLE 馬出 Felicia",
    lat: 33.6116175,
    lng: 130.4136836,
    tsubo: "@236",
    units: "20戸",
    developer: "（アライアンス）",
    sale: "2024/02",
    completion: "2025/01",
    walk: "-",          // ← 最寄り駅まで徒歩7分
    ward: "東区",     // ← 行政区
  },
  {
    name: "アイランドシティ ザ･ガーデン",
    lat: 33.6686519,
    lng: 130.4133948,
    tsubo: "@250",
    units: "93戸",
    developer: "（積水ハウス/福岡商事/西部ガス都市開発）",
    sale: "2024/02",
    completion: "2025/01",
    walk: "-",          // ← 最寄り駅まで徒歩7分
    ward: "東区",     // ← 行政区
  },
  {
    name: "サンパークシティ香椎",
    lat: 33.6656807,
    lng: 130.4411728,
    tsubo: "@250",
    units: "90戸",
    developer: "（大英産業）",
    sale: "2025/04",
    completion: "2026/10",
    walk: "9分",          // ← 最寄り駅まで徒歩7分
    ward: "東区",     // ← 行政区
  },
  {
    name: "MJR千早ミッドスクエア",
    lat: 33.6548378,
    lng: 130.4398309,
    tsubo: "@280",
    units: "532戸",
    developer: "（九州旅客鉄道/住友不動産/日鉄興和不動産/長谷工不動産）",
    sale: "2023/01",
    completion: "2025/01",
    walk: "4分",          // ← 最寄り駅まで徒歩7分
    ward: "東区",     // ← 行政区
  },
  {
    name: "エイルマンション名島駅前",
    lat: 33.6437381,
    lng: 130.4314215,
    tsubo: "@250",
    units: "94戸",
    developer: "（作州商事）",
    sale: "2025/06",
    completion: "2026/09",
    walk: "2分",          // ← 最寄り駅まで徒歩7分
    ward: "東区",     // ← 行政区
  },
  {
    name: "イノバス箱崎",
    lat: 33.6152413,
    lng: 130.4252154,
    tsubo: "@320",
    units: "73戸",
    developer: "（オープンハウス･ディベロップメント）",
    sale: "2025/09",
    completion: "2027/08",
    walk: "5分",          // ← 最寄り駅まで徒歩7分
    ward: "東区",     // ← 行政区
  },
  {
    name: "ASSOCIA博多吉塚TERRACE",
    lat: 33.6042421,
    lng: 130.4288607,
    tsubo: "@300",
    units: "55戸",
    developer: "（LANDIC）",
    sale: "2026/02",
    completion: "2027/05",
    walk: "8分",          // ← 最寄り駅まで徒歩7分
    ward: "博多区",     // ← 行政区
  },
  {
    name: "ネストピア博多イーストClass",
    lat: 33.6079527,
    lng: 130.4288142,
    tsubo: "@300",
    units: "39戸",
    developer: "（ネスト）",
    sale: "2025/08",
    completion: "2026/07",
    walk: "11分",          // ← 最寄り駅まで徒歩7分
    ward: "博多区",     // ← 行政区
  },
  {
    name: "クレアホームズフラン博多祇園",
    lat: 33.5963611,
    lng: 130.4094167,
    tsubo: "@400",
    units: "27戸",
    developer: "（セントラル総合開発）",
    sale: "2025/07",
    completion: "2026/02",
    walk: "4分",          // ← 最寄り駅まで徒歩7分
    ward: "博多区",     // ← 行政区
  },
  {
    name: "プレサンスロジェ博多STATION NORTH",
    lat: 33.5986411,
    lng: 130.4244122,
    tsubo: "@300",
    units: "143戸",
    developer: "（プレサンスコーポレーション）",
    sale: "2025/04",
    completion: "2026/05",
    walk: "12分",          // ← 最寄り駅まで徒歩7分
    ward: "博多区",     // ← 行政区
  },
  {
    name: "リベール博多駅前",
    lat: 33.5834809,
    lng: 130.4196613,
    tsubo: "@311",
    units: "94戸",
    developer: "（SWOWAGROUP）",
    sale: "2023/11",
    completion: "2024/07",
    walk: "9分",          // ← 最寄り駅まで徒歩7分
    ward: "博多区",     // ← 行政区
  },
  {
    name: "ファーネスト井尻グレイス",
    lat: 33.5591537,
    lng: 130.4428773,
    tsubo: "@210",
    units: "35戸",
    developer: "（ファミリー）",
    sale: "2025/03",
    completion: "2026/06",
    walk: "13分",          // ← 最寄り駅まで徒歩7分
    ward: "南区",     // ← 行政区
  },
  {
    name: "エイル諸岡テラス",
    lat: 33.5610176,
    lng: 130.4462422,
    tsubo: "@230～",
    units: "34戸",
    developer: "（作州商事）",
    sale: "2025/10",
    completion: "2027/02",
    walk: "14分",          // ← 最寄り駅まで徒歩7分
    ward: "博多区",     // ← 行政区
  },
  {
    name: "オーヴィジョン井尻",
    lat: 33.5533819,
    lng: 130.4387325,
    tsubo: "@221",
    units: "42戸",
    developer: "（エストラスト）",
    sale: "2024/03",
    completion: "2025/06",
    walk: "6分",          // ← 最寄り駅まで徒歩7分
    ward: "南区",     // ← 行政区
  },
  {
    name: "ファーネスト大橋東レジデンス",
    lat: 33.5540464,
    lng: 130.4325121,
    tsubo: "@210～230",
    units: "55戸",
    developer: "（ファミリー）",
    sale: "2025/06",
    completion: "2026/06",
    walk: "13分",          // ← 最寄り駅まで徒歩7分
    ward: "南区",     // ← 行政区
  },
  {
    name: "デュレジア平尾レジデンス",
    lat: 33.5747983,
    lng: 130.4055774,
    tsubo: "@329",
    units: "39戸",
    developer: "（LANDIC）",
    sale: "2024/07",
    completion: "2025/09",
    walk: "3分",          // ← 最寄り駅まで徒歩7分
    ward: "中央区",     // ← 行政区
  },
  {
    name: "那の川PJ",
    lat: null,
    lng: null,
    tsubo: "@480",
    units: "140戸",
    developer: "（タカラレーベン）",
    sale: "未定",
    completion: "未定",
    walk: "不明",          // ← 最寄り駅まで徒歩7分
    ward: "南区",     // ← 行政区
  },
  {
    name: "CLUB THE HOUSE大橋テラス",
    lat: 33.554783,
    lng: 130.4249212,
    tsubo: "@330",
    units: "33戸",
    developer: "（アライアンス）",
    sale: "2025/07",
    completion: "2027/02",
    walk: "8分",          // ← 最寄り駅まで徒歩7分
    ward: "南区",     // ← 行政区
  },
  {
    name: "クリオラベルヴィ薬院白金",
    lat: 33.5790672,
    lng: 130.403393,
    tsubo: "@450",
    units: "23戸",
    developer: "（明和地所）",
    sale: "2025/10",
    completion: "2027/01",
    walk: "5分",          // ← 最寄り駅まで徒歩7分
    ward: "中央区",     // ← 行政区
  },
  {
    name: "デュレジア博多アベニュー",
    lat: 33.5777699,
    lng: 130.4174842,
    tsubo: "@290",
    units: "52戸",
    developer: "（LANDIC）",
    sale: "2024/10",
    completion: "2026/01",
    walk: "16分",          // ← 最寄り駅まで徒歩7分
    ward: "博多区",     // ← 行政区
  },
  {
    name: "クリオ渡辺通セントラルマークス",
    lat: 33.578672,
    lng: 130.410096,
    tsubo: "@360",
    units: "39戸",
    developer: "（明和地所）",
    sale: "2025/02",
    completion: "2027/01",
    walk: "10分",          // ← 最寄り駅まで徒歩7分
    ward: "中央区",     // ← 行政区
  },
  {
    name: "アクタス博多グランミライプレミアム",
    lat: 33.5667637,
    lng: 130.4359592,
    tsubo: "@270",
    units: "59戸",
    developer: "（クレ・コーポレーション）",
    sale: "2025/08",
    completion: "2026/08",
    walk: "7分",          // ← 最寄り駅まで徒歩7分
    ward: "博多区",     // ← 行政区
  },
  {
    name: "グランドパレス博多板付テラス",
    lat: 33.564063,
    lng: 130.455152,
    tsubo: "@190",
    units: "39戸",
    developer: "（第一交通産業）",
    sale: "2025/04",
    completion: "2026/03",
    walk: "-",          // ← 最寄り駅まで徒歩7分
    ward: "博多区",     // ← 行政区
  },
  {
    name: "サングレート博多レクシアル",
    lat: 33.5641653,
    lng: 130.4517426,
    tsubo: "@190",
    units: "50戸",
    developer: "（タイヘイ）",
    sale: "2024/03",
    completion: "2025/06",
    walk: "21分",          // ← 最寄り駅まで徒歩7分
    ward: "博多区",     // ← 行政区
  },
  {
    name: "アクロス箱崎宮前レイスマート",
    lat: 33.6153075,
    lng: 130.4167237,
    tsubo: "@330",
    units: "24戸",
    developer: "（福岡知行）",
    sale: "2025/11",
    completion: "2026/12",
    walk: "5分",          // ← 最寄り駅まで徒歩7分
    ward: "東区",     // ← 行政区
  },
  {
    name: "フリーディア大濠公園レジデンス",
    lat: 33.580793,
    lng: 130.371892,
    tsubo: "@450",
    units: "11戸",
    developer: "（福岡知行）",
    sale: "2025/11",
    completion: "2026/07",
    walk: "10分",          // ← 最寄り駅まで徒歩7分
    ward: "中央区",     // ← 行政区
  },
  {
    name: "ジェイグラン大濠公園",
    lat: 33.5909016,
    lng: 130.3754832,
    tsubo: "@460",
    units: "39戸",
    developer: "（JR西日本不動産開発）",
    sale: "2026/04",
    completion: "2028/02",
    walk: "3分",          // ← 最寄り駅まで徒歩7分
    ward: "中央区",     // ← 行政区
  },
  {
    name: "モントーレ室見リバーサイド",
    lat: 33.5773324,
    lng: 130.3329819,
    tsubo: "@340",
    units: "23戸",
    developer: "（西武ハウス）",
    sale: "不明",
    completion: "2027/01",
    walk: "6分",          // ← 最寄り駅まで徒歩7分
    ward: "早良区",     // ← 行政区
  },
  {
    name: "グランフォーレ白木原プロジェクト",
    lat: 33.533498,
    lng: 130.483512,
    tsubo: "@230",
    units: "36戸",
    developer: "（コーセーアールイー）",
    sale: "2026/03",
    completion: "2026/12",
    walk: "9分",          // ← 最寄り駅まで徒歩7分
    ward: "大野城市",     // ← 行政区
  },
  {
    name: "アルファステイツ博多サウス",
    lat: 33.5746111,
    lng: 130.44375,
    tsubo: "@240",
    units: "63戸",
    developer: "（穴吹興産）",
    sale: "2026/02",
    completion: "2027/05",
    walk: "17分",          // ← 最寄り駅まで徒歩7分
    ward: "博多区",     // ← 行政区
  },
  {
    name: "箱崎ネクストシティプロジェクト",
    lat: 33.6382669,
    lng: 130.4220593,
    tsubo: "@270",
    units: "65戸",
    developer: "（プレサンスコーポレーション）",
    sale: "2026/01",
    completion: "2027/05",
    walk: "10分",          // ← 最寄り駅まで徒歩7分
    ward: "東区",     // ← 行政区
  },
  {
    name: "グラウンディ大濠",
    lat: 33.583837,
    lng: 130.3749807,
    tsubo: "@700",
    units: "10戸",
    developer: "（九電不動産）",
    sale: "2026/04",
    completion: "2028/03",
    walk: "7分",          // ← 最寄り駅まで徒歩7分
    ward: "中央区",     // ← 行政区
  },
  {
    name: "MJR白木原",
    lat: 33.5263429,
    lng: 130.4855421,
    tsubo: "@240",
    units: "81戸",
    developer: "（九州旅客鉄道）",
    sale: "2026/03",
    completion: "2028/03",
    walk: "10分",          // ← 最寄り駅まで徒歩7分
    ward: "大野城市",     // ← 行政区
  },
  {
    name: "グランドパレス春日静邸",
    lat: 33.535435,
    lng: 130.4588157,
    tsubo: "@250",
    units: "28戸",
    developer: "（第一交通産業）",
    sale: "2026/02",
    completion: "2027/02",
    walk: "14分",          // ← 最寄り駅まで徒歩7分
    ward: "春日市",     // ← 行政区
  },
  {
    name: "クラブスタイル大橋レーヴ",
    lat: 33.5536095,
    lng: 130.43148,
    tsubo: "@300",
    units: "45戸",
    developer: "（アライアンス）",
    sale: "2025/12",
    completion: "2027/02",
    walk: "11分",          // ← 最寄り駅まで徒歩7分
    ward: "南区",     // ← 行政区
  },
  {
    name: "オーヴィジョン室見一丁目",
    lat: 33.58197,
    lng: 130.342302,
    tsubo: "@360",
    units: "19戸",
    developer: "（エストラスト）",
    sale: "2026/02",
    completion: "2027/01",
    walk: "4分",          // ← 最寄り駅まで徒歩7分
    ward: "早良区",     // ← 行政区
  },
  {
    name: "イノバス博多呉服",
    lat: 33.600787,
    lng: 130.4071793,
    tsubo: "@350",
    units: "20戸",
    developer: "（オープンハウス）",
    sale: "2025/12",
    completion: "2027/08",
    walk: "5分",          // ← 最寄り駅まで徒歩7分
    ward: "博多区",     // ← 行政区
  },
  {
    name: "デュレジア大濠サウスサイド",
    lat: 33.5762568,
    lng: 130.3720523,
    tsubo: "@370",
    units: "29戸",
    developer: "（LANDIC）",
    sale: "2027/07",
    completion: "2026/04",
    walk: "4分",          // ← 最寄り駅まで徒歩7分
    ward: "城南区",     // ← 行政区
  },
  {
    name: "アーティックス原ヴェルソーレ",
    lat: 33.5691119,
    lng: 130.3424931,
    tsubo: "@250",
    units: "41戸",
    developer: "（なかやしき）",
    sale: "2026/02",
    completion: "2027/10",
    walk: "22分",          // ← 最寄り駅まで徒歩7分
    ward: "早良区",     // ← 行政区
  },
  {
    name: "サングレート博多エクセラス",
    lat: 33.581314,
    lng: 130.437264,
    tsubo: "@190",
    units: "42戸",
    developer: "（タイヘイ）",
    sale: "2026/01",
    completion: "2027/07",
    walk: "15分",          // ← 最寄り駅まで徒歩7分
    ward: "博多区",     // ← 行政区
  },
  {
    name: "アクロス西新由邸",
    lat: 33.5846337,
    lng: 130.3610973,
    tsubo: "@390",
    units: "34戸",
    developer: "（タイヘイ）",
    sale: "2026/01",
    completion: "2027/07",
    walk: "15分",          // ← 最寄り駅まで徒歩7分
    ward: "博多区",     // ← 行政区
  },
  {
    name: "ASSOCIA 博多翠景（仮称）",
    lat: 33.5808866,
    lng: 130.4359716,
    tsubo: null,
    units: "115戸",
    developer: "（LANDIC）",
    sale: "2026/06",
    completion: "2027/12",
    walk: "-",          // ← 最寄り駅まで徒歩7分
    ward: "博多区",     // ← 行政区
  },
  {
    name: "クラブスタイル桜並木駅ルクス",
    lat: 33.5443879,
    lng: 130.4666612,
    tsubo: null,
    units: "50戸",
    developer: "（アライアンス）",
    sale: "不明",
    completion: "不明",
    walk: "-",          // ← 最寄り駅まで徒歩7分
    ward: "博多区",     // ← 行政区
  },
];

/*
未確認情報
オーヴィジョン千代　97戸　千代１丁目　15階建て
大楠３丁目　東宝住宅　45戸　10階建て
三宅３-27　昭栄建設　22戸 9階建て
クラブスタイル箱崎１丁目　箱崎１丁目　18戸　6階建て
那の川タカラ　2026年1月？広告開始

アソシア箱崎　@300

cd ~/Desktop/plot_fukuoka
ls
git commit -m "Update UI"
git remote -v
git push origin main

*/