import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCuaFhxMOPmGaqrUPqMOVZENlvWCgRdh0g",
  authDomain: "comision-37165-brainovich.firebaseapp.com",
  projectId: "comision-37165-brainovich",
  storageBucket: "comision-37165-brainovich.appspot.com",
  messagingSenderId: "728115885840",
  appId: "1:728115885840:web:0753c875d8ca5254341795"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);