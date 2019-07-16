import React from 'react';
import { MDBContainer } from 'mdbreact';
import MapSearchComponent from './MapSearchComponent';

// No se porque falla el .env
const key = process.env.GOOGLE_MAP_KEY || "AIzaSyDi-w0iYfqgZOOELu3fJD8vF6yTy7Jvbm4"

const prueba = process.env.PRUEBA

class Home extends React.Component {

  render() {
    console.log(prueba)
    return (    
    <MDBContainer className="text-center mt-3 pt-5 px-0">
      <MapSearchComponent 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${key}`}
        loadingElement={<div />}
        containerElement={<div/>}
        mapElement={<div />}


      />
   </MDBContainer>
  )}
}

export default Home;


