import React, { useEffect, useState } from "react";
import Header from "../../Common/Header";
import { getFromCartAPI, createOrderAPI, createPaymentAPI } from "../../service/allAPI";

import { loadStripe } from "@stripe/stripe-js";

function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [token, setToken] = useState("");

  const [orderDetails, setOrderDetails] = useState({
    fullname: "",
    phone: "",
    deliveryaddress: "",
  });
const stripePromise = loadStripe(
  "pk_test_51ScgRSFRXLWOzbZMwK5DBZTnNI3S70fpkUlbSXKgqFgQyfbsxxu4qdTurhOJAHvXWUNOjChUtKbWmtJXnRqwQBWW00juZWMdKZ"
);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const DELIVERY_FEE = 40;

  // 🛒 Get Cart
  const getFoodfromCart = async (token) => {
    try {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const result = await getFromCartAPI(reqHeader);

      setCartItems(result?.data?.items || []);
      setSubtotal(result?.data?.subtotal || 0);
      setTotalItems(result?.data?.totalItems || 0);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      getFoodfromCart(storedToken);
    }
  }, []);

  // 🧾 Place Order
  // const handlePlaceOrder = async () => {
  //   if (isPlacingOrder) return; // 🚫 block duplicate calls

  //   if (
  //     !orderDetails.fullname ||
  //     !orderDetails.phone ||
  //     !orderDetails.deliveryaddress ||
  //     !paymentMethod
  //   ) {
  //     alert("Please fill all details");
  //     return;
  //   }

  //   try {
  //     setIsPlacingOrder(true);

  //     const reqHeader = {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //     };

  //     const reqBody = {
  //       items: cartItems.map((item) => ({
  //         foodId: item.foodId._id,
  //         quantity: item.quantity,
  //         price: item.foodId.price,
  //       })),
  //       paymentMethod,
  //       deliveryAddress: {
  //         fullname: orderDetails.fullname,
  //         phone: orderDetails.phone,
  //         address: orderDetails.deliveryaddress,
  //       },
  //     };

  //     const result = await createOrderAPI(reqBody, reqHeader);

  //     alert("Order placed successfully ✅");
  //   } catch (err) {
  //     console.error(err.response?.data || err.message);
  //     alert("Failed to place order ❌");
  //   } finally {
  //     setIsPlacingOrder(false);
  //   }
  // };

  // const handlePurchase = async () => {
  //   if (
  //     !orderDetails.fullname ||
  //     !orderDetails.phone ||
  //     !orderDetails.deliveryaddress ||
  //     !paymentMethod
  //   ) {
  //     alert("Please fill all details");
  //     return;
  //   }

  //   const reqHeader = {
  //     Authorization: `Bearer ${token}`,
  //     "Content-Type": "application/json",
  //   };

  //   const reqBody = {
  //     items: cartItems.map((item) => ({
  //       _id: item.foodId._id,
  //       foodname: item.foodId.foodname,
  //       price: item.foodId.price,
  //       quantity: item.quantity,
  //       category: item.foodId.category,
  //       image: item.foodId.image,
  //     })),
  //     paymentMethod,
  //     deliveryAddress: orderDetails,
  //   };

  //   try {
  //     const result = await createOrderAPI(reqBody, reqHeader);

  //     // 🔴 CARD → Redirect to Stripe
  //     if (paymentMethod === "CARD") {
  //       window.location.href = result.data.checkoutSessionUrl;
  //     } else {
  //       alert("Order placed successfully");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     alert("Order failed ❌");
  //   }
  // };

const handlePurchase = async () => {
  //  Basic validation
  if (
    !orderDetails.fullname ||
    !orderDetails.phone ||
    !orderDetails.deliveryaddress ||
    !paymentMethod
  ) {
    alert("Please fill all details");
    return;
  }

  const token = sessionStorage.getItem("token");
  if (!token) {
    alert("Please login");
    return;
  }

  const reqHeader = {
    Authorization: `Bearer ${token}`,
   
  };

 
 const reqBody = {
  items: cartItems.map((item) => ({
    foodId: item.foodId._id,
    quantity: item.quantity,
  })),
  paymentMethod,
  deliveryAddress: {
    fullname: orderDetails.fullname,
    phone: orderDetails.phone,
    address: orderDetails.deliveryaddress,
  },
};

  try {
    setIsPlacingOrder(true);

    const result = await createOrderAPI(reqBody, reqHeader);

    //  CARD → STRIPE
    if (paymentMethod === "CARD") {
      const stripe = await stripePromise;

      const sessionUrl = result?.data?.checkoutSessionUrl;

      if (!sessionUrl) {
        alert("Stripe session creation failed");
        return;
      }

      //  Redirect to Stripe Checkout
      window.location.href = sessionUrl;
    } 
    //  COD / UPI
    else {
      alert("Order placed successfully ");
    }

  } catch (err) {
    console.error(err.response?.data || err.message);
    alert("Order failed ");
  } finally {
    setIsPlacingOrder(false);
  }
};


  const grandTotal = subtotal + DELIVERY_FEE;

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/*  DELIVERY DETAILS */}
        <div className="bg-white p-6 shadow rounded-2xl lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Delivery Information</h2>

          <div className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-xl"
              onChange={(e) =>
                setOrderDetails({ ...orderDetails, fullname: e.target.value })
              }
            />

            <input
              type="number"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-xl"
              onChange={(e) =>
                setOrderDetails({ ...orderDetails, phone: e.target.value })
              }
            />

            <textarea
              rows="3"
              placeholder="Delivery Address"
              className="w-full p-3 border rounded-xl"
              onChange={(e) =>
                setOrderDetails({
                  ...orderDetails,
                  deliveryaddress: e.target.value,
                })
              }
            />

            {/* 💳 PAYMENT */}
            <div className="flex gap-6">
              {["COD", "UPI", "CARD"].map((method) => (
                <label key={method} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value={method}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  {method}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* ORDER SUMMARY */}
        <div className="bg-white p-6 shadow rounded-2xl">
          <h2 className="text-xl font-semibold mb-4">
            Order Summary ({totalItems})
          </h2>

          <div className="space-y-3">
            {cartItems.map((item) => (
              <div key={item._id} className="flex justify-between text-sm">
                <span>
                  {item.foodId.foodname} × {item.quantity}
                </span>
                <span>₹{item.itemTotal}</span>
              </div>
            ))}

            <hr />

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>₹{DELIVERY_FEE}</span>
            </div>

            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{grandTotal}</span>
            </div>

            <button
              onClick={handlePurchase}
              disabled={isPlacingOrder}
              className={`w-full mt-4 py-3 rounded-xl text-white
    ${isPlacingOrder ? "bg-gray-400" : "bg-red-600 hover:bg-red-700"}`}
            >
              {isPlacingOrder ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
