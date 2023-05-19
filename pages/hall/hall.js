// pages/hall/hall.js
var util = require('../../utils/util');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    citys: [{
        id: 101040100,
        city: '重庆'
      },
      {
        id: 101010100,
        city: '北京'
      },
      {
        id: 101020100,
        city: '上海'
      },
      {
        id: 101210101,
        city: '杭州'
      },
      {
        id: 101270101,
        city: '成都'
      },
      {
        id: 101090101,
        city: '石家庄'
      },
      {
        id: 101100101,
        city: '太原'
      },
      {
        id: 101240101,
        city: '南昌'
      },
      {
        id: 101330101,
        city: '澳门'
      },

    ],
    Time: '',
    navBarHeight: "",
    appname: "大厅",
    msg: "",
    tianqi: ""
  },
  
  bindPickerChange(e) {
    console.log("e", e);
    this.setData({
        index: parseInt(e.detail.value)
      }),
      // 天气获取
      wx.request({
        url: "https://v.api.aa1.cn/api/api-tianqi-4/?id=" + this.data.citys[this.data.index].id,
        method: 'GET',
        success: (req) => {
          console.log("req:" + req.data)
          this.setData({
            tianqi: req.data
          })
        }
      })

  },

  getTime: function (e) {
    var that = this;
    var currentTime = util.formatTime(new Date());
  },

  // wx.navigateTo: 保留当前页面跳转
  //wx.redirectTo: 关闭当前页面跳转
  //wx.switchTab: 跳转到底部标签导航指定的页面

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 获取时间
    var that = this;
    setInterval(function () {
      that.setData({
        Time: util.formatTime(new Date())
      });
    }, 1000);

    // 获取顶部高度
    this.setData({
      navBarHeight: getApp().globalData.navBarHeight
    })

    // wx.request({
    //     url: "https://zj.v.api.aa1.cn/api/wenan-mj/?type=json",
    //     method: 'GET',
    //     success: (req) => {
    //       console.log("msg1:" + req.data.msg)
    //       this.setData({
    //         msg: req.data.msg
    //       })
    //       console.log("msg2:" + this.data.msg)
    //     }
    //   }),
    // 天气获取

    wx.request({
      url: "https://v.api.aa1.cn/api/api-tianqi-4/?id=" + this.data.citys[this.data.index].id,
      // url: "http://www.lpv4.cn:10000/api/weather/?city=" + this.data.citys[this.data.index].city,
      method: 'GET',
      success: (req) => {
        this.setData({
          tianqi: req.data
        })
        console.log("reqtianqi2:" + req.data)
      }
    })
    console.log("tianqi后:" + this.data.tianqi)
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