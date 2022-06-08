import {useState,useContext} from "react";
import {NavLink} from "react-router-dom"

import {contexto} from '../context/cartContext' 




const ItemCount = ({stock, init, onAdd, onCount, producto}) =>{
    const [contador, setContador] = useState(init)
    const [confirmado, setConfirmado] = useState(false)
    const {addItemToCart, cartItems} = useContext(contexto)
    
    const aumentar = () => {
        if(contador < stock) setContador(contador + 1)
    }
    const restar = () => {
        if(contador < stock) setContador(contador - 1)
    }
    const confirmar = () => {
        setConfirmado(true)
        onAdd(contador)
        addItemToCart(producto, contador)
    }
    const cerrarConfirmado = () => {
        onCount()
        setConfirmado(false)
    }
    if(!confirmado) {
        return (
        <div className="contenedorContador">
            <span>{producto.title}</span>
            <div className="contenedorBotonesContador">
                <button onClick={restar}>-</button>
                <span>{contador}</span>
                <button onClick={aumentar}>+</button>
            </div>
            <button onClick={confirmar}>Añadir al Carrito</button>
            
        </div>
    )
    }else{
        return (
        <div className="contenedorContador">
            <span>{producto.title}</span>
            <div className="contenedorBotonesContador">
                <button onClick={restar}>-</button>
                <span>{contador}</span>
                <button onClick={aumentar}>+</button>
            </div>
            
            
            <div className="textConfirmacion">
              <h6>
              Se confirmaron {contador} unidades!
              </h6>
              <button onClick={cerrarConfirmado}>Cerrar</button>
            </div>
        </div>
        )
    }
}


export default ItemCount