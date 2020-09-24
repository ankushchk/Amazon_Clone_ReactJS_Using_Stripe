import { FiberSmartRecord } from "@material-ui/icons";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXXyfbbYLYTmQAw8GSlHsjYCHkjPaNJtY",
  authDomain: "clone-8f7c8.firebaseapp.com",
  databaseURL: "https://clone-8f7c8.firebaseio.com",
  projectId: "clone-8f7c8",
  storageBucket: "clone-8f7c8.appspot.com",
  messagingSenderId: "133014073249",
  appId: "1:133014073249:web:1b8c1d10b6c89014fee5e0",
  measurementId: "G-FC7WEFLN6J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
