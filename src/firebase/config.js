import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCjp9FTW3EBXrNk7Y4Y7-B_M-wt5heJXAc",
  authDomain: "thedojosite-cfd82.firebaseapp.com",
  projectId: "thedojosite-cfd82",
  storageBucket: "thedojosite-cfd82.appspot.com",
  messagingSenderId: "341863479380",
  appId: "1:341863479380:web:a10a0d1663d64b602795c1",
};

//  init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
