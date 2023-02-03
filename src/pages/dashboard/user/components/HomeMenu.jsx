import { Close, Done } from '@mui/icons-material'
import React from 'react'
import Buttons from './Buttons'

function HomeMenu() {
    return (
        <div className='h-full w-full space-y-5'>
            <h1 className='text-2xl font-bold'>Home</h1>
            <Buttons />
            {/* <div className="flex justify-center md:justify-start  w-full border-b gap-10  text-lg font-assistant mt-10">
                <button className="border-b-[3px] border-[#6426c3]">All</button>
                <button className="border-b-[3px]  border-[#5ecfff]">Live</button>
                <button className="border-b-[3px]  border-[#e328af]">Blocked</button>
            </div> */}
            <h1 className='text-2xl font-bold'>Price & Plans</h1>
            <Table />
        </div>
    )
}

export default HomeMenu


const Table = () => <div className="mt-10  border-[#6418C3] border-opacity-40  flex gap-5 lg:gap-0 flex-wrap text-[25px]">
    <div className="h-full w-[243px] border-x border-t border-[#6418C3] border-opacity-40">
        <div className="h-[55px] w-full border-b border-opacity-40 border-[#6418C3] flex justify-center items-center  font-bold">Benifits</div>
        <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">Pictures</div>
        <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">Videos</div>
        <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">Verified</div>
        <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">Chat Support</div>
        <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">Top Spot</div>
        <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">Social Media</div>
        <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">Email Newsletters</div>
        <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">View</div>
        <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">Traffic Booster </div>
        <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">Ads Available</div>
        <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">Position</div>
    </div>
    <div className="h-full w-[204px] border-x border-t border-[#6418C3] border-opacity-40">
        <div className="h-[55px] w-full border-b border-opacity-40 border-[#6418C3] flex justify-center items-center font-bold">Free</div>
        <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">3</div>
        <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center"><Close /></div>
        <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center"><Close /></div>
        <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center"><Close /></div>
        <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center"><Close /></div>
        <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center"><Close /></div>
        <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center"><Close /></div>
        <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">50</div>
        <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center"><Close /></div>
        <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">Unlimited</div>
        <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">Free Ads Section</div>
    </div>
    <div className="h-full w-[175px]  border-[#6418C3] border-x border-t border-opacity-40 bg-[linear-gradient(rgb(200, 199, 199), rgb(213, 213, 213), rgb(227, 227, 227), rgb(241, 241, 241), rgb(255, 255, 255))]">
        <div className="h-[55px] w-full border-b  border-opacity-40 border-[#6418C3] flex justify-center items-center font-bold">Silver</div>
        <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center">Unlimited</div>
        <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center"><Done /></div>
        <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center"><Done /></div>
        <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center"><Done /></div>
        <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center"><Done /></div>
        <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center"><Done /></div>
        <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center"><Close /></div>
        <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center">Unlimited</div>
        <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center">Moderate</div>
        <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center">16</div>
        <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center">Lower</div>
        <button className="h-[52px] w-full border-b-2  border-x-2 bg-[#6418C3] rounded-b-[20px] text-white">Upgrade</button>
    </div>
    <div className="h-full w-[174px] border-[#6418C3] border-t border-x border-opacity-40 bg-[linear-gradient(rgb(224, 186, 96), rgb(233, 201, 129), rgb(241, 216, 163), rgb(248, 232, 196), rgb(255, 247, 230))]" >
        <div className="h-[55px] w-full border-b border-opacity-40 border-[#6418C3] flex justify-center items-center font-bold">Gold</div>
        <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">Unlimited</div>
        <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center"><Done /></div>
        <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center"><Done /></div>
        <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center"><Done /></div>
        <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center"><Done /></div>
        <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center"><Done /></div>
        <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center"><Done /></div>
        <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">Unlimited</div>
        <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">High</div>
        <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">8</div>
        <div className="h-[52px] w-full border-b border-opacity-10 border-[#6418C3] flex justify-center items-center">Middle</div>
        <button className="h-[52px] w-full border-b-2  border-x-2 bg-[#6418C3] rounded-b-[20px] text-white">Upgrade</button></div>
    <div className="h-full w-[174px]  border-[#6418C3] border-t border-x border-opacity-40 bg-[linear-gradient(rgb(125, 125, 125), rgb(156, 156, 156), rgb(188, 188, 188), rgb(221, 221, 221), rgb(255, 255, 255))]">
        <div className="h-[55px] w-full border-b border-r border-opacity-40 border-[#6418C3] flex justify-center items-center font-bold">Platinum</div>
        <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center ">Unlimited</div>
        <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center "><Done /></div>
        <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center "><Done /></div>
        <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center ">24/7</div>
        <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center "><Done /></div>
        <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center "><Done /></div>
        <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center "><Done /></div>
        <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center ">Unlimited</div>
        <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center ">Very High</div>
        <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center ">3</div>
        <div className="h-[52px] w-full border-b border-r border-opacity-10 border-[#6418C3] flex justify-center items-center ">Top</div>
        <button className="h-[52px] w-full border-b-2  border-x-2 bg-[#6418C3] rounded-b-[20px] text-white">Upgrade</button>
    </div>
</div>