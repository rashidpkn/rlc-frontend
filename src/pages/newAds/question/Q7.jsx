import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addService, removeService } from '../../../redux/slice/adsSlice'

function Q7() {
    const service = [
        'analSex', 'footFetish', 'parties', 'submissive', 'BDSM', 'frenchKissing', 'reverseOral', 'squirting',
        'CIM_CumInMouth', 'GFE', 'givingRimming', 'tantricMassage', 'COB_CumOnBody', 'givingHardsports', 'rimmingReceiving',
        'teabagging', 'couples', 'receivingHardsports', 'rolePlay', 'tieAndTease', 'deepThroat', 'lapDancing', 'sexToys', 'uniforms',
        'domination', 'massage', 'spanking', 'givingWatersports', 'faceSitting', 'nuruMassage', 'strapon', 'receivingWatersports',
        'fingering', 'oralsexBlowJob', 'striptease', 'webcamSex', 'fisting', 'OWO_OralWithoutCondom']
    return (
        <div className='flex flex-wrap  justify-center items-center gap-5 h-full'>
            <div className="flex flex-wrap justify-center gap-3">
                {service.map(e => <Buttons key={e} value={e} />)}
            </div>
        </div>
    )
}

export default Q7

const Buttons = ({ value }) => {
    const { service } = useSelector(state => state.ads)
    const dispatch = useDispatch()
    const cliked = () => {
        if (service.find(e => e.name === value)) {
            dispatch(removeService(value))
        } else {
            dispatch(addService(value))
        }
    }
    return (
        <button onClick={cliked} className={` ${service.find(e => e.name === value) && 'shadow-md border-2'} border h-8  px-3 rounded-full    border-red-500  shadow-red-600`}>{value}</button>
    )
}



