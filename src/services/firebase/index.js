// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmlVMrx5DmzPtDPzy9GMYapBIOBDy4SEs",
  authDomain: "backendmoiseeff.firebaseapp.com",
  projectId: "backendmoiseeff",
  storageBucket: "backendmoiseeff.appspot.com",
  messagingSenderId: "186937218050",
  appId: "1:186937218050:web:1f89fa51965916b9b9431b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

