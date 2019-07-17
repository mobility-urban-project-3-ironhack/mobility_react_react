import React from 'react'
//import SearchJourneyService from '../services/SearchJourneyService';
import data from '../data.json'


const SearchContext = React.createContext();

class SearchStore extends React.Component {
  state = {
    request: {
      origin: {},
      destination: {}
    },
    results: {}
  }

  onRequestChange = (request) => {
    
    this.setState({ request }, ()=> {
        this.onResultsChange(data)
      }, ()=>{console.log(this.state.results)})
      
      /* Llamada al servicio, por ahora falla, hace una petición OPTIONS con error 204
        DESCOMENTAR EL IMPORT DEL SERVICIO 

        SearchJourneyService.search(this.state.request).then(
        response => {
          this.state.onResultsChange(response.data)
        },
        error => console.log(error) 
    )  */
  }

  onResultsChange = (results) => {
    this.setState({ results })
  }

  render() {
    return (
      <SearchContext.Provider value={{
        request: this.state.request,
        results: this.results,
        handleRequestChange: this.onRequestChange,
        handleResultsChange: this.onResultsChange
      }}>
        {this.props.children}
      </SearchContext.Provider>
    );
  }
}

export { SearchStore, SearchContext }