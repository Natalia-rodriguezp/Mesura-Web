//Imports

import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js"; // firebase auth
import { showMessage } from "./showMessage.js"; // show message

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

        showMessage(userCredentials.user.email + " ha sido creado", "linear-gradient(to right, #00b09b, #96c93d)");

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
            showMessage("Invalid email address", "linear-gradient(to right, #00b09b, #96c93d)")
        } else if (error.code === "auth/weak-password") {
            showMessage("Password is too weak")
        } else if (error.code === "auth/email-already-in-use", "linear-gradient(to right, #00b09b, #96c93d)") {
            showMessage("Email already in use", "linear-gradient(to right, #00b09b, #96c93d)")
        } else if (error.code) {
            showMessage("Something went wrong", "linear-gradient(to right, #00b09b, #96c93d)");
        }
    }
});

//console.log(singUpForm);
