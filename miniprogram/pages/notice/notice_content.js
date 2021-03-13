//var WxParse = require('../wxParse/wxParse.js');
Page({
     data: {
          main_data: [],
          htmlSnip: ''
     },
     onLoad: function (options) {
          var that = this
          var article = ''
          console.log(getApp().globalData.href);
          wx.request({
               url: 'https://neepupro.mynatapp.cc/notice_content',
               data: {
                    href: getApp().globalData.href
               },
               method: "POST",
               header: {
                    "Content-Type": "application/x-www-form-urlencoded"
               },
               success: function (res) {
                    article = res['data']['content']
                    //正则替换图片
                    var txt = article.replace(/<img.*/g,"");
                    that.setData({
                         htmlSnip: txt
                    })
               },
               fail: function (res) {
                    console.log("failed")
               }
          })
          
     },

     onReady: function () {
          // Do something when page ready. 
     },
     onShow: function () {
          // Do something when page show. 
     },
     onHide: function () {
          // Do something when page hide. 
     },
     onUnload: function () {
          // Do something when page close. 
     },
     onPullDownRefresh: function () {
          // Do something when pull down 
     },
     // Event handler. 
}) 