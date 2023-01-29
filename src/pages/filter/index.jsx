import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BackendIP from '../../BackendIP'
// import Gold from './components/Gold'

import MainFilter from './components/MainFilter'
import None from './components/None'
// import Platinum from './components/Platinum'
// import Silver from './components/Silver'

function Filter() {
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
        <div style={{ background: 'linear-gradient(rgb(112, 16, 19), rgb(92, 12, 18), rgb(72, 9, 15), rgb(53, 7, 9), rgb(37, 0, 0))' }} className=' min-h-screen w-full px-[5%] space-y-5'>
            <div className="h-36 w-full bg-white"></div>
            <MainFilter />
            {/* <div className="flex gap-5 flex-wrap">
                    <Platinum />
                    <Platinum />
                    <Platinum />
                    <Platinum />
                    <Platinum />
                    <Platinum />
                </div>
                <div className="flex gap-5 flex-wrap">
                    <Gold />
                    <Gold />
                    <Gold />
                    <Gold />
                    <Gold />
                    <Gold />
                </div>
                <div className="flex gap-5 flex-wrap">
                    <Silver />
                    <Silver />
                    <Silver />
                    <Silver />
                    <Silver />
                    <Silver />
                </div> */}
            <div className="flex gap-5 flex-wrap">
                {
                    ads.map(e => <None adsTitle={e.adsTitle} age={e.age} introduction={e.intro} profilePhoto={e.profilePhoto} id={e.id} />)
                }
            </div>
        </div>
    )
}

export default Filter

