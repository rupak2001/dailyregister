import React from 'react'
import './css/loginpg.css'

function Login() {
    return (
        <div className="div0">
            <div className = "div1">
                <p>REGISTER LOGIN</p>
                <button>SIGN UP</button>
            </div>
            <div className="div2">
                <span className="span1">
                    <p className="p1" >NAME</p>
                    <input type="text" className="inp1" placeholder="enter name"></input>
                </span>
                <span className="span2">
                    <p className="p2">PHONE NO</p>
                    <input type="text" className="inp2" placeholder="enter phone_no."></input>
                </span>
                <span className="span3">
                    <p className="p3">EMAIL</p>
                    <input type="text" className="inp3" placeholder="enter email_id"></input>
                </span>
                <div className="div3">
                    <button className="but1">LOGIN</button>
                    <a className="a1" href="http://www.google.com">sign in with google</a>
                </div>
            </div>
        </div>
    )
}

export default Login;