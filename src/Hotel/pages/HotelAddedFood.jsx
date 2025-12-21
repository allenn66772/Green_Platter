import React, { useEffect, useState } from "react";
import Footer from "../../Common/Footer";
import { deleteFoodsAPI, getHotelAddedFoodAPI } from "../../service/allAPI";
import SERVERURL from "../../service/ServerURL";
import { toast } from "react-toastify";

function HotelAddedFood() {
  const [hotelFoods, sethotelFoods] = useState([]);
  const [token, settoken] = useState("");

  // fetch hotel foods
  const hotelAddedfoods = async () => {
    try {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const result = await getHotelAddedFoodAPI(reqHeader);
      sethotelFoods(result.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch foods");
    }
  };

  // delete food
  const handleDeleteFood = async (foodId) => {
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const result = await deleteFoodsAPI(foodId, reqHeader);

      if (result.status === 200) {
        toast.success("Food deleted successfully");
        hotelAddedfoods(); // refresh list
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete food");
    }
  };

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      settoken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      hotelAddedfoods();
    }
  }, [token]);

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Added Foods
        </h1>

        {hotelFoods.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {hotelFoods.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                <img
                  src={
                    item.uploadImages?.length > 0
                      ? `${SERVERURL}/imgUploads/${item.uploadImages[0]}`
                      : "https://via.placeholder.com/300"
                  }
                  alt={item.foodname}
                  className="h-40 w-full object-cover"
                />

                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.foodname}
                  </h2>

                  <p className="text-red-600 font-bold">
                    ₹{item.price}
                  </p>

                  <div className="flex gap-3 mt-3">
                    {/* Update button (future use) */}
                    <button
                      className="bg-green-600 text-white rounded-2xl px-4 py-2 hover:bg-white hover:text-green-600 border border-green-600"
                    >
                      Update
                    </button>

                    {/* Delete button */}
                    <button
                      onClick={() => handleDeleteFood(item._id)}
                      className="bg-red-600 text-white rounded-2xl px-4 py-2 hover:bg-white hover:text-red-600 border border-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10">
            No food added
          </p>
        )}
      </div>

      <Footer />
    </>
  );
}

export default HotelAddedFood;
