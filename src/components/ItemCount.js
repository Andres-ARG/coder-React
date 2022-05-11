import {useState} from "react";
import {NavLink} from "react-router-dom"


const ItemCount = ({stock, initial, onAdd, onCount}) =>{
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
    const cerrarConfirmado = () => {
        onCount()
        setConfirmado(false)
    }
    
        if(!confirmado){
            return (
                <div className='contenedor bg-light'>
                    <span>Producto</span>
                    <div className='contenedorContador'>
                        <button onClick={restar}>-</button>
                        <span>{contador}</span>
                        <button onClick={aumentar}>+</button>
                    </div>
                    <button type="button" className="agregarAlCarrrito" onClick={confirmar}>Agregar al Carrito</button>
                    <button>
                    <NavLink to={"/Cart"}>Terminar Compra</NavLink>
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
                    <button type="button" className="agregarAlCarrrito" onClick={confirmar}>Agregar al Carrito</button>
                    <button>
                    <NavLink to={"/Cart"}>Terminar Compra</NavLink>
                    </button>
                    <h6>Se confirmaron {contador} unidades</h6>
                    <button onClick={cerrarConfirmado}>Cerrar Confirmación</button>
                </div>
            )
        }
}


export default ItemCount