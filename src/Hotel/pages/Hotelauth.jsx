import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginHotelAPI, registerHotelAPI } from "../../service/allAPI";
import { GoogleLogin } from '@react-oauth/google';
function Hotelauth({register}) {
     const [showPassword, setShowPassword] = useState(false);
     const [hotelDetails, sethotelDetails] = useState({
    hotelname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  console.log(hotelDetails);
  const navigate=useNavigate()

  const HandleRegister=async()=>{
    const{hotelname,email,password,confirmpassword}=hotelDetails
    if(!hotelname || !email || !password || !confirmpassword){
      toast.warning("Fill All Fields Completety")
    }else{
      const result=await registerHotelAPI(hotelDetails)
      console.log(result);
      if(result.status==200){
        toast.success("Hotel Registered Successfully")
        sethotelDetails({
          hotelname:"",
          email:"",
          password:"",
          confirmpassword:""
        })
        navigate("/hotel-login")
      }else if(result.status==404){
        toast.error(result.response.data)
         sethotelDetails({
          hotelname:"",
          email:"",
          password:"",
          confirmpassword:""
        })
      }else{
        toast.error("Something went wrong")
      }
      

    }
    
  }
  
  const HandleLogin =async()=>{
    const{email,password}=hotelDetails
    if(!email || !password){
      toast.warning("Fill the forms completely")
    }else{
      const result= await loginHotelAPI(hotelDetails)
      console.log(result);
      if(result.status==200){
        sessionStorage.setItem("existingHotel",JSON.stringify(result.data.existingHotel))
        sessionStorage.setItem("token",result.data.token)
        toast.success("Login Sucessful")
        navigate("/hotel-home")
        sethotelDetails({
          hotelname:"",
          email:"",
          password:""
        })
      }else if(result.status==404){
        toast.warning(result.status.data)
        sethotelDetails({
          hotelname:"",
          email:"",
          password:""
        })
      }else {
        toast.error("Something went Wrong")
        sethotelDetails({
          hotelname:"",
          email:"",
          password:""
        })
      }
      
    }
    
  }



  console.log(hotelDetails);
  return (
    <>
      <div className='w-full min-h-screen flex justify-center items-center flex-col bg-[url("https://tableo.com/wp-content/uploads/Restaurant-Stock-Images-e1699951587809.webp")] bg-cover bg-center'>
        <div className="p-10">
          <h1 className="text-5xl font-extrabold text-center text-red-600"> Hotel  Login</h1>
          <div
            style={{ width: "400px" }}
            className="bg-white text-red-600 rounded-2xl p-5 flex flex-col my-5 justify-center items-center "
          >
            <div
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
              className="border mb-3 flex justify-center items-center "
            >
              <FaCircleUser className="text-6xl " />
            </div>

            {register ? (
              <h1 className="text-2xl">Register</h1>
            ) : (
              <h1 className="text-2xl">Login</h1>
            )}

            <form action="">
              {register && (
                <div className="my-5">
                  <label htmlFor="">Username</label>
                  <input
                    value={hotelDetails?.hotelname}
                    onChange={(e) =>
                      sethotelDetails({
                        ...hotelDetails,
                        hotelname: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="hotelname"
                    className="bg-white p-2 w-full rounded mt-2 placeholder-gray-500 text-black"
                  />
                </div>
              )}

              <div className="my-5">
                <label htmlFor="">Email</label>
                <input
                  value={hotelDetails?.email}
                  onChange={(e) =>
                    sethotelDetails({ ...hotelDetails, email: e.target.value })
                  }
                  type="text"
                  placeholder="username"
                  className="bg-white p-2 w-full rounded mt-2 placeholder-gray-500 text-black"
                />
              </div>

              <div className="mt-5 relative">
                <label htmlFor="">password</label>
                <input
                  value={hotelDetails?.password}
                  onChange={(e) =>
                    sethotelDetails({ ...hotelDetails, password: e.target.value })
                  }
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="bg-white p-2 w-full rounded mt-2 placeholder-gray-500 text-black"
                />

                <span
                  className="absolute right-3 top-11 cursor-pointer text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              {register && (
                <div className="mt-5 relative">
                  <label htmlFor=""> Confirm password</label>
                  <input
                    value={hotelDetails?.confirmpassword}
                    onChange={(e) =>
                      sethotelDetails({
                        ...hotelDetails,
                        confirmpassword: e.target.value,
                      })
                    }
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="bg-white p-2 w-full rounded mt-2 placeholder-gray-500 text-black"
                  />

                  <span
                    className="absolute right-3 top-11 cursor-pointer text-gray-700"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              )}

              <div className="mt-2">
                <p className="text-xs text-orange-400">
                  *Never Share your password
                </p>
              </div>

              <div className="mt-4">
                {register ? (
                  <button onClick={HandleRegister}
                    type="button"
                    
                    className="bg-red-600 text-white p-2 w-full rounded"
                  >
                    Register
                  </button>
                ) : (
                  <button
                  onClick={HandleLogin}
                    
                    type="button"
                    className="bg-red-600 text-white p-2 w-full rounded"
                  >
                    Login
                  </button>
                )}
              </div>

              {!register && (
                <div className="mt-1">
                  {/* google authentication */}
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      console.log(credentialResponse);
                      handleGoogleLogin(credentialResponse);
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                </div>
              )}

              <div className="mt-3">
                {register ? (
                  <p>
                    Are you Already a user{" "}
                    <Link className="text-blue-400" to={"/hotel-login"}>
                      Login
                    </Link>{" "}
                  </p>
                ) : (
                  <p>
                    Are you new user?{" "}
                    <Link className="text-blue-400" to={"/hotel-register"}>
                      Register
                    </Link>{" "}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hotelauth;
