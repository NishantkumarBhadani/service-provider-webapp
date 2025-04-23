import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight, FaCheck, FaStar } from 'react-icons/fa';

// Service images (replace with your actual images)
import maidServiceImg from '../assets/images/maid.jpeg';
import electricianImg from '../assets/images/electrician.jpeg';
import happyCustomerImg from '../assets/images/customer.jpeg';




const Home = () => {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-50 to-orange-100 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              <span className="block">Home Services</span>
              <span className="text-orange-600">Done Right</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Book trusted professionals for all your home needs with just a few clicks
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/services/maidServices"
                className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-all flex items-center justify-center"
              >
                Book a Maid <FaArrowRight className="ml-2" />
              </Link>
              <Link
                to="/services/electrician"
                className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-50 transition-all"
              >
                Find Electrician
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Professional Services
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 max-w-2xl mx-auto">
              We provide high-quality home services with certified professionals
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Maid Service Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img src={maidServiceImg} alt="Maid Service" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Maid Services</h3>
                <p className="text-gray-600 mb-4">
                  Professional cleaning, laundry, and household maintenance by trained staff.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" /> Daily/Weekly Cleaning
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" /> Deep Cleaning
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" /> Utensil & Laundry
                  </li>
                </ul>
                <Link
                  to="/services/maidServices"
                  className="inline-block bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* Electrician Service Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img src={electricianImg} alt="Electrician Service" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Electrician Services</h3>
                <p className="text-gray-600 mb-4">
                  24/7 electrical repairs, installations, and maintenance by certified electricians.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" /> Wiring & Rewiring
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" /> Switch/DB Repair
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" /> Appliance Installation
                  </li>
                </ul>
                <Link
                  to="/services/electrician"
                  className="inline-block bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional service with these benefits
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Verified Professionals",
                description: "All our service providers undergo strict background checks and training",
                icon: "🔒",
              },
              {
                title: "Instant Booking",
                description: "Book services in under 2 minutes with our easy-to-use platform",
                icon: "⏱️",
              },
              {
                title: "100% Satisfaction",
                description: "We guarantee your satisfaction or we'll make it right",
                icon: "💯",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Sharma",
                rating: 5,
                comment: "The maid service is exceptional! My home has never been cleaner.",
                image: happyCustomerImg,
              },
              {
                name: "Priya Patel",
                rating: 5,
                comment: "Electrician arrived within 30 minutes and fixed my wiring issue perfectly.",
                image: happyCustomerImg,
              },
              {
                name: "Amit Singh",
                rating: 4,
                comment: "Reliable service with professional staff. Will definitely book again!",
                image: happyCustomerImg,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <div className="flex text-orange-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < testimonial.rating ? "text-orange-400" : "text-gray-300"} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Better Home Services?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us with their homes
            </p>
            <Link
              to="/services"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Book a Service Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;