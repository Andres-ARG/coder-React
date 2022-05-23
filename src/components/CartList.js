import React from 'react'
import CartItem from './CartItem'

const CartList = ({carrito}) => {
  return (
    <ul>
        {carrito.map((producto, index)=>{
            return <CartItem key={index} productos={producto} />
        })}
    </ul>
  )
}

export default CartList