import React, { useEffect, useState } from "react";
import {
  FaStar,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaUtensils,
} from "react-icons/fa";
import {getHotelInfoAPI } from "../../service/allAPI";
import SERVERURL from "../../service/ServerURL";

function Hotelprofile() {
  const [hotelDetails, sethotelDetails] = useState([]);
  const [token,settoken]=useState("")
  const [openmodal,setopenmodal]=useState(false)

  const fetchHotelInfo = async (storedToken) => {
    try {
      const reqHeader = {
        Authorization: `Bearer ${storedToken}`,
      };
      const result = await getHotelInfoAPI(reqHeader);
      if (result.status == 200) {
        sethotelDetails(result.data);
        console.log(result.data);
        
      }
    } catch (error) {
      console.log(error);
    }
  };

 useEffect(() => {
  const storedToken = sessionStorage.getItem("token");
  settoken(storedToken);

  if (storedToken) {
    fetchHotelInfo(storedToken);
  }
}, []);

  return (
    <>
      <div style={{
  backgroundImage: hotelDetails?.uploadImages?.length
    ? `url(${SERVERURL}/imgUploads/${hotelDetails.uploadImages[0]})`
    : "none",
}}
 className="min-h-screen bg-gray-50">
        {/* Cover Section */}
        <div className="relative h-64 w-full">
          <div className="relative">
            {/* Image Container */}
            <div
              onClick={() => setOpen(!open)}
              className="h-12 w-12 rounded-full overflow-hidden cursor-pointer border-2 border-orange-500"
            >
              <img
                src="https://images.unsplash.com/photo-1555992336-03a23c2b16d1"
                alt="Restaurant"
                className="h-full w-full object-cover"
              />
            </div>

            
            
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10" />

          {/* Edit Button */}
          <button onClick={()=>setopenmodal(true)} className="absolute top-4 right-6 z-20 bg-blue-600 text-white px-5 py-2 rounded-xl shadow hover:bg-blue-700 transition">
            Edit Profile
          </button>

          {/* Restaurant Name & Rating */}
          <div className="absolute bottom-5 left-6 text-white z-20">
            <h1 className="text-3xl font-bold">{hotelDetails.hotelname}</h1>
            <div className="flex items-center gap-1 mt-2">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400 opacity-60" />
              <span className="ml-2 text-sm">4.6 (1200+ ratings)</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-3">About Restaurant</h2>
              <p className="text-gray-600 leading-relaxed">
               {hotelDetails.description}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Cuisines</h2>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="px-4 py-2 bg-gray-100 rounded-full">
                  Indian
                </span>
                <span className="px-4 py-2 bg-gray-100 rounded-full">
                  Chinese
                </span>
                <span className="px-4 py-2 bg-gray-100 rounded-full">
                  Fast Food
                </span>
                <span className="px-4 py-2 bg-gray-100 rounded-full">
                  Arabian
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Popular Dishes</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <img
                  src="https://source.unsplash.com/400x300/?biryani"
                  className="rounded-xl h-32 w-full object-cover"
                />
                <img
                  src="https://source.unsplash.com/400x300/?shawarma"
                  className="rounded-xl h-32 w-full object-cover"
                />
                <img
                  src="https://source.unsplash.com/400x300/?burger"
                  className="rounded-xl h-32 w-full object-cover"
                />
                <img
                  src="https://source.unsplash.com/400x300/?fried-rice"
                  className="rounded-xl h-32 w-full object-cover"
                />
                <img
                  src="https://source.unsplash.com/400x300/?noodles"
                  className="rounded-xl h-32 w-full object-cover"
                />
                <img
                  src="https://source.unsplash.com/400x300/?mandi"
                  className="rounded-xl h-32 w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
              <h2 className="text-xl font-semibold">{hotelDetails.hotelname}</h2>
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <FaPhoneAlt />
                <span>{hotelDetails.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <FaEnvelope />
                <span>{hotelDetails.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <FaClock />
                <span>10:00 AM – 11:30 PM</span>
              </div>
              <div className="flex items-center gap-3 text-green-600 text-sm font-medium">
                <FaUtensils />
                <span>Open Now</span>
              </div>
              <button className="w-full mt-4 py-2 rounded-xl bg-black text-white hover:bg-gray-800 transition">
                Manage Menu
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-3">Profile Status</h2>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-green-500 h-2 rounded-full w-[90%]" />
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Profile 90% completed
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hotelprofile;
