import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
    <footer className="w-full bg-gray-900 text-gray-200 py-10 mt-10">
<div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Logo + About */}
<div>
<h2 className="text-2xl font-bold text-red-500">FoodPoint</h2>
<p className="mt-3 text-gray-400">
Delivering fresh meals with love. Your hunger is our priority.
</p>
</div>


{/* Quick Links */}
<div>
<h3 className="text-xl font-semibold text-red-400 mb-3">Quick Links</h3>
<ul className="space-y-2 text-gray-300">
<li className="hover:text-red-400 cursor-pointer">Home</li>
<li className="hover:text-red-400 cursor-pointer">Menu</li>
<li className="hover:text-red-400 cursor-pointer">Offers</li>
<li className="hover:text-red-400 cursor-pointer">Contact</li>
</ul>
</div>


{/* Socials */}
<div>
<h3 className="text-xl font-semibold text-red-400 mb-3">Follow Us</h3>
<div className="flex gap-4 text-2xl">
<FaFacebook className="hover:text-red-400 cursor-pointer" />
<FaInstagram className="hover:text-red-400 cursor-pointer" />
<FaYoutube className="hover:text-red-400 cursor-pointer" />
</div>
</div>
</div>


{/* Bottom Text */}
<div className="text-center text-gray-500 mt-8 text-sm">
© {new Date().getFullYear()} FoodPoint. All Rights Reserved.
</div>
</footer>
    </>
  )
}

export default Footer