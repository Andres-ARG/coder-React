import { useContext } from "react";
import {cartContext} from "../CartContext"
import CartItem from "./CartItem";
import {Link} from "react-router-dom"


const Cart = () => {
  const {cart} = useContext(cartContext)
  console.log(cart)
  return (
    <div>
      <div>
        {cart.map(producto=>{
          return (
            <CartItem key={producto.item[0].id} productoCart={producto}/>
          )
        })}
      </div>
      <Link to={"/"}>
        <button>Ir al catalogo de productos</button>
      </Link>
    </div>
  );
};

export default Cart