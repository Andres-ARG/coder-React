import React from 'react'

const ItemCart = ({item}) => {
  
    return (
    <table className="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Producto</th>
      <th scope="col">Cantidad</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>{item.title}</td>
      <td>{item.quantity}</td>
    </tr>
  </tbody>
</table>
  )
}

export default ItemCart