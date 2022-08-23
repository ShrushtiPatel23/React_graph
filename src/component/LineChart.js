import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJs } from 'chart.js/auto';
import { Link } from 'react-router-dom';


const LineChart = ({ data }) => {
  return (
    <div>
      <div style={{ width: '30%', height: '40%' }} className="container">
        <Line data={data} />
      </div>
      <Link to="/"><button className='btn btn-primary btn-sm mx-3'>Back</button></Link>
    </div>
  )
}

export default LineChart