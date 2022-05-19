import { useState } from "react";
//import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";
import "./signup.css";


const Signup = () => {
    const [data, setData] = useState({
		fullName: "",
		username: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
       
	};

    const handleSubmit = async (e) => {
		e.preventDefault();
        
		try {
			const url = "http://localhost:8080/api/users";
          
			const { data: res } = await axios.post(url, data);
            navigate("/login");
            console.log(res.message);
			
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
    

   
        return(
            <div>
                <div className='container'>
                    <h1>Register</h1>
                    <div className = 'formDiv'>
                        <form onSubmit={handleSubmit}>
                        
                            <input type = 'text'
                            placeholder='Full Name'
                            name="fullName"
                            onChange = {handleChange}
                            value={data.fullName}
                            className = 'form-control form-group signupform'/>
                        

                            <input type = 'text'
                            placeholder='Username'
                            name = 'username'
                            onChange = {handleChange}
                            value={data.username}
                            className = 'form-control form-group signupform'/>

                            <input type = 'text'
                            placeholder='Email'
                            name='email'
                            onChange = {handleChange}
                            value={data.email}
                            className = 'form-control form-group signupform'/>
                            <br/>

                            <input type="password"
                            placeholder='Password'
                            name='password'
                            onChange = {handleChange}
                            value={data.password}
                            className = 'form-control form-group signupform'/>
                            <br/>
                            {error}
                            <input type="submit" className = 'btn btn-danger btn-block submitbutton' value ='Submit'/>
                        </form>

                        <div>Have an account already? <Link to="/Login">Login here</Link></div>
                        
                    </div>
                </div>
            </div>
        );
    
}

export default Signup;
