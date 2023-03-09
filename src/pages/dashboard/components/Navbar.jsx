import { CardGiftcard, Home, LibraryAddCheck, LoginOutlined, NotificationsActive, } from "@mui/icons-material"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setToken } from "../../../redux/slice/userSlice";


function Navbar() {
  const dispatch = useDispatch()
  const [showNotification, setShowNotification] = useState(false)
  return (
    <div className="w-full h-20 border-b shadow-md flex items-center justify-between px-[5%]">
      <input className="h-8 w-52 bg-transparent border rounded-3xl outline-none pl-3 placeholder:text-white placeholder:text-xs hidden lg:flex items-center capitalize " type="text" name="" placeholder="Search" id="" />
      <Link to={'/'}>
        <Home className="text-gray-500" />
      </Link>
      <div className="flex justify-center items-center gap-7 text-gray-500">
        <div className=" relative">
          <NotificationsActive onClick={()=>{setShowNotification(!showNotification)}} />
          {showNotification && <div className="absolute top-9 -left-28 h-80 w-56 border bg-white rounded-xl px-5 overflow-y-scroll sc">
            <h2 className="h-12 w-full text-center flex justify-center items-center border-b">Notification</h2>
              <ul className="w-full list-disc divide-y space-y-5">
                <li className="h-auto  flex justify-center items-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                <li className="h-auto  flex justify-center items-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                <li className="h-auto  flex justify-center items-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                <li className="h-auto  flex justify-center items-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                <li className="h-auto  flex justify-center items-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                <li className="h-auto  flex justify-center items-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                <li className="h-auto  flex justify-center items-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                <li className="h-auto  flex justify-center items-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                <li className="h-auto  flex justify-center items-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                <li className="h-auto  flex justify-center items-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
              </ul>
          </div>}
        </div>
        <CardGiftcard />
        <LibraryAddCheck />
      </div>
      <select className="outline-none lg:border h-12 rounded-full px-5 hidden lg:block" name="" id="">
        <option value="">English</option>
        <option value="">Arabic</option>
        <option value="">Spanish</option>
      </select>
      <LoginOutlined className="text-gray-500" onClick={() => { dispatch(setToken(undefined)); sessionStorage.clear() }} />
      <div className="h-16 w-48 border rounded-2xl hidden lg:block"></div>
    </div>
  )
}

export default Navbar