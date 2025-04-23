import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaPaperPlane, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = "service_cpgwqyv";
    const templateId = "template_1pjsp6k";
    const publicKey = "gDwnWrJLSikRm1gjb";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      mobile: formData.mobile,
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
        console.log(result.text);
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", mobile: "", message: "" });
      })
      .catch((error) => {
        console.error(error.text);
        setStatus("Failed to send message. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get in <span className="text-orange-600">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                        placeholder="+91 9876543210"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center py-3 px-6 rounded-lg font-medium text-white ${
                      isSubmitting ? 'bg-orange-400' : 'bg-orange-600 hover:bg-orange-700'
                    } transition-colors`}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <FaPaperPlane className="mr-2" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </div>
              </form>

              {status && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`mt-4 text-center text-lg ${
                    status.includes("successfully") ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {status}
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-orange-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Our Location</h4>
                    <p className="text-gray-600">33.10.02 Kolkata, India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <FaPhone className="text-orange-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone Number</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 22 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-orange-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email Address</h4>
                    <p className="text-gray-600">contact@servicehub.com</p>
                    <p className="text-gray-600">support@servicehub.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Business Hours
              </h3>
              <ul className="space-y-3">
                {[
                  { day: "Monday - Friday", time: "9:00 AM - 8:00 PM" },
                  { day: "Saturday", time: "10:00 AM - 6:00 PM" },
                  { day: "Sunday", time: "Emergency services only" },
                ].map((item, index) => (
                  <li key={index} className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-gray-700 font-medium">{item.day}</span>
                    <span className="text-gray-600">{item.time}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;