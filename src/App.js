import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter } from "react-router-dom"
import {Route, Routes} from "react-router-dom"
import Cart from './components/Cart'
import Footer from './components/Footer';
import MiCustomProvider from './context/cartContext'




function App() {
  return (
    <BrowserRouter>
      
        <MiCustomProvider>
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<ItemListContainer />}/>
                <Route path="/productos/:nombreCategoria" element={<ItemListContainer />}/>
                <Route path="/producto/:id" element={<ItemDetailContainer />}/>
                <Route path="/Cart" element={<Cart />}/>
            </Routes>
          </main>
        </MiCustomProvider>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
