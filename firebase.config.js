import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import {
  getFirestore,
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

import {
  getAuth,
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCLVEpkktf4bcU9Z4zXP_83aJpY68agDtA",
  authDomain: "fir-authentication-b8bed.firebaseapp.com",
  projectId: "fir-authentication-b8bed",
  storageBucket: "fir-authentication-b8bed.firebasestorage.app",
  messagingSenderId: "749222606949",
  appId: "1:749222606949:web:338fc51a8083004d33ae8c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore(app);
