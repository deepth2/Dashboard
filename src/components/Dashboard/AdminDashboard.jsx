import React from 'react'
import Header from '../DashboardCompo/Header'
import Adminform from '../DashboardCompo/AdminForm'
import AllTask from '../DashboardCompo/Alltask'

const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-7'>
            <Header changeUser={props.changeUser} data={props.data} />
            <Adminform />
            <AllTask />
        </div>
    )
}

export default AdminDashboard