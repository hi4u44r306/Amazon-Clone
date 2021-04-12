// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBLQXOjkqJt2G6e-V_iPXy7kWgLb9T7iKY",
  authDomain: "clone-15393.firebaseapp.com",
  projectId: "clone-15393",
  storageBucket: "clone-15393.appspot.com",
  messagingSenderId: "889477763336",
  appId: "1:889477763336:web:671ae38b289d144c49dcbd",
  measurementId: "G-44BDW6X315"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();

export { db, auth };