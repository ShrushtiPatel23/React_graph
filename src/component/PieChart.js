import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJs } from 'chart.js/auto';
import { Link } from 'react-router-dom';

const PieChart = ({ data }) => {
  return (
    <div className='my-3'>
      <div style={{ width: '30%', height: '30%' }} className="container">
        <Pie data={data} />
      </div>
      <Link to="/"><button className='btn btn-primary btn-sm mx-3 my-2'>Back</button></Link>
    </div>
  )
}

export default PieChart