
import React, { useState, useEffect } from "react";
import axios from "axios";
import '../../css/styleLogout.css'
import emailjs from '@emailjs/browser';
import { Alert } from "bootstrap";
import ExLogin from "../login/Login";
import { Link } from "react-router-dom";



const ExLogout = () => {
    const apiaccount = "http://localhost:3000/account";
 
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
                
                alert("Tài khoản đã tồn tại")
                return;
            }
        }
       
        var newAcount = {
            email: mail.value,
            password: pass.value,
            username: uname.value
        }
        console.log(newAcount);
        emailjs.send('service_0janfsk', 'template_zkqk07k', newAcount,'user_5KiMCYtNrqLlFbsDxXynH')
                .then((result) => {
                    alert("Đang ký thành công !!")
                    
                    axios.post(apiaccount, newAcount).then(() => {
											console.log("thành công");
                                            setIsSubmitted (true);
											 
										});
                }, (error) => {
                    console.log('error.text');
                });
        
    };

    const renderForm = (

        <div className="logout-page">
            <div className="form_logout">

                <form className="register-form" onSubmit={handleSubmit}>
                <h1><strong>Register</strong> </h1>
                    <input type="text" placeholder="UserName" name="uname" />
                    <input type="email" placeholder="Email" name="mail" />
                    <input type="password" placeholder="Password" name="pass" />
                    <button  type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
    return (
			<>
				<div className="app">
					<div className="login-form">
						{isSubmitted ? window.location.assign("/login"
                        ) : (
							renderForm
						)}
					</div>
				</div>
			</>
		);
}

export default ExLogout;








