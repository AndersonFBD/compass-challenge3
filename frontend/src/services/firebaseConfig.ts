// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCydDBc4S4FY1TVmIV5Q-K1UQKRT0o-oho",
  authDomain: "challenge3-compass-2ee12.firebaseapp.com",
  projectId: "challenge3-compass-2ee12",
  storageBucket: "challenge3-compass-2ee12.appspot.com",
  messagingSenderId: "655559134171",
  appId: "1:655559134171:web:305a60d840f5eb118bf5fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
