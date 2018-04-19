/**
 *  @name development
 ** @description 前后端 开发环境 生产环境  host port 配置
 */
const options = {
  host: "http://localhost",        //接口请求 host
  devPort:8080,                   //web-devServer 的 开发端口
  port:9999,                      //接口请求的 端口
  mockHost:"http://localhost",   //模拟数据服务器 host
  mockPort:8080,                 //模拟数据服务器 port
  origin:"xxxx",
  copyright:"xxxx"                //你的版权说明
}

module.exports = options
