const mongoose = require('mongoose');
const dayjs = require('dayjs');

const { UserModel } = require('../models');

class HomeController {
    // 首页数据加载
    static async query(ctx, next){
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
