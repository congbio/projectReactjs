import React, { useState, useEffect } from "react";
import '../../css/styleLogin.css'
import Home from "../../page/Home";
import axios from "axios";
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
            else{
                if (listUser[i].password !== pass.value) {
                    // Invalid password
                    setErrorMessages({ name: "pass", message: errors.pass });
                }
                else {
                    // Username not found
                    setErrorMessages({ name: "uname", message: errors.uname });
                }
            }
        }

        // Compare user info
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
         const renderForm = (
            <div class="login-page">
            <div class="form_login">
                <form class="login-form" onSubmit={handleSubmit}>
                <h1><strong>Login</strong> </h1>
                    <input type="text" placeholder="UserName"  name="uname" />
                  
                    <input type="password" placeholder="Password" name="pass"  />
                    <button  type="submit">login</button>
                    <p class="message">Not registered? <a href="http://localhost:4000/logout">Create an account</a></p>
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








