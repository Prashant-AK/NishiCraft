import firebase from "firebase";
import "firebase/storage";
var firebaseConfig = {
  apiKey: "AIzaSyBJk8fOZV-2q83Jl9yzTMK2V3sZx6OWyQM",
  authDomain: "craft-a14e1.firebaseapp.com",
  projectId: "craft-a14e1",
  storageBucket: "craft-a14e1.appspot.com",
  messagingSenderId: "54155242123",
  appId: "1:54155242123:web:4fbb9bee752033c600428e",
  measurementId: "G-JL0J926Z4B",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { firebaseApp, db, auth };
