import qs from "qs";
import axios from "axios";
import { message } from "antd";
import NProgress from "nprogress";
import {
  HTTP_RES_MESSAGES,
  HTTP_CODE,
  DEFAULT_TIMEOUT
} from "../../../config/http.config";
import "nprogress/nprogress.css";

const instance = axios.create({
  timeout: DEFAULT_TIMEOUT,
  paramsSerializer(params) {
    return qs.stringify(params, { arrayFormat: "repeat" });
  }
});

function handleError(error) {
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
      case HTTP_CODE["NOTFOUND"]:
        message.error(msg || HTTP_RES_MESSAGES["NOTFOUND"]);
        break;
      case HTTP_CODE["UNAUTHORIZED"]:
        message.error(msg || HTTP_RES_MESSAGES["UNAUTHORIZED"]);
        break;
      default:
        message.error(msg || HTTP_RES_MESSAGES["ERROR"]);
    }
  } else {
    message.error(
      error && error.message ? error.message : HTTP_RES_MESSAGES["ERROR"]
    );
  }
  NProgress.done();
  NProgress.remove();
  return Promise.reject(error);
}

instance.interceptors.request.use(config => {
  NProgress.start();
  if (config.method.toLocaleUpperCase() === "GET") {
    // FIX IE 304 cache
    config.params = {
      ...config.params,
      _t: Date.now()
    };
  }
  return config;
}, handleError);

instance.interceptors.response.use(response => {
  NProgress.done();
  NProgress.remove();
  return response;
}, handleError);

export default instance;
