import React from 'react';
import { MDBContainer } from 'mdbreact';
import MapComponent from './MapComponent';
import CardExample from '../misc/JourneyCard';
import ListType from './ListType'
import { SearchContext } from '../../contexts/SearchStore';
import recomendationJourney from '../../services/RecomendationService'

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
    let arrWayPoint = recomendationJourney(this.props.search).wayPoints
    this.setState({
      waypoints: this.props.results.bicycling[0].wayPoints,
      dataRecomendation: this.props.results.driving,
      origin: {
        lat: this.props.request.origin.coords.lat,
        lng: this.props.request.origin.coords.lng,
      },
      destination: {
        lat: this.props.request.destination.coords.lat,
        lng: this.props.request.destination.coords.lng,
      },
      route: [{...this.props.request.origin.coords, transitMode: 'none'}, ...arrWayPoint.map(waypoint => {
        return {
        transitMode: waypoint.transitMode,
        lat: waypoint.wayPoint.lat,
        lng: waypoint.wayPoint.lng
        } }), {...this.props.request.destination.coords, transitMode: 'none'}],
      }, ()=> {
        this.props.handleDataMapChange(this.state.route)
        this.afterMapMount() 
      }) 
  }

  afterMapMount() {
    const { route } = this.state
    
    for (let i = 0; i <= route.length - 2; i++) {
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

  render() {
    return (    
    <MDBContainer fluid className="text-center px-1">
      <MapComponent 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${key}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `500px`, width:`100%` }} />}
        mapElement={<div style={{ height: `100%`, width:`100%` }} />}
        defaultZoom={15}
        arrDirections={this.state.directions}
        afterMapMount={this.afterMapMount}
      />  
      <hr/>
      {this.state.dataRecomendation && (<div>{
      <CardExample 
        type='driving' 
        data={this.state.dataRecomendation} 
        isFavorite={true}
      />}<hr/></div>)}
      <ListType search={this.props.search}/>
      
     {/*  {Object.keys(this.props.results).map((type, i) => (
        <CardExample 
          type={type} 
          data={ this.props.results[type]} 
          key={i}
        />))} */}
   </MDBContainer>
  )}
}

const ResultsWithSearchStore = searchProps => (
  <SearchContext.Consumer>
    {consumerProps => (<Results {...consumerProps} {...searchProps} />)}
  </SearchContext.Consumer>
)

export default ResultsWithSearchStore;


