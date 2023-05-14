// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHmZ2b8I9sLBOJBFj33tfKmLG9gUoIcCg",
  authDomain: "kiufinder.firebaseapp.com",
  projectId: "kiufinder",
  storageBucket: "kiufinder.appspot.com",
  messagingSenderId: "580657727014",
  appId: "1:580657727014:web:d0f0d7d568dd6fe84a08e7",
  measurementId: "G-HPKH1760PR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// const analytics = getAnalytics(app);
