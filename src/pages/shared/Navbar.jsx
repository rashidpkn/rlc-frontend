import { Email, LocalPhone, MenuOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setToken } from "../../redux/slice/userSlice";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  return (
    <div className="bg-[#010313] text-white">
      <nav className="hidden lg:flex h-24 justify-between px-[10%]">
        <ul className="flex gap-10 h-full justify-center items-center">
          <li className="text-2xl">
            <Link to={"/"}> Home </Link>
          </li>
          <li className="text-2xl">
            <Link to={"/about"}> About </Link>
          </li>
          <li className="text-2xl">
            <Link to={"/faq"}> FAQ </Link>
          </li>
        </ul>
        <div className="flex justify-center items-center gap-5">
          <input
            className="h-8 w-52 bg-transparent border rounded-3xl outline-none pl-3 placeholder:text-white placeholder:text-xs flex items-center capitalize"
            type="text"
            name=""
            placeholder="Search"
            id=""
          />
          <button className="h-10 px-3 text-white rounded-full bg-[#ef1010]">
            Search
          </button>
          {token ? (
            <button className="h-10 px-3 text-white rounded-full bg-[#006ef8]" onClick={() => { dispatch(setToken(undefined)); sessionStorage.clear() }}>
              Log Out
            </button>
          ) : (
            <Link to={"/auth"}>
              <button className="h-10 px-3 text-white rounded-full bg-[#006ef8]">
                Log In
              </button>
            </Link>
          )}
          <Link to={"/auth"}>
            <button className="h-10 px-3 text-white rounded-full bg-[#ef1010]">
              Place Ads
            </button>
          </Link>
        </div>
      </nav>
      <nav className='h-20 w-full flex lg:hidden justify-between items-center px-5'>
        <MenuOutlined className='cursor-pointer' onClick={() => setShowMenu(!showMenu)} />
        <a href="https://my-thread.co.uk">
          <img src="/image/common/logo.svg" width={100} alt="" />
        </a>

        <div className="flex gap-3">
          <LocalPhone />
          <Email />
        </div>
      </nav>
      {
        showMenu && <ul className="flex lg:hidden flex-col w-full p-2 gap-3 ">
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>About</li>
          <li className='cursor-pointer'>FAQ</li>
          <li className='cursor-pointer'>Login</li>
          <li className='cursor-pointer'>Place Ads</li>
        </ul>
      }

    </div>
  );
}

export default Navbar;
