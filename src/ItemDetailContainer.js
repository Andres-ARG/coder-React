import { useEffect, useState } from "react"
import ItemDetail from "./components/ItemDetail"
import productosIniciales from "./productos.json"
import { useParams } from "react-router-dom" 


const ItemDetailContainer = () => {
  const [cargando, setCargando] = useState(true)
  const [producto, setProducto] = useState({})
  const {id} = useParams()

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
            <ItemDetail detalles={producto} />
          </section>
        </>
    )
  }
}

export default ItemDetailContainer
