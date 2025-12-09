import React, { useState } from "react";
import { FaUser, FaHotel } from "react-icons/fa";
import { motion } from "framer-motion";
import Header from "./Header";

function Login() {
  const [role, setRole] = useState("user");        // user / hotel
  const [isRegister, setIsRegister] = useState(false);  // login / register toggle

  return (
   <>
   <Header/>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
    
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white shadow-xl p-8 rounded-2xl w-full max-w-md"
          >
    
            {/* Role Selector */}
            <div className="flex justify-center mb-6 gap-4">
              <button
                onClick={() => setRole("user")}
                className={`px-4 py-2 flex items-center gap-2 rounded-xl border 
                ${role === "user" ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"}`}
              >
                <FaUser /> User
              </button>
    
              <button
                onClick={() => setRole("hotel")}
                className={`px-4 py-2 flex items-center gap-2 rounded-xl border 
                ${role === "hotel" ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"}`}
              >
                <FaHotel /> Hotel
              </button>
            </div>
    
            {/* Register Form */}
            {isRegister ? (
              <form className="space-y-4">
                <div>
                  <label className="text-gray-700 font-medium">Full Name</label>
                  <input
                    type="text"
                    className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-red-400"
                    placeholder="Enter your name"
                  />
                </div>
    
                <div>
                  <label className="text-gray-700 font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-red-400"
                    placeholder="Enter your email"
                  />
                </div>
    
                <div>
                  <label className="text-gray-700 font-medium">Password</label>
                  <input
                    type="password"
                    className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-red-400"
                    placeholder="Create a password"
                  />
                </div>
    
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition"
                >
                  Register as {role === "user" ? "User" : "Hotel"}
                </button>
              </form>
            ) : (
              /* Login Form */
              <form className="space-y-4">
                <div>
                  <label className="text-gray-700 font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-red-400"
                    placeholder="Enter your email"
                  />
                </div>
    
                <div>
                  <label className="text-gray-700 font-medium">Password</label>
                  <input
                    type="password"
                    className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-red-400"
                    placeholder="Enter your password"
                  />
                </div>
    
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition"
                >
                  Login as {role === "user" ? "User" : "Hotel"}
                </button>
              </form>
            )}
    
            {/* Switch */}
            <div className="text-center mt-5 text-gray-600">
              {isRegister ? (
                <p>
                  Already have an account?{" "}
                  <span
                    onClick={() => setIsRegister(false)}
                    className="text-red-500 font-semibold cursor-pointer hover:underline"
                  >
                    Login
                  </span>
                </p>
              ) : (
                <p>
                  New user?{" "}
                  <span
                    onClick={() => setIsRegister(true)}
                    className="text-red-500 font-semibold cursor-pointer hover:underline"
                  >
                    Register
                  </span>
                </p>
              )}
            </div>
    
          </motion.div>
        </div>
   </>
  );
}

export default Login;
