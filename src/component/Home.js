import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className='container col-3 my-3'>
       <Link to="/bar"><button className = 'btn btn-primary btn-sm mx-3'>BarChart</button></Link>
       <Link to="/pie"><button className = 'btn btn-primary btn-sm mx-3'>PieChart</button></Link>
        <Link to="/line"><button className = 'btn btn-primary btn-sm'>LineChart</button></Link>
    </div>
  )
}

export default Home