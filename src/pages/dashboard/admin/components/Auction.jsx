import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BackendIP from '../../../../BackendIP'
import Buttons from './Buttons'

function Auction() {

    const [bidPosition, setBidPosition] = useState([])
    const fetchData = async () => {
        const data = (await axios.get(`${BackendIP}/bid`)).data
        setBidPosition(data)
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='h-full w-full space-y-5'>
            <h1 className='text-2xl font-bold'>Auction In Progress</h1>
            <Buttons />
            <button className='border bg-red-500 px-3 py-2 rounded-lg text-white' onClick={
                ()=>{
                    axios.post(`${BackendIP}/bid/renew`).then(res=>{
                        window.alert("All ads are renewed")
                        fetchData()
                    })
                }
            }>Renew all Bid</button>
            <h1 className='text-2xl font-bold'>Platinum</h1>
            <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                {
                    bidPosition.map(e => e.tier === 'platinum' && <Card  e={e} key={e.id} {...e} plan={'Platinum'} fetchData={fetchData}  />)
                }
            </div>
            <h1 className='text-2xl font-bold'>Gold</h1>
            <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                {
                    bidPosition.map(e => e.tier === 'gold' && <Card  e={e} key={e.id} {...e} plan={'Gold'} fetchData={fetchData}   />)
                }
            </div>
            <h1 className='text-2xl font-bold'>Silver</h1>
            <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                {
                    bidPosition.map(e => e.tier === 'silver' && <Card  e={e} key={e.id} {...e} plan={'Silver'} fetchData={fetchData}   />)
                }
            </div>
            

        </div>
    )
}

export default Auction



const Card = ({ plan, position, status,largestBidAmount,tier,fetchData,e }) => {
    
    return (
        <div class={`card h-80 w-56 border flex flex-col justify-center items-center gap-5 p-5 text-center ${status === 'close' && 'border-red-500'}`} >
            <span class="text-2xl font-medium">{plan}</span>
            <span class="text-xl font-medium">$ {largestBidAmount}</span>
            <span>Bid on {position} Position is Started</span>
            {status === 'open' ? 
            <button className='border bg-red-500 px-3 py-2 rounded-lg text-white' onClick={()=>{
                axios.post(`${BackendIP}/bid/close`,{...e}).then(res=>{
                    window.alert("Biding is closed")
                    fetchData()
                }).catch(err=>{
                    window.alert('Network error')
                    console.log(err.message)
                })
            }}>Close Bid</button> : 
            <button className='border bg-red-500 px-3 py-2 rounded-lg text-white' onClick={()=>{
                axios.post(`${BackendIP}/bid`,{position,tier}).then(res=>{
                    window.alert("Biding is started")
                    fetchData()
                }).catch(err=>{
                    window.alert('Network error')
                    console.log(err.message)
                })}}>Open Bid</button>}
        </div>
    )
}