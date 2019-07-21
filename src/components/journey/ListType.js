import React from 'react';
import JourneyCard from '../misc/JourneyCard'
import { SearchContext } from '../../contexts/SearchStore';

class ListType extends React.Component {

  state={
    filtered:{
      data: [], 
      type: ''
    } 
  }

  handleDataFiltered(results, e) {
    this.setState({
      filtered: {
        data: results[e.target.name],
        type: e.target.name
      }
    })
  }

  render() {
    

    return (    
    <div 
      className='d-flex'
    >
      <div className={this.state.filtered.data.length >= 1 
      ? "text-center d-flex flex-column flex-wrap w-10 border-right-1 border-white" 
      : "text-center d-flex flex-wrap justify-content-around "}>
      {Object.keys(this.props.results).map((type, i) => (
        <img 
          className='mb-2'
          name={type}
          src={`https://dummyimage.com/128x128/dedbde/000000&text=${type}`} 
          onClick={(e)=>this.handleDataFiltered(this.props.results, e)}
          alt={type} 
          key={i}
          
          style={this.state.filtered.data.length >= 1 ? { width: '100%' } : { width: '18%' } }
        />
      ) )}      
      </div>
      {this.state.filtered.data.length >= 1 && (
      <div  style={{width:'89%'}} className='ml-1'>
        {this.state.filtered.data[0].wayPoints && 
          <JourneyCard data={this.state.filtered.data} type={this.state.filtered.type}/>}

        {this.state.filtered.data[0].wayPoints=== undefined &&
          Object.keys(this.state.filtered.data[0]).map((type, i) => (
            <JourneyCard data={this.state.filtered.data[0][type]} type={type} key={i} />
        ))}
      </div>
      )}
    </div>
  )}
}

const ListTypeWithSearchStore = searchProps => (
  <SearchContext.Consumer>
    {consumerProps => (<ListType {...consumerProps} {...searchProps} />)}
  </SearchContext.Consumer>
)

export default ListTypeWithSearchStore;


