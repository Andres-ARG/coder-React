import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer';
function App() {
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer />
      <ItemDetailContainer />
    </>
  );
}

export default App;
