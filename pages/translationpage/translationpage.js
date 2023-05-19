// pages/translationpage/translationpage.js

// import { util as util } from "../../utils/md5.js"; //这里注意文件层级
import md5 from '../../utils/md5'

// var util= require('../../utils/md5.js'); //这里注意文件层级
// var util = '../../utils/md5'
// var exports = module.exports
// module.exports = {util}

Page({


  /**
   * 页面的初始数据
   */
  data: {
    index:1,
    toLanguageArray:['中文','英文','日语','韩语','法语','西班牙语','泰语','阿拉伯语','俄语','葡萄牙语','德语','意大利语','希腊语','越南语','繁体中文'],  //picker显示文字
    toLanguageValue:['zh','en','jp','kor','fra','spa','th','ara','ru','pt','de','it','el','vie','cht'],   //api接受字符
    navBarHeight: "",
    translationtext:[],
    inputText:"",
    sign:'',
    radio: '1',
    to:[],
  },

  //获取目标语言
   bindPickerChange: function(e) {
     console.log('picker发送选择改变，携带值为', e.detail.value)
     this.setData({
     index: e.detail.value
     })
     console.log('index更改为:', this.data.index)
     },

  // onChange(event) {
  //   this.setData({
  //     radio: event.detail,
  //   });
  //   console.log(this.data.radio)
  // },

  getTolan(event) {
    var i = 0;
    for(i;i<15;i++){
      if(this.data.index==i){
        this.setData({
          to: this.data.toLanguageValue[i],
        });
    }
  }
  console.log('目标语言为:'+this.data.to)
},
 

  /**
   * 输入框实时回调
   * @param {*} options 
   */
  translateInputAction: function (options) {
    //获取输入框输入的内容
    let value = options.detail.value
    this.setData({
      inputText:options.detail.value,
    }),
    console.log("输入框输入的内容是 " + value)
  },


  //提交确定翻译
  submit:function name(params) {
    console.log("点击了提交")
    var in_text = this.data.inputText  //获取输入的字符串
    console.log("输入内容是："+in_text)
    // this.onChange()  //获取中英文选择
    this.getTolan()
    console.log("radio:"+this.data.radio)
    console.log("to:"+this.data.to)
    this.getSign()  //计算sign
  
    wx.request({
          url:  "http://api.fanyi.baidu.com/api/trans/vip/translate?q="+this.data.inputText+"&from=auto&to="+this.data.to+"&appid=20230329001620142&salt=1435660288&sign="+this.data.sign,
          method:'GET',
          success:(req)=>{
            this.setData({
              translationtext: req.data.trans_result[0].dst,

          
            });
            console.log("获取的翻译总结果为:"+ this.data.trans_result)
            console.log(this.data.translationtext)
            
          }
    })

  },

  //计算sign
  getSign(params) {
    var befor_sign = '20230329001620142'+this.data.inputText+'1435660288tZ3tqS7R9dioa_m6rkNH'
    var s = md5(befor_sign)
    this.setData({
      sign:s
    })
    console.log("sign是："+this.data.sign)
  },





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // this.getSign()
    this.setData({
      navBarHeight: getApp().globalData.navBarHeight,
      // inputText:this.data.inputText,
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
    this.setData({
      inputText:this.data.inputText,
    })
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

  },


  


  
})