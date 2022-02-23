import React, { useState } from 'react'
import { carType } from '../App'
import { onAddInterface } from '../App'

const AddForm = ({onAdd}:properties) => {

  const [newBrand, setNewBrand] = useState("")
    

const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
  
  e.preventDefault()


  onAdd(newCar)

}


  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Car brand</label>
        <input  type="text" placeholder='Add brand' value={newCar.brand} onChange={(e)=>setNewCar({...newCar, e.target.value})}>
      </div>
      <div className='form-control'>
        <label >Car model</label>
        <input placeholder='Add model' type="text" />
      </div>
      <div className='form-control form-control-check'>
        <label >Car used</label>
        <input type="checkbox" />
      </div>

      <input className = 'btn btn-block' type= 'submit' value='Save Car' />

    </form>


  )
}

interface properties {
  onAdd: onAddInterface
}



export default AddForm