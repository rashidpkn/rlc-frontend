import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BackendIP from "../../../BackendIP";
import { setEmail, setPassword, setRole, setToken } from "../../../redux/slice/userSlice";

function Auth() {
  
  const {email,password} = useSelector(state=>state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const Login = () =>{
    axios.post(`${BackendIP}/user/signin`,{email,password}).then(res=>{
      const {status} = res.data
      if(status){
        navigate('/dashboard')
        dispatch(setToken(res.data.token))
        dispatch(setRole(res.data.role))
      }else{
        window.alert(res.data.reason)
      }
    })
  }
  return (
    <div
      className="lg:h-screen w-full bg-cover bg-no-repeat flex flex-col lg:flex-row text-white"
      style={{ backgroundImage: "url('/images/auth/banner.webp')" }}
    >
      <form onSubmit={e=>{
        e.preventDefault()
        Login()
      }} className="px-[10%] py-[5%] w-full lg:w-1/2 h-1/2 lg:h-full backdrop-blur-xl space-y-5">
        <img src="/images/common/logo-rounded.png" alt="" />
        <h1 className="text-2xl font-semibold">Sign In</h1>

        <div className="flex flex-col gap-3">
          <label htmlFor="">Email Address</label>
          <input required onChange={e=>dispatch(setEmail(e.target.value))} value={email} className="h-12 w-full lg:w-3/4 rounded-lg text-black pl-2 outline-none" type={"email"} />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="">Password</label>
          <input required onChange={e=>dispatch(setPassword(e.target.value))} value={password} className="h-12 w-full lg:w-3/4 rounded-lg text-black pl-2 outline-none" type="password" />
        </div>

        <div className="flex gap-3">
          <input type={"checkbox"} />
          <label htmlFor="">Remember me</label>
        </div>

        <div className="flex gap-3 items-center" >
          <button type="submit" className="h-12 px-5 bg-red-800 rounded-md">Sign In</button>
          <h2 className="text-lg font-medium">Forgot Your Password ?</h2>
        </div>

      </form>
      <div className="px-[10%] py-[5%] w-full lg:w-1/2 h-1/2 lg:h-full"></div>
    </div>
  );
}

export default Auth;
