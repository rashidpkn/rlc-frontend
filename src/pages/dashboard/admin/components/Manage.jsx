import { Block, LiveTv, Person, VerifiedOutlined, Visibility } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import BackendIP from '../../../../BackendIP'
import { setId } from '../../../../redux/slice/utilSlice'
import Buttons from './Buttons'

function Manage() {


    // const { username } = useSelector(state => state.user)
    const [ads, setAds] = useState([])
    const fetchData = () => {
        axios.get(`${BackendIP}/ads/get-all-ads`).then(res => {
            setAds(res.data)
        })
    }
    useEffect(() => {
        fetchData()
    }, [])

    const [selector, setSelector] = useState(1)

    return (
        <div className='h-full w-full space-y-5'>
            <h1 className='text-2xl font-bold'>Manage Advets</h1>
            <Buttons />
            <Progress />
            <h1 className='text-2xl font-bold'>Profile</h1>
            <div className="flex justify-center md:justify-start  w-full border-b gap-10  text-lg font-assistant mt-10">
                <button onClick={() => setSelector(1)} className={`${selector === 1 && 'border-b-[3px]'} border-[#6426c3]`}>All</button>
                <button onClick={() => setSelector(2)} className={`${selector === 2 && 'border-b-[3px]'} border-[#5ecfff]`}>Active</button>
                <button onClick={() => setSelector(3)} className={`${selector === 3 && 'border-b-[3px]'} border-[#5ecfff]`}>Inactive</button>
                <Link to={'/dashboard/verification'}>
                    <button onClick={() => setSelector(4)} className={`${selector === 4 && 'border-b-[3px]'} border-[#5ecfff]`}>Pending Verification</button>
                </Link>
                <button onClick={() => setSelector(5)} className={`${selector === 5 && 'border-b-[3px]'} border-[#e328af]`}>Blocked</button>
            </div>
            {
                selector === 1 && <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                    {ads.map(e => <Card id={e.id} profilePhoto={e.profilePhoto} adsTitle={e.adsTitle} view={e.view} nationality={e.nationality} fetchData={fetchData} />)}
                </div>
            }

            {
                selector === 2 && <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                    {ads.map(e => e.visibility === true && <Card id={e.id} profilePhoto={e.profilePhoto} adsTitle={e.adsTitle} view={e.view} nationality={e.nationality} fetchData={fetchData} />)}
                </div>
            }

            {
                selector === 5 && <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                    {ads.map(e => e.visibility === false && <Card id={e.id} profilePhoto={e.profilePhoto} adsTitle={e.adsTitle} view={e.view} nationality={e.nationality} fetchData={fetchData} />)}
                </div>
            }
        </div>
    )
}

export default Manage


const Progress = () => {
    return (
        <div className='w-full flex flex-wrap justify-center lg:justify-start gap-10 mt-10'>
            <div className="Actice Ads h-48 w-72 bg-white rounded-2xl">
                <Button color={'#6418C3'} icon={<LiveTv />} title={'Active Ads'} amount={80} image='/images/common/graph/graph1.png' />
                <div className="w-full h-[30%] bg-[#6418C3] rounded-b-2xl flex items-center pl-5">
                    <MonthlyProgress progress={18} />
                </div>
            </div>

            <div className="Actice Ads h-48 w-72 bg-white rounded-2xl">
                <Button color={'#5ECFFF'} icon={<Block />} title={'Inactive Ads'} amount={151} image='/images/common/graph/graph2.png' />
                <div className="w-full h-[30%] bg-[#5ECFFF] rounded-b-2xl flex items-center pl-5">
                    <MonthlyProgress progress={12} />
                </div>
            </div>

            <Link to={'/dashboard/verification'}>
                <div className="Actice Ads h-48 w-72 bg-white rounded-2xl" >
                    <Button color={'#E328AF'} icon={<VerifiedOutlined />} title={'Pending Verification'} amount={50} image='/images/common/graph/graph3.png' />
                    <div className="w-full h-[30%] bg-[#E328AF] rounded-b-2xl flex items-center pl-5">
                        <MonthlyProgress progress={15} />
                    </div>
                </div>
            </Link>

            <Link to={'/dashboard/customers'}>
                <div className="Actice Ads h-48 w-72 bg-white rounded-2xl">
                    <Button color={'#5ECFFF'} icon={<Person />} title={'Customers'} amount={151} image='/images/common/graph/graph2.png' />
                    <div className="w-full h-[30%] bg-[#5ECFFF] rounded-b-2xl flex items-center pl-5">
                        <MonthlyProgress progress={12} />
                    </div>
                </div>
            </Link>

        </div>
    )
}


function MonthlyProgress({ progress }) {
    return (
        <>
            <div className="">
                <img src="/images/common/up.png" className='w-5 h-5' alt="" />
            </div>
            <div className="pl-5 text-white">
                <span> + </span>
                <span className='font-semibold text-lg'> {progress} % </span>
                <span>than last</span>
                <br />
                <span>Month</span>
            </div>
        </>
    )
}


function Button({ color, icon, title, amount, image }) {
    return (
        <div className="w-full h-[70%] rounded-t-2xl flex p-6">
            <div className="w-[60%]  flex flex-col gap-5">
                <div className="Active Ads flex items-center gap-5">
                    {icon}
                    <span>{title}</span>
                </div>
                <div className="">
                    <span className='font-bold text-2xl'>{amount}</span>
                </div>
            </div>
            <div className="w-[40%] flex justify-center items-center">
                <img src={image} className='w-full max-h-full' alt="" />
            </div>
        </div>
    )
}


const Card = ({ profilePhoto, adsTitle, view, nationality, fetchData, id }) => {
    const dispatch = useDispatch()
    return (
        <div className={` card h-96 w-64 flex flex-col  border items-center justify-center  relative z-40`}>

            <div className={`h-[40%] w-[60%] rounded-full border absolute top-2 `}>
                <img src={`${BackendIP}${profilePhoto}`} alt="" className='h-full w-full rounded-full object-cover' />
            </div>

            <div className={`h-[15%] w-full text-center top-48 absolute flex flex-col `}>
                <span className='text-lg font-medium '>{adsTitle}</span>
                <span className='text-sm'>{nationality}</span>
            </div>

            <div className={`h-[15%] w-full text-center top-64 absolute `}>
                <span className='text-lg font-medium flex justify-center items-center gap-2 text-[#75848d]'>
                    <Visibility />
                    {view}
                </span>
            </div>

            <div className={`h-[15%] w-full absolute bottom-5 flex justify-around items-center `}>
                <Link to={`/profile/${id}`}>  <button className='border-2 border-[#6426c3] rounded-2xl h-10 w-16 justify-center items-center flex'>View</button></Link>
                <Link to={'/dashboard/edit'}>
                    <button className='border-2 rounded-2xl h-10 w-16 border-[#5ECFFF]' onClick={() => dispatch(setId(id))}>Edit</button>
                </Link>
                <button className='border-2 rounded-2xl h-10 w-16 border-[#E328AF]' onClick={() => {
                    axios.post(`${BackendIP}/ads/delete`, { adsTitle }).then(res => {
                        window.alert(res.data.reason)
                        console.log(res.data)
                        fetchData()
                    })
                }}>Delete</button>
            </div>
        </div>
    )
}