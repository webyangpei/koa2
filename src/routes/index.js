/*
* @ use 前端的接口配置
* @ 逻辑层实现 /controllers/frontend/*
*/

const Router = require('koa-router');
const cors = require('koa-cors'); // 处理跨域

const router = new Router({ prefix: '/api' });
// cors 处理跨域
router.all('/*', async (ctx,next)=>{
	ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080');
	ctx.set('Access-Control-Allow-Credentials', true);
	// 后端允许cors跨域请求
	await cors();
	await next();
});


// 每一个模块的相关API - 根据表的相关性来设计

// 登录
const Users = require('./user');
router.use('/user', Users.routes(), Users.allowedMethods());

// 用户登录之后首页模块
const Home = require('./home');
router.use('/home', Home.routes(), Home.allowedMethods());

module.exports = router;




