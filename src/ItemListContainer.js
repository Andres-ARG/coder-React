import ItemList from "./components/ItemList"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import productosIniciales from "./productos.json"

const ItemListContainer = () => {
    const [cargando,setCargando] = useState(true)
    const [productos, setProductos] = useState([])
    const { nombreCategoria } = useParams()
    


    
    useEffect(()=> {
        if(nombreCategoria === undefined){
            const pedido = new Promise((res) => {
                setTimeout(()=> {
                    res(productosIniciales)
                }, 1000)
            })
            pedido.then((res)=> {
                setCargando(false)
                setProductos(res)
            })
        }else{
            const productosFiltrados = productosIniciales.filter(cat => cat.category === nombreCategoria)
            const pedidoPorCategoria = new Promise(res => {
                setTimeout(()=> {
                    res(productosFiltrados)
                },1000)
            })
            pedidoPorCategoria.then((res)=>{
                setCargando(false)
                setProductos(res)
            })
        }
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