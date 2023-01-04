import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Forgetpassword from "./components/Forgetpassword"; 
import { auth } from "./firebase";
import {useAuthState} from 'react-firebase-hooks/auth'
//import Auth from "./Auth";
import { useStateValue } from './StateProvider';
import Apps from "./Apps";
import Home from "./Home";

//import firebase from "firebase"
//import { State } from "react";


function App() {
	const[{users}]=useStateValue();// this is for firebase
 //This is for mongodb
	 const user2 = localStorage.getItem("token");
	//const[user1]=useAuthState(auth)
	

  
	
  
	return (

		<Routes>
		

			 
			{user2 && <Route path="/" exact element={<Main />} />}
			<Route path="/main" exact element={<Home/>} />
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/forgetpassword" exact element={<Forgetpassword />} />

			<Route path="/" element={<Navigate replace to="/login" />} />



{/* here its navigate to login page that is the use of navigate here */}
		</Routes>
	);

}

export default App;
