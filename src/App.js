import { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './component/Home';
import BarChart from './component/BarChart';
import LineChart from './component/LineChart';
import PieChart from './component/PieChart';

function App() {
  //const Data = [{
  //  id: 1,
  //  year: 2016,
  //  userGain: 80000,
  //  userLost: 10345,
  //},
  //{
  //  id: 2,
  //  year: 2017,
  //  userGain: 45667,
  //  userLost: 5633,
  //},
  //{
   // id: 3,
   // year: 2018,
   // userGain: 77456,
  //  userLost: 8820,
  //},
  //{
  //  id: 4,
  //  year: 2019,
  //  userGain: 88845,
  //  userLost: 6749,
  //}
  //]

  const [data, setData] = useState({
    labels: [],
    datasets: [{
      label: "employee_salary",
      data: [],
      backgroundColor: ["Blue", "Red"],
      borderColor: ["Black"]
    }
    ]

  })

  const loadData = async () => {
    const empAge = [];
    const empSalary = [];
    let url = "https://dummy.restapiexample.com/api/v1/employees";
    
    let data = await fetch(url);
    let parseData = await data.json()

    //setData(parseData.data)
    console.log(parseData.data);
    
    for (const val of parseData.data) {
      empAge.push(val.employee_age);
      empSalary.push(val.employee_salary);
    }
    console.log(empAge, empSalary);
    setData({
      labels: empAge,
      datasets: [{
        label: "employee_salary",
        data: empSalary,
        backgroundColor: ["Blue", "Red"],
        borderColor: ["Black"]
      }
      ]
  
    })
}


useEffect(() => {
    loadData();
}, [])
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/bar" element={<BarChart data={data} />} />
      <Route exact path="/pie" element={<PieChart data={data} />} />
      <Route exact path="/line" element={<LineChart data={data} />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
