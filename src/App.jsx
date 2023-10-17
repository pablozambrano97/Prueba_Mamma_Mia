import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './views/Home'
import PizzaDetails from './views/PizzaDetails'
import Favoritos from './views/Favoritos'
import MyContext from './MyContex';


function App() {
  const [pizza, setPizza] = useState([]);
  const [cart, setCart]= useState([]);
  const [suma, setSuma]= useState(0);
  const sharedData= { pizza, setPizza, cart, setCart, suma, setSuma};

  async function getPizza(){
    let res = await fetch ("./pizzas.json");
    let data = await res.json();
    setPizza(data);
  }

  useEffect(()=>{
    getPizza();
  },[])


  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={sharedData}>
          <NavBar />
            <Routes>
              <Route
                path="/Prueba_Mamma_Mia"
                element={<Home />}
              />
              <Route
                path="/Prueba_Mamma_Mia/pizza/:id"
                element={<PizzaDetails />}
              />
              <Route
                path="/Prueba_Mamma_Mia/carrito"
                element={<Favoritos />}
              />
            </Routes>

        </MyContext.Provider>
        </BrowserRouter>
    </>
  )
}

export default App
