import React from 'react'
import $ from 'jquery'
import './css/head.css'
import Sidebar from './sidebar'



function Head() {
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
    })
    return (
        <div>

            <div className='headd0'>
                <input className="headinp0" type='image' src = "https://cdn.iconscout.com/icon/free/png-256/global-navigation-bar-1174857.png" alt = "drop-down menu icon"></input>
                <p className="headp0">Register</p>
                <button className="headb0">Contact us</button>
            </div>
            <Sidebar />
        </div>
    )
}

export default Head
