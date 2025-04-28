// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { auth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0BR69COsCgsgA5wfH6masWCGW7jxaVYE",
  authDomain: "cadastrocrud-28fa2.firebaseapp.com",
  projectId: "cadastrocrud-28fa2",
  storageBucket: "cadastrocrud-28fa2.firebasestorage.app",
  messagingSenderId: "618599668047",
  appId: "1:618599668047:web:f66fb6f27a2703b8f3cd3a",
  measurementId: "G-93914TZWGS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);