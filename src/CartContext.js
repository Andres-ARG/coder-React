import { createContext, useState } from "react"

export const cartContext = createContext()
const { Provider } = cartContext


const MiCustomProvider = ({children}) => {
  const [cart,setCart] = useState([])
  const [cantidadTotal,setCantidadTotal] = useState(0)
  const [precioTotal,setPrecioTotal] = useState(0)
  
  
  
  const addItem = (item, quantity) => {
    if(isInCart(item.id)){
      const newCart = [...cart]
      for (const element of newCart) {
        if(element.item.id == item.id){
          element.quantity = element.quantity + quantity
        }
      }
      setCart(...newCart)
    }else{
      setCart([
        ...cart,
        {
          item: item,
          quantity: quantity
        }
      ])
      setCantidadTotal(cantidadTotal + quantity)
      setPrecioTotal(item[0].price * quantity)
    }
  }



  // console.log(cart)

  const removeItem = (id) => {
    const newCart = [...cart].map((element) => element.id !== id);
    setCart(newCart);
  }

  const clear = () => {
    setCart([])
  }

  const isInCart = (id) => {
    return cart.find(e => e.item.id === id)
  }

  const valorDelContexto = {
    cantidadTotal ,
    precioTotal,
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