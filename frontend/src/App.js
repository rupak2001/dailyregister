import './css/App.css';
import React, { useState } from 'react'
import Checksign from './chk_sign'
import Head from './head'
import $ from 'jquery'


function App() {
    var [sign, content] = useState(<Checksign />)
    $(() => {
        $('#loginbut').click(async() => {
             $('#loginbut').text('loading...')
            var email = document.getElementById('email').value
            var pass = document.getElementById('pass').value
            await fetch('http://localhost:8000/log_user/'+ email,{headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }})
            .then(res => { return (res.json()) })
            .then((data) => {
                if (data.length > 0 && pass === data[0].password) {
                    $('#loginbut').text('LOGIN')
                    document.getElementById('pass').value = null
                    content(<Head/>)
                }
                else if(data.length > 0 && pass !== data[0].password){
                    document.getElementById('pass').value = null
                    $('#loginbut').text('LOGIN')
                    $('#loginp1').text('incorrect password')
                }
                else if(data.length === 0){
                    $('#loginbut').text('LOGIN')
                    document.getElementById('pass').value = null
                    $('#loginp1').text('no user found. please sign-up')
                }
            })
        })
        $("#sign_out_but").click(()=>{
            content(<Checksign/>)
        })
    })
    return (
        <div className="App">
            {sign}
        </div>
    )
}

export default App
