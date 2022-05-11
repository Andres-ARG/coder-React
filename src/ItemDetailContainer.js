import { useEffect, useState } from "react"
import ItemDetail from "./components/ItemDetail"
import ItemCount from "./components/ItemCount"
import productosIniciales from "./productos.json"
import { useParams } from "react-router-dom" 



const ItemDetailContainer = () => {
  const [cargando, setCargando] = useState(true)
  const [producto, setProducto] = useState({})
  const {id} = useParams()
  
  const onAdd = () => {
    console.log("Funcion onAdd")
}

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
        <>
          <section className="contenedorDetalle">
            <ItemDetail detalles={producto}/>
            <ItemCount initial={1} stock={15} onAdd={onAdd}/>
          </section>
        </>
    )
  }
}

export default ItemDetailContainer
