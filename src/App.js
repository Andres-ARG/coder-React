import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer';
import ShoppingCart from './components/ShoppingCart';
import { BrowserRouter } from "react-router-dom"
import {Route, Routes} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <main>
        <NavBar></NavBar>
        {/* <ItemListContainer />
        <ItemDetailContainer /> */}
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/productos/:nombreCategoria" element={<ItemListContainer />}/>
        <Route path="/producto/:id" element={<ItemDetailContainer />}/>
        <Route path="/carrito" element={<ShoppingCart />}/>
      </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
