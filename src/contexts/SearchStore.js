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

  onResultsChange = results => this.setState({ results })
  
  onDataMapChange = dataMap => {
    this.setState({dataMap})
  }

  render() {
    return (
      <SearchContext.Provider value={{
        request: this.state.request,
        results: this.state.results,
        handleRequestChange: this.onRequestChange,
        handleResultsChange: this.onResultsChange,
        handleDataMapChange: this.onDataMapChange,
        dataMap: this.state.dataMap
      }}>
        {this.props.children}
      </SearchContext.Provider>
    );
  }
}

export { SearchStore, SearchContext }