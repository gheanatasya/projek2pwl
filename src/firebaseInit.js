// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1yc7tdO53b5EwcbmGN_zXxeHn4fhSZw0",
  authDomain: "projek2-40f8c.firebaseapp.com",
  projectId: "projek2-40f8c",
  storageBucket: "projek2-40f8c.appspot.com",
  messagingSenderId: "714641371367",
  appId: "1:714641371367:web:c08bc9ea4e18fcadd27242",
  measurementId: "G-JPM6C59FL2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);