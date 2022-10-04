import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js"    // firebase auth

const singUpForm = document.querySelector("#signup-form");

singUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = singUpForm["signup-email"].value;
  const password = singUpForm["signup-password"].value;

  //console.log(email, password);

  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);
  } catch (error) {
    console.log(error);
  }
});

//console.log(singUpForm);
