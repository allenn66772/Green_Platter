import React from 'react'
import { FaStar } from "react-icons/fa";
import Header from '../../Common/Header';

function Viewfood() {
  return (
    <>
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Food Image */}
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1605472565761-3f0b6f63085e"
            alt="Food"
            className="w-full h-[380px] object-cover"
          />
        </div>

        {/* Food Info */}
        <div className="bg-white p-8 rounded-2xl shadow">
          <h1 className="text-4xl font-bold mb-3">Chicken Biryani</h1>

          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500 mb-4">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            <span className="text-gray-700 ml-2 text-sm">(120 reviews)</span>
          </div>

          {/* Price */}
          <p className="text-3xl text-red-600 font-bold mb-6">₹180</p>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-6">
            A delicious and flavorful chicken biryani made with tender chicken,
            aromatic basmati rice, and a blend of traditional Indian spices.
            Served hot with raita.
          </p>

          {/* Quantity */}
          <div className="mb-6">
            <p className="text-gray-800 font-medium mb-2">Quantity</p>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 bg-gray-200 rounded-lg text-lg">-</button>
              <span className="text-xl font-semibold">1</span>
              <button className="px-4 py-2 bg-gray-200 rounded-lg text-lg">+</button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl text-lg">
            Add to Cart
          </button>

          {/* Buy Now Button */}
          <button className="w-full mt-3 bg-black hover:bg-gray-900 text-white font-semibold py-3 rounded-xl text-lg">
            Buy Now
          </button>
        </div>
      </div>

      {/* More Suggestions */}
      <div className="max-w-6xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-semibold mb-6">Similar Items</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Card */}
          <div className="bg-white rounded-2xl shadow p-4">
            <img
              className="rounded-xl h-44 w-full object-cover"
              src="https://images.unsplash.com/photo-1615719413546-198b47c7da83"
            />
            <h3 className="font-semibold text-lg mt-3">Paneer Butter Masala</h3>
            <p className="text-red-600 font-bold mt-1">₹150</p>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow p-4">
            <img
              className="rounded-xl h-44 w-full object-cover"
              src="https://images.unsplash.com/photo-1626082927389-e92e6978cf28"
            />
            <h3 className="font-semibold text-lg mt-3">Beef Roast</h3>
            <p className="text-red-600 font-bold mt-1">₹200</p>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow p-4">
            <img
              className="rounded-xl h-44 w-full object-cover"
              src="https://images.unsplash.com/photo-1618219761799-7dddc2e5fca2"
            />
            <h3 className="font-semibold text-lg mt-3">Shawarma Plate</h3>
            <p className="text-red-600 font-bold mt-1">₹130</p>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default Viewfood