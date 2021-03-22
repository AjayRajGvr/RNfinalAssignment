import firebase from 'firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig ={
    apiKey: "AIzaSyDDcn0oR4m3hut3V02jGfoJxSR2xghAopE",
    authDomain: "react-native-auth-e7eb1.firebaseapp.com",
    projectId: "react-native-auth-e7eb1",
    storageBucket: "react-native-auth-e7eb1.appspot.com",
    messagingSenderId: "663648135516",
    appId: "1:663648135516:web:3543ed01938081da3cf999"
  };

 const Firebase = firebase.initializeApp(firebaseConfig)

  export default Firebase;