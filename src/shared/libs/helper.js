/*
 * @Author: jinke.li 
 * @Date: 2017-07-17 19:42:21 
 * @Last Modified by:   jinke.li 
 * @Last Modified time: 2017-07-17 19:42:21 
 */
import obj2Query from "libs/params"
import Message from "shared/components/Message"
import NProgress from "nprogress"
import { host, port, mock_host, mock_port } from "../../../config"
const mode = process.env.NODE_ENV || "DEV"
import "nprogress/nprogress.css"

/**
 * 这里提供基本的 get 和post 请求 三个方法 基于 Fetch, 默认开启跨域
 *  @param {Function} getMockJson 拉取模拟数据 用于开发的时候 测试   
 *  @param {Function} getJson    get请求
 *  @param {Function} postJson   post请求
 */

const helper = {
  //状态码
  resCode: {
    "SUCCESS": 200,
    "ERROR": 500,
    "TIMEOUT": 503
  },
  //状态码对应 文字提示
  resMessage: {
    "SUCCESS": "接口请求成功:)",
    "ERROR": "接口请求失败:(",
    "TIMEOUT": "网络不给力,请求超时:("
  },
  jsonToString(params) {
    return obj2Query.toQueryString(params)
  },
  /**
   * 拉取模拟数据  
   * @param {any} url 
   * @param {any} params 
   */
  async getMockJson(url, params) {
    NProgress.start()
    const data = await (
      fetch(`${mock_host}:${mock_port}${url}${params ? '?' + (this.jsonToString(params)) : ''}`, {
        method: "GET",
        mode: "cors",
      })
    )
    return this.sendResponse(data)
  },
  /**
   * get 请求
   * params {url} String 请求地址 支持跨域
   * parmas {params} obj 请求参数 
   */

  async getJson(url, params) {
    NProgress.start()
    const data = await (
      fetch(`${host}:${port}${url}${params ? '?' + (this.jsonToString(params)) : ''}`, {
        method: "GET",
        mode: "cors",
      })
    )
    return this.sendResponse(data)
  },

  /**
   * post 请求
   * params {url} String 请求地址 支持跨域
   * parmas {params} obj 请求参数 
   * parmas {isForm} boolean 是否是表单提交 表单提交 如:formData 
   */

  async postJson(url, params, isForm = false) {
    const fetchConfig = {
      method: "POST",
      mode: "cors",
      body: isForm ? params : JSON.stringify(params)
    }
    const data = (await
      fetch(`${host}:${port}${url}`, fetchConfig)
    )
    return this.sendResponse(data)
  },
  removeProgress() {
    NProgress.done()
    NProgress.remove()
  },
  //全局处理错误
  sendResponse(data) {
    const { status } = data
    switch (status) {
      case this.resCode['SUCCESS']:
        this.removeProgress()
        return data.json()
      case this.resCode['ERROR']:
        this.removeProgress()
        return Message.error(this.resMessage['ERROR'])
      case this.resCode['TIMEOUT']:
        this.removeProgress()
        return Message.error(this.resMessage['TIMEOUT'])
      default:
        this.removeProgress()
        return data.json()
    }
  }
}
export default helper