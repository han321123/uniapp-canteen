// utils/mockData.js

// 轮播图数据
export const banners = [
  { 
    id: 1, 
    image: '/static/banners/1.jpg', 
    title: '一口食堂开业大吉', 
    subtitle: '全场菜品88折优惠' 
  },
  { 
    id: 2, 
    image: '/static/banners/2.jpg', 
    title: '港式奶茶买一送一', 
    subtitle: '经典港味，香浓丝滑' 
  },
  { 
    id: 3, 
    image: '/static/banners/3.jpg', 
    title: '新品菠萝包上市', 
    subtitle: '每日新鲜烘焙' 
  }
]

// 今日推荐菜品
export const todaySpecial = {
  id: 20,
  name: '烧味三宝饭',
  price: 68,
  originalPrice: 78,   // 原价（可选）
  image: '/static/foods/15.jpg',
  description: '每日限量30份，皮脆肉嫩',
  tag: '店长推荐'
}

// 菜单分类
export const categories = [
  { id: 1, name: '烧味系列', icon: 'fire', count: 8 },
  { id: 2, name: '粥粉面饭', icon: 'bowl', count: 12 },
  { id: 3, name: '港式小炒', icon: 'wok', count: 10 },
  { id: 4, name: '茶餐厅小食', icon: 'snack', count: 15 },
  { id: 5, name: '饮品甜点', icon: 'drink', count: 8 },
  { id: 6, name: '套餐系列', icon: 'combo', count: 6 }
]

// 菜品数据
export const foodList = [
  // ========== 烧味系列 ==========
  { id: 1, name: '深井烧鹅', price: 88, 
    description: '采用传统深井烧鹅技法，选用优质黑棕鹅，经过腌制、吹皮、风干等工序，再以明火炭烤至皮脆肉嫩。鹅肉饱满多汁，油脂经高温逼出，入口油而不腻，配以秘制酸梅酱，酸甜解腻，更添风味层次。', 
    image: '/static/foods/1.jpg', categoryId: 1, tags: ['招牌', '推荐'], sales: 256, isHot: true },
  { id: 2, name: '蜜汁叉烧', price: 58, 
    description: '选用梅头肉，以玫瑰露、叉烧酱、南乳等腌制过夜，再用传统挂炉烤制，期间反复刷上蜜汁，使外层焦香微脆，内里肉质鲜嫩多汁，甜味渗透入肉，回味无穷。每一片都晶莹剔透，肥瘦相间。', 
    image: '/static/foods/2.jpg', categoryId: 1, tags: ['人气'], sales: 189, isHot: true },
  { id: 3, name: '明炉烧鸭', price: 52, 
    description: '选用肥瘦适中的填鸭，经多种香料腌制后，挂入明炉以荔枝木炭火慢烤，烤至鸭皮金黄酥脆，肉质鲜嫩，带有淡淡果木香。佐以甜面酱、黄瓜丝和薄饼，卷而食之，风味独特，满口留香。', 
    image: '/static/foods/3.jpg', categoryId: 1, tags: [], sales: 142 },

  // ========== 粥粉面饭 ==========
  { id: 4, name: '云吞面', price: 38, 
    description: '竹升面以鸭蛋和面，经师傅反复压打，口感弹牙爽滑。云吞馅料选用新鲜虾仁与猪肉，皮薄馅足，每一口都能吃到整只虾仁。汤底以大地鱼、虾子、猪骨熬制数小时，鲜美醇厚，一碗下肚，尽显地道港式风味。', 
    image: '/static/foods/4.jpg', categoryId: 2, tags: ['经典'], sales: 312, isHot: true },
  { id: 5, name: '干炒牛河', price: 48, 
    description: '选用新鲜河粉，搭配腌制好的牛肉片、绿豆芽、韭黄，猛火快炒，炒至河粉干身而不焦，酱油色均匀，镬气逼人。牛肉嫩滑多汁，河粉弹牙入味，豆芽爽脆，是考验师傅功力的经典之作。', 
    image: '/static/foods/5.jpg', categoryId: 2, tags: ['招牌'], sales: 278 },
  { id: 6, name: '及第粥', price: 35, 
    description: '粥底以猪骨、瑶柱、腐竹熬制数小时，米粒开花，绵滑细腻。配料包含新鲜猪肝、猪腰、猪粉肠等，处理干净后烫煮得恰到好处，口感爽脆。配以油条段和葱花，撒少许胡椒粉，传统风味十足，暖胃又暖心。', 
    image: '/static/foods/6.jpg', categoryId: 2, tags: [], sales: 165 },

  // ========== 港式小炒 ==========
  { id: 7, name: '星州炒米粉', price: 45, 
    description: '以新加坡风味咖喱粉调味，加入虾仁、叉烧丝、鸡蛋、豆芽、青椒等配料，与米粉一同猛火翻炒，使咖喱香气充分融入。米粉干爽金黄，配料丰富，微辣开胃，充满东南亚风情。', 
    image: '/static/foods/7.jpg', categoryId: 3, tags: [], sales: 198 },
  { id: 8, name: '椒盐鲜鱿', price: 68, 
    description: '新鲜鱿鱼切圈，裹上薄脆炸浆，炸至金黄酥脆。再与椒盐、蒜蓉、辣椒、洋葱粒同炒，使椒盐咸香微辣裹满鱿鱼，外酥内嫩，咬开汁水充盈，是绝佳的下酒小食。', 
    image: '/static/foods/8.jpg', categoryId: 3, tags: ['推荐'], sales: 124 },

  // ========== 茶餐厅小食 ==========
  { id: 9, name: '菠萝油', price: 18, 
    description: '新鲜出炉的菠萝包外皮酥脆，香甜可口，趁热横切开，夹入一片冰镇过的厚切咸牛油。牛油遇热微微融化，渗入面包组织，冷热交融，咸甜交织，酥皮掉渣，是港式茶餐厅的灵魂美食。', 
    image: '/static/foods/9.jpg', categoryId: 4, tags: ['新品'], sales: 356, isHot: true },
  { id: 10, name: '西多士', price: 25, 
    description: '两片白面包夹花生酱，浸入蛋液后煎至金黄，上桌时配一小块牛油和蜂蜜。切开后蛋香浓郁，花生酱流心，外脆内软，甜而不腻。也可淋上炼乳或糖浆，是下午茶的甜蜜享受。', 
    image: '/static/foods/10.jpg', categoryId: 4, tags: ['经典'], sales: 289 },
  { id: 11, name: '鱼蛋', price: 15, 
    description: '手打鲮鱼肉制成鱼蛋，口感弹牙爽口。以秘制咖喱酱慢火浸煮，使咖喱香味渗入鱼蛋内部，微辣香浓。每串鱼蛋都挂满咖喱汁，配上竹签，边走边吃，是香港街头小吃的经典回忆。', 
    image: '/static/foods/11.jpg', categoryId: 4, tags: [], sales: 412 },

  // ========== 饮品甜点 ==========
  { id: 12, name: '港式奶茶', price: 20, 
    description: '采用斯里兰卡多种茶叶拼配，以丝袜布袋反复冲泡，撞茶手法使茶味浓郁顺滑，去除涩味。再加入黑白淡奶，茶奶比例完美，入口丝滑，茶香悠长，余韵甘醇，被誉为“香港奶茶”。', 
    image: '/static/foods/12.jpg', categoryId: 5, tags: ['招牌'], sales: 521, isHot: true },
  { id: 13, name: '冻柠茶', price: 18, 
    description: '锡兰红茶为底，加入新鲜柠檬片和适量糖浆，冰镇后清爽解渴。柠檬的微酸与红茶的醇厚完美结合，每杯都配有多片柠檬，可自行按压释放果香，是夏日消暑必备饮品。', 
    image: '/static/foods/13.jpg', categoryId: 5, tags: [], sales: 478 },
  { id: 14, name: '杨枝甘露', price: 28, 
    description: '以新鲜芒果泥、西米、柚子肉、椰奶制作而成，甜而不腻，口感丰富。芒果的香甜，西米的Q弹，柚子的微酸和椰奶的浓郁，交织成一道经典的港式甜品，冰镇后风味更佳。', 
    image: '/static/foods/14.jpg', categoryId: 5, tags: ['推荐'], sales: 234 },

  // ========== 套餐系列 ==========
  { id: 15, name: '烧味双拼饭', price: 55, 
    description: '可选烧鹅拼叉烧，或烧鸭拼叉烧，双拼满足两种口味。烧味铺满白饭，淋上卤汁，配时蔬和例汤。烧鹅皮脆肉嫩，叉烧甜蜜软嫩，米饭吸饱肉汁，实惠饱腹，是工作餐首选。', 
    image: '/static/foods/15.jpg', categoryId: 6, tags: ['套餐'], sales: 189 },
  { id: 16, name: '常餐A', price: 42, 
    description: '经典港式常餐组合，火腿通粉汤底清甜，通粉软硬适中；炒蛋嫩滑，多士烤得香脆，配一杯香滑港奶。全天供应，随时感受地道港式早餐风情，简单却满足。', 
    image: '/static/foods/16.jpg', categoryId: 6, tags: ['套餐'], sales: 267 },

  // --- 烧味系列（扩充）---
  { id: 17, name: '豉油鸡', price: 56, 
    description: '选用清远走地鸡，以秘制豉油卤水慢浸至入味，皮爽肉滑，骨都有味。豉油汁咸鲜回甘，搭配白饭堪称一绝，是老派茶餐厅的怀旧味道。', 
    image: '/static/foods/17.jpg', categoryId: 1, tags: ['怀旧', '下饭'], sales: 132 },
  { id: 18, name: '乳猪拼盘', price: 128, 
    description: '每日限量供应，采用本地乳猪，经腌制、风干、炭烤三重工艺，皮脆如玻璃，肉嫩多汁。搭配梅子酱解腻，是宴客或节日必点的硬菜。', 
    image: '/static/foods/18.jpg', categoryId: 1, tags: ['招牌', '宴客'], sales: 89 },
  { id: 19, name: '白切鸡', price: 62, 
    description: '活鸡现杀，以冰水激熟，保持鸡肉原汁原味。皮薄 gelatinous，肉质细嫩，蘸姜葱蓉或沙姜酱油，清香不腻，体现粤菜“清鲜”精髓。', 
    image: '/static/foods/19.jpg', categoryId: 1, tags: ['清淡', '经典'], sales: 156 },
  { id: 20, name: '烧味三宝饭', price: 65, 
    description: '叉烧+烧鹅+烧鸭三重享受，三种肉质口感交织，油脂与瘦肉比例完美。配例汤和时蔬，满足感爆棚，是肉食爱好者的终极选择。', 
    image: '/static/foods/20.jpg', categoryId: 1, tags: ['人气', '丰盛'], sales: 210 },
  { id: 21, name: '卤水拼盘', price: 78, 
    description: '精选卤水鹅掌、豆腐、鸡蛋、猪耳，以八角、桂皮、草果等十多种香料慢卤6小时。入味而不咸，胶质丰富，佐酒或下饭皆宜。', 
    image: '/static/foods/21.jpg', categoryId: 1, tags: ['下酒', '怀旧'], sales: 118 },

  // --- 粥粉面饭（扩充）---
  { id: 22, name: '牛腩捞面', price: 42, 
    description: '柱侯牛腩炖足4小时，软烂入味，汁浓香醇。搭配爽滑竹升面，上桌前淋热汤激出香气。吃时拌匀，面条吸饱牛腩精华，镬气十足。', 
    image: '/static/foods/22.jpg', categoryId: 2, tags: ['招牌', '暖胃'], sales: 298 },
  { id: 23, name: '鲜虾肠粉', price: 28, 
    description: '现磨米浆蒸制，薄如蝉翼，包裹整只鲜虾。淋上秘制甜酱油，撒 sesame seeds。口感滑嫩弹牙，虾肉清甜，是早午茶必点点心。', 
    image: '/static/foods/23.jpg', categoryId: 2, tags: ['早餐', '清淡'], sales: 342 },
  { id: 24, name: '窝蛋牛肉饭', price: 46, 
    description: '嫩滑牛肉片铺在热腾腾白饭上，中央打一颗生鸡蛋。上桌后余温将蛋液半熟化，拌匀后米饭裹满蛋香与肉汁，简单却极致满足。', 
    image: '/static/foods/24.jpg', categoryId: 2, tags: ['人气', '快手'], sales: 276 },
  { id: 25, name: '艇仔粥', price: 32, 
    description: '源自珠江渔船的传统粥品，以大地鱼、猪骨熬底，加入鱿鱼丝、花生、油条、蛋丝、猪肚等十数种配料。粥底绵密，料足味鲜，暖胃又饱腹。', 
    image: '/static/foods/25.jpg', categoryId: 2, tags: ['经典', '暖胃'], sales: 187 },
  { id: 26, name: 'XO酱炒萝卜糕', price: 36, 
    description: '自家制萝卜糕切厚片，以猛火煎至两面金黄，再加入 XO 酱、腊肠粒、虾米快炒。外脆内软，萝卜清甜与 XO 酱的咸鲜海味完美融合。', 
    image: '/static/foods/26.jpg', categoryId: 2, tags: ['香口', '下酒'], sales: 165 },
  { id: 27, name: '五香肉丁公仔面', price: 34, 
    description: '怀旧经典！用五香粉腌制猪肉丁，配洋葱、青椒快炒，浇在煮得刚好的公仔面上。汤底微甜带五香味，面条弹牙，是80后集体回忆。', 
    image: '/static/foods/27.jpg', categoryId: 2, tags: ['怀旧', '平价'], sales: 221 },

  // --- 港式小炒（扩充）---
  { id: 28, name: '干煸四季豆', price: 42, 
    description: '四季豆去筋切段，以中火干煸至表皮微皱起虎皮，再与蒜末、肉碎同炒。口感干香入味，略带焦香，是考验师傅火候的功夫小炒。', 
    image: '/static/foods/28.jpg', categoryId: 3, tags: ['家常', '下饭'], sales: 178 },
  { id: 29, name: '避风塘炒蟹', price: 158, 
    description: '肉蟹斩件炸香，与蒜茸、豆豉、辣椒、面包糠猛火爆炒。蒜香浓郁，面包糠酥脆，蟹肉鲜甜，辣而不燥，是港式海鲜小炒代表作。', 
    image: '/static/foods/29.jpg', categoryId: 3, tags: ['招牌', '宴客', '辣'], sales: 92 },
  { id: 30, name: '咕噜肉', price: 52, 
    description: '猪里脊切块，先炸后裹酸甜咕噜汁（番茄酱+白醋+糖）。外层脆浆包裹嫩肉，酸甜开胃，配彩椒菠萝，色香味俱全，深受外国游客喜爱。', 
    image: '/static/foods/30.jpg', categoryId: 3, tags: ['经典', '酸甜'], sales: 203 },
  { id: 31, name: '咸蛋黄焗鸡翼', price: 58, 
    description: '鸡中翼腌制后炸至金黄，与咸蛋黄碎同炒至起沙。咸蛋黄沙沙包裹鸡翼，咸香浓郁，肉质多汁，是近年茶餐厅人气新派小炒。', 
    image: '/static/foods/31.jpg', categoryId: 3, tags: ['新派', '下酒'], sales: 187 },
  { id: 32, name: '银芽炒肉丝', price: 38, 
    description: '绿豆芽掐去头尾，配猪里脊丝、韭黄快炒。全程猛火，保持豆芽爽脆，肉丝滑嫩。调味仅用盐、胡椒、少许酱油，突出食材本味，清爽不腻。', 
    image: '/static/foods/32.jpg', categoryId: 3, tags: ['清淡', '快手'], sales: 142 },

  // --- 茶餐厅小食（扩充）---
  { id: 33, name: '奶油猪仔包', price: 12, 
    description: '松软小餐包纵向切开，夹入厚厚一块咸奶油（Margarine），烘烤至奶油融化渗透面包。外皮微脆，内里奶香浓郁，是学生放学最爱的平价小食。', 
    image: '/static/foods/33.jpg', categoryId: 4, tags: ['怀旧', '平价'], sales: 398 },
  { id: 34, name: '炸两', price: 16, 
    description: '肠粉包裹油条，切段后淋酱油。肠粉滑嫩，油条吸饱酱汁后依然保持脆度，口感层次丰富。配粥或奶茶，是地道港式早餐组合。', 
    image: '/static/foods/34.jpg', categoryId: 4, tags: ['早餐', '经典'], sales: 287 },
  { id: 35, name: '瑞士鸡翼', price: 32, 
    description: '鸡中翼以酱油、冰糖、香料焖煮至入味，最后收汁至浓稠光亮。名字源于“sweet”音译，实为粤式甜酱油风味，甜咸适中，老少皆宜。', 
    image: '/static/foods/35.jpg', categoryId: 4, tags: ['怀旧', '下饭'], sales: 256 },
  { id: 36, name: '煎酿三宝', price: 28, 
    description: '茄子、青椒、豆腐泡酿入鲮鱼滑，煎至金黄。鲮鱼滑鲜甜弹牙，蔬菜吸收鱼香，蘸喼汁（辣酱油）食用，风味独特，是香港街头经典。', 
    image: '/static/foods/36.jpg', categoryId: 4, tags: ['街头', '特色'], sales: 198 },
  { id: 37, name: '咖喱牛杂', price: 36, 
    description: '牛肚、牛肺、萝卜以秘制咖喱慢炖2小时，咖喱浓稠微辣，牛杂软而不烂，萝卜吸饱汤汁。配乌冬或捞面，是冬日暖心之选。', 
    image: '/static/foods/37.jpg', categoryId: 4, tags: ['辣', '暖胃'], sales: 234 },
  { id: 38, name: '格子饼', price: 15, 
    description: '又称“鸡蛋仔”，面糊注入特制蜂巢模具烘烤，外脆内软，蛋香扑鼻。可夹冰淇淋、水果或炼乳，是港式怀旧甜小食代表。', 
    image: '/static/foods/38.jpg', categoryId: 4, tags: ['怀旧', '甜食'], sales: 312 },
  { id: 39, name: '山渣饼', price: 10, 
    description: '山楂果泥压成薄饼，酸甜开胃，助消化。独立包装，是茶餐厅饭后常备小食，亦是老一辈的养生零食。', 
    image: '/static/foods/39.jpg', categoryId: 4, tags: ['怀旧', '素食'], sales: 176 },

  // --- 饮品甜点（扩充）---
  { id: 40, name: '鸳鸯', price: 22, 
    description: '港式独创！一半咖啡一半奶茶，混合后既有咖啡的醇苦，又有奶茶的丝滑。可热可冻，是茶餐厅灵魂饮品，提神又满足。', 
    image: '/static/foods/40.jpg', categoryId: 5, tags: ['招牌', '经典'], sales: 456 },
  { id: 41, name: '砵仔糕', price: 12, 
    description: '传统街头小食，以粘米粉、椰浆、红豆蒸制于小砵中。冷却后凝固，口感Q弹软糯，椰香红豆味甜而不腻，怀旧感满分。', 
    image: '/static/foods/41.jpg', categoryId: 5, tags: ['怀旧', '素食'], sales: 289 },
  { id: 42, name: '红豆冰', price: 18, 
    description: '自制红豆沙铺底，加入碎冰，淋炼乳。红豆沙绵密香甜，碎冰清凉，炼乳奶香浓郁。搅拌后饮用，是夏日消暑必备。', 
    image: '/static/foods/42.jpg', categoryId: 5, tags: ['冰品', '怀旧'], sales: 321 },
  { id: 43, name: '杏仁茶', price: 16, 
    description: '南杏北杏按比例研磨，加米浆慢煮成糊。色泽乳白，杏香清雅，口感顺滑。热饮润肺止咳，是秋冬养生甜品。', 
    image: '/static/foods/43.jpg', categoryId: 5, tags: ['养生', '热饮'], sales: 198 },

  // --- 套餐系列（扩充）---
  { id: 44, name: '常餐B', price: 45, 
    description: '包含每日例汤（罗宋汤或忌廉汤），招牌干炒牛河镬气十足，以及任意净饮（奶茶/咖啡/柠茶）。罗宋汤酸甜开胃，忌廉汤奶香浓郁，干炒牛河牛肉嫩滑，河粉干爽，搭配冻饮，满足感爆棚。', 
    image: '/static/foods/44.jpg', categoryId: 6, tags: ['套餐', '经典'], sales: 245 },
  { id: 45, name: '学生套餐', price: 38, 
    description: '专为学生群体设计的超值套餐，任选一款主食（可选米饭、面条或通粉），搭配香脆薯条和任意冻饮（可乐/柠乐/奶茶），凭学生证即享特价优惠。分量十足，价格亲民，是学生党的性价比之选。', 
    image: '/static/foods/45.jpg', categoryId: 6, tags: ['套餐', '优惠'], sales: 312 }
]

// 门店信息
export const storeInfo = {
  name: '一口食堂（旺角店）',
  slogan:'港式美味 用心烹饪',
  address: '香港九龙旺角弥敦道688号',
  phone: '852-1234-5678',
  hours: '07:00 - 22:00',
  description: '正宗港式茶餐厅，传承香港饮食文化。我们坚持使用新鲜食材，为顾客提供地道的港式美食体验。'
}

// 用户反馈数据
export const userReviews = [
  { 
    id: 1, 
    name: '陈先生', 
    rating: 5, 
    comment: '烧鹅皮脆肉嫩，非常正宗！', 
    time: '2小时前' 
  },
  { 
    id: 2, 
    name: '李小姐', 
    rating: 4, 
    comment: '奶茶很香滑，还会再来', 
    time: '1天前' 
  },
  { 
    id: 3, 
    name: '张太太', 
    rating: 5, 
    comment: '小朋友很喜欢这里的菠萝油', 
    time: '3天前' 
  }
]
