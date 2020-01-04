// pages/intelligent/intel_content.js
var data = [
  {
    "avi": "可借复本：0",
    "idd": "item.php?marc_no=0000255666",
    "name": "1.JavaScript数据可...",
    "pub_year": "人民邮电出版社 2017",
    "sum": "馆藏复本：2"
  },
  {
    "avi": "可借复本：0",
    "idd": "item.php?marc_no=0000256863",
    "name": "2.Java数据科学指南",
    "pub_year": "人民邮电出版社 2018",
    "sum": "馆藏复本：3"
  },
  {
    "avi": "可借复本：0",
    "idd": "item.php?marc_no=0000253306",
    "name": "3.计算机审计",
    "pub_year": "中国人民大学出版社 2017",
    "sum": "馆藏复本：2"
  },
  {
    "avi": "可借复本：0",
    "idd": "item.php?marc_no=0000253864",
    "name": "4.计算机程序设计基础.第3版",
    "pub_year": "高等教育出版社 2018",
    "sum": "馆藏复本：3"
  },
  {
    "avi": "可借复本：3",
    "idd": "item.php?marc_no=0000127193",
    "name": "1.元朝史话",
    "pub_year": "中国国际广播出版社 2007",
    "sum": "馆藏复本：4"
  },
  {
    "avi": "可借复本：2",
    "idd": "item.php?marc_no=0000229575",
    "name": "2.中国历史的教训",
    "pub_year": "中信出版集团股份有限公司 2016",
    "sum": "馆藏复本：2"
  },
  {
    "avi": "可借复本：0",
    "idd": "item.php?marc_no=0000256646",
    "name": "1.电力系统自动化",
    "pub_year": "浙江大学出版社 2018",
    "sum": "馆藏复本：3"
  },
  {
    "avi": "可借复本：3",
    "idd": "item.php?marc_no=0000257394",
    "name": "2.电力系统过电压测量及分析",
    "pub_year": "中国电力出版社 2018",
    "sum": "馆藏复本：3"
  },
  {
    "avi": "可借复本：3",
    "idd": "item.php?marc_no=0000153762",
    "name": "3.电力系统分析.3版",
    "pub_year": "中国电力出版社 2007",
    "sum": "馆藏复本：9"
  },
  {
    "avi": "可借复本：5",
    "idd": "item.php?marc_no=0000200022",
    "name": "4.电力系统分析.第5版",
    "pub_year": "浙江大学出版社 2013",
    "sum": "馆藏复本：7"
  },
  {
    "avi": "可借复本：3",
    "idd": "item.php?marc_no=0000257421",
    "name": "11.编译原理与技术 (第2版...",
    "pub_year": "清华大学出版社 2018",
    "sum": "馆藏复本：3"
  },
  {
    "avi": "可借复本：3",
    "idd": "item.php?marc_no=0000257024",
    "name": "12.信息物理系统应用与原理",
    "pub_year": "机械工业出版社 2018",
    "sum": "馆藏复本：3"
  },
  {
    "avi": "可借复本：3",
    "idd": "item.php?marc_no=0000127193",
    "name": "1.元朝史话",
    "pub_year": "中国国际广播出版社 2007",
    "sum": "馆藏复本：4"
  },
  {
    "avi": "可借复本：2",
    "idd": "item.php?marc_no=0000229575",
    "name": "2.中国历史的教训",
    "pub_year": "中信出版集团股份有限公司 2016",
    "sum": "馆藏复本：2"
  },
  {
    "avi": "可借复本：0",
    "idd": "item.php?marc_no=0000253887",
    "name": "16.计算机动画算法与技术.第...",
    "pub_year": "清华大学出版社 2018",
    "sum": "馆藏复本：2"
  },
  {
    "avi": "可借复本：3",
    "idd": "item.php?marc_no=0000253875",
    "name": "17.嵌入式系统开发基础教程",
    "pub_year": "清华大学出版社 2017",
    "sum": "馆藏复本：3"
  },
  {
    "avi": "可借复本：1",
    "idd": "item.php?marc_no=0000219402",
    "name": "1.活着",
    "pub_year": "中国文联出版社 2015",
    "sum": "馆藏复本：3"
  },
  {
    "avi": "可借复本：3",
    "idd": "item.php?marc_no=0000256068",
    "name": "19.计算机网络技术基础",
    "pub_year": "上海交通大学出版社 2017",
    "sum": "馆藏复本：3"
  },
  {
    "avi": "可借复本：2",
    "idd": "item.php?marc_no=0000254124",
    "name": "20.AutoCAD 2018...",
    "pub_year": "机械工业出版社 2018",
    "sum": "馆藏复本：2"
  }
]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headshow: true,
    nextshow: true,
    view_show: 'visible',
    bookarr: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.request({
      url: 'https://itl.neepu.edu.cn/if_first',
      data: {
        user_id: getApp().globalData.openid
      },
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function(res) {
        console.log(res['data'])
        //if (res['data'] == true) {
        if (getApp().globalData.is_first == false) {
          //load_data();
          that.setData({
            view_show: 'hidden',
            headshow: true,
            nextshow: true,
            bookarr: data
          })
        } else {
          wx.redirectTo({
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
      url: 'https://itl.neepu.edu.cn/intel_book',
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