import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaStar } from 'react-icons/fa';

const ServiceCard = ({ title, description, price, image, link, rating }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -5,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-orange-100"
    >
      {/* Image with overlay effect */}
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Card Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          {rating && (
            <div className="flex items-center bg-orange-100 px-2 py-1 rounded-full">
              <FaStar className="text-orange-500 mr-1" />
              <span className="text-sm font-medium text-orange-700">{rating}</span>
            </div>
          )}
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

        <div className="flex justify-between items-center">
          <div>
            <span className="text-orange-600 font-bold text-lg">{price}</span>
            <p className="text-xs text-gray-500">*includes all charges</p>
          </div>
          
          <Link 
            to={link}
            className="group flex items-center bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
          >
            Book Now
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Popular tag */}
      {rating >= 4.5 && (
        <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          Popular
        </div>
      )}
    </motion.div>
  );
};

export default ServiceCard;