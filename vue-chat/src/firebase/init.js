import firebase from 'firebase'
import firebase from 'firebase/firestore'
  // Initialize Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyAc5snpeNrupp4ZiLxLGwoEa40WQAJkdsY",
    authDomain: "chat-269ba.firebaseapp.com",
    databaseURL: "https://chat-269ba.firebaseio.com",
    projectId: "chat-269ba",
    storageBucket: "chat-269ba.appspot.com",
    messagingSenderId: "164273265733",
    appId: "1:164273265733:web:2df40caba96ffc3004572c"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })


  export default firebaseApp.firestore()