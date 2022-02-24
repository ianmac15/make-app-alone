import React, { useState } from 'react'
import { carType } from '../App'
import { onAddInterface } from '../App'

const AddForm = ({onAdd}:properties) => {

  const [newBrand, setNewBrand] = useState("")
  const [newModel, setNewModel] = useState("")
  const [newIsUsed, setNewIsUsed] = useState(false)
    

const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
  
  e.preventDefault()

  const newID = Math.floor(Math.random()*10000)+1
  const newCar = {id:newID, brand:newBrand, model:newModel, isUsed: newIsUsed};
 
  onAdd(newCar)

  setNewBrand("")
  setNewModel("")
  setNewIsUsed(false)
  

}


  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Car brand</label>
        <input  type="text" placeholder='Add brand' value={newBrand} onChange={(e)=>setNewBrand(e.target.value)}/>
      </div>
      <div className='form-control'>
        <label >Car model</label>
        <input placeholder='Add model' type="text" value={new}/>
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