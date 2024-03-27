

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth ,GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBHU8uhDFeLgRHTJnKxpVGh1gF8C8m_gR8",
    authDomain: "fir-cadf2.firebaseapp.com",
    projectId: "fir-cadf2",
    storageBucket: "fir-cadf2.appspot.com",
    messagingSenderId: "286497396765",
    appId: "1:286497396765:web:150a008b1a5e82dd948ef4"
  };
  const db = firebaseApp.firestore();
const auth = firebaseApp.auth();


 document.getElementById('login' ,'submit').addEventListener('click', function(event) {
           
            event.preventDefault();
            const signUp = () => {
                const email = document.getElementById("username").value;
                const password = document.getElementById("password").value;
                console.log(email, password)
                // firebase code
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((result) => {
                        // Signed in 
                        document.write("You are Signed Up")
                        console.log(result)
                        // ...
                    })
                    .catch((error) => {
                        console.log(error.code);
                        console.log(error.message)
                        // ..
                    });
            }
            
            
            
            const signIn = () => {
                const email = document.getElementById("username").value;
                const password = document.getElementById("password").value;
                // firebase code
                firebase.auth().signInWithEmailAndPassword(email, password)
                    .then((result) => {
                        // Signed in 
                        document.write("You are Signed In")
                        console.log(result)
                    })
                    .catch((error) => {
                        console.log(error.code);
                        console.log(error.message)
                    });
            }
           
              });

  

const signUp = () => {
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}


