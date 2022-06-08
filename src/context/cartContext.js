import { createContext, useState, useEffect } from "react";

export const contexto = createContext()
const {Provider}=contexto

const MiCustomProvider = ({children}) => {
	const [cartItems, setCartItems] = useState(()=>{
		try {
			const productosEnLocalStorage = localStorage.getItem('cartProducts')
			return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : []
		} catch (error) {
			return []
		}
	})

	const [cantidadTotal, setCantidadTotal]= useState(0)
	const [precioTotal, setPrecioTotal] = useState(0)


	useEffect(()=>{
		localStorage.setItem("cartProducts", JSON.stringify(cartItems))
		console.log(cartItems)

	},[cartItems])
	
	const estaEnCarrito=id=>{
		return cartItems.find(e=>e.id=id)
	}

	const addItemToCart = (producto, contador) => {
		
		if(estaEnCarrito(producto.id)){
			setCantidadTotal(contador)
			console.log('ya esta')
		}else{
			setCartItems([...cartItems, {...producto}])
			setPrecioTotal(precioTotal+producto.price)
			setCantidadTotal(cantidadTotal+producto.quantity)
		}
	}

	const deleteItemToCart = (producto) => {
        const inCart = cartItems.find((productInCart)=>{
            return productInCart.id === producto.id
        })
        if (inCart.quantity === 1) {
            setCartItems(
                cartItems.filter((productInCart)=>productInCart.id !== producto.id)
            )
        }else{
            setCartItems((productInCart)=>{
                if(productInCart.id === producto.id){
                    return {...inCart, quantity: inCart.quantity - 1 }
                }else return productInCart
            })
        }
    }

	const valorDelContexto = {
		cartItems,
		addItemToCart,
		deleteItemToCart,
		cantidadTotal,
		precioTotal
	}

	return (
		<Provider value={valorDelContexto}>
			{children}
		</Provider>
	)

}

export default MiCustomProvider