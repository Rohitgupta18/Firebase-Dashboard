
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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  const signup=()=>{

    const email=document.getElementById("username").value;
    const password=document.getElementById("password").value;
console.log(email,password);
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
  }
auth.languageCode = 'en';
const provider=new GoogleAuthProvider();

const goolgeLogin=document.getElementById("Reg");
goolgeLogin.addEventListener("click",function(){
  


  signInWithPopup(auth, provider)
  .then((result) => {
    
    const credential = GoogleAuthProvider.credentialFromResult(result);
    
  
    const user = result.user;
   console.log(user);
   window.location.href ="";
  }).catch((error) => {
    
    const errorCode = error.code;
    const errorMessage = error.message;
   
    
  });
})