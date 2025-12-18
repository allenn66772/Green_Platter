import React, { useEffect, useState } from "react";
import Hotelsidebar from "../components/Hotelsidebar";
import { getOrdersAPI } from "../../service/allAPI";

function Vieworder() {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
  try {
    const token = sessionStorage.getItem("token");

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    const result = await getOrdersAPI(reqHeader);

    
    if (result && result.data) {
      setOrders(result.data);
    } else {
      setOrders([]);
    }
  } catch (error) {
    console.error("Fetch orders error:", error);
    setOrders([]); // ✅ prevent crash
  }
};


  const getStatusStyle = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-200 text-yellow-700";
      case "Delivered":
        return "bg-green-200 text-green-700";
      case "In Progress":
        return "bg-blue-200 text-blue-700";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };
   
  useEffect(()=>{
    fetchAllOrders()
  },[])


  return (
    <div className="flex">
      {/* Sidebar */}
      <Hotelsidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-semibold mb-6">Orders</h1>

        <div className="bg-white shadow rounded-2xl p-6 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-red-600 text-white text-left">
                <th className="p-4">Order ID</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Food Item(s)</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Total</th>
                <th className="p-4">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr
                    key={order._id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-4">
                      #{order._id.slice(-5)}
                    </td>

                    <td className="p-4">
                      {order.deliveryAddress?.fullname}
                    </td>

                    <td className="p-4">
                      {order.items.map((item) => (
                        <div key={item._id}>
                          {item.foodId?.foodname}
                        </div>
                      ))}
                    </td>

                    <td className="p-4">
                      {order.items.map((item) => (
                        <div key={item._id}>
                          {item.quantity}
                        </div>
                      ))}
                    </td>

                    <td className="p-4">
                      ₹{order.orderTotal}
                    </td>

                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${getStatusStyle(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </span>
                    </td>

                    <td className="p-4">
                      <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                        View
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center p-6 text-gray-500"
                  >
                    No orders found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Vieworder;
