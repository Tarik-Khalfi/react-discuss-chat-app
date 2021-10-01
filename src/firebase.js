import firebase from 'firebase/app'
import 'firebase/auth'
export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBLJ34nWRV64Z8MFMOtp6HslK3MYN2Kn1M",
    authDomain: "discuss-acf2f.firebaseapp.com",
    projectId: "discuss-acf2f",
    storageBucket: "discuss-acf2f.appspot.com",
    messagingSenderId: "363140418279",
    appId: "1:363140418279:web:bf33cd3f87a3d8b65e3042"
}).auth();

