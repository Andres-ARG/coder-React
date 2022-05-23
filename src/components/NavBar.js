import CartWidget from './CartWidget'
import {Link, NavLink} from "react-router-dom"

const NavBar = () => {
  return (
    <>
    <header>
        <nav className="navbar navbar-expand-lg navbar-light shadow p-3 mb-5 bg-secondary">
          <div className="container-fluid">
            <NavLink className="navbar-brand logo" to="/">LOGO</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/productos/AudioVideoTv">Tv, Audio y Video</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/productos/CelularesNotebooksTecnologia">Celulares, Notebooks y Tecnología</NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle" to="/productos/Electrodomesticos" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Electrodomesticos
                  </NavLink>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><NavLink className="dropdown-item" to="/productos/AiresAcondicionados">Aires Acondicionados</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/productos/Lavarropas">Lavarropas</NavLink></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><NavLink className="dropdown-item" to="/productos/Cafeteras">Cafeteras</NavLink></li>
                  </ul>
                </li>
              </ul>
              <div>
                <NavLink to="/carrito">
                  <CartWidget />
                </NavLink>
              </div>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <NavLink to="/search">
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </NavLink>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default NavBar