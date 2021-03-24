//app.js
App({
     onLaunch: function () {
          wx.cloud.init();
          //存在userid缓存
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
          //console.log(user);
          wx.cloud.callFunction({
               name: 'get_fav',
               data:{
                    userid: user
               },
               success: res => {
                    wx.setStorage({
                      data: res.result,
                      key: "fav_list",
                    })
                    //获取fav_list(收藏数据列表)
                    var tmp_data = res.result.data;
                    getApp().globalData.fav_list = tmp_data
                    var tmp_list = [];
                    for(var i in tmp_data){
                         tmp_list.push(tmp_data[i]["book_id"])
                    }
                    //获取fav_list的id列表
                    getApp().globalData.fav_list_id = tmp_list
               },
               fail: erro=>{
                    console.log('fail:',erro)
               } 
          })
     },
     globalData: {
          userInfo: null,
          main_data: '',
          lock: 1,
          test: '', //book_name传递参数
          bookid: '',
          href: '',
          openid: '',
          fav_list: [],
          fav_list_id: []
     },
})