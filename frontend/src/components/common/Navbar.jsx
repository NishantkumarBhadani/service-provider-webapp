import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiUser } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../components/redux/slices/userSlice'; // Assuming the action exists
import logo from '../../assets/images/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userInfo); // Get user info from Redux

  const isActive = (path) => {
    return location.pathname === path ||
      (path === '/services' && location.pathname.startsWith('/services'));
  };

  const handleLogout = () => {
    dispatch(logout()); // Assuming the logout action will clear user data
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Brand Name */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="ServiceHub Logo"
                className="h-8 w-8"
              />
              <span className="ml-2 text-xl font-bold text-orange-600">
                ServiceHub
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="relative px-3 py-2 font-medium text-gray-700 hover:text-orange-600 transition-colors duration-300"
            >
              Home
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transition-all duration-300 ease-in-out ${isActive('/') ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </Link>
            <Link
              to="/services"
              className="relative px-3 py-2 font-medium text-gray-700 hover:text-orange-600 transition-colors duration-300"
            >
              Services
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transition-all duration-300 ease-in-out ${isActive('/services') ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </Link>
            <Link
              to="/about"
              className="relative px-3 py-2 font-medium text-gray-700 hover:text-orange-600 transition-colors duration-300"
            >
              About Us
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transition-all duration-300 ease-in-out ${isActive('/about') ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </Link>
            <Link
              to="/contact"
              className="relative px-3 py-2 font-medium text-gray-700 hover:text-orange-600 transition-colors duration-300"
            >
              Contact Us
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transition-all duration-300 ease-in-out ${isActive('/contact') ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </Link>
            {user ? (
              // Show Book Now and Logout options if user is logged in
              <div className="flex items-center space-x-4">
                <Link
                  to="/book-now"
                  className="relative px-3 py-2 font-medium text-gray-700 hover:text-orange-600 transition-colors duration-300"
                >
                  Book Now
                </Link>
                <button
                  onClick={handleLogout}
                  className="relative px-3 py-2 font-medium text-red-600 hover:text-red-800 transition-colors duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              // Show Login and Sign Up options if user is logged out
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="relative px-3 py-2 font-medium flex items-center text-gray-700 hover:text-orange-600 transition-colors duration-300"
                >
                  <FiUser className="mr-1" /> Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors duration-300"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 focus:outline-none transition-colors duration-300"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md transition-colors duration-300 ${isActive('/')
                ? 'text-orange-600 bg-orange-50'
                : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`block px-3 py-2 rounded-md transition-colors duration-300 ${isActive('/services')
                ? 'text-orange-600 bg-orange-50'
                : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'}`}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md transition-colors duration-300 ${isActive('/about')
                ? 'text-orange-600 bg-orange-50'
                : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'}`}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md transition-colors duration-300 ${isActive('/contact')
                ? 'text-orange-600 bg-orange-50'
                : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'}`}
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            {user ? (
              <div className="pt-4 pb-3 border-t border-gray-200 transition-colors duration-300">
                <div className="flex items-center px-5 space-x-3">
                  <Link
                    to="/book-now"
                    className="w-full text-center px-3 py-2 rounded-md border transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Now
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-center bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 transition-colors duration-300"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="pt-4 pb-3 border-t border-gray-200 transition-colors duration-300">
                <div className="flex items-center px-5 space-x-3">
                  <Link
                    to="/login"
                    className={`w-full text-center px-3 py-2 rounded-md border transition-colors duration-300 ${isActive('/login')
                      ? 'text-orange-600 border-orange-600'
                      : 'text-gray-700 border-gray-300 hover:text-orange-600'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="w-full text-center bg-orange-600 text-white px-3 py-2 rounded-md hover:bg-orange-700 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
