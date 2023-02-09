import { NavigateBefore, NavigateNext } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BackendIP from '../../../BackendIP'

function Screen2() {
    const [count, setCount] = useState(0)
    const [ads, setAds] = useState([])
    const fetchData = () => {
        axios.get(`${BackendIP}/ads/get-all-ads`).then(res => {
            setAds(res.data)
        })
    }
    useEffect(() => {
      fetchData()
    }, [])
    
    return (
        <div className='w-full overflow-hidden bg-[#1E1E1E] py-5 ' >
            <div style={{transform:`translate(-${count*240}px,0px)`}} className={`h-[350px]  flex items-center text-white pl-[5%] gap-5  duration-500`}>
                <div className="w-96 flex-shrink-0 space-y-5">
                    <div className='text-3xl cursor-pointer '>Lorem ipsum dolor sit amet consectetur. Elit dictumst velit mattis nec sed lacus at.</div>
                    <p className='text-justify'>Lorem ipsum dolor sit amet consectetur. Vulputate arcu ornare urna nisi adipiscing penatibus ultrices duis. Magnis eget mauris imperdiet a scelerisque lacus velit cursus. Ut morbi dui diam velit sed elit.</p>
                </div>
                {ads.map(e=><div className="w-[230px] h-[270px] flex-shrink-0 relative">
                    <img src={e.profilePhoto} className='h-full object-cover rounded-lg w-full  ' alt="" />
                    <div className="absolute bottom-2 left-2">
                        <p className='text-lg'>{e.adsTitle}</p>
                        <p>{e.location}</p>
                    </div>
                </div>)}
                
            </div>
            <div className="float-right  flex justify-center items-center gap-5 mr-10 text-white">
                    <button className='rounded-full p-1 border' onClick={()=>count && setCount(count-1)}><NavigateBefore fontSize='large' /></button>
                    <button className='rounded-full p-1 border' onClick={()=>ads.length + 1 !== count && setCount(count+1)}>         <NavigateNext   fontSize='large' /></button>
            </div>
        </div>
    )
}

export default Screen2