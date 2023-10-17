import React, {useContext} from 'react'
import { NavLink } from "react-router-dom";
import context from '../MyContex';

export default function NavBar() {

    const {suma}= useContext(context);

    const setActiveClass = ({ isActive }) => (isActive ? "active" : "noactive");

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
