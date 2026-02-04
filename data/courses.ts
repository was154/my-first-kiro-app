import { Course } from '@/types/course';

export const coursesData: Course[] = [
  {
    id: 1,
    name: "お堀端コース",
    distance: "6.4km",
    start: "大手町駅(A4出口)",
    goal: "小川町駅(B8出口)",
    location: "東京都千代田区",
    mysteries: 15,
    description: "江戸城を中心とした歴史散歩。皇居外苑から九段まで、東京の中心部の歴史を感じられるコース。"
  },
  {
    id: 2,
    name: "日本橋深川コース",
    distance: "10.6km",
    start: "大手町駅(A4出口)",
    goal: "浅草橋駅(東口)",
    location: "中央区、江東区、墨田区、台東区",
    mysteries: 19,
    description: "江戸経済を支えた水運の要・隅田川沿いの水郷都市の歴史を辿るコース。"
  },
  {
    id: 3,
    name: "銀座佃島コース",
    distance: "4.2km",
    start: "桜田門駅(3出口)",
    goal: "月島駅(4出口)",
    location: "東京都中央区",
    mysteries: 11,
    description: "文明開化の薫りをのこすモダンな町から、いにしえの漁師町へのタイムスリップ。"
  },
  {
    id: 4,
    name: "芝高輪コース",
    distance: "10.3km",
    start: "桜田門駅(3出口)",
    goal: "目黒駅(東口)",
    location: "東京都港区",
    mysteries: 15,
    description: "まちの変遷を見守ってきた数々の坂に刻まれる激動の歴史を体感。"
  },
  {
    id: 5,
    name: "渋谷コース",
    distance: "8.3km",
    start: "渋谷駅(ハチ公口)",
    goal: "桜田門(1出口)",
    location: "東京都渋谷区、港区",
    mysteries: 12,
    description: "文化の地、政治の地として、つねに変貌しつづける街を歩く。"
  },
  {
    id: 6,
    name: "新宿コース",
    distance: "10.2km",
    start: "都庁前駅(A5出口)",
    goal: "赤坂駅(1出口)",
    location: "東京都新宿区、港区",
    mysteries: 14,
    description: "新宿の都市機能と赤坂の政治の中心地を結ぶ多彩なコース。"
  },
  {
    id: 7,
    name: "池袋コース",
    distance: "10.4km",
    start: "池袋駅(東口)",
    goal: "小川町駅(A8出口)",
    location: "豊島区、文京区、千代田区",
    mysteries: 16,
    description: "池袋から神田まで、東京の北部エリアの文化と歴史を発見。"
  },
  {
    id: 8,
    name: "谷中コース",
    distance: "8.1km",
    start: "湯島駅(3出口)",
    goal: "駒込駅(南口)",
    location: "台東区、荒川区、文京区",
    mysteries: 13,
    description: "下町情緒あふれる谷中から駒込まで、江戸の面影を残すエリア。"
  },
  {
    id: 9,
    name: "千住コース",
    distance: "8.6km",
    start: "上野駅(不忍口)",
    goal: "北千住駅(西口)",
    location: "東京都台東区、荒川区",
    mysteries: 12,
    description: "上野から北千住まで、江戸時代の宿場町の歴史を辿る。"
  },
  {
    id: 10,
    name: "言門コース",
    distance: "8.4km",
    start: "上野駅(入谷口)",
    goal: "鐘ヶ淵駅(西口)",
    location: "東京都台東区、墨田区",
    mysteries: 11,
    description: "上野から隅田川沿いを歩き、下町の風情を楽しむコース。"
  },
  {
    id: 11,
    name: "品川大井コース",
    distance: "6.9km",
    start: "品川駅(高輪口)",
    goal: "流通センター駅",
    location: "東京都品川区、大田区",
    mysteries: 10,
    description: "品川から大井まで、東京湾岸エリアの発展の歴史を学ぶ。"
  },
  {
    id: 12,
    name: "馬込池上コース",
    distance: "8.1km",
    start: "立会川駅(出入口1)",
    goal: "池上駅",
    location: "東京都品川区、大田区",
    mysteries: 9,
    description: "馬込から池上まで、住宅地に残る歴史の痕跡を発見。"
  },
  {
    id: 13,
    name: "目黒田園調布コース",
    distance: "14.2km",
    start: "目黒駅(西口)",
    goal: "沼部駅",
    location: "品川区、目黒区、大田区",
    mysteries: 18,
    description: "目黒から田園調布まで、高級住宅地の歴史と文化を探る。"
  },
  {
    id: 14,
    name: "世田谷コース",
    distance: "17.0km",
    start: "渋谷駅(ハチ公口)",
    goal: "二子玉川駅(西口)",
    location: "渋谷区、世田谷区、目黒区",
    mysteries: 20,
    description: "渋谷から二子玉川まで、世田谷の豊かな自然と文化を満喫。"
  },
  {
    id: 15,
    name: "杉並コース",
    distance: "17.3km",
    start: "新井薬師前駅(南口)",
    goal: "千歳烏山駅(北口)",
    location: "中野区、杉並区、世田谷区",
    mysteries: 21,
    description: "杉並区を横断する長距離コース。住宅地に点在する歴史スポット。"
  },
  {
    id: 16,
    name: "中野石神井コース",
    distance: "18.3km",
    start: "都庁前駅(A5出口)",
    goal: "石神井公園前駅(南口)",
    location: "新宿区、中野区、練馬区",
    mysteries: 22,
    description: "新宿から石神井まで、武蔵野台地の自然と歴史を体感。"
  },
  {
    id: 17,
    name: "旧中仙道コース",
    distance: "6.7km",
    start: "駒込駅(南口)",
    goal: "板橋本町駅(A1出口)",
    location: "豊島区、北区、板橋区",
    mysteries: 8,
    description: "江戸時代の五街道の一つ、中山道の歴史を辿る短めのコース。"
  },
  {
    id: 18,
    name: "飛鳥山コース",
    distance: "11.1km",
    start: "田端駅(北口)",
    goal: "赤羽岩淵駅(3出口)",
    location: "東京都北区",
    mysteries: 14,
    description: "飛鳥山公園を中心とした北区の歴史と自然を楽しむコース。"
  },
  {
    id: 19,
    name: "西新井竹の塚コース",
    distance: "8.5km",
    start: "大師前駅(1出口)",
    goal: "見沼代親水公園駅(東口)",
    location: "東京都荒川区",
    mysteries: 10,
    description: "西新井大師から竹の塚まで、足立区の下町文化を発見。"
  },
  {
    id: 20,
    name: "柴又コース",
    distance: "4.4km",
    start: "京成高砂駅(南口1)",
    goal: "柴又駅",
    location: "東京都葛飾区",
    mysteries: 7,
    description: "寅さんで有名な柴又の下町情緒を満喫する短いコース。"
  },
  {
    id: 21,
    name: "砂町葛西コース",
    distance: "9.0km",
    start: "南砂町駅(2a出口)",
    goal: "葛西臨海公園駅(西口)",
    location: "東京都江東区、江戸川区",
    mysteries: 12,
    description: "砂町から葛西まで、東京湾岸の埋立地の歴史を学ぶ。"
  },
  {
    id: 22,
    name: "葛西瑞江コース",
    distance: "8.4km",
    start: "西葛西駅(北口)",
    goal: "瑞江駅(南口)",
    location: "東京都江戸川区",
    mysteries: 9,
    description: "江戸川区の住宅地を歩き、新しい東京の文化を発見。"
  },
  {
    id: 23,
    name: "井の頭深大寺コース",
    distance: "13.8km",
    start: "吉祥寺駅(南口/公園口)",
    goal: "調布駅(中央口)",
    location: "武蔵野市、三鷹市、調布市",
    mysteries: 17,
    description: "井の頭公園から深大寺まで、武蔵野の自然と歴史を満喫。"
  }
];

export const COURSES_PER_PAGE = 4;