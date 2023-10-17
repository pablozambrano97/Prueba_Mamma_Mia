import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import context from '../MyContex'
import { Button, Card } from 'react-bootstrap';
import { capitalizar } from '../capitalizar';
import { handleAddPizza } from '../addPizza';

export default function PizzaDetails() {

    const {pizza, cart, setCart, setSuma} = useContext(context);
    const {id}= useParams();

    let selectedPizza = pizza.filter((pizzas) => (pizzas.id===id));

  return (
    <div className='d-flex justify-content-center'>
    <Card key={selectedPizza[0].id} className='cardDetail border-light'>
        <Card.Img variant='top' src={selectedPizza[0].img} style={{width:'30rem'}} />
        <Card.Body className='d-flex flex-column'>
            <Card.Title>{capitalizar(selectedPizza[0].name)}</Card.Title>
            <hr/>
            <Card.Text>{selectedPizza[0].desc}</Card.Text>
            <Card.Text className='d-flex flex-column '>
                <b>Ingredients:</b>
                {selectedPizza[0].ingredients.map((ingredient, i)=>(<span key={i}>🍕 {capitalizar(ingredient)}</span>))}
            </Card.Text>
            <Card.Text><b>Precio: $ {selectedPizza[0].price}</b></Card.Text>
            <Button style={{width:'30%'}} value={selectedPizza[0].id} variant='danger' onClick={(e) => (handleAddPizza(e, pizza, cart, setCart, setSuma))}>Añadir</Button>
        </Card.Body>
    </Card>
    </div>
    
  )
}
