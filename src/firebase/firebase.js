import { getFirestore } from 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRw7fn6GFbmTIYFWSG0nHORDt_YfjJDUc",
  authDomain: "ecommerce-8c6bc.firebaseapp.com",
  projectId: "ecommerce-8c6bc",
  storageBucket: "ecommerce-8c6bc.appspot.com",
  messagingSenderId: "403162364714",
  appId: "1:403162364714:web:dd6a8d85348d791283bc53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

