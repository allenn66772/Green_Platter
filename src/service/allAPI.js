import CommonAPI from "./CommonAPI";
import SERVERURL from "./ServerURL";

// User side

// REgister user
export const registerUserAPI=async(reqBody)=>{
    return await CommonAPI ("POST",`${SERVERURL}/user-register`,reqBody)
}