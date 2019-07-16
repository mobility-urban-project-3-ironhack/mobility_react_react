import http from './BaseService';

const search = request =>  http.post('/search', request)
  
export default {
  search,
}