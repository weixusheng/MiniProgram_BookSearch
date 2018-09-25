
Page({
  data: {
    info_data:{},
    info_location:[]
  },
  onLoad: function (options) {
    var that = this
    var id = getApp().globalData.bookid
    console.log(id)
    wx.request({
      url: 'https://itl.neepu.edu.cn/book_content',
      data: {
        book_index: id
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
        console.log(res['data'].length)
        var dic = {}
        dic = res['data'][res['data'].length-1]
        var length = res['data'].length-1
        var list1 = []
        list1 = res['data']
        list1.splice(length,1);
        console.log(dic)
        console.log(list1)
        that.setData({
          info_data:dic,
          info_location:list1[0]
        })
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