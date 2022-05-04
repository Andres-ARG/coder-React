import ItemList from "./components/ItemList"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
const productosIniciales = [
    {
        id: 1,
        title: "producto1",
        price: "$2000",
        pictureUrl: "https://picsum.photos/200/300?random=1",
        category: "Ropa"
    },
    {
        id: 2,
        title: "producto2",
        price: "$4000",
        pictureUrl: "https://picsum.photos/200/300?random=2",
        category: "Pulseras"
    },
    {
        id: 3,
        title: "producto3",
        price: "$1000",
        pictureUrl: "https://picsum.photos/200/300?random=3",
        category: "Relojes"
    }
]

const ItemListContainer = () => {
    const [cargando,setCargando] = useState(true)
    const [productos, setProductos] = useState([])
    const { nombreCategoria } = useParams()
    // console.log(nombreCategoria)


    useEffect(()=> {
        
        if(nombreCategoria === undefined){
            console.log("pido todos los productos")
            const pedido = new Promise((res) => {
                setTimeout(()=> {
                    res(productosIniciales)
                }, 1000)
            })
            pedido.then(()=> {
                setCargando(false)
                setProductos(productosIniciales)
            })
        }else{
            console.log("pido los productos por categoria")
            const productosFiltrados = productosIniciales.filter(cat => cat.category === nombreCategoria)
            const pedidoPorCategoria = new Promise(res => {
                setTimeout(()=> {
                    res(productosFiltrados)
                },1000)
            })
            pedidoPorCategoria.then(()=>{
                setCargando(false)
                setProductos(productosFiltrados)
            })
        }
    }, [nombreCategoria])
  
    if(cargando === true){
        return (
            <p>Cargando...</p>
        )
    }else{
        return (
                <ItemList productos= {productos}/>
        )
    }
}
export default ItemListContainer