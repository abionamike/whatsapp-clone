import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBok9_eXlRU-0dlxHWDA4KSt2VLcxYng4M",
    authDomain: "whatsapp-clone-e27b5.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-e27b5.firebaseio.com",
    projectId: "whatsapp-clone-e27b5",
    storageBucket: "whatsapp-clone-e27b5.appspot.com",
    messagingSenderId: "44096315692",
    appId: "1:44096315692:web:1747b779394cc1b6294c89",
    measurementId: "G-SC74F7MG0D"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;