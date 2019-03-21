const router = require('koa-router')();
// const upload = require('../middlewares/upload');
const { HomeController } = require('../../controllers/frontendRouter/index');

// 前端sinn Api
const routers = router
	.get('/', HomeController.query)
	.get('/api/query', HomeController.query)

module.exports = routers;





