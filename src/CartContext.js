import { createContext, useState } from "react"

export const cartContext = createContext()
// console.log(contexto)
const { Provider } = cartContext


const MiCustomProvider = ({children}) => {
  // console.log(children)
  const [cart,setCart] = useState([])
  const [cantidad_total,setCantidad_total] = useState(0)
  const [precio_total,setPrecio_total] = useState(0)
  
  
  
  const addItem = (item, quantity) => {
    console.log(item)
    if(isInCart(item.id)){
      const newCart = [...cart]
      for (const element of newCart) {
        if(element.item.id == item.id){
          item.quantity = item.quantity + quantity
        }
      }
      setCart(newCart)
    }else{
      setCart([
        ...cart,
        {
          item: item,
          quantity: quantity
        }
      ])
    }
  };

  const removeItem = (id) => {
    const newCart = [...cart].map((element) => element.id !== id);
    setCart(newCart);
  }

  const clear = () => {
    setCart([])
  }

  const isInCart = (id) => {
    return cart.find(e => e.id === id)
  }

  const valorDelContexto = {
    cantidad_total ,
    precio_total,
    cart ,
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