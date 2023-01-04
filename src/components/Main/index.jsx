//import { profile } from "console";
import styles from "./styles.module.css";
//import { useState ,useEffect} from "react";


const Main = () => {

	//const value=profile.name
	
	const user = window.localStorage.getItem("profile");
	
	const handleLogout = () => {
	 localStorage.removeItem("token");
		 window.location.reload();

	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Welcome to Orange HRM {user}</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
	);
};

export default Main;
