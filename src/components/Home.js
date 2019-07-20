import React from 'react';
import { MDBContainer } from 'mdbreact';
import MapSearchComponent from './MapSearchComponent';


const key = process.env.REACT_APP_GOOGLE_MAP_KEY 

class Home extends React.Component {


/* 
  state={
    minimice: false,
  }
 */
  render() {
    return (    
    <MDBContainer className="text-center mt-3 pt-5 px-0 prueba" color='primary-color'>
      <MapSearchComponent 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${key}`}
        loadingElement={<div />}
        containerElement={<div/>}
        mapElement={<div />} />
    </MDBContainer>
  )}
}
  
export default Home;

/* 
        <button className='btn btn-danger' onClick={()=>{this.setState({minimice: true},
           ()=>{console.log('minimie')})}}>minimice</button>
        <div 
        className={(!this.state.minimice) 
          ? 'w-100 d-flex flex-column bg-success prueba'
          : 'w-25 d-flex flex-column bg-primary prueba' }
        style={{  
          height: '300px',
        }}>
sadfas
        </div> */
