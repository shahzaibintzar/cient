import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
  
    const userData = {
      name,
      email,
      password,
    };
  
    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
  
      const data = await response.json();
  
      if (response.status === 200) {
        alert("User registered successfully!");
        console.log("Token:", data.token); // Token ko handle karne ke liye yahan console ya localStorage me store kar sakte hain
        // Example: localStorage.setItem('token', data.token);
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };
  








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
        <form onSubmit={handleRegister}
          className="h-[500px] w-[50%] rounded-md flex flex-col items-center justify-center  p-4"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
        >
          <div className="w-full max-w-md space-y-4">
          <p className="flex items-center justify-center text-white text-4xl font-bold">Register User</p>
            <input
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-slate-100 border border-gray-300 rounded-lg h-14 w-full pl-4 focus:outline-none focus:border-blue-500"
            />
  
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-slate-100 border border-gray-300 rounded-lg h-14 w-full pl-4 focus:outline-none focus:border-blue-500"
            />
  
            <input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-slate-100 border border-gray-300 rounded-lg h-14 w-full pl-4 focus:outline-none focus:border-blue-500"
            />
  
            <div className="flex items-center justify-center">
            <button type="submit" className="w-[50%] bg-blue-500 text-white font-semibold rounded-lg h-14 mt-4 hover:bg-blue-600">
              Register
            </button>
            <Link to="/login" className="cursor-pointer ml-5 w-[50%] bg-green-700 text-white font-semibold rounded-lg h-14 mt-4 hover:bg-green-600 flex items-center justify-center ">Login</Link>
            </div>
          </div>
        </form>    
      </div>
  )
}
