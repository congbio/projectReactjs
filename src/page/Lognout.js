// function dangky() {

//     var add_name = document.getElementById('name').value;
//     var add_phonenumber = document.getElementById('phone').value;
//     var add_mail = document.getElementById('email').value;
//     var add_password = document.getElementById('mk').value;
//     var add_address = document.getElementById('address').value

//     if (validatEemail() == false || (checkinput() == true)) {

//         if (checkinput() == true) {
//             alert("Enter full information, Please!")
//         } else if (validatEemail() == false) {
//             alert("Please enter a valid e-mail address.");
//         }
//     } else {
//         axios.get(`${APIdK}`).then(res => {
//             for (var i = 0; i < res.data.length; i++) {
//                 if (add_mail == res.data[i].mail || add_phonenumber == res.data[i].add_phonenumber) {
//                     alert('tài khoản đã tồn tại! vui lòng đăng ký bằng tài khoản khác')
//                     return
//                 }
//             }

//             // post data có từ cái mock tao lạy m
//             var data = {
//                 fullname: add_name,
//                 mail: add_mail,
//                 password: add_password,
//                 phonenumber: add_phonenumber,
//                 add_address: add_address
//             }
//             axios.post(APIdK, data)
//                 .then(() => {
//                     alert("Logged up successfully!");
//                     emailToAccount();
//                     location.reload()
//                 })
//         })
//     }
// }

// function checkinput() {
//     var name1 = document.getElementById('name').value;
//     var add_phonenumber = document.getElementById('phone').value;
//     var email = document.getElementById('email').value;
//     var passwordres = document.getElementById('mk').value;
//     var add_address = document.getElementById('address').value;
//     if (name1 == "" || email == "" || passwordres == "" || add_phonenumber == "" || add_address == "") {
//         return true
//     }
// }
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