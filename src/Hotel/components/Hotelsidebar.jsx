import React, { useState } from 'react'
import { FaHome, FaUtensils, FaClipboardList, FaUserCircle } from "react-icons/fa";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

function Hotelsidebar() {
  const [open, setOpen] = useState(false);
  return (
    <>
     <div className="md:hidden flex items-center p-4 bg-white shadow">
        <IoMdMenu size={28} onClick={() => setOpen(true)} className="cursor-pointer" />
        <h1 className="ml-4 text-xl font-semibold">Hotel Dashboard</h1>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-red-600 text-white shadow-xl transform 
        ${open ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 transition-transform duration-300 md:static`}
      >
        {/* Header & Close Button (Mobile) */}
        <div className="flex items-center justify-between p-4 border-b border-red-300">
          <h2 className="text-2xl font-bold">Hotel Panel</h2>
          <IoMdClose 
            size={26} 
            className="cursor-pointer md:hidden" 
            onClick={() => setOpen(false)} 
          />
        </div>

        {/* Menu */}
        <ul className="mt-4">
          <li className="p-4 hover:bg-red-700 cursor-pointer flex items-center gap-3">
            <FaHome />
            <Link to="/hotel/home">Home</Link>
          </li>

          <li className="p-4 hover:bg-red-700 cursor-pointer flex items-center gap-3">
            <FaUtensils />
            <Link to="/hotel/foods">Manage Foods</Link>
          </li>

          <li className="p-4 hover:bg-red-700 cursor-pointer flex items-center gap-3">
            <FaClipboardList />
            <Link to="/hotel/orders">Orders</Link>
          </li>

          <li className="p-4 hover:bg-red-700 cursor-pointer flex items-center gap-3">
            <FaUserCircle />
            <Link to="/hotel/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Hotelsidebar