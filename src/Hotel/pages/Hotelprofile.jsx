import React, { useEffect, useState } from "react";
import {
  FaStar,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaUtensils,
} from "react-icons/fa";
import { getHotelInfoAPI, updateHotelProfileAPI } from "../../service/allAPI";
import SERVERURL from "../../service/ServerURL";
import { toast } from "react-toastify";

function Hotelprofile() {
  const [hotelDetails, sethotelDetails] = useState({});
  const [token, settoken] = useState("");

  const [modalStatus, setmodalStatus] = useState(false);
  const [mainDiv, setmainDiv] = useState(true);

  const [fetchedData, setfetchedData] = useState({
    hotelname: "",
    phone: "",
    password: "",
    description: "",
    profile: null,
    uploadImages: null,
  });

  const [previewProfile, setPreviewProfile] = useState("");
  const [previewHotelImage, setPreviewHotelImage] = useState("");

  /* ---------------- FETCH HOTEL INFO ---------------- */
  const fetchHotelInfo = async (storedToken) => {
    try {
      const reqHeader = {
        Authorization: `Bearer ${storedToken}`,
      };
      const result = await getHotelInfoAPI(reqHeader);
      if (result.status === 200) {
        sethotelDetails(result.data);
        setfetchedData({
          ...result.data,
          password: "",
          profile: null,
          uploadImages: null,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    settoken(storedToken);
    if (storedToken) fetchHotelInfo(storedToken);
  }, []);

  /* ---------------- FILE UPLOAD HANDLERS ---------------- */
  const profileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setfetchedData({ ...fetchedData, profile: file });
    setPreviewProfile(URL.createObjectURL(file));
  };

  const uploadHotelImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setfetchedData({ ...fetchedData, uploadImages: file });
    setPreviewHotelImage(URL.createObjectURL(file));
  };
 
  // update profile
  const handleUpdateProfile = async () => {
  try {
    const token = sessionStorage.getItem("token");

    if (!token) {
      toast.error("Unauthorized");
      return;
    }

    const reqHeader = {
      Authorization: `Bearer ${token}`,
     
    };

    const formData = new FormData();
    formData.append("hotelname", fetchedData.hotelname);
    formData.append("phone", fetchedData.phone);
    formData.append("description", fetchedData.description);

    // append password only if entered
    if (fetchedData.password) {
      formData.append("password", fetchedData.password);
    }

    // append profile image if selected
    if (fetchedData.profile) {
      formData.append("profile", fetchedData.profile);
    }

    // append hotel image if selected
    if (fetchedData.uploadImages) {
      formData.append("uploadImages", fetchedData.uploadImages);
    }

    const result = await updateHotelProfileAPI(formData, reqHeader);

    if (result.status === 200) {
      toast.success("Profile updated successfully");
      sethotelDetails(result.data);
      setmodalStatus(false);
      setmainDiv(true);
    }
  } catch (error) {
    console.error(error);
   
  }
};
   




  /* ---------------- CLEANUP OBJECT URL ---------------- */
  useEffect(() => {
    return () => {
      if (previewProfile) URL.revokeObjectURL(previewProfile);
      if (previewHotelImage) URL.revokeObjectURL(previewHotelImage);
    };
  }, [previewProfile, previewHotelImage]);



  return (
    <>
      {/* ================= MAIN PROFILE ================= */}
    {mainDiv && (
  <div className="min-h-screen bg-gray-50">

    {/* ================= COVER ================= */}
    <div
      style={{
        backgroundImage: hotelDetails?.uploadImages
          ? `url(${SERVERURL}/imgUploads/${hotelDetails.uploadImages})`
          : "none",
      }}
      className="relative h-64 w-full bg-gray-300 bg-cover bg-center"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Edit Button */}
      <button
        onClick={() => {
          setmodalStatus(true);
          setmainDiv(false);
        }}
        className="absolute top-4 right-6 z-30 bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700"
      >
        Edit Profile
      </button>

      {/* Profile Picture */}
      <div className="absolute -bottom-12 left-6 z-30">
        <div className="h-28 w-28 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-200">
          <img
            src={
              hotelDetails?.profile
                ? `${SERVERURL}/imgUploads/${hotelDetails.profile}`
                : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Hotel Name & Rating */}
      <div className="absolute bottom-5 left-40 text-white z-30">
        <h1 className="text-3xl font-bold">
          {hotelDetails.hotelname}
        </h1>
        <div className="flex items-center gap-1 mt-2">
          {[1, 2, 3, 4].map((i) => (
            <FaStar key={i} className="text-yellow-400" />
          ))}
          <FaStar className="text-yellow-400 opacity-60" />
          <span className="ml-2 text-sm">4.6 (1200+ ratings)</span>
        </div>
      </div>
    </div>

    {/* ================= CONTENT ================= */}
    <div className="max-w-6xl mx-auto px-6 pt-24 pb-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

      {/* LEFT SECTION */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-3">
            About Restaurant
          </h2>
          <p className="text-gray-600 break-words whitespace-normal">
            {hotelDetails.description}
          </p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="space-y-6">
        <div className="bg-white rounded-2xl shadow p-6 space-y-4">
          <h2 className="text-xl font-semibold">
            {hotelDetails.hotelname}
          </h2>

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
        </div>
      </div>
    </div>
  </div>
)}


      {/* ================= MODAL ================= */}
      {modalStatus && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white w-full max-w-4xl rounded-2xl p-6 md:p-10">
            <h1 className="text-2xl font-semibold text-center mb-6">
              Edit Hotel Profile
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* LEFT */}
              <div>
                <input
                  value={fetchedData.hotelname}
                  onChange={(e) =>
                    setfetchedData({
                      ...fetchedData,
                      hotelname: e.target.value,
                    })
                  }
                  placeholder="Hotel Name"
                  className="p-3 w-full mb-4 rounded-xl border"
                />

                <input
                  value={fetchedData.phone}
                  onChange={(e) =>
                    setfetchedData({
                      ...fetchedData,
                      phone: e.target.value,
                    })
                  }
                  placeholder="Phone Number"
                  className="p-3 w-full mb-4 rounded-xl border"
                />

                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) =>
                    setfetchedData({
                      ...fetchedData,
                      password: e.target.value,
                    })
                  }
                  className="p-3 w-full mb-4 rounded-xl border"
                />

                <textarea
                  rows={4}
                  value={fetchedData.description}
                  onChange={(e) =>
                    setfetchedData({
                      ...fetchedData,
                      description: e.target.value,
                    })
                  }
                  placeholder="Hotel Description"
                  className="p-3 w-full rounded-xl border"
                />
              </div>

              {/* RIGHT */}
              <div className="space-y-6">
                {/* Profile Image */}
                <div>
                  <p className="font-medium mb-2">Profile Image</p>
                  <label className="flex items-center gap-4 cursor-pointer">
                    <div className="h-24 w-24 rounded-full overflow-hidden border">
                      <img
                        src={
                          previewProfile ||
                          "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        }
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="text-blue-600 font-medium">
                      Upload Profile
                    </span>
                    <input
                      type="file"
                      hidden
                      accept="image/*"
                      onChange={profileUpload}
                    />
                  </label>
                </div>

                {/* Hotel Image */}
                <div>
                  <p className="font-medium mb-2">Hotel Image</p>
                  <label className="cursor-pointer text-blue-600 font-medium block mb-2">
                    Upload Hotel Image
                    <input
                      type="file"
                      hidden
                      accept="image/*"
                      onChange={uploadHotelImage}
                    />
                  </label>

                  {previewHotelImage && (
                    <img
                      src={previewHotelImage}
                      className="h-32 w-full object-cover rounded-xl border"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="flex justify-end gap-3 mt-8">
              <button
                onClick={() => {
                  setmodalStatus(false);
                  setmainDiv(true);
                }}
                className="px-5 py-2 rounded-xl bg-gray-300"
              >
                Cancel
              </button>

              <button onClick={handleUpdateProfile} className="px-5 py-2 rounded-xl bg-green-600 text-white">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Hotelprofile;
