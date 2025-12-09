import React from 'react'
import { FaUtensils } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";

function Header() {
  return (
    <>
      <header className="bg-gray-100 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaUtensils className="text-red-500 text-3xl" />
          <h1 className="text-2xl font-bold text-gray-800">FoodieSpot</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-red-500 transition">Home</a>
          <a href="#" className="hover:text-red-500 transition">Menu</a>
          <a href="#" className="hover:text-red-500 transition">Hotels</a>
          <a href="#" className="hover:text-red-500 transition">About</a>
          <a href="#" className="hover:text-red-500 transition">Contact</a>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 border border-red-500 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition">
            Login
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition">
            Register
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-3xl text-gray-700">
          <TiThMenu />
        </button>
      </div>
    </header>
    </>
  )
}

export default Header