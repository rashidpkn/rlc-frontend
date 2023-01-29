import React from 'react'

function Verify() {
    return (
        <div className="py-2 w-full bg-[#f01e2c] flex justify-center items-center gap-3">
            <span className="text-black text-xl font-medium">Please Verify Your Email</span>
            <button className="border border-black px-2 py-1 rounded-xl text-xl font-medium hover:border-red-500 hover:bg-black hover:text-red-500 duration-200">Verify</button>
        </div>
    )
}

export default Verify