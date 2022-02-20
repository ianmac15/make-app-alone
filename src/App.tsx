import HeaderTitle from "./components/HeaderTitle";
import Tasks from "./components/Cars";
import Button from "./components/Button";
import { useEffect, useState } from "react";
import Cars from "./components/Cars";

function App() {

  const [cars, setCars] = useState<carType[]>([])

  useEffect(() => {
    const getCarsFromServer = async () => {
      const carsFromServer = await fetchCars()
      setCars(carsFromServer)
    }

    getCarsFromServer()
  },[]
  )

  const fetchCars = async () => {
    // const res = await fetch('http://localhost:8080/api/car')
    const res = await fetch('http://localhost:5000/cars')
    const data = await res.json()
    return data
  }

  

  return (
    <div className="container">
      <HeaderTitle title="Car App" />
      <Cars cars={cars} />

    </div>
  );
}

export interface carType {
  brand: string
  model: string
  isUsed: boolean
}

export default App;
