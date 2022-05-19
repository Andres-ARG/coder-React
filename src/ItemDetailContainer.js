import { useEffect, useState } from "react"
import ItemDetail from "./components/ItemDetail"
// import productosIniciales from "./productos.json"
import { useParams } from "react-router-dom" 
import {db} from "./firebase"
import { collection, getDoc, doc, getDocs, addDoc, query } from "firebase/firestore"


const ItemDetailContainer = () => {
  const [cargando, setCargando] = useState(true)
  const [producto, setProducto] = useState({})
  const {id} = useParams()

  useEffect(() => {
    
    
    // const pedidoDetail = new Promise(res => {
    //   setTimeout(() => {
    //     res(detailProduct)
    //   }, 1000)
    // })
    // pedidoDetail.then((res) => {
    //   setCargando(false)
    //   setProducto(res)
    // })


    const productosCollection = collection(db, "productos")
    const consulta = getDocs(productosCollection)
            consulta
                .then(resultado=>{
                    const productos = resultado.docs.map(doc=>{
                        const productosConId = doc.data()
                        productosConId.id = doc.id
                        console.log(productosConId)
                        return 
                    })
                    setProducto(productos)
                    setCargando(false)
                    
                })
                .catch(error=>{

                })
                .finally()
  })

  if(cargando === true ) {
    return (
      <p>Cargando...</p>
    )
  }else{
    return(
        <>
          <section className="contenedorDetalle">
            <ItemDetail producto={producto} />
          </section>
        </>
    )
  }
}

export default ItemDetailContainer
