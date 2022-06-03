import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_CAJgrRG9V2DcG6mrfh5anq6-a6fFC-w",
  authDomain: "flower-85977.firebaseapp.com",
  projectId: "flower-85977",
  storageBucket: "flower-85977.appspot.com",
  messagingSenderId: "50770981610",
  appId: "1:50770981610:web:824d7ce9a15a79f379dd93",
  measurementId: "G-476VVER3RW",
};
// Инициализируем Firebase

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
