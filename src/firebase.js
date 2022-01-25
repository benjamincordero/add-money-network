import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseapp = initializeApp({
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
});
firebaseapp;

const db = getFirestore();

export default db;
