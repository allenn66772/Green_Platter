import React from 'react'

function Hotelhome() {
  return (
    <>
     <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-linear-to-b from-orange-600 to-amber-700 text-white p-6 shadow-xl hidden md:block">
        <h2 className="text-3xl font-extrabold mb-10">Hotel Panel</h2>

        <ul className="space-y-6 text-lg">
          <li className="hover:text-gray-200 cursor-pointer">Dashboard</li>
          <li className="hover:text-gray-200 cursor-pointer">Orders</li>
          <li className="hover:text-gray-200 cursor-pointer">Menu Items</li>
        <Link to='/add-food' className="hover:text-gray-200 cursor-pointer">  Added Dishes</Link>
          <li className="hover:text-gray-200 cursor-pointer">Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">

        {/* Top Bar */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

          <div className="flex items-center gap-5">
            <span className="text-gray-700 font-semibold">Welcome, Owner</span>
            <img
              src=""
              alt="profile"
              className="w-10 h-10 rounded-full border-2 border-orange-500"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-gray-400">Total Orders</h3>
            <p className="text-3xl font-extrabold mt-2 text-orange-600">120</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-gray-400">Revenue</h3>
            <p className="text-3xl font-extrabold mt-2 text-green-600">₹52,300</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-gray-400">Items Live</h3>
            <p className="text-3xl font-extrabold mt-2 text-amber-600">34</p>
          </div>

        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-bold mb-5">Recent Orders</h2>

          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="py-3">Customer</th>
                <th className="py-3">Item</th>
                <th className="py-3">Price</th>
                <th className="py-3">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3">John Mathew</td>
                <td className="py-3">Chicken Biryani</td>
                <td className="py-3">₹180</td>
                <td className="py-3 text-green-600 font-semibold">Delivered</td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="py-3">Aisha Khan</td>
                <td className="py-3">Paneer Butter</td>
                <td className="py-3">₹150</td>
                <td className="py-3 text-orange-600 font-semibold">Pending</td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="py-3">Ravi</td>
                <td className="py-3">Masala Dosa</td>
                <td className="py-3">₹90</td>
                <td className="py-3 text-amber-600 font-semibold">On the way</td>
              </tr>
            </tbody>
          </table>
        </div>

      </main>
    </div>
    
    </>
  )
}

export default Hotelhome