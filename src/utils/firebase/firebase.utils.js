import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  getFirestore,
  getDocs,
  query,
  collection,
  writeBatch,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAzs8wsOxkeSOUBUJS4B-Be5Vg2inXmaa0",
  authDomain: "simple-shop-72e1a.firebaseapp.com",
  projectId: "simple-shop-72e1a",
  storageBucket: "simple-shop-72e1a.appspot.com",
  messagingSenderId: "353495739532",
  appId: "1:353495739532:web:c43e3ebac66c18e66f9fa9",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore(firebaseApp);

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (e) {
      throw new Error("Where is some error with adding new user to a database");
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const sighOutUser = async () => {
  return await signOut(auth);
};

export const addDocumentsToFirebase = async (collectionKey, objectsToAdd) => {
  const collectionRef = await collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((document) => {
    const documentRef = doc(collectionRef, document.title.toLowerCase());
    batch.set(documentRef, document);
  });

  await batch.commit();
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const catergoryMap = querySnapshot.docs.reduce((acc, document) => {
    const { title, items } = querySnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return catergoryMap;
};
