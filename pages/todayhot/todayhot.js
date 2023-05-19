// pages/todayhot/todayhot.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    weibo:"",
    bilibili:"",
    tencent:"",
    toutiao:"",
    zhihu:"",
    baidu:"",
    pengpai:"",

  },
  toZhihu(e){
    let index = e.currentTarget.dataset.index
    const url = this.data.zhihu[index].mobileUrl // 跳转的外链
    const navtitle = this.data.zhihu[index].title // 这个标题是你自己可以设置的
    wx.navigateTo({
      url: '/pages/webview/webview?url='+url+'&nav='+navtitle
    })
  },

  toTencent(e){
    let index = e.currentTarget.dataset.index
    const url = this.data.tencent[index].mobileUrl // 跳转的外链
    const navtitle = this.data.tencent[index].title // 这个标题是你自己可以设置的
    wx.navigateTo({
      url: '/pages/webview/webview?url='+url+'&nav='+navtitle
    })
  },


  toWeibo(e){
    let index = e.currentTarget.dataset.index
    const url = this.data.weibo[index].url // 跳转的外链
    const navtitle = this.data.weibo[index].title // 这个标题是你自己可以设置的
    // console.log(url)
    wx.navigateTo({
      url: '/pages/webview/webview?url='+url+'&nav='+navtitle
    })
  },
  toBilibili(e){
    let index = e.currentTarget.dataset.index
    const url = this.data.bilibili[index].mobileUrl // 跳转的外链
    const navtitle = this.data.bilibili[index].title // 这个标题是你自己可以设置的
    wx.navigateTo({
      url: '/pages/webview/webview?url='+url+'&nav='+navtitle
    })
  },
  toToutiao(e){
    let index = e.currentTarget.dataset.index
    const url = this.data.toutiao[index].url // 跳转的外链
    const navtitle = this.data.toutiao[index].title // 这个标题是你自己可以设置的
    wx.navigateTo({
      url: '/pages/webview/webview?url='+url+'&nav='+navtitle
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.request({
      url: "https://api.pearktrue.cn/api/dailyhot/?title=微博热搜",
      method: 'GET',
      success: (req) => {
        console.log("req:" + req)
        this.setData({
          weibo: req.data.data
        })
      }
    }),
    wx.request({
      url: "https://api.pearktrue.cn/api/dailyhot/?title=哔哩哔哩",
      method: 'GET',
      success: (req) => {
        console.log("req:" + req)
        this.setData({
          bilibili: req.data.data
        })
      }
    }),
    wx.request({
      url: "https://api.pearktrue.cn/api/dailyhot/?title=腾讯新闻",
      method: 'GET',
      success: (req) => {
        console.log("req:" + req)
        this.setData({
          tencent: req.data.data
        })
      }
    }),
    wx.request({
      url: "https://api.pearktrue.cn/api/dailyhot/?title=今日头条",
      method: 'GET',
      success: (req) => {
        console.log("req:" + req)
        this.setData({
          toutiao: req.data.data
        })
      }
    }),
    wx.request({
      url: "https://api.pearktrue.cn/api/dailyhot/?title=知乎",
      method: 'GET',
      success: (req) => {
        console.log("req:" + req)
        this.setData({
          zhihu: req.data.data
        })
      }
    }),
    wx.request({
      url: "https://api.pearktrue.cn/api/dailyhot/?title=百度",
      method: 'GET',
      success: (req) => {
        console.log("req:" + req)
        this.setData({
          baidu: req.data.data
        })
      }
    }),
    console.log("weibo:" + this.baidu)
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