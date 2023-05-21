import axios, { AxiosError } from 'axios';

// 创建一个 Axios 实例
const instance = axios.create({
  baseURL: '/api', // 设置基本的请求URL，可以根据需要进行调整
  timeout: 5000 // 设置请求超时时间，可以根据需要进行调整
});

// 请求拦截器
instance.interceptors.request.use(
  (request) => {
    // 可在此处添加请求前的处理逻辑，如设置请求头等
    // request.headers = {};
    return request;
  },
  (error) => {
    // 请求错误处理
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 可在此处添加响应成功的处理逻辑
    const result = response.data;
    // code 200 业务接口返回正常
    if (result.code === 200) {
      return Promise.resolve(result.data);
    }
    // 业务处理失败
    return Promise.reject(new Error(result.msg));
  },
  (error: AxiosError) => {
    // 响应错误处理
    if (error.response?.status === 401) {
      // history.push("/login");
    }
    return Promise.reject(error);
  }
);

export default instance;
