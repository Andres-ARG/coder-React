import {useState} from "react";
const ItemCount = ({stock, initial, onAdd}) =>{
    const resultado = useState(0)
    const contador = resultado[0]
    const setContador = resultado[1]

    const aumentar = () => {
        setContador(contador + 1)
    }
    const restar = () => {
        setContador(contador - 1)
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

ItemCount.defaultProps = {
    initial: "1"
}

export default ItemCount