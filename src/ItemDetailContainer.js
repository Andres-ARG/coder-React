import { useEffect, useState } from "react"
import ItemDetail from "./components/ItemDetail"
import ItemCount from "./components/ItemCount"
import productosIniciales from "./productos.json"
import { useParams } from "react-router-dom" 



const ItemDetailContainer = () => {
  const [cargando, setCargando] = useState(true)
  const [producto, setProducto] = useState({})
  const {id} = useParams()
  const [cartItems,setCartItems] = useState(0)
  
  const onAdd = (quantity) => {
    setCartItems(quantity);
  };

  useEffect(() => {
    const detailProduct = productosIniciales.filter(producto => {
      return producto.id == id
    })
   
    const pedidoDetail = new Promise(res => {
      setTimeout(() => {
        res(detailProduct)
      }, 1000)
    })
    pedidoDetail.then((res) => {
      setCargando(false)
      setProducto(res)
    })
  })

  if(cargando === true ) {
    return (
      <p>Cargando...</p>
    )
  }else{
    return(
      <ItemDetail producto={producto}/>
    )
  }
}

export default ItemDetailContainer
