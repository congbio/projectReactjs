
import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import axios from "axios";

const apiacount = 'https://62b13ad7196a9e987031ac4a.mockapi.io/account';

const Lognout = () => {
    // React States
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

    // JSX code for login form
    const renderForm = (
        <div className="form">
         
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Sign In</div>
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            </div>
        </div>
    );
}

export default Lognout;