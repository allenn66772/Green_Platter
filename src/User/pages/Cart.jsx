import React, { useEffect, useState } from "react";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { deleteFromCartAPI, getFromCartAPI } from "../../service/allAPI";
import Header from "../../Common/Header";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [token, setToken] = useState("");

  const DELIVERY_FEE = 40;

  const getFoodfromCart = async (token) => {
    try {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const result = await getFromCartAPI(reqHeader);

      setCartItems(result?.data?.items || []);
      setSubtotal(result?.data?.subtotal || 0);
      setTotalItems(result?.data?.totalItems || 0);
    } catch (error) {
      console.error(error);
      setCartItems([]);
      setSubtotal(0);
      setTotalItems(0);
    }
  };

  const RemoveItemFromCart=async(foodId)=>{
    try {
      const reqHeader={
         Authorization: `Bearer ${token}`,
        }
      await  deleteFromCartAPI(foodId,reqHeader)
      getFoodfromCart(token)
    } catch (error) {
      console.log(error);
      
      
    }
  }

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      getFoodfromCart(storedToken);
    }
  }, []);

  const grandTotal = subtotal + DELIVERY_FEE;

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-100 px-4 py-6 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* 🛒 CART ITEMS */}
          <div className="lg:col-span-2">
            <h1 className="text-xl sm:text-2xl font-semibold mb-4">
              Your Cart ({totalItems} items)
            </h1>

            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-xl shadow p-4 mb-4 flex flex-col sm:flex-row gap-4"
                >
                  <img
                    src="https://via.placeholder.com/120"
                    alt={item.foodId.foodname}
                    className="w-full sm:w-28 h-40 sm:h-28 rounded-lg object-cover"
                  />

                  <div className="flex-1">
                    <h2 className="text-lg font-medium">
                      {item.foodId.foodname}
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                      ₹{item.foodId.price} per item
                    </p>

                    <div className="flex items-center gap-3 mt-4">
                      <button className="p-2 border rounded-full hover:bg-gray-100">
                        <FaMinus size={12} />
                      </button>

                      <span className="font-medium text-sm">
                        {item.quantity}
                      </span>

                      <button className="p-2 border rounded-full hover:bg-gray-100">
                        <FaPlus size={12} />
                      </button>
                    </div>
                  </div>

                  <div className="flex sm:flex-col justify-between items-end">
                    <p className="font-semibold text-lg">
                      ₹{item.itemTotal}
                    </p>

                    <button onClick={() => RemoveItemFromCart(item.foodId._id)}type="button" className="text-red-500 hover:text-red-600 mt-2">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white p-8 rounded-xl text-center text-gray-500 shadow">
                Your cart is empty 🛒
              </div>
            )}
          </div>

          {/* 🧾 ORDER SUMMARY */}
          <div className="bg-white rounded-xl shadow p-6 h-fit lg:sticky mt-12 lg:top-24">
            <h2 className="text-lg font-semibold mb-4">
              Order Summary
            </h2>

            <div className="flex justify-between text-sm mb-3">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between text-sm mb-3">
              <span>Delivery Fee</span>
              <span>₹{DELIVERY_FEE}</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between font-semibold text-lg mb-6">
              <span>Total</span>
              <span>₹{grandTotal}</span>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
              Proceed to Checkout
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default Cart;
