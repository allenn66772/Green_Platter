import React from 'react'
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

function Cart() {
  return (
    <>
    <div className="min-h-screen bg-gray-100 p-6">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">


{/* Cart Items */}
<div className="lg:col-span-2">
<h1 className="text-2xl font-semibold mb-4">Your Cart</h1>


{/* Item 1 */}
<div className="bg-white rounded-2xl shadow-sm p-4 flex gap-4 mb-4">
<img
src="https://via.placeholder.com/120"
alt="food"
className="w-28 h-28 rounded-xl object-cover"
/>


<div className="flex-1">
<h2 className="text-lg font-medium">Chicken Burger</h2>
<p className="text-sm text-gray-500">₹120 per item</p>


<div className="flex items-center gap-3 mt-4">
<button className="p-2 border rounded-full hover:bg-gray-100">
<FaMinus size={12} />
</button>
<span className="font-medium">1</span>
<button className="p-2 border rounded-full hover:bg-gray-100">
<FaPlus size={12} />
</button>
</div>
</div>


<div className="flex flex-col justify-between items-end">
<p className="font-semibold text-lg">₹120</p>
<button className="text-red-500 hover:text-red-600">
<FaTrash />
</button>
</div>
</div>


{/* Item 2 */}
<div className="bg-white rounded-2xl shadow-sm p-4 flex gap-4 mb-4">
<img
src="https://via.placeholder.com/120"
alt="food"
className="w-28 h-28 rounded-xl object-cover"
/>


<div className="flex-1">
<h2 className="text-lg font-medium">Veg Pizza</h2>
<p className="text-sm text-gray-500">₹180 per item</p>


<div className="flex items-center gap-3 mt-4">
<button className="p-2 border rounded-full hover:bg-gray-100">
<FaMinus size={12} />
</button>
<span className="font-medium">2</span>
<button className="p-2 border rounded-full hover:bg-gray-100">
<FaPlus size={12} />
</button>
</div>
</div>


<div className="flex flex-col justify-between items-end">
<p className="font-semibold text-lg">₹360</p>
<button className="text-red-500 hover:text-red-600">
<FaTrash />
</button>
</div>
</div>


</div>


{/* Order Summary */}
<div className="bg-white rounded-2xl shadow-sm p-6 h-fit">
<h2 className="text-xl font-semibold mb-4">Order Summary</h2>


<div className="flex justify-between text-sm mb-2">
<span>Subtotal</span>
<span>₹480</span>
</div>
<div className="flex justify-between text-sm mb-2">
<span>Delivery Fee</span>
<span>₹40</span>
</div>
<hr className="my-3" />
<div className="flex justify-between font-semibold text-lg">
<span>Total</span>
<span>₹520</span>
</div>


<button className="w-full mt-6 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
Proceed to Checkout
</button>
</div>
</div>
</div>
    
    </>
  )
}

export default Cart