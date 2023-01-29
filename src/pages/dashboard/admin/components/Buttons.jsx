import React from 'react'


function Buttons() {
    return (
        <div className="flex gap-5 flex-wrap ">
            <button className="h-10  px-5 rounded-full md:text-xl border-2 border-[#6418c3]">Verification</button>
            <button className="h-10  px-5 rounded-full md:text-xl border-2 border-[#5ecfff]">Customers</button>
            <button className="h-10  px-5 rounded-full md:text-xl border-2 border-[#e328af]">Live Spots</button>
        </div>
    )
}

export default Buttons