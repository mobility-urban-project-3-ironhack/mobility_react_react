import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer } from "react-google-maps"

const MapComponent = withScriptjs(withGoogleMap((props) => {



  return (
    <GoogleMap 
      defaultZoom={props.defaultZoom} 
      defaultCenter={props.userLocation}
      >{props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
  )
}))

export default MapComponent;



