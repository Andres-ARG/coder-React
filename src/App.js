import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './ItemListContainer'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer greeting="Andrés"/>
    </>
  );
}

export default App;
