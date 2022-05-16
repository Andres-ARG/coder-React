import { useState, useContext } from "react"
import { cartContext } from "../CartContext"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount" 

const ItemDetail = ({producto}) => {
  const [cartItems, setCartItems] = useState(0)
  const {addItem} = useContext(cartContext)
  const [verContador, setVerContador] = useState(false)
  const onAdd = (quantity) => {
    setCartItems(quantity);
    addItem(producto, quantity)
  }

  const funcionVerContador = () => {
    setVerContador(true)
  }

  
  if(!verContador) {
      return (
        <>
          <div className="postDetalle post">
          <h3>{producto[0].title}</h3>
          <img src={producto[0].pictureUrl}></img>
          <p>Precio: {producto[0].price}</p>
          </div>
          <ItemCount stock={15} onAdd={onAdd} onCount={funcionVerContador} />
        </>
    );
  }else{
    return(
      <div className="postDetalle post">
        <h3>{producto[0].title}</h3>
        <img src={producto[0].pictureUrl}></img>
        <p>Precio: {producto[0].price}</p>
        <Link to={"/Cart"}>
          <button>Ir al carrito</button>
        </Link>
      </div>

    )
  }
}

export default ItemDetail