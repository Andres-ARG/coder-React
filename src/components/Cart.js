import React, { useState } from 'react'
import { useContext, useEffect} from 'react'
import {contexto} from '../context/cartContext' 
import ItemCart from './ItemCart'
import { db } from "./firebase";
import { collection, addDoc} from "firebase/firestore"; 
import {NavLink} from "react-router-dom"

const Cart = () => {
  const {cartItems} = useContext(contexto)
  const [idCompra, setIdCompra] = useState("")

  const precioTotal = cartItems.reduce(
    (previous, current) => previous + current.quantity * current.price, 0
  )

  const guardarCompra = () => {
    const ordenesCollection = collection(db, "ordenes")
    const orden = {
      buyer: {
        name: "Andres",
        phone: "789189",
        email: "andres@andres.com"
      },
      items: cartItems,
      date: "02/08/1998",
      total: precioTotal
    }
    const consulta = addDoc(ordenesCollection, orden)

    consulta
      .then((resultado)=>{
        setIdCompra(resultado.id)
      })
      .catch((error)=>{
        console.log(error)
      })
  }

  return (
    <div>
      {cartItems.length === 0 ? <div><p>Tu carrito esta vacio</p><NavLink to={"/"}>Ir a el catalogo de productos</NavLink></div> : (
        <div>
          {cartItems.map((item,i)=>(
            <ItemCart key={i} item={item}/>
          ))}
        </div>
      )}
      <h2>Total: ${precioTotal}</h2>
      {idCompra === "" ? <div className='terminarCompraCart'>
      {cartItems.length > 0 && <button onClick={guardarCompra}>Terminar Compra</button>}
      </div> : <p>Compra guardada ID: {idCompra}</p>}
      
    
    </div>
    
  )
}

export default Cart