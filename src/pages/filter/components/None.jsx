import { useNavigate } from "react-router-dom"
// import BackendIP from "../../../BackendIP"

const None = ({ id, profilePhoto, adsTitle, introduction, age }) => {
    const navigate = useNavigate()
    return (
        <div className='w-[164px] h-[300px] rounded-xl overflow-hidden justify-self-start cursor-pointer' >

            <div className="relative">
                <svg className="absolute right-3 top-3 fill-white hover:fill-red-600 stroke-2" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m12 19.475-.7-.625q-2.425-2.225-4-3.8-1.575-1.575-2.5-2.763-.925-1.187-1.287-2.162-.363-.975-.363-1.95 0-1.875 1.263-3.138Q5.675 3.775 7.55 3.775q1.3 0 2.438.675 1.137.675 2.012 1.975.875-1.3 2.012-1.975 1.138-.675 2.438-.675 1.875 0 3.137 1.262Q20.85 6.3 20.85 8.15q0 1-.362 1.975-.363.975-1.276 2.162-.912 1.188-2.5 2.775-1.587 1.588-4.012 3.788Zm0-1.225q2.375-2.175 3.9-3.7 1.525-1.525 2.425-2.663.9-1.137 1.25-2 .35-.862.35-1.712 0-1.5-1-2.487-1-.988-2.475-.988-1.175 0-2.188.675-1.012.675-1.812 2.075h-.9q-.825-1.4-1.825-2.075-1-.675-2.175-.675-1.475 0-2.475.988-1 .987-1 2.487 0 .85.35 1.725.35.875 1.238 2 .887 1.125 2.425 2.65 1.537 1.525 3.912 3.7Zm0-6.8Z" /></svg>
                <img src={`${profilePhoto}`} alt={adsTitle} className='w-full h-[260px] object-cover' onClick={() => navigate(`/profile/${id}`)} />
            </div>

            <div className="name  flex justify-between items-center h-[40px] bg-[#17191E] text-white" onClick={() => navigate(`/profile/${id}`)}>
                <span className='capitalize font-medium'>{adsTitle}</span>
                <span className='font-medium'>{age}Y</span>
            </div>

        </div>
    )
}

export default None