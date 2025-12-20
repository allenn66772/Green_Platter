import React, { useEffect, useState } from "react";
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import { getHotelAddedFoodAPI } from "../../service/allAPI";
import SERVERURL from "../../service/ServerURL";

function HotelAddedFood() {
  const [hotelFoods, sethotelFoods] = useState([]);
  const [token, settoken] = useState("");

  const hotelAddedfoods = async () => {
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    const result = await getHotelAddedFoodAPI(reqHeader);
    sethotelFoods(result.data);
    console.log(result.data);
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
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Added Foods</h1>

        {hotelFoods.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Food Card 1 */}
           {hotelFoods.map((item,index)=>(
            <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
              <img
                src={`${SERVERURL}/imgUploads/${item.uploadImages[0]}`}
                alt={item.foodname}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.foodname}
                </h2>
                <p className="text-red-600 font-bold">₹{item.price}.rsj</p>
              </div>
            </div>
           )) }
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10">no food Added</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default HotelAddedFood;
