// pages/remenber/remenber.js

const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {

    navBarHeight:"",
    appname:"步步记单词",
    // wordTotal:0, //计划书总单词书
    wordPlan:0, //已计划单词
    newWordToday:0, //今日新单词
    reviewWordToday:0, //今日复习
    remaindWordToday:0, //剩余
    vocabularyBook:"单词书", //
    studyTime:0,
    show: false,
    book:'',
    everydayWord:0,
    learnedWord:0,

  },
  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var book = app.globalData.mybook
    this.setData({
      navBarHeight:getApp().globalData.navBarHeight,
      book:app.globalData.books[book],
      everydayWord:app.globalData.everydayWord,
  })
  this.setData({
    newWordToday:Math.round(this.data.everydayWord/2.5),
  })
  this.setData({
    learnedWord:app.globalData.learnedWord
  })
  this.setData({
    reviewWordToday:this.data.everydayWord-this.data.newWordToday,
    remaindWordToday:this.data.everydayWord-this.data.learnedWord,
  })
  console.log(book)
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
    this.onLoad()


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