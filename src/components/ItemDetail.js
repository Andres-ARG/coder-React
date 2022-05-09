import { useState } from "react"

const ItemDetail = ({detalles}) => {
  // const [nombre,setNombre] = useState(0)
  // const handleChange = (e) => {
  //   if(e.target.value !== ""){
  //     console.log(e.target.value)
  //     setNombre(e.target.value)
  //     console.log(nombre)
  //   }
  // }
  return (
    <>
    {/* <input type="text" onChange={handleChange}></input>
     */}
    
    <div className="postDetalle">
      <h3>{detalles[0].title}</h3>
      <img src={detalles[0].pictureUrl}></img>
      <p>Precio: {detalles[0].price}</p>
    </div>
    </>
  )
}

export default ItemDetail