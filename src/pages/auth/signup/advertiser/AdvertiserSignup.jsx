import React from "react";
import { Link } from "react-router-dom";

function AdvertiserSignup() {
  return (
    <div
      className="w-full bg-cover bg-no-repeat flex flex-col lg:flex-row text-white"
      style={{ backgroundImage: "url('/images/auth/banner.webp')" }}
    >
      <div className="px-[10%] py-[5%] w-full lg:w-1/2 h-1/2 lg:h-full backdrop-blur-xl space-y-5 relative">
        <div className="bg-black h-20 w-20 absolute top-5 right-5"></div>
        <img src="/images/common/logo-rounded.png" alt="" />
        <h1 className="text-2xl font-semibold">Register now , It's free!</h1>

        <div className="flex flex-col gap-3">
          <label htmlFor="">Username</label>
          <input
            className="h-12 w-full lg:w-3/4 rounded-lg text-black pl-2 outline-none"
            type="text"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="">Email Address</label>
          <input
            className="h-12 w-full lg:w-3/4 rounded-lg text-black pl-2 outline-none"
            type="text"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="">Password</label>
          <input
            className="h-12 w-full lg:w-3/4 rounded-lg text-black pl-2 outline-none"
            type="text"
          />
        </div>

        <div className="flex gap-3">
          <input type={"checkbox"} />
          <label htmlFor="">I accept the Terms and Conditons of use</label>
        </div>

        <div className="flex gap-3 items-center">
          <button className="h-12 px-5 bg-red-800 rounded-md">Register</button>
          <h2 className="text-lg font-medium">Already a user? Sign In</h2>
        </div>

        <button><Link to={'/register/user'}> Go to new User Registration </Link></button>

      </div>
      <div className="px-[10%] py-[5%] w-full lg:w-1/2 h-1/2 lg:h-full"></div>
    </div>
  );
}

export default AdvertiserSignup;
