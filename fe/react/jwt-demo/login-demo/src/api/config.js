import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
  timeout: 5000,
});

instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    // 请求配置对象
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  res => {
    return res.data;
  }
)

export default instance;