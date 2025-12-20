import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HotelAddedFood from './HotelAddedFood';
import { getHotelOrdersAPI } from '../../service/allAPI';

function Hotelhome() {
  const [vieworder,setvieworders]=useState(false)
   const [orders, setOrders] = useState([]);
   const [addedFoods,setAddedFoods]=useState(false)
   const [mainDiv,setmainDiv]=useState(true)
   const [token,settoken]=useState("")
     const [open, setOpen] = useState(false);


 const getallorders = async (storedToken) => {
  try {
    const reqHeader = {
      Authorization: `Bearer ${storedToken}`,
    };

    const result = await getHotelOrdersAPI(reqHeader);

    if (result.status === 200) {
      setOrders(result.data);
      console.log(result.data);
    } else {
      console.log("data not found");
    }
  } catch (error) {
    console.log(error);
  }
};

 useEffect(() => {
  const storedToken = sessionStorage.getItem("token");
  settoken(storedToken);

  if (storedToken) {
    getallorders(storedToken);
  }
}, []);

  return (
    <>
     <div onClick={()=>setOpen(false)} className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-linear-to-b from-orange-600 to-amber-700 text-white p-6 shadow-xl hidden md:block">
        <h2 className="text-3xl font-extrabold mb-10">Hotel Panel</h2>

        <ul className="space-y-6 text-lg">
          <li onClick={()=>{setvieworders(false),setmainDiv(true),setAddedFoods(false)}} className="hover:text-gray-200 cursor-pointer">Dashboard</li>
          <li onClick={()=>{setvieworders(true),setmainDiv(false),setAddedFoods(false)}} className="hover:text-gray-200 cursor-pointer">Orders</li>
          <li onClick={()=>{setvieworders(false),setmainDiv(false),setAddedFoods(true)}} className="hover:text-gray-200 cursor-pointer">  Added Dishes</li>
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
            <div
  className="relative"
  onClick={(e) => e.stopPropagation()}
>
  {/* Image Container */}
  <div
    onClick={() => setOpen(!open)}
    className="h-12 w-12 rounded-full overflow-hidden cursor-pointer border-2 border-orange-500"
  >
    <img
      src="https://images.unsplash.com/photo-1555992336-03a23c2b16d1"
      alt="Restaurant"
      className="h-full w-full object-cover"
    />
  </div>

  {/* Dropdown */}
  {open && (
    <div className="absolute right-0 mt-3 w-40 bg-white rounded-lg shadow-lg border z-50">
      <Link to="/hotel-profile" className="w-full px-4 py-2 hover:bg-gray-100 cursor-pointer">
        Profile
      </Link>
      
      <div className="px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer">
        Logout
      </div>
    </div>
  )}
</div>

          </div>
        </div>

        {/* Stats */}
       {mainDiv && <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

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

        </div>}

        {/* Recent Orders */}
       {mainDiv && <div className="bg-white rounded-2xl shadow-xl p-6">
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
        </div>}
       {vieworder && <div className="">
         <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Hotel Orders</h1>

      {orders.length > 0 ? (
        orders.map((order) => (
          <div
            key={order._id}
            className="border rounded-lg p-4 mb-4 shadow"
          >
            <p><strong>Customer:</strong> {order.userMail}</p>
            <p><strong>Status:</strong> {order.status}</p>
            <p><strong>Total:</strong> ₹{order.orderTotal}</p>

            <div className="mt-2">
              <strong>Items:</strong>
              {order.items.map((item, index) => (
                <div key={index} className="ml-4">
                  <p>
                    {item.foodId.foodname} × {item.quantity}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>No orders found</p>
      )}
    </div>
        </div>}
            {addedFoods && <HotelAddedFood/>}
      </main>
    </div>
    
    </>
  )
}

export default Hotelhome