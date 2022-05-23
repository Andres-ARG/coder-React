import {useContext, useState} from "react";
import {NavLink} from "react-router-dom"
import { cartContext } from '../CartContext'

const ItemCount = ({stock, init, onAdd, onCount, producto}) =>{
    const [contador, setContador] = useState(init)
    const [confirmado, setConfirmado] = useState(false)

    const aumentar = () => {
        if(contador < stock) setContador(contador + 1)
    }
    const restar = () => {
        if(contador < stock) setContador(contador - 1)
    }
    const confirmar = () => {
        onAdd(contador,producto)
        setConfirmado(true)
    }
    const cerrarConfirmado = () => {
        onCount()
        setConfirmado(false)
    }
    if(!confirmado) {
        return (
        <div className='contenedor bg-light'>
            <span>Producto</span>
            <div className='contenedorContador'>
                <button onClick={restar}>-</button>
                <span>{contador}</span>
                <button onClick={aumentar}>+</button>
            </div>
            <button className="agregarAlCarrrito" onClick={confirmar}>Confirmar</button>
            <button>
            <NavLink to={"/cart"}>Terminar Compra</NavLink>
            </button>
        </div>
    )
    }else{
        return (
        <div className='contenedor bg-light'>
            <span>Producto</span>
            <div className='contenedorContador'>
                <button onClick={restar}>-</button>
                <span>{contador}</span>
                <button onClick={aumentar}>+</button>
            </div>
            <button className="agregarAlCarrrito" onClick={confirmar}>Confirmar</button>
            <button>
            <NavLink to={"/cart"}>Terminar Compra</NavLink>
            </button>
            <h6>
            Se confirmaron {contador} unidades!
            </h6>
            <button onClick={cerrarConfirmado}>Cerrar</button>
        </div>
        )
    }
}


export default ItemCount