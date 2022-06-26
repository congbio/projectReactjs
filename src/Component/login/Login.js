import React from 'react';
import '../../css/styleLogin.css'
 
function ExLogin(props) {
    return (
        <>
            <div class="login-page">
                <div class="form_login">
                    <form class="login-form">
                    <h1><strong>Login</strong> </h1>
                        <input type="text" placeholder="UserName" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>login</button>
                        <p class="message">Not registered? <a href="#">Create an account</a></p>
                    </form>
                </div>
            </div>
        </>
    );
}
 
export default ExLogin;








