import './App.css';
import ItemListContainer from "./components/ItemListContainer/listcontainer";
import Navbar from "./components/navbar";
import Cart from "./components/Cart/cart";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import ItemDetailsContainer from "./components/ItemDetailsContainer/itemdetailscontainer";
import CartCustomContext from "./components/CartContext/cartcontext";

function App() {
  return (
    <div className="App">
    <CartCustomContext>
    <BrowserRouter>
      <Navbar/>
      {/*<Counter></Counter>*/}
      <h2>Best Sellers</h2>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/category/:categoryID' element={<ItemListContainer/>}/>
        <Route path='/detail/:productID' element={<ItemDetailsContainer/>} />
      </Routes>
    </BrowserRouter>
      </CartCustomContext>
    </div>
  );
}

export default App;
