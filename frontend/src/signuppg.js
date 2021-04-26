
import React, {useState} from 'react'
import './css/loginpg.css'
import $ from 'jquery'


function Signup() {
    var [ini,fin] = useState(null);

    var get_data = ()=>{
        var data = {
            name:document.getElementById('name').value,
            email:document.getElementById('email_id').value,
            phone_no:document.getElementById('ph_no').value,
            password:document.getElementById('pass').value,
        }
        return data
    }


    var signup_chk = async()=>{
        $('#sign_but').text('loading...')
        var email = document.getElementById('email_id').value;
        await fetch('/find_user/'+email)
        .then((res)=>{return res.json()})
        .then(async (data)=>{
            if(data.length === 0){
                await fetch('/logup/',{
                    method : 'POST',
                    body: JSON.stringify(get_data()),
                    headers:{'Content-Type':'application/json'}
                })
                .then(fin(<p className = "new_user">successfully signed up, please log in</p>))
                $('#sign_but').text('SIGN-UP')
            }
            else if(data.length === 1){
                fin(()=>{
                    return(
                        <p className = "ex_user">you already have an account.Please log-in</p>
                    )
                })
                $('#sign_but').text('SIGN-UP')
            }
        })
    }





    return (
        <div className="div0">
            <div className="div2">
                <span className="span1">
                    <p className="p1" >NAME</p>
                    <input type="text" className="inp1" placeholder="enter name" id = "name"></input>
                </span>
                <span className="span2">
                    <p className="p2">PHONE NO</p>
                    <input type="text" className="inp2" placeholder="enter phone_no." id = "ph_no"></input>
                </span>
                <span className="span3">
                    <p className="p3" >EMAIL</p>
                    <input type="text" className="inp3" placeholder="enter email_id" id = "email_id"></input>
                </span>
                <span className="span4">
                    <p className="p4">PASSWORD</p>
                    <input type="password" className="inp4" placeholder="enter Password" id = "pass"></input>
                </span>
                <div className="div3">
                    <button className="but1" id = "sign_but" onClick = {()=>{signup_chk()}}>SIGN-UP</button>
                    {ini}
                    <a className="a1" href="http://www.google.com">sign in with google</a>
                </div>
            </div>
        </div>
    )
}

export default Signup;