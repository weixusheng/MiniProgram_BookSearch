import {
     $wuxButton
} from '../../components/wux'
import {
     $wuxBackdrop
} from '../../components/wux'
var book_name_quanju = ""
Page({
     data: {
          inputShowed: false,
          page_bookname: "",
          searchLogList: [],
          background_paper: "",
          //
          types: ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'],
          index: 3,
          opened: !1,
          //错误提示
          error: ''
     },
     onLoad: function (options) {
          this.setData({
               page_bookname: this.search.bind(this)
           })
          this.searchLogShowed();
          //
          this.initButton();
          //
          this.$wuxBackdrop = $wuxBackdrop.init(); //屏幕变暗
          getApp().globalData.lock = 1;
     },

     onReady: function () {
     },

     /**
      * 生命周期函数--监听页面显示
      */
     onShow: function () {
          var that = this;
          that.searchLogShowed()
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
     },
     event: function () {
          console.log('事件1')
          if (getApp().globalData.lock == 0) {
               this.$wuxBackdrop.release()
               //console.log('变亮')
          }
          if (getApp().globalData.lock == 1) {
               this.$wuxBackdrop.retain()
               //console.log('变暗')
          }
     },

     showInput: function () {
          this.setData({
               inputShowed: true
          });
     },
     hideInput: function () {
          this.setData({
               page_bookname: "",
               inputShowed: false
          });
     },
     clearInput: function () {
          this.setData({
               page_bookname: ""
          });
          book_name_quanju = ""
     },
     inputTyping: function (e) {
          console.log("正在输入...")
          book_name_quanju = e.detail.value
          this.setData({
               page_bookname: e.detail.value
          });
     },

     onToastChanged: function () {
          this.setData({
               toastHidden: !this.data.toastHidden
          });
     },

     searchLogShowed: function () {
          var that = this;
          var change_data = false;
          var get_log = wx.getStorageSync('searchLog');
          //console.log("调取历史记录")
          if ("" != get_log) {

               for (var i in get_log) {
                    //console.log(searchLogData[i]);
                    if (get_log[i].length >= 6) {
                         var str = get_log[i].substring(0, 5) + '...';
                         get_log[i] = str;
                         //console.log(str);
                         change_data = true;
                    }
               }
               that.setData({
                    searchLogList: get_log
               });

               //console.log(wx.getStorageSync('searchLog'))
          } else {
               that.setData({
                    //searchLogShowed: true
               });
               //console.log("无数据")
          }
     },

     searchDataByLog: function (e) {
          var that = this;
          var searchlog = e.target.dataset.log;
          that.search(searchlog);
     },

     searchData: function (searchTitle) {
          var that = this;
          // 搜索后将搜索记录缓存到本地  
          if ("" != searchTitle) {
               var searchLogData = that.data.searchLogList;
               var check_repeat = true;
               for (var i in searchLogData) {
                    //console.log(searchLogData[i]);
                    if (searchLogData[i] == searchTitle) {
                         check_repeat = false;
                    }
               }
               if (check_repeat) {
                    if (searchLogData.length == 6) {
                         searchLogData.pop();
                    }
                    if (searchTitle.length >= 6) {
                         var str = searchTitle.substring(0, 6) + '...'
                    } else {
                         var str = searchTitle
                    }
                    searchLogData.unshift(str);
                    wx.setStorageSync('searchLog', searchLogData);
               }

          }
     },
     search: function (book_search) {
          getApp().globalData.test = book_search;
          //console.log(book_name_quanju)
          wx.navigateTo({
               url: '/pages/book/bookdetail'
          })
     },

     buttonreq: function () {
          //console.log("成功调用函数")
          var that = this;
          if (book_name_quanju == "" || book_name_quanju == null) {
               wx.showToast({
                    title: '请输入书名',
                    icon: 'loading',
                    duration: 1000
               })
               this.setData({
                    error: '这是一个错误提示'
                })
          } else {
               that.search(book_name_quanju);
               that.searchData(book_name_quanju);
          }
     },
     //
     initButton(position = 'bottomRight') {
          this.setData({
               opened: !1,
          })

          this.button = $wuxButton.init('br', {
               position: position,
               buttons: [{
                         label: '新书速递',
                         icon: "../../images/index_btn/book.png",
                    },
                    {
                         label: '热门图书',
                         icon: "../../images/index_btn/hot_book.png",
                    },
                    {
                         label: '更新日志',
                         icon: "../../images/index_btn/about.png",
                    },
               ],
               buttonClicked(index, item) {

                    index === 0 && wx.navigateTo({
                         url: '/pages/newbook/newbook'
                    })

                    //index === 2 && wx.switchTab({
                    index === 1 && wx.navigateTo({
                         url: '/pages/hotbook/hotbook'
                    })

                    index === 2 && wx.navigateTo({
                         url: '/pages/about/about'
                    })
                    return true
               },
               callback(vm, opened) {
                    vm.setData({
                         opened,
                    })
               },
          })
     },
     switchChange(e) {
          e.detail.value ? this.button.open() : this.button.close()
     },
     pickerChange(e) {
          const index = e.detail.value
          const position = this.data.types[index]
          this.initButton(position)
     }
});