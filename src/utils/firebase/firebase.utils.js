import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
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
  where,
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

export const signOutUser = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

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
  const catergoryData = querySnapshot.docs.map((item) => item.data());

  return catergoryData;
};

export const setNewOrder = async (user, items) => {
  if (!user) return;
  const customerId = auth.currentUser.uid;
  const createdAt = new Date();
  const itemsToAdd = items.map(({ price, count, id }) => {
    return { price, quantity: count, productId: id };
  });
  const newOrderRef = doc(collection(db, "orders"));
  try {
    await setDoc(newOrderRef, {
      createdAt,
      items: [...itemsToAdd],
      paymentStatus: "done",
      status: "complete",
      customerId,
    });
  } catch (error) {
    throw new Error("Something went wrong with ordering items");
  }
};

export const getOrdersFromUser = async (user) => {
  if (!user) return;
  const collectionRef = collection(db, "orders");
  const q = query(collectionRef, where("customerId", "==", user.uid));

  const ordersSnapshot = await getDocs(q);
  if (!ordersSnapshot.empty) {
    const ordersData = ordersSnapshot.docs.map((doc) => doc.data());
    return ordersData;
  }
  return [];
};

export const getUserProviderInfo = (user) => {
  return { ...user.providerData };
};

export const getUserInfoFromDb = async (user) => {
  if (!user) return;
  const docRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { ...docSnap.data() };
  } else {
    throw new Error(`Can't get info - there is no such user`);
  }
};

export const setUserInfoToDb = async (user, data) => {
  if (!user) return;
  const docRef = doc(db, "users", user.uid);
  try {
    await setDoc(docRef, data);
  } catch (error) {
    throw new Error("Problem with setting user info");
  }
};
