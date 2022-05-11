import {useState} from "react";
import {Link, NavLink} from "react-router-dom"
import { contexto } from '../CartContext'

const ItemCount = ({stock, onAdd}) =>{

    const resultado = useState(1)
    const [contador, setContador] = resultado

    const aumentar = () => {
        if(contador < stock) setContador(contador + 1)
    }
    const restar = () => {
        if(contador < stock) setContador(contador - 1)
    }
    return (
        <div className='contenedor bg-light'>
            <span>Producto</span>
            <div className='contenedorContador'>
                <button onClick={restar}>-</button>
                <span>{contador}</span>
                <button onClick={aumentar}>+</button>
            </div>
            <button className="agregarAlCarrrito" onClick={onAdd}>Agregar al Carrito</button>
            <button>
            <NavLink to={"/cart"}>Terminar Compra</NavLink>
            </button>
        </div>
    )
}


export default ItemCount