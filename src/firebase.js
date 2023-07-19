import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDs5z4HRPO6pSpyIlRgfKcjOiaYtIit2Fo",
  authDomain: "chat-76836.firebaseapp.com",
  projectId: "chat-76836",
  storageBucket: "chat-76836.appspot.com",
  messagingSenderId: "974801380316",
  appId: "1:974801380316:web:872a61f02909f6dfb92519",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()