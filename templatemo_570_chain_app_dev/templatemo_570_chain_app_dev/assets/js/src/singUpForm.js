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
            showMessage("Direccion de correo invalida", "linear-gradient(90deg, rgba(173,58,180,1) 17%, rgba(253,29,29,1) 80%)")
        } else if (error.code === "auth/weak-password") {
            showMessage("La contraseña es debil", "linear-gradient(90deg, rgba(173,58,180,1) 17%, rgba(253,29,29,1) 80%)")
        } else if (error.code === "auth/email-already-in-use") {
            showMessage("Email actualmente en uso", "linear-gradient(90deg, rgba(173,58,180,1) 17%, rgba(253,29,29,1) 80%)")
        } else if (error.code) {
            showMessage("Algo fallo" + error, "linear-gradient(90deg, rgba(173,58,180,1) 17%, rgba(253,29,29,1) 80%)");
        }
    }
});

//console.log(singUpForm);
