import { FaUtensils, FaShoppingCart } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaUtensils className="text-red-500 text-3xl" />
          <h1 className="text-2xl font-bold text-gray-800">
            Foodie<span className="text-red-500">Spot</span>
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <span className="cursor-pointer hover:text-red-500">Home</span>
          <span className="cursor-pointer hover:text-red-500">Foods</span>
          <span className="cursor-pointer hover:text-red-500">Restaurants</span>
          <span className="cursor-pointer hover:text-red-500">Contact</span>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-6">

          {/* Cart */}
          <div className="relative cursor-pointer">
            <FaShoppingCart className="text-gray-700 text-xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
              2
            </span>
          </div>

          {/* Profile Dropdown (Design Only) */}
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                alt="profile"
                className="w-9 h-9 rounded-full border"
              />
              <span className="hidden md:block font-medium text-gray-700">
                John
              </span>
              <HiChevronDown className="text-gray-500" />
            </div>

            {/* Dropdown */}
            <div className="absolute right-0 mt-3 w-40 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition">
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Profile
              </div>
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Orders
              </div>
              <div className="px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer">
                Logout
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
