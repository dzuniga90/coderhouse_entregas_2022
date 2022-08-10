import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from "./components/ItemListContainer/listcontainer";
import Navbar from "./components/navbar";
import Counter from "./components/Counter/index";
import { Routes, Route} from "react-router-dom";
import ItemDetailsContainer from "./components/ItemDetailsContainer/itemdetailscontainer";
function App() {
  return (
    <div className="App">
    
      <Navbar/>
      {/*<Counter></Counter>*/}
      <h2>Best Sellers</h2>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryID' element={<ItemListContainer/>}/>
        <Route path='/detail/:productID' element={<ItemDetailsContainer/>} />
      </Routes>

    </div>
  );
}

export default App;
