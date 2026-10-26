console.log("Javascript has been loaded");
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAcEBwrWc7Oj_gQReRvW6b5bQ1UuV8QiN4",
  authDomain: "smit-batch-22.firebaseapp.com",
  projectId: "smit-batch-22",
  storageBucket: "smit-batch-22.firebasestorage.app",
  messagingSenderId: "998985140080",
  appId: "1:998985140080:web:b54861f44bb8f5f768b1b5",
  measurementId: "G-M61G5NCRLK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    if (window.location.pathname !== "/dashboard.html") {
      
    }
    // ...
  } else {
    console.log("User is signed out");
    if (window.location.pathname === "/dashboard.html") {
      window.location.href = "login.html";
    }
  }
});

const login = (e) => {
  e.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage, errorCode)
  });
};

const register = (e) => {
  e.preventDefault();

  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  createUserWithEmailAndPassword(auth, email, password).catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage)
  });
};

const logout = () => {
  signOut(auth)
};

document.getElementById("login-form")?.addEventListener("submit", login);
document.getElementById("register-form")?.addEventListener("submit", register);
document.getElementById("logout")?.addEventListener("click", logout);
