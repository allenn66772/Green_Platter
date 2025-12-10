import React from 'react'
import Hotelsidebar from '../components/Hotelsidebar'
import Header from '../../Common/Header'

function Addfood() {
  return (
    <>
    <Header/>
    <div className="flex">

      {/* Sidebar */}
      <Hotelsidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100 min-h-screen">

        {/* Page Title */}
        <h1 className="text-3xl font-semibold mb-6">Add New Food Item</h1>

        {/* UI Card */}
        <div className="bg-white p-8 shadow rounded-2xl w-full max-w-3xl">

          <form className="space-y-6">

            {/* Food Name */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Food Name
              </label>
              <input
                type="text"
                placeholder="Enter food name"
                className="w-full p-3 border rounded-xl focus:outline-none"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Price (₹)
              </label>
              <input
                type="number"
                placeholder="Enter food price"
                className="w-full p-3 border rounded-xl focus:outline-none"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Category
              </label>
              <select className="w-full p-3 border rounded-xl text-gray-600 focus:outline-none">
                <option>Select category</option>
                <option>Biriyani</option>
                <option>Snacks</option>
                <option>Drinks</option>
                <option>Cakes</option>
                <option>Fried Items</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                placeholder="Enter description..."
                rows="4"
                className="w-full p-3 border rounded-xl focus:outline-none"
              ></textarea>
            </div>

            {/* Image Upload UI Only */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Food Image
              </label>

              <div className="w-40 h-40 border-2 border-dashed border-gray-400 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
                <span className="text-gray-500">Upload</span>
              </div>
            </div>

            {/* Button */}
            <button
              type="button"
              className="w-full bg-red-600 text-white py-3 rounded-xl text-lg font-medium hover:bg-red-700 transition"
            >
              Add Food
            </button>

          </form>

        </div>

      </div>
    </div>
    </>
  )
}

export default Addfood