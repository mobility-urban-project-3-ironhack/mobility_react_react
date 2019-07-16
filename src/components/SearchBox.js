import React from 'react';
import SearchBox from 'react-google-maps/lib/components/places/SearchBox';

/* const refs = {} */

class FormSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      origin: null,
      ref: ''
    }
  }
/*
  onPlacesChanged() {
    const places = refs.searchBox.getPlaces();
    const bounds = this.props.map.LatLngBounds();

  }
  onMapMounted(ref) {
    refs.map = ref;
  } 
  onBoundsChanged(){
    this.setState({
      bounds: refs.map.getBounds(),
      center: refs.map.getCenter(),
    })
  }
  onSearchBoxMounted(ref) {
    refs.searchBox = ref;
  } */
  render() {
    return (
      <SearchBox
        /* ref={this.onSearchBoxMounted}
        bounds={this.bounds}
        onPlacesChanged={this.onPlacesChanged} */
      >
        <input
          type="text"
          placeholder="origin"
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `240px`,
            height: `32px`,
            marginTop: `27px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`,
          }}
        />
      </SearchBox>
    )
  }
}

export default FormSearch;