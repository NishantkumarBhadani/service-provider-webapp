import { motion } from 'framer-motion';
import { FaUsers, FaAward, FaHandshake } from 'react-icons/fa';
import teamImage from '../assets/images/electrician.jpeg'
import founderImage from '../assets/images/electrician.jpeg'

const AboutUs = () => {
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
        duration: 0.6,
      },
    },
  };

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          >
            About <span className="text-orange-600">ServiceHub</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Connecting you with trusted professionals for all your home service needs
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2023, ServiceHub began with a simple mission: to make home services reliable, 
                  convenient, and transparent. After experiencing the frustrations of finding trustworthy 
                  service providers ourselves, we set out to create a better solution.
                </p>
                <p>
                  What started as a small team of home service enthusiasts has grown into a platform 
                  serving thousands of happy customers across the city. We carefully vet every professional 
                  in our network to ensure quality service you can count on.
                </p>
                <p>
                  Today, we're proud to be the fastest-growing home services platform in the region, 
                  but we still maintain our commitment to personalized service and customer satisfaction.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src={teamImage} 
                alt="ServiceHub team working together" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-800 mb-4">
              Our Core Values
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at ServiceHub
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUsers className="text-4xl text-orange-600" />,
                title: "Customer First",
                description: "We prioritize your satisfaction above all else, with 24/7 support and service guarantees."
              },
              {
                icon: <FaAward className="text-4xl text-orange-600" />,
                title: "Quality Service",
                description: "Every professional in our network undergoes rigorous vetting and training."
              },
              {
                icon: <FaHandshake className="text-4xl text-orange-600" />,
                title: "Trust & Transparency",
                description: "No hidden fees, clear pricing, and honest service providers you can trust."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder/Team Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Founder</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The vision behind ServiceHub
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-4xl mx-auto">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src={founderImage} 
                  alt="ServiceHub founder" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Nishant Kumar Bhadani</h3>
                <p className="text-orange-600 font-medium mb-4">CEO & Founder</p>
                <div className="text-gray-600 space-y-4">
                  <p>
                    "After struggling to find reliable electricians and home service providers for my own 
                    family, I realized there had to be a better way. ServiceHub was born from the belief 
                    that everyone deserves access to trustworthy home services."
                  </p>
                  <p>
                    With over 10 years of experience in the home services industry, Rahul leads our team 
                    with a customer-first philosophy and commitment to quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Better Service?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their homes
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Book a Service Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;