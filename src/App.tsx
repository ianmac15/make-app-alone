import HeaderTitle from "./components/HeaderTitle";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cars from "./components/Cars";
import AddForm from "./components/AddForm";
import Footer from "./components/Footer";
import About from "./components/About";


function App() {

  const [isAddFormVisible, setAddFormVisible] = useState(false)

  const [cars, setCars] = useState<carType[]>([])

  useEffect(() => {
    const getCarsFromServer = async () => {
      const carsFromServer = await fetchCars()
      setCars(carsFromServer)
    }

    getCarsFromServer()
  }, []
  )

  const fetchCars = async () => {
    // const res = await fetch('http://localhost:8080/api/car')
    const res = await fetch('http://localhost:7000/cars')
    const data = await res.json()
    return data
  }

  const fetchCar = async (id: number) => {
    const res = await fetch(`http://localhost:7000/cars/${id}`)
    const data = await res.json()
    return data
  }

  const clickCar = async (id: number) => {
    const carToFetch = await fetchCar(id)
    const updCar: carType = { ...carToFetch, isUsed: !carToFetch.isUsed }

    const res = await fetch(`http://localhost:7000/cars/${id}`,
      {
        method: "PUT",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(updCar)
      }
    )

    const data = await res.json()

    setCars(cars.map((car: carType) =>
      car.id === id ? { ...car, isUsed: data.isUsed } : car
    ))
  }

  const deleteCar = async (id: number) => {

    await fetch(`http://localhost:7000/cars/${id}`, { method: "DELETE" })

    setCars(
      cars.filter(
        (car) => car.id !== id
      )
    )
  }

  const showAddForm = () => {
    setAddFormVisible(!isAddFormVisible)
  }

  const addCar = async (newCar: newCarInterface) => {

    const res = await fetch(`http://localhost:7000/cars`,
      {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(newCar)
      })

    const data = await res.json()

    setCars([...cars, data])
  }

  // "server": "json-server --watch db.json --port 5000"

  return (
    <Router>
      <div className="container">
        <HeaderTitle title="Car App" onClick={showAddForm} />
        <Routes>
          <Route path='/' element={<>
            {isAddFormVisible ? <AddForm onAdd={addCar} /> : null}
            {cars.length > 0 ? (<Cars clickCar={clickCar} cars={cars} onDelete={deleteCar} />) : ('No cars available')}
          </>} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
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
  (id: number): void
}

export interface showAddFormInterface {
  (param: React.MouseEvent<HTMLButtonElement>): void
}

export interface onAddInterface {
  (param: newCarInterface): void
}

export interface newCarInterface {
  brand: string
  model: string
  isUsed: boolean
}

export default App;
