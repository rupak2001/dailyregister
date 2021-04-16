import React,{useState} from 'react'
import './css/loginpg.css'
import Login from './loginpg'
import Signup from './signuppg'

var issign = true;
function Checksign(){
    var [islog,issignup] = useState(()=>{return(<Login/>)})
    function click_sign(){
        if(issign === true){
            issign = false;
            issignup(()=>{
                return(<Signup/>);
            });
        }
        else if(issign === false){
            issign = true;
            issignup(()=>{return(<Login/>)});
        }
    }
    return(
        <div className = "divn">
        <div className="div1">
                <p>REGISTER LOGIN</p>
                <button className = "d1b1" onClick = {()=>{click_sign()}}>SIGN UP</button>
                {islog}
            </div>
            </div>
        )
}

export default Checksign;