import React from 'react'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function UserDashboard() {
  return (
    <div className='flex h-screen'>
      <Sidebar/>
      <div className="h-screen w-[calc(100%-5rem)] lg:w-[75%]">
        <Navbar/>
        <Main/>
      </div>
    </div>
  )
}

export default UserDashboard