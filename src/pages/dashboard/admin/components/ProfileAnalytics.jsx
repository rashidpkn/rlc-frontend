import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BackendIP from '../../../../BackendIP'
import Graph from '../../components/Graph'
import Buttons from './Buttons'

function ProfileAnalytics() {
    const [date, setDate] = useState([])
    const [view, setView] = useState([])
    const [id, setId] = useState([])
    const [ads, setAds] = useState([])

    const fetchData = () => {
        axios.get(`${BackendIP}/ads/get-all-ads`).then(res => {
            setAds(res.data)
            setId(res.data[0].id)
        })
    }
    useEffect(() => {
        fetchData()
    }, [])






    useEffect(() => {

        axios.get(`${BackendIP}/analytics/profile`, { params: { id } }).then(res => {
            //eslint-disable-next-line
            res.data.map(e => {
                setDate([...date, e.date])
                setView([...view, e.view])
            })
        })
        //eslint-disable-next-line
    }, [id])

    return (
        <div className='h-full w-full space-y-5'>
            <h1 className='text-2xl font-bold'>Ads Analatics</h1>
            <Buttons />
            <div className="w-full">
                <select onChange={e => {
                    setId(e.target.value);
                    setDate([])
                    setView([])
                }}>
                    <option value="">Select any Ads</option>
                    {ads.map(e => <option value={e.id}>{e.adsTitle}</option>)}
                </select>
                {
                    id && <Graph date={date} view={view} />
                }

            </div>
        </div>
    )
}

export default ProfileAnalytics