import React from 'react'

const AddForm = () => {
  return (
    <form>
        <label className='form-control label'>Car brand
          <input className='form-control input' type="text" name='Car brand'/>
        </label>
        <input className='form-control input' type='submit' name='Submit'/>
    </form>
  )
}

export default AddForm