const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	userId: Schema.Types.ObjectId,
    userName: { type: String, required: true }, // 用户名
    nickName: { type: String, required: true }, // 昵称
    roleId: { type: Number, required: false, default: 0 }, // 角色Id - 默认0为超级管理员
    email: { type: String, default: '' }, // 邮箱
    avatar: { type: String, default: '' }, // 头像
    profile: { type: String,default:'' },   // 个人简介
    passWord: { type: String, required: true }, // 密码
    createdAt: { type: Date, default: Date.now }, // 创建时间
    updatedAt: { type: Date, default: Date.now } //修改时间
}, { versionKey: false })

module.exports = mongoose.model('User', UserSchema);
