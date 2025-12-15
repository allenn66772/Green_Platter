import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import { getAllFoodsInHomeAPI } from "../../service/allAPI";
import SERVERURL from "../../service/ServerURL";

function Userhome() {
  const [homeFoods, sethomeFoods] = useState([]);
  const [token, settoken] = useState("");

  const navigate = useNavigate();

  const getHomeFoods = async () => {
    const result = await getAllFoodsInHomeAPI();
    console.log(result);
    sethomeFoods(result.data);
  };

  const exploreAllfoods = () => {
    if (!token) {
      navigate("/user-login");
    } else {
      navigate("/all-foods");
    }
  };

  // fetch foods
  useEffect(() => {
    getHomeFoods();
  }, []);

  // get token once
  useEffect(() => {
    const usertoken = sessionStorage.getItem("token");
    settoken(usertoken);
  }, []);

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <Header />

        {/* Hero Section */}
        <section className="px-6 md:px-20 py-16 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Delicious Food,
              <br />
              <span className="text-red-600">Delivered To You</span>
            </h1>

            <p className="text-gray-600 mt-4 text-lg">
              Order tasty dishes from top hotels around you.
            </p>

            <div className="mt-6 flex gap-4">
              <Link
                to="/foods"
                className="bg-red-600 text-white px-6 py-3 rounded-xl"
              >
                Order Now
              </Link>

              <Link
                to="/login"
                className="border border-red-600 text-red-600 px-6 py-3 rounded-xl"
              >
                Login
              </Link>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <img
              src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
              alt="food"
              className="rounded-3xl shadow-xl w-full max-w-md"
            />
          </div>
        </section>

        {/* Popular Foods */}
        <section className="px-6 md:px-20 mt-10">
          <h2 className="text-3xl font-semibold mb-6">Popular Foods</h2>

          {homeFoods.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {homeFoods.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-2xl shadow overflow-hidden"
                >
                  <img
                    src={`${SERVERURL}/imgUploads/${item.uploadImages[0]}`}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">
                      {item.foodname}
                    </h3>
                    <p className="text-red-600 font-bold">
                      ₹{item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </section>

        {/* CTA */}
        <section className="px-6 md:px-20 py-16 mt-16 bg-white text-center">
          <button
            onClick={exploreAllfoods}
            className="bg-red-600 text-white px-8 py-3 rounded-xl"
          >
            Explore Foods
          </button>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Userhome;
