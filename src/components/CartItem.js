import React, { useContext } from 'react'
import {cartContext} from '../CartContext'
import {memo} from 'react'
const CartItem = ({productos}) => {
    const {removeItem, carrito} = useContext(cartContext)
    console.log(carrito)
    const handleClick=()=>{
        removeItem(productos.id)
    }
    return (
    <div>
        <li>
            <h4>{productos[0].title}</h4> <h5> {productos[0].price}</h5> <h6>Cat: {productos[0].category}</h6> 
            <button onClick={handleClick}>Eliminar Producto</button>
        </li>
    </div>
  )
}

export default memo(CartItem)