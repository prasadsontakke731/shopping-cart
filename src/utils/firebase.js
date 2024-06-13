// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA1BkC4WHOJweJtu4oaeNMeZpId7tPEclY",
    authDomain: "e-com-39e57.firebaseapp.com",
    projectId: "e-com-39e57",
    storageBucket: "e-com-39e57.appspot.com",
    messagingSenderId: "1038056013357",
    appId: "1:1038056013357:web:1c901f28928c50a549c2a4",
    measurementId: "G-EHN6ZZ9747"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()