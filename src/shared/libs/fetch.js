/*
 * @Author: jinke.li 
 * @Date: 2017-07-17 19:42:21 
 * @Last Modified by: Jinke.Li
 * @Last Modified time: 2018-04-16 18:25:16
 */
import { message } from "antd";
import NProgress from "nprogress";
import qs from "qs";
import { host, port, mockHost, mockPort } from "../../../config";
import {
  HTTP_RES_MESSAGES,
  HTTP_CODE,
  TIMEOUT
} from "../../../config/http.config";
import * as Cookies from "js-cookie";
import axios from "axios";

const instance = axios.create();

import "nprogress/nprogress.css";

instance.defaults.timeout = TIMEOUT;
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
    NProgress.start();
    const data = await fetch(
      `${mockHost}:${mockPort}${url}${
        params ? `?${qs.stringify(params)}` : ""
      }`,
      {
        method: "GET",
        mode: "cors"
      }
    );
    helper.removeProgress();
    return data.json();
  },

  /**
   * @name post 请求
   * @param {String} url 请求地址 支持跨域
   * @param {Object} params 请求参数
   * @param {Boolean}isForm 是否是表单提交 表单提交 如:formData
   * @return res
   */
  async postMockJson(url, params, isForm = false) {
    NProgress.start();
    const fetchConfig = {
      method: "POST",
      mode: "cors",
      body: isForm ? params : JSON.stringify(params)
    };
    const data = await fetch(`${mockHost}:${mockPort}${url}`, fetchConfig);
    helper.removeProgress();
    return data.json();
  },
  /**
   * @name get 请求
   * @param {String} String 请求地址 支持跨域
   * @param {Object} params 请求参数
   * @return res
   */
  async get(url, params) {
    NProgress.start();
    helper.setToken();
    return axios
      .get(`${host}${url}:${port}`, params)
      .then(helper.handleResponse)
      .catch(helper.handleError);
  },

  /**
   * @name post 请求
   * @param {String} String 请求地址 支持跨域
   * @param {Object} params 请求参数
   * @return res
   */
  async post(url, params = {}) {
    NProgress.start();
    helper.setToken();
    return axios
      .post(`${host}${url}:${port}`, params)
      .then(helper.handleResponse)
      .catch(helper.handleError);
  },
  setToken() {
    const TOKEN = Cookies.get("token");
    axios.defaults.headers.common["Authorization"] = TOKEN;
  },
  removeProgress() {
    NProgress.done();
    NProgress.remove();
  },
  //全局处理错误
  handleError(error) {
    if (error.response) {
      const {
        status,
        data: { msg }
      } = error.response;
      switch (status) {
        case HTTP_CODE["ERROR"]:
          message.error(msg || HTTP_RES_MESSAGES["ERROR"]);
          break;
        case HTTP_CODE["TIMEOUT"]:
          message.error(msg || HTTP_RES_MESSAGES["TIMEOUT"]);
          break;
        case HTTP_CODE["404"]:
          message.error(msg || HTTP_RES_MESSAGES["NOTFOUND"]);
          break;
        case HTTP_CODE["TOKEN"]:
          message.error(msg || HTTP_RES_MESSAGES["TOKEN"]);
          break;
        default:
          message.error(msg || HTTP_RES_MESSAGES["ERROR"]);
      }
    } else {
      message.error(
        error && error.message ? error.message : HTTP_RES_MESSAGES["ERROR"]
      );
    }
    helper.removeProgress();
  },
  //全局处理错误
  handleResponse({ data, status }) {
    if (status >= HTTP_CODE["SUCCESS"] && status < HTTP_CODE["NOTDONE"]) {
      helper.removeProgress();
      return data;
    } else {
      helper.removeProgress();
      message.error("服务器出错!");
      throw new Error("服务器出错!");
    }
  }
};
export default helper;
