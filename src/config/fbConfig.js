import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyDZrkBWCP_lT7fypKEoQgeHH0TkPF8RUK0",
  authDomain: "mrgrey-marioplan.firebaseapp.com",
  databaseURL: "https://mrgrey-marioplan.firebaseio.com",
  projectId: "mrgrey-marioplan",
  storageBucket: "mrgrey-marioplan.appspot.com",
  messagingSenderId: "595859895188",
  appId: "1:595859895188:web:156e681ebee676feb11581",
  measurementId: "G-WFD6RRNSQV",
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
// ko co gi o bai 16