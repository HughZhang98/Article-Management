import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // 设置基础URL
  timeout: 5000, // 设置超时时间
})

//拦截器
http.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  return config
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

//响应器
http.interceptors.response.use((response) => {
  // 对响应数据做点什么
  // 2xx 范围内的状态码都会触发该函数
  return response
}, (error) => {
  // 对响应错误做点什么
  //超出 2xx 范围内的状态码都会触发该函数
  return Promise.reject(error)
})

export default http;