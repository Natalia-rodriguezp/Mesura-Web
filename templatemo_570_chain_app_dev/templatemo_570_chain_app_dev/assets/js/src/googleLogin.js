

import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js"

const googleButton = document.querySelector('#google-button');

googleButton.addEventListener('click', async () => {

    const googleProvider = new GoogleAuthProvider()


    try {
        const credentials = await signInWithPopup(auth, googleProvider)
        console.log(credentials)
    } catch (error) {
        console.log(error)
    }

    

})