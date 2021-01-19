const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let  count = 0;
let countId = { type: Number, required: true, default: () => count++ }

const RoleSchema = new Schema({
	roleId: countId, // 用户ID
	roleName: { type: String, required: true }, // 角色名称
	rolekey: { type: String, required: true }, // 角色Key
	createdAt: { type: Date, default: Date.now }, // 创建时间
	updatedAt: { type: Date, default: Date.now } //修改时间
}, { versionKey: false })

module.exports = mongoose.model('Role', RoleSchema);
