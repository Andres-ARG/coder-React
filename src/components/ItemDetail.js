import { useState, useContext } from "react"
import { cartContext } from "../CartContext"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount" 

const ItemDetail = ({detalles}) => {
  const [cartItems, setCartItems] = useState(0)
  const {addItem} = useContext(cartContext)
  const [verContador, setVerContador] = useState(false)
  
  const onAdd = (quantity) => {
    setCartItems(quantity);
    addItem(detalles, quantity)
  }

  const funcionVerContador = () => {
    setVerContador(true)
  }

  if(!verContador) {
      return (
        <>
          <div className="postDetalle post">
          <h3>{detalles[0].title}</h3>
          <img src={detalles[0].pictureUrl}></img>
          <p>Precio: {detalles[0].price}</p>
          <Link to={"/carrito"}>
            <button>Confirmar Compra</button>
          </Link>
          </div>
          <ItemCount stock={15} onAdd={onAdd} onCount={funcionVerContador} />
        </>
    );
  }else{
    return(
      <div className="postDetalle post">
        <h3>{detalles[0].title}</h3>
        <img src={detalles[0].pictureUrl}></img>
        <p>Precio: {detalles[0].price}</p>
        <Link to={"/carrito"}>
          <button>Confirmar Compra</button>
        </Link>
      </div>

    )
  }
}

export default ItemDetail