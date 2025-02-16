// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqCAy8HG5bGP87cJTH1nWqxl8q5twy71s",
  authDomain: "rick-and-morty-auth-98893.firebaseapp.com",
  projectId: "rick-and-morty-auth-98893",
  storageBucket: "rick-and-morty-auth-98893.firebasestorage.app",
  messagingSenderId: "53296020287",
  appId: "1:53296020287:web:0ff4513b174ed05891318a",
  measurementId: "G-PBVV0RE7R4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app)