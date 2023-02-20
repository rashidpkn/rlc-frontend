import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BackendIP from '../../../BackendIP'

function Screen5() {
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
        <div className="h-screen w-full bg-[#1e1e1e]  border-[white] hidden lg:flex gap-5 p-3 overflow-hidden sticky top-0" >
            <div className="h-full w-full flex justify-between gap-5 overflow-auto relative px-5">
                <div className="h-full w-1/2 sticky top-0 flex gap-5">

                    <div className="h-full w-[15%] relative">
                        <p className='rotate-[270deg] text-8xl text-red-600 absolute bottom-28 -left-[7.5rem] h-max w-max'>{'Layana'}</p>
                    </div>

                    <div className="h-full w-[60%]">
                        <img src="https://cm.dubaiescortstars.com/files/questionary/18720/thumbs/0x650/2f5455e83c82.jpeg?1669225963" className='h-full w-full object-cover' alt="" />
                    </div>

                    <div className="h-full w-[15%] relative ">
                        <p className='rotate-[270deg] text-3xl text-red-600 absolute top-28 -right-5 h-max w-max '>Red Light Club</p>
                    </div>
                </div>

                <div className="h-full w-1/4 sticky top-0 flex justify-center items-end text-justify text-white">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum autem earum quisquam debitis obcaecati vel in reprehenderit, tempora, nihil qui rem ad perferendis, alias ab repellat corrupti explicabo blanditiis laboriosam!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cum labore inventore beatae enim aliquam, ut aspernatur perspiciatis sequi, aliquid vel quos neque minus quis esse, atque eaque. Quod, reiciendis.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus neque laudantium tempore odit velit porro quisquam rem error minus beatae. Quasi temporibus provident saepe laboriosam voluptates error quas repellat cum.
                    </p>
                </div>
                <div className="h-full w-1/4 space-y-5 ">
                    <Profile {...ads.find(e => e.id === 2)} />
                    <Profile {...ads.find(e => e.id === 3)} />
                    <Profile {...ads.find(e => e.id === 4)} />
                    <Profile {...ads.find(e => e.id === 5)} />
                    <Profile {...ads.find(e => e.id === 6)} />
                    <Profile {...ads.find(e => e.id === 7)} />
                    <Profile {...ads.find(e => e.id === 8)} />
                    <Profile {...ads.find(e => e.id === 11)} />
                    <Profile {...ads.find(e => e.id === 12)} />
                </div>
            </div>
        </div>
    )
}

export default Screen5


const Profile = ({ profilePhoto, adsTitle, location,id }) => {
    const navigate = useNavigate()
    return (
        <div className=" h-1/2" onClick={()=>navigate(`profile/${id}`)}>
            <img src={`${BackendIP}${profilePhoto}`} className='h-3/4 w-full object-cover object-top' alt="" />
            <div className="flex flex-col justify-between w-full h-1/4 p-3">
                <p className='text-red-600 text-2xl'>{adsTitle}</p>
                <p className='text-white'>{location}</p>
            </div>
        </div>
    )
}
