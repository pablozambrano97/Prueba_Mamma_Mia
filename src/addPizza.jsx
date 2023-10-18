export function totalizar(cart, setSuma){
    const valor=cart.map((pizza) => (pizza.cant*pizza.price)).reduce((acumulador, montoXPizza) => (acumulador + montoXPizza),0);
    setSuma(valor);
}

export function handleAddPizza(e, allPizzas, cart, setCart, setSuma, suma){

    const addedPizza = allPizzas.filter((pizza) => (pizza.id === e.target.value));

    const indexPizza = cart.findIndex((pizza) => (pizza.id === addedPizza[0].id)); 


    if (indexPizza === -1){
        setCart([...cart, {
        name: addedPizza[0].name,
        id: addedPizza[0].id,
        img: addedPizza[0].img,
        price: addedPizza[0].price,
        cant: '1'
    }]);
    }else{
        cart[indexPizza].cant++;
        setCart([...cart]);
    }
}

export function incrementar(e, cart, setCart, setSuma, suma){
    const index= cart.findIndex((pizza) => (pizza.id === e.target.value));
    
    if ( cart[index].cant>0){
        cart[index].cant++;
        setCart([...cart]);
    }
}

export function decrementar(e, cart, setCart, setSuma, suma){
    const index= cart.findIndex((pizza) => (pizza.id === e.target.value));
    
    if(cart[index].cant>1){
        cart[index].cant--;
        setCart([...cart]);
    }else{
        cart.splice(index,1);
        setCart([...cart]);
    }
}