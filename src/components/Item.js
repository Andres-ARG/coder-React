import {Link} from "react-router-dom"

const Item = ({producto}) => {
    return (
        <article className="post">
            <h3>{producto.title}</h3>
            <img src={producto.pictureUrl}></img>
            <p>Precio: {producto.price}</p>
            <Link to={`/producto/${producto.id}`}>
                <button className="btn-Post">Detalles</button>
            </Link>
        </article>
    )
}

export default Item