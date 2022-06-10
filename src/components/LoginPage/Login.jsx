
//import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./login.css";



const Login = (props) => {
	const [data, setData] = useState({ email: "", password: "" });
	
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = `http://localhost:8080/api/auth`;
			const { data: res } = await axios.post(url, data);
			
			//sets jwt token
			localStorage.setItem("token", res.data);
		
			//sends the user to their account email is the unique identifier.
			window.location = `/${data.email}`;
			
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	


	return (
		<div >
			<div className="container">
				<div className="center" >
					<form onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							className="loginstyle"
							onChange={handleChange}
							value={data.email}
							required

						/>
						<input
						className="loginstyle"
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required

						/>
						{error && <div>{error}</div>}
						<button 
						onClick ={handleSubmit} >
							Sign In
						</button>
					</form>
				</div>
				<div >
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button">
							Sign Up
						</button>
					</Link>
					
				</div>
			
			</div>
			
		</div>
		
	);
}


export default Login;
