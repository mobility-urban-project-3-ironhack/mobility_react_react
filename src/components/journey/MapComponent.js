import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer, Marker } from "react-google-maps"
import { SearchContext } from '../../contexts/SearchStore';

const MapComponent = withScriptjs(withGoogleMap((props) => (
  <div>
    <GoogleMap
      defaultZoom={props.defaultZoom}
      defaultCenter={props.userLocation}
      defaultOptions={{
        streetViewControl: false,
        scaleControl: false,
        mapTypeControl: false,
        panControl: false,
        zoomControl: false,
        rotateControl: false,
        fullscreenControl: false
      }}>

      {props.arrDirections.map((direction, i) => {
        // aqui una función para comprobar si es andando y meter las options para puntitos.
        return (
          <DirectionsRenderer key={i} options={{
            polylineOptions: {
              strokeColor: 'DarkSlateGray ',
              strokeWeight: '0px',
              icons: [{
                icon: {
                  path: window.google.maps.SymbolPath.CIRCLE,
                  scale: 3,
                },
                offset: '0',
                repeat: '20px'
              }],
            },
  
          suppressMarkers: true,
          
        }}  directions={direction} />
      )
      })}

    {props.dataMap.map((marker, i) => {
      // aqui una función para poner ICO según tipo de transitMode
      return (
        <Marker  key={i}
        icon='https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png'
        position={{lat: marker.lat, lng: marker.lng}}
        label={marker.transitMode}/>
      )
    })}

    </GoogleMap>
    <br />  
  </div>
)))



const MapComponentWithSearchStore = searchProps => (
  <SearchContext.Consumer>
    {consumerProps => (<MapComponent {...consumerProps} {...searchProps} />)}
  </SearchContext.Consumer>
)



export default MapComponentWithSearchStore;;








