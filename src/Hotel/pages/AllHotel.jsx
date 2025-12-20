import React from 'react'
import Header from '../../Common/Header'

function AllHotel() {
  return (
    <>
    <Header/>
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 w-full max-w-sm mt-19 ms-18">

  {/* Profile Picture */}
  <div className="flex justify-center -mt-14 mb-4 bg-amber-200">
    <div className="h-28 w-28 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-200">
      <img
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        alt="Hotel Profile"
        className="h-full w-full object-cover"
      />
    </div>
  </div>

  {/* Hotel Name */}
  <h2 className="text-xl font-semibold text-center mb-2">
    Hotel Name
  </h2>

  {/* Description */}
  <p className="text-gray-600 text-sm text-center break-words whitespace-normal mb-4">
    This is a short description about the hotel. It can span multiple
    lines and will wrap naturally without scrollbars.
  </p>

  {/* Contact Info */}
  <div className="flex flex-col gap-2 text-sm text-gray-600">
    <div className="flex items-center justify-center gap-2">
      📞 <span>9876543210</span>
    </div>
    <div className="flex items-center justify-center gap-2">
      ✉️ <span>hotel@email.com</span>
    </div>
  </div>
</div>
</>
  )
}

export default AllHotel