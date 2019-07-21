import React from 'react';

const InputSelect = (props) => {
  const {handleSelectType} = props
  return (
    <div className='input-group'>
      <label className='d-flex flex-column '>
        <i class="fas fa-helicopter fa-2x mb-2"></i>
        <input type="radio" onClick={handleSelectType} checked name='options' value='0'className='mx-auto'/>
      </label>
      <label className='d-flex flex-column '>
        <i class="fas fa-helicopter fa-2x mb-2"></i>
        <input type="radio" onClick={handleSelectType} name='options' value='1'className='mx-auto'/>
      </label>
      <label className='d-flex flex-column '>
        <i class="fas fa-helicopter fa-2x mb-2"></i>
        <input type="radio" onClick={handleSelectType} name='options' value='2'className='mx-auto'/>
      </label>
    </div>
  )
}

export default InputSelect