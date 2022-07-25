import './App.css';
//import Container from "./components/container/container";
import Navbar from "./components/navbar";
//import CartWidget from "./components/cart"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        {/* /<CartWidget/> */}

      </header>
      {/*
      <Container texto={'Find the best sweets here '}></Container>
      <Container texto={'A subscription candy box service for your taste buds'}></Container>
      <Container texto={'Rated best in variety and quality'}></Container> */}
    </div>
  );
}

export default App;
