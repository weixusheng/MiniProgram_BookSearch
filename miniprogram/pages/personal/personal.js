var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../images/scen1.jpg',
      '../images/scen2.jpg',
      '../images/scen3.jpg',
      '../images/scen4.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    stnumber: '',
    password: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 获取输入账号  
  stnumberInput: function (e) {
    this.setData({
      stnumber: e.detail.value
    })
  },

  // 获取输入密码  
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登录  
  login: function () {
    if (this.data.stnumber.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '不能为空',
        icon: 'loading',
        duration: 2000
      })
    }
    else {
      var that = this;
      console.log("输出")
      console.log(that.data.stnumber)
      console.log(that.data.password)
      wx: wx.request({
        url: "https://itl.neepu.edu.cn/book_login",
        data: {
          stnumber: that.data.stnumber,
          password: that.data.password
          //stnumber:'2016302030133',
          //password : '2016302030133'
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        success: function (res) {
          //console.log(res.data)
          if (res.data == "erro") {
            wx.showToast({
              title: '账号或密码错误',
              icon: 'loading',
              duration: 2000
            })
          }
          else {
            wx.showToast({
              title: '登陆成功',
              icon: 'succes',
              duration: 3000
            })
            console.log(res.data)
            app.globalData.main_data = res.data
            //延时执行函数
            setTimeout(function () {
              wx.navigateTo({
                url: '/pages/perinfo/perinfo',
                success: function (res) { },
                fail: function (res) { },
                complete: function (res) { },
              })
            }, 3000) //延迟时间 
          }
        },
        fail: function (res) { },
      })

    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})