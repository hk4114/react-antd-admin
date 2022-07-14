import axios from 'axios'
import { stringify } from 'qs'
import { message } from 'antd'
import { getToken } from '@/utils/auth'

const request = axios.create({
  baseURL: '',
  timeout: 6000,
  retry: 4,
  maxRedirects: 3,
  headers: {
    'Content-Type': ' application/json;charset=UTF-8'
  },
  retryDelay: 1000
})

//请求拦截
request.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) {
      config.headers['Authorization'] = token
    }
    return config
  },
  error => {
    message.error(error)
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  response => {
    if (response.data.success === false) {
      message.error(response.data.message)
    }
    return response && response.data
  },
  error => {
    // const { status } = error.response;
    // if (status === 403) {}
    return Promise.reject(error)
  }
)

const rewirteGet = request.get
request.get = function (url, data, ...any) {
  let query = stringify(data, { addQueryPrefix: true })
  return rewirteGet(url + query, ...any)
}

export default request
