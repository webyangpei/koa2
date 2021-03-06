const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let  count = 1;
let countId = { type: Number, required: true, default: () => count++ }

const UserSchema = new Schema({
	userId: countId, // 用户ID
    userName: { type: String, required: true }, // 用户名
    nickName: { type: String, required: true }, // 昵称
    email: { type: String, default: '' }, // 邮箱
    avatar: { type: String, default: '' }, // 头像
    profile: { type: String,default:'' },   // 个人简介
    passWord: { type: String, required: true }, // 密码
    createdAt: { type: Date, default: Date.now }, // 创建时间
    updatedAt: { type: Date, default: Date.now } //修改时间
}, { versionKey: false })

global.UserSchema = global.UserSchema || mongoose.model('User', UserSchema);
module.exports = global.UserSchema;
