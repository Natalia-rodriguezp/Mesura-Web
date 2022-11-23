
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { loginCheck } from './loginCheck.js'
import { auth } from './firebase.js';


import './singUpForm.js';
import './signInForm.js';
import './googleLogin.js';
import './FacebookLogin.js';
import './logout.js';
import './Spotify.js';




onAuthStateChanged(auth, async (user) => {
    console.log(user)
    loginCheck(user)
})