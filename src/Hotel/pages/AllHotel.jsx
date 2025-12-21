import React, { useEffect, useState } from "react";
import Header from "../../Common/Header";
import { getAllHotelsAPI } from "../../service/allAPI";

function AllHotel() {
  const [hotels, setHotels] = useState([]);

  const fetchHotels = async () => {
    try {
      const result = await getAllHotelsAPI();
      if (result.status === 200) {
        setHotels(result.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-100 p-10">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Available Hotels
        </h1>

        {hotels.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {hotels.map((hotel) => (
              <div
                key={hotel._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6"
              >
                {/* Profile Picture */}
                <div className="flex justify-center -mt-14 mb-4">
                  <div className="h-28 w-28 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-200">
                    <img
                      src={
                        hotel.profileImage
                          ? hotel.profileImage
                          : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      }
                      alt={hotel.hotelname}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Hotel Name */}
                <h2 className="text-xl font-semibold text-center mb-2">
                  {hotel.hotelname}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm text-center mb-4 break-words">
                  {hotel.description || "No description available"}
                </p>

                {/* Contact Info */}
                <div className="flex flex-col gap-2 text-sm text-gray-600 text-center">
                  <div> {hotel.phone || "Not provided"}</div>
                  <div> {hotel.email}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No hotels found
          </p>
        )}
      </div>
    </>
  );
}

export default AllHotel;
