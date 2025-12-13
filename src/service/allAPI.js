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