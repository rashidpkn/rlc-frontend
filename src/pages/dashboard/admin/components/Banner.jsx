import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BackendIP from '../../../../BackendIP'
import Buttons from './Buttons'

function Banner() {
    const [banner, setBanner] = useState([])
    const fetchData=()=>{
        axios.get(`${BackendIP}/banner`).then(res=>{
            setBanner(res.data)
        })
    }

    useEffect(() => {
      fetchData()
    }, [])
    

    return (
        <div className='h-full w-full space-y-5'>
            <h1 className='text-2xl font-bold'>Banner</h1>
            <Buttons />
            <table className='w-full'>
                <thead className='w-full'>
                    <tr className='border w-full'>
                        <th className='w-[10%] border'>SL NO</th>
                        <th className='w-[20%] border'>Username</th>
                        <th className='w-[40%] border'>Url</th>
                        <th className='w-[10%] border'>Status</th>
                        <th className='w-[10%] border'>Approve</th>
                        <th className='w-[10%] border'>Refuse</th>
                    </tr>
                </thead>
                <tbody>
                    {banner.map(e=><tr className='hover:bg-gray-300 text-center border'>
                        <td className='border py-5'>{e.id}</td>
                        <td className='border py-5'>{e.username}</td>
                        <td className='border py-5'>{e.url}</td>
                        <td className='border py-5'>{e.status === null ? 'Pending' : (e.status===true ? 'Approve' : 'Refuse') }</td>
                        <td className='border py-5'>
                            <button className='border bg-red-500 px-3 py-2 rounded-lg text-white' onClick={()=>{
                                if(e.status === null){

                                    axios.post(`${BackendIP}/banner/approve`,{id:e.id,username:e.username})
                                    fetchData()
                                    window.alert('Banner credit is approved')
                                }else{
                                    window.alert("Already done") 
                                }
                            }}>Approve</button>
                        </td>
                        <td className='border py-5'>
                            <button className='border bg-red-500 px-3 py-2 rounded-lg text-white' onClick={()=>{
                                if(e.status === null){
                                    axios.post(`${BackendIP}/banner/refuse`,{id:e.id})
                                    fetchData()
                                    window.alert('Banner credit is refuced')
                                }else{
                                    window.alert("Already done") 
                                }
                            }}
                            >Refuse</button>
                        </td>
                    </tr>)}
                    
                </tbody>
            </table>


        </div>
    )
}

export default Banner