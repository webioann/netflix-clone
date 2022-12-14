import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { collection, doc, getDocs, query, onSnapshot, addDoc, setDoc, deleteDoc, updateDoc } from 'firebase/firestore'
import { IMovie } from '../src/types/movies.types'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
//  === save choosed movies in My List on Firebase Firestore ===
interface ISaveMovieInMyList {
    movie: IMovie
    media_type: 'movie' | 'tv'
}
export const saveMovieInMyList = async ({ movie, media_type }: ISaveMovieInMyList) => {

    await addDoc(collection(db, 'my list'), { ...movie, media_type: media_type });
};
//  === delete movie (doc) from My List ===
export const deleteMovieFromMyList = async (doc_id: string) => {
    
    await deleteDoc(doc(db, 'my list', doc_id));
}

