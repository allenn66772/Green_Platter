import { useEffect, useState } from "react";
import { FaUtensils, FaShoppingCart } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = sessionStorage.getItem("token");
    const existingUser = sessionStorage.getItem("existingUser");

    setToken(userToken);

    if (existingUser) {
      setUser(JSON.parse(existingUser)); //  FIX
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    setToken("");
    setUser(null);
    navigate("/user-login");
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <FaUtensils className="text-red-500 text-3xl" />
          <h1 className="text-2xl font-bold text-gray-800">
            green<span className="text-red-500">platter</span>
          </h1>
        </Link>

        {/* Navigation */}
        {token && (
          <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <Link to="/user-home" className="hover:text-red-500">
              Home
            </Link>
            <Link to="/all-foods" className="hover:text-red-500">
              Foods
            </Link>
            <Link to="/all-hotels" className="hover:text-red-500">
              Restaurants
            </Link>
            <span className="hover:text-red-500 cursor-pointer">
              Contact
            </span>
          </nav>
        )}

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* Cart */}
          {token && (
            <Link to="/cart" className="relative cursor-pointer">
              <FaShoppingCart className="text-gray-700 text-xl" />
              
            </Link>
          )}

          {/* Profile Dropdown */}
          {token && user && (
            <div className="relative">
              <div
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                  alt="profile"
                  className="w-9 h-9 rounded-full border"
                />
                <span className="hidden md:block font-medium text-gray-700">
                  {user.username}
                </span>
                <HiChevronDown className="text-gray-500" />
              </div>

              {open && (
                <div className="absolute right-0 mt-3 w-40 bg-white rounded-lg shadow-lg z-50">
                  <div
                    onClick={handleLogout}
                    className="px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer"
                  >
                    Logout
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Login/Register (when not logged in) */}
          {!token && (
            <div className="flex gap-4">
              <Link
                to="/user-login"
                className="text-gray-700 hover:text-red-500"
              >
                Login
              </Link>
              <Link
                to="/user-register"
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
