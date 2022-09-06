/**
 * axios二次封装
 */
// 引入axios 和 进度条 nprogress
import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import { Message } from "element-ui";
// 创建axios实例
const baseAxios = axios.create();

baseAxios.defaults.baseURL = "http://124.71.103.98:8091"; // 请求的接口
baseAxios.defaults.timeout = 5000; // 设置请求时间(5s)
baseAxios.defaults.withCredentials = true; // 跨域请求时，是否需要使用凭证,登录检验
baseAxios.defaults.headers.post["Content-Type"] =
  "application/json;charset=UTF-8"; // post请求头
baseAxios.defaults.headers.get["Cache-Control"] = "no-cache"; // 设置IE不缓存
baseAxios.defaults.headers.get["Content-Type"] =
  "application/json;charset=UTF-8";

/**
 * 请求失败后统一处理
 * @param status  请求失败的状态码
 */
const errorHandle = (status, other) => {
  console.log("other", other);
  // 状态码判断
  switch (status) {
    case 400:
      Message.error({ message: other });
      break;
    case 401:
      Message.error({ message: "登录过期,请重新登录!" });
    case 403:
      Message.error({ message: "登录过期,请重新登录!" });
      break;
    case 404:
      Message.error({ message: "请求资源不存在!" });
      break;
    case 500:
      Message.error({ message: other });
      break;
    default:
      console.log(other);
  }
};

/**
 * interceptors:拦截器
 * 请求拦截器:在发起请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
 * 客户端->[请求拦截器]-> 服务器
 * token检验（JWT）：接收到服务器的token，存储到vuex/本地存储中，每次向服务器发送请求，都带token
 * config：发送请求的请求配置项
 */
baseAxios.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("token");
    token && (config.headers.Authorization = token);
    // 检测到程序发送请求，请求拦截器检测到，进度条开始行动
    nprogress.start();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * 响应拦截器:服务器的数据已经返回了，可以干一些事情
 *
 */
baseAxios.interceptors.response.use(
  // 请求成功
  (res) => {
    // 服务器数据返回进度条结束
    nprogress.done();
    return res.data;
  },
  // 请求失败
  (error) => {
    const { response } = error;
    if (response) {
      // 请求发出,不在2xx范围！
      errorHandle(response.status, response.data.message);
      return Promise.reject(response);
    } else {
      // 服务器没有返回结果 分两种情况：断网/服务器崩了
      if (!window.navigator.onLine) {
        // 断网处理
        return;
      } else {
        // 终止Promise链
        Promise.reject(error);
      }
    }
  }
);

//对外暴露二次封装的axios
export default baseAxios;
