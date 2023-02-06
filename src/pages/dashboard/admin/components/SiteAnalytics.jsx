import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BackendIP from '../../../../BackendIP'
import Graph from '../../components/Graph'
import Buttons from './Buttons'

function SiteAnalytics() {
    const [date, setDate] = useState([])
    const [view, setView] = useState([])
    useEffect(() => {
        axios.get(`${BackendIP}/analytics`).then(res => {
            //eslint-disable-next-line
            res.data.map(e => {
                setDate([...date, e.date])
                setView([...view, e.view])
            })
        })
        //eslint-disable-next-line
    }, [])
    return (
        <div className='h-full w-full space-y-5'>
            <h1 className='text-2xl font-bold'>Site Analytics</h1>
            <Buttons />
            <Graph date={date} view={view} />
        </div>
    )
}

export default SiteAnalytics