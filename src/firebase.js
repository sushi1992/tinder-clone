import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBQBEs3aI4Udavg4PG9y-SaVIC-pQRwLYI",
    authDomain: "excite-1c08c.firebaseapp.com",
    databaseURL: "https://excite-1c08c.firebaseio.com",
    projectId: "excite-1c08c",
    storageBucket: "excite-1c08c.appspot.com",
    messagingSenderId: "511533242697",
    appId: "1:511533242697:web:00ae5f053843bc628fe298",
    measurementId: "G-TXZ3X96F5Z"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore();

/* export the variable or component you need access to */
export default database;