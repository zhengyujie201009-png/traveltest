// Auto-extracted travel itinerary data
// Contains 9 days of Singapore + Thailand travel data

export interface PhotoSpot {
  position: string;
  pose: string;
  bestTime: string;
  refImg: string;
}

export interface EasterEgg {
  name: string;
  desc: string;
  icon: string;
  address: string;
}

export interface Spot {
  name: string;
  desc: string;
  time: string;
  icon: string;
  img: string;
  tips?: string;
  photo?: PhotoSpot;
  easterEggs?: EasterEgg[];
}

export interface MealOption {
  name: string;
  desc: string;
  price: string;
  img: string;
  tag?: string;
}

export interface Meal {
  type: string;
  name: string;
  icon: string;
  price: string;
  img?: string;
  options?: MealOption[];
}

export interface DayItinerary {
  day: number;
  date: string;
  title: string;
  theme: string;
  weather: string;
  weatherIcon: string;
  headerImg: string;
  color: string;
  spots: Spot[];
  meals: Meal[];
  transport: string;
  budget: number;
}

export interface PackingCategory {
  category: string;
  items: string[];
  icon: string;
}

export interface BudgetCategory {
  label: string;
  amount: number;
  color: string;
  icon: string;
}

export interface BudgetConfig {
  transport: number;
  hotel: number;
  food: number;
  tickets: number;
  shopping: number;
  other: number;
}

export const itineraryData: DayItinerary[] = [
  {
    day: 1,
    date: "5月2日 · 周六",
    title: "出发 · 飞向狮城",
    theme: "上海→香港→新加坡",
    weather: "晴 32°C",
    weatherIcon: "fa-sun",
    headerImg: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=80",
    color: "#667eea",
    spots: [
      {
        name: "上海→香港转机→新加坡",
        desc: "早班机从上海出发，经香港转机飞往新加坡",
        time: "07:20-15:05",
        icon: "fa-plane-departure",
        img: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=600&q=80",
        tips: "提前准备好转机所需证件",
      },
      {
        name: "星耀樟宜",
        desc: "世界最高室内瀑布「雨旋涡」，10层阶梯式森林。坐Sky Train在T2和T3之间看瀑布（T2→T3左侧窗户）",
        time: "15:30-17:00",
        icon: "fa-water",
        img: "https://images.unsplash.com/photo-1765886853297-a909c87c986c?w=600&q=80",
        tips: "穿浅色衣服更出片！我们在T4，需坐小火车到T2/T3",
        photo: {
          position: "B2层瀑布正前方的玻璃栏杆处，或L5层Canopy Park俯拍",
          pose: "4人站成一排仰头看瀑布，或背对瀑布回眸；侧面剪影也很出片",
          bestTime: "16:00-17:00 灯光开始变化时最美",
          refImg: "https://images.unsplash.com/photo-1669414792563-4d7ba3e0e242?w=400&q=80",
        },
        easterEggs: [
          {
            name: "FairPrice Xtra 超市",
            desc: "星耀樟宜B2层，新加坡最大连锁超市，零食伴手礼比机场便宜一半！",
            icon: "fa-cart-shopping",
            address: "Jewel Changi Airport B2",
          },
        ],
      },
      {
        name: "滨海宾乐雅酒店 Check-in",
        desc: "PARKROYAL COLLECTION Marina Bay，地址：6 Raffles Boulevard。毗邻滨海湾，步行可达鱼尾狮、滨海艺术中心，距City Hall地铁站步行约10分钟",
        time: "17:00-17:45",
        icon: "fa-suitcase-rolling",
        img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
        tips: "轻装出行！放好行李再去滨海湾公园看灯光秀",
      },
      {
        name: "滨海湾公园夜景",
        desc: "超级树擎天树丛18颗巨树灯光秀（19:45/20:45），花穹全球最大玻璃冷室，上万种花卉",
        time: "18:30-20:45",
        icon: "fa-tree",
        img: "https://images.unsplash.com/photo-1743245185136-0b1e32b18488?w=600&q=80",
        tips: "灯光秀19:45和20:45各一场，先逛花穹再看灯光秀",
        photo: {
          position: "超级树下方中央的圆形平台，仰拍最壮观；OCBC空中走廊上俯拍也绝美",
          pose: "4人手拉手围成圈仰头看树，或分站两棵树之间的走道上",
          bestTime: "19:30 天刚黑灯光亮起时，蓝紫色天空做背景最美",
          refImg: "https://images.unsplash.com/photo-1752859675817-c65cf2339354?w=400&q=80",
        },
      },
      {
        name: "克拉码头海鲜晚餐",
        desc: "地铁Bayfront→Clarke Quay仅2站。河畔餐厅享用新加坡辣椒螃蟹，夜景超美",
        time: "21:00-22:30",
        icon: "fa-shrimp",
        img: "https://images.unsplash.com/photo-1624347648284-d7627b1381fc?w=600&q=80",
        tips: "推荐珍宝海鲜（Jumbo Seafood），建议提前预约",
      },
    ],
    meals: [
      {
        type: "午餐",
        name: "星耀樟宜美食街",
        icon: "fa-bowl-food",
        price: "~50新币/人",
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80",
        options: [
          {
            name: "A&W 汉堡",
            desc: "美国经典快餐，星耀樟宜独家回归",
            price: "~15新币",
            img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&q=80",
            tag: "网红",
          },
          {
            name: "松发肉骨茶",
            desc: "新加坡国民美食，胡椒味浓郁汤头",
            price: "~12新币",
            img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&q=80",
            tag: "必吃",
          },
          {
            name: "老曾记咖喱角",
            desc: "新加坡街头小吃代表，酥脆可口",
            price: "~5新币",
            img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&q=80",
          },
        ],
      },
      {
        type: "晚餐",
        name: "克拉码头珍宝海鲜",
        icon: "fa-shrimp",
        price: "~80新币/人",
        img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80",
        options: [
          {
            name: "辣椒螃蟹",
            desc: "新加坡国菜！酸甜微辣的浓郁酱汁，配炸馒头蘸酱绝了",
            price: "~60新币",
            img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=300&q=80",
            tag: "国菜必点",
          },
          {
            name: "黑胡椒螃蟹",
            desc: "另一种经典做法，黑胡椒香气浓烈",
            price: "~55新币",
            img: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=300&q=80",
            tag: "推荐",
          },
          {
            name: "麦片虾",
            desc: "金黄酥脆的麦片裹虾，甜咸交织",
            price: "~28新币",
            img: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=300&q=80",
          },
        ],
      },
    ],
    transport: "飞机(上海→香港→新加坡) + 地铁",
    budget: 1500,
  },
  {
    day: 2,
    date: "5月3日 · 周日",
    title: "暴走狮城 · 文化深度游",
    theme: "牛车水→市政区→滨海湾→哈芝巷→夜间动物园",
    weather: "多云 31°C",
    weatherIcon: "fa-cloud-sun",
    headerImg: "https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=1200&q=80",
    color: "#f5576c",
    spots: [
      {
        name: "① 珍珠坊 → ② 牛车水",
        desc: "从滨海宾乐雅酒店出发，地铁到牛车水站。逛华人老街区，感受南洋风情，Maxwell美食中心吃早餐",
        time: "09:00-10:15",
        icon: "fa-torii-gate",
        img: "https://images.unsplash.com/photo-1536163713675-42cf53cbd4f5?w=600&q=80",
        tips: "Maxwell美食中心的天天海南鸡饭必吃！",
        photo: {
          position: "宝塔街灯笼走廊正中央，两排灯笼形成对称构图",
          pose: "4人走在灯笼下回头看镜头，或坐在骑楼台阶上拍合照",
          bestTime: "09:00-10:00 早上光线柔和人少",
          refImg: "https://images.unsplash.com/photo-1589848014453-f5371e76d4ed?w=400&q=80",
        },
        easterEggs: [
          {
            name: "牛车水大厦菜市场",
            desc: "牛车水地铁站旁的传统湿货市场，2楼是本地人吃早餐的熟食中心，比Maxwell更接地气",
            icon: "fa-store",
            address: "335 Smith Street",
          },
        ],
      },
      {
        name: "③ 旧禧街警察局",
        desc: "步行8分钟沿新桥路北上。927扇彩虹色窗户的殖民建筑，超级出片！",
        time: "10:15-10:45",
        icon: "fa-building-columns",
        img: "https://images.unsplash.com/photo-1621395731232-ca7108eec330?w=600&q=80",
        tips: "建筑外墙拍照最佳，不需要进去",
        photo: {
          position: "马路对面人行道上，用广角镜头拍摄整面彩虹窗户墙；或站在建筑正门45度角",
          pose: "穿纯色衣服站在彩色窗户前形成对比，单人靠墙侧身或4人排排站",
          bestTime: "10:00-11:00 阳光照射窗户色彩最鲜艳",
          refImg: "https://images.unsplash.com/photo-1621395731232-ca7108eec330?w=400&q=80",
        },
      },
      {
        name: "④ 亚洲文明博物馆",
        desc: "步行5分钟往东到河边，顺路先打卡南边的点。了解亚洲多元文化，河边位置拍照也很美",
        time: "10:45-11:30",
        icon: "fa-landmark-dome",
        img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=600&q=80",
      },
      {
        name: "⑤ 鱼尾狮公园",
        desc: "步行8分钟沿滨海湾走。新加坡地标！与鱼尾狮合影，远眺金沙酒店和摩天轮全景",
        time: "11:30-12:15",
        icon: "fa-water",
        img: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=600&q=80",
        tips: "上午人少拍照不排队",
        photo: {
          position: "鱼尾狮正前方10米处，让水柱和金沙酒店同框；侧面可以拍经典'喝水'pose",
          pose: "经典：张嘴对准水柱假装喝水；创意：4人排队接水传递；合照：以金沙酒店为背景",
          bestTime: "上午11:00前逆光少、人也少，黄金拍照时间",
          refImg: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=400&q=80",
        },
      },
      {
        name: "⑥ 新加坡国家美术馆",
        desc: "步行8分钟往北回到市政区。东南亚最大视觉艺术殿堂，里面有餐厅可以午餐+吹空调休息",
        time: "12:30-14:00",
        icon: "fa-palette",
        img: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=600&q=80",
        tips: "门票20新币，午餐可在馆内Gallery & Co解决",
      },
      {
        name: "⑦ 圣安德烈教堂 → ⑧ 赞美广场",
        desc: "步行3分钟。洁白哥特式教堂庄严肃穆，对面赞美广场是前修道院改建的餐饮购物区",
        time: "14:00-14:45",
        icon: "fa-church",
        img: "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=600&q=80",
        tips: "教堂免费参观，周日有礼拜注意时间",
      },
      {
        name: "⑨ 福康宁公园",
        desc: "步行8分钟往西。ins网红打卡地，著名的福康宁树洞隧道必拍！下午树荫多比较凉快",
        time: "14:45-15:30",
        icon: "fa-tree",
        img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=600&q=80",
        tips: "树洞隧道在公园内，跟着Google Map导航",
        photo: {
          position: "树洞隧道（Fort Canning Tree Tunnel）入口处，站在螺旋楼梯底部仰拍",
          pose: "1人站在隧道中央回头看镜头（最经典）；或4人在隧道口探头排列拍",
          bestTime: "14:00-16:00 下午光线从侧面透入隧道最梦幻",
          refImg: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=400&q=80",
        },
      },
      {
        name: "⑩ 莱佛士酒店",
        desc: "地铁1站(Fort Canning→Bugis方向)。新加坡最传奇殖民地酒店，Long Bar喝一杯Singapore Sling",
        time: "15:45-16:30",
        icon: "fa-hotel",
        img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
        tips: "Singapore Sling约35新币，花生壳可以扔地上",
      },
      {
        name: "⑪ 哈芝巷",
        desc: "步行5分钟。小红书超火的彩色涂鸦巷！独立设计师小店+文艺咖啡馆，旁边苏丹回教堂也很出片",
        time: "16:30-17:15",
        icon: "fa-paintbrush",
        img: "https://images.unsplash.com/photo-1615392297938-4d142a877f48?w=600&q=80",
        tips: "穿彩色衣服拍照更出片",
        photo: {
          position: "巷子中段最大幅涂鸦墙前（蓝色翅膀墙）；苏丹回教堂金色穹顶在巷口拍",
          pose: "靠墙站立假装翅膀长在身上；4人坐在彩色台阶上；走路抓拍最自然",
          bestTime: "16:00-17:30 下午斜阳打在涂鸦墙上色彩最饱和",
          refImg: "https://images.unsplash.com/photo-1615392297938-4d142a877f48?w=400&q=80",
        },
        easterEggs: [
          {
            name: "昇菘超市 Sheng Siong",
            desc: "Bugis附近的新加坡本地平价超市，当地人日常采购的地方，零食种类超全",
            icon: "fa-basket-shopping",
            address: "Bugis Junction附近",
          },
        ],
      },
      {
        name: "⑫ 夜间野生动物园",
        desc: "Bugis地铁→Khatib站转接驳车约40分钟。全球首个夜间动物园！游览车穿越热带丛林，近距离观赏夜行动物",
        time: "19:15-22:00",
        icon: "fa-paw",
        img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&q=80",
        tips: "门票55新币/人，提前网上购票。19:15开园第一班车人最少",
      },
    ],
    meals: [
      {
        type: "早餐",
        name: "Maxwell美食中心（牛车水旁）",
        icon: "fa-bowl-rice",
        price: "~10新币/人",
        img: "https://images.unsplash.com/photo-1717120070753-5374b44e41dc?w=400&q=80",
        options: [
          {
            name: "天天海南鸡饭",
            desc: "Maxwell镇店之宝！米其林推荐，嫩滑鸡肉配油饭",
            price: "~6新币",
            img: "https://images.unsplash.com/photo-1569058242252-623df46b5025?w=300&q=80",
            tag: "米其林",
          },
          {
            name: "真真粥品",
            desc: "广式生滚粥，鱼片粥鲜甜顺滑",
            price: "~5新币",
            img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=300&q=80",
          },
          {
            name: "金华鱼片米粉",
            desc: "鱼汤浓郁，鱼片滑嫩，当地人最爱",
            price: "~6新币",
            img: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=300&q=80",
            tag: "本地人推荐",
          },
        ],
      },
      {
        type: "午餐",
        name: "国家美术馆Gallery & Co",
        icon: "fa-utensils",
        price: "~25新币/人",
        img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80",
        options: [
          {
            name: "叻沙 Laksa",
            desc: "椰浆咖喱汤底配粗米粉，浓郁鲜香",
            price: "~15新币",
            img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=300&q=80",
            tag: "必吃",
          },
          {
            name: "海南咖喱饭",
            desc: "多种小菜自选搭配，经济实惠",
            price: "~12新币",
            img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&q=80",
          },
          {
            name: "椰浆饭 Nasi Lemak",
            desc: "马来风味椰香饭，配炸鸡翅和参巴辣酱",
            price: "~10新币",
            img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=300&q=80",
            tag: "推荐",
          },
        ],
      },
      {
        type: "下午茶",
        name: "莱佛士酒店Long Bar",
        icon: "fa-martini-glass",
        price: "~35新币/人",
        img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80",
        options: [
          {
            name: "Singapore Sling",
            desc: "1915年诞生于此的经典鸡尾酒，花生壳可以扔地上",
            price: "~35新币",
            img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=300&q=80",
            tag: "招牌",
          },
          {
            name: "英式下午茶套餐",
            desc: "三层架配司康饼、三明治和甜点",
            price: "~68新币/套",
            img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=300&q=80",
          },
        ],
      },
      {
        type: "晚餐",
        name: "动物园附近Ulu Ulu Safari餐厅",
        icon: "fa-drumstick-bite",
        price: "~30新币/人",
        img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80",
        options: [
          {
            name: "沙爹烤串",
            desc: "马来风味烤肉串，配花生酱蘸料",
            price: "~12新币",
            img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&q=80",
            tag: "推荐",
          },
          {
            name: "炒粿条",
            desc: "大火炒出的锅气，酱油香浓郁",
            price: "~8新币",
            img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&q=80",
          },
          {
            name: "印度煎饼 Roti Prata",
            desc: "酥脆薄饼配咖喱蘸酱，完美宵夜",
            price: "~5新币",
            img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&q=80",
          },
        ],
      },
    ],
    transport: "地铁到牛车水站 → 步行约5km → Bugis地铁到Khatib转接驳车",
    budget: 600,
  },
  {
    day: 3,
    date: "5月4日 · 周一",
    title: "三种文化 · 飞向海岛",
    theme: "植物园→乌节路→小印度→飞普吉岛→班赞夜市海鲜",
    weather: "晴 33°C",
    weatherIcon: "fa-sun",
    headerImg: "https://images.unsplash.com/photo-1752859676452-fe795133a16f?w=1200&q=80",
    color: "#4facfe",
    spots: [
      {
        name: "新加坡植物园",
        desc: "UNESCO世界遗产！早上凉快最适合逛。天鹅湖漫步、热带雨林探秘、国家胡姬花园赏兰花",
        time: "09:00-10:30",
        icon: "fa-seedling",
        img: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=600&q=80",
        tips: "植物园免费，兰花园门票5新币。地铁植物园站(CC19)直达",
      },
      {
        name: "乌节路购物",
        desc: "地铁3站到乌节路。新加坡最著名购物街！ION Orchard、义安城，56楼ION Sky免费观景台",
        time: "10:45-13:00",
        icon: "fa-bag-shopping",
        img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
        tips: "记得办理退税！ION Sky免费观景台看城市全景",
      },
      {
        name: "小印度 Little India",
        desc: "地铁换乘到小印度站。色彩爆炸的印度文化街区！陈东齡故居（彩虹屋）必拍，小印度拱廊买手信",
        time: "13:15-14:45",
        icon: "fa-om",
        img: "https://images.unsplash.com/photo-1589848014453-f5371e76d4ed?w=600&q=80",
        tips: "小印度离机场方向更近，逛完直接取行李去机场",
        photo: {
          position: "陈东龄故居（Tan Teng Niah）正门前，整面彩虹色外墙做背景",
          pose: "4人分站在不同颜色的窗户前，或坐在门前台阶上拍彩色合照",
          bestTime: "13:00-15:00 正午阳光让色彩最鲜艳",
          refImg: "https://images.unsplash.com/photo-1589848014453-f5371e76d4ed?w=400&q=80",
        },
        easterEggs: [
          {
            name: "竹脚中心 Tekka Centre",
            desc: "小印度地铁站旁的传统菜市场+熟食中心，印度飞饼、拉茶、Biryani饭超正宗",
            icon: "fa-store",
            address: "665 Buffalo Road",
          },
        ],
      },
      {
        name: "回滨海宾乐雅酒店取行李 · 前往机场",
        desc: "从小印度NE线回PARKROYAL COLLECTION Marina Bay取行李退房，再地铁前往樟宜机场，提前2小时值机",
        time: "15:00-16:30",
        icon: "fa-suitcase-rolling",
        img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80",
        tips: "可提前寄存行李到前台，退房后再取",
      },
      {
        name: "飞往普吉岛",
        desc: "告别新加坡，飞往泰国普吉岛，开启海岛度假模式！",
        time: "18:50-19:50",
        icon: "fa-plane",
        img: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=600&q=80",
      },
      {
        name: "班赞夜市 Banzaan Fresh Market",
        desc: "芭东海滩核心地带，紧邻江西冷购物中心斜对面（Rat-U-Thit 200 Pee Road 181号）。白天是生鲜市场，傍晚变身热闹夜市。一楼买海鲜，二楼加工，现买现做！姐妹推荐必吃：花龙（花龙虾）、富贵虾，个头超大鲜甜无比",
        time: "20:30-22:30",
        icon: "fa-shrimp",
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
        tips: "砍价攻略：海鲜标价虚高，一定要砍！起码砍到3-4折才是合理价，态度坚定多走几家比价。砍价成功后老板通常还会送小海鲜（小螃蟹、贝类等）。营业时间16:00-23:00",
      },
    ],
    meals: [
      {
        type: "早餐",
        name: "植物园附近Dempsey Hill",
        icon: "fa-leaf",
        price: "~20新币/人",
        img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
        options: [
          {
            name: "Halia 餐厅",
            desc: "植物园内的网红餐厅，热带花园中享用Brunch",
            price: "~25新币",
            img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&q=80",
            tag: "网红",
          },
          {
            name: "PS.Cafe",
            desc: "新加坡本土人气咖啡馆，松露薯条必点",
            price: "~20新币",
            img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=300&q=80",
            tag: "推荐",
          },
        ],
      },
      {
        type: "午餐",
        name: "乌节路美食广场",
        icon: "fa-burger",
        price: "~25新币/人",
        img: "https://images.unsplash.com/photo-1739857554154-80c15b7b1af7?w=400&q=80",
        options: [
          {
            name: "文东记海南鸡饭",
            desc: "新加坡三大鸡饭之一，皮滑肉嫩",
            price: "~8新币",
            img: "https://images.unsplash.com/photo-1569058242252-623df46b5025?w=300&q=80",
            tag: "必吃",
          },
          {
            name: "亚坤咖椰吐司",
            desc: "国民早餐品牌，咖椰酱+半熟蛋经典搭配",
            price: "~6新币",
            img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=300&q=80",
            tag: "经典",
          },
          {
            name: "虾面",
            desc: "浓郁虾汤底，鲜美无比",
            price: "~8新币",
            img: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=300&q=80",
          },
        ],
      },
      {
        type: "晚餐",
        name: "班赞夜市海鲜大餐",
        icon: "fa-shrimp",
        price: "~500-800泰铢/人（砍价后）",
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80",
        options: [
          {
            name: "花龙（花龙虾）",
            desc: "姐妹强推！肉质弹嫩鲜甜，芝士焗或蒜蓉蒸都绝。记得砍到3-4折！",
            price: "砍价后~600-800泰铢/只",
            img: "https://images.unsplash.com/photo-1553247407-23251ce81f59?w=300&q=80",
            tag: "姐妹推荐",
          },
          {
            name: "富贵虾",
            desc: "个头超大的老虎虾，肉厚Q弹，清蒸或炭烤都好吃",
            price: "砍价后~300-500泰铢/份",
            img: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=300&q=80",
            tag: "姐妹推荐",
          },
          {
            name: "砍价送的小海鲜",
            desc: "砍价成功后老板通常送小螃蟹、扇贝、蛏子等，白嫖的快乐！",
            price: "免费赠送",
            img: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=300&q=80",
            tag: "砍价福利",
          },
        ],
      },
    ],
    transport: "地铁植物园站(西北)→乌节路(中西)→小印度(中东)→樟宜机场(东)",
    budget: 1200,
  },
  {
    day: 4,
    date: "5月5日 · 周二",
    title: "悬崖海景 · 躺平充电",
    theme: "The Commune悬崖餐厅 · 卡伦海滩 · 卡塔海滩 · 泰式SPA",
    weather: "晴 34°C",
    weatherIcon: "fa-sun",
    headerImg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    color: "#43e97b",
    spots: [
      {
        name: "睡到自然醒 · 酒店早餐",
        desc: "前3天暴走太累了！今天没有闹钟，睡到自然醒，慢悠悠去吃个酒店早餐，开启彻底放松的一天",
        time: "09:00-10:30",
        icon: "fa-bed",
        img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
        tips: "不赶行程就是最好的行程",
      },
      {
        name: "The Commune 悬崖餐厅",
        desc: "普吉岛超火的悬崖海景咖啡厅！位于卡伦区域的悬崖上（10/3 Laemsai Rd），180度无敌安达曼海景。沿阶梯往下有不同高度的露台，每一层视角都不同，眼前就是无边际海平面。点一杯饮品，在悬崖上吹海风、拍美照、发呆放空",
        time: "10:30-13:00",
        icon: "fa-mug-hot",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
        tips: "入场低消200泰铢/人可抵饮品。建议上午去人少不晒，下午和傍晚人多。涂好防晒，有树荫的位置不多",
        photo: {
          position: "悬崖阶梯中段的露台，以无边海景为背景；或最下层靠近海面的平台",
          pose: "4人坐在悬崖边的躺椅上举杯，海天一线做背景；或站在阶梯上拍层次感照片",
          bestTime: "10:00-12:00 上午光线柔和，人少出片率高",
          refImg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80",
        },
      },
      {
        name: "卡伦海滩 Karon Beach",
        desc: "从The Commune出来就近到卡伦海滩！比芭东干净安静太多的长沙滩，沙子细白会「唱歌」（踩上去发出吱吱声）。人少拍照超出片，海水清澈碧蓝适合游泳",
        time: "13:30-15:30",
        icon: "fa-umbrella-beach",
        img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80",
        tips: "沙滩椅约200泰铢/天，可以砍价。海水比芭东清澈很多！",
      },
      {
        name: "卡塔海滩 Kata Beach",
        desc: "紧挨卡伦的精致小海滩，椰林环绕，氛围悠闲。从卡伦过去突突车5分钟。海滩南端的观景台可以同时俯瞰卡塔和卡伦两个海湾",
        time: "15:30-17:00",
        icon: "fa-water",
        img: "https://images.unsplash.com/photo-1468413253725-0d5181091126?w=600&q=80",
        tips: "卡塔观景台（Karon Viewpoint）看日落绝美，但要提前去占位",
        photo: {
          position: "卡塔观景台（Karon Viewpoint），可以俯瞰三个海湾全景",
          pose: "4人站在观景台栏杆前，以三个海湾为背景；或坐在台阶上拍日落剪影",
          bestTime: "17:00-18:00 日落前的金色光线最美",
          refImg: "https://images.unsplash.com/photo-1468413253725-0d5181091126?w=400&q=80",
        },
      },
      {
        name: "泰式按摩 · 满血复活",
        desc: "回到住处附近做一个正宗泰式按摩，2小时全身精油SPA，把前3天暴走的疲劳全部消除。卡伦/卡塔街上按摩店很多，价格比芭东更实惠",
        time: "17:30-19:30",
        icon: "fa-spa",
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80",
        tips: "泰式按摩约300-500泰铢/小时，精油SPA约800-1200泰铢/2小时。Let's Relax连锁品质不错",
      },
      {
        name: "🔫 射击体验（可选）",
        desc: "Patong Paragon Gun Shooting Range，就在芭东！真枪实弹射击体验，有手枪、步枪、霰弹枪可选，全程专业教练一对一指导，零基础也能玩。有中文工作人员，沟通无障碍。到芭东后先打枪再看表演，肾上腺素拉满的一天",
        time: "19:30-20:00",
        icon: "fa-crosshairs",
        img: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=600&q=80",
        tips: "推荐在Klook提前订票更便宜，套餐约800-2000泰铢/人（含10-30发子弹）。到了现场加弹另付。拍照打卡超酷！注意：这是可选项目，不想去可以跳过直接看表演",
      },
      {
        name: "晚间表演（二选一）",
        desc: "① Simon Cabaret 西蒙人妖秀：芭东经典，华丽歌舞约1小时，每天18:00/19:30/21:00三场，约800泰铢/人，就在芭东很近。② Phuket FantaSea 幻多奇：大型泰国文化主题乐园+魔幻大秀，含自助晚餐，约1800泰铢/人，5月5日周二刚好开放！在卡马拉方向约30分钟车程",
        time: "20:30-22:00",
        icon: "fa-masks-theater",
        img: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=600&q=80",
        tips: "Simon Cabaret推荐21:00场（如果先去射击的话）。FantaSea推荐提前在Klook买票更便宜，含酒店接送",
      },
      {
        name: "芭东夜市闲逛",
        desc: "看完表演顺路逛芭东夜市！芭东的夜生活超丰富，街头小吃摊、纪念品店、酒吧一条街应有尽有。买点小吃边走边吃，淘点手信伴手礼，感受普吉岛最热闹的夜晚氛围",
        time: "22:00-23:30",
        icon: "fa-store",
        img: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=600&q=80",
        tips: "芭东夜市就在Bangla Road（邦古拉街）周边，纪念品记得砍价。路边的烤串、芒果糯米饭、椰子冰淇淋都值得试",
      },
    ],
    meals: [
      {
        type: "早餐",
        name: "酒店早餐（睡到自然醒）",
        icon: "fa-mug-hot",
        price: "含住宿",
      },
      {
        type: "午餐",
        name: "The Commune 悬崖餐厅",
        icon: "fa-mug-hot",
        price: "~300-500泰铢/人",
        options: [
          {
            name: "悬崖海景鸡尾酒/冰沙",
            desc: "在180度海景露台上享用冰饮，入场低消200泰铢可抵消费",
            price: "~200-350泰铢",
            img: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=300&q=80",
            tag: "必点",
          },
          {
            name: "泰式简餐",
            desc: "Pad Thai、绿咖喱等泰式经典，边吃边看海",
            price: "~200-300泰铢",
            img: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=300&q=80",
          },
        ],
      },
      {
        type: "晚餐",
        name: "看表演前后用餐",
        icon: "fa-utensils",
        price: "~300-500泰铢/人",
        options: [
          {
            name: "选FantaSea含自助晚餐",
            desc: "幻多奇套票含国际自助餐，种类丰富，边吃边等开场",
            price: "含在套票中",
            img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&q=80",
            tag: "FantaSea",
          },
          {
            name: "选Simon则附近觅食",
            desc: "芭东街头小吃或餐厅，冬阴功、炒河粉、海鲜应有尽有",
            price: "~300-500泰铢",
            img: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=300&q=80",
            tag: "Simon",
          },
        ],
      },
    ],
    transport: "突突车（卡伦↔卡塔 约100泰铢/程，去芭东约200泰铢）",
    budget: 1000,
  },
  {
    day: 5,
    date: "5月6日 · 周三",
    title: "跳岛探险",
    theme: "皮皮岛 / 皇帝岛一日游",
    weather: "晴 33°C",
    weatherIcon: "fa-sun",
    headerImg: "https://images.unsplash.com/photo-1468413253725-0d5181091126?w=1200&q=80",
    color: "#fa709a",
    spots: [
      {
        name: "跳岛游出发",
        desc: "乘坐快艇出发前往皮皮岛或皇帝岛，感受安达曼海的碧蓝",
        time: "08:00-09:00",
        icon: "fa-ship",
        img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
        tips: "晕船的提前吃晕船药",
      },
      {
        name: "浮潜 & 海上活动",
        desc: "在清澈海水中浮潜，观赏五彩斑斓的珊瑚和热带鱼群",
        time: "10:00-14:00",
        icon: "fa-water",
        img: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=600&q=80",
      },
      {
        name: "海岛漫步",
        desc: "在洁白沙滩上漫步，拍摄绝美海景大片",
        time: "14:00-16:00",
        icon: "fa-camera",
        img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80",
      },
    ],
    meals: [
      {
        type: "早餐",
        name: "酒店早餐",
        icon: "fa-mug-hot",
        price: "含住宿",
      },
      {
        type: "午餐",
        name: "岛上午餐（含在跳岛游）",
        icon: "fa-plate-wheat",
        price: "含团费",
      },
      {
        type: "晚餐",
        name: "海鲜大餐",
        icon: "fa-shrimp",
        price: "~500泰铢/人",
      },
    ],
    transport: "酒店接送 + 快艇",
    budget: 800,
  },
  {
    day: 6,
    date: "5月7日 · 周四",
    title: "普吉老城 · 飞向曼谷",
    theme: "中葡建筑 · 古早味美食 · 飞曼谷",
    weather: "晴 34°C",
    weatherIcon: "fa-sun",
    headerImg: "https://images.unsplash.com/photo-1600002415506-dd06090d3480?w=1200&q=80",
    color: "#e07a5f",
    spots: [
      {
        name: "退房 → 普吉镇",
        desc: "从卡伦/卡塔酒店退房，Grab约30分钟抵达普吉镇老城区，行李寄存在咖啡馆或寄存点",
        time: "08:30-09:30",
        icon: "fa-suitcase-rolling",
        img: "https://images.unsplash.com/photo-1600002415506-dd06090d3480?w=600&q=80",
        tips: "打车约300-400泰铢。行李可以寄存在普吉镇的咖啡馆（很多店提供寄存服务）或Grab直接送机场",
      },
      {
        name: "Thalang Road 他朗路",
        desc: "普吉镇最有名的老街，两旁是色彩斑斓的中葡式骑楼建筑（Sino-Portuguese），粉色、黄色、蓝色外墙超级出片。街上有很多文创小店、咖啡馆和涂鸦墙",
        time: "09:30-10:30",
        icon: "fa-building-columns",
        img: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=600&q=80",
        tips: "周日有Lard Yai周日步行街夜市，但周四去白天拍照人更少更舒服",
      },
      {
        name: "Soi Romanee 浪漫街",
        desc: "普吉镇最美的小巷，窄窄的街道两旁是修复后的中葡老宅，如今变成精品咖啡馆和画廊。曾经是普吉岛的红灯区，现在是文艺青年的打卡圣地",
        time: "10:30-11:00",
        icon: "fa-palette",
        img: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=600&q=80",
        tips: "巷子很窄但超好拍，建议穿颜色鲜艳的衣服和建筑撞色",
      },
      {
        name: "街头艺术 + 甲乙拉寺",
        desc: "Phang Nga Road和Krabi Road上的巨幅涂鸦墙画（锡矿历史、海洋生物、华人移民故事），顺路参观普吉镇最古老的中国寺庙甲乙拉寺（Wat Put Jaw），供奉观音菩萨",
        time: "11:00-11:45",
        icon: "fa-spray-can",
        img: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80",
        tips: "跟着Google Maps搜 Phuket Street Art 可以找到所有涂鸦点位",
      },
      {
        name: "One Chun Cafe & Restaurant",
        desc: "普吉镇最有名的南泰菜餐厅，米其林推荐！必点：蟹肉福建面（Mee Hokkien）、普吉咖喱蟹、O-Tao蚝煎。餐厅本身就在一栋漂亮的中葡老宅里",
        time: "11:45-13:00",
        icon: "fa-utensils",
        img: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=600&q=80",
        tips: "人气很旺，建议11:45就去排队避开午高峰。蟹肉福建面约180泰铢，性价比超高",
      },
      {
        name: "普吉镇 → 普吉机场",
        desc: "从普吉镇到普吉国际机场约30-40分钟车程，提前2小时到机场值机",
        time: "13:00-14:00",
        icon: "fa-taxi",
        img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
        tips: "普吉镇到机场比卡伦/卡塔更近！Grab约250-350泰铢",
      },
      {
        name: "飞往曼谷",
        desc: "从普吉岛飞往曼谷，约1.5小时航程。告别海岛，飞向都市！",
        time: "16:10-17:45",
        icon: "fa-plane",
        img: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=600&q=80",
        tips: "普吉→曼谷航班很多，亚航、泰狮航等廉航约500-1000泰铢/人",
      },
      {
        name: "入住湄南河区酒店",
        desc: "抵达曼谷素万那普机场，Grab约40分钟到湄南河区酒店check in。选择河畔酒店，方便明天坐船礼佛、后天出发去美功铁道",
        time: "18:00-19:00",
        icon: "fa-hotel",
        img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80",
        tips: "推荐住ICONSIAM附近的河畔酒店，BTS Gold Line Charoen Nakhon站直达。河景房看湄南河夜景超美",
      },
      {
        name: "ICONSIAM 暹罗天地",
        desc: "曼谷最大最豪华的河畔商场！7层购物天堂，G层有室内水上市场Sook Siam（还原了泰国四大地区的传统市集，各种街头小吃和手工艺品）。把买买买前置到今晚，明后天就能安心玩！",
        time: "19:00-22:00",
        icon: "fa-cart-shopping",
        img: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=600&q=80",
        tips: "营业到22:00。Sook Siam室内水上市场必逛！芒果糯米饭、船粿条、泰式奶茶都超好吃。Boots/屈臣氏买泰国护肤品（Snail White蜗牛霜、Mistine防晒）。NaRaYa曼谷包这里也有专柜",
      },
    ],
    meals: [
      {
        type: "午餐",
        name: "One Chun 米其林推荐南泰菜",
        icon: "fa-utensils",
        price: "~250泰铢/人",
      },
      {
        type: "晚餐",
        name: "ICONSIAM Sook Siam 室内水上市场",
        icon: "fa-bowl-food",
        price: "~300泰铢/人",
      },
    ],
    transport: "Grab(卡伦→普吉镇~300泰铢) + Grab(普吉镇→机场~300泰铢) + 飞机(普吉→曼谷) + Grab(机场→酒店)",
    budget: 1200,
  },
  {
    day: 7,
    date: "5月8日 · 周五",
    title: "金碧辉煌 · 寺庙巡礼",
    theme: "大皇宫 · 卧佛寺 · 郑王庙 · 河滨夜市",
    weather: "多云 34°C",
    weatherIcon: "fa-cloud-sun",
    headerImg: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&q=80",
    color: "#ff6b6b",
    spots: [
      {
        name: "酒店出发 → 大皇宫",
        desc: "从湄南河区酒店出发，步行到附近码头乘湄南河快船（Chao Phraya Express Boat）到N9 Tha Chang码头，沿途欣赏湄南河两岸风光。住在河边最大的好处就是直接上船！",
        time: "07:30-08:30",
        icon: "fa-ship",
        img: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&q=80",
        tips: "河畔酒店步行几分钟就到码头，比住暹罗区还要转BTS再换船方便太多！橙旗船15泰铢/人，到N9 Tha Chang码头下船。一定要8:30前到大皇宫，避开旅行团大军",
      },
      {
        name: "大皇宫 + 玉佛寺",
        desc: "泰国最神圣的建筑群，金碧辉煌的皇家宫殿和供奉翡翠玉佛的玉佛寺。每一面墙、每一根柱子都镶嵌着精美的金箔和彩色玻璃，华丽到令人窒息。门票含大皇宫、玉佛寺和阿南达皇家御会馆",
        time: "08:30-11:00",
        icon: "fa-landmark-dome",
        img: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=600&q=80",
        tips: "门票500泰铢/人。必须穿过膝长裤/长裙+遮肩上衣+不能穿拖鞋！门口有围巾租借但排队很长，建议自备。早上光线最好拍照，玉佛寺的回廊壁画超震撼",
      },
      {
        name: "卧佛寺 Wat Pho",
        desc: "曼谷最古老的寺庙，拥有46米长的巨型镀金卧佛像，脚底镶嵌108块珍珠母贝图案。这里也是泰式按摩的发源地，寺内就有正宗的按摩学校",
        time: "11:00-12:30",
        icon: "fa-place-of-worship",
        img: "https://images.unsplash.com/photo-1600002415506-dd06090d3480?w=600&q=80",
        tips: "门票200泰铢/人。从大皇宫步行5分钟即到。卧佛脚底的贝母镶嵌一定要拍！寺内按摩30分钟260泰铢，比外面贵但胜在正宗",
      },
      {
        name: "Supanniga Eating Room",
        desc: "就在卧佛寺旁边的河景泰餐厅，米其林推荐！坐在露台上一边吃正宗泰东北菜一边看郑王庙，冬阴功、蟹肉炒饭、青木瓜沙拉都是招牌",
        time: "12:30-13:30",
        icon: "fa-utensils",
        img: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=600&q=80",
        tips: "靠窗河景位要提前到或预约。人均300-500泰铢，性价比很高。推荐River Prawn Cake和Massaman Curry",
      },
      {
        name: "郑王庙 Wat Arun",
        desc: "黎明寺，湄南河西岸最标志性的建筑。82米高的巴壤塔镶满了彩色陶瓷和贝壳碎片，在阳光下闪耀着万花筒般的光芒。可以爬到塔的中层平台俯瞰湄南河",
        time: "13:45-15:30",
        icon: "fa-place-of-worship",
        img: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=600&q=80",
        tips: "从卧佛寺旁的Tha Tien码头坐摆渡船过河，4泰铢/人，2分钟到。门票200泰铢/人。穿泰服在这里拍照超出片！下午2-3点光线最好",
      },
      {
        name: "TYME Rooftop Bar",
        desc: "郑王庙正对面新开的高空酒吧，坐在露台上正面对着郑王庙全景，日落时分塔尖被夕阳染成金色，绝对是曼谷最美的日落观景点之一",
        time: "16:00-17:30",
        icon: "fa-martini-glass-citrus",
        img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&q=80",
        tips: "地址：61 Maharat Rd，从郑王庙坐船回东岸步行6分钟。鸡尾酒约300-400泰铢/杯。日落前到才能占到好位置！",
      },
      {
        name: "回酒店休整 → 换装",
        desc: "从TYME坐船回湄南河区酒店，步行几分钟就到，比住暹罗区省了转BTS的时间。洗澡换衣服，准备晚上的夜市之旅。曼谷的夜晚才是真正的开始！",
        time: "17:30-19:00",
        icon: "fa-hotel",
        img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80",
      },
      {
        name: "Jodd Fairs 乔德夜市",
        desc: "曼谷最火的夜市！干净整洁的摊位排列整齐，有各种泰国街头美食和创意餐车。必吃火山排骨（整块排骨在火山石上滋滋冒烟端上来）、生腌虾、芒果糯米饭、泰式奶茶",
        time: "19:00-22:00",
        icon: "fa-fire",
        img: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=600&q=80",
        tips: "MRT Phra Ram 9站，Central Rama 9后方。16:00开始营业但建议19:00后去氛围最好。火山排骨约299泰铢必点！人很多但通道比较窄，注意随身物品",
      },
    ],
    meals: [
      {
        type: "午餐",
        name: "Supanniga Eating Room 河景泰餐",
        icon: "fa-utensils",
        price: "~400泰铢/人",
      },
      {
        type: "下午茶",
        name: "TYME Rooftop 日落鸡尾酒",
        icon: "fa-martini-glass",
        price: "~400泰铢/人",
      },
      {
        type: "晚餐",
        name: "Jodd Fairs 夜市小吃",
        icon: "fa-fire",
        price: "~300泰铢/人",
      },
    ],
    transport: "湄南河快船(15泰铢) + 摆渡船(4泰铢) + MRT",
    budget: 800,
  },
  {
    day: 8,
    date: "5月9日 · 周六",
    title: "铁道奇观 · 水上集市",
    theme: "乍都乍市场 · 美功铁道 · 安帕瓦水上市场",
    weather: "晴 35°C",
    weatherIcon: "fa-sun",
    headerImg: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=1200&q=80",
    color: "#a855f7",
    spots: [
      {
        name: "乍都乍周末市场 Chatuchak",
        desc: "东南亚最大的周末市场，超过15000个摊位分成27个区！从手工艺品、vintage服饰、泰丝、椰子碗、香薰精油到各种小吃应有尽有。周六开门，今天是扫货伴手礼的最后机会",
        time: "09:00-12:00",
        icon: "fa-shop",
        img: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80",
        tips: "从湄南河区酒店坐BTS Gold Line到Silom再转BTS到Mo Chit站，约40分钟。9点开门就到，中午前逛完！必逛：Section 2-4（手工艺品）、Section 7（泰裤/棉麻衣服）、Section 17-19（家居香薰）。带现金砍价，开价的6-7折起砍",
      },
      {
        name: "包车出发 → 美功铁道市场",
        desc: "从乍都乍出发包车前往美功铁道市场（Maeklong Railway Market），车程约1.5小时往西南方向。沿途经过泰国乡村风光，远离曼谷都市的喧嚣",
        time: "12:30-14:00",
        icon: "fa-van-shuttle",
        img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
        tips: "建议在Klook/KKday提前预订美功+安帕瓦半日包车游，4人包车约2000-2500泰铢。从湄南河区出发比暹罗区少穿越半个市区，省20-30分钟。车上可以补觉休息",
      },
      {
        name: "美功铁道市场 Maeklong Railway Market",
        desc: "全世界最危险的菜市场！铁轨两旁密密麻麻的摊贩卖着蔬菜、水果、海鲜，火车进站时所有摊贩在几秒内收起遮阳棚让火车贴身而过，火车走后又瞬间恢复营业。14:30有一班火车进站，这就是今天的高潮时刻！",
        time: "14:00-15:00",
        icon: "fa-train",
        img: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=600&q=80",
        tips: "14:30火车进站是最震撼的时刻！提前15分钟占好位置，站在铁轨旁边（不要站在轨道上）。火车出站时刻15:30还有一班。整个过程只有几十秒但终生难忘",
      },
      {
        name: "安帕瓦水上市场 Amphawa Floating Market",
        desc: "距美功仅10公里，泰国最有氛围的水上市场！不同于丹嫩沙多的游客化，安帕瓦是本地人也爱逛的周末市场。河道两岸的木屋里卖着各种小吃，坐在河边吃炭烤大虾、船粿条，看着小船来来往往，傍晚还能坐船去看萤火虫",
        time: "15:30-18:30",
        icon: "fa-water",
        img: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=600&q=80",
        tips: "只有周五六日开放，今天周六刚好！必吃：炭烤大虾（100-200泰铢/份）、船粿条（40泰铢）、芒果糯米饭、椰子冰淇淋。傍晚17:00后氛围最好，可以坐长尾船游河看萤火虫（约60泰铢/人）",
      },
      {
        name: "安帕瓦晚餐 → 返回曼谷",
        desc: "在水上市场吃完河鲜晚餐后，包车返回曼谷湄南河区酒店，车程约1.5小时。在车上回味今天从都市市集到铁道奇观再到水上人家的奇妙一天",
        time: "18:30-20:30",
        icon: "fa-car",
        img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80",
        tips: "回程走Rama 2高速直达湄南河区，不用穿越市中心。如果想看萤火虫可以等到19:00天黑后再出发，20:30-21:00到酒店",
      },
      {
        name: "回酒店收拾行李",
        desc: "最后的曼谷夜晚，回酒店整理行李、称重、分装伴手礼。凌晨01:25的红眼航班，23:30前从酒店出发去机场",
        time: "21:00-23:30",
        icon: "fa-suitcase",
        img: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=600&q=80",
        tips: "提前把要托运和随身的行李分好。泰国特产（榴莲干、冬阴功方便面、小老板海苔）可以在机场免税店买，不用塞行李箱",
      },
    ],
    meals: [
      {
        type: "午餐",
        name: "乍都乍市场小吃",
        icon: "fa-bowl-food",
        price: "~200泰铢/人",
      },
      {
        type: "下午茶",
        name: "美功铁道市场热带水果",
        icon: "fa-apple-whole",
        price: "~50泰铢/人",
      },
      {
        type: "晚餐",
        name: "安帕瓦水上市场河鲜",
        icon: "fa-shrimp",
        price: "~300泰铢/人",
      },
    ],
    transport: "BTS(酒店→Mo Chit) + 包车(乍都乍→美功→安帕瓦→酒店 约2000-2500泰铢)",
    budget: 1200,
  },
  {
    day: 9,
    date: "5月10日 · 周日",
    title: "满载而归 · 后会有期",
    theme: "红眼航班 · 曼谷→上海",
    weather: "晴 34°C",
    weatherIcon: "fa-sun",
    headerImg: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80",
    color: "#06b6d4",
    spots: [
      {
        name: "酒店 → 素万那普机场",
        desc: "从湄南河区酒店出发前往素万那普国际机场。深夜打车最方便，Grab约300-400泰铢，车程约40分钟。提前3小时到机场办理值机和退税",
        time: "23:30-00:30",
        icon: "fa-taxi",
        img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
        tips: "深夜Airport Rail Link已停运，打Grab最稳妥。湄南河区走高速到素万那普很顺畅。记得留200泰铢现金付机场行李车费。退税柜台在4楼出发层",
      },
      {
        name: "机场免税店 · 最后扫货",
        desc: "素万那普机场免税店规模超大！King Power免税店可以买到各种泰国特产：皇家蜂蜜、Naraya曼谷包、泰国手工皂、榴莲干、冬阴功方便面套装。还有各大国际品牌",
        time: "00:30-01:00",
        icon: "fa-cart-shopping",
        img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
        tips: "推荐买：Naraya曼谷包（送人神器100-300泰铢）、皇家蜂蜜Royal Project、Pocky百力滋泰国限定口味。免税店24小时营业，但凌晨部分柜台可能关闭",
      },
      {
        name: "红眼航班 · 飞回上海",
        desc: "凌晨01:25从曼谷素万那普机场起飞，飞行约5小时20分钟。在万米高空回忆这9天8晚的完美旅程——新加坡的花园城市、普吉岛的碧海蓝天、曼谷的金碧辉煌，还有四个人一起笑过哭过疯过的每一刻",
        time: "01:25-06:45",
        icon: "fa-plane-departure",
        img: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=600&q=80",
        tips: "记得带颈枕和眼罩！飞机上会提供餐食。落地上海浦东T2航站楼，早上6:45到，还能赶上周日的早午餐",
      },
      {
        name: "抵达上海 · 后会有期",
        desc: "清晨抵达上海浦东机场，带着满满的回忆、晒黑的皮肤、塞满伴手礼的行李箱，和闺蜜们依依不舍地告别。9天8晚，3个国家，无数个难忘瞬间——下次旅行见！",
        time: "06:45",
        icon: "fa-heart",
        img: "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?w=600&q=80",
      },
    ],
    meals: [
      {
        type: "机上餐食",
        name: "航班餐食",
        icon: "fa-plane",
        price: "含机票",
      },
    ],
    transport: "Grab(酒店→机场~300泰铢) + 飞机(曼谷→上海5h20m)",
    budget: 300,
  },
];

export const packingList: PackingCategory[] = [
  {
    category: "证件",
    items: ["护照（有效期6个月以上）", "身份证", "电子机票行程单x4程", "酒店预订确认单", "旅行保险单"],
    icon: "fa-passport",
  },
  {
    category: "电子设备",
    items: ["手机+充电器", "充电宝(20000mAh)", "相机+存储卡", "万能转换插头", "耳机"],
    icon: "fa-mobile-screen",
  },
  {
    category: "衣物",
    items: ["夏季衣物x5套", "泳衣x2", "防晒外套", "舒适凉鞋/拖鞋", "参观寺庙长裤长袖", "墨镜/帽子"],
    icon: "fa-shirt",
  },
  {
    category: "日用品",
    items: ["防晒霜SPF50+", "晒后修复", "驱蚊液", "肠胃药/感冒药", "纸巾/湿巾", "雨伞"],
    icon: "fa-pump-soap",
  },
  {
    category: "其他",
    items: ["泰铢+新币现金", "小背包", "防水袋", "晕船药", "零食"],
    icon: "fa-suitcase",
  },
];

export const budgetConfig: BudgetConfig = {
  transport: 3500,
  hotel: 4000,
  food: 2500,
  tickets: 1000,
  shopping: 2000,
  other: 1000,
};

export const budgetCategories: BudgetCategory[] = [
  {
    label: "交通",
    amount: 3500,
    color: "#667eea",
    icon: "fa-train",
  },
  {
    label: "住宿",
    amount: 4000,
    color: "#f5576c",
    icon: "fa-hotel",
  },
  {
    label: "餐饮",
    amount: 2500,
    color: "#4facfe",
    icon: "fa-utensils",
  },
  {
    label: "门票",
    amount: 1000,
    color: "#43e97b",
    icon: "fa-ticket",
  },
  {
    label: "购物",
    amount: 2000,
    color: "#fa709a",
    icon: "fa-bag-shopping",
  },
  {
    label: "其他",
    amount: 1000,
    color: "#ffd93d",
    icon: "fa-ellipsis",
  },
];

export const totalBudget: number = 14000;
