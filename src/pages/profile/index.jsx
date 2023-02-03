import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import BackendIP from '../../BackendIP'

function Profile() {
    const { id } = useParams()
    const [ads, setAds] = useState({})
    const [photo, setPhoto] = useState('')
    useEffect(() => {
        axios.get(`${BackendIP}/ads/get-by-id`, { params: { id: Number(id) } }).then(res => {
            setAds(res.data);
            setPhoto(`${BackendIP}${res.data.profilePhoto}`)
            // services.filter(e => !ads.service.map(ev => ev.name).includes(e)).map(e => console.log(e))
        }
        )
    }, [id])


    const services = [
        'analSex', 'footFetish', 'parties', 'submissive', 'BDSM', 'frenchKissing', 'reverseOral', 'squirting',
        'CIM_CumInMouth', 'GFE', 'givingRimming', 'tantricMassage', 'COB_CumOnBody', 'givingHardsports', 'rimmingReceiving',
        'teabagging', 'couples', 'receivingHardsports', 'rolePlay', 'tieAndTease', 'deepThroat', 'lapDancing', 'sexToys', 'uniforms',
        'domination', 'massage', 'spanking', 'givingWatersports', 'faceSitting', 'nuruMassage', 'strapon', 'receivingWatersports',
        'fingering', 'oralsexBlowJob', 'striptease', 'webcamSex', 'fisting', 'OWO_OralWithoutCondom']

    return (
        <div className='w-full px-[5%]'
            style={{ background: 'linear-gradient(rgb(161, 140, 209) 0%, rgb(251, 194, 235) 100%) 0% 0% no-repeat padding-box padding-box transparent' }}>
            <div className="h-36 w-full bg-white"></div>

            <div class="h-12 max-w-full bg-[#513968] px-[18px] flex justify-between items-center text-white text-sm mx-auto">
                <Link to={`/profile/${id - 1}`}>
                    <button class="w-[81px] h-[29px] rounded-2xl bg-[#946FB7] hover:w-[90px] hover:h-[35px] hover:text-lg duration-200">Previous</button>
                </Link>
                <div class="flex gap-3 h-full items-center">
                    <img class="cursor-pointer w-8 h-8 hover:w-10 hover:h-10 duration-200" src="/icon/mail.png" alt="contact" />
                    <img class="cursor-pointer w-8 h-8 hover:w-10 hover:h-10 duration-200" src="/icon/call.png" alt="contact" />
                    <img class="cursor-pointer w-8 h-8 hover:w-10 hover:h-10 duration-200" src="/icon/tele.png" alt="contact" />
                    <img class="cursor-pointer w-8 h-8 hover:w-10 hover:h-10 duration-200" src="/icon/whts.png" alt="contact" />
                </div>
                <Link to={`/profile/${Number(id) + 1}`}>
                    <button class="w-[81px] h-[29px] rounded-2xl bg-[#946FB7] hover:w-[90px] hover:h-[35px] hover:text-lg duration-200">Next</button>
                </Link>
            </div>

            <div className="w-full lg:hidden bg-white p-2 ">
                <div className="w-full flex justify-between items-center h-14">
                    <div className="">
                        <h2 className='text-2xl font-medium'>{ads.adsTitle}</h2>
                        <p>Last seen Online 31/01/2023</p>
                    </div>

                    <div className="flex gap-5 justify-center items-center border rounded-full p-3">
                        <h2>Natiopnality :</h2>
                        <h2>{ads.nationality}</h2>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-center  h-full">
                <div className="w-full lg:w-1/2 lg:h-[800px]`">
                    <img className='w-full h-[500px] lg:h-[750px] object-cover' src={photo} alt="" />
                    <div className="flex justify-center items-center gap-5 relative bottom-12">
                        <img className='w-24 h-24 rounded-md' onClick={() => setPhoto(`${BackendIP}${ads.profilePhoto}`)} src={`${BackendIP}${ads.profilePhoto}`} alt="" />
                        {

                            ads.gallery?.map(e => <img onClick={() => setPhoto(`${BackendIP}${e}`)} className='w-24 h-24 rounded-md' src={`${BackendIP}${e}`} alt={e.adsTitle} />)
                        }

                    </div>
                </div>
                <div className=" lg:w-1/2 lg:h-auto bg-white p-2 lg:p-5 space-y-2 ">
                    <div className="hidden lg:flex w-full  justify-between items-center h-14">
                        <div className="">
                            <h2 className='text-2xl font-medium'>{ads.adsTitle}</h2>
                            <p>Last seen Online 31/01/2023</p>
                        </div>

                        <div className="flex gap-5 justify-center items-center border rounded-full p-3">
                            <h2>Natiopnality :</h2>
                            <h2>{ads.nationality}</h2>
                        </div>
                    </div>

                    <div className="">
                        <div className="w-full flex bg-[#513968] py-5 text-white rounded-t-2xl">

                            <div className="w-[40%]">I Do Provide</div>
                            <div className="w-[60%]">I Don't Provide</div>
                        </div>

                        <div className="w-full bg-[#D2A9DF] flex h-[250px] overflow-y-scroll  rounded-b-2xl ">
                            <div className="w-[40%] space-y-2  p-5">
                                {ads.service?.map(e => <div className='flex justify-between font-light'> <p>{e.name}</p> <p>{e.charge}</p> </div>)}
                            </div>
                            <div className="w-[60%]  p-5 flex flex-wrap gap-y-3">
                                {
                                    services?.filter(e => !ads.service?.map(ev => ev.name).includes(e))?.map(e => <h2 className='w-1/2 font-light'>{e}</h2>)
                                }
                            </div>
                        </div>
                    </div>

                    <div className="mt-3 flex gap-[10px] flex-col lg:flex-row lg:gap-[30px] justify-center items-center">
                        <div className="w-[227px]">
                            <span className='text-xl text-[#010315] font-medium'>More About Me</span>
                            <Appearance age={ads.age} height={ads.height} weight={ads.weight} hair={ads.hair} />
                        </div>
                        <div className="flex  gap-[30px] ">

                            <div className="w-[141px] ">
                                <span className='text-xl text-[#010315] font-medium'>Outcalls </span>
                                <OutCall currencyType={ads.currencyType} outCall={ads.outCall} />
                            </div>
                            <div className="w-[141px]">
                                <span className='text-xl text-[#010315] font-medium'>Incalls </span>
                                <InCall currencyType={ads.currencyType} inCall={ads.inCall} />
                            </div>

                        </div>
                    </div>

                    <div class="mt-3 w-full flex flex-col items-center lg:block justify-center">
                        <span class="text-xl text-[#010315] font-medium">I meet with</span>
                        <div class="mt-[10px] flex gap-[35px]">
                            <img class="h-[65px]" src="/image/profile/icon/men.png" alt="" />
                            <img class="h-[65px]" src="/image/profile/icon/women.png" alt="" />
                            <img class="h-[65px]" src="/image/profile/icon/couples-not.png" alt="" />
                            <img class="h-[65px]" src="/image/profile/icon/group-not.png" alt="" />
                        </div>
                    </div>

                    <p className='mt-3 w-full h-28 overflow-x-auto  text-sm cursor-move text-[#010315] font-medium sb'>{ads.intro}</p>

                </div>
            </div>

        </div >
    )
}

export default Profile



function Appearance({ age, height, weight, hair }) {
    return (
        <div className="w-full mt-[10px] flex flex-col gap-[2px] text-base text-white">
            <div className="h-[30px] w-full flex rounded-t-lg overflow-hidden">
                <div className="h-full w-[136px] bg-[#513968] flex items-center pl-[20px]">Age:</div>
                <div className="h-full w-[91px] bg-[#946FB7] flex items-center pl-[13px]">{age}</div>
            </div>
            <div className="h-[30px] w-full flex ">
                <div className="h-full w-[136px] bg-[#513968] flex items-center pl-[20px]">Height:</div>
                <div className="h-full w-[91px] bg-[#946FB7] flex items-center pl-[13px]">{height}</div>
            </div>
            <div className="h-[30px] w-full flex ">
                <div className="h-full w-[136px] bg-[#513968] flex items-center pl-[20px]">Weight:</div>
                <div className="h-full w-[91px] bg-[#946FB7] flex items-center pl-[13px]">{weight}</div>
            </div>
            <div className="h-[30px] w-full flex rounded-b-lg overflow-hidden">
                <div className="h-full w-[136px] bg-[#513968] flex items-center pl-[20px]">Hair:</div>
                <div className="h-full w-[91px] bg-[#946FB7] flex items-center pl-[13px]">{hair}</div>
            </div>
        </div>
    )
}



function InCall({ currencyType, inCall }) {
    return (
        <div className="w-[150px]  mt-[10px] flex flex-col gap-[2px] text-base text-white">
            <div className="h-[30px] w-full flex rounded-t-lg overflow-hidden">
                <div className="h-full w-1/2 bg-[#513968] flex items-center justify-center">1 hr</div>
                <div className="h-full w-1/2 bg-[#946FB7] flex items-center justify-center">{inCall?.oneHourIn} {currencyType}</div>
            </div>
            <div className="h-[30px] w-full flex">
                <div className="h-full w-1/2 bg-[#513968] flex items-center justify-center">2 hr</div>
                <div className="h-full w-1/2 bg-[#946FB7] flex items-center justify-center">{inCall?.oneHourIn} {currencyType}</div>
            </div>

            <div className="h-[30px] w-full flex rounded-b-lg overflow-hidden">
                <div className="h-full w-1/2 bg-[#513968] flex items-center justify-center">Full Night</div>
                <div className="h-full w-1/2 bg-[#946FB7] flex items-center justify-center">{inCall?.oneHourIn} {currencyType}</div>
            </div>
        </div>
    )
}


function OutCall({ currencyType, outCall }) {
    return (
        <div className="w-[150px] mt-[10px] flex flex-col gap-[2px] text-base text-white">
            <div className="h-[30px] w-full flex rounded-t-lg overflow-hidden">
                <div className="h-full w-1/2 bg-[#513968] flex items-center justify-center">1 hr</div>
                <div className="h-full w-1/2 bg-[#946FB7] flex items-center justify-center">{outCall?.oneHourOut} {currencyType}</div>
            </div>
            <div className="h-[30px] w-full flex">
                <div className="h-full w-1/2 bg-[#513968] flex items-center justify-center">2 hr</div>
                <div className="h-full w-1/2 bg-[#946FB7] flex items-center justify-center">{outCall?.twoHourOut} {currencyType}</div>
            </div>

            <div className="h-[30px] w-full flex rounded-b-lg overflow-hidden">
                <div className="h-full w-1/2 bg-[#513968] flex items-center justify-center">Full Night</div>
                <div className="h-full w-1/2 bg-[#946FB7] flex items-center justify-center">{outCall?.oneHourOut} {currencyType}</div>
            </div>


        </div>
    )
}