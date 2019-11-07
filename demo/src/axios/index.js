import store from '../store/index'
import axios from 'axios'
// http request拦截器 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  //window.localStorage.getItem("accessToken") 获取token的value
  let token
  if(JSON.stringify(store.getState()).length>2) {
    if(store.getState().user) {
      token = store.getState().user.value.token
    }
  }
  if (token) {
      //将token放到请求头发送给服务器,将tokenkey放在请求头中
      config.headers.accessToken = token
      config.headers.Authorization = token
  }
  return config;

}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export default axios