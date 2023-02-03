// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByLEdyg6CWrf66bIzhng6pa28CjJpJowI",
  authDomain: "elsoc-64492.firebaseapp.com",
  projectId: "elsoc-64492",
  storageBucket: "elsoc-64492.appspot.com",
  messagingSenderId: "229279093144",
  appId: "1:229279093144:web:b4a394f8c8594b63291bed",
  measurementId: "G-ZQE159CNQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);