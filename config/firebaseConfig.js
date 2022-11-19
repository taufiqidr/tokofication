import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDiU35bNsoO9hP3Ei5M3Od8AQ9Jc4xQfcg",
    authDomain: "general-ea948.firebaseapp.com",
    projectId: "general-ea948",
    storageBucket: "general-ea948.appspot.com",
    messagingSenderId: "465777580491",
    appId: "1:465777580491:web:dd1ab7bdac20993fdcbe4e",
    measurementId: "G-13Y0ZCF272"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)