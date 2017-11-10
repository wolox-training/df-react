import AxiosInstance from '../config/AxiosInstance';

const AuthService = {
  logout: () => {
    localStorage.removeItem('token');
    return AxiosInstance.delete('/users/sessions');
  }
};

export default AuthService;
