import React,{useState} from 'react'
import $ from 'jquery'
import './css/head.css'
import Sidebar from './sidebar'
import Routinelive from './routine_live'
import Statreport from './stats'
//import RoutineTemp from './routine_temp'



function Head() {
    var[sb_ini,sb_cont] = useState(<Routinelive/>)
    var chk = true;
    $(() => {
        $('#sb').hide();
        $('.headinp0').click(() => {
            if (chk === true) {
                $('#sb').slideDown(200);
                $('.headinp0').css('transform','rotate(90deg)');
                chk = false;
            }
            else {
                $('#sb').slideUp(200);
                $('.headinp0').css('transform','rotate(180deg)')
                chk = true;
            }
        })

        $('#att_stats').on('click',()=>{
            sb_cont(<Statreport/>)
        })
        $('#att_sch').on("click",()=>{
            sb_cont(<Routinelive/>)
        })
        
    })
    return (
        <div className = 'main_div0'>

            <div className='headd0'>
                <input className="headinp0" type='image' src = "https://cdn.iconscout.com/icon/free/png-256/global-navigation-bar-1174857.png" alt = "drop-down menu icon"></input>
                <p className="headp0">Register</p>
                <button className="headb0" id = "sign_out_but">SIGN-OUT</button>
            </div>
            <Sidebar />
            {sb_ini}
        </div>
    )
}

export default Head
