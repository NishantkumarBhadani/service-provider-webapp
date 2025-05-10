import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../components/redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { FaUserCircle } from 'react-icons/fa';
import { useEffect } from 'react';

const UserDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="min-h-screen bg-white text-orange-600 p-6">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Welcome, {user?.name || 'User'} 👋</h1>

        {/* Profile Dropdown */}
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="flex items-center space-x-2 focus:outline-none">
            <FaUserCircle size={30} className="text-orange-600" />
            <span className="font-semibold">{user?.name?.split(' ')[0]}</span>
          </Menu.Button>
          <Menu.Items className="absolute right-0 mt-2 w-44 origin-top-right bg-white border rounded-md shadow-lg focus:outline-none z-50">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => navigate('/my-bookings')}
                    className={`block w-full px-4 py-2 text-left ${
                      active ? 'bg-orange-100 text-orange-700' : 'text-gray-700'
                    }`}
                  >
                    My Bookings
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleLogout}
                    className={`block w-full px-4 py-2 text-left ${
                      active ? 'bg-orange-100 text-orange-700' : 'text-gray-700'
                    }`}
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      </div>

      {/* Cards Section */}
      <p className="text-lg mb-6">
        Here you can explore services, track your orders, and update your profile.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border p-4 rounded-xl shadow hover:shadow-md">
          <h2 className="font-semibold text-xl mb-2">My Profile</h2>
          <p>Update name, email, and password.</p>
        </div>

        <div className="border p-4 rounded-xl shadow hover:shadow-md">
          <h2 className="font-semibold text-xl mb-2">My Orders</h2>
          <p>Track and manage your service bookings.</p>
        </div>

        <div className="border p-4 rounded-xl shadow hover:shadow-md">
          <h2 className="font-semibold text-xl mb-2">Support</h2>
          <p>Raise a query or contact support.</p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
