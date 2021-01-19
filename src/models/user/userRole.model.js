const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// _id 为主键

const UserSchema = new Schema({
	userId: { type: Number }, // 用户ID
	userName: { type: String, required: false }, // 用户名
	roleId: { type: Number, required: false }, // 角色Id
	createdAt: { type: Date, default: Date.now }, // 创建时间
	updatedAt: { type: Date, default: Date.now } // 修改时间
}, { versionKey: false })

module.exports = mongoose.model('User', UserSchema);
