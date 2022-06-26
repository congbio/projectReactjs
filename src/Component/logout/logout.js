
import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import axios from "axios";
import '../../css/styleLogout.css'
import ExLogin from "../login/Login";


const apiaccount = 'https://62b13ad7196a9e987031ac4a.mockapi.io/account';

const ExLogout = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    // User Login info
    const [listUser, setlistUser] = useState([]);
    const getData = () => {
        axios.get(apiaccount).then((res) => {
            setlistUser(res.data);
        });
    };
    useEffect(() => {
        getData();

    }, []);
    const errors = {
        uname: "xem lai username",
        pass: "xem lai password",
        mail: "tai khoan da ton tai"
    };
    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
        var { uname, pass, mail } = document.forms[0];
        for (var i = 0; i < listUser.length; i++) {
            if (mail.value == listUser[i].email) {
                setErrorMessages({ name: "mail", message: errors.mail });
                alert("tài khoản đã tồn tại")
                return;
            }
        }
        var newAcount = {
            email: mail.value,
            password: pass.value,
            username: uname.value
        }
        axios.post(apiaccount, newAcount)
            .then(() => {
                // alert("Logged up successfully!");
                // <ExLogin/>
                console.log("thành công");
                window.location.assign("http://localhost:4000/login")
            })
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const renderForm = (

        <div class="logout-page">
            <div class="form_logout">

                <form class="register-form" onSubmit={handleSubmit}>
                <h1><strong>Logout</strong> </h1>
                    <input type="text" placeholder="UserName" name="uname" />
                    <input type="email" placeholder="Email" name="mail" />
                    <input type="password" placeholder="Password" name="pass" />
                    <button  type="submit">logout</button>
                </form>

            </div>
        </div>
    )
    return (
        <>
            <div className="app">
                <div className="login-form">
                    {isSubmitted ? <div>thành công  </div> : renderForm}
                </div>
            </div>

        </>
    );
}

export default ExLogout;








