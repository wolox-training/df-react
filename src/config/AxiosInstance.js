import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1/'
});

AxiosInstance.defaults.headers.common.Authorization = localStorage.token;

export default AxiosInstance;
