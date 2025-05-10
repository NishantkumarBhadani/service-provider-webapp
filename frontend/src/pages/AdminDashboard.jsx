import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../components/redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { FaUserShield } from 'react-icons/fa';
import { useEffect } from 'react';

const AdminDashboard = () => {
  const user = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
      if (!user) {
        navigate('/login');
      }
    })
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="min-h-screen bg-white text-orange-600 p-6">
      {/* Header with Profile Dropdown */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="flex items-center space-x-2 bg-orange-100 hover:bg-orange-200 px-4 py-2 rounded-md text-orange-700">
            <FaUserShield className="text-xl" />
            <span>{user?.name || 'Admin'}</span>
          </Menu.Button>
          <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-orange-100' : ''
                    } w-full text-left px-4 py-2 text-sm text-orange-700`}
                  >
                    View All Bookings
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleLogout}
                    className={`${
                      active ? 'bg-orange-100' : ''
                    } w-full text-left px-4 py-2 text-sm text-red-600`}
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      </div>

      {/* Summary Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 border rounded-xl shadow hover:shadow-md">
          <h2 className="text-xl font-semibold mb-1">Total Services Booked</h2>
          <p className="text-lg">Coming soon...</p>
        </div>
        <div className="p-4 border rounded-xl shadow hover:shadow-md">
          <h2 className="text-xl font-semibold mb-1">Pending Requests</h2>
          <p className="text-lg">Coming soon...</p>
        </div>
      </div>

      {/* Booking Table Placeholder */}
      <div className="bg-orange-50 p-4 rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-4">Bookings</h2>
        <p className="text-gray-700">This section will display all customer bookings with their details like name, date, and service. Coming soon...</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
