/*
* @ use 前端的接口配置
* @ 逻辑层实现 /controllers/frontend/*
*/

const Router = require('koa-router');
const cors = require('koa-cors')

const router = new Router()
// cors 处理跨域
router.all('/*', async (ctx,next)=>{
	ctx.set("Access-Control-Allow-Origin", "*");
	// 后端允许cors跨域请求
	await cors();
	await next();
});

const home = require('./home');
Router.use('/', home.routes({ prefix: '/api' }), home.allowedMethods());

module.exports = router;




