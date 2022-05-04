import { useEffect, useState } from "react"
import ItemDetail from "./components/ItemDetail"
import ItemCount from "./components/ItemCount"
import { useParams } from "react-router-dom" 

const onAdd = () => {
  console.log("Funcion onAdd")
}

const productosIniciales = [
  {
      id: 1,
      title: "producto1",
      price: "$2000",
      pictureUrl: "https://picsum.photos/200/300?random=1"
  },
  {
      id: 2,
      title: "producto2",
      price: "$4000",
      pictureUrl: "https://picsum.photos/200/300?random=2"
  },
  {
      id: 3,
      title: "producto3",
      price: "$1000",
      pictureUrl: "https://picsum.photos/200/300?random=3"
  }
]


const ItemDetailContainer = () => {
  const [cargando, setCargando] = useState(true)
  const [producto, setProducto] = useState({})
  
  
  const {id} = useParams()

  // console.log(id)


  useEffect(() => {
    const detailProduct = productosIniciales.filter(producto => {
      // console.log(producto)
      return producto.id == id
    })
   
    const pedidoDetail = new Promise(res => {
      setTimeout(() => {
        res(detailProduct)
      }, 1000)
    })
    pedidoDetail.then(() => {
      setCargando(false)
      setProducto(detailProduct)
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
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
          </section>
        </>
    )
  }
}

export default ItemDetailContainer
