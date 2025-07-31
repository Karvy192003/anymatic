import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  User as FirebaseUser,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import { User } from '../types';

// Helper function to get user-friendly error messages
const getErrorMessage = (errorCode: string): string => {
  switch (errorCode) {
    case 'auth/invalid-credential':
      return 'Invalid email or password. Please check your credentials and try again.';
    case 'auth/user-not-found':
      return 'No account found with this email address. Please sign up or check your email.';
    case 'auth/wrong-password':
      return 'Incorrect password. Please try again.';
    case 'auth/email-already-in-use':
      return 'An account with this email already exists. Please sign in instead.';
    case 'auth/weak-password':
      return 'Password is too weak. Please choose a stronger password.';
    case 'auth/invalid-email':
      return 'Please enter a valid email address.';
    case 'auth/too-many-requests':
      return 'Too many failed attempts. Please try again later.';
    case 'auth/user-disabled':
      return 'This account has been disabled. Please contact support.';
    default:
      return 'An error occurred. Please try again.';
  }
};

export const firebaseAuth = {
  // Register new user
  register: async (userData: { username: string; email: string; password: string }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        userData.email, 
        userData.password
      );

      const user = userCredential.user;

      // Update profile with username
      await updateProfile(user, {
        displayName: userData.username
      });

      // Create user document in Firestore
      const userDoc = {
        id: user.uid,
        username: userData.username,
        email: userData.email,
        avatar: `https://ui-avatars.com/api/?name=${userData.username}&background=3A86FF&color=fff`,
        isPremium: false,
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      await setDoc(doc(db, 'users', user.uid), userDoc);

      return {
        user: userDoc,
        token: await user.getIdToken()
      };
    } catch (error: any) {
      const message = getErrorMessage(error.code);
      throw new Error(message);
    }
  },

  // Login user
  login: async (credentials: { email: string; password: string }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth, 
        credentials.email, 
        credentials.password
      );

      const user = userCredential.user;

      // Get user data from Firestore
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      
      if (!userDoc.exists()) {
        throw new Error('User data not found');
      }

      const userData = userDoc.data() as User;

      return {
        user: userData,
        token: await user.getIdToken()
      };
    } catch (error: any) {
      const message = getErrorMessage(error.code);
      throw new Error(message);
    }
  },

  // Get user data by ID
  getUserData: async (userId: string): Promise<User> => {
    try {
      const userDoc = await getDoc(doc(db, 'users', userId));
      
      if (!userDoc.exists()) {
        throw new Error('User data not found');
      }

      return userDoc.data() as User;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  // Logout user
  logout: async () => {
    try {
      await signOut(auth);
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  // Get current user
  getCurrentUser: (): FirebaseUser | null => {
    return auth.currentUser;
  },

  // Listen to auth state changes
  onAuthStateChanged: (callback: (user: FirebaseUser | null) => void) => {
    return onAuthStateChanged(auth, callback);
  }
};

// Create a default admin user if not exists
// Commented out to prevent email-already-in-use error during app startup
/*
export const createDefaultAdmin = async () => {
  const adminEmail = 'kanhadubey268@gmail.com';
  const adminPassword = 'Satvik@1203';
  const adminUsername = 'Admin';
  try {
    // Check if user already exists in Firestore
    const adminDoc = await getDoc(doc(db, 'users', adminEmail));
    if (adminDoc.exists()) return; // Already exists
    // Create user with Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, adminEmail, adminPassword);
    const user = userCredential.user;
    await updateProfile(user, { displayName: adminUsername });
    // Create user document in Firestore
    const userDoc = {
      id: user.uid,
      username: adminUsername,
      email: adminEmail,
      avatar: `https://ui-avatars.com/api/?name=${adminUsername}&background=3A86FF&color=fff`,
      isPremium: true,
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    await setDoc(doc(db, 'users', user.uid), userDoc);
  } catch (error: any) {
    // Ignore if user already exists or error is email-already-in-use
    if (error.code !== 'auth/email-already-in-use') {
      console.error('Default admin creation error:', error);
    }
  }
};
*/ 