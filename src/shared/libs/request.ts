import qs from 'qs'
import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosInstance,
} from 'axios'
import { message } from 'antd'
import NProgress from 'nprogress'
import { HTTP_RES_MESSAGES } from '../../../config/http'
import 'nprogress/nprogress.css'

const baseConfig = {
  timeout: Number(process.env.DEFAULT_TIMEOUT),
  paramsSerializer(params) {
    return qs.stringify(params, { arrayFormat: 'repeat' })
  },
}

const Api = axios.create({
  ...baseConfig,
  baseURL: '/',
})

function handleError(error: AxiosError) {
  if (error.response) {
    const { status } = error.response
    message.error(HTTP_RES_MESSAGES[status] || '网络异常,请稍后重试')
  } else {
    message.error('网络请求失败')
  }
  NProgress.done()
  NProgress.remove()
  return Promise.reject(error)
}

const requestMiddleware = (config: AxiosRequestConfig) => {
  NProgress.start()
  return config
}

const responseMiddleware = (response: AxiosResponse) => {
  NProgress.done()
  NProgress.remove()
  return response
}

const createInterceptors = (instances: AxiosInstance[]) => {
  instances.forEach(instance => {
    instance.interceptors.request.use(requestMiddleware, handleError)
    instance.interceptors.response.use(responseMiddleware, handleError)
  })
}

createInterceptors([Api])

export default Api
