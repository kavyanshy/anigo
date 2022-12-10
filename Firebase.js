import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
        GoogleAuthProvider,
        getAuth,
        signInWithPopup,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        sendPasswordResetEmail,
        signOut,
      } from "firebase/auth";
      import {
        getFirestore,
        query,
        getDocs,
        collection,
        where,
        addDoc,
      } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf2sA2KiU2Dde9oId9pOlwupymu7v5y74",
  authDomain: "anime-project-e7901.firebaseapp.com",
  projectId: "anime-project-e7901",
  storageBucket: "anime-project-e7901.appspot.com",
  messagingSenderId: "455658846267",
  appId: "1:455658846267:web:e41affe6eb275ae0e1c41e",
  measurementId: "G-PSV9LFFMC3"
};

// Initialize Firebase
const app =   initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

