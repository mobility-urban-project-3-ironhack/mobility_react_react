import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer, Marker } from "react-google-maps"

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

    {props.directions && <DirectionsRenderer options={{
      polylineOptions: {strokeColor: 'red'},
      suppressMarkers: true,
    }}  directions={props.directions} />}

     {props.directions && <DirectionsRenderer  options={{
       routeIndex: 1,
     }} directions={props.directions2} />}

     <Marker 
      icon='https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png'
      position={props.userLocation}
      label='prueba' />

    </GoogleMap>
    <br />  
  </div>
)))

export default MapComponent;








