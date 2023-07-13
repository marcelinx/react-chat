import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDsRzHube7jqbRM_xFgFBcvCk2QPl1ECvY",
  authDomain: "chat-914ee.firebaseapp.com",
  projectId: "chat-914ee",
  storageBucket: "chat-914ee.appspot.com",
  messagingSenderId: "74533684757",
  appId: "1:74533684757:web:f05684d1530402d1daf01c",
  measurementId: "G-Q2THZC7723",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const databaseApp = getFirestore(app);