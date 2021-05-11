import React from 'react'
import './css/content.css'

var routine = require('./routine.json')
var curr_class;
class Routinelive extends React.Component{
    constructor(){
        super();
        this.ext_date = this.ext_date.bind(this)
        this.ext_time = this.ext_time.bind(this)
        this.whole_date = this.whole_date.bind(this)
        this.refresh = this.refresh.bind(this)
        this.attendence = this.attendence.bind(this)
        this.state = {days:null,routine:null,}
    }
    //time and date functions
    ext_date(){
        var date = new Date();
        var day = date.getDay();
        return day
    }
     whole_date(){
        var date = new Date();
        var day = date.getDate();
        return day
    }
     ext_time(){
        var time = new Date();
        var time_now = time.getHours();
        return (time_now)
    }
    //ends

    async attendence(){
        await fetch("http://localhost:8000/find_routine/"+curr_class)
        .then(res=>res.json())
        .then((data)=>{
            data.map(async(data)=>{
                if(data[curr_class].date !== this.whole_date()){
                    await fetch("http://localhost:8000/change_attendence/"+this.whole_date()+"/"+curr_class+"/"+data[curr_class].attended)
                    .then(alert('attendence has been recorded :)'))
                }
                else{
                    alert('already attended :|')
                }
            })
            
            
        })
    }

    componentDidMount(){
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        this.setState({days:days[this.ext_date()]})
        if (this.ext_date() !== 0 && this.ext_date() !== 6) {
            var table_rows = routine[this.ext_date()-1].map((data) => {
                if (this.ext_time() === data.S_Time) {
                    curr_class = data.class_name.toLowerCase()
                    return (
                        <tr className="tr1" style={{ backgroundColor: "#13eb62" }}>
                            <td>{data.class_name}</td>
                            <td>{data.class_code}</td>
                            <td>{data.S_Time} : 00</td>
                            <td>{data.E_Time} : 00</td>
                            <td id = "active_routine" onClick = {()=>{this.attendence()}}>Ongoing</td>
                        </tr>
                    )
                }
                else if (this.ext_time() < data.S_Time) {
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
                else if (this.ext_time() > data.S_Time) {
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
            this.setState({routine:table_rows})
        }
        else {
            this.setState({routine:<h1 style={{ color: 'red', backgroundColor: 'aqua' }}>CHUTTI K DIN YAHA KYA KAAM!!! CHAL NIKALL</h1>})
        }
    }
    refresh(){
        this.componentDidMount();
    }

    render(){
        return(
            <div className="routd0">
            <span className="routs0">
                <table className='routtab0'>
                    <thead>
                        <tr>
                            <th className="day_finder">
                                {this.state.days}
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
                        {this.state.routine}
                    </tbody>
                </table>
                <button id="ref_but" onClick = {()=>{this.refresh()}}>Refresh</button>
                
            </span>
        </div>
    )
    }
}

export default Routinelive