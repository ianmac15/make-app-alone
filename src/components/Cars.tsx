import { carType } from "../App"
import Car from "./Car"

const Cars = ({cars}: properties) => {
  return (<>
    {cars.map(
      (car, index) => (<Car key ={index} car={car} />)
    )}</>
  )
}

interface properties{
  cars: carType[]
}

export default Cars