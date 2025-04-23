import { useState } from 'react';
import ServiceCard from '../components/common/ServiceCard';
import electrician1 from '../assets/images/electrician.jpeg'
import electrician2 from '../assets/images/electrician.jpeg';
import electrician3 from '../assets/images/electrician.jpeg'
const ElectricianServices = () => {
  const [services] = useState([
    {
      id: 1,
      title: "Basic Electrical Repair",
      description: "Troubleshooting and fixing common electrical issues like switch faults, fuse problems, and minor wiring repairs.",
      price: "₹499/service",
      image: electrician1,
      rating: 4.5,
      link: "/services/electrician/basic-repair",
      category:"repair"
    },
    {
      id: 2,
      title: "Full Home Wiring and installation",
      description: "Complete electrical wiring solution for new homes or rewiring for older properties with safety certification.",
      price: "₹4,999",
      image: electrician2,
      rating: 4.8,
      link: "/services/electrician/full-wiring",
      category:"installation"
    },
    {
      id: 3,
      title: "Appliance Installation",
      description: "Professional installation of ACs, geysers, fans, and other heavy electrical appliances with warranty.",
      price: "₹999",
      image: electrician3,
      rating: 4.7,
      link: "/services/electrician/appliance-installation",
      category:"installation"
    },
    {
      id: 4,
      title: "Emergency Electrical Service",
      description: "24/7 available electricians for urgent repairs, short circuits, and power failure situations.",
      price: "₹799",
      image: electrician1,
      rating: 4.9,
      link: "/services/electrician/emergency",
      category:"emergency"
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Professional Electrician Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Certified electricians for all your home and office electrical needs with 100% safety guarantee
          </p>
        </div>

        {/* Service Filter (optional) */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {['all', 'repair', 'installation', 'emergency'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-orange-50 border border-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              price={service.price}
              image={service.image}
              link={service.link}
              rating={service.rating}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white p-8 rounded-xl shadow-sm border border-orange-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Need a Custom Electrical Solution?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our expert electricians can handle any special requirements for your home or business.
          </p>
          <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors">
            Request Custom Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default ElectricianServices;