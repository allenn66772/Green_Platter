import React, { useEffect, useState } from "react";
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import { getAllFoodstoUserAPI } from "../../service/allAPI";
import { CiSearch } from "react-icons/ci";
import SERVERURL from "../../service/ServerURL";
import { Link } from "react-router-dom";

function Allfoods() {
  const [Allfoods, setAllfoods] = useState([]);
  const [searchKey, setsearchkey] = useState("");
  const [tempFoods, settempFoods] = useState([]);
  const [allCategory, setAllCategory] = useState([]);

  const getAllFoods = async () => {
    try {
      const result = await getAllFoodstoUserAPI(searchKey);
      if (result.status === 200) {
        setAllfoods(result.data);
        settempFoods(result.data);

        const tempCategory = result.data.map((item) => item.category);
        setAllCategory(["No Filter", ...new Set(tempCategory)]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const categoryFilter = (category) => {
    if (category === "No Filter") {
      setAllfoods(tempFoods);
    } else {
      setAllfoods(
        tempFoods.filter(
          (item) => item.category.toLowerCase() === category.toLowerCase()
        )
      );
    }
  };

  useEffect(() => {
    getAllFoods();
  }, [searchKey]);

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <Header />

        {/* Search */}
        <div className="w-full flex mt-6 justify-center items-center gap-2">
          <input
            type="text"
            value={searchKey}
            placeholder="Search Your Favourite Food...."
            onChange={(e) => setsearchkey(e.target.value)}
            className="w-80 h-12 px-4 rounded-l-2xl border outline-none focus:ring-2 focus:ring-red-400"
          />
          <button className="h-12 w-12 bg-red-500 text-white rounded-r-2xl flex items-center justify-center hover:bg-red-600">
            <CiSearch size={22} />
          </button>
        </div>

        {/* Filter Section */}
        <div className="w-full bg-gray-100 p-4 mb-3">
          <h2 className="text-lg font-semibold text-gray-700 ms-4 mb-3">
            Filter by Category
          </h2>

          <div className="flex flex-wrap gap-3 ms-3">
            {allCategory.map((item, index) => (
              <button
                key={index}
                onClick={() => categoryFilter(item)}
                className="px-4 py-2 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Title */}
        <div className="px-6 py-8">
          <h1 className="text-3xl font-semibold">All Foods</h1>
          <p className="text-gray-600 mt-1">
            Browse delicious dishes from all hotels
          </p>
        </div>

        {/* Foods Grid */}
        <div className="px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Allfoods.length > 0 ? (
            Allfoods.map((item) => (
              <div
                key={item._id}
                className="bg-white shadow rounded-2xl overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={`${SERVERURL}/imgUploads/${item.uploadImages[0]}`}
                  alt={item.foodname}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{item.foodname}</h2>
                  <p className="text-gray-600 text-sm mt-1">
                    {item.hotelname}
                  </p>
                  <p className="text-red-600 text-lg font-bold mt-2">
                    ₹{item.price}
                  </p>
                  <Link  to={`/view-food/${item._id}`}  className="mt-4 w-full bg-red-600 text-white py-2 rounded-xl hover:bg-red-700">
                    View Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No foods available at the moment 🍽️
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Allfoods;
