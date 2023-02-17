import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BackendIP from '../../../BackendIP'

function Screen4() {
    const [ads, setAds] = useState([])
    const fetchData = () => {
        axios.get(`${BackendIP}/ads/get-all-ads`).then(res => {
          setAds(res.data.sort((a, b) => a.id - b.id))
        })
    }
    useEffect(() => {
      fetchData()
    }, [])
  return (
    <div className='h-screen w-full sticky top-0' >
        <div className="absolute w-full h-full overflow-auto">
          <Screen {...ads.find(e => e.id === 2)} zIndex={1} />
          <Screen {...ads.find(e => e.id === 3)} zIndex={2} />
          <Screen {...ads.find(e => e.id === 4)} zIndex={3} />
          <Screen {...ads.find(e => e.id === 5)} zIndex={4} />
          <Screen {...ads.find(e => e.id === 6)} zIndex={5} />
          <Screen {...ads.find(e => e.id === 7)} zIndex={6} />
          {/* {
            ads.map((e,index)=><Screen intro={e.intro} profilePhoto={e.profilePhoto} zIndex={index+1} gallery={e.gallery} />)
          } */}
            
        </div>
    </div>
  )
}

export default Screen4


const Screen = ({zIndex,profilePhoto,gallery,intro,adsTitle,location}) =>{
  return(
    <div className="h-full w-full sticky top-0 flex flex-col lg:flex-row py-5 px-[5%] gap-5 bg-[#1e1e1e] text-white" style={{zIndex}}>
      
      <div className="h-3/5 lg:h-full w-full lg:w-1/2  flex flex-col lg:flex-row items-center lg:items-start">
        
        <div className="w-1/5 h-full items-end relative hidden lg:flex">
          <p className='rotate-[270deg] text-8xl text-red-600 absolute bottom-28 -left-14 h-max w-max'>{adsTitle}</p>
        </div>
        <img src={profilePhoto} className='h-[80%] lg:h-full  w-full lg:w-3/5 object-cover object-top' alt="" />
        <div className="lg:hidden ">
          <p className=' text-2xl text-red-600 text-center'>{adsTitle}</p>
          <p className=' text-2xl text-red-600 text-center'>{location}</p>
        </div>

        <div className="w-1/5 h-full  relative hidden lg:flex">
            <p className='rotate-[270deg] text-3xl text-red-600 absolute top-28 right-0 h-max w-max '>Red Light Club</p>
        </div>
      </div>
      
      <div className="h-1/3 lg:h-full w-full lg:w-[30%] hidden lg:flex flex-col justify-center pb-10 overflow-hidden">
        <p className='text-justify'>{intro}</p>
      </div>
      
      <div className="h-1/5 lg:h-full w-full lg:w-[20%] flex flex-row lg:flex-col gap-5  py-5">
        {
          gallery?.map(e=><div className="w-full h-64 border">
            <img className='h-full w-full object-cover' src={e} alt="" />
          </div>)
        }
      </div>


    </div>
  )
}