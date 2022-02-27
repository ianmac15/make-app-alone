import { carType, clickCarInterface, onDeleteInterface } from "../App"
import Car from "./Car"

const Cars = ({cars, clickCar, onDelete}: properties) => {
  return (<>
    {cars.map(
      (car) => (<Car clickCar={clickCar} key ={car.id} car={car} onDelete = {onDelete}/>)
    )}</>
  )
}

interface properties{
  cars: carType[]
  clickCar: clickCarInterface
  onDelete: onDeleteInterface
}

export default Cars