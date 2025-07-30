import { 
  collection, 
  doc, 
  addDoc, 
  getDocs, 
  getDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { GeneratedReel, User } from '../types';

export const firebaseDb = {
  // Reels operations
  reels: {
    // Create new reel
    create: async (reelData: Omit<GeneratedReel, 'id'>, userId: string) => {
      try {
        const reelDoc = {
          ...reelData,
          userId,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        };

        const docRef = await addDoc(collection(db, 'reels'), reelDoc);
        return { id: docRef.id, ...reelDoc };
      } catch (error: any) {
        throw new Error(error.message);
      }
    },

    // Get all reels
    getAll: async () => {
      try {
        const q = query(
          collection(db, 'reels'), 
          orderBy('createdAt', 'desc')
        );
        const querySnapshot = await getDocs(q);
        
        return querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as GeneratedReel[];
      } catch (error: any) {
        throw new Error(error.message);
      }
    },

    // Get reels by user
    getByUser: async (userId: string) => {
      try {
        const q = query(
          collection(db, 'reels'), 
          where('userId', '==', userId),
          orderBy('createdAt', 'desc')
        );
        const querySnapshot = await getDocs(q);
        
        return querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as GeneratedReel[];
      } catch (error: any) {
        throw new Error(error.message);
      }
    },

    // Get single reel
    getById: async (reelId: string) => {
      try {
        const docRef = doc(db, 'reels', reelId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          return { id: docSnap.id, ...docSnap.data() } as GeneratedReel;
        } else {
          throw new Error('Reel not found');
        }
      } catch (error: any) {
        throw new Error(error.message);
      }
    },

    // Update reel
    update: async (reelId: string, updates: Partial<GeneratedReel>) => {
      try {
        const docRef = doc(db, 'reels', reelId);
        await updateDoc(docRef, {
          ...updates,
          updatedAt: serverTimestamp()
        });
      } catch (error: any) {
        throw new Error(error.message);
      }
    },

    // Delete reel
    delete: async (reelId: string) => {
      try {
        const docRef = doc(db, 'reels', reelId);
        await deleteDoc(docRef);
      } catch (error: any) {
        throw new Error(error.message);
      }
    },

    // Like/unlike reel
    toggleLike: async (reelId: string, userId: string) => {
      try {
        const docRef = doc(db, 'reels', reelId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const reel = docSnap.data() as GeneratedReel;
          const likedBy = reel.likedBy || [];
          const isLiked = likedBy.includes(userId);
          
          if (isLiked) {
            // Unlike
            const newLikedBy = likedBy.filter(id => id !== userId);
            await updateDoc(docRef, {
              likedBy: newLikedBy,
              likes: reel.likes - 1,
              updatedAt: serverTimestamp()
            });
            return { likes: reel.likes - 1, isLiked: false };
          } else {
            // Like
            const newLikedBy = [...likedBy, userId];
            await updateDoc(docRef, {
              likedBy: newLikedBy,
              likes: reel.likes + 1,
              updatedAt: serverTimestamp()
            });
            return { likes: reel.likes + 1, isLiked: true };
          }
        } else {
          throw new Error('Reel not found');
        }
      } catch (error: any) {
        throw new Error(error.message);
      }
    }
  },

  // User operations
  users: {
    // Get user by ID
    getById: async (userId: string) => {
      try {
        const docRef = doc(db, 'users', userId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          return { id: docSnap.id, ...docSnap.data() } as User;
        } else {
          throw new Error('User not found');
        }
      } catch (error: any) {
        throw new Error(error.message);
      }
    },

    // Update user
    update: async (userId: string, updates: Partial<User>) => {
      try {
        const docRef = doc(db, 'users', userId);
        await updateDoc(docRef, {
          ...updates,
          updatedAt: serverTimestamp()
        });
      } catch (error: any) {
        throw new Error(error.message);
      }
    },

    // Get all users
    getAll: async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as User[];
      } catch (error: any) {
        throw new Error(error.message);
      }
    },

    // Delete user
    delete: async (userId: string) => {
      try {
        const docRef = doc(db, 'users', userId);
        await deleteDoc(docRef);
      } catch (error: any) {
        throw new Error(error.message);
      }
    }
  }
}; 