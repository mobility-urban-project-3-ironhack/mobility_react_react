import React from 'react';
import { MDBContainer } from 'mdbreact';
import MapSearchComponent from './MapSearchComponent';

const key = process.env.REACT_APP_GOOGLE_MAP_KEY 

class Home extends React.Component {

  render() {
    return (    
    <MDBContainer className="text-center mt-3 pt-5 px-0">
      <MapSearchComponent 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${key}`}
        loadingElement={<div />}
        containerElement={<div/>}
        mapElement={<div />} />
   </MDBContainer>
  )}
}
  
export default Home;


