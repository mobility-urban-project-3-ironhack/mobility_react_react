import React from 'react';

class InputSelect extends React.Component {
  
  
  render(){
    return (
    <div className='input-group' >
      <label className='d-flex flex-column '>
        <i className="fas fa-helicopter fa-2x mb-2"></i>
        <input 
          type="radio" 
          defaultChecked
          onChange={this.props.handleSelectType} 
          name='options' 
          value='0'
          className='mx-auto'/>
      </label>
      <label className='d-flex flex-column '>
        <i className="fas fa-helicopter fa-2x mb-2"></i>
        <input 
          type="radio" 
          onChange={this.props.handleSelectType} 
          name='options' 
          value='1'
          className='mx-auto'/>
      </label>
      <label className='d-flex flex-column '>
      <i className="fas fa-helicopter fa-2x mb-2"></i>
      <input 
          type="radio" 
          onChange={this.props.handleSelectType} 
          name='options' 
          value='2'
          className='mx-auto'/>
      </label>
    </div>
  )}
}

export default InputSelect