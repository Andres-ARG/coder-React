import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer';
import Cart from './components/Cart'
import { BrowserRouter } from "react-router-dom"
import {Route, Routes} from "react-router-dom"
import MiCustomProvider from "./CartContext"


function App() {
  return (
    <BrowserRouter>
      <MiCustomProvider>
        <NavBar></NavBar>
        <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/productos/:nombreCategoria" element={<ItemListContainer />}/>
          <Route path="/producto/:id" element={<ItemDetailContainer />}/>
          <Route path="/Cart" element={<Cart />}/>
        </Routes>
        </main>
      </MiCustomProvider>
    </BrowserRouter>
  );
}

export default App;
