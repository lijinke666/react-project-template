module.exports =  {
    //状态码
  HTTP_CODE: {
    "SUCCESS": 200,
    "ERROR": 500,
    "TIMEOUT": 503,
    "NOTFOUND": 404,
    "TOKEN": 400,            //token 失效
    "NOTDONE":300
  },
  //状态码对应 文字提示
  HTTP_RES_MESSAGES: {
    "SUCCESS": "接口请求成功:)",
    "ERROR": "接口请求失败:(",
    "TIMEOUT": "网络不给力,请求超时:(",
    "NOTFOUND": "接口404",
    "TOKEN": "无权限"
  },
  TIMEOUT:10000
}