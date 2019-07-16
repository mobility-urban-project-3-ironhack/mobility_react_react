import React from 'react'
import SearchJourneyService from '../services/SearchJourneyService';
import data from '../data'


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
      // Mockeo los datos de prueba
      /* this.setState({
        results: data
      }, ()=>{console.log(this.state.results)}) */
      
      /* Llamada al servicio, por ahora falla, hace una petición OPTIONS con error 204*/
      SearchJourneyService.search(this.state.request).then(
        response => {
          this.state.handleResultsChange(response.data)
        },
        error => console.log(error) 
    ) 
    })
  }

  onResultsChange = (results) => {
    this.setState({ results }, ()=> {
      console.log(JSON.stringify(this.state.results))
      console.log(this.state.results)/*  (<Redirect to='/results'/>) */})
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