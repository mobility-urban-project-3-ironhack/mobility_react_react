import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer } from "react-google-maps"

const MapComponent = withScriptjs(withGoogleMap((props) => (
  <div>
    <GoogleMap
      defaultZoom={props.defaultZoom}
      defaultCenter={props.userLocation}
    >{props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
    <br />
  </div>
)))

export default MapComponent;








