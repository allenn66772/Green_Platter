import React, { useContext } from 'react'
import { FaRegEdit } from 'react-icons/fa'
// import { hotelProfileUpdateContext } from '../../context/Contextshare'

function EditProfile() {

  
  return (
    <>
  <div className="p-4 md:p-10">
  <div className="bg-gray-200 p-5 md:p-10 rounded">
    <h1 className="text-center text-2xl md:text-3xl font-semibold">
      Book Details
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
      {/* LEFT */}
      <div>
        <input
          placeholder="Title"
          className="p-2 w-full mb-3 rounded"
        />

        <input
          placeholder="Author"
          className="p-2 w-full mb-3 rounded"
        />

        <input
          placeholder="No of Pages"
          className="p-2 w-full mb-3 rounded"
        />

        <input
          placeholder="Image URL"
          className="p-2 w-full mb-3 rounded"
        />

        <input
          placeholder="Price"
          className="p-2 w-full mb-3 rounded"
        />

        <input
          placeholder="Discount Price"
          className="p-2 w-full mb-3 rounded"
        />

        <textarea
          placeholder="Abstract"
          className="p-2 w-full rounded"
        />
      </div>

      {/* RIGHT */}
      <div>
        <input
          placeholder="Publisher"
          className="p-2 w-full mb-3 rounded"
        />

        <input
          placeholder="Language"
          className="p-2 w-full mb-3 rounded"
        />

        <input
          placeholder="ISBN"
          className="p-2 w-full mb-3 rounded"
        />

        <input
          placeholder="Category"
          className="p-2 w-full mb-3 rounded"
        />

        {/* Upload Section */}
        <div className="flex flex-col items-center mt-4">
          <label className="cursor-pointer">
            <img
              src="https://static.vecteezy.com/system/resources/previews/024/263/832/original/upload-image-icon-vector.jpg"
              className="w-40 h-40 object-cover"
              alt="upload"
            />
          </label>

          <div className="flex gap-3 mt-4">
            <img
              src="https://static.vecteezy.com/system/resources/previews/024/263/832/original/upload-image-icon-vector.jpg"
              className="w-12 h-12 object-cover rounded"
              alt=""
            />
            <img
              src="https://static.vecteezy.com/system/resources/previews/024/263/832/original/upload-image-icon-vector.jpg"
              className="w-12 h-12 object-cover rounded"
              alt=""
            />
            <img
              src="https://static.vecteezy.com/system/resources/previews/024/263/832/original/upload-image-icon-vector.jpg"
              className="w-12 h-12 object-cover rounded"
              alt=""
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            Reset
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

    
    </>
  )
}

export default EditProfile