import React,{useEffect,useState} from 'react'
import './css/content.css'
var routine = require('./routine.json')



function RoutineTemp() {
    var [ini_cont,fin_cont] = useState(null)
    var [day,upday] = useState(null)
    var ext_date = ()=>{
        var date = new Date();
        var day = date.getDay();
       return day
    }
    useEffect(()=>{
        var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        upday(days[ext_date()])
        if(ext_date()!==0 && ext_date()!==6){
            var table_rows = routine[ext_date()-1].map((data)=>{
                return(
                    <tr className="tr1">
                            <th>{data.class_name}</th>
                            <th>{data.class_code}</th>
                            <th>{data.S_Time}</th>
                            <th>{data.E_Time}</th>
                            <th>{data.Status}</th>
                    </tr>
                )
            })
            fin_cont(table_rows)
        }
        else{
            fin_cont(<h1 style = {{color:'red' , backgroundColor: 'aqua'}}>CHUTTI K DIN YAHA KYA KAAM!!! CHAL NIKALL</h1>)
        }
    },[])





    return (
        <div className="routd0">
            <span className="routs0">
                <table className='routtab0'>
                    <thead>
                        <tr>
                            <th className = "day_finder">
                                {day}
                            </th>
                        </tr>
                        <tr className="tr1">
                            <th>SUBJECT</th>
                            <th>SUBJECT-CODE</th>
                            <th>S-TIME</th>
                            <th>E-TIME</th>
                            <th>ATTENDENCE STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ini_cont}
                    </tbody>
                </table>
            </span>
        </div>
    )
}

export default RoutineTemp