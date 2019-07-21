import http from './BaseService';

const list = () => http.get('/stats')
  .then(journeys => journeys.data)

  export default {
    list
  }