import React from 'react'
import { FaCheck, FaTimes, FaHotel } from "react-icons/fa";
import { motion } from "framer-motion";
import Adminheader from '../components/Adminheader';
import Footer from '../../Common/Footer';

function ViewreqPage() {
  return (
    <>
    <Adminheader/>
    <div className="p-6">
<h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
<FaHotel className="text-blue-600" /> Hotel Registration Requests
</h2>


<div className="overflow-x-auto bg-white shadow-lg rounded-2xl">
<table className="w-full text-left border-collapse">
<thead className="bg-gray-100 text-gray-700">
<tr>
<th className="p-4">Hotel Name</th>
<th className="p-4">Owner</th>
<th className="p-4">Email</th>
<th className="p-4">Actions</th>
</tr>
</thead>


<tbody>
<motion.tr initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="border-b hover:bg-gray-50">
<td className="p-4 font-medium text-gray-800">Golden Leaf Hotel</td>
<td className="p-4 text-gray-700">Rohan Sharma</td>
<td className="p-4 text-gray-700">goldenleaf@gmail.com</td>
<td className="p-4 flex gap-3">
<button className="p-2 rounded-full bg-green-100 hover:bg-green-200">
<FaCheck className="text-green-600" />
</button>
<button className="p-2 rounded-full bg-red-100 hover:bg-red-200">
<FaTimes className="text-red-600" />
</button>
</td>
</motion.tr>


<motion.tr initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="border-b hover:bg-gray-50">
<td className="p-4 font-medium text-gray-800">SeaView Resort</td>
<td className="p-4 text-gray-700">Anil Kumar</td>
<td className="p-4 text-gray-700">seaview@gmail.com</td>
<td className="p-4 flex gap-3">
<button className="p-2 rounded-full bg-green-100 hover:bg-green-200">
<FaCheck className="text-green-600" />
</button>
<button className="p-2 rounded-full bg-red-100 hover:bg-red-200">
<FaTimes className="text-red-600" />
</button>
</td>
</motion.tr>
</tbody>
</table>
</div>
</div>
<Footer/>
    </>
  )
}

export default ViewreqPage