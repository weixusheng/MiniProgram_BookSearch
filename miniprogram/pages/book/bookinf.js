var util = require('../../utils/util')
var is_fav = true

Page({
  data: {
    info_data: {},
    info_location: [],
    info_list: []
  },
  onLoad: function (options) {
    var that = this;
    var id = getApp().globalData.bookid;
    //判断当前是否为收藏图书
    var id_list = getApp().globalData.fav_list_id;
    if(id_list.indexOf(id) == -1){
      is_fav = false;
      console.log("收藏列表中没有这本书")
    }
    wx.request({
      url: 'https://neepupro.mynatapp.cc/book_content',
      data: {
        book_index: id
      },
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        var dic = res['data'][res['data'].length - 1]
        var isbn_time = dic["ISBN及定价:"].split('/', 2);
        dic["isbn"] = isbn_time[0];
        dic["price"] = isbn_time[1];
        dic["theme"] = dic["学科主题:"].split('-');
        var name_author = dic["题名/责任者:"].split('/', 2);
        dic['name'] = name_author[0];
        dic['author'] = name_author[1];
        var length = res['data'].length - 1
        var book_item = res['data']
        book_item.splice(length, 1); //删除一个元素
        console.log(dic)
        console.log(book_item)
        //var info_data = that.data.info_data;
        var verify = ["学科主题:", "丛编项:", "中图法分类号:"]
        for (var i in verify) {
          if (!dic.hasOwnProperty(verify[i])) {
            dic[verify[i]] = "Null";
          }
        }
        that.setData({
          info_data: dic,
          info_location: book_item[0],
          info_list: dic["theme"]
        })
      }
    })
  },
  add_book: function () {
    var id = getApp().globalData.bookid;
    var cur_time = util.formatDate(new Date());
    wx.cloud.init();
    wx.cloud.callFunction({
      name: 'add_fav',
      data: {
        createTime: cur_time,
        book_id: id
      },
      success: res => {
        console.log('已添加收藏')
        wx.showToast({
          duration: 4000,
          title: '添加收藏成功'
        })
      },
      fail: err => {
        app.globalData.followID = "";
        wx.showToast({
          icon: 'none',
          title: '添加收藏失败'
        })
        console.error
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