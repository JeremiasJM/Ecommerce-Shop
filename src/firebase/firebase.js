import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDJIrmPFkuZLZs6I281SYQEKOom9IOv32g",
  authDomain: "react-pructos-sells.firebaseapp.com",
  projectId: "react-pructos-sells",
  storageBucket: "react-pructos-sells.appspot.com",
  messagingSenderId: "187735385871",
  appId: "1:187735385871:web:9d53bdf05cfd942ad5c07a"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);