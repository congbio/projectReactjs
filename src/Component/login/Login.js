import React, { useState, useEffect } from "react";
import '../../css/styleLogin.css'
import Home from "../../page/Home";
import axios from "axios";
import { Link } from "react-router-dom";
const apiacount = 'https://62b13ad7196a9e987031ac4a.mockapi.io/account';
 
const ExLogin =()=> {


    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    // User Login info
    const [listUser, setlistUser] = useState([]);
    const getData = () => {
        axios.get(apiacount).then((res) => {
            setlistUser(res.data);
        });
    };
    useEffect(() => {
        getData();

    }, []);


    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };
    

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        // Find user login info
        // const userData = listUser.find((user) => user.username === uname.value);
        // console.log(uname.value,">>>>>>>>>>>>",pass.value);

        for (var i = 0; i < listUser.length; i++) {
            if (uname.value == listUser[i].username && pass.value == listUser[i].password) {
                setIsSubmitted(true);
                localStorage.setItem("username",uname.value);
                localStorage.setItem("email",listUser[i].email);
                console.log(listUser[i].email);
                break;
            }
            
        }
       
       alert("Kiểm tra lại tài khoản của bạn!");
            

        // Compare user info
    };
        
    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
         const renderForm = (
						<div className="login-page">
							<div className="form_login">
								<form className="login-form" onSubmit={handleSubmit}>
									<h1>
										<strong>Login</strong>{" "}
									</h1>
									<input type="text" placeholder="UserName" name="uname" />

									<input type="password" placeholder="Password" name="pass" />
									<button type="submit">login</button>
									<p className="message">
										Not registered?{" "}
										<Link to={"/register"} className="nav-link" href="#">
											Create an account
										</Link>{" "}
									</p>
								</form>
							</div>
						</div>
					);
    return (
        <>
        <div className="app">
            <div className="login-form">
                {isSubmitted ? <Home/> : renderForm}
            </div>
        </div>
        </>
    );
}
 
export default ExLogin;








