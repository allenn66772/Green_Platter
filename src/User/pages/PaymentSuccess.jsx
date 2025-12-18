import React from 'react'

function PaymentSuccess() {
  return (
    <>
     <div className="min-h-screen bg-green-50 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
        
        <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-green-100 mb-6">
          <span className="text-green-600 text-4xl">✔</span>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Successful
        </h1>

        <p className="text-gray-600 mb-6">
          Your payment has been processed successfully.
        </p>

        <div className="space-y-3">
          <button className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition">
            View Orders
          </button>

          <button className="w-full border border-green-600 text-green-600 py-3 rounded-xl hover:bg-green-50 transition">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default PaymentSuccess