/**
 * 封装请求
 */
import axios from "axios"

const instance  = axios.create({
  baseURL:"http://",
  timeout:1000,
  withCredentials:true
})

export function request(config) {
  return instance(config)
}