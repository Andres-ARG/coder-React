import { useContext } from "react";
import {cartContext} from "../CartContext"
import CartItem from "./CartItem";



const Cart = () => {
  const {cart} = useContext(cartContext)
  // console.log(cart)
  
  return (
    <div>
      <div>
        {cart.map(producto=>{
          return (
            <CartItem key={producto.item[0].id} productoCart={producto}/>
          )
        })}
      </div>
    </div>
  );
};

export default Cart