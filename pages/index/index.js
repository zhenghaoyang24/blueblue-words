// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {

    appname:"BlueWard",


  },


  onShow: function () {
  
    setTimeout(function() {
      wx.switchTab({
        url: '/pages/remenber/remenber',
      })
    }, 1000)
  },
 
})
