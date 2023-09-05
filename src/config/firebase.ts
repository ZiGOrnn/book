// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIjxAMviqWcKVHY9oi5AsWlxxCGEDF9TE",
  authDomain: "book-8ca7a.firebaseapp.com",
  projectId: "book-8ca7a",
  storageBucket: "book-8ca7a.appspot.com",
  messagingSenderId: "543102641129",
  appId: "1:543102641129:web:ef953e7111e0406a2da178",
  measurementId: "G-4KFZN1R50F",
  databaseURL:
    "https://book-8ca7a-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const database = getDatabase(firebaseApp);
const storage = getStorage(firebaseApp, "gs://book-8ca7a.appspot.com");
// const analytics = getAnalytics(firebaseApp);

export { database, firebaseAuth, firestore, storage };
