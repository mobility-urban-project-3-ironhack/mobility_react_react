import http from './BaseService';

const search = request =>  {
  console.log(request)
  const coordinates = {origin : request.origin.coords, destination : request.destination.coords}
  console.log(coordinates)
   return http.post('/search', coordinates)
    .then(res => console.log(res.data))
  }

  
export default {
  search,
}