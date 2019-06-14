const HTTP_CODE = {
  "SUCCESS": 200,
  "ERROR": 500,
  "TIMEOUT": 503,
  "NOTFOUND": 404,
  "UNAUTHORIZED": 400,            //token 失效
}

const HTTP_RES_MESSAGES = {
  [HTTP_CODE.SUCCESS]: "接口请求成功",
  [HTTP_CODE.ERROR]: "接口请求失败",
  [HTTP_CODE.TIMEOUT]: "网络不给力,请求超时",
  [HTTP_CODE.NOTFOUND]: "接口404",
  [HTTP_CODE.UNAUTHORIZED]: "无权限"
}

module.exports = {
  //状态码
  HTTP_CODE,

  //状态码对应 文字提示
  HTTP_RES_MESSAGES,

  DEFAULT_TIMEOUT: 60 * 1000
}
