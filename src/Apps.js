

 //import { async } from '@firebase/util';
 import React, { useState } from 'react'
 import './App.css';
 import {auth,googleProvider,facebookProvider,githubProvider} from "./firebase";
 import { signInWithPopup } from 'firebase/auth';
 //import {Navigate, useNavigate} from "react-router-dom";

import {useStateValue} from "./StateProvider"
import {actionTypes} from "./reducer"
import { useNavigate } from 'react-router-dom';
//import { Navigate } from 'react-router-dom';

 function Apps() {
  // const [state,dispatch]=useStateValue();
   //const[m,d]=useStateValue();
  // console.log(state)

	const navigate = useNavigate();

    const googlelogin =()=>{
    signInWithPopup(auth,googleProvider)
    .then((result)=>{
        //console.log(result)
            console.log(result)
       navigate("/main")
       const name = result.user.displayName
       const email = result.user.email

       localStorage.setItem("name",name)
       localStorage.setItem("email",email)
      
       // dispatch({
        //   type:actionTypes.SET_USER,
        // user: result.user
   // })
}).catch((err) =>{

    alert(err.message)
    })
    }


const facebooklogin =()=>{
    signInWithPopup(auth,facebookProvider)
    .then((result)=>{
        console.log(result)
        navigate("/main")
        const name = result.user.displayName
        const email = result.user.email
 
        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
        //navigate("/")

    }).catch((err)=>{
        alert(err.message)
    })
}


const githublogin =()=>{
    signInWithPopup(auth,githubProvider)
    .then((result)=>{
        console.log(result)
        navigate("/main")
        const name = result.user.displayName
        const email = result.user.email
 
        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
       // navigate("/")

    }).catch((err)=>{
        alert(err.message)
    })
}
    /*const googlelogin =
    async()=>{
    try{
        await auth.signInWithPopup(googleProvider);
        Setuser(await auth.currentUser);

    }catch(error){
console.log(error)
    }}
    console.log(user)*/

   return (
    <section>
     <div>
        <div className='buttoncontainer' onClick={googlelogin} >
            <img src='https://w7.pngwing.com/pngs/249/19/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo.png' alt=''/>
            <button></button>
        </div>
        <div className='buttoncontainer' onClick={facebooklogin}>
            <img src='https://e7.pngegg.com/pngimages/991/568/png-clipart-facebook-logo-computer-icons-facebook-logo-facebook-thumbnail.png' alt=''/>
            <button></button>
        </div>
        <div className='buttoncontainer' onClick={githublogin} >
            <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt=''/>
            <button></button>
        </div>
     </div>
     </section>
   )
 }
 
 export default Apps;