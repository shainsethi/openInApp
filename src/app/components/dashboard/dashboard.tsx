import React from 'react'
import Sidebar from './components/sidebar'
import Navbar from './components/navbar';
import Counter from './components/counter';

const Dashboard = () => {
  return (
    <div className= 'flex justify-start gap-4 items-start'>
        <Sidebar />
        <div className='flex flex-col'>
        <Navbar />
        <Counter />
        </div>
    </div>
  )
}

export default Dashboard;