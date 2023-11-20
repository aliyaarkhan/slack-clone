import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAg26HEFRUWzQmASy6KgFscurCBRTyTFGI",
  authDomain: "slack-clone-53220.firebaseapp.com",
  projectId: "slack-clone-53220",
  storageBucket: "slack-clone-53220.appspot.com",
  messagingSenderId: "36080756079",
  appId: "1:36080756079:web:647fbc34ba54e46ea0349a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;