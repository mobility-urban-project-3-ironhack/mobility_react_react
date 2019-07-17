import React from 'react';
import { MDBContainer } from 'mdbreact';
import MapComponent from './MapComponent';
import data from '../data'
import CardExample from './misc/JourneyCard';
import { SearchContext } from '../contexts/SearchStore';

const key = process.env.REACT_APP_GOOGLE_MAP_KEY 

class Results extends React.Component {

  state = {
    map: null,
    journey: {
      origin: {
        lat: 40.412651,
        lng: -3.707505
      },
      destination: {
        lat: 40.417766,
        lng: -3.753839
      },
      waypoints: [],
      directions: ''
    },

    userLocation: {
      lat: 40.416766,
      lng: -3.703839
    },
    directions: '',
  }

  componentWillMount (){
    navigator.geolocation.getCurrentPosition(pos => {
      this.setState({
        userLocation: {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
      }})
    });
  }

  journeyDrawingMap(e) {
    console.log(e.target.dataset.waypoints)
  }


  componentDidMount() {
   setTimeout(this.afterMapMount.bind(this), 1000)
  }

  afterMapMount() {
    const DirectionsService = new window.google.maps.DirectionsService();
    const {origin, destination, waypoints} = this.state.journey

    DirectionsService.route({
      origin: new window.google.maps.LatLng(origin.lat, origin.lng),
      destination: new window.google.maps.LatLng(destination.lat, destination.lng),
      waypoints: waypoints.map(waypoint => {
        return {
          location: new window.google.maps.LatLng(waypoint.lat, waypoint.lng),
          stopover: true
          }
      }),
      travelMode: window.google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result,
        });
      } else {
        console.error(`error fetching directions ${result}`);
      }
    })
  }

  render() {
    
    return (    
    <MDBContainer className="text-center mt-3 pt-5 px-0">
      <MapComponent 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${key}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px`, width:`100%` }} />}
        mapElement={<div style={{ height: `100%`, width:`100%` }} />}
        defaultZoom={15}
        userLocation={this.state.userLocation}
        isMarkerShown={this.state.isMarkerShown}
        directions={this.state.directions}
        afterMapMount={this.afterMapMount}
        defaultOptions={{
          streetViewControl: false,
          scaleControl: false,
          mapTypeControl: false,
          panControl: false,
          zoomControl: false,
          rotateControl: false,
          fullscreenControl: false
        }}
      />
      <p>results: {this.props.results}</p>
      {Object.keys(data).map((type, i) => (<CardExample type={type} data={ data[type]} key={i } journeyDrawingMap={this.journeyDrawingMap} />))}
   </MDBContainer>
  )}
}

const ResultsWithSearchStore = searchProps => (
  <SearchContext.Consumer>
    {consumerProps => (<Results {...consumerProps} {...searchProps} />)}
  </SearchContext.Consumer>
)

export default ResultsWithSearchStore;


