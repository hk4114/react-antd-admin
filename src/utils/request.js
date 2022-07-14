import axios from 'axios'
import { stringify } from 'qs'
import { message } from 'antd'
import { getToken } from '@/utils/auth'

const pendingRequest = new Map()

function generateReqKey(config) {
  const { method, url, data } = config
  return [method, url, stringify(data)].join('&')
}

function addPendingRequest(config) {
  const requestKey = generateReqKey(config)
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken(cancel => {
      if (!pendingRequest.has(requestKey)) {
        pendingRequest.set(requestKey, cancel)
      }
    })
}

function removePendingRequest(config) {
  const requestKey = generateReqKey(config)
  if (pendingRequest.has(requestKey)) {
    const cancelToken = pendingRequest.get(requestKey)
    cancelToken(requestKey)
    pendingRequest.delete(requestKey)
  }
}

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
    removePendingRequest(config) // 检查是否存在重复请求，若存在则取消已发的请求
    addPendingRequest(config) // 把当前请求信息添加到pendingRequest对象中
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
    removePendingRequest(response.config) // 从pendingRequest对象中移除请求
    if (response.data.success === false) {
      message.error(response.data.message)
    }
    return response && response.data
  },
  error => {
    removePendingRequest(error.config || {}) // 从pendingRequest对象中移除请求
    if (axios.isCancel(error)) {
      console.log('已取消的重复请求：' + error.message)
    } else {
      // 添加异常处理
      // const { status } = error.response;
      // if (status === 403) {}
    }
    return Promise.reject(error)
  }
)

const rewirteGet = request.get
request.get = function (url, data, ...any) {
  let query = stringify(data, { addQueryPrefix: true })
  return rewirteGet(url + query, ...any)
}

export default request
