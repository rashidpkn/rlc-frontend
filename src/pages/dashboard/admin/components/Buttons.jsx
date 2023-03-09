import React from 'react'
import { Link } from 'react-router-dom'


function Buttons() {
    return (
        <div className="flex gap-5 flex-wrap ">
            <Link to={'/dashboard/verification'}>
                <button className="h-10  px-5 rounded-full md:text-xl border-2 border-[#6418c3]">Verification</button>
            </Link>
            <Link to={'/dashboard/customers'}>
                <button className="h-10  px-5 rounded-full md:text-xl border-2 border-[#5ecfff]">Customers</button>
            </Link>
            {/* <button className="h-10  px-5 rounded-full md:text-xl border-2 border-[#e328af]">Live Spots</button> */}
        </div>
    )
}

export default Buttons