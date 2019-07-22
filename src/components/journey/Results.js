import React from 'react';
import { MDBContainer } from 'mdbreact';
import MapComponent from './MapComponent';
import CardExample from '../misc/JourneyCard';
import ListType from './ListType'
import { SearchContext } from '../../contexts/SearchStore';

const key = process.env.REACT_APP_GOOGLE_MAP_KEY 

class Results extends React.Component {

  state = {
    waypoints: [],
    directions: [],
    minimize: false,
    sizeIco: '128x128',
  }

  onMinIco () {
    this.setState({
      minimize: true,
      sizeIco: '32x32',
      class: 'prueba'
    })
  }

  componentDidMount() {   
    this.CreateRoute()    
  }

  CreateRoute(){

    const route = this.props.dataRoute

    console.log('dataRoute' + JSON.stringify(this.props.dataRoute))

    for (let i = 0; i <= route.length - 2; i++) {
      if(route[i+1].transitMode === 'moto' || route[i+1].transitMode === 'scooter') { 
        route[i+1].transitMode = 'driving'
      }
      const direction = new window.google.maps.DirectionsService()
      direction.route({
        origin: new window.google.maps.LatLng(route[i].lat, route[i].lng),
        destination: new window.google.maps.LatLng(route[i + 1].lat, route[i + 1].lng),
        waypoints: [],
        travelMode: route[i + 1].transitMode.toUpperCase(),
      }, (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: [...this.state.directions, result],
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      })
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.dataRoute !== this.props.dataRoute ) {
      this.setState({directions: []}, this.CreateRoute())
    }
  }

  render() {
    return (    
    <MDBContainer fluid className="text-center px-1 bg-greenMU">
      {this.state.directions.length>=1 && (
        <MapComponent 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${key}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px`, width:`100%` }} />}
        mapElement={<div style={{ height: `100%`, width:`100%` }} />}
        defaultZoom={15}
        arrDirections={this.state.directions}
        afterMapMount={this.afterMapMount}
        dataMap={this.props.dataRoute}
        centerMap={this.props.request.origin.coords}
        />  
      )}
      {this.props.dataRecomendation && (<div>{
      <CardExample 
        type='driving' 
        data={this.props.dataRecomendation} 
        isFavorite={true}
      />}</div>)}
      <ListType search={this.props.search}/>
   </MDBContainer>
  )}
}

const ResultsWithSearchStore = searchProps => (
  <SearchContext.Consumer>
    {consumerProps => (<Results {...consumerProps} {...searchProps} />)}
  </SearchContext.Consumer>
)

export default ResultsWithSearchStore;


