import { carType } from "../App"


const Car = ({car}:properties) => {
  return (
    <div className="task">
      <h3>{car.brand}</h3>
      <p>{car.model}</p>
    </div>
  )
}

interface properties {
  car:carType
}

export default Car