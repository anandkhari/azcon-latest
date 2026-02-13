// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "azcon-63e75.firebaseapp.com",
  projectId: "azcon-63e75",
  storageBucket: "azcon-63e75.firebasestorage.app",
  messagingSenderId: "397272796513",
  appId: "1:397272796513:web:7977fbe664ee98d5ae4920",
  measurementId: "G-66XWD16XMY"
};


// Initialize Firebase (Next.js Friendly logic)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);



// Initialize Services
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

// THE CRITICAL PART: NAMED EXPORTS
export { storage, db, auth, app };

