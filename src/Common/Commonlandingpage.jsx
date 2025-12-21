import React from 'react'
import { Link } from 'react-router-dom'

function Commonlandingpage() {
  return (
    <>
     <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* HEADER */}
      <header className="flex justify-between items-center px-8 py-5 bg-white shadow">
        <h1 className="text-2xl font-bold text-orange-600">
          FoodieHub
        </h1>

        <div className="flex gap-3">
          <Link
            to="/user-login"
            className="px-4 py-2 border border-orange-600 text-orange-600 rounded hover:bg-orange-600 hover:text-white"
          >
            User Login
          </Link>

          <Link
            to="/hotel-login"
            className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
          >
            Hotel Login
          </Link>

          <Link
            to="/admin-login"
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-black"
          >
            Admin
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          One Platform. Three Roles.
        </h2>

        <p className="text-gray-600 max-w-xl mb-12">
          Order food as a user, manage your restaurant as a hotel, or
          control the platform as an admin — all from one system.
        </p>

        {/* ROLE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {/* USER */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-3">
              For Users 🍽️
            </h3>
            <p className="text-gray-600 mb-6">
              Browse restaurants, place orders, and enjoy food delivered
              to your doorstep.
            </p>

            <div className="flex justify-center gap-4">
              <Link
                to="/user-login"
                className="px-5 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
              >
                Login
              </Link>
              <Link
                to="/user-register"
                className="px-5 py-2 border border-orange-600 text-orange-600 rounded hover:bg-orange-600 hover:text-white"
              >
                Register
              </Link>
            </div>
          </div>

          {/* HOTEL */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-3">
              For Hotels 🏨
            </h3>
            <p className="text-gray-600 mb-6">
              Manage menus, accept orders, track revenue, and grow your
              restaurant online.
            </p>

            <div className="flex justify-center gap-4">
              <Link
                to="/hotel-login"
                className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Login
              </Link>
              <Link
                to="/hotel-register"
                className="px-5 py-2 border border-green-600 text-green-600 rounded hover:bg-green-600 hover:text-white"
              >
                Register
              </Link>
            </div>
          </div>

          {/* ADMIN */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-3">
              For Admin 👑
            </h3>
            <p className="text-gray-600 mb-6">
              Monitor users, hotels, orders, revenue, and maintain
              platform integrity.
            </p>

            <div className="flex justify-center">
              <Link
                to="/admin-login"
                className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-black"
              >
                Admin Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} FoodieHub. All rights reserved.
      </footer>
    </div>
    </>
  )
}

export default Commonlandingpage