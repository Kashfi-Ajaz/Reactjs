import * as firebase from "firebase";

 var firebaseConfig = {
    apiKey: "AIzaSyCKEbZoOTqnA31JucSiBkV7eiv3XF2DzNg",
    authDomain: "react-crud-a66a2.firebaseapp.com",
    databaseURL: "https://react-crud-a66a2.firebaseio.com",
    projectId: "react-crud-a66a2",
    storageBucket: "react-crud-a66a2.appspot.com",
    messagingSenderId: "1001893158401",
    appId: "1:1001893158401:web:2fb141a8c5e7eaab6fea00"
  };
  // Initialize Firebase
 var fireDb = firebase.initializeApp(firebaseConfig);

 export default fireDb.database().ref();