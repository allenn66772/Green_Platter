import React, { useEffect, useState } from "react";
import HotelAddedFood from "./HotelAddedFood";
import { getHotelOrdersAPI, approveOrderAPI } from "../../service/allAPI";
import { toast } from "react-toastify";
import HotelHeader from "../components/HotelHeader";
import { Link } from "react-router-dom";

function Hotelhome() {
  const [vieworder, setvieworders] = useState(false);
  const [orders, setOrders] = useState([]);
  const [addedFoods, setAddedFoods] = useState(false);
  const [mainDiv, setmainDiv] = useState(true);
  const [token, settoken] = useState("");

  // 🔹 Fetch Orders
  const getallorders = async (storedToken) => {
    try {
      const reqHeader = {
        Authorization: `Bearer ${storedToken}`,
      };

      const result = await getHotelOrdersAPI(reqHeader);

      if (result.status === 200) {
        setOrders(result.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // 🔹 Approve Order
  const handleApproveOrder = async (orderId) => {
    try {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const result = await approveOrderAPI(orderId, reqHeader);

      if (result.status === 200) {
        toast.success("Order approved successfully");
        getallorders(token);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to approve order");
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
    
      <div className="min-h-screen bg-linear-to-r from-white to-gray-500 flex">
        {/* Sidebar */}
        <aside className="w-64 bg-red-600  text-white p-6 shadow-xl hidden md:block">
          <h2 className="text-3xl font-extrabold mb-10">Hotel Panel</h2>
  
          <ul className="space-y-6 text-lg">
            <li
              onClick={() => {
                setmainDiv(true);
                setvieworders(false);
                setAddedFoods(false);
              }}
              className="cursor-pointer hover:text-gray-200"
            >
              Dashboard
            </li>
            <li
              onClick={() => {
                setvieworders(true);
                setmainDiv(false);
                setAddedFoods(false);
              }}
              className="cursor-pointer hover:text-gray-200"
            >
              Orders
            </li>
            <li
              onClick={() => {
                setvieworders(false);
                setmainDiv(false);
                setAddedFoods(true);
              }}
              className="cursor-pointer hover:text-gray-200"
            >
              Added Dishes
            </li>
            <Link to="/add-food">Add Foods</Link>
          </ul>
        </aside>
  
        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          {/* 🔝 HOTEL HEADER */}
          <HotelHeader />
  
          {/* Page Content */}
          <div className="p-8">
            
            {mainDiv && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="bg-white p-6 rounded-2xl shadow">
                    <h3 className="text-gray-400">Total Orders</h3>
                    <p className="text-3xl font-bold text-orange-600 mt-2">
                      {orders.length}
                    </p>
                  </div>
  
                  <div className="bg-white p-6 rounded-2xl shadow">
                    <h3 className="text-gray-400">Revenue</h3>
                    <p className="text-3xl font-bold text-green-600 mt-2">
                      ₹{orders.reduce((sum, o) => sum + o.orderTotal, 0)}
                    </p>
                  </div>
  
                  <div className="bg-white p-6 rounded-2xl shadow">
                    <h3 className="text-gray-400">Pending Orders</h3>
                    <p className="text-3xl font-bold text-amber-600 mt-2">
                      {orders.filter((o) => o.status === "Pending").length}
                    </p>
                  </div>
                </div>
  
                <div className="bg-white rounded-2xl shadow p-6">
                  <h2 className="text-2xl font-semibold mb-4">
                    Recent Orders
                  </h2>
  
                  {orders.length > 0 ? (
                    orders.slice(0, 5).map((order) => (
                      <div
                        key={order._id}
                        className="border-b py-3 flex justify-between"
                      >
                        <div>
                          <p className="font-medium">
                            {order.userMail}
                          </p>
                          <p className="text-sm text-gray-500">
                            {order.status}
                          </p>
                        </div>
                        <p className="font-semibold">
                          ₹{order.orderTotal}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">No recent orders</p>
                  )}
                </div>
              </>
            )}
  
            {/* ================= ORDERS ================= */}
            {vieworder && (
              <div>
                <h1 className="text-2xl font-semibold mb-4">
                  Hotel Orders
                </h1>
  
                {orders.length > 0 ? (
                  orders.map((order) => (
                    <div
                      key={order._id}
                      className="border rounded-lg p-4 mb-4 shadow bg-white"
                    >
                      <p>
                        <strong>Customer:</strong> {order.userMail}
                      </p>
                      <p>
                        <strong>Status:</strong> {order.status}
                      </p>
                      <p>
                        <strong>Total:</strong> ₹{order.orderTotal}
                      </p>
  
                      <div className="mt-2">
                        <strong>Items:</strong>
                        {order.items
                          .filter((item) => item.foodId)
                          .map((item, index) => (
                            <div key={index} className="ml-4">
                              {item.foodId.foodname} × {item.quantity}
                            </div>
                          ))}
                      </div>
  
                      {order.status === "Pending" && (
                        <button
                          onClick={() =>
                            handleApproveOrder(order._id)
                          }
                          className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                        >
                          Approve Order
                        </button>
                      )}
                    </div>
                  ))
                ) : (
                  <p>No orders found</p>
                )}
              </div>
            )}
  
            {/* ================= ADDED FOODS ================= */}
            {addedFoods && <HotelAddedFood />}
          </div>
        </main>
      </div>
    </>
  );
}

export default Hotelhome;
