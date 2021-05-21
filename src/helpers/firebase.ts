import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const fire = firebase.initializeApp({
  apiKey: "AIzaSyCQcNnYWAjQEw86aBcY6RzgBgW0ZjGqJLw",
  authDomain: "react-native-code-test.firebaseapp.com",
  databaseURL: "https://react-native-code-test-default-rtdb.firebaseio.com",
  projectId: "react-native-code-test",
  storageBucket: "react-native-code-test.appspot.com",
  messagingSenderId: "970698734838",
  appId: "1:970698734838:web:d247a6e1f30488cef340d7",
  measurementId: "G-R8H0MFEFP7",
});

export const auth = fire.auth();
// export const db = fire.database();
export default {
  fire,
};
