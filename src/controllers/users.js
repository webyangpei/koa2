const { UserModel } = require('../models');

class HomeController {

  /**
   * 用户注册
   * @param ctx
   * @returns {Promise<void|*>}
   */
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

  /**
   * 获取用户列表
   * @param ctx
   * @returns {Promise<void|*>}
   */
  static async getAllUser(ctx) {
    const result = await UserModel.find();
    return ctx.success({
      data: result
    });
  }


  static async deleteByIds(ctx) {
    const result = await UserModel.find();
    return ctx.success({
      data: result
    });
  }

  /**
   * 用户登录
   * @returns {Promise<void>}
   */
  static async login(ctx) {
    // 检查是否已经登录
    if (ctx.session.username) {
      return ctx.success({
        msg: '已经登录，请不要重复登录'
      });
    }
    // 查询用户名是否存在 -如果存在> 查询用户名密码是否存在且匹配 -如果匹配> 存入session 存入redis
    const { name, password } = ctx.request.query
    const result = await UserModel.find({ name, password });
    if (result && result.length) {
      return ctx.success({
        data: result,
        msg: '登录成功'
      });
      // 存入session -》 存入redis
      ctx.session.username = ctx.request.query.name;
    } else {
      return ctx.error({
        code: 11,
        msg: '用户名或者密码不存在'
      })
    }
  }

  /**
   * 用户退出登录 - 从session 和 redis 中移除存储
   * @returns {Promise<void>}
   */
  static async logout() {
  }
}

module.exports = HomeController;
