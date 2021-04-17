import React,{useState} from 'react'
import './css/loginpg.css'
import Login from './loginpg'
import Signup from './signuppg'

var issign = true;
function Checksign(){
    var [islog,issignup] = useState(()=>{return(<Login/>)})
    var[inimsg,afmsg] = useState('LOGIN')
    function click_sign(){
        if(issign === true){
            issign = false;
            issignup(()=>{
                return(<Signup/>);
            });
            afmsg('SIGN-UP')
        }
        else if(issign === false){
            issign = true;
            issignup(<Login/>);
            afmsg('LOGIN')
        }
    }
    return(
        <div className = "divn">
        <div className="div1">
                <p>REGISTER {inimsg}</p>
                <button className = "d1b1" onClick = {()=>{click_sign()}}>{inimsg}</button>
                {islog}
            </div>
            </div>
        )
}

export default Checksign;