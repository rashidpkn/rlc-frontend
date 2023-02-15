import { NavigateBefore, NavigateNext } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BackendIP from '../../../BackendIP'

function Screen2() {
    const [count, setCount] = useState(0)
    const [ads, setAds] = useState([])
    const fetchData = () => {
        axios.get(`${BackendIP}/ads/get-all-ads`).then(res => {
            setAds(res.data.sort((a, b) => a.id - b.id))
        })
    }
    useEffect(() => {
        fetchData()
    }, [])

    const [orders, setOrders] = useState({
        order1: 1,
        order2: 2,
        order3: 3,
        order4: 4,
        order5: 5,
        order6: 6,
        
    })
    

    return (
        <div className='w-full overflow-hidden bg-[#1E1E1E] p-5 space-y-5 ' >
            <div
                // style={ { transform: `translate(-${count * 370}px,0px)` }} 
                style={ { transform: `translate(-${count * 25}vw,0px)` }} 
                className={`flex items-center text-white  gap-5  duration-500 h-[600px]`}>
                <div className="w-1/4 flex-shrink-0 space-y-5">
                    <div className='text-3xl cursor-pointer '>Lorem ipsum dolor sit amet consectetur. Elit dictumst velit mattis nec sed lacus at.</div>
                    <p className='text-justify'>Lorem ipsum dolor sit amet consectetur. Vulputate arcu ornare urna nisi adipiscing penatibus ultrices duis. Magnis eget mauris imperdiet a scelerisque lacus velit cursus. Ut morbi dui diam velit sed elit.</p>
                </div>
                <Profile {...ads.find(e => e.id === 2)} order={orders.order1} />
                <Profile {...ads.find(e => e.id === 3)} order={orders.order2} />
                <Profile {...ads.find(e => e.id === 4)} order={orders.order3} />
                <Profile {...ads.find(e => e.id === 5)} order={orders.order4} />
                <Profile {...ads.find(e => e.id === 6)} order={orders.order5} />
                <Profile {...ads.find(e => e.id === 7)} order={orders.order6} />
                {/* {ads.map(e=><div className="w-[230px] h-[270px] flex-shrink-0 relative">
                    <img src={`${e.profilePhoto}`} className='h-full object-cover rounded-lg w-full  ' alt="" />
                    <div className="absolute bottom-2 left-2">
                        <p className='text-lg'>{e.adsTitle}</p>
                        <p>{e.location}</p>
                    </div>
                </div>)} */}

            </div>
            <div className="float-right  flex justify-center items-center gap-5 mr-10 text-white">
                <button className='rounded-full p-1 border' 
                // onClick={() => count && setCount(count - 1)}
                onClick={()=>{
                    count && setCount(count - 1)

                    orders.order1 !==1 && setOrders({
                        ...orders,
                        order1:orders.order1 === 6 ? 1 : orders.order1 + 1,
                        order2:orders.order2 === 6 ? 1 : orders.order2 + 1,
                        order3:orders.order3 === 6 ? 1 : orders.order3 + 1,
                        order4:orders.order4 === 6 ? 1 : orders.order4 + 1,
                        order5:orders.order5 === 6 ? 1 : orders.order5 + 1,
                        order6:orders.order6 === 6 ? 1 : orders.order6 + 1,
                    })
                }}
                >
                    <NavigateBefore fontSize='large' />
                </button>
                <button className='rounded-full p-1 border' 
                // onClick={() => ads.length + 1 !== count && setCount(count + 1)}
                onClick={()=>{
                    6 !== count &&(count ===0 ? setCount(count + 2) : setCount(count + 1))
                    orders.order6 !== 1 && setOrders({
                        ...orders,
                        order1:orders.order1 === 1 ? 6 : orders.order1 - 1,
                        order2:orders.order2 === 1 ? 6 : orders.order2 - 1,
                        order3:orders.order3 === 1 ? 6 : orders.order3 - 1,
                        order4:orders.order4 === 1 ? 6 : orders.order4 - 1,
                        order5:orders.order5 === 1 ? 6 : orders.order5 - 1,
                        order6:orders.order6 === 1 ? 6 : orders.order6 - 1,
                    })
                }}
                >         <NavigateNext fontSize='large' /></button>
            </div>
        </div>
    )
}

export default Screen2


const Profile = ({ id, profilePhoto, adsTitle, location, order }) => {
    return (
        <div className="w-1/4  flex-shrink-0 relative duration-500 overflow-hidden rounded-lg" 
        style={order===1 ? {height:'500px'} : {height:'400px'}}
        >
            <Link to={`/profile/${id}`}>
                <img src={`${profilePhoto}`} className='h-full object-cover  w-full hover:scale-125 duration-500 hover:object-top' alt="" />
                <div className="absolute bottom-2 left-2">
                    <p className='text-lg'>{adsTitle}</p>
                    <p>{location}</p>
                </div>
            </Link>
        </div>
    )
}