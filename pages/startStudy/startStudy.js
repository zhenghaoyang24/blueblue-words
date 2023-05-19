// pages/startStudy/startStudy.js\
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    learnedWord:0,
    words:'',
    value:0,
    showShiyi:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      words:app.globalData.remWord,
      learnedWord:app.globalData.learnedWord
    }),
    this.setData({
      value:app.globalData.value
    })
  },

  audioUK_Play() {
    const innerAudioContext = wx.createInnerAudioContext('USA_Audio')
    innerAudioContext.autoplay = true
    innerAudioContext.src = 'http://dict.youdao.com/dictvoice?audio='+this.data.words[this.data.value].headWord+'&type=1'
  },
  //美
  audioUSA_Play() {
    const innerAudioContext = wx.createInnerAudioContext('UK_Audio')
    innerAudioContext.autoplay = true
    innerAudioContext.src = 'http://dict.youdao.com/dictvoice?audio='+this.data.words[this.data.value].headWord+'&type=0'
  },
  nextWord(){
    this.setData({
      learnedWord:app.globalData.learnedWord
    })
    this.setData({
      value:this.data.value+1,
      showShiyi:false
    })
    app.globalData.learnedWord = this.data.learnedWord+1,
    app.globalData.value = this.data.value

  },
  chakanshiyi(){
    this.setData({
      showShiyi:true
    })

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