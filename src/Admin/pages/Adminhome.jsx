import React from 'react'
import { FaUsers, FaHotel } from "react-icons/fa";
import { motion } from "framer-motion";
import Adminheader from '../components/Adminheader';
import Footer from '../../Common/Footer';

function Adminhome() {
  return (
    <>
    <Adminheader/>
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Users Count Card */}
<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
<div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4">
<div className="p-4 bg-blue-100 rounded-full">
<FaUsers className="text-4xl text-blue-600" />
</div>
<div>
<h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
<p className="text-3xl font-bold text-gray-900">120</p>
</div>
</div>
</motion.div>


{/* Hotels Count Card */}
<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
<div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4">
<div className="p-4 bg-green-100 rounded-full">
<FaHotel className="text-4xl text-green-600" />
</div>
<div>
<h3 className="text-lg font-semibold text-gray-700">Registered Hotels</h3>
<p className="text-3xl font-bold text-gray-900">35</p>
</div>
</div>
</motion.div>
{/* view hotel req */}
<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
<div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4">
<div className="p-4 bg-green-100 rounded-full">
<FaHotel className="text-4xl text-green-600" />
</div>
<div>
<h3 className="text-lg font-semibold text-gray-700">Registered Hotels</h3>
<p className="text-3xl font-bold text-gray-900">35</p>
</div>
</div>
</motion.div>
</div>
<Footer/>
    </>
  )
}

export default Adminhome