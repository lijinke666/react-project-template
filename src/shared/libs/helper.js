/*
 * @Author: jinke.li 
 * @Date: 2017-07-17 19:42:21 
 * @Last Modified by: Jinke.Li
 * @Last Modified time: 2018-04-16 18:25:16
 */
import {message} from "antd"
import NProgress from "nprogress"
import qs from "qs"
import { host, port, mock_host, mock_port } from "../../../config"
import {HTTP_RES_MESSAGES,HTTP_CODE} from "../../../config/http.config"
const mode = process.env.NODE_ENV || "DEV"
import "nprogress/nprogress.css"

/**
 * 这里提供基本的 get 和post 请求 三个方法 基于 Fetch, 默认开启跨域
 *  @param {Function} getMockJson 拉取模拟数据 用于开发的时候 测试   
 *  @param {Function} getJson    get请求
 *  @param {Function} postJson   post请求
 */

const helper = {
  /**
   * 拉取模拟数据  
   * @param {String} url 
   * @param {Object} params 
   * @return res
   */
  async getMockJson(url, params) {
    NProgress.start()
    const data = await (
      fetch(`${mock_host}:${mock_port}${url}${params ? '?' + (qs.stringify(params)) : ''}`, {
        method: "GET",
        mode: "cors",
      })
    )
    return helper.sendResponse(data)
  },
  
  /**
   * @name get 请求
   * @param {String} url 请求地址 支持跨域
   * @param {Object} params 请求参数 
   * @return res
   */
  async get(url, params) {
    NProgress.start()
    const data = await (
      fetch(`${host}:${port}${url}${params ? '?' + (qs.stringify(params)) : ''}`, {
        method: "GET",
        mode: "cors",
      })
    )
    return helper.sendResponse(data)
  },

  /**
   * @name post 请求
   * @param {String} url 请求地址 支持跨域
   * @param {Object} params 请求参数 
   * @param {Boolean}isForm 是否是表单提交 表单提交 如:formData 
   * @return res
   */
  async post(url, params, isForm = false) {
    const fetchConfig = {
      method: "POST",
      mode: "cors",
      body: isForm ? params : JSON.stringify(params)
    }
    const data = (await
      fetch(`${host}:${port}${url}`, fetchConfig)
    )
    return helper.sendResponse(data)
  },
  removeProgress() {
    NProgress.done()
    NProgress.remove()
  },
  //全局处理错误
  sendResponse(data) {
    const { status } = data
    switch (status) {
      case HTTP_CODE['SUCCESS']:
        helper.removeProgress()
        return data.json()
      case HTTP_CODE['ERROR']:
        helper.removeProgress()
        return message.error(HTTP_RES_MESSAGES['ERROR'])
      case HTTP_CODE['TIMEOUT']:
        helper.removeProgress()
        return message.error(HTTP_RES_MESSAGES['TIMEOUT'])
      default:
        helper.removeProgress()
        return data.json()
    }
  }
}
export default helper