
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { loginCheck } from './loginCheck.js'
import { auth } from './firebase.js';


import './singUpForm.js';
import './logout.js';




onAuthStateChanged(auth, async (user) => {
    console.log(user)
    loginCheck(user)
})