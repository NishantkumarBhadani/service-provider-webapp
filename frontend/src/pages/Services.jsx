import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBolt, FaBroom } from 'react-icons/fa';

const Services = () => {
  const location = useLocation();
  const isServiceCategorySelected = location.pathname !== '/services';

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {!isServiceCategorySelected ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 py-12"
        >
          {/* Service Category Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Professional Services
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose a service category to find the perfect professional for your needs
            </p>
          </div>

          {/* Service Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Electrician Service Card */}
            <motion.div
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Link 
                to="electrician" 
                className="block"
              >
                <div className="p-8 text-center">
                  <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaBolt className="text-orange-600 text-3xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Electrician Services
                  </h2>
                  <p className="text-gray-600 mb-4">
                    24/7 electrical repairs, installations, and maintenance
                  </p>
                  <div className="text-orange-600 font-medium">
                    Browse Electricians →
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Maid Service Card */}
            <motion.div
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Link 
                to="MaidServices" 
                className="block"
              >
                <div className="p-8 text-center">
                  <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaBroom className="text-orange-600 text-3xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Maid Services
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Professional cleaning and household maintenance
                  </p>
                  <div className="text-orange-600 font-medium">
                    Browse Maids →
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Additional Help Section */}
          <div className="mt-16 bg-white p-8 rounded-xl shadow-sm max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
              Not sure which service you need?
            </h3>
            <p className="text-gray-600 mb-6 text-center">
              Our customer care team can help you choose the right service
            </p>
            <div className="flex justify-center">
              <button className="border-2 border-orange-600 text-orange-600 px-6 py-2 rounded-lg font-medium hover:bg-orange-50 transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </motion.div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default Services;