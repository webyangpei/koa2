```
0. 在vue-cli中寻找递归启动端口号的办法 - 
记录 - 使用utils中的portIsInUse方法可成功检测端口是否被占用，方法是再启动一个服务尝试绑定此端口，
如果可以绑定则未占用，然后再释放这个端口，如果绑定则抛出错误。
但是在外界调用此端口时仍然提示端口占用。
推论 - net server启动的服务回调函数是异步的，无法实时
return结果。
解决 - 可尝试async await

1. 统一配置错误拦截 参考链接 http://neoyeelf.github.io/2018/04/29/koa%E4%B8%AD%E5%A6%82%E4%BD%95%E4%BC%98%E9%9B%85%E5%9C%B0%E5%A4%84%E7%90%86%E5%BC%82%E5%B8%B8/

2. mongoosejs API 文档地址

3.  session 和 redis服务的使用配置 参考链接 https://juejin.cn/post/6844904106721558536#heading-7

4. 继续编写用户相关API

```
