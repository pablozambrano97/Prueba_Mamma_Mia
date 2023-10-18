import React,{ useContext, useEffect } from 'react'
import context from '../MyContex'
import { capitalizar } from '../capitalizar';
import { Button, Table } from 'react-bootstrap';
import { incrementar, decrementar } from '../addPizza';
import { totalizar } from '../addPizza';

export default function Favoritos() {
    const {cart, setCart, setSuma, suma} = useContext(context);
    
    let tableItems = cart.map((pizza) => (
        <tr key={pizza.id}>
            <td><img src={pizza.img} alt={`pizza ${pizza.name}`} className='imgCart'/>{capitalizar(pizza.name)}</td>
            <td>{pizza.price * pizza.cant}</td>
            <td className='d-flex gap-2 align-items-center'>
                <Button variant='danger' value={pizza.id} onClick={(e) => (decrementar(e, cart, setCart, setSuma, suma))}>-</Button>
                <b>{pizza.cant}</b>
                <Button variant='primary' value={pizza.id} onClick={(e) => (incrementar(e, cart, setCart, setSuma, suma))}>+</Button>
            </td>
        </tr>
    ));

    useEffect(()=>{
        totalizar(cart, setSuma);
    },[cart])

    return (
        <div >
            <Table hover borderless responsive striped className='tablePizza'>
                <thead>
                    <tr>
                        <th>Detalles del pedido:</th>
                    </tr>
                </thead>
                <tbody >
                    {tableItems}
                </tbody>
            </Table>
            <h4>Total: ${suma}</h4>
            <Button variant='success'>Ir a pagar</Button>
        </div>
    )
}
