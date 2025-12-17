import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Adminheader from "./Admin/components/Adminheader";
import Adminhome from "./Admin/pages/Adminhome";
import ViewreqPage from "./Admin/pages/ViewreqPage";
import Addfood from "./Hotel/pages/Addfood";
import Hotelhome from "./Hotel/pages/Hotelhome";
import Vieworder from "./Hotel/pages/Vieworder";
import Userhome from "./User/pages/Userhome";
import Viewfood from "./User/pages/Viewfood";
import Checkout from "./User/pages/Checkout";
import Allfoods from "./User/pages/Allfoods";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import Login from "./Common/Login";
import Hotelauth from "./Hotel/pages/Hotelauth";
import Userauth from "./User/pages/Userauth";
import { ToastContainer } from "react-toastify";
import HotelAddedFood from "./Hotel/pages/HotelAddedFood";
import Hotelprofile from "./Hotel/pages/Hotelprofile";
import Cart from "./User/pages/Cart";

function App() {
  return (
    <>
      <Routes>
        {/* Admin */}
        <Route path="/admin-header" element={<Adminheader/>}/>
        <Route path="/admin-home" element={<Adminhome/>}/>
        <Route path="/admin-view-req" element={<ViewreqPage/>}/>

        {/* Hotel */}
        <Route path="/add-food" element={<Addfood/>}/>
        <Route path="/hotel-home" element={<Hotelhome/>}/>
        <Route path="/hotel-added-foods" element={<HotelAddedFood/>}/>
        <Route path="/view-order" element={<Vieworder/>}/>
        <Route path="/hotel-profile" element={<Hotelprofile/>}/>
        <Route path="/hotel-login" element={<Hotelauth/>}/>
        <Route path="/hotel-register" element={<Hotelauth register/>}/>

        {/* User */}
        <Route path="/" element={<Userhome/>}/>
        <Route path="/view-food/:id" element={<Viewfood/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/all-foods" element={<Allfoods/>}/>
        <Route path="/user-login" element={<Userauth/>}/>
        <Route path="/user-register" element={<Userauth register/>}/>
        <Route path="/cart" element={<Cart/>}/>

        {/* common */}
        <Route path="/header" element={<Header/>}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/login" element={<Login/>}/>

      </Routes>
         <ToastContainer
          position="top-center"
          autoClose={5000}
          theme="colored"
        />
      
    </>
  );
}

export default App;
