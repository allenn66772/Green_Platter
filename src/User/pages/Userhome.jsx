import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import { getAllFoodsInHomeAPI } from "../../service/allAPI";
import SERVERURL from "../../service/ServerURL";

function Userhome() {
  const [homeFoods, sethomeFoods] = useState([]);

  const getHomeFoods = async () => {
    const result = await getAllFoodsInHomeAPI();
    console.log(result);
    sethomeFoods(result.data);
  };

  useEffect(() => {
    getHomeFoods();
  }, []);

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <section className="px-6 md:px-20 py-16 flex flex-col md:flex-row items-center gap-10">
          {/* Text */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Delicious Food,
              <br />
              <span className="text-red-600">Delivered To You</span>
            </h1>

            <p className="text-gray-600 mt-4 text-lg">
              Order tasty dishes from top hotels around you. Fast delivery, easy
              checkout, and fresh food at your doorstep.
            </p>

            <div className="mt-6 flex gap-4">
              <Link
                to="/foods"
                className="bg-red-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-red-700"
              >
                Order Now
              </Link>

              <Link
                to="/login"
                className="border border-red-600 text-red-600 px-6 py-3 rounded-xl text-lg hover:bg-red-600 hover:text-white"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
              alt="food"
              className="rounded-3xl shadow-xl w-full max-w-md"
            />
          </div>
        </section>

        {/* Popular Section */}
        <section className="px-6 md:px-20 mt-10">
          <h2 className="text-3xl font-semibold mb-6">Popular Foods</h2>

          {homeFoods.length>0 ?<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            {homeFoods.map((item)=>(
               <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
              <img
                src={`${SERVERURL}/imgUploads/${item.uploadImages[0]}`}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{item.foodname}</h3>
                <p className="text-red-600 font-bold mt-1">₹{item.price}</p>
              </div>
            </div>
            ))} 

          </div>:
          <p>Loading......</p>}
        </section>

        {/* CTA Section */}
        <section className="px-6 md:px-20 py-16 mt-16 bg-white text-center">
          <h2 className="text-3xl font-semibold">
            Ready to taste something delicious?
          </h2>
          <p className="text-gray-600 mt-3">
            Choose your favorite hotel and start ordering!
          </p>

          <Link
            to="/foods"
            className="inline-block mt-6 bg-red-600 text-white px-8 py-3 rounded-xl text-lg hover:bg-red-700"
          >
            Explore Foods
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Userhome;
