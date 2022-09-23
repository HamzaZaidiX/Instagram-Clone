import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAZtCvDt_qlNUGW2M9It8HPpj3WspOL-Q8",
  authDomain: "instagram-66a71.firebaseapp.com",
  databaseURL: "https://instagram-66a71-default-rtdb.firebaseio.com",
  projectId: "instagram-66a71",
  storageBucket: "instagram-66a71.appspot.com",
  messagingSenderId: "643477256189",
  appId: "1:643477256189:web:567d293ecbf4a423e1cb94",
  measurementId: "G-S1D28YVSRB"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

