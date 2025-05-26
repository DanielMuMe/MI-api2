// src/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js ";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js ";

const firebaseConfig = {
  apiKey: "AIzaSyBNyuUCfRwTv01e54l6-vNfjyt0jCHbnQ8",
  authDomain: "fireapi-219c9.firebaseapp.com",
  projectId: "fireapi-219c9",
  storageBucket: "fireapi-219c9.firebasestorage.app",
  messagingSenderId: "509515453815",
  appId: "1:509515453815:web:3847dbb848cad260d27d72"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
};