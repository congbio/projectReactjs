import React from 'react';
import '../../css/styleLogout.css'
function ExLogout(  ) {
    return (
        <>
            <div class="logout-page">
                <div class="form_logout">
                   
                  <form class="register-form">
                        <input type="text" placeholder="UserName" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="text" placeholder="email address" />
                        <button>create</button>
                        <p class="message">Already registered? <a href="#">Sign In</a></p>
                    </form> 
                    
                </div>
            </div>
        </>
    );
}
 
export default ExLogout;








