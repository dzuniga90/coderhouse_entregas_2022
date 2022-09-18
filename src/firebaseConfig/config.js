import { useEffect } from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {getFirestore, collection, getDocs} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
export default app;
export const auth = getAuth(app);

//const analytics = getAnalytics(app);