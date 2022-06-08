import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
// import productosIniciales from "./productos.json"
import {db} from './firebase'

import {collection, getDoc, doc, getDocs, addDoc, query, where} from 'firebase/firestore'



const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const { nombreCategoria } = useParams()
  const [cargando,setCargando] = useState(true)
    
  
  
  useEffect(()=> {
    const productosCollection = collection(db, "productos")
    
    
    
    if(nombreCategoria === undefined){
        const consulta = getDocs(productosCollection)
        consulta
        .then((resultado)=>{
            const productos = resultado.docs.map((doc)=>{
                const productoConId = doc.data()
                productoConId.id = doc.id
                return productoConId
            })
            
            setProductos(productos)
            setCargando(false)
        })
    }else{
        const queryCategory = query(productosCollection, where("category", "==", nombreCategoria))
        const consultaCategory = getDocs(queryCategory)
        consultaCategory
            .then((resultado)=>{
                const productos = resultado.docs.map((doc)=>{
                    const productoConId = doc.data()
                    productoConId.id = doc.id
                    return productoConId
                })
                setProductos(productos)
            })
    }

    //   if(nombreCategoria === undefined){
    //         const pedido = new Promise((res) => {
    //             setTimeout(()=> {
    //                 res(productosIniciales)
    //             }, 1000)
    //         })
    //         pedido.then((res)=> {
    //             setCargando(false)
    //             setProductos(res)
    //         })
    //     }else{
    //       /* PEDIDO POR CATEGORIA */  
    //       const productosFiltrados = productosIniciales.filter(cat => cat.category === nombreCategoria)
    //         const pedidoPorCategoria = new Promise(res => {
    //             setTimeout(()=> {
    //                 res(productosFiltrados)
    //             },1000)
    //         })
    //         pedidoPorCategoria.then((res)=>{
    //             setCargando(false)
    //             setProductos(res)
    //         })
    //     }
    }, [nombreCategoria])
  
    if(cargando === true){
        return (
            <p>Cargando...</p>
        )
    }else{
        return (
                <>
                    <ItemList productos= {productos}/>
                </>
        )
    }
}
export default ItemListContainer