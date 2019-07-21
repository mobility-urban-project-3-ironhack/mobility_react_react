import React from 'react';
import { MDBContainer } from 'mdbreact';
import { SearchContext } from '../../contexts/SearchStore';
import MapSearchComponent from './MapSearchComponent';
import Results from './Results';
import IcoType from './ListType';
import LineGraph from '../graphs/LineGraph';

const googleMapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAP_KEY}`

class Search extends React.Component {

  render() {
    let marginPadding = '';

    (!this.props.request) ? marginPadding ="text-center mt-4 pt-5 px-3"  : marginPadding ="text-center mt-2 pt-2 px-0"

    return (
      <MDBContainer 
      className={marginPadding}>
        {!this.props.request && (
          <div>
            <MapSearchComponent
              googleMapURL={googleMapURL}
              loadingElement={<div />}
              containerElement={<div/>}
              mapElement={<div />} />

              <LineGraph/>
              <LineGraph/>
              <LineGraph/>
          </div>

        )}

        {this.props.request && !this.props.results && (
         <div className="spinner-border text-primary"  style={{width: '3rem', height: '3rem'}} role="status">
         <span className="sr-only">Loading...</span>
       </div>
        )}

        {this.props.request && this.props.results && (
          <Results search={this.props.results}/>
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


