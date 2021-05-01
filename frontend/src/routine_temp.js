import React, { useEffect, useState } from 'react'
import './css/content.css'
import $ from 'jquery'
var routine = require('./routine.json')

var curr_class;
function RoutineTemp() {
    var [ini_att,fin_att] = useState(null)
    var [ini_cont, fin_cont] = useState(null)
    var [ref_ini, ref] = useState(0)
    var [day, upday] = useState(null)




    //time and date functions
    var ext_date = () => {
        var date = new Date();
        var day = date.getDay();
        return day
    }
    var whole_date = ()=>{
        var date = new Date();
        var day = date.getDate();
        return day
    }
    var ext_time = () => {
        var time = new Date();
        var time_now = time.getHours();
        return (time_now)
    }
    //ends


    $('#ref_but').click(() => {
        ref((val) => {
            val += 1;
        })
    })

    $("#active_routine").click(async()=>{
        await fetch("http://localhost:8000/find_routine/"+curr_class)
        .then(res=>res.json())
        .then((data)=>{
            data.map(async(data)=>{
                if(data[curr_class].date !== whole_date()){
                    await fetch("http://localhost:8000/change_attendence/"+whole_date()+"/"+curr_class+"/"+data[curr_class].attended)
                    .then(console.log('attendence has been recorded'))
                }
                else{
                    fin_att(console.log('already attended'))
                }
            })
            
            
        })
    })


    useEffect(() => {
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        upday(days[ext_date()])
        if (ext_date() !== 0 && ext_date() !== 6) {
            var table_rows = routine[ext_date() -1].map((data) => {
                if (ext_time() === data.S_Time) {
                    curr_class = data.class_name.toLowerCase()
                    return (
                        <tr className="tr1" style={{ backgroundColor: "#13eb62" }}>
                            <td>{data.class_name}</td>
                            <td>{data.class_code}</td>
                            <td>{data.S_Time} : 00</td>
                            <td>{data.E_Time} : 00</td>
                            <td id = "active_routine">Ongoing</td>
                        </tr>
                    )
                }
                else if (ext_time() < data.S_Time) {
                    return (
                        <tr className="tr1" style={{ backgroundColor: "#ffbe19" }}>
                            <td>{data.class_name}</td>
                            <td>{data.class_code}</td>
                            <td>{data.S_Time} : 00</td>
                            <td>{data.E_Time} : 00</td>
                            <td>{data.Status}</td>
                        </tr>
                    )
                }
                else if (ext_time() > data.S_Time) {
                    return (
                        <tr className="tr1" style={{ backgroundColor: "#f57242" }}>
                            <td>{data.class_name}</td>
                            <td>{data.class_code}</td>
                            <td>{data.S_Time} : 00</td>
                            <td>{data.E_Time} : 00</td>
                            <td>Ended</td>
                        </tr>
                    )
                }
            })
            fin_cont(table_rows)
        }
        else {
            fin_cont(<h1 style={{ color: 'red', backgroundColor: 'aqua' }}>CHUTTI K DIN YAHA KYA KAAM!!! CHAL NIKALL</h1>)
        }
    }, [ref_ini])
    return (
        <div className="routd0">
            <span className="routs0">
                <table className='routtab0'>
                    <thead>
                        <tr>
                            <th className="day_finder">
                                {day}
                            </th>
                        </tr>
                        <tr className="tr1" id="rout_table">
                            <th>SUBJECT</th>
                            <th>SUB-CODE</th>
                            <th>S-TIME</th>
                            <th>E-TIME</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ini_cont}
                    </tbody>
                </table>
                <button id="ref_but">Refresh</button>
                {ini_att}
            </span>
        </div>
    )
}

export default RoutineTemp