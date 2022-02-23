import HeaderTitle from "./components/HeaderTitle";
import Tasks from "./components/Cars";
import Button from "./components/Button";
import { useEffect, useState } from "react";
import Cars from "./components/Cars";
import AddForm from "./components/AddForm";

function App() {

  const[isAddFormVisible, setAddFormVisible] = useState(false)

  const [cars, setCars] = useState<carType[]>([
    { "id": 1,
      "brand": "Ford",
      "model": "Focus",
      "isUsed": true
    },
    { 
      "id":2,
      "brand": "Fiat",
      "model": "Punto",
      "isUsed": false
    }
  ])

  // useEffect(() => {
  //   const getCarsFromServer = async () => {
  //     const carsFromServer = await fetchCars()
  //     setCars(carsFromServer)
  //   }

  //   getCarsFromServer()
  // },[]
  // )

  const fetchCars = async () => {
    // const res = await fetch('http://localhost:8080/api/car')
    const res = await fetch('http://localhost:5000/cars')
    const data = await res.json()
    return data
  }

  const fetchCar = async (id:number) => {
    const res = await fetch(`http://localhost:5000/cars/${id}`)
    const data = await res.json()
    return data
  }

  const clickCar = (id: number) => {
    // const carToFetch = fetchCar(id)
    setCars(cars.map((car: carType) => 
      car.id === id ? {...car, isUsed : !car.isUsed} : car
    ))
  }

  const deleteCar = (id:number) => {
    setCars(
      cars.filter(
        (car) => car.id !== id
      )
    )
  }

  const showAddForm = () => {
    setAddFormVisible(!isAddFormVisible)
  }

  const addCar = (newCar: carType) => {
    
    setCars([...cars, newCar])
  }
  

  

  return (
    <div className="container">
      <HeaderTitle title="Car App" onClick={showAddForm}/>
      {isAddFormVisible ? <AddForm onAdd = {addCar}/> : null}
      <Cars clickCar={clickCar} cars={cars} onDelete = {deleteCar}/>

    </div>
  );
}

export interface carType {
  id: number
  brand: string
  model: string
  isUsed: boolean
}

export interface clickCarInterface {
    (id: number): void
}

export interface onDeleteInterface {
  (id:number):void
}

export interface showAddFormInterface {
  (param:React.MouseEvent<HTMLButtonElement>):void
}

export interface onAddInterface {
  (param:carType):void
}

export default App;
