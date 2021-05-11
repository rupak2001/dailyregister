import React, { useEffect, useState } from 'react'
import './css/content.css'
import { Bar, Doughnut, Pie } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
var computer, maths, chemistry, electrical, mechanics, mechanical_lab, computer_lab, electrical_lab, chemistry_lab, english_lab
var Statreport = () => {
    var [chart_dat, up_dat] = useState(null)
    useEffect(() => {
        fetch("http://localhost:8000/get_stats")
            .then(res => res.json())
            .then(data => {
                chemistry = data[0].chemistry
                maths = data[0].maths
                electrical = data[0].electrical
                computer = data[0].computer
                mechanics = data[0].mechanics
                mechanical_lab = data[0].mechanical_lab
                chemistry_lab = data[0].chemistry_lab
                computer_lab = data[0].computer_lab
                english_lab = data[0].english_lab
                electrical_lab = data[0].electrical_lab


                chemistry = chemistry.attended
                maths = maths.attended
                electrical = electrical.attended
                computer = computer.attended
                mechanics = mechanics.attended
                mechanical_lab = mechanical_lab.attended
                chemistry_lab = chemistry_lab.attended
                computer_lab = computer_lab.attended
                english_lab = english_lab.attended
                electrical_lab = electrical_lab.attended
                console.log(computer, chemistry, maths, electrical, mechanics, computer_lab, chemistry_lab, mechanical_lab, english_lab, electrical_lab)
                up_dat({
                    labels: ['computer', 'chemistry', 'maths', 'electrical', 'mechanics', 'computer_lab', 'chemistry_lab', "mechanical_lab", "english_lab", "electrical_lab"],
                    datasets: [
                        {
                            label: "ATTENDENCE STATUS",
                            data: [computer, chemistry, maths, electrical, mechanics, computer_lab, chemistry_lab, mechanical_lab, english_lab, electrical_lab],
                            backgroundColor: ['red', '#06b2b8', 'orange', 'yellow', 'violet', 'darkGreen', 'magenta', 'brown', 'navy', '#ebab15']
                        }
                    ]
                })
            })

    }, [])


    return (
        <div className = "chart_cont">
            <p>data reflects no of attendence given till date</p>
            <Doughnut data={chart_dat} options={{'fontStyle':"bold"}}/>
        </div>
    )
}

export default Statreport