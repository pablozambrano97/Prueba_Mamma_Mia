import React, { useContext } from 'react'
import CardPizza from '../components/CardPizza';


export default function Home() {

  return (
    <>
      <section className='banner d-flex flex-column align-items-center justify-content-center'>
        <h1>¡Pizzería Mamma Mia!</h1>
        <h5>¡Tenemos las mejores pizzas que podras encontrar!</h5>
        <hr className='hrLine'/>
      </section>
        <section className='d-flex gap-3 flex-wrap justify-content-center container col-sm-12 col-md-12 col-lg-9 mt-5'>
          <CardPizza/>
        </section>
    </>

  )
}
