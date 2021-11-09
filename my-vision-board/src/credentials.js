// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByZIiBBzzT1p8YIIGBnQY_IeR9iuC56r8",
  authDomain: "memories-dfc78.firebaseapp.com",
  projectId: "memories-dfc78",
  storageBucket: "memories-dfc78.appspot.com",
  messagingSenderId: "643668291731",
  appId: "1:643668291731:web:e2e636a5ab371153e3dd66"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;