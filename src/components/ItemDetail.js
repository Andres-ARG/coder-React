const ItemDetail = ({detalles}) => {
  
  return (
    <>
    <div className="postDetalle">
      <h3>{detalles[0].title}</h3>
      <img src={detalles[0].pictureUrl}></img>
      <p>Precio: {detalles[0].price}</p>
    </div>
    </>
  )
}

export default ItemDetail