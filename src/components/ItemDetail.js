import React from 'react';
import { useState, useContext } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link, NavLink} from 'react-router-dom'
import ItemCount from './ItemCount'
import {cartContext} from '../CartContext'


const ItemDetail = ({producto}) => {
  const {addItem} = useContext(cartContext)
  const [verContador, setVerContador] = useState(false)
  const onClick=(contador,item)=>{
    toast(` Se han cargado ${contador} productos` , {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      },
      
      addItem(contador,producto)
      
      );
  }

  const funcionVerContador = () => {
    setVerContador(true)
  }

  if(!verContador){
    return (
      <div className='contenedorDetalle'>
        <article className='postDetalle'>
          <h4>Titulo: {producto[0].title}</h4>
          <h5>Precio: {producto[0].price}</h5>
          <img src={producto[0].pictureUrl}></img>
          <p>Categoria: {producto[0].category}</p>
            <Link to={"/cart"}>
              <button onClick={onClick}>Terminar Compra</button>
            </Link>
        </article>
        <ItemCount stock={10} init={1} onAdd={onClick} onCount={funcionVerContador} producto={producto}/>  
      </div>
    )
  }else {
    return(
      <div className='contenedorDetalle'>
        <article className='postDetalle'>
          <h3>Detalle del producto</h3>
          <h4>Titulo: {producto[0].title}</h4>
          <h5>Precio: {producto[0].price}</h5>
          <img src={producto[0].pictureUrl}></img>
          <p>Categoria: {producto[0].category}</p>
          <Link to={"/cart"}>
            <button onClick={onClick}>Terminar Compra</button>
          </Link>
        </article>
      </div>
    )
  }
}

export default ItemDetail