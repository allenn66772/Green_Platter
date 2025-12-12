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
export const registerHotelAPI=async(reqBody)=>{
    return await CommonAPI ("POST",`${SERVERURL}/hotel-register`,reqBody)
}