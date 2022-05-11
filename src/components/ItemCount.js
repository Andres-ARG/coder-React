import {useState} from "react";
import {NavLink} from "react-router-dom"


const ItemCount = ({stock, initial, onAdd}) =>{
    const resultado = useState(1)
    const [contador, setContador] = resultado
    const [confirmado, setConfirmado] = useState(false)
    const aumentar = () => {
        if(contador < stock) setContador(contador + 1)
    }
    const restar = () => {
        if(contador < stock) setContador(contador - 1)
    }
    const confirmar = () => {
        onAdd(contador)
        console.log(contador)
        setConfirmado(true)
    }
    return (
        <div className='contenedor bg-light'>
            <span>Producto</span>
            <div className='contenedorContador'>
                <button onClick={restar}>-</button>
                <span>{contador}</span>
                <button onClick={aumentar}>+</button>
            </div>
            <button className="agregarAlCarrrito" onClick={confirmar}>Agregar al Carrito</button>
            <button>
            <NavLink to={"/Cart"}>Terminar Compra</NavLink>
            </button>
        </div>
    )
}


export default ItemCount