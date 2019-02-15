const mongoose = require('mongoose');
const moment = require('moment');

const { UserModel } = require('../../models/index');
// const Articlemodel = mongoose.model('Article');

class HomeController {
    // 首页数据加载
    static async query(ctx){
        const newdate = moment().format('YYYY-MM-DD HH:mm'); // 当前时间
        const weekdate = moment().subtract(7, 'days').format('YYYY-MM-DD HH:mm'); // 7天前
        const time = newdate - weekdate
        // 获取用户总数
        const usersNum = await UserModel.find();
        // 获取当前用户信息
        return ctx.success({ data: { usersNum, time, newdate } });
    }
}

module.exports = HomeController;