import {
  getDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";
import { db, auth } from "./firebase.config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";

onAuthStateChanged(auth, async (user) => {
  if (user?.uid) {
    const dbUser = await getDoc(doc(db, "users", user.uid));
    const dbUserData = dbUser.data();
    document.getElementById('greeting-text').innerHTML = `Welcome! ${dbUserData.email}`;
  }
});
