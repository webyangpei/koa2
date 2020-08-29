/**
 * use 数据库连接
 * @type {*|Mongoose}
 */
// const mongoose = require('mongoose');
// const config = require('../../config/common');
//
// const dbConfig = config[process.env.NODE_ENV || 'development'];
//
// mongoose.connect(dbConfig.mongo.uri, { useNewUrlParser: true })
//
// // 连接成功
// mongoose.connection.on('connected',  () => {
//     console.log('Mongoose connection open to ' + dbConfig.mongo.uri);
// });
//
// // 连接失败
// mongoose.connection.on('connected',  err => {
//     console.log('Mongoose connection error ' + err);
// });
//
// // 断开链接
// mongoose.connection.on('disconnected', () => {
//     console.log('Mongoose connection disconnected');
// })

/**
 * use 数据库连接
 * @type {*|mysql}
 */

const mysql = require('mysql');
const config = require('../../config/common');
const connection = mysql.createConnection(config.development.mysql);

connection.connect();