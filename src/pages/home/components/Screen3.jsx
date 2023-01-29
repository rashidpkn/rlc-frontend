import { useState } from "react"
import { Link } from "react-router-dom"
const Screen3 = () => {
    const [percentage, setPercentage] = useState(0)
    const scrollHandler = (e) => {
        const element = e.target
        const totalHeight = element.scrollHeight
        const currentHeight = element.scrollTop + element.clientHeight
        const percentage = Math.floor(currentHeight / totalHeight * 100)
        setPercentage(percentage)
    }
    return (
        <>
            <div className="hidden lg:block h-[1080px] overflow-y-scroll sc bg-[#010315]" onScroll={scrollHandler}>
                <div className="h-[2000px] relative">
                    <div className="h-[1080px] sticky top-0  flex">
                        <Profile percentage={percentage} />
                        <div className="right w-1/2 h-full">
                            <Plans percentage={percentage} />
                            <div className="h-1/2 w-full   text-white lg:px-32 gap-10 ">
                                <h1 className="text-center">Find the best advertiser and have a good time</h1>
                                <p className="mt-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique odio deserunt quas molestiae reprehenderit dolores voluptatum dolorem voluptas, eveniet, sint laudantium provident incidunt nam, nulla aliquid ullam. Vel, dolores explicabo?</p>
                                <Link to={'/filter'}>
                                    <button className='w-[204px] h-[46px] bg-[#06175D] rounded-3xl float-right mt-10'>View More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block lg:hidden bg-[#010315] py-10 space-y-10">
                <div className="h-[600px] overflow-y-scroll sc" onScroll={scrollHandler}>
                    <div className="relative h-[1200px]">
                        <div className="sticky top-0 h-[600px] flex justify-center items-center">

                            <div className="h-1/2 w-full flex justify-center items-center">
                                <div className="w-[409px] h-[409px] relative flex justify-center items-center">
                                    <div className="platinum absolute top-0 right-0 z-50 w-[105px] h-[105px] flex justify-center items-center">
                                        <Link to={'/filter'}>
                                            <div className={`duration-200 ${percentage < 69 ? "w-[105px] h-[105px] rounded-full bg-blue-800" : 'w-[50px] h-[50px] rounded-full bg-blue-800'}  flex justify-center items-center`}>
                                                <h2 className="text-white">Platinum</h2>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="gold absolute bottom-0 right-0 z-50 w-[105px] h-[105px] flex justify-center items-center">
                                        <Link to={'/filter'}>

                                            <div className={`duration-200 ${percentage >= 69 && percentage <= 84 ? "w-[105px] h-[105px] rounded-full bg-[#E5AF2D]" : 'w-[50px] h-[50px] rounded-full bg-[#E5AF2D]'} flex justify-center items-center`}>
                                                <h2 className="text-white">Gold</h2>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="silver absolute top-0 left-0 z-50 w-[105px] h-[105px] flex justify-center items-center">
                                        <Link to={'/filter'}>
                                            <div className={`duration-200 ${percentage > 84 ? "w-[105px] h-[105px] rounded-full bg-white" : 'w-[50px] h-[50px] rounded-full bg-white'} flex justify-center items-center`}>
                                                <h2 className="">Silver</h2>
                                            </div>
                                        </Link>
                                    </div>

                                    <img src="/image/home/rounds.png" className="w-full h-full absolute" alt="" />
                                    <h2 className="text-3xl font-semibold text-white">Search by Plans</h2>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="w-full lg:w-1/2 flex gap-1 md:gap-10 justify-center items-center">
                        <div className="flex flex-col gap-1 md:gap-10 justify-center">

                            <Link to={'/profile/49'}>
                                <img src="/image/home/profile/1.png" className='w-[239px] h-[391px] ' alt="" />
                            </Link>

                            <Link to={'/profile/196'}>
                                <img src="/image/home/profile/2.png" className='w-[239px] h-[391px] ' alt="" />
                            </Link>

                        </div>

                        <div className="flex flex-col gap-1 md:gap-10 lg:mt-10 justify-center">

                            <Link to={'/profile/6'}>
                                <img src="/image/home/profile/3.png" className='w-[239px] h-[391px] ' alt="" />
                            </Link>

                            <Link to={'/profile/222'}>
                                <img src="/image/home/profile/4.png" className='w-[239px] h-[391px] ' alt="" />
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Screen3


const Plans = ({ percentage }) => {
    return (
        <div className="h-1/2 w-full flex justify-center items-center">
            <div className="w-[409px] h-[409px] relative flex justify-center items-center">
                <div className="platinum absolute top-0 right-0 z-50 w-[105px] h-[105px] flex justify-center items-center">
                    <Link to={'/filter'}>
                        <div className={`duration-200 ${percentage < 69 ? "w-[105px] h-[105px] rounded-full bg-blue-800" : 'w-[50px] h-[50px] rounded-full bg-blue-800'}  flex justify-center items-center`}>
                            <h2 className="text-white">Platinum</h2>
                        </div>
                    </Link>
                </div>

                <div className="gold absolute bottom-0 right-0 z-50 w-[105px] h-[105px] flex justify-center items-center">
                    <Link to={'/filter'}>
                        <div className={`duration-200 ${percentage >= 69 && percentage <= 84 ? "w-[105px] h-[105px] rounded-full bg-[#E5AF2D]" : 'w-[50px] h-[50px] rounded-full bg-[#E5AF2D]'} flex justify-center items-center`}>
                            <h2 className="text-white">Gold</h2>
                        </div>
                    </Link>
                </div>

                <div className="silver absolute top-0 left-0 z-50 w-[105px] h-[105px] flex justify-center items-center">
                    <Link to={'/filter'}>
                        <div className={`duration-200 ${percentage > 84 ? "w-[105px] h-[105px] rounded-full bg-white" : 'w-[50px] h-[50px] rounded-full bg-white'} flex justify-center items-center`}>
                            <h2 className="">Silver</h2>
                        </div>
                    </Link>
                </div>

                <img src="/image/home/rounds.png" className="w-full h-full absolute" alt="" />
                <h2 className="text-3xl font-semibold text-white">Search by Plans</h2>
            </div>
        </div>
    )
}



const Profile = ({ percentage }) => {
    return (

        <div className="w-full lg:w-1/2 flex flex-wrap gap-10 justify-center items-center overflow-x-scroll sc">
            {percentage < 69 && <>
                <div className="flex flex-col gap-10 justify-center">
                    <Link to={'/profile/49'}>
                        <img src="/image/home/profile/1.png" className='w-[239px] h-[391px] ' alt="Platinum" />
                    </Link>
                    <Link to={'/profile/196'}>
                        <img src="/image/home/profile/2.png" className='w-[239px] h-[391px] ' alt="Platinum" />
                    </Link>

                </div>
                <div className="flex flex-col gap-10 lg:mt-10 justify-center">
                    <Link to={'/profile/6'}>
                        <img src="/image/home/profile/3.png" className='w-[239px] h-[391px] ' alt="Platinum" />
                    </Link>
                    <Link to={'/profile/222'}>
                        <img src="/image/home/profile/4.png" className='w-[239px] h-[391px] ' alt="Platinum" />
                    </Link>

                </div>
            </>}

            {
                percentage >= 69 && percentage <= 84 && <>
                    <div className="flex flex-col gap-10 justify-center">
                        <Link to={'/profile/37'}>
                            <img src="/image/home/profile/5.png" className='w-[239px] h-[391px] text-white' alt="Gold" />
                        </Link>
                        <Link to={'/profile/48'}>
                            <img src="/image/home/profile/6.png" className='w-[239px] h-[391px] text-white' alt="Gold" />
                        </Link>

                    </div>
                    <div className="flex flex-col gap-10 lg:mt-10 justify-center">
                        <Link to={'/profile/56'}>
                            <img src="/image/home/profile/7.png" className='w-[239px] h-[391px] text-white' alt="Gold" />
                        </Link>
                        <Link to={'/profile/66'}>
                            <img src="/image/home/profile/8.png" className='w-[239px] h-[391px] text-white' alt="Gold" />
                        </Link>

                    </div>
                </>
            }

            {
                percentage > 84 && <>
                    <div className="flex flex-col gap-10 justify-center">
                        <Link to={'/profile/49'}>
                            <img src="/image/home/profile/9.png" className='w-[239px] h-[391px] text-white' alt="Silver" />
                        </Link>
                        <Link to={'/profile/196'}>
                            <img src="/image/home/profile/10.png" className='w-[239px] h-[391px] text-white' alt="Silver" />
                        </Link>

                    </div>
                    <div className="flex flex-col gap-10 lg:mt-10 justify-center">
                        <Link to={'/profile/6'}>
                            <img src="/image/home/profile/11.png" className='w-[239px] h-[391px] text-white' alt="Silver" />
                        </Link>
                        <Link to={'/profile/222'}>
                            <img src="/image/home/profile/12.png" className='w-[239px] h-[391px] text-white' alt="Silver" />
                        </Link>

                    </div>
                </>
            }


        </div>
        // <div className="w-1/2 flex  gap-10 justify-center items-center">
        //     <div className="flex flex-col gap-10 justify-center">
        //         <img src="/image/home/profile/1.png" className='w-[239px] h-[391px] ' alt="" />
        //         <img src="/image/home/profile/2.png" className='w-[239px] h-[391px] ' alt="" />
        //     </div>
        //     <div className="flex flex-col gap-10 mt-10 justify-center">
        //         <img src="/image/home/profile/3.png" className='w-[239px] h-[391px] ' alt="" />
        //         <img src="/image/home/profile/4.png" className='w-[239px] h-[391px] ' alt="" />
        //     </div>
        // </div>
    )
}