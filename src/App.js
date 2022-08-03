import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from "./components/container/listcontainer";
import Navbar from "./components/navbar";
import CartWidget from "./components/cart"
import Counter from "./components/contador/index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
         <CartWidget/>

      </header>

      <Counter></Counter>
      <h2>Best Sellers</h2>
      <ItemListContainer/>      
      {/*
      <ItemListContainer texto={'Find the best sweets here '}></ItemListContainer>
      <ItemListContainer texto={'A subscription candy box service for your taste buds'}></ItemListContainer>
      <ItemListContainer texto={'Rated best in variety and quality'}></ItemListContainer>  */}
    </div>
  );
}

export default App;
