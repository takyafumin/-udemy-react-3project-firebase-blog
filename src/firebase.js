import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAlMHOo8AZG8mV73t3L7gTa4rGIbfvIwHM",
    authDomain: "udemy-blog-85ad9.firebaseapp.com",
    projectId: "udemy-blog-85ad9",
    storageBucket: "udemy-blog-85ad9.appspot.com",
    messagingSenderId: "160560595845",
    appId: "1:160560595845:web:69bb9fbb9f65de6fba3aec"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
