const {UserModel} = require('../models');

class HomeController {

	/**
	 * 用户注册
	 * @param ctx
	 * @returns {Promise<void|*>}
	 */
	static async register(ctx) {
		let user = new UserModel();
		user.username = ctx.request.body.username
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

	/**
	 * 通过userId获取用户信息
	 * @param ctx
	 * @returns {Promise<*>}
	 */
	static async getUserInfo(ctx) {
		const { userId } = ctx.request.query;
		const result = await UserModel.find({ userId });
		return ctx.success({
			data: result
		});
	}

	/**
	 * 删除用户 - 单个用户
	 * @param ctx
	 * @returns {Promise<*>}
	 */
	static async deleteById(ctx) {
		const { userId } = ctx.request.query;
		const result = await UserModel.deleteOne({ userId });
		return ctx.success({
			data: result
		});
	}

	/**
	 * 批量删除用户
	 * @param ctx
	 * @returns {Promise<*>}
	 */
	static async deleteByIds(ctx) {
		const { userId } = ctx.request.query;
		const _userIDs = userId.split(',')
		const result = await UserModel.deleteMany({ userId: { $in: _userIDs } });
		return ctx.success({
			data: result
		});
	}

	/**
	 * 更新单个用户信息
	 * @param ctx
	 * @returns {Promise<*>}
	 */
	static async updateUserInfo(ctx) {
		// 获取要更新的用户字段信息
		const { userId, username, password, nickName } = ctx.request.body;
		const result = await UserModel.update({ userId }, { username, password, nickName });
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
		if (ctx.session.user) {
			return ctx.success({
				msg: '已经登录，请不要重复登录'
			});
		}
		// 查询用户名是否存在 -如果存在> 查询用户名密码是否存在且匹配 -如果匹配> 存入session 存入redis
		const {username, password} = ctx.request.query
		const result = await UserModel.find({username, password});
		if (result && result.length) {
			return ctx.success({
				data: result[0],
				msg: '登录成功'
			});
			// 存入session -》 存入redis
			ctx.session.user = {
				username: ctx.request.query.username
			}
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
	static async logout(ctx) {
       ctx.session = null;
       ctx.success({
	       code: 1,
	       msg: '退出成功'
       })
	}
}

module.exports = HomeController;
