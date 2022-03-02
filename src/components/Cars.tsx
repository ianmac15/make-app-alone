import { carType, clickCarInterface, clickWrenchInterface, onDeleteInterface } from "../App"
import Car from "./Car"
import { updInterface } from "./EditForm"

const Cars = ({cars, clickCar, onDelete, updCar}: properties) => {
  return (<>
    {cars.map(
      (car) => (<Car updCar = {updCar} clickCar={clickCar} key ={car.id} car={car} onDelete = {onDelete}/>)
    )}</>
  )
}

interface properties{
  cars: carType[]
  clickCar: clickCarInterface
  onDelete: onDeleteInterface
  updCar: updInterface

}

export default Cars