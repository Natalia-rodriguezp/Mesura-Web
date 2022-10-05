

import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js"
import { showMessage } from "./showMessage.js"; // show message

const googleButton = document.querySelector('#google-button');

googleButton.addEventListener('click', async () => {

    const googleProvider = new GoogleAuthProvider()


    try {
        const credentials = await signInWithPopup(auth, googleProvider)
        console.log(credentials)
        showMessage(credentials.user.email + " ha iniciado sesion", "linear-gradient(to right, #00b09b, #96c93d)");

        const modal_id = document.querySelector(".popupContainer");
        //console.log(modal_id);
        $("#lean_overlay").fadeOut(200);

        $(modal_id).css({
            display: "none",
        });

        window.location.href = "./dashboard.php";
    } catch (error) {
        console.log(error)
    }

    

})