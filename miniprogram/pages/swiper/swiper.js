Page({

  /** 
   * 页面的初始数据 
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,

    vertical:true,

        listData: [
      { "code": "社科一区", "text": "一楼西北", "type": "语言" },
      { "code": "社科一区", "text": "一楼西北", "type": "艺术" },
      { "code": "社科二区", "text": "三楼西北", "type": "文学" },
      { "code": "社科二区", "text": "三楼西北", "type": "史地" },
      { "code": "社科二区", "text": "三楼西北", "type": "哲学" },
      { "code": "社科二区", "text": "三楼西北", "type": "社科" },
      { "code": "社科二区", "text": "三楼西北", "type": "政治法律" },
      { "code": "社科二区", "text": "三楼西北", "type": "军事" },
      { "code": "社科二区", "text": "三楼西北", "type": "文化教育出版" },
      { "code": "社科二区", "text": "三楼西北", "type": "传媒" },
      { "code": "自科一区", "text": "三楼中东", "type": "计算机" },
      { "code": "自科一区", "text": "三楼中东", "type": "自动化" },
      { "code": "综合一区", "text": "四楼西北", "type": "经济" },
      { "code": "综合一区", "text": "四楼西北", "type": "数理化" },
      { "code": "自科二区", "text": "四楼中东", "type": "电力" },
      { "code": "自科二区", "text": "四楼中东", "type": "能动" },
      { "code": "自科二区", "text": "四楼中东", "type": "通信" },
      { "code": "自科三区", "text": "五楼西北", "type": "建筑" },
      { "code": "自科三区", "text": "五楼西北", "type": "轻工" },
      { "code": "自科四区", "text": "五楼中东", "type": "生物" },
      { "code": "自科四区", "text": "五楼中东", "type": "工业技术" },
      { "code": "自科四区", "text": "五楼中东", "type": "环境" },
      { "code": "自科四区", "text": "五楼中东", "type": "综合" }
    ]
  },

  /** 
   * 生命周期函数--监听页面加载 
   */
  onLoad: function (options) {
    var that = this;

    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
  },
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
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