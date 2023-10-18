import React, {useContext, useEffect} from 'react'
import { NavLink } from "react-router-dom";
import context from '../MyContex';
import { totalizar } from '../addPizza';

export default function NavBar() {

    const {cart, suma, setSuma}= useContext(context);

    const setActiveClass = ({ isActive }) => (isActive ? "active" : "noactive");

    useEffect(()=>{
        totalizar(cart, setSuma);
    },[cart])

    return (
        <div className='nav px-5'>
            <NavLink to='/Prueba_Mamma_Mia/' className={ setActiveClass }>
                🍕 Pizzeria Mamma Mia!
            </NavLink>
        
            <div className='navBar'>
                <NavLink className={ setActiveClass } to="/Prueba_Mamma_Mia/carrito">
                    🛒 ${suma}
                </NavLink>
            </div>
        </div>
    );
}
