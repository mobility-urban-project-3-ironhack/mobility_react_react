import React from 'react';
import { MDBContainer } from 'mdbreact';
import { SearchContext } from '../../contexts/SearchStore';
import MapSearchComponent from './MapSearchComponent';
import Results from './Results';
import IcoType from './ListType';
import LineGraph from '../graphs/LineGraph';
import StatsService from '../../services/StatsService';
import HeaderNav from '../misc/HeaderNav'

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
    costUnit:'Year',
    labelYear:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
    labelMonth:['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
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

  onChangeTimeCalories = (time) => {
    this.setState({caloriesUnit : time})
  }

  onChangeTimeCo2 = (time) => {
    this.setState({co2Unit : time})
  }

  onChangeTimeCost = (time) => {
    this.setState({costUnit : time})
  }

  

  render() {
    let marginPadding = '';


    (!this.props.request) ? marginPadding ="text-center mt-4 pt-5 px-3"  : marginPadding ="text-center mt-2 pt-2 px-0"
    return (
      <div>
      <HeaderNav/>
      <MDBContainer 
      className={marginPadding}>
        {!this.props.request && (
          <div>
            <MapSearchComponent
              googleMapURL={googleMapURL}
              loadingElement={<div />}
              containerElement={<div/>}
              mapElement={<div />} />

              <div>
                <LineGraph 
                  inputs = {this.state.caloriesUnit === 'Year' ? this.state.caloriesYear : this.state.caloriesMonth}
                  title = 'CALORIES EVOLUTION'
                  labelData = {this.state.caloriesUnit === 'Year' ? this.state.labelYear : this.state.labelMonth}
                  timeChange = {this.onChangeTimeCalories}
                  displayAxe = {this.state.caloriesUnit === 'Year' ? true : false}/>
                  
              </div>

              <div className = 'mt-5'>
                <LineGraph 
                  inputs = { this.state.co2Unit === 'Year' ? this.state.co2Year : this.state.co2Month}
                  title = 'CO2 EVOLUTION'
                  labelData = { this.state.co2Unit === 'Year' ? this.state.labelYear : this.state.labelMonth}
                  timeChange = {this.onChangeTimeCo2}
                  displayAxe = {this.state.co2Unit === 'Year' ? true : false}/>
              </div>

              <div className = 'mt-5 mb-3'>
                <LineGraph 
                  inputs = {this.state.costUnit === 'Year' ? this.state.priceYear : this.state.priceMonth}
                  title = 'COST EVOLUTION'
                  labelData = {this.state.costUnit === 'Year' ? this.state.labelYear : this.state.labelMonth}
                  timeChange = {this.onChangeTimeCost}
                  displayAxe = {this.state.costUnit === 'Year' ? true : false}/>
              </div>
              
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
      </div>
      
    )
  }
}

const SearchWithSearchStore = searchProps => (
  <SearchContext.Consumer>
    {consumerProps => (<Search {...consumerProps} {...searchProps} />)}
  </SearchContext.Consumer>
)

export default SearchWithSearchStore;


