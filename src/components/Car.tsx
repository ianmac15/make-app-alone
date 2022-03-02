import { carType, clickCarInterface, clickWrenchInterface, onDeleteInterface } from "../App"
import { FaTimes, FaWrench } from "react-icons/fa"
import EditForm, { updInterface } from "./EditForm"
import { useState } from "react"


const Car = ({ car, clickCar, onDelete, updCar}: properties) => {

  const [isEditFormVisible, setEditFormVisible] = useState(false)

  const clickWrench = () => {
    setEditFormVisible(!isEditFormVisible)

  }

  return (
    <div onDoubleClick={() => clickCar(car.id)} className={`task ${car.isUsed ? "reminder" : ""}`}>
      <h3>
        {car.brand}
        <FaTimes style={{ "color": "red", "cursor": "pointer" }} onClick={() => onDelete(car.id)} />
      </h3>
      <p>
        {car.model}
        <FaWrench className="wrench" onClick = {clickWrench}/>
      </p>
      {isEditFormVisible ?(<EditForm onUpd={updCar} id ={car.id}/>) :null}
    </div>
    
  )
}


interface properties {
  car: carType
  clickCar: clickCarInterface
  onDelete: onDeleteInterface
  updCar: updInterface
}



export default Car