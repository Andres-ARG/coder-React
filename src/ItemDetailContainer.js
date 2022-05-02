import { useEffect, useState } from "react"
import ItemDetail from "./components/ItemDetail"
import ItemCount from "./components/ItemCount"

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

const getItem = (productosIniciales) => {
  productosIniciales.map(producto => {
    console.log(producto)
  })
}

const ItemDetailContainer = () => {
  const [cargando, setCargando] = useState(true)
  const [producto, setProducto] = useState({})


  useEffect(() => {
    const detail = new Promise(res => {
      setTimeout(() => {
        res(productosIniciales)
      }, 2000)
    })
    detail.then(() => {
      setCargando(false)
      setProducto(productosIniciales)
    })
  })

  if(cargando === true ) {
    return (
      <p>Cargando...</p>
    )
  }else{
    return(
        <>
          <hr></hr>
          <div className="contenedorDetalle">
            <ItemDetail detalles={producto}/>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
          </div>
        </>
    )
  }
}

export default ItemDetailContainer
