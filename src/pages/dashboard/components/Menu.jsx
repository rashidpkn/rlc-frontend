import { Link, useParams } from 'react-router-dom'
const Menu = ({ icon, title, url }) => {
    const { menu } = useParams()
    return (
        <Link to={`/dashboard/${url}`} title={title}>
            <div className={`${menu === url ? 'text-[#6418C3]' : 'text-[#a5a5a5]'} h-10 flex lg:pl-5 justify-center lg:justify-between items-center `}>
                <div className="w-[20%]">
                    {icon}
                </div>
                <p className='hidden lg:inline-block w-[calc(80%-4px)]'>{title}</p>
                <div className={`${menu === url && 'bg-black'} h-full w-1 rounded-full hidden lg:inline-block `}></div>
            </div>
        </Link>
    )
}

export default Menu