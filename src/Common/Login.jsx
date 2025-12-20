import React from "react";
import { FaUser, FaHotel, FaUserShield } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();  

  return (
   <>
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          Login As
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* ADMIN */}
          <div
            onClick={() => navigate("/admin/login")}
            className="cursor-pointer bg-white rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition"
          >
            <FaUserShield className="text-5xl text-red-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Admin</h2>
            <p className="text-gray-500 text-sm">
              Manage platform, users & hotels
            </p>
          </div>

          {/* HOTEL */}
          <div
            onClick={() => navigate("/hotel-login")}
            className="cursor-pointer bg-white rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition"
          >
            <FaHotel className="text-5xl text-blue-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Hotel</h2>
            <p className="text-gray-500 text-sm">
              Manage hotel profile & menu
            </p>
          </div>

          {/* USER */}
          <div
            onClick={() => navigate("/user-login")}
            className="cursor-pointer bg-white rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition"
          >
            <FaUser className="text-5xl text-green-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">User</h2>
            <p className="text-gray-500 text-sm">
              Order food & explore restaurants
            </p>
          </div>

        </div>
      </div>
    </div>
   </>
  );
}

export default Login;
