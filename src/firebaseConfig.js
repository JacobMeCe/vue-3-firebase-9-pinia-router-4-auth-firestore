import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2ypNwufuCqH8TEp7MIDCiESf-V_ez_Ds",
  authDomain: "vue-3-2023-28f8f.firebaseapp.com",
  projectId: "vue-3-2023-28f8f",
  storageBucket: "vue-3-2023-28f8f.appspot.com",
  messagingSenderId: "17948538865",
  appId: "1:17948538865:web:ffd138bdd18ff0d687b650",
};

initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
