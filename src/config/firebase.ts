// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrAFWRytGPVzqKIcjjArEWWGgu2Vx96h4",
  authDomain: "my-prjt-4dcfd.firebaseapp.com",
  projectId: "my-prjt-4dcfd",
  storageBucket: "my-prjt-4dcfd.appspot.com",
  messagingSenderId: "51213926025",
  appId: "1:51213926025:web:886fdafbc1462a8bca1058",
  measurementId: "G-R5CSSN4Y11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth= getAuth(app);
export const provider = new GoogleAuthProvider();
export const db= getFirestore(app);