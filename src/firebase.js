import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyBayWdAfB8rUC-ydvgg1ApBJ9uKB5nGgKY",
    authDomain: "gthacks-fa71e.firebaseapp.com",
    databaseURL: "https://gthacks-fa71e.firebaseio.com",
    projectId: "gthacks-fa71e",
    storageBucket: "gthacks-fa71e.appspot.com",
    messagingSenderId: "666466018982",
    appId: "1:666466018982:web:e67a80adb73ec934f47667",
    measurementId: "G-8WZCNNMF5T"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;