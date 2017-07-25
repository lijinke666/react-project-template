const mode = process.env.NODE_ENV || "DEV"

//前后端 开发环境 生产环境  host port 配置

const options = {
  host: mode == "DEV" ? "http://localhost" : "http://localhost",          //接口请求 host
  dev_port:666,                   //web-devServer 的 开发端口
  port:9999,                      //接口请求的 端口
  mock_host:"http://localhost",   //模拟数据服务器 host
  mock_port:8080,                 //模拟数据服务器 port
  origin:"xxxx",
  copyright:"xxxx"                //你的版权说明
}

module.exports = options
