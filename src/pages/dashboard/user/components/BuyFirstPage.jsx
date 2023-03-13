import { Add, Close, Remove } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import BackendIP from '../../../../BackendIP'
import Buttons from './Buttons'

function BuyFirstPage() {
    const [bidPosition, setBidPosition] = useState([])
    const fetchData = async () => {
        const data = (await axios.get(`${BackendIP}/bid`)).data
        setBidPosition(data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    const [showAuction, setShowAuction] = useState(false)
    const [selectedAuction, setSelectedAuction] = useState({})
    return (
        <div className='h-full w-full space-y-5'>
            <h1 className='text-2xl font-bold'>Buy First Page Position</h1>
            <Buttons />
            <h1 className='text-2xl font-bold'>Platinum</h1>
            <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                {
                    bidPosition.map(e => e.tier === 'platinum' && <Card setSelectedAuction={setSelectedAuction} e={e} key={e.id} {...e} plan={'Platinum'}  setShowAuction={setShowAuction} />)
                }
            </div>
            <h1 className='text-2xl font-bold'>Gold</h1>
            <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                {
                    bidPosition.map(e => e.tier === 'gold' && <Card setSelectedAuction={setSelectedAuction} e={e} key={e.id} {...e} plan={'Gold'}  setShowAuction={setShowAuction} />)
                }
            </div>
            <h1 className='text-2xl font-bold'>Silver</h1>
            <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                {
                    bidPosition.map(e => e.tier === 'silver' && <Card setSelectedAuction={setSelectedAuction} e={e} key={e.id} {...e} plan={'Silver'}  setShowAuction={setShowAuction} />)
                }
            </div>
            {
                showAuction && <Auction setShowAuction={setShowAuction} selectedAuction={selectedAuction} />
            }
            
        </div>
    )
}

export default BuyFirstPage


const Card = ({ plan, position, status,setShowAuction,e,setSelectedAuction,baseAmount }) => {

    return (
        <div class={`card h-80 w-56 border flex flex-col justify-center items-center gap-5 p-5 text-center ${status === 'close' && 'border-red-500'}`} onClick={()=>{
            if(status==='open')  {
                setShowAuction(true)
                setSelectedAuction(e)

            }else{
                window.alert("Auction is not available in this position")
            }
            }}>
            <span class="text-2xl font-medium">{plan}</span>
            <span class="text-xl font-medium">$ {baseAmount}</span>
            <span>Bid on {position} Position is Started</span>
            {status === 'open' ? <span>Please Click for participation</span> : <span>This position is not available</span>}
        </div>
    )
}


const Auction = ({setShowAuction,selectedAuction}) => {
const {username} = useSelector(state=>state.user)
    const [ads, setAds] = useState([])
    const fetchData = () => {
        axios.get(`${BackendIP}/ads/get-user-ads`,{params:{username}}).then(res => {
            setAds(res.data)
        })
    }
    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])
    const [selectAds, setSelectAds] = useState('')
    const [amount, setAmount] = useState(selectedAuction.baseAmount)

    return (
        <div className="fixed h-screen w-screen bg-black/30 top-0 left-0 flex justify-center items-center">
            <div className=" w-96 bg-white rounded-md p-5 space-y-10">
                <div className="h-20 flex justify-between items-center">
                    <div className=""></div>
                    <p>Auction</p>
                    <Close onClick={()=>setShowAuction(false)} />
                </div>
                <select className='w-full h-12 border outline-none' onChange={e=>{setSelectAds(e.target.value)}}>
                    <option value="">Select ads</option>
                    {ads.map(e=><option value={e.adsTitle}>{e.adsTitle}</option>)}
                </select>
                <div className="flex justify-between items-center">
                    <div className="h-20 w-20 border flex justify-center items-center" onClick={()=>amount >selectedAuction.baseAmount &&  setAmount(amount-10)}><Remove/></div>
                    <div className="h-20 w-20 border flex justify-center items-center">{amount}</div>
                    <div className="h-20 w-20 border flex justify-center items-center" onClick={()=>setAmount(amount+10)}><Add/></div>
                </div>
                <button className='border bg-red-500 px-3 py-2 rounded-lg text-white'
                onClick={()=>{
                    if(selectAds){
                        axios.post(`${BackendIP}/bid/auction`,{amount,adsTitle:selectAds,...selectedAuction})
                        window.alert("Done")
                        setShowAuction(false)
                    }else{
                        window.alert("Select an ads")
                    }
                }}
                >Submit</button>
            </div>
        </div>
    )
}