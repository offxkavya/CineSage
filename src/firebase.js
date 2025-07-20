// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjNozwg_cPQ1zRJgIlusNQIIv4b8U5lUs",
  authDomain: "cinesage-ab6fa.firebaseapp.com",
  projectId: "cinesage-ab6fa",
  storageBucket: "cinesage-ab6fa.appspot.com",
  messagingSenderId: "18947359494",
  appId: "1:18947359494:web:be3c44465f24c9e17bd487",
  measurementId: "G-NRT9GBVCJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export auth for authentication
export const auth = getAuth(app); 