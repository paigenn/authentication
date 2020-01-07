import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBNc9V27Sc2UAJLY2G2dDJ5If-ORNaoj9Q",
  authDomain: "authentication-84eb7.firebaseapp.com",
  databaseURL: "https://authentication-84eb7.firebaseio.com",
  projectId: "authentication-84eb7",
  storageBucket: "authentication-84eb7.appspot.com",
  messagingSenderId: "896033014545",
  appId: "1:896033014545:web:87d7744ce4222fb43202b0",
  measurementId: "G-KQL5PEGSMF"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
