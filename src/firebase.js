import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDs5z4HRPO6pSpyIlRgfKcjOiaYtIit2Fo",
  authDomain: "chat-76836.firebaseapp.com",
  projectId: "chat-76836",
  storageBucket: "chat-76836.appspot.com",
  messagingSenderId: "974801380316",
  appId: "1:974801380316:web:872a61f02909f6dfb92519",
};

export const app = initializeApp(firebaseConfig);
export const Auth = getAuth();