import axios from 'axios';

// const dinamic_URL = () => {
//    const url = window.location.href.split('/')
//    return `http://${url[2].substr(0, url[2].length-1)}1`
// }

const REACT_APP_API_URL = 'http://localhost:3001'

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