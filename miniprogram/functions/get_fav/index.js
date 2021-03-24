// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event.userid)
  try {
    //order
      return await db.collection('maindb').where({
      //下面这3行，为筛选条件
      userid: event.userid
    }).get({
      success: function (res) {
        return res
      }
    });
  } catch (e) {
    console.error(e);
    console.log(event.userid)
  }
}