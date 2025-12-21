import { compile } from "tailwindcss";
import CommonAPI from "./CommonAPI";
import SERVERURL from "./ServerURL";

// User side

// REgister user
export const registerUserAPI=async(reqBody)=>{
    return await CommonAPI ("POST",`${SERVERURL}/user-register`,reqBody)
}
//Login User
export const loginUserAPI=async(reqBody)=>{
    return await CommonAPI ("POST",`${SERVERURL}/user-login`,reqBody)
}

//Hotel side

//Hotel register
export const registerHotelAPI=async(reqBody)=>{
    return await CommonAPI ("POST",`${SERVERURL}/hotel-register`,reqBody)
}
//Hotel login
export const loginHotelAPI=async(reqBody)=>{
    return await CommonAPI ("POST",`${SERVERURL}/hotel-login`,reqBody)
}
//Add-Food
export const addFoodAPI=async(reqBody,reqHeader)=>{
    return await CommonAPI ("POST",`${SERVERURL}/add-food`,reqBody,reqHeader)
}
//get hotel added food
export const getHotelAddedFoodAPI=async(reqHeader)=>{
    return await CommonAPI ("GET",`${SERVERURL}/hotel-added-foods`,{},reqHeader)
}
//update Hotel Profile
export const updateHotelProfileAPI=async(reqBody,reqHeader)=>{
    return await CommonAPI ("PUT",`${SERVERURL}/update-hotel`,reqBody,reqHeader)
}
//get all hotel orders
export const getHotelOrdersAPI=async(reqHeader)=>{
    return await CommonAPI("GET",`${SERVERURL}/all-orders`,{},reqHeader)
}
//get hotel info
export const getHotelInfoAPI=async(reqHeader)=>{
    return await CommonAPI("GET",`${SERVERURL}/get-hotel-profile`,{},reqHeader)
}
//get home foods
export const  getAllFoodsInHomeAPI=async()=>{
    return await CommonAPI ("GET",`${SERVERURL}/home-foods`)
}
//get all foods to user
export const getAllFoodstoUserAPI=async(searchKey)=>{
    return await CommonAPI ("GET",`${SERVERURL}/all-foods?search=${searchKey}`,{})
}
//view food
export const viewFoodsAPI=async(id,reqHeader)=>{
    return await CommonAPI ("GET",`${SERVERURL}/view-food/${id}`,{},reqHeader)
}

//add to cart
export const addToCartAPI=async(foodId, quantity,reqHeader)=>{
    return await CommonAPI ("POST",`${SERVERURL}/add-to-cart`,{foodId, quantity},reqHeader)
}
//get product from cart
export const getFromCartAPI=async(reqHeader)=>{
    return await CommonAPI("GET",`${SERVERURL}/get-cart`,{},reqHeader)
}
//delete food from cart
export const deleteFromCartAPI=async(foodId,reqHeader)=>{
    return await CommonAPI("DELETE",`${SERVERURL}/remove-from-cart/${foodId}`,{},reqHeader)
}
//create order API
export const createOrderAPI = async (reqBody, reqHeader) => {
  return await CommonAPI("POST",`${SERVERURL}/create-order`,reqBody,reqHeader)};

//stripe handle purchase
export const  createPaymentAPI=async(reqBody,reqHeader)=>{
    return await CommonAPI ("POST",`${SERVERURL}/create-order`,reqBody,reqHeader)
}
//get orders
export const getOrdersAPI=async(reqHeader)=>{
    return await CommonAPI ("GET",`${SERVERURL}/orders/all-orders`,reqHeader)
}
//delete foods
export const deleteFoodsAPI=async(foodId,reqHeader)=>{
    return await CommonAPI ("DELETE",`${SERVERURL}/delete-food/${foodId}`,{},reqHeader)
}
//update status pending to fullfilled
export const approveOrderAPI = async (orderId, reqHeader) => {
  return await CommonAPI(
    "PUT",
    `${SERVERURL}/approve-order/${orderId}`,
    {},
    reqHeader
  );
};
//get all hotels
export const getAllHotelsAPI = async () => {
  return await CommonAPI("GET",`${SERVERURL}/all-hotels`,{})};

//clear cart
