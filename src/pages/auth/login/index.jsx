import React from "react";

function Auth() {
  return (
    <div
      className="lg:h-screen w-full bg-cover bg-no-repeat flex flex-col lg:flex-row text-white"
      style={{ backgroundImage: "url('/images/auth/banner.webp')" }}
    >
      <div className="px-[10%] py-[5%] w-full lg:w-1/2 h-1/2 lg:h-full backdrop-blur-xl space-y-5">
        <img src="/images/common/logo-rounded.png" alt="" />
        <h1 className="text-2xl font-semibold">Sign In</h1>

        <div className="flex flex-col gap-3">
          <label htmlFor="">Email Address</label>
          <input className="h-12 w-full lg:w-3/4 rounded-lg text-black pl-2 outline-none" type="text" />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="">Password</label>
          <input className="h-12 w-full lg:w-3/4 rounded-lg text-black pl-2 outline-none" type="text" />
        </div>

        <div className="flex gap-3">
          <input type={"checkbox"} />
          <label htmlFor="">Remember me</label>
        </div>

        <div className="flex gap-3 items-center" >
          <button className="h-12 px-5 bg-red-800 rounded-md">Sign In</button>
          <h2 className="text-lg font-medium">Forgot Your Password ?</h2>
        </div>

      </div>
      <div className="px-[10%] py-[5%] w-full lg:w-1/2 h-1/2 lg:h-full"></div>
    </div>
  );
}

export default Auth;
