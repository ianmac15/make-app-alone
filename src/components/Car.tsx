import { carType, clickCarInterface, onDeleteInterface } from "../App"
import { FaTimes, FaWrench } from "react-icons/fa"


const Car = ({ car, clickCar, onDelete }: properties) => {
  return (
    <div onDoubleClick={() => clickCar(car.id)} className={`task ${car.isUsed ? "reminder" : ""}`}>
      <h3>
        {car.brand}
        <FaTimes style={{ "color": "red", "cursor": "pointer" }} onClick={() => onDelete(car.id)} />
      </h3>
      <p>
        {car.model}
        <FaWrench className="wrench" onClick = {}/>
      </p>
    </div>
  )
}


interface properties {
  car: carType
  clickCar: clickCarInterface
  onDelete: onDeleteInterface
}



export default Car