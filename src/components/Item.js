import {Link} from "react-router-dom"

const Item = ({producto}) => {
    return (
        <Link to={`/producto/${producto.id}`}>
            <article className="articuloProducto">
                <h3>{producto.title}</h3>
                <img src={producto.pictureUrl}></img>
                <p>Precio: ${producto.price}</p>
                <button className="btnArticle">Detalles</button>
            </article>
        </Link>
    )
}

export default Item