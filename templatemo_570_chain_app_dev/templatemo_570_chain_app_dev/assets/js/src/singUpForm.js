//Imports

import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js"; // firebase auth

//Get form
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

    const modal_id = document.querySelector(".popupContainer");
    //console.log(modal_id);
    $("#lean_overlay").fadeOut(200);

    $(modal_id).css({
      display: "none",
    });
  } catch (error) {
    console.log(error.message);
    console.log(error.code);

    if (error.code === "auth/invalid-email") {
      alert("Invalid email address");
    }
  }
});

//console.log(singUpForm);
