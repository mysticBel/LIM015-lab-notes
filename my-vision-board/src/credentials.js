// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZAM77LCeh3noJyVIPvuBpkrfIt4XNIMw",
  authDomain: "my-vision-board-c7b87.firebaseapp.com",
  projectId: "my-vision-board-c7b87",
  storageBucket: "my-vision-board-c7b87.appspot.com",
  messagingSenderId: "500056026680",
  appId: "1:500056026680:web:4ed0bd8b2f2859320880cd"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;