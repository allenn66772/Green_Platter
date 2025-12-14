import React, { useEffect, useState } from "react";
import Hotelsidebar from "../components/Hotelsidebar";
import Header from "../../Common/Header";
import { toast } from "react-toastify";
import { addFoodAPI } from "../../service/allAPI";
import { img } from "framer-motion/client";

function Addfood() {
  const [preview, setpreview] = useState("");
  const [token,settoken]=useState("")
  const [allUploadImages, setallUploadImages] = useState([]);
  const [foodDetails, setfoodDetails] = useState({
    foodname: "",
    price: "",
    category: "",
    description: "",
    uploadImages: [],
  });
  console.log(foodDetails);

  const handleFile = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setfoodDetails({
      ...foodDetails,
      uploadImages: [...foodDetails.uploadImages, e.target.files[0]],
    });

    setallUploadImages([...allUploadImages, url]);
    setpreview(url);
  };

  //add food
  const Handleaddfood=async()=>{
    const{foodname,price,category,description,uploadImages}=foodDetails
    if(!foodname || !price || !category || !description || uploadImages.length===0){
      toast.info("Fill all fields completely")
    }else{
      const reqHeader={Authorization:`Bearer ${token}`}
      const reqBody=new FormData()

      for(let key in foodDetails){
        if(key !=="uploadImages")reqBody.append(key,foodDetails[key])
          else uploadImages.forEach((img)=>reqBody.append("uploadImages",img))
      }
   
       try {
                  const result=await addFoodAPI(reqBody,reqHeader)
                  console.log(result);
                  if(result.status == 200){
                    toast.success("Food added successfully")
                  }else{
                    toast.error("something went wrong")
                  }
                  

       } catch (error) {
        console.log(error);
        
        
       }
    }
  }
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      settoken(sessionStorage.getItem("token"))
    }
  },[])
  return (
    <>
      <Header />

      <div className="flex">
        {/* Sidebar */}
        {/* <Hotelsidebar /> */}

        {/* Main Content */}
        <div className="flex-1 p-8 bg-gray-100 min-h-screen">
          <h1 className="text-3xl font-semibold mb-6">Add New Food Item</h1>

          {/* Center Card */}
          <div className="flex justify-center">
            <div className="bg-white p-8 shadow rounded-2xl w-full max-w-4xl">
              <form className="space-y-6">
                {/* Food Name */}
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2">
                    Food Name
                  </label>
                  <input
                    type="text"
                    value={foodDetails.foodname}
                    onChange={(e) =>
                      setfoodDetails({
                        ...foodDetails,
                        foodname: e.target.value,
                      })
                    }
                    placeholder="Enter food name"
                    className="w-full p-3 border rounded-xl focus:outline-none"
                  />
                </div>

                {/* Price */}
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2">
                    Price (₹)
                  </label>
                  <input
                    type="number"
                    value={foodDetails.price}
                    onChange={(e) =>
                      setfoodDetails({
                        ...foodDetails,
                        price: e.target.value,
                      })
                    }
                    placeholder="Enter food price"
                    className="w-full p-3 border rounded-xl focus:outline-none"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={foodDetails.category}
                    onChange={(e) =>
                      setfoodDetails({
                        ...foodDetails,
                        category: e.target.value,
                      })
                    }
                    className="w-full p-3 border rounded-xl focus:outline-none"
                  >
                    <option value="">Select category</option>
                    <option>Biriyani</option>
                    <option>Snacks</option>
                    <option>Drinks</option>
                    <option>Cakes</option>
                    <option>Fried Items</option>
                  </select>
                </div>

                {/* Description & Image */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Description */}
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      rows="6"
                      value={foodDetails.description}
                      onChange={(e) =>
                        setfoodDetails({
                          ...foodDetails,
                          description: e.target.value,
                        })
                      }
                      placeholder="Enter description..."
                      className="w-full p-3 border rounded-xl focus:outline-none"
                    ></textarea>
                  </div>

                  {/* Upload & Preview */}
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                      Food Image
                    </label>

                    <div className="flex gap-4">
                      {/* Upload Box */}
                      <label className="w-36 h-36 border-2 border-dashed border-gray-400 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
                        <span className="text-gray-500 text-sm">Upload</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFile}
                          className="hidden"
                        />
                      </label>

                      {/* Preview Box */}
                      <div className="w-36 h-36 border rounded-xl flex items-center justify-center bg-gray-100 overflow-hidden">
                        {preview ? (
                          <img
                            src={preview}
                            alt="Preview"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-gray-400 text-sm">Preview</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <button onClick={Handleaddfood}
                  type="button"
                  className="w-full bg-red-600 text-white py-3 rounded-xl text-lg font-medium hover:bg-red-700 transition"
                >
                  Add Food
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addfood;
