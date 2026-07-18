
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "aiinterview-511ae.firebaseapp.com",
  projectId: "aiinterview-511ae",
  storageBucket: "aiinterview-511ae.firebasestorage.app",
  messagingSenderId: "241961161091",
  appId: "1:241961161091:web:f07ae2089fc7322c2266b6"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}