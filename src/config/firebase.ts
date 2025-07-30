import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCHeXGoU1ReYAtd7bBisUVN7LrXxIULRU8",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "anymate-bc00c.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "anymate-bc00c",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "anymate-bc00c.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "959004503400",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:959004503400:web:622a1675e0323f82b2badd"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app; 