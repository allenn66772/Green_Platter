import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function HotelHeader() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/hotel-login"); // change if needed
  };

  return (
    <header className="w-full bg-white shadow px-6 py-4 flex justify-between items-center">
      {/* Left */}
      <h1 className="text-2xl font-bold text-orange-600">
        Hotel Dashboard
      </h1>

      {/* Right */}
      <div
        className="relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Profile Image */}
        <div
          onClick={() => setOpen(!open)}
          className="h-10 w-10 rounded-full overflow-hidden border-2 border-orange-500 cursor-pointer"
        >
          <img
            src="https://images.unsplash.com/photo-1555992336-03a23c2b16d1"
            alt="Hotel Profile"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-3 w-40 bg-white border rounded-lg shadow-lg z-50">
            <Link
              to="/hotel-profile"
              className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              onClick={() => setOpen(false)}
            >
              Profile
            </Link>

            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default HotelHeader;
