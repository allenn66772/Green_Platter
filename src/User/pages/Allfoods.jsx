import React from 'react'
import Header from '../../Common/Header'
import Footer from '../../Common/Footer'

function Allfoods() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">

      {/* User Header */}
      <Header />
{/* <!-- Filter Section --> */}
<div class="w-full bg-gray-100  p-4 mb-6">
  <h2 class="text-lg font-semibold text-gray-700 ms-4 mb-3">
    Filter by Category
  </h2>

  <div class="flex flex-wrap gap-3 ms-3">
    <button class="px-4 py-2 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition">
      All
    </button>

    <button class="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-red-500 hover:text-white hover:border-red-500 transition">
      Veg
    </button>

    <button class="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-red-500 hover:text-white hover:border-red-500 transition">
      Non-Veg
    </button>

    <button class="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-red-500 hover:text-white hover:border-red-500 transition">
      Fast Food
    </button>

    <button class="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-red-500 hover:text-white hover:border-red-500 transition">
      Desserts
    </button>
  </div>
</div>

      {/* Page Title */}
      <div className="px-6 py-8">
        <h1 className="text-3xl font-semibold">All Foods</h1>
        <p className="text-gray-600 mt-1">Browse delicious dishes from all hotels</p>
      </div>

      {/* Foods Grid */}
      <div className="px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {/* Food Card 1 */}
        <div className="bg-white shadow rounded-2xl overflow-hidden hover:shadow-lg transition">
          <img
            src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
            alt="food"
            className="h-40 w-full object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Chicken Biriyani</h2>
            <p className="text-gray-600 text-sm mt-1">Hotel Royal Spice</p>
            <p className="text-red-600 text-lg font-bold mt-2">₹180</p>
            <button className="mt-4 w-full bg-red-600 text-white py-2 rounded-xl hover:bg-red-700">
              View Details
            </button>
          </div>
        </div>

        {/* Food Card 2 */}
        <div className="bg-white shadow rounded-2xl overflow-hidden hover:shadow-lg transition">
          <img
            src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
            alt="food"
            className="h-40 w-full object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Veg Fried Rice</h2>
            <p className="text-gray-600 text-sm mt-1">Green Leaf Hotel</p>
            <p className="text-red-600 text-lg font-bold mt-2">₹120</p>
            <button className="mt-4 w-full bg-red-600 text-white py-2 rounded-xl hover:bg-red-700">
              View Details
            </button>
          </div>
        </div>

        {/* Food Card 3 */}
        <div className="bg-white shadow rounded-2xl overflow-hidden hover:shadow-lg transition">
          <img
            src="https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg"
            alt="food"
            className="h-40 w-full object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Cheese Pizza</h2>
            <p className="text-gray-600 text-sm mt-1">Urban Café</p>
            <p className="text-red-600 text-lg font-bold mt-2">₹150</p>
            <button className="mt-4 w-full bg-red-600 text-white py-2 rounded-xl hover:bg-red-700">
              View Details
            </button>
          </div>
        </div>

        {/* Food Card 4 */}
        <div className="bg-white shadow rounded-2xl overflow-hidden hover:shadow-lg transition">
          <img
            src="https://images.pexels.com/photos/461303/pexels-photo-461303.jpeg"
            alt="food"
            className="h-40 w-full object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Chicken Shawarma</h2>
            <p className="text-gray-600 text-sm mt-1">Arabian Dine</p>
            <p className="text-red-600 text-lg font-bold mt-2">₹90</p>
            <button className="mt-4 w-full bg-red-600 text-white py-2 rounded-xl hover:bg-red-700">
              View Details
            </button>
          </div>
        </div>

      </div>

    </div>
    <Footer/>
    </>
  )
}

export default Allfoods