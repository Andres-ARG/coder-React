import React from 'react'
import Item from './Item'


const ItemList = ({productos}) => {
  return (
    <section className='contenedorProductos'>
        {productos.map(producto=>{
            return(
                <Item key={producto.id} producto={producto}/>
            )
        })}
    </section>
  )
}

export default ItemList