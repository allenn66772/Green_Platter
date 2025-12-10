import React from 'react'
import Header from '../../Common/Header'

function Checkout() {
  return (
    <>
     <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left: Delivery Details */}
        <div className="bg-white p-6 shadow rounded-2xl lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Delivery Information</h2>

          <div className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 border rounded-xl focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter phone number"
                className="w-full p-3 border rounded-xl focus:outline-none"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Delivery Address
              </label>
              <textarea
                rows="3"
                placeholder="Enter full address"
                className="w-full p-3 border rounded-xl focus:outline-none"
              ></textarea>
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-gray-700 font-medium mb-3">
                Payment Method
              </label>

              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="payment" />
                  <span>Cash on Delivery</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="payment" />
                  <span>UPI</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="payment" />
                  <span>Card</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Summary */}
        <div className="bg-white p-6 shadow rounded-2xl h-fit">
          <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

          {/* Items */}
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-700">Chicken Biriyani (2)</span>
              <span className="font-semibold">₹360</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-700">Shawarma (1)</span>
              <span className="font-semibold">₹90</span>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between">
                <span className="text-gray-700">Delivery Fee</span>
                <span className="font-semibold">₹20</span>
              </div>
            </div>

            <div className="border-t pt-4 text-lg font-bold flex justify-between">
              <span>Total</span>
              <span>₹470</span>
            </div>
          </div>

          {/* Button */}
          <button className="w-full mt-6 bg-red-600 text-white py-3 rounded-xl text-lg hover:bg-red-700">
            Place Order
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Checkout