import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

export default function Register() {
    const backgroundRef = useRef(null);

    useEffect(() => {
      gsap.to(backgroundRef.current, {
        backgroundColor: "#ff7f50",
        duration: 2,
        repeat: -1,
        yoyo: true,
      });
    }, []);
  
    return (
      <div
        ref={backgroundRef}
        className="h-screen flex items-center justify-center"
        style={{ backgroundColor: "#1e90ff" }}
      >
        <div
          className="h-[500px] w-[50%] rounded-md flex flex-col items-center justify-center  p-4"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
        >
          <div className="w-full max-w-md space-y-4">
          <p className="flex items-center justify-center text-white text-4xl font-bold">Register User</p>
            <input
              type="text"
              placeholder="Enter your Name"
              className="bg-slate-100 border border-gray-300 rounded-lg h-14 w-full pl-4 focus:outline-none focus:border-blue-500"
            />
  
            <input
              type="email"
              placeholder="Enter your Email"
              className="bg-slate-100 border border-gray-300 rounded-lg h-14 w-full pl-4 focus:outline-none focus:border-blue-500"
            />
  
            <input
              type="password"
              placeholder="Enter your Password"
              className="bg-slate-100 border border-gray-300 rounded-lg h-14 w-full pl-4 focus:outline-none focus:border-blue-500"
            />
  
            <div className="flex items-center justify-center">
            <button className="w-[50%] bg-blue-500 text-white font-semibold rounded-lg h-14 mt-4 hover:bg-blue-600">
              Register
            </button>
            <Link to="/login" className="cursor-pointer ml-5 w-[50%] bg-green-700 text-white font-semibold rounded-lg h-14 mt-4 hover:bg-green-600 flex items-center justify-center ">Login</Link>
            </div>
          </div>
        </div>    
      </div>
  )
}
