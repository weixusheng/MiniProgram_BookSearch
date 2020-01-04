var WxParse = require('../wxParse/wxParse.js');
Page({
     data: {
          main_data: [],
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
                    console.log(res['data'])
                    article = res['data']['content']
                    console.log(article)
                    WxParse.wxParse('article', 'html', article,that, 5);
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