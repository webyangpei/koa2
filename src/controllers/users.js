const dayjs = require('dayjs');

const { UserModel } = require('../models');

class HomeController {

  // 注册用户
  static async register(ctx) {
    let user = new UserModel();
    user.name = ctx.request.body.name
    user.nickName = ctx.request.body.nickName
    user.password = ctx.request.body.password
    const result = await user.save();
    return ctx.success({
      data: result
    });
  }
  // 获取所有用户
  static async getAllUser(ctx) {
    // let user = new UserModel();
    const result = await UserModel.find();
    return ctx.success({
      data: result
    });
  }
  // 用户相关操作
  static async query(ctx){
    const newdate = dayjs().format('YYYY-MM-DD HH:mm'); // 当前时间
    const weekdate = dayjs().subtract(7, 'days').format('YYYY-MM-DD HH:mm'); // 7天前
    const time = newdate - weekdate
    // 获取用户总数
    const usersNum = await UserModel.find();
    // 获取当前用户信息
    return ctx.success({ data: { usersNum, time, newdate } });
  }
}

module.exports = HomeController;
