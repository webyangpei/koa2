/**
 * 配置文件
 * */
module.exports = {
    // 开发环境配置
    development: {
        mongo: {
            uri: 'mongodb://localhost:27017/admin'
        },
        port: 8080
    },
    // 生产环境配置
    production: {
        mongo: {
            uri: 'mongodb://39.105.65.92.:27017/myBlog'
        },
        port: 8080
    }
}