import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAbRHHRpHZt-4iZHZB3oVJ_zscSe6B_CHU",
    authDomain: "firestorepro-50493.firebaseapp.com",
    projectId: "firestorepro-50493",
    storageBucket: "firestorepro-50493.appspot.com",
    messagingSenderId: "567148919039",
    appId: "1:567148919039:web:7bea33724cda0ff2a034ca",
    measurementId: "G-5PL3FMP60S"
  });

  const db = firebaseConfig.firestore();
  export default db;