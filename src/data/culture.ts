// ============================================================
// Culture Preparation Data
// Extracted from minified bundle - Singapore & Thailand travel
// ============================================================

export type CultureType = 'movie' | 'book' | 'music';
export type Country = 'sg' | 'th';

export interface CultureItem {
  type: CultureType;
  title: string;
  subtitle: string;
  desc: string;
  img: string;
  tag?: string;
  country: Country;
}

export interface TypeConfig {
  icon: string;
  label: string;
  color: string;
  gradient: string;
}

export interface TabDefinition {
  type: CultureType;
  label: string;
  icon: string;
}

export interface MapDayData {
  day: number;
  label: string;
  title: string;
  color: string;
  img: string;
  spots: number;
  desc: string;
}

// Singapore culture items (24 items: movies, books, music)
export const Gd: CultureItem[] = [
  {
    type: 'movie',
    title: '摘金奇缘',
    subtitle: 'Crazy Rich Asians · 2018',
    desc: '大量新加坡实景拍摄！滨海湾金沙、牛车水、莱佛士酒店都有出镜，感受华人上流社会的文化碰撞',
    img: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80',
    tag: '必看',
    country: 'sg',
  },
  {
    type: 'movie',
    title: '爸妈不在家',
    subtitle: 'Ilo Ilo · 2013 · 金马奖最佳影片',
    desc: '新加坡普通中产家庭和菲佣的故事，真实展现90年代新加坡平民生活面貌',
    img: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80',
    tag: '金马奖',
    country: 'sg',
  },
  {
    type: 'movie',
    title: '小娘惹',
    subtitle: 'The Little Nyonya · 电视剧',
    desc: '新加坡经典剧集，讲述娘惹文化的兴衰。去牛车水/珍珠坊时能感受到这种独特的土生华人文化',
    img: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&q=80',
    country: 'sg',
  },
  {
    type: 'movie',
    title: '12楼',
    subtitle: '12 Storeys · 1997 · 邱金海',
    desc: '新加坡独立电影大师邱金海代表作，通过一栋组屋三户人家的故事展现底层生活的孤独与压抑',
    img: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&q=80',
    country: 'sg',
  },
  {
    type: 'movie',
    title: '热带雨',
    subtitle: 'Wet Season · 2019',
    desc: '陈哲艺导演，讲述一位来自马来西亚的中文老师在新加坡的孤独生活，细腻动人的东南亚华人故事',
    img: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=400&q=80',
    tag: '金马奖',
    country: 'sg',
  },
  {
    type: 'movie',
    title: '爸爸的信',
    subtitle: 'Letters from Father · 2019',
    desc: '新加坡本土温情短片，讲述父女之间跨越时空的书信对话，感受新加坡华人家庭的亲情羁绊',
    img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&q=80',
    country: 'sg',
  },
  {
    type: 'movie',
    title: '我们的故事',
    subtitle: 'Our Singapore · 纪录片',
    desc: 'CNA出品纪录片，从独立到繁荣的真实影像记录，逛市政区和国家美术馆前看完会更有感触',
    img: 'https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?w=400&q=80',
    country: 'sg',
  },
  {
    type: 'movie',
    title: '永恒',
    subtitle: 'Forever · 2023 · 陈哲艺',
    desc: '陈哲艺最新作品，入围威尼斯电影节。多线叙事展现新加坡当代社会的多元面貌',
    img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80',
    tag: '威尼斯',
    country: 'sg',
  },
  {
    type: 'book',
    title: '新加坡故事',
    subtitle: '李光耀回忆录',
    desc: '了解新加坡从渔村到世界级城市的历程，逛市政区、莱佛士酒店时会更有历史代入感',
    img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80',
    tag: '经典',
    country: 'sg',
  },
  {
    type: 'book',
    title: '小贩文化',
    subtitle: 'Hawker Culture · UNESCO',
    desc: '新加坡小贩文化已列入UNESCO非遗名录，了解hawker center背后的故事，吃鸡饭时更有感觉',
    img: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&q=80',
    country: 'sg',
  },
  {
    type: 'book',
    title: '鱼尾狮的诞生',
    subtitle: 'The Merlion · 文化符号',
    desc: '解读新加坡国家象征鱼尾狮的设计故事和文化意义，去鱼尾狮公园前读完会有全新视角',
    img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&q=80',
    country: 'sg',
  },
  {
    type: 'book',
    title: '甘榜精神',
    subtitle: 'Kampong Glam · 社区文化',
    desc: '讲述新加坡甘榜格南(哈芝巷所在区域)的马来文化历史，了解苏丹回教堂和阿拉伯街的故事',
    img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80',
    country: 'sg',
  },
  {
    type: 'book',
    title: '花园城市的秘密',
    subtitle: 'City in a Garden',
    desc: '新加坡如何从"花园城市"进化为"花园中的城市"，去植物园和滨海湾花园前的必读科普',
    img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80',
    tag: '绿色',
    country: 'sg',
  },
  {
    type: 'book',
    title: '娘惹菜谱',
    subtitle: 'The Peranakan Kitchen',
    desc: '土生华人的融合美食文化，叻沙、黑果鸡、九层糕…看完就知道在牛车水该点什么',
    img: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400&q=80',
    tag: '美食',
    country: 'sg',
  },
  {
    type: 'music',
    title: '林俊杰 JJ Lin',
    subtitle: '新加坡国宝级歌手',
    desc: '《江南》《她说》《修炼爱情》…听着JJ的歌逛狮城，是最有氛围感的BGM',
    img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80',
    tag: '新加坡之光',
    country: 'sg',
  },
  {
    type: 'music',
    title: '孙燕姿',
    subtitle: '新加坡天后',
    desc: '《天黑黑》《遇见》《绿光》…来自新加坡的华语天后，旅途中必听的温暖歌声',
    img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80',
    country: 'sg',
  },
  {
    type: 'music',
    title: 'Gentle Bones',
    subtitle: '新加坡独立音乐 · 英文',
    desc: '新加坡最火的英文独立音乐人，《Save Me》《Until We Die》清新温柔，适合在滨海湾散步时听',
    img: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&q=80',
    tag: '英文indie',
    country: 'sg',
  },
  {
    type: 'music',
    title: 'Jasmine Sokko',
    subtitle: '电子音乐 · 英文',
    desc: '新加坡电子音乐才女，《HURT》登上全球榜单。戴面具表演的神秘风格，逛夜景时的完美BGM',
    img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80',
    country: 'sg',
  },
  {
    type: 'music',
    title: 'Charlie Lim',
    subtitle: '独立民谣 · 英文',
    desc: '新加坡最具才华的创作歌手，《Light Breaks In》《CHECK-HOOK》充满诗意的都市民谣',
    img: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&q=80',
    country: 'sg',
  },
  {
    type: 'music',
    title: 'Sezairi',
    subtitle: 'R&B/Soul · 英文',
    desc: '新加坡R&B王子，《It\'s You》在TikTok爆火超10亿播放！丝绒般的嗓音适合夜晚的滨海湾',
    img: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&q=80',
    tag: 'TikTok爆款',
    country: 'sg',
  },
  {
    type: 'music',
    title: 'Linying',
    subtitle: '梦幻流行 · 英文',
    desc: '新加坡独立女声，《Sticky Leaves》《Paris 12》空灵梦幻的嗓音，被BBC Radio推荐的宝藏歌手',
    img: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&q=80',
    country: 'sg',
  },
  {
    type: 'music',
    title: 'Disco Hue',
    subtitle: '复古迪斯科 · 英文',
    desc: '新加坡复古Disco乐队！《Desperado》《All I Wanna Do》充满80s复古氛围，逛克拉码头时的完美BGM',
    img: 'https://images.unsplash.com/photo-1504509546545-e000b4a62425?w=400&q=80',
    tag: '复古',
    country: 'sg',
  },
  {
    type: 'music',
    title: '蔡健雅 Tanya',
    subtitle: '新加坡创作才女',
    desc: '三座金曲奖最佳女歌手！《红色高跟鞋》《别找我麻烦》，新加坡出生的华语音乐才女',
    img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80',
    tag: '金曲奖x3',
    country: 'sg',
  },
  {
    type: 'music',
    title: 'Singapore Chill Mix',
    subtitle: 'Spotify热带氛围歌单',
    desc: '搜索"Singapore Chill Vibes"，融合热带house和lo-fi beats，坐地铁穿梭时的完美陪伴',
    img: 'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=400&q=80',
    tag: '氛围感',
    country: 'sg',
  },
];

// Thailand culture items (26 items: movies, books, music)
export const Xd: CultureItem[] = [
  {
    type: 'movie',
    title: '天才枪手',
    subtitle: 'Bad Genius · 2017',
    desc: '泰国票房冠军！节奏紧张刺激，同时能了解泰国社会的教育焦虑与阶层差异',
    img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80',
    tag: '必看',
    country: 'th',
  },
  {
    type: 'movie',
    title: '初恋这件小事',
    subtitle: 'A Little Thing Called Love · 2010',
    desc: '泰国经典青春片，甜到心坎里。感受泰国校园文化和纯真爱情',
    img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80',
    tag: '经典',
    country: 'th',
  },
  {
    type: 'movie',
    title: '转学来的女生',
    subtitle: 'Girl From Nowhere · Netflix',
    desc: 'Netflix泰剧，暗黑风格但很有深度，每集一个学校一个故事，揭露人性黑暗面',
    img: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&q=80',
    country: 'th',
  },
  {
    type: 'movie',
    title: '暹罗之恋',
    subtitle: 'Love of Siam · 2007',
    desc: '泰国青春爱情经典，曼谷暹罗广场实景拍摄。去Siam商圈时可以重温电影中的场景',
    img: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&q=80',
    country: 'th',
  },
  {
    type: 'movie',
    title: '泰囧',
    subtitle: 'Lost in Thailand · 2012',
    desc: '徐峥导演的爆笑喜剧，大量泰国实景。虽然是中国电影，但能让你对泰国文化有趣味性的了解',
    img: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=400&q=80',
    tag: '爆笑',
    country: 'th',
  },
  {
    type: 'movie',
    title: '安乐窝',
    subtitle: 'Happy Old Year · 2019',
    desc: '泰国文艺片，讲述一个女生整理房间断舍离的故事，温柔治愈，展现曼谷年轻人的生活方式',
    img: 'https://images.unsplash.com/photo-1460881680858-30d872d5b530?w=400&q=80',
    country: 'th',
  },
  {
    type: 'movie',
    title: '模犯生',
    subtitle: 'Bad Genius 2 · 2024',
    desc: '天才枪手续作！原班人马回归，更大的舞台更刺激的作弊计划，出发前看完正好续上',
    img: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&q=80',
    tag: '新片',
    country: 'th',
  },
  {
    type: 'movie',
    title: '把哥哥退货可以吗',
    subtitle: 'Brother of the Year · 2018',
    desc: '泰国爆笑家庭喜剧，讲述兄妹日常相爱相杀的故事，笑中带泪的泰式幽默',
    img: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&q=80',
    country: 'th',
  },
  {
    type: 'movie',
    title: '海滩',
    subtitle: 'The Beach · 2000 · 莱昂纳多',
    desc: '小李子主演！在泰国皮皮岛实景拍摄，讲述背包客在秘密海滩的冒险。去普吉岛前必看的海岛电影',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80',
    tag: '海岛必看',
    country: 'th',
  },
  {
    type: 'book',
    title: '泰国：微笑之国',
    subtitle: '旅行文学',
    desc: '深入了解泰国的佛教文化、王室传统和平民生活，让你在大皇宫和寺庙前不只是拍照',
    img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80',
    country: 'th',
  },
  {
    type: 'book',
    title: '曼谷小吃指南',
    subtitle: 'Bangkok Street Food',
    desc: '深度介绍曼谷街头美食文化，从路边摊到夜市，了解泰国人为什么把"吃"当作一种生活艺术',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
    tag: '吃货必读',
    country: 'th',
  },
  {
    type: 'book',
    title: '安达曼海的呼唤',
    subtitle: '普吉岛与海岛文化',
    desc: '了解安达曼海域的自然生态和渔村文化，让你在普吉岛浮潜时更懂这片海',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80',
    country: 'th',
  },
  {
    type: 'book',
    title: '泰国味道',
    subtitle: 'Thai Food · David Thompson',
    desc: '米其林大厨David Thompson写的泰餐百科全书，冬阴功、绿咖喱、芒果糯米饭的前世今生',
    img: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400&q=80',
    tag: '米其林',
    country: 'th',
  },
  {
    type: 'book',
    title: '曼谷设计指南',
    subtitle: 'Bangkok Design Guide',
    desc: '曼谷的创意设计场所合集，从TCDC到暹罗百丽宫，了解泰国设计力量的崛起',
    img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80',
    country: 'th',
  },
  {
    type: 'book',
    title: '佛国漫步',
    subtitle: '泰国寺庙文化',
    desc: '泰国有4万多座寺庙！了解泰国佛教文化和寺庙礼仪，让你的寺庙之行更有敬畏感',
    img: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=400&q=80',
    tag: '文化',
    country: 'th',
  },
  {
    type: 'music',
    title: 'Lisa (BLACKPINK)',
    subtitle: '泰国骄傲 · 全球巨星',
    desc: 'Lisa来自泰国武里南府！在曼谷会有特别的亲切感，《LALISA》《ROCKSTAR》《MONEY》是旅途最佳BGM',
    img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80',
    tag: '泰国之光',
    country: 'th',
  },
  {
    type: 'music',
    title: 'Phum Viphurit',
    subtitle: '泰国独立音乐 · 英文',
    desc: '泰国最火的英文独立歌手！《Lover Boy》《Long Gone》充满阳光的indie pop，海岛度假必听',
    img: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&q=80',
    tag: '海岛必听',
    country: 'th',
  },
  {
    type: 'music',
    title: 'Bodyslam',
    subtitle: '泰国国民摇滚 · 泰文',
    desc: '泰国最受欢迎的摇滚乐队，《คิดถึง》《ยาพิษ》即使听不懂泰文也会被旋律打动',
    img: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=400&q=80',
    country: 'th',
  },
  {
    type: 'music',
    title: 'Stamp Apiwat',
    subtitle: '泰国创作歌手 · 泰文/英文',
    desc: '泰国音乐才子，风格横跨民谣到电子，《ขอ》温柔得让人融化，适合在海边日落时听',
    img: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=400&q=80',
    country: 'th',
  },
  {
    type: 'music',
    title: 'Milli',
    subtitle: '泰国说唱新星 · 泰文/英文',
    desc: '在Coachella吃芒果糯米饭的泰国女rapper！《Mirror Mirror》《SAD》充满态度的Z世代声音',
    img: 'https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=400&q=80',
    tag: 'Z世代',
    country: 'th',
  },
  {
    type: 'music',
    title: 'Scrubb',
    subtitle: '泰国独立流行 · 泰文',
    desc: '泰国最经典的独立乐队之一，《เพียงแค่ใจเรารักกัน》旋律治愈，是无数泰剧的OST常客',
    img: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&q=80',
    tag: '泰剧OST',
    country: 'th',
  },
  {
    type: 'music',
    title: 'Palmy',
    subtitle: '泰国流行天后 · 泰文',
    desc: '泰国流行乐坛常青树，《คิดถึง》甜美动人，是泰国人心中的国民女歌手',
    img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80',
    country: 'th',
  },
  {
    type: 'music',
    title: 'Tontrakul',
    subtitle: '泰国新生代 · 英文/泰文',
    desc: '泰国Z世代R&B新星，《Falling》《Moonlight》融合英泰双语的丝滑R&B，夜晚曼谷的完美BGM',
    img: 'https://images.unsplash.com/photo-1504509546545-e000b4a62425?w=400&q=80',
    tag: '新生代',
    country: 'th',
  },
  {
    type: 'music',
    title: 'One Night in Bangkok',
    subtitle: 'Murray Head · 1984 · 英文经典',
    desc: '80年代英文经典神曲！"One night in Bangkok makes a hard man humble"，去曼谷前必听的氛围歌',
    img: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&q=80',
    tag: '经典',
    country: 'th',
  },
  {
    type: 'music',
    title: '泰国传统音乐',
    subtitle: 'Spotify "Thai Classical"',
    desc: '在大皇宫和寺庙时当BGM，木琴(ranat)和竹笛的空灵旋律让你瞬间沉浸在暹罗古国的氛围中',
    img: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&q=80',
    country: 'th',
  },
  {
    type: 'music',
    title: 'Thai Beach Vibes',
    subtitle: 'Spotify海岛歌单',
    desc: '搜索"Thai Beach Vibes"，reggae+tropical house+chill beats，在普吉岛沙滩上躺着听的完美歌单',
    img: 'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=400&q=80',
    tag: '海岛必备',
    country: 'th',
  },
];

// Combined culture items (all 50 items)
export const Ol: CultureItem[] = [...Gd, ...Xd];

// Featured items - items with a tag field (28 items)
export const Qt: CultureItem[] = Ol.filter((item) => item.tag);

// Type configuration: icon, label, color, gradient per culture type
export const qu: Record<CultureType, TypeConfig> = {
  movie: {
    icon: 'fa-film',
    label: '影视',
    color: '#f5576c',
    gradient: 'from-rose-500 to-pink-600',
  },
  book: {
    icon: 'fa-book',
    label: '书籍',
    color: '#667eea',
    gradient: 'from-indigo-500 to-purple-600',
  },
  music: {
    icon: 'fa-music',
    label: '音乐',
    color: '#43e97b',
    gradient: 'from-emerald-400 to-teal-500',
  },
};

// Tab definitions for culture type navigation
export const Zd: TabDefinition[] = [
  { type: 'movie', label: '🎬 影视推荐', icon: 'fa-film' },
  { type: 'book', label: '📚 书籍推荐', icon: 'fa-book' },
  { type: 'music', label: '🎵 音乐推荐', icon: 'fa-music' },
];

// Singapore map data (4 items: 3 days + summary)
export const Rl: MapDayData[] = [
  {
    day: 1,
    label: 'DAY 1 · 5.2',
    title: '初见狮城',
    color: '#667eea',
    img: '/map-day1.png',
    spots: 4,
    desc: '星耀樟宜 → 酒店放行李 → 滨海湾公园灯光秀 → 克拉码头海鲜晚餐',
  },
  {
    day: 2,
    label: 'DAY 2 · 5.3',
    title: '暴走狮城',
    color: '#f5576c',
    img: '/map-day2.png',
    spots: 12,
    desc: '珍珠坊→牛车水→旧禧街警察局→亚洲文明博物馆→鱼尾狮公园→国家美术馆→圣安德烈教堂→赞美广场→福康宁公园→莱佛士酒店→哈芝巷→夜间野生动物园',
  },
  {
    day: 3,
    label: 'DAY 3 · 5.4',
    title: '三种文化·飞向海岛',
    color: '#4facfe',
    img: '/map-day3.png',
    spots: 3,
    desc: '新加坡植物园(UNESCO) → 乌节路购物 → 小印度 → 飞往普吉岛',
  },
  {
    day: 0,
    label: '🏆 全景总结',
    title: '新加坡全景解锁',
    color: '#10b981',
    img: '/map-all.png',
    spots: 19,
    desc: '3天19个景点全部解锁！涵盖现代都市、华人文化、印度风情、殖民历史、自然生态、夜间探险六大主题',
  },
];
