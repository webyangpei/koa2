const http = require('http')
const spawn = require('child_process').spawn
const createHandler = require('github-webhook-handler')
const handler = createHandler({ path: '/', secret: 'koa2_123456' })

http.createServer((req, res) => {
	handler(req, res, function(err) {
		console.log(req, res, '打印了什么？')
		res.statusCode = 404
		res.end('no such location')
	})
}).listen(7777)

handler.on('error', err => {
	console.error('Error:??', err.message)
})

handler.on('push', e => {
	console.log('这个e是什么', e)
	try {
		const s = spawn('sh', ['./deploy.sh'], {
			cwd: `../${e.payload.repository.name}`
		})
		s.stdout.on('data', (data) => {
			console.log(`${e.payload.repository.name}: ${data}`);
		})
		s.stderr.on('data', (data) => {
			console.log(`${e.payload.repository.name}: ${data}`);
		});
		console.log(e.payload.repository.name, 'has rebuild');
	} catch (err) {
		console.log('打印错误22', err)
	}
})
