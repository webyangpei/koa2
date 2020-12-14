// 用户相关api
const router = require('koa-router')();
const { UsersController } = require('../controllers');

// 前端user Api
const routers = router
  .post('/register', UsersController.register)
  .get('/list', UsersController.getAllUser)
// .get('/logout',UsersController.logout)                                  // 用户退出
// .post('/login',UsersController.login)                                        // 用户登录
// .post('/register',UsersController.register)                                  // 用户注册
// .get('/personal',UsersController.personal)                                   // 用户个人中心信息
// .post('/api/user/put_avatar', upload.alioss, UsersController.put_avatar)  // 上传用户头像
// .put('/put_userinfo',UsersController.put_userinfo);                          // 更新用户个人信息

module.exports = routers;





