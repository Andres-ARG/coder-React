import React, { useEffect, useState, useContext} from "react"
import { contexto } from "../context/cartContext"
const CartWidget = () => {
  const [productsLength, setProductsLength] = useState(0)
  const {cartItems} = useContext(contexto)
  
  useEffect(()=>{
    setProductsLength(
      cartItems.reduce((previos,current)=> previos + current.quantity, 0)
    )
  }, [cartItems])
  
  return (
      <div className="contenedorBtnCarrito">
        <span className="material-icons mx-3 btnCarrito">shopping_cart</span>
        <div>{productsLength}</div>
      </div>
    )
  }
  
  export default CartWidget