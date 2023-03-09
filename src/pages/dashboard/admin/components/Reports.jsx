import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BackendIP from '../../../../BackendIP'
import Buttons from './Buttons'

function Reports() {
    const [report, setReport] = useState([])
    const fetchData = () => {
        axios.get(`${BackendIP}/report`).then(res => {
            setReport(res.data)
        })
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='h-full w-full space-y-5'>
            <h1 className='text-2xl font-bold'>Reported Issues</h1>
            <Buttons />
            <table className='w-full'>
                <thead className='w-full'>
                    <tr className='border w-full'>
                        <th className='w-[10%] border'>SL NO</th>
                        <th className='w-[20%] border'>Ads Title</th>
                        <th className='w-[20%] border'>Reason</th>
                        <th className='w-[20%] border'>Reported User</th>
                        <th className='w-[15%] border'>Delete report</th>
                        <th className='w-[15%] border'>Delete ads</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        report.map(e => <tr className='hover:bg-gray-300 text-center border'>
                            <td className='border py-5'>{e.id}</td>
                            <td className='border py-5'>{e.adsTitle}</td>
                            <td className='border py-5'>{e.reason}</td>
                            <td className='border py-5'>{e.username}</td>
                            <td className='border py-5'>
                                <button className='border bg-red-500 px-3 py-2 rounded-lg text-white' onClick={()=>{
                                    axios.post(`${BackendIP}/report/delete-report`,{id:e.id})
                                    window.alert('This report is Deleted')
                                    fetchData()
                                }}>Delete report</button>
                            </td>
                            <td className='border py-5'>
                                <button className='border bg-red-500 px-3 py-2 rounded-lg text-white' onClick={()=>{
                                    axios.post(`${BackendIP}/report/delete-ads`,{id:e.id,adsTitle:e.adsTitle})
                                    window.alert('This ads is Deleted')
                                    fetchData()
                                }}>Delete ads</button>
                            </td>
                        </tr>)
                    }
                    
                </tbody>
            </table>
        </div>
    )
}

export default Reports