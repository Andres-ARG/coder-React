const Item = ({producto}) => {
    return (
        <article className="post">
            <h3>{producto.title}</h3>
            <img src={producto.pictureUrl}></img>
            <p>Precio: {producto.price}</p>
            <button className="btn-Post">Detalles</button>
        </article>
    )
}

export default Item