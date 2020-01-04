Page({
  data: {
    info_data: {},
    info_location: []
  },
  onLoad: function(options) {
    var that = this;
    var id = getApp().globalData.bookid;
    var coden = "null";
    var series = "null";
    var key_word = "null";
    console.log(id)
    wx.request({
      url: 'https://neepupro.mynatapp.cc/book_content',
      data: {
        book_index: id
      },
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function(res) {
        //console.log(res['data'][0])
        //console.log(res['data'][1])
        //console.log(res['data'][2])
        //getDataArr(res)
        console.log(res['data'])
        console.log(res['data'].length)
        var dic = {}
        dic = res['data'][res['data'].length - 1]
        var length = res['data'].length - 1
        var list1 = []
        list1 = res['data']
        list1.splice(length, 1);
        //console.log(dic)
        //console.log(list1)
        var info_data = that.data.info_data;
        if (info_data["学科主题:"] != "") {
          key_word = info_data["学科主题:"];
        }
        if (info_data["丛编项:"] != "") {
          series = info_data["丛编项:"];
        }
        if (info_data["中图法分类号:"] != "") {
          coden = info_data["中图法分类号:"];
        }
        that.setData({
          info_data: dic,
          info_location: list1[0]
        })
      }
    })
    wx.request({
      url: 'https://neepupro.mynatapp.cc/tap_intel',
      data: {
        openid: getApp().globalData.openid,
        key_word: key_word,
        series: series,
        coden: coden
      },
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function(res) {
        console.log(res);
      }
    })
  },
  onReady: function() {
    // Do something when page ready. 
  },
  onShow: function() {
    // Do something when page show. 
  },
  onHide: function() {
    // Do something when page hide. 
  },
  onUnload: function() {
    // Do something when page close. 
  },
  onPullDownRefresh: function() {
    // Do something when pull down 
  },
  // Event handler. 

})