//app.js
App({
     onLaunch: function () {
          var user = wx.getStorageSync('user')
          if (!user) {
               wx.cloud.init({
                    env: 'neepu-pro', 
                    traceUser: true
               })
               wx.cloud.callFunction({
                    name: 'getOpenId',
                    data: {},
                    success: res => {
                         wx.setStorage({
                              key: "user",
                              data: res.result.openid
                         })
                         getApp().globalData.openid = res.result.openid;
                         console.log('成功获取openid: ', res.result.openid)
                    },
                    fail: err => {
                         console.error('获取失败：', err)
                    }
               })
          }
          else{
               console.log("已存在缓存openid")
          }
     },
     globalData: {
          userInfo: null,
          main_data: '',
          lock: 1,
          test: '', //book_name传递参数
          bookid: '',
          href: '',
          openid: '',
     },
})