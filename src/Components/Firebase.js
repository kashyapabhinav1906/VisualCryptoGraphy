import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBWQOGt2vWoEPmw1qLRa1vk3AsMmriFW-Y",
    authDomain: "se-project-ce686.firebaseapp.com",
    projectId: "se-project-ce686",
    storageBucket: "se-project-ce686.appspot.com",
    messagingSenderId: "754956045632",
    appId: "1:754956045632:web:3aa6fc1ad583337fba7ea5",
    measurementId: "G-ZJJECXDLEQ"
  };

  firebase.initializeApp(firebaseConfig);
  export const auth=firebase.auth();
  export const provider =new firebase.auth.GoogleAuthProvider();
  export default firebase;
