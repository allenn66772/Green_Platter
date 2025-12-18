import React from 'react'

function PaymentError() {
  return (
    <>
    <div className="min-h-screen bg-red-50 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
        
        <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-red-100 mb-6">
          <span className="text-red-600 text-4xl">✖</span>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Failed
        </h1>

        <p className="text-gray-600 mb-6">
          Something went wrong. Please try again.
        </p>

        <div className="space-y-3">
          <button className="w-full bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 transition">
            Try Again
          </button>

          <button className="w-full border border-red-600 text-red-600 py-3 rounded-xl hover:bg-red-50 transition">
            Go to Cart
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default PaymentError