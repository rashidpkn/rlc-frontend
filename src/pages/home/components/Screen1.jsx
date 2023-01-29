import { Link } from "react-router-dom"

const Screen1 = () => {
    return (
        <>

            <div className="h-[calc(100vh-40px)] w-full bg-[#010315] relative overflow-hidden">
                <Globe />
                <img src="/image/home/lady.png" className="hidden lg:block absolute -left-[100px] bottom-0 z-40  h-[600px]" alt="" />
                <img src="/image/home/wave.svg" className='w-full absolute bottom-0 z-40' alt="" />
                <div className='absolute bottom-0  w-full z-50 hidden md:flex justify-center text-white font-medium text-lg '>See the latest listing in your region</div>
            </div>
        </>
    )
}

export default Screen1



const Globe = () => {
    return (
        <div className="w-full h-[90%]  relative group">
            <div className='absolute  w-full z-50 flex justify-center text-white font-medium text-lg'>Select Your Region</div>

            <img src="/image/home/ellipse1.png" className='hidden lg:block w-[61px] h-[61px] absolute top-[74px] right-[131px]' alt="" />
            <img src="/image/home/ellipse2.png" className='hidden lg:block w-[147px] h-[147px] absolute inset-y-0 my-auto -right-[70px]' alt="" />
            <img src="/image/home/ellipse3.png" className='hidden lg:block w-[529px] h-[529px] absolute -bottom-[250px] -right-[250px] z-50 opacity-80' alt="" />
            <img src="/image/home/outer.png" className='outer hidden md:block absolute inset-0 m-auto  z-20' alt="" />
            <img src="/image/home/inner.png" className='inner absolute inset-0 m-auto  z-30' alt="" />
            <img src="/image/home/globe.png" className='globe absolute inset-0 m-auto z-40' alt="" />
            <Flag />
        </div>

    )
}





const Flag = () => {

    return (
        <div className="w-[590px] h-[590px] absolute inset-0 m-auto rounded-full  z-50">
            <Link to={'/filter'}>
                <div className=" flag    rounded-full absolute bottom-12 left-24 flex justify-center items-center " style={{ animationDuration: '1s' }}>
                    <img src="/image/home/flag/Japan.png" className="w-[53px] h-[53px]" alt="" />
                    <div class="flex items-center justify-center relative right-[11.8rem]">
                        <div class="flex h-5 w-24 items-center justify-center rounded-3xl border border-[#FB0202] bg-white text-[#FB0202]">Japan</div>
                        <hr class="h-[2px] w-10 bg-[#FB0202] border-[#FB0202]" />
                    </div>
                </div>
            </Link>

            <Link to={'/filter'}>
                <div className="flag  rounded-full absolute bottom-32 left-7 flex justify-center items-center" style={{ animationDuration: '1.5s' }}>
                    <img src="/image/home/flag/spain.png" className="w-[53px] h-[53px]" alt="" />
                    <div class="flex items-center justify-center relative right-[11.8rem]">
                        <div class="flex h-5 w-24 items-center justify-center rounded-3xl border border-[#FB0202] bg-white text-[#FB0202]">Spain</div>
                        <hr class="h-[2px] w-10 bg-[#FB0202] border-[#FB0202]" />
                    </div>
                </div>
            </Link>

            <Link to={'/filter'}>
                <div className=" flag  rounded-full absolute top-32 left-7 flex justify-center items-center" style={{ animationDuration: '2s' }}>
                    <img src="/image/home/flag/srilanka.png" className="w-[53px] h-[53px]" alt="" />
                    <div class="flex items-center justify-center relative right-[11.8rem]">
                        <div class="flex h-5 w-24 items-center justify-center rounded-3xl border border-[#FB0202] bg-white text-[#FB0202]">Sri Lanka</div>
                        <hr class="h-[2px] w-10 bg-[#FB0202] border-[#FB0202]" />
                    </div>
                </div>
            </Link>

            <Link to={'/filter'}>
                <div className="  flag rounded-full absolute top-12 left-24 flex justify-center items-center" style={{ animationDuration: '2.5s' }}>
                    <img src="/image/home/flag/UAE.png" className="w-[53px] h-[53px]" alt="" />
                    <div class="flex items-center justify-center relative right-[11.8rem]">
                        <div class="flex h-5 w-24 items-center justify-center rounded-3xl border border-[#FB0202] bg-white text-[#FB0202]">UAE</div>
                        <hr class="h-[2px] w-10 bg-[#FB0202] border-[#FB0202]" />
                    </div>
                </div>
            </Link>

            <Link to={'/filter'}>
                <div className="flag rounded-full absolute bottom-32 -right-28 flex justify-center items-center" style={{ animationDuration: '4s' }}>
                    <img src="/image/home/flag/malaysia.png" className="w-[53px] h-[53px]" alt="" />
                    <div class="flex items-center justify-center relative ">
                        <hr class="h-[2px] w-10 bg-[#FB0202] border-[#FB0202]" />
                        <div class="flex h-5 w-24 items-center justify-center rounded-3xl border border-[#FB0202] bg-white text-[#FB0202]">Malaysia</div>
                    </div>
                </div>
            </Link>

            <Link to={'/filter'}>
                <div className="flag  rounded-full absolute top-32 -right-28 flex justify-center items-center" style={{ animationDuration: '3.5s' }}>
                    <img src="/image/home/flag/UK.png" className="w-[53px] h-[53px]" alt="" />
                    <div class="flex items-center justify-center relative ">
                        <hr class="h-[2px] w-10 bg-[#FB0202] border-[#FB0202]" />
                        <div class="flex h-5 w-24 items-center justify-center rounded-3xl border border-[#FB0202] bg-white text-[#FB0202]">UK</div>
                    </div>
                </div>
            </Link>

            <Link to={'/filter'}>
                <div className="flag rounded-full absolute top-12 -right-12 flex justify-center items-center" style={{ animationDuration: '3s' }}>
                    <img src="/image/home/flag/bahrain.png" className="w-[53px] h-[53px]" alt="" />
                    <div class="flex items-center justify-center relative ">
                        <hr class="h-[2px] w-10 bg-[#FB0202] border-[#FB0202]" />
                        <div class="flex h-5 w-24 items-center justify-center rounded-3xl border border-[#FB0202] bg-white text-[#FB0202]">Bahrain</div>
                    </div>
                </div>
            </Link>

        </div>
    )
}

