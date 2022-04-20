import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import ItemListContainer from './ItemListContainer'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer nombre="Andrés"/>
      <Main></Main>
    </>
  );
}

export default App;
