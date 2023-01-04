import {initializeApp} from "firebase/app";
import {getAuth,GoogleAuthProvider,FacebookAuthProvider,GithubAuthProvider} from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyADENMyi64etK2N56G5v_ZlHHli8dpYFZc",
    authDomain: "loginauth-d7c58.firebaseapp.com",
    projectId: "loginauth-d7c58",
    storageBucket: "loginauth-d7c58.appspot.com",
    messagingSenderId: "823445146395",
    appId: "1:823445146395:web:7c6cd1b53babbcd50861be",
    measurementId: "G-BJBZ83C6GC"
  };
  const firebaseApp=initializeApp(firebaseConfig);
  const auth=getAuth();
  const googleProvider=new GoogleAuthProvider();
  const githubProvider= new GithubAuthProvider(); 
  const facebookProvider= new FacebookAuthProvider(); 

  export{firebaseApp,auth,googleProvider,facebookProvider,githubProvider};