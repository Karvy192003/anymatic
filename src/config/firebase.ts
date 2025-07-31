import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// If you're still getting auth/configuration-not-found error:
// 1. Go to Firebase Console: https://console.firebase.google.com/
// 2. Create a new project or check existing project
// 3. Enable Authentication (Email/Password)
// 4. Get your config from Project Settings > General > Your apps
// 5. Replace the config below with your new project's config

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCHeXGoU1ReYAtd7bBisUVN7LrXxIULRU8",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "anymate-bc00c.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "anymate-bc00c",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "anymate-bc00c.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "959004503400",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:959004503400:web:622a1675e0323f82b2badd"
};

console.log('Firebase Config:', {
  apiKey: firebaseConfig.apiKey.substring(0, 10) + '...',
  authDomain: firebaseConfig.authDomain,
  projectId: firebaseConfig.projectId,
  appId: firebaseConfig.appId
});

// Validate config
if (!firebaseConfig.apiKey || firebaseConfig.apiKey === 'mock-api-key') {
  console.error('Invalid Firebase API Key');
}
if (!firebaseConfig.projectId) {
  console.error('Invalid Firebase Project ID');
}

let app;
let auth;
let db;
let storage;

try {
  app = initializeApp(firebaseConfig);
  console.log('Firebase app initialized successfully');
  
  auth = getAuth(app);
  console.log('Firebase auth initialized');
  
  // Test auth connection
  auth.onAuthStateChanged((user) => {
    console.log('Auth state changed:', user ? 'User logged in' : 'No user');
  });
  
  db = getFirestore(app);
  console.log('Firebase Firestore initialized');
  
  storage = getStorage(app);
  console.log('Firebase Storage initialized');
  
} catch (error: any) {
  console.error('Firebase initialization error:', error);
  
  // Check for specific error types
  if (error.code === 'auth/configuration-not-found') {
    console.error('Configuration not found. Please check:');
    console.error('1. Firebase project exists and is accessible');
    console.error('2. Authentication is enabled in Firebase console');
    console.error('3. API key is correct and not restricted');
  }
  
  throw error;
}

export { auth, db, storage };
export default app;