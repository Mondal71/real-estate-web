// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-web-7ec9d.firebaseapp.com",
  projectId: "real-estate-web-7ec9d",
  storageBucket: "real-estate-web-7ec9d.firebasestorage.app",
  messagingSenderId: "457100003660",
  appId: "1:457100003660:web:db5bab5fb7e80e882a67e9",
};

// Initialize Firebase  
export const app = initializeApp(firebaseConfig);
