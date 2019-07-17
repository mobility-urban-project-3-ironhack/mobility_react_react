import axios from 'axios';
const REACT_APP_API_URL = 'http://192.168.20.232:3001';


const http = axios.create({
  baseURL: REACT_APP_API_URL,
  withCredentials: true
});

http.interceptors.response.use(
  response => response,
  error => {
    console.log(error)
    if (error.response.status === 403 || error.response.status === 401) {
      window.location.assign("/login");
    } else {
      return Promise.reject(error);
    }
  }
)

export default http;