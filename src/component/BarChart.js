import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJs } from 'chart.js/auto';
import { Link } from 'react-router-dom';



const BarChart = ({ data }) => {
    return (
        <div>
            <div style={{ width: '50%', height: '40%' }} className="container">
                <Bar data={data} />
            </div>
            <Link to="/"><button className='btn btn-primary btn-sm mx-3'>Back</button></Link>
        </div>
    )
}

export default BarChart