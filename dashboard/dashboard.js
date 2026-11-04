import {
  getDoc,
  doc,
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";
import { db, auth } from "../firebase.config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";

let userLoggedIn;

onAuthStateChanged(auth, async (user) => {
  if (user?.uid) {
    const dbUser = await getDoc(doc(db, "users", user.uid));
    const dbUserData = dbUser.data();
    userLoggedIn = dbUserData;
    document.getElementById("greeting-text").innerHTML =
      `Welcome! ${dbUserData.email}`;

    getTodos();
  }
});

const addTodo = async () => {
  const todoValue = document.getElementById("todo-input");

  try {
    console.log(userLoggedIn, "userLoggedInuserLoggedIn");
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "todos"), {
      name: todoValue.value,
      user_uid: userLoggedIn.uid,
      created_at: Date.now()
    });


    todoValue.value = "";

    
    console.log("Document written with ID: ", docRef.id);

    getTodos();
  } catch (err) {}
};

const getTodos = async () => {
  try {
    const todos = document.getElementById("todos");
    todos.innerHTML = '';
    
    const q = query(
      collection(db, "todos"),
      where("user_uid", "==", userLoggedIn.uid),
    );

    const querySnapshot = await getDocs(q);

    
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      const todoData = doc.data();
      todos.innerHTML += `<li>${todoData.name}</li>`;
    });
  } catch (err) {
    console.log(err);
  }
};

document.getElementById("todo-btn")?.addEventListener("click", addTodo);
