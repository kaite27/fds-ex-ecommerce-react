import axios from 'axios';

const mallAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

mallAPI.interceptors.request.use(config => {
  if (localStorage.getItem('token')) {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  }
  return config;
});

export default mallAPI;
