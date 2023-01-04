//import { profile } from "console";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
//import { useState ,useEffect} from "react";


const Home = () => {
	const User=localStorage.getItem("name")
	//<h1>{localStorage.getItem("email")} </h1>
	const navigate = useNavigate();
	//const value=profile.name
	//const user = localStorage.getItem(profile);
	
	const handleLogout = () => {
		navigate("/login")

	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Welcome to Orange HRM   
					  : {User} </h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		
		</div>
	);
};

export default Home;
