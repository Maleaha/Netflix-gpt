// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpM84ORhbW1sHiGtR1uH7HdUC8wNRGYN8",
  authDomain: "netflixgpt-d1df2.firebaseapp.com",
  projectId: "netflixgpt-d1df2",
  storageBucket: "netflixgpt-d1df2.appspot.com",
  messagingSenderId: "410331102487",
  appId: "1:410331102487:web:d47bb9890aae9355064b52",
  measurementId: "G-G4NKBCWHPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();