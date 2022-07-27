import './App.css';
import ItemListContainer from "./components/container/container";
import Navbar from "./components/navbar";
import CartWidget from "./components/cart"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
         <CartWidget/>

      </header>
      
      <ItemListContainer texto={'Find the best sweets here '}></ItemListContainer>
      <ItemListContainer texto={'A subscription candy box service for your taste buds'}></ItemListContainer>
      <ItemListContainer texto={'Rated best in variety and quality'}></ItemListContainer> 
    </div>
  );
}

export default App;
