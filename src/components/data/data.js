import { getFirestore, getDocs, collection } from "firebase/firestore";
import {getDoc, doc, query, where} from 'firebase/firestore';
import {initializeApp} from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9nitGLBPqUDHD6pOh4wmIK9fup7y7IRQ",
    authDomain: "sweetpix-fc386.firebaseapp.com",
    projectId: "sweetpix-fc386",
    storageBucket: "sweetpix-fc386.appspot.com",
    messagingSenderId: "1037526837021",
    appId: "1:1037526837021:web:aef56405d791eb8ae063f4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

/* const candy = [
{
    "candyID" : "1",
    "title": "Peach Gummy Rings",
    "categoryID": "gummy",
    "description": "Full of Flavor",
    "price": 6.99,
    "pictureUrl": "https://images-na.ssl-images-amazon.com/images/I/51dEzK-%2BA7L.jpg"
},
{
    "candyID" : "2",
    "title": "Sno Caps",
    "categoryID": "chocolate",
    "description": "Great winter chocolate snack",
    "price": 4.99,
    "pictureUrl": "http://cdn.shopify.com/s/files/1/1322/9789/products/snowcaps_1024x1024.jpg?v=1471204851"
},
{
    "candyID" : "3",
    "title": "Classic Gummy Bears",
    "categoryID": "gummy",
    "description": "Cannot be a candy fanatic without these",
    "price": 5.99,
    "pictureUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdWpKkQ9OSTXhCJqJqTlBVMHWTGfuyellPpMaOQWQXNQmDW6CGgaknOulL24FwjZelGaQ&usqp=CAU"
},
{
    "candyID": "4",
    "title": "Sour Belts",
    "categoryID": "sour",
    "description": "Sour belts that pack a punch",
    "price": 4.59,
    "pictureUrl": "https://i.pinimg.com/originals/9b/96/69/9b96691367d55a93aeb4d84bb61ae111.png"
},
{
    "candyID": "5",
    "title": "Duvalin (Chocolate & Vanilla",
    "categoryID": "latinAmerican",
    "price": 4.99,
    "description": "Creamy mexican candy favorite, you'll want another one",
    "pictureUrl": "https://cdn.shopify.com/s/files/1/0151/1051/products/ricolino-duvalin-bi-sabor-avellana-y-vainilla-hazelnut-and-vanilla-18ct-952-oz-562099_800x.jpg?v=1622215735"
}
]
export const getProducts = () => {
return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(candy);
            //console.log('Descargar completa!', candy);
        }, 2000)
    }) 
} */

const db = getFirestore(app);
 export const getProducts = async () => {
    const colRef = collection(db, 'products');

    const snapshot = await getDocs(colRef);
    const products = snapshot.docs.map((rawDoc) => {
        return {
        id: rawDoc.id,
        ...rawDoc.data()
        }
    });

    return products;
    };

 export const getProductsByCategory = async (categoryID) => {
    const query1 = query(collection(db, 'products', where('categoryID', '==', categoryID)));

    const snapshot = await getDocs(query1);

    const products = snapshot.docs.map((document) => {
    return {
        id: document.id,
         ...document.data()
    }
            });
    return products;    
 };

export const getProductById = async (id) => {
   const itemRef = doc(db, 'products', id)
   const snapshot = await getDoc(itemRef);

    if (snapshot.exists()) {
        return {
        id: snapshot.id,
        ...snapshot.data() }
    } 
};
