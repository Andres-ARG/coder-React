import { createContext, useState } from "react"

export const contexto = createContext()
// console.log(contexto)
const { Provider } = contexto


const MiCustomProvider = ({children}) => {
  // console.log(children)
  const [carrito,setCarrito] = useState([])
  const [cantidad_total,setCantidad_total] = useState(0)
  const [precio_total,setPrecio_total] = useState(0)


  const addItem = (item,quantity) => {
   /*  if(estaEnCarrito(producto)){
    }else{
      setCantidad_total(cantidad_total + cantidad)
    } */
  }

  const removeItem = (itemId) => {
    
  }

  const clear = () => {
    setCarrito([])
  }

  const isInCart = (id) => {
    return true || false
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