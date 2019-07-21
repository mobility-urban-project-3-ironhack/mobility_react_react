import React from 'react';
import { MDBContainer } from 'mdbreact';
import { SearchContext } from '../../contexts/SearchStore';
import MapSearchComponent from './MapSearchComponent';
import Results from './Results';
import IcoType from './ListType';
import LineGraph from '../graphs/LineGraph';
import StatsService from '../../services/StatsService'

const googleMapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAP_KEY}`

class Search extends React.Component {
  state = {
    caloriesMonth: {
      user:[],
      total:[]
    },
    caloriesYear:{
      user:[],
      total:[]
    },
    co2Month:{
      user:[],
      total:[]
    },
    co2Year :{
      user:[],
      total:[]
    },
    priceMonth: {
      user:[],
      total:[]
    },
    priceYear: {
      user:[],
      total:[]
    },
    caloriesUnit: 'Year',
    co2Unit:'Year',
    costUnit:'Year'
  }

  componentDidMount() {
    Promise.all([
      StatsService.list(),
      StatsService.listAll()
    ])
      .then(([user,total]) => {
        this.setState({
          caloriesMonth: {
            user:user.month.calories,
            total:total.month.calories
          },
          caloriesYear:{
            user:user.year.calories,
            total:total.year.calories
          },
          co2Month:{
            user:user.month.co2,
            total:total.month.co2
          },
          co2Year :{
            user:user.year.co2,
            total:total.year.co2
          },
          priceMonth: {
            user:user.month.price,
            total:total.month.price
          },
          priceYear: {
            user:user.year.price,
            total:total.year.price
          },
        })
      })
  }

  render() {
    let marginPadding = '';
    

    (!this.props.request) ? marginPadding ="text-center mt-4 pt-5 px-3"  : marginPadding ="text-center mt-2 pt-2 px-0"
    console.log(this.state)
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

              <LineGraph inputs = {this.state.caloriesMonth}/>
              

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


