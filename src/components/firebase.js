import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAYO62CU_7zkLB9UN_PRC5ErG7B_eaoXTU",
  authDomain: "comision-37165-c2bf9.firebaseapp.com",
  projectId: "comision-37165-c2bf9",
  storageBucket: "comision-37165-c2bf9.appspot.com",
  messagingSenderId: "677880742755",
  appId: "1:677880742755:web:4514894b8a304f5b610956"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)