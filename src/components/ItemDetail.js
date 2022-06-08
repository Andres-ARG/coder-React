import { useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import ItemCount from './ItemCount'
import {contexto} from '../context/cartContext' 


const ItemDetail = ({producto}) => {
  const [verContador, setVerContador] = useState(false)
  const {addItemToCart, cartItems} = useContext(contexto)
  
  const onAdd=(contador)=>{
    producto.quantity = contador
  }

  const funcionVerContador = () => {
    setVerContador(true)
  }
  
  if(!verContador){
    return (
      <div className='contenedorDetail'>
        
          <article className='articleDetail'>
            <h4>Nombre: {producto.title}</h4>
            <h5>Precio: ${producto.price}</h5>
            <img src={producto.pictureUrl}></img>
            <p>Categoria: {producto.category}</p>
              
          </article>
          
        
        <ItemCount stock={10} init={1} onAdd={onAdd} onCount={funcionVerContador} producto={producto}/>  
      </div>
    )
  }else {
    return(
      <div>
        <article>
          <h4>Nombre: {producto.title}</h4>
          <h5>Precio: {producto.price}</h5>
          <img src={producto.pictureUrl}></img>
          <p>Categoria: {producto.category}</p>
          <Link to={"/cart"}>
            <button>Ir al carrito</button>
          </Link>
        </article>
      </div>
    )
  }
}

export default ItemDetail