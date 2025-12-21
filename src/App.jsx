import { useContext, useEffect, useState } from "react";
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
import PaymentSuccess from "./User/pages/PaymentSuccess";
import PaymentError from "./User/pages/PaymentError";
import EditProfile from "./Hotel/components/EditProfile";
import AllHotel from "./Hotel/pages/AllHotel";
import Commonlandingpage from "./Common/Commonlandingpage";
// import { userAuthContext } from "./context/Authcontext";
import Preloader from "./Common/Preloader";


function App() {
 

   const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);
 
  return (
    <>
      <Routes>
        {/* Admin */}
        <Route path="/admin-header" element={<Adminheader/>}/>
        <Route path="/admin-home" element={<Adminhome/>}/>
        <Route path="/admin-view-req" element={<ViewreqPage/>}/>

        {/* Hotel */}
        
         
          <Route path="/add-food" element={loader?<Preloader/>:<Addfood/>}/>
          <Route path="/hotel-home" element={loader?<Preloader/>:<Hotelhome/>}/>
          <Route path="/hotel-added-foods" element={loader?<Preloader/>:<HotelAddedFood/>}/>
          <Route path="/view-order" element={loader?<Preloader/>:<Vieworder/>}/>
          <Route path="/hotel-profile" element={loader?<Preloader/>:<Hotelprofile/>}/>
          <Route path="/hotel-login" element={<Hotelauth/>}/>
          <Route path="/hotel-register" element={<Hotelauth register/>}/>
          <Route path="/edit-profile" element={loader?<Preloader/>:<EditProfile/>}/>
    
      
       

        {/* User */}
        
          <Route path="/user-home" element={loader?<Preloader/>:<Userhome/>}/>
          <Route path="/view-food/:id" element={loader?<Preloader/>:<Viewfood/>}/>
          <Route path="/checkout" element={loader?<Preloader/>:<Checkout/>}/>
          <Route path="/all-foods" element={loader?<Preloader/>:<Allfoods/>}/>
          
          <Route path="/cart" element={loader?<Preloader/>:<Cart/>}/>
          <Route path="/payment-success" element={<PaymentSuccess/>}/>
          <Route path="/payment-error" element={<PaymentError/>}/>
          <Route path="/all-hotels" element={loader ? <Preloader/>:<AllHotel/>}/>
      
          <Route path="/user-login" element={<Userauth/>}/>
          <Route path="/user-register" element={<Userauth register/>}/>

        {/* common */}
        <Route path="/" element={loader ? <Preloader/>:<Commonlandingpage/>}/>
        <Route path="/header" element={<Header/>}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/landingpage" element={<Commonlandingpage/>}/>

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
