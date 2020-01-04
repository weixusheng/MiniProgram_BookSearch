// pages/intelligent/intelligent_main.js
import {
  $wuxNotification
} from '../../components/wux'

var static_list = ["长篇小说", "JAVA语言", "电力系统", "算法语言", "成功心理学", "中国历史"]
var sum_list = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: "", //用户头像
    nickName: "", //用户昵称
    class_list: {
      '长篇小说': 'tap_ori',
      'JAVA语言': 'tap_ori',
      '电力系统': 'tap_ori',
      '算法语言': 'tap_ori',
      '成功心理学': 'tap_ori',
      '中国历史': 'tap_ori'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.getUserInfo({
      success: function(res) {
        console.log(res);
        that.setData({
          avatarUrl: res.userInfo.avatarUrl,
          nickName: res.userInfo.nickName,
        })
      }
    })

  },

  view_tap: function(e) {
    var that = this;
    var log = e.target.dataset.log;
    var name = static_list[log]
    var temp_list = that.data.class_list;
    var sum_length = sum_list.length;
    var bool = true;
    if (sum_length == 3) {
      var temp_bool = false;
      for (var i = 0; i < sum_length; i++) {
        if (name == sum_list[i]) {
          sum_list.splice(i, 1);
          temp_list[name] = "tap_ori";
          that.setData({
            class_list: temp_list
          })
          console.log(sum_list);
          return;
        } else {
          $wuxNotification.show({
            image: 'image/notice.png',
            title: '选择失败',
            text: '目前最多支持三个类别',
            time: 2200
          })
          continue;
        }
      }
      console.log(sum_list);
      return;
    }

    if (sum_list.length == 0) {
      sum_list.push(name);
      temp_list[name] = "tap_class";
      that.setData({
        class_list: temp_list
      })
      bool = false;
    } else {
      for (var i = 0; i < sum_length; i++) {
        if (name == sum_list[i]) {
          console.log("haha")
          sum_list.splice(i, 1);
          temp_list[name] = "tap_ori";
          that.setData({
            class_list: temp_list
          })
          bool = false;
          break;
        } else {
          continue;
        }
      }
    }
    if (bool) {
      sum_list.push(name);
      temp_list[name] = "tap_class";
      that.setData({
        class_list: temp_list
      })
    }
    console.log(sum_list);
  },

  next_step: function() {
    wx.request({
      url: 'https://itl.neepu.edu.cn/first_insert',
      data: {
        user_id: getApp().globalData.openid,
        series_list: sum_list
      },
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function(res) {
        console.log(res);
      },
      fail: function(res) {
        console.log("failed");
      }
    })
    getApp().globalData.is_first = false;
    wx.switchTab({
      url: 'intel_content'
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