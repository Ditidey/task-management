// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWi2udPkF8eSXEFME5be9MV7uNWT3eWEc",
  authDomain: "task-management-892b9.firebaseapp.com",
  projectId: "task-management-892b9",
  storageBucket: "task-management-892b9.appspot.com",
  messagingSenderId: "277255952812",
  appId: "1:277255952812:web:d75c2f8266961c56bf4209"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;