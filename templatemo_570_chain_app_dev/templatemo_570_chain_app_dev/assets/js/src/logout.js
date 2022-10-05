import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from './firebase.js';

const logout = document.querySelector('#logout');
//console.log(logout);
logout.addEventListener('click', async () => {
    
    await signOut(auth)
    
    console.log('logout clicked');

    window.location.href = "./index.html";
});