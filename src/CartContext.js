import { createContext, useState } from "react"

export const cartContext = createContext()

const { Provider } = cartContext


const MiCustomProvider = ({children}) => {

  const [carrito,setCarrito] = useState([])
  const [cantidad_total,setCantidad_total] = useState(0)
  const [precio_total,setPrecio_total] = useState(0)
  
  
  
  const addItem = (contador, item) => {
    if(isInCart(item[0].id)){
      setCantidad_total(contador)
        console.log("El producto esta en el carrito")
    }else{
      setCantidad_total(cantidad_total + contador)
      setPrecio_total()
      setCarrito([...carrito, item])
      console.log(item)
    }
  };

  const removeItem = (id) => {
    const newCart = [...carrito].filter((carri) => carri.id !== id);
    setCarrito(newCart);
  }

  const clear = () => {
    setCarrito([])
  }

  const isInCart = (id) => {
    return carrito.find(e=>e.id==id)
  }

  const valorDelContexto = {
    cantidad_total ,
    precio_total ,
    carrito ,
    addItem ,
    removeItem , 
    clear ,
    isInCart
  }

  return (
    <Provider value={valorDelContexto} >
      {children}
    </Provider>
  )
}

export default MiCustomProvider