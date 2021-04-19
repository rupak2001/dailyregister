import { data, post } from 'jquery'
import React, {useState,useEffect} from 'react'
import './css/loginpg.css'

function Signup() {

    var signup_chk = ()=>{
        var email = document.getElementById('email_id').value;
        var chk = ()=>{
            fetch('http://localhost:8000/find_user/'+email)
            .then(res=>res.json)
            .then(data=>{var dat = data.map()})
        }
    }





    return (
        <div className="div0">
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
                    <p className="p3" id = "email_id">EMAIL</p>
                    <input type="text" className="inp3" placeholder="enter email_id"></input>
                </span>
                <span className="span4">
                    <p className="p4">PASSWORD</p>
                    <input type="password" className="inp4" placeholder="enter Password"></input>
                </span>
                <div className="div3">
                    <button className="but1" onclick = {()=>{signup_chk()}}>SIGN-UP</button>
                    <a className="a1" href="http://www.google.com">sign in with google</a>
                </div>
            </div>
        </div>
    )
}

export default Signup;