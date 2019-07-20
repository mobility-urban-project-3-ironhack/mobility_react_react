import React from 'react'
import { Redirect } from 'react-router-dom'
import { MDBBtn } from 'mdbreact';
import { SearchContext } from '../contexts/SearchStore';

class JourneyForm extends React.Component {
  state = {
    origin: {},
    destination: {},
  }

  componentDidMount() {
    this.setState({
      origin: {
        ...this.state.origin,
        autocomplete: new window.google.maps.places.Autocomplete(
          document.getElementById('origin'), { types: ['geocode'] })
      },
      destination: {
        ...this.state.destination,
        autocomplete: new window.google.maps.places.Autocomplete(
          document.getElementById('destination'), { types: ['geocode'] })
      },
    })
  }

  handleFocus = (e) => {
    e.target.parentNode.querySelector('label').className = 'active'
  }

  handleBlur = (e) => {
    if (e.target.value < 1) { e.target.parentNode.querySelector('label').className = '' } 
  }

  onhandleSubmit = (e) => {

    e.preventDefault()
    setTimeout(this.saveSearch.bind(this), 1000)
  }

  saveSearch() {

    this.setState({
      origin: {
        place: document.getElementById('origin').value,
        coords: {
          lat: this.state.origin.autocomplete.getPlace().geometry.location.lat(),
          lng: this.state.origin.autocomplete.getPlace().geometry.location.lng()
        }
      },
      destination: {
        place: document.getElementById('destination').value,
        coords: {
          lat: this.state.destination.autocomplete.getPlace().geometry.location.lat(),
          lng: this.state.destination.autocomplete.getPlace().geometry.location.lng()
        }
      },
    }, ()=>{
      this.props.handleRequestChange({
         origin: {
          place: this.state.origin.place,
          coords: this.state.origin.coords,
      }, destination: {
          place: this.state.destination.place,
          coords: this.state.destination.coords,
      }})
    }
    )
  }

  render() {
    if(this.state.origin.place && this.state.destination.place) {
      return <Redirect to='/results'/>
    }
    
    return (
      <form onSubmit={this.onhandleSubmit} className='p-3 rounded' style={{backgroundColor: 'white'}}>
        <h3>Move on!</h3>
        <div className="grey-text px-3">
          <div className="md-form form-group md-bg">
            <input 
              name="origin" 
              type="text" 
              className="form-control" 
              id="origin"
              required
              placeholder=''
              onFocus={this.handleFocus}
              onChange={this.handleChange}
              onBlur={this.handleBlur}/>
            <label className=""  data-error="" data-success="">Origin:</label>
          </div>
          <div className="md-form form-group md-bg">
            <input 
              name="destination" 
              type="text" 
              className="form-control" 
              id="destination"
              required
              placeholder=''
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}/>
            <label className="" data-error="" data-success="">Destiny:</label>
          </div>
          <MDBBtn className='w-100 mx-0' type='submit'>Going!</MDBBtn>
        </div>
      </form>
    )
  }
}

const JourneyFormWithSearchStore = searchProps => (
  <SearchContext.Consumer>
    {consumerProps => (<JourneyForm {...consumerProps} {...searchProps} />)}
  </SearchContext.Consumer>
)

export default JourneyFormWithSearchStore;


