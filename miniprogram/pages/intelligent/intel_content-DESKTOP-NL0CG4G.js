// pages/intelligent/intel_content.js
Page({

     /**
      * 页面的初始数据
      */
     data: {
          headshow: true,
          nextshow: true
     },

     /**
      * 生命周期函数--监听页面加载
      */
     onLoad: function(options) {
          wx.request({
            url: 'https://neepupro.mynatapp.cc/if_first',
               data: {
                    user_id: getApp().globalData.openid
               },
               method: "POST",
               header: {
                    "Content-Type": "application/x-www-form-urlencoded"
               },
               success: function(res) {
                    console.log(res['data'])

                    if (res['data'] == true) {
                         getApp().globalData.is_first = false;
                         load_data();
                    } else {
                         wx.navigateTo({
                              url: 'intelligent_main'
                         })
                    }
               },
               fail: function(res) {
                    console.log("failed")
               }
          })
     },

     load_data: function() {
          var that = this
          wx.request({
               url: 'https://neepupro.mynatapp.cc/intel_book',
               data: {
                    user_id: getApp().globalData.openid
               },
               method: "POST",
               header: {
                    "Content-Type": "application/x-www-form-urlencoded"
               },
               success: function(res) {
                    //console.log(res['data'])
                    that.setData({
                         bookarr: res['data']
                    })
               },
               fail: function(res) {
                    console.log("failed")
               }
          })
     },
     /**
      * 生命周期函数--监听页面初次渲染完成
      */
     onReady: function() {

     },

     /**
      * 生命周期函数--监听页面显示
      */
     onShow: function() {

     },

     /**
      * 生命周期函数--监听页面隐藏
      */
     onHide: function() {

     },

     /**
      * 生命周期函数--监听页面卸载
      */
     onUnload: function() {

     },

     /**
      * 页面相关事件处理函数--监听用户下拉动作
      */
     onPullDownRefresh: function() {
          wx.navigateTo({
               url: 'intelligent_main'
          })
     },

     /**
      * 页面上拉触底事件的处理函数
      */
     onReachBottom: function() {

     },

     /**
      * 用户点击右上角分享
      */
     onShareAppMessage: function() {

     }
})