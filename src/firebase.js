import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCkyx8KKPkGiKd6btEDOFaXcXmVjhmgua8",
    authDomain: "messenger-clone-1a730.firebaseapp.com",
    databaseURL: "https://messenger-clone-1a730.firebaseio.com",
    projectId: "messenger-clone-1a730",
    storageBucket: "messenger-clone-1a730.appspot.com",
    messagingSenderId: "478822049650",
    appId: "1:478822049650:web:92871bebbee5133c545feb",
    measurementId: "G-0EZH5M9JH1"
});

const db = firebaseApp.firestore();
// const auth = firebase.auth();

export default db;
// export { db, auth };