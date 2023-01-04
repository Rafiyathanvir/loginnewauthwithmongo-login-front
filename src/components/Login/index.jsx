import { useEffect, useState } from "react";
import axios from "axios";
import { Link ,useNavigate} from "react-router-dom";
import styles from "./styles.module.css";
import { config } from "../../config";
//import Firebaseauth from "../../Firebaseauth";
import Apps from "../../Apps";
const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
/*const handleChange=(e)=>{
	let{name,value}=e.target;
	setData({...data,[name]:value})
}*/
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = `${config.api}/login`;
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			//localStorage.href="./components/Main"
			// localStorage.setItem("profile", res.data.profile);
			
			//localStorage.setItem("token", res.data);
			alert("successfully loged in")
				navigate("/");
				window.location.reload();
			  
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				//alert("invalied email/password")

				setError(error.response.data.message);
			}
		}
	}

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sign In
						</button>
						<Link to="/forgetpassword"><button type="submit" className={styles.green_btn}>
							Forget Password
						</button></Link>
						</form>
						<h3>or</h3>
						<h5 >login with </h5>
						<Apps/>
						

				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
