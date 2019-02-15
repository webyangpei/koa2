const koa = require('koa');
const config = require('./config/index');
const db = require('./rest/models/db');
console.log(`配置: ${config.port}`)

const { frontendRouter } = require('./rest/index');

const app = new koa();
app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// router
app.use(require('./rest/middlewares/response'));
app.use(require('./rest/middlewares/filter'));
// app.use(backendRouter.routes())
//    .use(backendRouter.allowedMethods());
app.use(frontendRouter.routes())
   .use(frontendRouter.allowedMethods());

app.listen(config.port)
console.log('Server is running listen on port: ' + config.port)

module.exports = app;
