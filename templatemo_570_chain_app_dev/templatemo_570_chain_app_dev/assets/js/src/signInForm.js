

//Imports

import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js"; // firebase auth
import { showMessage } from "./showMessage.js"; // show message

//Get form
const signInForm = document.querySelector('#signin-form');

signInForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = signInForm["signin-email"].value;
    const password = signInForm["signin-password"].value;

    //console.log(email, password);

    try {
        const credentials = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        console.log(credentials);

        showMessage(credentials.user.email + " ha iniciado sesion", "linear-gradient(to right, #00b09b, #96c93d)");

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
            showMessage("Invalid email address", "linear-gradient(90deg, rgba(173,58,180,1) 17%, rgba(253,29,29,1) 80%)")
        } else if (error.code === "auth/weak-password") {
            showMessage("Password is too weak", "linear-gradient(90deg, rgba(173,58,180,1) 17%, rgba(253,29,29,1) 80%)")
        } else if (error.code === "auth/email-already-in-use") {
            showMessage("Email already in use", "linear-gradient(90deg, rgba(173,58,180,1) 17%, rgba(253,29,29,1) 80%)")
        } else if (error.code) {
            showMessage("Something went wrong", "linear-gradient(90deg, rgba(173,58,180,1) 17%, rgba(253,29,29,1) 80%)");
        }
    }
});

//console.log(singUpForm);


