/**
 * 配置文件
 * */
module.exports = {
    // 开发环境配置
    development: {
        mongo: {
            uri: 'mongodb://webyangpei.com:27017/admin'
        },
        mysql: {
          host: 'localhost',
          user: 'test',
          password: '123456',
          database: 'test'
        },
        port: 8080
    },
    // 生产环境配置
    production: {
        mongo: {
            uri: 'mongodb://39.105.65.92:27107/myBlog'
        },
        mysql: {
          host: 'localhost',
          user: 'test',
          password: '123456',
          database: 'test'
        },
        port: 8080
    }
}
