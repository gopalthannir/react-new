import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDRcpIVsfNSvGaCr1OLEHcnfFrN_uhoEZE",
  authDomain: "react-new-features.firebaseapp.com",
  databaseURL: "https://react-new-features.firebaseio.com",
  projectId: "react-new-features",
  storageBucket: "react-new-features.appspot.com",
  messagingSenderId: "375748417233"
};

const firebaseConfig = firebase.initializeApp(config);

export default firebaseConfig;
