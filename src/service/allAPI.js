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