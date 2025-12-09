import React from 'react'
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function Adminheader() {
  return (
    <>
    <header className="w-full bg-gray-600 shadow-md p-4 flex items-center justify-between">
{/* Logo */}
<Link to="/admin-home" className="flex items-center gap-2">
<img
src="/logo.png" // Replace with your logo path
alt="Admin Logo"
className="h-10 w-auto"
/>
<h1 className="text-xl font-bold text-gray-700">Admin Panel</h1>
</Link>


{/* Right Section */}
<div className="flex items-center gap-4">
<span className="text-red-600 font-medium">Welcome, Admin</span>
<FaUserCircle className="text-3xl text-red-600" />
</div>
</header>
    </>
  )
}

export default Adminheader