// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwl9TJXbN7GeYRvvjhefwwj9rvnnZcxh8",
  authDomain: "cuth-firebase-context-tailwind.firebaseapp.com",
  projectId: "cuth-firebase-context-tailwind",
  storageBucket: "cuth-firebase-context-tailwind.appspot.com",
  messagingSenderId: "962439250500",
  appId: "1:962439250500:web:09e1129528b191f97e7211"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;