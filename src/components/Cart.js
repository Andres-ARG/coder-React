import React, {useContext, useState} from 'react'
import CartList from './CartList'
import {cartContext} from '../CartContext'


export const Cart = () => {
    const {precio_total, carrito, clear} = useContext(cartContext)
    const handleClick=()=>{
        clear()
    }
    let precioTotal
    for (const producto of carrito) {
        for (const productoInterno of producto) {
            precioTotal += productoInterno.price
        }
    }
    console.log(precioTotal)
    return (
    <div>
        <h1>Carrito</h1>
        <h2>Precio total : ${precio_total}</h2>
        <CartList carrito={carrito}/>
            <button className='btn-primary mx-1' onClick={handleClick}>vaciar</button>
    </div>
  )
}

export default Cart
