import { MouseEvent, MouseEventHandler } from "react"
import { carType } from "../App"


const Car = ({car, clickCar}:properties) => {
  return (
    <div onDoubleClick = {() => clickCar(car.id)} className="task"{...car.isUsed ? "reminder" : ""}>
      <h3>{car.brand}</h3>
      <p>{car.model}</p>
    </div>
  )
}

interface properties {
  car:carType
  clickCar: React.MouseEventHandler<Element,MouseEvent>
}

export default Car