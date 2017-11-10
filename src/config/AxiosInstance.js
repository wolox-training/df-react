import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1/'
});

AxiosInstance.interceptors.response.use(
  config => config,
  error => {
    localStorage.removeItem('token');
    Promise.reject(error);
  }
);

AxiosInstance.defaults.headers.common.Authorization = localStorage.token;

export default AxiosInstance;
