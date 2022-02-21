import { MouseEventHandler } from "react"
import { carType } from "../App"
import Car from "./Car"

const Cars = ({cars, clickCar}: properties) => {
  return (<>
    {cars.map(
      (car) => (<Car clickCar={clickCar} key ={car.id} car={car} />)
    )}</>
  )
}

interface properties{
  cars: carType[]
  clickCar: React.MouseEventHandler<Element,MouseEvent>
}

export default Cars