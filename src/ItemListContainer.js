import ItemCount from "./components/ItemCount"
import ItemList from "./components/ItemList"
import { useEffect } from "react"
import { useState } from "react"

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

const ItemListContainer = (props) => {
    const [cargando,setCargando] = useState(true)
    const [productos, setProductos] = useState([])


    useEffect(()=> {
        const pedido = new Promise((res) => {
            setTimeout(()=> {
                res(productosIniciales)
            }, 2000)
        })
        pedido.then(()=> {
            console.log('Ha slaido todo bien')
            setCargando(false)
            setProductos(productosIniciales)
        })
    })
  
    if(cargando == true){
        return (
            <p>Cargando...</p>
        )
    }else{
        return (
            <>
            <main className="main">
                <ItemList productos= {productos}/>
                <ItemCount initial={1} stock={10} onAdd={onAdd}/>
            </main>
            </>
        )
    }
}
export default ItemListContainer