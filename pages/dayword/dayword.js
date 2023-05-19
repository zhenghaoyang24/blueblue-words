// pages/dayword/dayword.js
var util = require('../../utils/util');

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg1: '',
    msg2: '',
    msg3: '',
    // Time: "",
    month: "",
    day: "",
    // sign: '',
    // translationtext: ""
  },



  getMon() {
    this.setData({
      month: util.getMon(new Date())
    });
    console.log("month：" + this.data.month)
  },
  getDay() {
    this.setData({
      day: util.getDay(new Date())
    });
    console.log("day：" + this.data.day)
  },
  getDaySentence1(){
    console.log(" 前 globalData："+app.globalData.daySentence1)
    if(app.globalData.daySentence1==''){
      console.log("为空")
      wx.request({
        url: 'http://apis.juhe.cn/fapigx/everyday/query?key=392315dXXXXXXXXXXXXXXXXXXXX',
        method: 'GET',
        success: (req) => {
          // console.log("req:" + req),
          this.setData({
            msg1: req.data.result
            // translationtext: req.data,
          });
          app.globalData.daySentence1 = this.data.msg1
        }
      })
    }else{
      console.log("不为空")
      this.setData({
        msg1: app.globalData.daySentence1
        // translationtext: req.data,
      });
    }
    console.log("后 globalData："+app.globalData.daySentence1)

  },
  getDaySentence2(){
    console.log(" 前 globalData："+app.globalData.daySentence2)
    if(app.globalData.daySentence2==''){
      console.log("为空")
      wx.request({
        url: 'http://apis.juhe.cn/fapigx/everyday/query?key=392315dXXXXXXXXXXXXXXXXXXXX',
        method: 'GET',
        success: (req) => {
          // console.log("req:" + req),
          this.setData({
            msg2: req.data.result
            // translationtext: req.data,
          });
          app.globalData.daySentence2 = this.data.msg2
        }
      })
    }else{
      console.log("不为空")
      this.setData({
        msg2: app.globalData.daySentence2
        // translationtext: req.data,
      });
    }
    console.log("后 globalData："+app.globalData.daySentence2)
  },
  getDaySentence3(){
    console.log(" 前 globalData："+app.globalData.daySentence3)
    if(app.globalData.daySentence3==''){
      console.log("为空")
      wx.request({
        url: 'http://apis.juhe.cn/fapigx/everyday/query?key=392315dXXXXXXXXXXXXXXXXXXXX',
        method: 'GET',
        success: (req) => {
          // console.log("req:" + req),
          this.setData({
            msg3: req.data.result
            // translationtext: req.data,
          });
          app.globalData.daySentence3 = this.data.msg3
        }
      })
    }else{
      console.log("不为空")
      this.setData({
        msg3: app.globalData.daySentence3
        // translationtext: req.data,
      });
    }
    console.log("后 globalData："+app.globalData.daySentence3)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getDaySentence1();
    this.getDaySentence2();
    this.getDaySentence3();
    

    // console.log("msg前：" + this.data.msgt);

    // this.getMsg();

    // console.log("msg后：" + this.data.msgt);

    // console.log("循环完")


    // setTimeout(() => this.getSign(), 1500)
    // setTimeout(() => this.fanyi(), 1500)

    this.getMon();
    this.getDay();


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
    // this.fanyi();
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
