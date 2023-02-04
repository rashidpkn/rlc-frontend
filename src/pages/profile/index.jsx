import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BackendIP from '../../BackendIP'
import Appearance from './components/Appearance'
import Charges from './components/Charges'
import Intro from './components/Intro'
import Links from './components/Links'
import MeetWith from './components/MeetWith'
import Photos from './components/Photos'
import Question from './components/Question'
import Review from './components/Review'
import Services from './components/Services'
import Title from './components/Title'


function Profile() {
    const { id } = useParams()
    const [ads, setAds] = useState({})
    const [photo, setPhoto] = useState('')
    useEffect(() => {
        axios.get(`${BackendIP}/ads/get-by-id`, { params: { id: Number(id) } }).then(res => {
            setAds(res.data);
            setPhoto(`${BackendIP}${res.data.profilePhoto}`)
        }
        )
    }, [id])

    return (
        <div className='w-full px-[5%]'
            style={{ background: 'linear-gradient(rgb(161, 140, 209) 0%, rgb(251, 194, 235) 100%) 0% 0% no-repeat padding-box padding-box transparent' }}>
            <div className="h-36 w-full bg-white"></div>
            <Links id={ads.id} />

            <div className="w-full lg:hidden bg-white p-2 ">
                <div className="w-full flex justify-between items-center h-14">
                    <Title ads={ads} />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-center  h-full">
                <Photos ads={ads} photo={photo} setPhoto={setPhoto} />
                <div className=" lg:w-1/2 lg:h-auto bg-white p-2 lg:p-5 space-y-2 ">
                    <div className="hidden lg:flex w-full  justify-between items-center h-14">
                        <Title ads={ads} />
                    </div>
                    <Services ads={ads} />

                    <div className="mt-3 flex flex-wrap gap-[10px] flex-col lg:flex-row lg:gap-[30px] justify-center items-center">
                        <div className="w-[227px]">
                            <span className='text-xl text-[#010315] font-medium'>More About Me</span>
                            <Appearance age={ads.age} height={ads.height} weight={ads.weight} hair={ads.hair} />
                        </div>
                        <Charges ads={ads} />
                    </div>

                    <MeetWith />

                    <Intro ads={ads} />

                </div>
            </div>
            <div className="py-5 flex flex-col lg:flex-row  w-full  gap-5 ">
                <Review />
                <Question ads={ads} />
            </div>

        </div >
    )
}

export default Profile