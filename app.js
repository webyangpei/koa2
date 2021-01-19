const path = require('path');
const Koa = require('koa');
const config = require('./config/index');
const convert = require('koa-convert');
const koaStatic = require('koa-static');
const koaLogger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session-minimal');
const jwt = require('jsonwebtoken');
const {connectDB} = require('./src/models/db');
const {API} = require('./src/index');
const tokenConfig = { privateKey: 'xxxxxxx' }; // 设置加密私钥
const createHandler = require('github-webhook-handler');
const runCommand = require('child_process').spawn;


const app = new Koa();
// 监听远程仓库event事件
const handler = createHandler({ path: './deploy', secret: 'koa2_123456' });

// 配置session中间件
app.use(session({
	key: 'username',          // cooike中存储的键名 用户登录所使用的cooike
	                           // 支持在浏览器端生成一个cookie
	cookie: {                 // 与 cookie 相关的配置
		domain: 'webyangpei.com',    // 写 cookie 所在的域名
		path: '/',              // 写 cookie 所在的路径
		maxAge: 1000 * 30,      // cookie 有效时长 30s
		httpOnly: true,         // 是否只用于 http 请求中获取
		overwrite: false        // 是否允许重写
	}
}));

// 配置控制台日志中间件
app.use(convert(koaLogger()));

// 配置ctx.body解析中间件
app.use(bodyParser());

//  配置静态资源加载中间件
app.use(convert(koaStatic(
	path.join(__dirname, './../static')
)));

// 配置响应中间件
app.use(require('./src/middlewares/response'));

// 配置 统一try catch处理中间件
app.use(require('./src/middlewares/filter'));


// 拦截请求
app.use(API.routes()).use(API.allowedMethods());


// 等待数据库连接成功 然后启动程序
connectDB().then(() => {
	app.listen(config.port, () => {
		console.log('Server is running listen on port: ' + config.port)
	})

})

// 监听报错
handler.on('error', function (err) {
	console.error('Error:', err.message)
});

// 监听到push事件的时候执行我们的自动化脚本
handler.on('push', function (event) {
	console.log('Received a push event for %s to %s', event.payload.repository.name, event.payload.ref);
		runCommand('sh', ['./deploy.sh'], function( txt ){
			console.log(txt);
		});
});

module.exports = app;
