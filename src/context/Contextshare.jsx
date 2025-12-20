import React, { useState } from "react";
import { createContext } from "react-router-dom";

export const hotelProfileUpdateContext = createContext();

function Contextshare({children}) {
  const [hotelProfileUpdatestatus, sethotelProfileUpdatestatus] = useState({});

  return (
    <hotelProfileUpdateContext.Provider
      value={{ hotelProfileUpdatestatus, sethotelProfileUpdatestatus }}>
      {children}
    </hotelProfileUpdateContext.Provider>
  );
}

export default Contextshare;
