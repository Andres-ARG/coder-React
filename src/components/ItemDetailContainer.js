import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
// import productosIniciales from './productos.json'
import {useParams} from 'react-router-dom'
import { db } from "./firebase";
import { collection , getDoc , doc , getDocs , addDoc , query } from "firebase/firestore"; 


const ItemDetailContainer = () => {
  const [cargando, setCargando] = useState(true)
  const [producto, setProducto] = useState({})
  const {id} = useParams()

  

  useEffect(()=>{
    const productosCollection = collection(db, "productos")
    const resultadoDelDoc = doc(productosCollection, id)

    const consulta = getDoc(resultadoDelDoc)

    consulta
      .then((resultado)=>{
       
        setProducto(resultado.data())
        setCargando(false)
        
      })
      .catch((error)=>{
        console.log(error)
      })

    
  //   // const detailProduct = productosIniciales.filter((producto)=>{
  //   //   return producto.id == id
  //   // })
  //   // const pedidoDetail = new Promise((res)=>{
  //   //   setTimeout(()=>{
  //   //     res(detailProduct)
  //   //   },1000)
  //   // })
  //   // pedidoDetail.then((res)=>{
  //   //   setCargando(false)
  //   //   setProducto(res)
  //   // })
   })
  
  
  if(cargando === true) {
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