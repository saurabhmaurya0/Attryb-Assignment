import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId


  apiKey: "AIzaSyAa02IHQ3pxR66LLUSAaJL_xNT_zLv1foI",
  authDomain: "cars-website-80f67.firebaseapp.com",
  projectId: "cars-website-80f67",
  storageBucket: "cars-website-80f67.appspot.com",
  messagingSenderId: "485335943917",
  appId: "1:485335943917:web:24323c3c7317ba23a75ae4"
};

const app = initializeApp(firebaseConfig);

export default app;