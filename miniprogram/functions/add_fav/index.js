// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  //console.log(event.book_id)
  //console.log("打印函数")
  const wxContext = cloud.getWXContext()
  try {
    return await db.collection("maindb").add({
      data: {
        userid: wxContext.OPENID, //获取操作者_openid的方法
        createTime: event.createTime,
        book_id: event.book_id,
      },
      success: res => {
        console.log("server add success")
      },
      fail: err => {
        console.log("server add fail")
      }
    })
  } catch (e) {
    console.log(e)
  }
}