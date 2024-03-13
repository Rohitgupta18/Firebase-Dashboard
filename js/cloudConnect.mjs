// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase, set, get, update, remove, ref, child} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmG07H1j2oxLI5eVBDfeMywDB1oN3XtZU",
  authDomain: "cc-ise.firebaseapp.com",
  databaseURL: "https://cc-ise-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cc-ise",
  storageBucket: "cc-ise.appspot.com",
  messagingSenderId: "827798268593",
  appId: "1:827798268593:web:a206d885242e9c1b625090",
  measurementId: "G-8NJTJ992T5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase();
const graphRef = db.ref("/graph");

function generateId() {
    const timestamp = new Date().getTime();
    const random = Math.floor(Math.random() * 1000000);
    return `${timestamp}-${random}`;
  }

  // Add a click event listener to the button
  uploadButton.addEventListener('click', () => {
    console.log("click")
    const newId = generateId();

db.ref("/graph" + newId).set({
    dynamicDataArea:  [     {       name: 'Purchase Orders',       data: [31, 40, 28, 51, 42, 109, 100],     },     {       name: 'Sales Orders',       data: [11, 32, 45, 32, 34, 52, 41],     },   ],
    dynamicDataBar: [     {  name: 'Products', data: [10, 8, 6, 4, 2]     }  ]
})
  });
  