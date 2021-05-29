import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyD6HnVioOE_wxVxJHPzpnsGA_xKX2YKXK4",
  authDomain: "login-16cac.firebaseapp.com",
  projectId: "login-16cac",
  storageBucket: "login-16cac.appspot.com",
  messagingSenderId: "139205447331",
  appId: "1:139205447331:web:f3e51fcf82d36e8920b916",
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
