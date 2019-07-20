

import http from './BaseService';

const search = request => http.post('/search', {
  origin : request.origin.coords,
  destination : request.destination.coords
})


export default {
 search,
}