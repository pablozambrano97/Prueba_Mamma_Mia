import React, {useContext} from 'react'
import context from '../MyContex'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { capitalizar } from '../capitalizar';
import { handleAddPizza } from '../addPizza';

export default function CardPizza() {
  const navigate=useNavigate();
  const context2 =useContext(context);
  let allPizzas=context2.pizza;
  const {cart, setCart, setSuma} = useContext(context);

  function handlePizza(e){
    e.preventDefault();
    navigate(`/Prueba_Mamma_Mia/pizza/${e.target.value}`);
  }

  return (
    <>
    {allPizzas.map((pizza) => (
      <Card key={pizza.id} style={{ width: '16rem' }}>
        <Card.Img variant="top" src={pizza.img} />
        <Card.Body>
          <Card.Title>{capitalizar(pizza.name)}</Card.Title>
          <hr/>
          <Card.Text className='d-flex flex-column ps-3'>
            <b>Ingredients:</b>
            {pizza.ingredients.map((ingredient, i)=>(<span key={i}>🍕 {capitalizar(ingredient)}</span>))}
          </Card.Text>
          <Card.Footer className='d-flex flex-column align-items-center'>
            <h4>${pizza.price}</h4>
            <Card.Text className='d-flex gap-2'>
                <Button variant="primary" value={pizza.id} onClick={(e)=>(handlePizza(e))}>Ver mas</Button>
                <Button variant="danger" value={pizza.id} onClick={(e) => (handleAddPizza(e, allPizzas, cart, setCart, setSuma))}>Añadir</Button>
            </Card.Text>
          </Card.Footer>
        </Card.Body>
      </Card>
    ))}
    </>
  );
}

