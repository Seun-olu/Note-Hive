// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBKvwThnQzc1l06pZ3FzGRXKHHb7cMMjEM",
    authDomain: "note-hive-a3f9f.firebaseapp.com",
    projectId: "note-hive-a3f9f",
    storageBucket: "note-hive-a3f9f.firebasestorage.app",
    messagingSenderId: "650797793210",
    appId: "1:650797793210:web:cc2c7695a1044ebdfa6783",
    measurementId: "G-HP7HX9WQQB"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);