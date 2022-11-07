//firebase config

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//Your web app config
const firebaseConfig = {
    apiKey: "AIzaSyB6T3pjGH3N5WHinfD73b5rdRrKgPEhDGA",
    authDomain: "reactapp-dfa8a.firebaseapp.com",
    databaseURL: "https://reactapp-dfa8a-default-rtdb.firebaseio.com",
    projectId: "reactapp-dfa8a",
    storageBucket: "reactapp-dfa8a.appspot.com",
    messagingSenderId: "640112538545",
    appId: "1:640112538545:web:53a083ea02e00e8dd74390",
    measurementId: "G-Y79K7L3M3N"
  };


    firebase.initializeApp(firebaseConfig);

export default firebase;