// pages/wenjustore/wenjustore.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    xingyiliwu: "",
    goods: {
      beikao:
       [    
        {
        title: "24考研英语2024考研真相",
        desc: "六本全套（赠20张答题卡）：历年真题解析篇1-4+真题配套词汇+真题翻译手译】、考研词汇闪过2024单词等可选 ",
        num: "234",
        price: "229.8",
        thumb: "https://img11.360buyimg.com/n1/jfs/t1/89337/17/33023/197076/63f95676F2e6be8f3/ff28f65b2faf9c3e.jpg",
      },
      {
        title: "2024李永乐考研数学复习全书",
        desc: "024李永乐武忠祥考研数学复习全书基础篇+基础过关660题+历年真题·基础篇 ",
        num: "8975",
        price: "138.10",
        thumb: "https://img14.360buyimg.com/n1/jfs/t1/78601/33/21692/158316/6304438fE117b41f0/ec490f38fe079b9e.jpg",
      },
      {
        title: "徐涛2024考研政治核心考案",
        desc: "黄皮书系列一 云图 （可搭配优题库习题版）张宇李永乐汤家凤考研数学",
        num: "2834",
        price: "53.8",
        thumb: "https://img12.360buyimg.com/n1/jfs/t1/215237/28/27816/153058/6438ab90F95eed516/867dac44daf967ee.jpg",
      },
      {
        title: "星火英语四级真题试卷",
        desc: "含23.3月试卷 四级全真试题+标准模拟（4级）历年真题复习cet4级乱序版词汇书单本阅读理解听力专项训练 ",
        num: "927",
        price: "41.8",
        thumb: "https://img11.360buyimg.com/n1/jfs/t1/175035/12/34892/175589/641ba8d7F422ca819/fe30cecad65768ab.jpg",
      },
      {
        title: "华研外语4级历年真题",
        desc: "大学CET4级模拟试卷预测词汇单词阅读理解听力翻译写作文专项训练书全套资料2022.12 四级考试指南",
        num: "465",
        price: "29.8",
        thumb: "https://img10.360buyimg.com/n1/jfs/t1/49751/17/22561/99444/63b2b212Fcabebbb6/ce121f82cf06e208.jpg",
      },
      {
        title: "大学四级俞敏洪英语词汇书",
        desc: "新东方 新大纲大学四级词汇词根+联想记忆法 乱序便携版 大学四级俞敏洪英语词汇书可搭四级真题试卷 绿宝书",
        num: "208",
        price: "24.0",
        thumb: "https://img11.360buyimg.com/n1/jfs/t1/198221/18/2925/110129/6114e314E7dbfbc26/394ba102de5ab983.jpg",
      },
      {
        title: "张雪峰考研通关攻略",
        desc: "粉丝3000万+，教育名嘴张雪峰考研院校和专业选择指南！500+院校特邀主讲师，1000+学校数据收集，你想知道的考研问题都在这里！",
        num: "682",
        price: "38.0",
        thumb: "https://img10.360buyimg.com/n1/jfs/t1/160769/7/17116/197311/606d78c0E6c6f4fee/84de1004b0dbd1dd.jpg",
      },
      {
        title: " 2024版考研词汇闪过",
        desc: "【单本包邮】考研英语 2024版考研词汇闪过 英语一二适用可搭语法长难句历年真题试卷红宝书考研真相张剑李永乐张宇肖秀荣汤家凤徐涛",
        num: "58",
        price: "69.80",
        thumb: "https://img13.360buyimg.com/n1/jfs/t1/6540/27/28077/120318/63b79d48Fb2854699/fe1d0e8f853f1f48.jpg",
      },
       ],
       wenju:[
         {
          title: "小胶带 12mm*30Y(27.3m）",
          desc: "得力(deli)易撕透明高粘文具胶带/小胶带 12mm*30Y(27.3m） 单卷装 创意枕式包装 30009",
          num: "378",
          price: "1.80",
          thumb: "https://img12.360buyimg.com/n1/s450x450_jfs/t1/96279/2/29920/220258/62ea392aE2d5758f3/dfa1b5852580c3f5.jpg",
         },
         {
          title: "金属曲别针",
          desc: "得力(deli)29mm镀镍回形针 3#金属曲别针 200枚/筒 办公用品 0037",
          num: "78",
          price: "4.00",
          thumb: "https://img13.360buyimg.com/n1/s450x450_jfs/t1/58721/21/18481/66335/63d760b0F2ddc3bd9/a4f2c09f79ba0452.jpg",
         },
         {
          title: "齐心(Comix)10个装文件夹",
          desc: "齐心(Comix)10个装文件夹 插页袋/资料册插页文件夹活页文件夹 办公用品EA61",
          num: "308",
          price: "92.0",
          thumb: "https://img12.360buyimg.com/n1/s450x450_jfs/t1/26878/29/19759/70624/63451a05Ea179d63b/e95dd89ee80dda02.jpg",
         },
         {
          title: "得力(deli)20cm办公通用直尺",
          desc: "得力(deli)20cm办公通用直尺 测量绘图尺子 办公用品 6220",
          num: "3278",
          price: "1.20",
          thumb: "https://img13.360buyimg.com/n1/s450x450_jfs/t1/185347/16/26109/40478/630887b5Ee59b98fe/d779af1f50242cbc.jpg",
         },
         {
          title: "直液笔签字笔中性笔",
          desc: "晨光(M&G)文具直液笔签字笔中性笔 0.5mm黑色走珠笔 速干直液式水笔Z1 办公用品12支 ARPM2001",
          num: "378",
          price: "15.80",
          thumb: "https://img12.360buyimg.com/n1/s450x450_jfs/t1/121486/13/27964/197120/6268af47E51bdc855/0dfedf9bc2ce2856.jpg",
         },
         {
          title: "可插笔绑带皮面本",
          desc: "可插笔绑带皮面本",
          num: "2985",
          price: "18.90",
          thumb: "https://img11.360buyimg.com/n1/s450x450_jfs/t1/210068/6/31771/165734/6438c966F5d3a626b/48f6f081199cfd4c.jpg",
         },
         {
          title: "中性笔签字笔 0.5mm",
          desc: "得力(deli)S01中性笔京东销冠中性笔签字笔 0.5mm子弹头经典办公按动笔水笔 黑色 12支/盒",
          num: "2198",
          price: "22.30",
          thumb: "https://img14.360buyimg.com/n1/s450x450_jfs/t1/223620/5/17673/85856/63732e8eEa1522fb7/912addeaabb3d8b6.jpg",
         },
         {
          title: "汉高百特PKA3D/5D胶水",
          desc: "百特（Pritt） 汉高百特PKA3D/5D胶水 百特透明液体胶水学生胶手工胶水 办公用品财务胶水 大号50ml 15支/盒",
          num: "198",
          price: "65.30",
          thumb: "https://img10.360buyimg.com/n1/jfs/t25645/34/162212711/109384/77574c93/5b66f60cN788052f7.jpg",
         },
         {
          title: "彩色学生橡皮擦",
          desc: "得力(deli)12块彩色学生橡皮擦 棒冰造型考试绘画橡皮 擦拭洁净创意橡皮开学礼物 71122",
          num: "298",
          price: "22.90",
          thumb: "https://img10.360buyimg.com/n1/s450x450_jfs/t1/180384/10/27420/289759/62e39c16E3e7b4be8/a0bb3606fbb69a6d.jpg",
         },
         {
          title: "金榜题名系列高颜值水笔",
          desc: "晨光(M&G)文具黑色0.5mm学生中性笔 按动子弹头签字笔 金榜题名系列高颜值水笔 5支/盒AGPK35Y9",
          num: "2908",
          price: "15.80",
          thumb: "https://img11.360buyimg.com/n1/s450x450_jfs/t1/44715/8/19164/591739/62dfba97E559c7ede/fb7bb3df2639d02f.jpg",
         },
         {
          title: "金值20支装卡通铅笔",
          desc: "金值20支装卡通铅笔hb小学生可爱写字笔一年级儿童文具奖品幼儿园初学者用书写笔 期末毕业奖励生日礼物",
          num: "5603",
          price: "12.50",
          thumb: "https://img10.360buyimg.com/n1/s450x450_jfs/t1/159274/17/5049/208205/600fd015E177738cc/a4f7d2d31dd3d9a9.jpg",
         },



       ],
       liwu:[
        {
          title: "小羊公仔玩偶",
          desc: "尚韵 生日礼物女 小羊公仔玩偶520七夕情人节女友毕业礼物送女生毛绒玩具布偶娃娃公仔儿童玩具",
          num: "203",
          price: "28.50",
          thumb: "https://img11.360buyimg.com/n1/jfs/t1/163102/34/29398/77173/630b197cE3348159c/25de57664b2c8dbc.jpg",
         },
         {
          title: "OlarHike毛绒玩具DOW公仔",
          desc: "金值20支装卡通铅笔hb小学生可爱写字笔一年级儿童文具奖品幼儿园初学者用书写笔 期末毕业奖励生日礼物",
          num: "03",
          price: "98.56",
          thumb: "https://img14.360buyimg.com/n1/jfs/t1/195286/29/26511/174195/62bc10c8E8d8f3a04/f7e48fbaa88c4c60.jpg",
         },
         {
          title: "兰蔻菁纯套装",
          desc: "兰蔻菁纯套装(水150ml+眼霜20ml+面霜60ml)护肤品生日母亲节520礼物",
          num: "83",
          price: "4134.99",
          thumb: "https://img11.360buyimg.com/n1/jfs/t1/87877/36/20065/137583/645b925bF672d3cfc/4af68ab9dd6db353.jpg",
         },
         {
          title: "盲盒手办娃娃公仔",
          desc: "迪士尼Disney 盲盒手办娃娃公仔毛绒玩具潮玩解压玩偶送朋友圣诞节生日礼物 玩具总动员草莓熊水果派对盲盒",
          num: "503",
          price: "120.50",
          thumb: "https://img10.360buyimg.com/n1/jfs/t1/94599/3/28597/222615/625fff6eEcf5477e9/c98c991c9a8537bb.jpg",
         },
         {
          title: "精华液sk2全明星礼盒",
          desc: "SK-II神仙水75ml精华液sk2全明星礼盒护肤品套装skii母亲节礼物520礼物",
          num: "273",
          price: "893.90",
          thumb: "https://img11.360buyimg.com/n1/jfs/t1/103394/10/33737/87476/645ce3fcF272d587e/9514209048089948.jpg",
         },
         {
          title: "Jungle野桃木槿花香薰",
          desc: "野兽派（THE BEAST）Jungle野桃木槿花香薰蜡烛礼盒香薰卧室生日礼物母亲节礼物",
          num: "03",
          price: "199.50",
          thumb: "https://img13.360buyimg.com/n1/jfs/t1/56001/11/25063/119585/6457302eF810bc3d7/023cf85ebab3b7c7.jpg",
         },
         {
          title: "金值20支装卡通铅笔",
          desc: "金值20支装卡通铅笔hb小学生可爱写字笔一年级儿童文具奖品幼儿园初学者用书写笔 期末毕业奖励生日礼物",
          num: "5603",
          price: "12.50",
          thumb: "https://img10.360buyimg.com/n1/s450x450_jfs/t1/159274/17/5049/208205/600fd015E177738cc/a4f7d2d31dd3d9a9.jpg",
         },
         {
          title: "兰蔻小黑瓶50ml ",
          desc: "兰蔻小黑瓶50ml 修护保湿维稳精华 护肤品套装礼盒生日母亲节520礼物",
          num: "813",
          price: "1330.50",
          thumb: "https://img13.360buyimg.com/n1/jfs/t1/100243/30/40191/158721/645b9256F7d89ec68/26fba6890c2b0846.jpg",
         },
         {
          title: "金值20支装卡通铅笔",
          desc: "金值20支装卡通铅笔hb小学生可爱写字笔一年级儿童文具奖品幼儿园初学者用书写笔 期末毕业奖励生日礼物",
          num: "5603",
          price: "12.50",
          thumb: "https://img10.360buyimg.com/n1/s450x450_jfs/t1/159274/17/5049/208205/600fd015E177738cc/a4f7d2d31dd3d9a9.jpg",
         },
         {
          title: "Sanrio电视机小夜灯",
          desc: "名创优品（MINISO）Sanrio电视机小夜灯卧室床头书桌灯LED 家用柔和白光创意摆件礼品",
          num: "363",
          price: "84.90",
          thumb: "https://img12.360buyimg.com/n1/jfs/t1/68580/7/21306/81794/62efd866E7e266d32/af00b05ce4c0d43d.jpg",
         },
       ],
       haowu:[
        {
          title: "Sanrio电视机小夜灯",
          desc: "名创优品（MINISO）Sanrio电视机小夜灯卧室床头书桌灯LED 家用柔和白光创意摆件礼品",
          num: "363",
          price: "84.90",
          thumb: "https://img12.360buyimg.com/n1/jfs/t1/68580/7/21306/81794/62efd866E7e266d32/af00b05ce4c0d43d.jpg",
         },
         {
          title: "大英博物馆手机支架",
          desc: "大英博物馆手机支架桌面摆件萌猫收纳盒笔架生日礼物礼品送女友母亲节礼物 巴斯特萌猫多功能收纳盒",
          num: "363",
          price: "58.14",
          thumb: "https://img13.360buyimg.com/n1/jfs/t1/222561/3/23573/57412/645d307eFd4a57bb7/693a08e8ba9d78e4.jpg",
         },
         {
          title: "新巴洛克香薰蜡烛套装",
          desc: "新巴洛克香薰蜡烛套装清新绿玫瑰香礼盒送女友母亲节礼物",
          num: "363",
          price: "84.90",
          thumb: "https://img12.360buyimg.com/n1/jfs/t1/97206/35/28416/121121/645c4e5fF46df2f15/f692a1497128bf41.jpg",
         },
         {
          title: "解压玩偶安德森",
          desc: "解压玩偶安德森猫巴斯特猫慢回弹玩具送朋友礼物母亲节礼物 巴斯特萌猫慢回弹解压玩偶",
          num: "93",
          price: "88.90",
          thumb: "https://img13.360buyimg.com/n1/jfs/t1/129545/22/31554/69519/645d2dfbF3ae8d4e9/55ab20d3b1d73e24.jpg",
         },
         {
          title: "氛围灯客厅摆件",
          desc: "氛围灯客厅摆件盖亚·安德森猫无线充夜灯送女友生日母亲节礼物 安德森猫无线充氛围灯",
          num: "363",
          price: "84.90",
          thumb: "https://img11.360buyimg.com/n1/jfs/t1/118287/1/36775/76253/645d2dfdFfa14d1b1/78ad81a70c479531.jpg",
         },
         {
          title: "24考研英语2024考研真相",
          desc: "六本全套（赠20张答题卡）：历年真题解析篇1-4+真题配套词汇+真题翻译手译】、考研词汇闪过2024单词等可选 ",
          num: "234",
          price: "229.8",
          thumb: "https://img11.360buyimg.com/n1/jfs/t1/89337/17/33023/197076/63f95676F2e6be8f3/ff28f65b2faf9c3e.jpg",
        },
        {
          title: "齐心(Comix)10个装文件夹",
          desc: "齐心(Comix)10个装文件夹 插页袋/资料册插页文件夹活页文件夹 办公用品EA61",
          num: "308",
          price: "92.0",
          thumb: "https://img12.360buyimg.com/n1/s450x450_jfs/t1/26878/29/19759/70624/63451a05Ea179d63b/e95dd89ee80dda02.jpg",
         },
         {
          title: "OlarHike毛绒玩具DOW公仔",
          desc: "金值20支装卡通铅笔hb小学生可爱写字笔一年级儿童文具奖品幼儿园初学者用书写笔 期末毕业奖励生日礼物",
          num: "03",
          price: "98.56",
          thumb: "https://img14.360buyimg.com/n1/jfs/t1/195286/29/26511/174195/62bc10c8E8d8f3a04/f7e48fbaa88c4c60.jpg",
         },
         {
          title: "兰蔻菁纯套装",
          desc: "兰蔻菁纯套装(水150ml+眼霜20ml+面霜60ml)护肤品生日母亲节520礼物",
          num: "83",
          price: "4134.99",
          thumb: "https://img11.360buyimg.com/n1/jfs/t1/87877/36/20065/137583/645b925bF672d3cfc/4af68ab9dd6db353.jpg",
         },
         {
          title: "盲盒手办娃娃公仔",
          desc: "迪士尼Disney 盲盒手办娃娃公仔毛绒玩具潮玩解压玩偶送朋友圣诞节生日礼物 玩具总动员草莓熊水果派对盲盒",
          num: "503",
          price: "120.50",
          thumb: "https://img10.360buyimg.com/n1/jfs/t1/94599/3/28597/222615/625fff6eEcf5477e9/c98c991c9a8537bb.jpg",
         },
         {
          title: "精华液sk2全明星礼盒",
          desc: "SK-II神仙水75ml精华液sk2全明星礼盒护肤品套装skii母亲节礼物520礼物",
          num: "273",
          price: "893.90",
          thumb: "https://img11.360buyimg.com/n1/jfs/t1/103394/10/33737/87476/645ce3fcF272d587e/9514209048089948.jpg",
         },
         {
          title: "Jungle野桃木槿花香薰",
          desc: "野兽派（THE BEAST）Jungle野桃木槿花香薰蜡烛礼盒香薰卧室生日礼物母亲节礼物",
          num: "03",
          price: "199.50",
          thumb: "https://img13.360buyimg.com/n1/jfs/t1/56001/11/25063/119585/6457302eF810bc3d7/023cf85ebab3b7c7.jpg",
         },

       ]
  },
    // goods:"",
  },
  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none',
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // wx.request({
    //   url: "https://api-hmugo-web.itheima.net/api/public/v1/categories",
    //   method: 'GET',
    //   success: (req) => {
    //     console.log("req:" + req)
    //     this.setData({
    //       goods: req.data
    //     })
    //   }
    // })
    // console.log(goods.beikao)

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})