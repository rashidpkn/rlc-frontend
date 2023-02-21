import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import BackendIP from "../../BackendIP"


function Test() {
    const [ads, setAds] = useState([])
    const fetchData = () => {
        axios.get(`${BackendIP}/ads/get-all-ads`).then(res => {
            setAds(res.data.sort((a, b) => a.id - b.id))
        })
    }

    useEffect(() => {
        fetchData()
    }, [])


    const [mainScroll, setMainScroll] = useState(false)
    return (
        <div className={`h-screen px-5 bg-[#1e1e1e] overflow-hidden sticky top-0 space-y-5 text-white`}

        >
            <div className={`h-full w-full overflow-scroll sc`} >
                <Screen setMainScroll={setMainScroll} mainScroll={mainScroll} profile={[2,4,5]}     ads={ads} img={'https://cm.dubaiescortstars.com/files/questionary/18720/thumbs/0x650/2f5455e83c82.jpeg'} location='Dubai' />
                <Screen setMainScroll={setMainScroll} mainScroll={mainScroll} profile={[14,17,18]}  ads={ads} img={'https://cm.dubaiescortstars.com/files/questionary/19678/thumbs/0x650/2796be892082.jpeg'} location='Thailand' />
                <Screen setMainScroll={setMainScroll} mainScroll={mainScroll} profile={[14,17,18]}  ads={ads} img={'https://cm.dubaiescortstars.com/files/questionary/19678/thumbs/0x650/2796be892082.jpeg'} location='London' />
                <Screen setMainScroll={setMainScroll} mainScroll={mainScroll} profile={[14,17,18]}  ads={ads} img={'https://cm.dubaiescortstars.com/files/questionary/19678/thumbs/0x650/2796be892082.jpeg'} location='Indian' />
            </div>
        </div>
    )
}



export default Test


function Screen({  mainScroll, ads, img, location,profile }) {

    return (
        <div className={`sticky top-0 flex h-full w-full space-x-5 overflow-auto sc bg-[#1e1e1e] ${mainScroll ? 'overflow-hidden' : 'overflow-auto'}`} >
            <div className="sticky top-0 h-full w-[80%] flex gap-5">
                <div className="h-full w-[80%] gap-5 flex">
                    <div className="w-1/5 h-full relative">
                        <p className='rotate-[270deg] text-8xl text-red-600 absolute bottom-44 -left-[6rem] h-max w-max'>{location}</p>
                    </div>
                    <div className="w-3/5 h-full ">
                        <img src={img} className='h-full w-full object-cover object-top' alt="" />
                    </div>
                    <div className="w-1/5 h-full relative">
                        <p className='rotate-[270deg] text-3xl text-red-600 absolute top-28 -right-5 h-max w-max '>Red Light Club</p>
                    </div>
                </div>

                <div className="h-full w-[20%]  flex items-center">
                    <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ab, modi eaque alias minima, similique laboriosam aliquid quis, facere eum praesentium doloribus magni totam omnis pariatur recusandae. Accusantium, excepturi possimus.</p>
                </div>
            </div>

            <div className={`h-full w-[20%] overflow-hidden`} >
                {profile.map(ev=><Profile key={ev} {...ads.find(e => e.id === ev)} />)}
            </div>
        </div>
    )
}

const Profile = ({ profilePhoto, adsTitle, location, id }) => {
    const navigate = useNavigate()
    return (
        <div className=" h-1/3" onClick={() => navigate(`profile/${id}`)}>
            <img src={`${profilePhoto}`} className='h-3/4 w-full object-cover object-top' alt="" />
            <div className="flex flex-col justify-between w-full h-1/4 p-3">
                <p className='text-red-600 text-2xl'>{adsTitle}</p>
                <p className='text-white'>{location}</p>
            </div>
        </div>
    )
}