import React from 'react'
import Hotelsidebar from '../components/Hotelsidebar'

function Vieworder() {
  return (
    <>
      <div className="flex">

      {/* Sidebar */}
      <Hotelsidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100 min-h-screen">

        {/* Page Title */}
        <h1 className="text-3xl font-semibold mb-6">Orders</h1>

        {/* Orders Table */}
        <div className="bg-white shadow rounded-2xl p-6 overflow-x-auto">

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-red-600 text-white text-left">
                <th className="p-4">Order ID</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Food Item</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Total</th>
                <th className="p-4">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>

              {/* Row 1 */}
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4">#1023</td>
                <td className="p-4">Rahul Sharma</td>
                <td className="p-4">Chicken Biriyani</td>
                <td className="p-4">2</td>
                <td className="p-4">₹380</td>
                <td className="p-4">
                  <span className="px-3 py-1 bg-yellow-200 text-yellow-700 rounded-full text-sm">
                    Pending
                  </span>
                </td>
                <td className="p-4">
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                    View
                  </button>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4">#1024</td>
                <td className="p-4">Anjali Menon</td>
                <td className="p-4">Veg Fried Rice</td>
                <td className="p-4">1</td>
                <td className="p-4">₹150</td>
                <td className="p-4">
                  <span className="px-3 py-1 bg-green-200 text-green-700 rounded-full text-sm">
                    Delivered
                  </span>
                </td>
                <td className="p-4">
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                    View
                  </button>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4">#1025</td>
                <td className="p-4">Deepak Nair</td>
                <td className="p-4">Beef Curry</td>
                <td className="p-4">3</td>
                <td className="p-4">₹720</td>
                <td className="p-4">
                  <span className="px-3 py-1 bg-blue-200 text-blue-700 rounded-full text-sm">
                    In Progress
                  </span>
                </td>
                <td className="p-4">
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                    View
                  </button>
                </td>
              </tr>

            </tbody>
          </table>

        </div>

      </div>
    </div>
    </>
  )
}

export default Vieworder