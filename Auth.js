// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDEItisEVvseDUft0NXVaY7MC7KoR_70UE",
    authDomain: "project-5a3e5.firebaseapp.com",
    projectId: "project-5a3e5",
    storageBucket: "project-5a3e5.appspot.com",
    messagingSenderId: "798789459432",
    appId: "1:798789459432:web:e288c4ffcbdf3b8d72185d"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
              alert("You Are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            window.location.href = "index.html";
            // document.write("You are Signed In")
            console.log(result)
        })
        .catch((error) => {
            alert("Invalid Email or Password")
            console.log(error.code);
            console.log(error.message)
        });
}
