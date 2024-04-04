// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-1c7c4.firebaseapp.com",
  projectId: "mern-blog-1c7c4",
  storageBucket: "mern-blog-1c7c4.appspot.com",
  messagingSenderId: "988657222364",
  appId: "1:988657222364:web:3a5bb806b3545b52412a19"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
