/**
 * use 数据库连接
 * @type {*|Mongoose}
 */
const mongoose = require('mongoose');
const config = require('../../config/common');

const dbConfig = config[process.env.NODE_ENV || 'development'];

export function connectDB() {
  return new Promise((resolve, reject) => {
    mongoose.connect(dbConfig.mongo.uri, {useNewUrlParser: true, useUnifiedTopology: true})

    // 连接成功
    mongoose.connection.on('connected', () => {
      console.log('Mongoose connection open to ' + dbConfig.mongo.uri);
      resolve()
    });

    // 连接失败
    // mongoose.connection.on('connected', err => {
    //   console.log('Mongoose connection error ' + err);
    //   reject()
    // });

    // 断开链接
    mongoose.connection.on('disconnected', () => {
      console.log('Mongoose connection disconnected');
      reject()
    })
  })
}


/**
 * use 数据库连接
 * @type {*|mysql}
 */

// const mysql = require('mysql');
// const config = require('../../config/common');
// const connection = mysql.createConnection(config.development.mysql);

// connection.connect();
