import React from 'react'
import './css/loginpg.css'



function Login() {
    return (
        <div className="div0">
            <div className="div2">
                <span className="span3">
                    <p className="p3">EMAIL</p>
                    <input type="text" className="inp3" placeholder="enter email_id" id = "email"></input>
                </span>
                <span className="span4">
                    <p className="p4">PASSWORD</p>
                    <input type="password" className="inp4" placeholder="enter Password" id = "pass"></input>
                </span>
                <div className="div3">
                    <button className="but1" id = 'loginbut'>LOGIN</button>
                    <p id = 'loginp1'></p>
                    <a className="a1" href="http://www.google.com">sign in with google</a>
                </div>
            </div>
        </div>
    )
}
export default Login;
