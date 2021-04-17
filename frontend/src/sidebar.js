import React from 'react'
import './css/head.css'



function Sidebar(){
    return(
        
        <div id = "sb" className = "#">
            <h1 className = "sbh1">Welcome</h1>
            <button className = "sbb1">SCHEDULE</button>
            <button className = "sbb2">STATS</button>
            <button className = "sbb3">UPDATE-SCHEDULE</button>
            <button className = "sbb4">UPDATE-INFO</button>
        </div>
    )
}

export default Sidebar