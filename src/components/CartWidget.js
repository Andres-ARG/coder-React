import { useContext } from "react"
import { cartContext } from "../CartContext"
const CartWidget = () => {
  const {cantidadTotal} = useContext(cartContext)
  return (
    <div>
      <span className="material-icons btnCarrito">shopping_cart</span>
      <span className="cantidadCartHeader mx-1">{cantidadTotal}</span>
    </div>
  )
}

export default CartWidget