import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "fibebase/auth";
import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAzs8wsOxkeSOUBUJS4B-Be5Vg2inXmaa0",
  authDomain: "simple-shop-72e1a.firebaseapp.com",
  projectId: "simple-shop-72e1a",
  storageBucket: "simple-shop-72e1a.appspot.com",
  messagingSenderId: "353495739532",
  appId: "1:353495739532:web:c43e3ebac66c18e66f9fa9",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserFromGoogleAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
};
