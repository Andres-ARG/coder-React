import {useState} from "react";
const ItemCount = ({initial, stock, onAdd}) =>{
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
            <span>Alas +13</span>
            <div className='contenedorContador'>
                <button onClick={restar}>-</button>
                <span>{contador}</span>
                <button onClick={aumentar}>+</button>
            </div>
            <button className="agregarAlCarrrito">Agregar al carrito</button>
        </div>
    )
}


export default ItemCount