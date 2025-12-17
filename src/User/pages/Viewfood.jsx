import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Header from "../../Common/Header";
import { useParams } from "react-router-dom";
import { addToCartAPI, viewFoodsAPI } from "../../service/allAPI";
import SERVERURL from "../../service/ServerURL";

function Viewfood() {
  const [foodDetails, setfoodDetails] = useState({
    uploadImages: [],
  });
  const [token, settoken] = useState("");
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();

  const handleViewFood = async () => {
    // const token=sessionStorage.getItem("token")
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const result = await viewFoodsAPI(id, reqHeader);
      console.log(result);
      setfoodDetails(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddtoCart = async () => {
    if (!token) {
      alert("PLease login");
      return;
    }

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const result = await addToCartAPI(foodDetails._id, quantity, reqHeader);
      if (result.status == 200) {
        alert("Item added successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const usertoken = sessionStorage.getItem("token");
    settoken(usertoken);
  }, []);
  useEffect(() => {
    if (token) {
      handleViewFood();
    }
  }, [token]);

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <Header />

        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Food Image */}
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <img
              src={`${SERVERURL}/imgUploads/${foodDetails.uploadImages[0]}`}
              alt="Food"
              className="w-full h-[380px] object-cover"
            />
          </div>

          {/* Food Info */}
          <div className="bg-white p-8 rounded-2xl shadow">
            <h1 className="text-4xl font-bold mb-3">{foodDetails.foodname}</h1>

            {/* Rating */}
            <div className="flex items-center gap-1 text-yellow-500 mb-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className="text-gray-700 ml-2 text-sm">(120 reviews)</span>
            </div>

            {/* Price */}
            <p className="text-3xl text-red-600 font-bold mb-6">
              ₹{foodDetails.price}
            </p>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-6 line-clamp-3 break-words">
              {foodDetails.description}
            </p>

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                className="px-4 py-2 bg-gray-200 rounded-lg text-lg"
              >
                -
              </button>

              <span className="text-xl font-semibold">{quantity}</span>

              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 bg-gray-200 rounded-lg text-lg"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddtoCart}
              type="button"
              className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl text-lg"
            >
              Add to Cart
            </button>

            {/* Buy Now Button */}
            <button className="w-full mt-3 bg-black hover:bg-gray-900 text-white font-semibold py-3 rounded-xl text-lg">
              Buy Now
            </button>
          </div>
        </div>

        {/* More Suggestions */}
        <div className="max-w-6xl mx-auto px-6 mt-14">
          <h2 className="text-2xl font-semibold mb-6">Similar Items</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Card */}
            <div className="bg-white rounded-2xl shadow p-4">
              <img
                className="rounded-xl h-44 w-full object-cover"
                src="https://images.unsplash.com/photo-1615719413546-198b47c7da83"
              />
              <h3 className="font-semibold text-lg mt-3">
                Paneer Butter Masala
              </h3>
              <p className="text-red-600 font-bold mt-1">₹150</p>
            </div>

            {/* Card */}
            <div className="bg-white rounded-2xl shadow p-4">
              <img
                className="rounded-xl h-44 w-full object-cover"
                src="https://images.unsplash.com/photo-1626082927389-e92e6978cf28"
              />
              <h3 className="font-semibold text-lg mt-3">Beef Roast</h3>
              <p className="text-red-600 font-bold mt-1">₹200</p>
            </div>

            {/* Card */}
            <div className="bg-white rounded-2xl shadow p-4">
              <img
                className="rounded-xl h-44 w-full object-cover"
                src="https://images.unsplash.com/photo-1618219761799-7dddc2e5fca2"
              />
              <h3 className="font-semibold text-lg mt-3">Shawarma Plate</h3>
              <p className="text-red-600 font-bold mt-1">₹130</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Viewfood;
