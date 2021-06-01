// to config es2015 for the project
require('babel-register')
(
	{
		plugins: ['babel-plugin-transform-es2015-modules-commonjs'],
	}
)
require('babel-core')
require('babel-polyfill')
module.exports = require('./app.js')
