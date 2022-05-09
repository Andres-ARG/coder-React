import {useState} from "react";
import {Link, NavLink} from "react-router-dom"


const ItemCount = ({stock}) =>{

    const resultado = useState(1)
    const [contador, setContador] = resultado
    const onAdd = () => {
        console.log(contador)
    }
    


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
            <button className="agregarAlCarrrito" onClick={onAdd}><NavLink to={"/cart"}>Agregar al Carrito</NavLink></button>
        </div>
    )
}


export default ItemCount