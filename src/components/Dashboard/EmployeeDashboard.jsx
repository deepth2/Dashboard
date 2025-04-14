import React from 'react';
import Tasklist from '../DashboardCompo/Tasklist.jsx';
import Header from '../DashboardCompo/Header.jsx';
import Task from '../DashboardCompo/Task.jsx';


const EmployeeDashboard = (props) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header changeUser={props.changeUser} data={props.data} />
      <Tasklist data={props.data} />
      <Task data={props.data} />
    </div>
  );
};


export default EmployeeDashboard;
