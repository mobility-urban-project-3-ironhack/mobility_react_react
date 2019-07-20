import React from 'react';
import { MDBContainer } from 'mdbreact';
import MapComponent from './MapComponent';
import data from '../dat.json'
import CardExample from './misc/JourneyCard';
import { SearchContext } from '../contexts/SearchStore';
import Recomendation from '../services/RecomendationService'

const key = process.env.REACT_APP_GOOGLE_MAP_KEY 

class Results extends React.Component {

  state = {
    origin2: {},
    waypoints: []
  }
  

  // componentWillMount (){
  //   navigator.geolocation.getCurrentPosition(pos => {
  //     this.setState({
  //       origin2: this.state.origin,
  //       destination2: {
  //         lat: pos.coords.latitude+0.01,
  //         lng: pos.coords.longitude+0.2
  //       }
  //     })
  //   })
  // }

  componentDidMount() {   
    this.setState({
      origin: {
        lat: this.props.request.origin.coords.lat,
        lng: this.props.request.origin.coords.lng,
      },
      destination: {
        lat: this.props.request.destination.coords.lat,
        lng: this.props.request.destination.coords.lng,
      }
    })
  }

  componentDidUpdate(prevProps, prevState) {
    
    if (prevProps.results !== this.props.results) {
      /* Recomendation.recomendationJourney(this.props.results)
      this.setState({
        dataMap: Recomendation.recomendationJourney(this.props.results)
      }) */
      
      this.setState({
        waypoints: this.props.results.driving[0].wayPoints,
        dataRecomendation: this.props.results.driving,
        }) 
      this.afterMapMount()
    }
  }

  afterMapMount() {
    const DirectionsService = new window.google.maps.DirectionsService();
    //const DirectionsService2 = new window.google.maps.DirectionsService();

    const {origin, destination, destination2, origin2 } = this.state

    DirectionsService.route({
      origin: new window.google.maps.LatLng(origin.lat, origin.lng),
      destination: new window.google.maps.LatLng(destination.lat, destination.lng),
      waypoints: [/* {
        location: new window.google.maps.LatLng(destination2.lat-0.1, destination2.lng-0.1),
        stopover: true
        } */], 
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

    // DirectionsService2.route({
    //   origin: new window.google.maps.LatLng(destination2.lat, destination2.lng),
    //   destination: new window.google.maps.LatLng(origin2.lat+0.5, origin2.lng+0.02),
    //   waypoints: [], 
    //   travelMode: window.google.maps.TravelMode.DRIVING, 
    // }, (result, status) => {
    //   if (status === window.google.maps.DirectionsStatus.OK) {
    //     this.setState({
    //       directions2: result,
    //     });
    //   } else {
    //     console.error(`error fetching directions en 2 ${result}`);
    //   }
    // })


  }

  render() {

    return (    
    <MDBContainer className="text-center mt-3 pt-5 px-0">

      {(this.props.results) && this.state.dataRecomendation &&
      <MapComponent 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${key}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px`, width:`100%` }} />}
        mapElement={<div style={{ height: `100%`, width:`100%` }} />}
        defaultZoom={15}
        userLocation={this.state.origin2}
      //  isMarkerShown={this.state.isMarkerShown}
        directions={this.state.directions}
        directions2={this.state.directions2}
        afterMapMount={this.afterMapMount}
      />  }
      <hr/>
      {this.state.dataRecomendation && (<div>{<CardExample type='driving' data={this.state.dataRecomendation} isFavorite={true}/>}<hr/></div>)}
      
      
      {Object.keys(data).map((type, i) => (<CardExample type={type} data={ data[type]} key={i} />))}
   </MDBContainer>
  )}
}

const ResultsWithSearchStore = searchProps => (
  <SearchContext.Consumer>
    {consumerProps => (<Results {...consumerProps} {...searchProps} />)}
  </SearchContext.Consumer>
)

export default ResultsWithSearchStore;


