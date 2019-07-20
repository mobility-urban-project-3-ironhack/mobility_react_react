import React from 'react';
import { MDBContainer } from 'mdbreact';
import MapComponent from './MapComponent';
import data from '../../dat.json'
import CardExample from '../misc/JourneyCard';
import { SearchContext } from '../../contexts/SearchStore';
import MapSearchComponent from './MapSearchComponent';
import Results from './Results';

const googleMapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAP_KEY}`

class Search extends React.Component {

  state = {
  }


  render() {

    return (
      <MDBContainer className="text-center mt-3 pt-5 px-0">
        {!this.props.request && (
          <MapSearchComponent
            googleMapURL={googleMapURL}
            loadingElement={<div />}
            containerElement={<div/>}
            mapElement={<div />} />
        )}
        
        {this.props.request && this.props.results && (
          <p>request: {JSON.stringify(this.props.results)}</p>
        )}

      </MDBContainer>
    )
  }
}

const SearchWithSearchStore = searchProps => (
  <SearchContext.Consumer>
    {consumerProps => (<Search {...consumerProps} {...searchProps} />)}
  </SearchContext.Consumer>
)

export default SearchWithSearchStore;


