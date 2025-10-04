import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3JHErBep0EtwKIUgxJUvnNEcuc9hDSxA",
  authDomain: "rureserve-c18f8.firebaseapp.com",
  projectId: "rureserve-c18f8",
  storageBucket: "rureserve-c18f8.firebasestorage.app",
  messagingSenderId: "560095611699",
  appId: "1:560095611699:web:f0705dc17438e73c9f0c46",
  measurementId: "G-EG2F594BHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
