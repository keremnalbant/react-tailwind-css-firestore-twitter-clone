// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCyvDMZL5NJj_mJGFQJYdOh0imNTRynpG8",
  authDomain: "twitter-clone-a275c.firebaseapp.com",
  projectId: "twitter-clone-a275c",
  storageBucket: "twitter-clone-a275c.appspot.com",
  messagingSenderId: "975742523070",
  appId: "1:975742523070:web:695afa3e57b67a7c3d70ef",
  measurementId: "G-HDYQQ88DSM"
});

const db = firebaseApp.firestore();

export default db;
