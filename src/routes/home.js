const router = require('koa-router')();
const { HomeController } = require('../controllers');

// 前端home Api
const routers = router
	.get('/', HomeController.query)
	.get('/query', HomeController.query)

module.exports = routers;





