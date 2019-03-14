const path = require('path');
const Koa = require('koa');
const config = require('./config/index');
const convert = require('koa-convert');
const koaStatic = require('koa-static');
const session = require('koa-session-minimal');
const koaLogger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const db = require('./rest/models/db');
const { frontendRouter } = require('./rest/index');

const app = new Koa();

// session存储配置
// const sessionMysqlConfig = {
// 	// user: config.database.USERNAME,
// 	// password: config.database.PASSWORD,
// 	// database: config.database.DATABASE,
// 	// host: config.database.HOST
// };

// 配置session中间件
// app.use(session({
// 	key: 'USER_SID',
// 	store: new MysqlStore(sessionMysqlConfig)
// }));

// 配置控制台日志中间件
app.use(convert(koaLogger()));

// 配置ctx.body解析中间件
app.use(bodyParser());

//  配置静态资源加载中间件
app.use(convert(koaStatic(
	path.join(__dirname, './../static')
)));

// 监听响应时间 log中间件中应该有此功能
// app.use(async (ctx, next) => {
//     const start = new Date();
//     await next();
//     const ms = new Date() - start;
//     console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
// });

// 配置响应中间件
app.use(require('./rest/middlewares/response'));

// 配置 统一try catch处理中间件
app.use(require('./rest/middlewares/filter'));


// 初始化路由中间件
// app.use(backendRouter.routes())
//    .use(backendRouter.allowedMethods());
app.use(frontendRouter.routes()).use(frontendRouter.allowedMethods());


//  监听启动端口
app.listen(config.port)
console.log('Server is running listen on port: ' + config.port)

module.exports = app;
