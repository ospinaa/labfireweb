// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDli18f1yZXIrzUy0SryyzQesxL3y4Lu60",
  authDomain: "weblab-fc9e8.firebaseapp.com",
  projectId: "weblab-fc9e8",
  storageBucket: "weblab-fc9e8.firebasestorage.app",
  messagingSenderId: "801779363720",
  appId: "1:801779363720:web:f863523b9f32a2a7ec143d",
  measurementId: "G-CTFSWFNLET",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
