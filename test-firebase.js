// Test script to check Firebase connectivity
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Firebase configuration from .env file
const firebaseConfig = {
  apiKey: "AIzaSyCHeXGoU1ReYAtd7bBisUVN7LrXxIULRU8",
  authDomain: "anymate-bc00c.firebaseapp.com",
  projectId: "anymate-bc00c",
  storageBucket: "anymate-bc00c.firebasestorage.app",
  messagingSenderId: "959004503400",
  appId: "1:959004503400:web:622a1675e0323f82b2badd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log('Firebase app initialized');

// Test Firestore connection
async function testFirestore() {
  try {
    console.log('Testing Firestore connection...');
    const usersCollection = collection(db, 'users');
    const usersSnapshot = await getDocs(usersCollection);
    
    console.log(`Successfully connected to Firestore. Found ${usersSnapshot.size} users.`);
    
    usersSnapshot.forEach(doc => {
      console.log(`User ID: ${doc.id}`);
    });
    
    return true;
  } catch (error) {
    console.error('Error connecting to Firestore:', error);
    return false;
  }
}

// Run the test
testFirestore()
  .then(success => {
    if (success) {
      console.log('Firebase database is working properly!');
    } else {
      console.log('Failed to connect to Firebase database.');
    }
  })
  .catch(error => {
    console.error('Unexpected error:', error);
  });