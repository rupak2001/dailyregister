import './css/App.css';
import React, { useState } from 'react'
import Checksign from './chk_sign'
import Head from './head'
import $ from 'jquery'

function App() {
    var [sign, content] = useState(<Checksign />)
    $(() => {
        $('#loginbut').click(() => {
            var email = document.getElementById('email').value
            var pass = document.getElementById('pass').value
            fetch('http://localhost:8000/log_user/' + email)
            .then(res => { return (res.json()) })
            .then((data) => {
                if (data.length > 0 && pass === data[0].password) {
                    content(<Head />)
                }
                else if(data.length > 0 && pass !== data[0].password){
                    $('#loginp1').text('incorrect password')
                }
                else if(data.length === 0){
                    $('#loginp1').text('no user found. please sign-up')
                }
            })
        })
    })
    return (
        <div className="App">
            {sign}
        </div>
    )
}

export default App
