import http from './BaseService';

// const search = request =>  http.post('/search', request)

const search = request =>  {
  console.log(request)
  const coordinates = {origin : request.origin.coords, destination : request.destination.coords}
  console.log(coordinates)
   return http.post('/search', coordinates)
  }
  
export default {
  search,
}