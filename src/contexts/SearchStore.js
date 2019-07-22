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
            this.setState({
              dataRecomendation: recomendationJourney(response.data),
            })
          },
          error => console.log(error)
        )
    }, ()=>{console.log('request guardado: ' + this.state.request)})
  }     

  onHandleRecomendation(results){
    let arrWayPoint = []
    !this.state.route 
      ? arrWayPoint = recomendationJourney(results)[0].wayPoints
      : arrWayPoint = results[0].wayPoints

    this.setState({
      route: [{...this.state.request.origin.coords, transitMode: 'WALKING'}, ...arrWayPoint.map(waypoint => {
        return {
        transitMode: waypoint.transitMode,
        lat: waypoint.wayPoint.lat,
        lng: waypoint.wayPoint.lng
        } }), {...this.state.request.destination.coords, transitMode: 'WALKING'}],
    })
  }
  


  onResultsChange = results => this.setState({ results })
  
  onDataMapChange = dataMap => {
    this.onHandleRecomendation(dataMap)
    console.log('dataMap: ' + JSON.stringify(dataMap));
    //console.log('dataMaprecom: ' + this.onHandleRecomendation(dataMap))
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