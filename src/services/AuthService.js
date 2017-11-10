import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1/'
});

const AuthService = {
  logout: () => {
    localStorage.removeItem('token');
    return axiosInstance.delete('/users/sessions');
  }
};

export default AuthService;
