import React from 'react'
import SearchJourneyService from '../services/SearchJourneyService';
import recomendationJourney from '../services/RecomendationService'

const SearchContext = React.createContext();

class SearchStore extends React.Component {
  state = {}

  onRequestChange = (request) => {

    this.setState({ request }, ()=> { 
      SearchJourneyService.search(this.state.request)
        .then(
          response => {
            this.onHandleRecomendation(response.data)
            this.onResultsChange(response.data)
          },
          error => console.log(error)
        )
    }, ()=>{console.log('request guardado: ' + this.state.request)})
  }

  onHandleRecomendation(results){
    let arrWayPoint = recomendationJourney(results)[0].wayPoints

    this.setState({
      dataRecomendation: recomendationJourney(results),
      route: [{...this.state.request.origin.coords, transitMode: 'none'}, ...arrWayPoint.map(waypoint => {
        return {
        transitMode: waypoint.transitMode,
        lat: waypoint.wayPoint.lat,
        lng: waypoint.wayPoint.lng
        } }), {...this.state.request.destination.coords, transitMode: 'none'}],
    }) 
  }


  onResultsChange = results => this.setState({ results })
  
  onDataMapChange = dataMap => {
    //this.setState({route: dataMap})
  }

  render() {
    return (
      <SearchContext.Provider value={{
        request: this.state.request,
        results: this.state.results,
        handleRequestChange: this.onRequestChange,
        handleResultsChange: this.onResultsChange,
        handleDataMapChange: this.onDataMapChange,
        dataRecomendation: this.state.dataRecomendation,
        dataRoute: this.state.route
      }}>
        {this.props.children}
      </SearchContext.Provider>
    );
  }
}

export { SearchStore, SearchContext }