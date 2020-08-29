const router = require('koa-router')();
const { HomeController } = require('../../controllers/frontendRouter/index');

// 前端home Api
const routers = router
	.get('/', HomeController.query)
	.get('/api/query', HomeController.query)

module.exports = routers;





