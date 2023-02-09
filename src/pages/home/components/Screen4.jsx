import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BackendIP from '../../../BackendIP'

function Screen4() {
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
    <div className='h-screen w-full sticky top-0' >
        <div className="absolute w-full h-full overflow-auto">
          {
            ads.map((e,index)=><Screen intro={e.intro} profilePhoto={e.profilePhoto} zIndex={index+1} gallery={e.gallery} />)
          }
            
        </div>
    </div>
  )
}

export default Screen4


const Screen = ({zIndex,profilePhoto,gallery,intro}) =>{
  return(
    <div className="h-full w-full sticky top-0 flex py-5 px-[5%] gap-5 bg-[#1e1e1e] text-white" style={{zIndex}}>
      
      <div className="h-full w-1/2 border">
      <img src={profilePhoto} className='h-full w-full' alt="" />
      </div>
      
      <div className="h-full w-[30%] flex flex-col justify-end pb-10">
        <p className='text-justify'>{intro}</p>
      </div>
      
      <div className="h-full w-[20%] flex flex-col gap-5  py-5">
        {
          gallery.map(e=><div className="w-full h-64 border">
            <img className='h-full w-full object-cover' src={e} alt="" />
          </div>)
        }
        
      </div>
    </div>
  )
}