// 用户相关api
const router = require('koa-router')();
const {UsersController} = require('../controllers');

// 前端user Api
const routers = router
  .post('/register', UsersController.register) // 用户注册
  // .delete('/register', UsersController.deleteByIds) // 批量删除用户 - 支持批量
  .get('/list', UsersController.getAllUser) // 获取用户列表
  // .get('/logout', UsersController.logout)   // 用户退出
  .get('/login', UsersController.login)   // 用户登录
// .get('/personal',UsersController.personal)                                   // 用户个人中心信息
// .post('/api/user/put_avatar', upload.alioss, UsersController.put_avatar)  // 上传用户头像
// .put('/put_userinfo',UsersController.put_userinfo);                          // 更新用户个人信息

module.exports = routers;





