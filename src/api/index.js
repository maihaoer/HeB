/*
 * @Author: liuxihao
 * @Date: 2019-06-03 16:40:05
 * @LastEditTime: 2020-06-24 10:44:40
 * @Description: 接口封装
 */

import { axios } from '@/utils/request'
export let baseUrl = '' // 这里是一个默认的url，可以没有
export let origin = ''
const APP_ORIGIN = {
  production: 'http://test.rdc.finstone.com.cn/',
  // production: 'http://172.16.9.111:8080/',
  development: 'http://test.rdc.finstone.com.cn/',
  // development: 'http://172.16.9.111:8080/',
  alpha: 'http://192.168.137.189:8080/',
  // alpha: 'http://202.43.146.107:16091/',
  farmland: 'http://172.16.1.198:8080/'
}
// eslint-disable-next-line
switch (process.env.NODE_ENV) {
  case 'production':
    baseUrl = 'http://test.rdc.finstone.com.cn/api/' // 这里是江苏请求的域名
    origin = `${APP_ORIGIN.production}`
    break
  case 'development': // 注意这里的名字要和步骤二中设置的环境名字对应起来
    baseUrl = `${APP_ORIGIN.production}api/` // 北京江苏统一后端请求接口
    origin = `${APP_ORIGIN.development}`
    // baseUrl = 'http://172.16.9.54:8080/api/' // 陈阵IP
    // baseUrl = 'http://172.16.9.53:8080/api/' // 孙IP
    // baseUrl = 'http://test.rdc.finstone.com.cn/api/'
    origin = `${APP_ORIGIN.production}`
    break
  case 'alpha':
    baseUrl = `${APP_ORIGIN.alpha}api/` // 生产环境beijing这边配置的域名
    origin = `${APP_ORIGIN.alpha}`
    break
  case 'farmland':
    baseUrl = 'http://172.16.1.198:8080/api/' // 生产环境beijing这边配置的域名
    origin = `${APP_ORIGIN.farmland}`
    break
}

// 封装请求
export function postUtil (url, data, params, headers) {
  return axios({
    url: baseUrl + url,
    method: 'post',
    params: params || '',
    data: data || '',
    headers: headers || {}
  })
}
export function putUtil (url, data, params, headers) {
  return axios({
    url: baseUrl + url,
    method: 'put',
    params: params || '',
    data: data || '',
    headers: headers || {}
  })
}
export function getUtil (url, data, params, headers, responseType) {
  return axios({
    url: baseUrl + url,
    method: 'get',
    params: params || '',
    data: data || '',
    responseType: responseType,
    headers: headers || {}
  })
}
export function deleteUtil (url, data, params, headers) {
  // debugger
  return axios({
    url: baseUrl + url,
    method: 'delete',
    data: data || '',
    params: params || '',
    headers: headers
  })
}

export function getZhfwPath () {
  return iszhfw === 'true' ? 'zhfw/' : ''
}

const api = {
  Login: '/auth/login',
  Logout: '/auth/logout',
  ForgePassword: '/auth/forge-password',
  Register: '/auth/register',
  SendSms: '/account/sms',
  SendSmsErr: '/account/sms_err',
  // get my info
  UserInfo: '/user/info'
}
export default {
  api,
  origin,
  baseUrl
}
