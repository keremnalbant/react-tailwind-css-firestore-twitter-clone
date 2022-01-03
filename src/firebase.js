// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "YOURKEY",
  authDomain: "YOURDOMAIN",
  projectId: "YOURPROJECTID",
  storageBucket: "YOURBUCKET",
  messagingSenderId: "YOURS",
  appId: "YOURS",
  measurementId: "YOURS"
});

const db = firebaseApp.firestore();

export default db;
