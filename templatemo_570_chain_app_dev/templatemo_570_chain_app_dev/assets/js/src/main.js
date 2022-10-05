
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { loginCheck } from './loginCheck.js'
import { auth } from './firebase.js';


import './singUpForm.js';
import './signInForm.js';
import './googleLogin.js';
import './FacebookLogin.js';
import './logout.js';

const user = auth.currentUser;

if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/firebase.User
  // ...
  console.log('User is signed in');
} else {
  console.log('User is not signed in');
}

onAuthStateChanged(auth, async (user) => {
    console.log(user)
    loginCheck(user)
})