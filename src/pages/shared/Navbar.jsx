import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    
  return (
    <div className='bg-[#010313] text-white'>
        <nav className='hidden lg:flex h-24 justify-between px-[10%]'>
            <ul className='flex gap-10 h-full justify-center items-center'>
                <li className='text-2xl'><Link to={'/'}> Home  </Link></li>
                <li className='text-2xl'><Link to={'/about'}> About </Link></li>
                <li className='text-2xl'><Link to={'/faq'}> FAQ   </Link></li>
            </ul>
            <div className="flex justify-center items-center gap-5">
                <input 
                className='h-8 w-52 bg-transparent border rounded-3xl outline-none pl-3 placeholder:text-white placeholder:text-xs flex items-center capitalize' 
                type="text" 
                name="" 
                placeholder='Search'
                id="" />
                <button className='h-10 px-3 text-white rounded-full bg-[#ef1010]'>Search</button>
                     <button className='h-10 px-3 text-white rounded-full bg-[#006ef8]'><Link to={'/auth'}> Log In </Link></button>
                <button className='h-10 px-3 text-white rounded-full bg-[#ef1010]'><Link to={'/auth'}> Place Ads </Link></button>
            </div>
        </nav>
        <nav className='flex lg:hidden'></nav>
    </div>
  )
}

export default Navbar