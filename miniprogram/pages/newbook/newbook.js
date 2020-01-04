var pagenum = 1;
Page({
  data: {
    bookarr: [],
    nextshow: true,
    headshow: true
  },
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://neepupro.mynatapp.cc/new_book',
      data: {
        page: 1
      },
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        //console.log(res['data'][0])
        //console.log(res['data'][1])
        //console.log(res['data'][2])
        //getDataArr(res)
        console.log(res['data'])

        if (res['data'].length == 9) {
          that.setData({
            nextshow: false
          })
        }

        that.setData({
          bookarr: res['data']
        })
      },
      fail: function (res) {
        console.log("failed")
      }
    })
  },

  pagerequest: function (pagenum) {
    var that = this
    wx.request({
      url: 'https://neepupro.mynatapp.cc/new_book',
      data: {
        page:pagenum
      },
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        //console.log(res['data'][0])
        //console.log(res['data'][1])
        //console.log(res['data'][2])
        //getDataArr(res)
        console.log(res['data'])

        if (res['data'].length < 9) {
          console.log('visible')
          that.setData({
            nextshow: true
          })
        }

        if (res['data'].length == 9) {
          that.setData({
            nextshow: false
          })
        }

        that.setData({
          bookarr: res['data']
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
  nextpage: function () {
    pagenum += 1;
    this.pagerequest(pagenum)
    this.setData({
      headshow: false
    })
  },

  headpage: function () {
    pagenum -= 1;
    this.pagerequest(pagenum)
    if (pagenum == 1) {
      this.setData({
        headshow: true
      })
    }
  },

  viewtap: function (e) {
    wx.navigateTo({
      url: '/pages/book/bookinf'
    })
    console.log(e.currentTarget.dataset.id)
    getApp().globalData.bookid = e.currentTarget.dataset.id
  }
}) 