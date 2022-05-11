import { useContext } from "react";
import CartContext from "../CartContext"


const Cart = () => {
  // const { precio_total } = useContext(CartContext);
  
  return (
    <div>
      <p>Carrito</p>
      {/* <p>Precio total : $ {precio_total}</p> */}
    </div>
  );
};

export default Cart