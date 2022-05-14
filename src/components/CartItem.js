import { useContext } from "react"
import { cartContext } from "../CartContext"

const CartItem = ({productoCart}) => {
    const {cantidadTotal, precioTotal} = useContext(cartContext)
    // console.log(cantidadTotal) 
    // console.log(productoCart.item.length)
    if(productoCart.item.length = 1){
        return (
            <div className="post">
                <p>Producto: {productoCart.item[0].title}</p>
                <p><img src="https://picsum.photos/200/300?random=2"></img></p>
                <p>Cantidad a comprar: {cantidadTotal}</p>
                <p>Precio Total: {precioTotal}</p>
            </div>
          )
    }
}

export default CartItem