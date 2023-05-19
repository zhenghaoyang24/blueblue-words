// pages/searchword/searchword.js
import word_a from '../../wordjson/a.js';
import word_b from '../../wordjson/b.js';
import word_c from '../../wordjson/c.js';
import word_d from '../../wordjson/d.js';
import word_e from '../../wordjson/e.js';
import word_f from '../../wordjson/f.js';
import word_g from '../../wordjson/g.js';
import word_h from '../../wordjson/h.js';
import word_i from '../../wordjson/i.js';
import word_j from '../../wordjson/j.js';
import word_k from '../../wordjson/k.js';
import word_l from '../../wordjson/l.js';
import word_m from '../../wordjson/m.js';
import word_n from '../../wordjson/n.js';
import word_o from '../../wordjson/o.js';
import word_p from '../../wordjson/p.js';
import word_q from '../../wordjson/q.js';
import word_r from '../../wordjson/r.js';
import word_s from '../../wordjson/s.js';
import word_t from '../../wordjson/t.js';
import word_u from '../../wordjson/u.js';
import word_v from '../../wordjson/v.js';
import word_w from '../../wordjson/w.js';
import word_x from '../../wordjson/x.js';
import word_y from '../../wordjson/y.js';
import word_z from '../../wordjson/z.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {

    navBarHeight: "",
    input_Word: "", // 输入的单词
    word_a: word_a.word_a,
    word_b: word_b.word_b,
    word_c: word_c.word_c,
    word_d: word_d.word_d,
    word_e: word_e.word_e,
    word_f: word_f.word_f,
    word_g: word_g.word_g,
    word_h: word_h.word_h,
    word_i: word_i.word_i,
    word_j: word_j.word_j,
    word_k: word_k.word_k,
    word_l: word_l.word_l,
    word_m: word_m.word_m,
    word_n: word_n.word_n,
    word_o: word_o.word_o,
    word_p: word_p.word_p,
    word_q: word_q.word_q,
    word_r: word_r.word_r,
    word_s: word_s.word_s,
    word_t: word_t.word_t,
    word_u: word_u.word_u,
    word_v: word_v.word_v,
    word_w: word_w.word_w,
    word_x: word_x.word_x,
    word_y: word_y.word_y,
    word_z: word_z.word_z,


    searchWord: "", //搜索到的单词 结果



  },


  // 获取表单信息
  goSearchform(d) {

    var w = d.detail.value.inputWord
    var w01 = w.substr(0, 1);
    console.log("www:" + w) //  {username: "hgj", password: "fsdfsd"}
    console.log("www01:" + w01)
    this.setData({
      input_Word:w
    })
    console.log("w:"+this.data.input_Word)
    if (w01 === 'a') {
      var i = 0;
      const words = this.data.word_a
      for (i;; i++) {
        if (words[i].word == w) {
          this.setData({
            searchWord: words[i]
          })
          break
        }
      }
    }else if (w01 === 'b') {
      var i = 0;
      const words = this.data.word_b
      for (i=0;; i++) {
        if (words[i].word == w) {
          this.setData({
            searchWord: words[i]
          })
          break
        }
      }
    }else if (w01 === 'c') {
      var i = 0;
      const words = this.data.word_c
      for (i=0;; i++) {
        if (words[i].word == w) {
          this.setData({
            searchWord: words[i]
          })
          break
        }
      }
    }else if (w01 === 'd') {
      var i = 0;
      const words = this.data.word_d
      for (i=0;; i++) {
        if (words[i].word == w) {
          this.setData({
            searchWord: words[i]
          })
          break
        }
      }
    }else if (w01 === 'e') {
      var i = 0;
      const words = this.data.word_e
      for (i=0;; i++) {
        if (words[i].word == w) {
          this.setData({
            searchWord: words[i]
          })
          break
        }
      }
    }else if (w01 === 'f') {
      var i = 0;
      const words = this.data.word_f
      for (i=0;; i++) {
        if (words[i].word == w) {
          this.setData({
            searchWord: words[i]
          })
          break
        }
      }
    }else if (w01 === 'g') {
      var i = 0;
      const words = this.data.word_g
      for (i=0;; i++) {
        if (words[i].word == w) {
          this.setData({
            searchWord: words[i]
          })
          break
        }
      }
    }else if (w01 === 'h') {
      var i = 0;
      const words = this.data.word_h
      for (i=0;; i++) {
        if (words[i].word == w) {
          this.setData({
            searchWord: words[i]
          })
          break
        }
      }
    }else if (w01 === 'i') {
      var i = 0;
      const words = this.data.word_i
      for (i=0;; i++) {
        if (words[i].word == w) {
          this.setData({
            searchWord: words[i]
          })
          break
        }
      }
    }else if (w01 === 'j') {
      var i = 0;
      const words = this.data.word_j
      for (i=0;; i++) {
        if (words[i].word == w) {
          this.setData({
            searchWord: words[i]
          })
          break
        }
      }
    }else if (w01 === 'k') {
      var i = 0;
      const words = this.data.word_k
      for (i=0;; i++) {
        if (words[i].word == w) {
          this.setData({
            searchWord: words[i]
          })
          break
        }
      }
    }else if (w01 === 'l') {
      var i = 0;
      const words = this.data.word_l
      for (i=0;; i++) {
        if (words[i].word == w) {
          this.setData({
            searchWord: words[i]
          })
          break
        }
      }
    }else if (w01 === 'm') {
      var i = 0;
      const words = this.data.word_m
      for (i=0;; i++) {
        if (words[i].word == w) {
          this.setData({
            searchWord: words[i]
          })
          break
        }
      }
    }else if (w01 === 'n') {
      var i = 0;
      const words = this.data.word_n
      for (i=0;; i++) {
        if (words[i].word == w) {
          this.setData({
            searchWord: words[i]
          })
          break
        }
      }
    }else if (w01 === 'o') {
      var i = 0;
      const words = this.data.word_o
      for (i=0;; i++) {
        if (words[i].word == w) {
          this.setData({
            searchWord: words[i]
          })
          break
        }
      }
    }else if (w01 === 'p') {
      var i = 0;
      const words = this.data.word_p
      for (i=0;; i++) {
        if (words[i].word == w) {
          this.setData({
            searchWord: words[i]
          })
          break
        }
      }
    }else if (w01 === 'q') {
      var i = 0;
      const words = this.data.word_q
      for (i=0;; i++) {
        if (words[i].word == w) {
          this.setData({
            searchWord: words[i]
          })
          break
        }
      }
    }else if (w01 === 'r') {
      var i = 0;
      const words = this.data.word_r
      for (i=0;; i++) {
        if (words[i].word == w) {
          this.setData({
            searchWord: words[i]
          })
          break
        }
      }
    }else if (w01 === 's') {
      var i = 0;
      const words = this.data.word_s
      for (i=0;; i++) {
        if (words[i].word == w) {
          this.setData({
            searchWord: words[i]
          })
          break
        }
      }
    }else if (w01 === 't') {
      var i = 0;
      const words = this.data.word_t
      for (i=0;; i++) {
        if (words[i].word == w) {
          this.setData({
            searchWord: words[i]
          })
          break
        }
      }
    }else if (w01 === 'u') {
      var i = 0;
      const words = this.data.word_u
      for (i=0;; i++) {
        if (words[i].word == w) {
          this.setData({
            searchWord: words[i]
          })
          break
        }
      }
    }else if (w01 === 'v') {
      var i = 0;
      const words = this.data.word_v
      for (i=0;; i++) {
        if (words[i].word == w) {
          this.setData({
            searchWord: words[i]
          })
          break
        }
      }
    }else if (w01 === 'w') {
      var i = 0;
      const words = this.data.word_w
      for (i=0;; i++) {
        if (words[i].word == w) {
          this.setData({
            searchWord: words[i]
          })
          break
        }
      }
    }else if (w01 === 'x') {
      var i = 0;
      const words = this.data.word_x
      for (i=0;; i++) {
        if (words[i].word == w) {
          this.setData({
            searchWord: words[i]
          })
          break
        }
      }
    }else if (w01 === 'y') {
      var i = 0;
      const words = this.data.word_y
      for (i=0;; i++) {
        if (words[i].word == w) {
          this.setData({
            searchWord: words[i]
          })
          break
        }
      }
    }else if (w01 === 'z') {
      var i = 0;
      const words = this.data.word_z
      for (i=0;; i++) {
        if (words[i].word == w) {
          this.setData({
            searchWord: words[i]
          })
          break
        }
      }
    }





  },

  getSearchWord() {

    // return this.data.inputWord
    // var s=inputWord.substr(0,1);
    console.log("getSearchWord()" + this.data.searchWord)


  },


  // 获取input数据
  getInputValue(e) {
    this.inputWord = e.detail
    // console.log(e.detail)// {value: "ff", cursor: 2}  
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      navBarHeight: getApp().globalData.navBarHeight
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
    this.USA_AudioCtx =wx.createInnerAudioContext('USA_Audio')
    this.UK_AudioCtx =wx.createInnerAudioContext('UK_Audio')
  
  },

  //英
  audioUK_Play() {

    const innerAudioContext = wx.createInnerAudioContext('USA_Audio')
    innerAudioContext.autoplay = true
    innerAudioContext.src = 'http://dict.youdao.com/dictvoice?audio='+this.data.input_Word+'&type=1'
  },
  //美
  audioUSA_Play() {
    const innerAudioContext = wx.createInnerAudioContext('UK_Audio')
    innerAudioContext.autoplay = true
    innerAudioContext.src = 'http://dict.youdao.com/dictvoice?audio='+this.data.input_Word+'&type=0'
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