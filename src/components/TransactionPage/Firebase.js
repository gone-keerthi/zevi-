import firebase from "./Firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaV05tUNKEsVBCrBmkUR92PB_MKmVoE-8",
  authDomain: "task-project-22df9.firebaseapp.com",
  projectId: "task-project-22df9",
  storageBucket: "task-project-22df9.appspot.com",
  messagingSenderId: "1041215368792",
  appId: "1:1041215368792:web:c0bd319cd461bd3c58242d",
  measurementId: "G-WJ8CNJCDPQ"
};

firebase.initializeApp(firebaseConfig);
const DB = firebase.firestore();
 
export default DB;