import React from 'react';
import { withScriptjs, withGoogleMap } from "react-google-maps"
import JourneyForm from './JourneyForm';

const MapSearchComponent = withScriptjs(withGoogleMap((props) => (<JourneyForm/>)))

export default MapSearchComponent;








