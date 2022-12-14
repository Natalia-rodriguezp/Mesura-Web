// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdAhwR6V4iFAypTmhS2ROkhZh8Aa1fnkE",
  authDomain: "mesura-web.firebaseapp.com",
  projectId: "mesura-web",
  storageBucket: "mesura-web.appspot.com",
  messagingSenderId: "922460971574",
  appId: "1:922460971574:web:a32a743c721a75f67dee97",
  measurementId: "G-182NDP7LHZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//console.log(app);
const analytics = getAnalytics(app);
