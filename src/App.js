import './App.css';
import ItemListContainer from "./components/ItemListContainer/listcontainer";
import Navbar from "./components/navbar";
import Cart from "./components/Cart/cart";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import ItemDetailsContainer from "./components/ItemDetailsContainer/itemdetailscontainer";
import CartCustomContext from "./components/CartContext/cartcontext";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, collection, getDocs} from 'firebase/firestore';
import { useEffect } from 'react';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-GjlNY2tYu_Ehy-sg8ssAtCA9Wjha9kM",
  authDomain: "sweet-pix-bd626.firebaseapp.com",
  projectId: "sweet-pix-bd626",
  storageBucket: "sweet-pix-bd626.appspot.com",
  messagingSenderId: "943153337209",
  appId: "1:943153337209:web:a1db3e7d13cc7100b495a8",
  measurementId: "G-TS5XR1XRHM"
};


function App() {

  useEffect( () => {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getFirestore(app)

    const colRef = collection(db, 'products');
    getDocs(colRef).then((snapshot) => {
      console.log("snapshot.docs >>>", snapshot.docs);
    }, (error) => {
        console.log("Error loading docs");
    });

  }, []);

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
