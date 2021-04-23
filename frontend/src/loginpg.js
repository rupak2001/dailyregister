import React from 'react'
import './css/loginpg.css'



function Login() {
    let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  headers.append('Access-Control-Allow-Credentials', 'true');

  headers.append('GET', 'POST', 'OPTIONS');

  /*
    var [ini_msg,fin_msg] = useState(null);
    var chk_login = async()=>{
        var email = document.getElementById('email').value
        var pass = document.getElementById('pass').value
        await fetch('http://localhost:8000/log_user/'+email)
        .then(res=>{return(res.json())})
        .then(async(data)=>{
            if(data.length >0 && pass !== data[0].password){
                fin_msg(()=>{return(<p className = "loginp1">wrong password</p>)})
            }
            else if(data.length === 0){
                fin_msg(()=>{return(<p className = 'loginp1'>no user found,please sign up</p>)})
            }
        })
    }*/


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
                    <button className="but1" /*onClick = {()=>{chk_login()}}*/ id = 'loginbut'>LOGIN</button>
                    <p id = 'loginp1'></p>
                    <a className="a1" href="http://www.google.com">sign in with google</a>
                </div>
            </div>
        </div>
    )
}
export default Login;
