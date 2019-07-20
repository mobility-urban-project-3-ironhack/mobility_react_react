import React from 'react'
import SearchJourneyService from '../services/SearchJourneyService';

const SearchContext = React.createContext();

class SearchStore extends React.Component {
  state = {}

  onRequestChange = (request) => {

    this.setState({ request }, ()=> { 
      SearchJourneyService.search(this.state.request)
        .then(
          response => {
            this.onResultsChange(response.data)
          },
          error => console.log(error)
        )
    }, ()=>{console.log('request guardado: ' + this.state.request)})
  }

  onResultsChange = (results) => {
    console.log('mandado data')
    this.setState({ results }, ()=> console.log(this.state.results))
  }

  render() {
    return (
      <SearchContext.Provider value={{
        request: this.state.request,
        results: this.state.results,
        handleRequestChange: this.onRequestChange,
        handleResultsChange: this.onResultsChange
      }}>
        {this.props.children}
      </SearchContext.Provider>
    );
  }
}

export { SearchStore, SearchContext }