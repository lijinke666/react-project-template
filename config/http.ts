export const HTTP_CODE: Record<string, number> = {
  SUCCESS: 200,
  ERROR: 500,
  TIMEOUT: 503,
  NOTFOUND: 404,
  UNAUTHORIZED: 401,
};

export const HTTP_RES_MESSAGES: Record<number, string> = {
  [HTTP_CODE.SUCCESS]: '接口请求成功',
  [HTTP_CODE.ERROR]: '接口请求失败',
  [HTTP_CODE.TIMEOUT]: '网络不给力,请求超时',
  [HTTP_CODE.NOTFOUND]: '接口404',
  [HTTP_CODE.UNAUTHORIZED]: '无权限',
};
