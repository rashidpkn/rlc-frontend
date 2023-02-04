import { Close } from '@mui/icons-material'
import React from 'react'

function WriteReviews({setWriteReview}) {
    return (
        <div className="fixed inset-0 m-auto h-80 w-[600px] border bg-white z-50 rounded-xl p-5">
            <div className="w-full h-1/5 flex items-center justify-between text-xl border-b">
                <span>Write Your Reviews</span>
                <Close onClick={()=>{setWriteReview(false)}} />
            </div>
            <div className="w-full h-3/5 flex flex-col gap-5 mt-5">
                <input type="text" className="h-10 w-full border px-2 outline-none rounded-lg capitalize" placeholder="Review Title" />
                <textarea className="w-full h-[calc(100%-4rem)] border outline-none rounded-lg p-2 " placeholder="Review Description" />
            </div>
            <div className="w-full h-1/5 ">
                <button className="border px-3 py-1 float-right rounded-lg border-[#e8b7e5]">Submit</button>
            </div>
        </div>
    )
}

export default WriteReviews