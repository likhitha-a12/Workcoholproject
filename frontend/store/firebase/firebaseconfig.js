
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore"; 
import { GoogleAuthProvider , signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain:process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket:process.env.NEXT_PUBLIC_BUCKET,
  messagingSenderId:process.env.NEXT_PUBLIC_MESSAGING,
  appId: process.env.NEXT_PUBLIC_API_ID
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);         
export const db = getFirestore(app);      
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);






