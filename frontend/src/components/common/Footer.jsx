import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="ServiceHub Logo" 
                className="h-8 w-8"
              />
              <span className="ml-2 text-xl font-bold text-orange-600">
                ServiceHub
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              Your trusted partner for home services since 2024.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-orange-600">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-600">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-600">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-600">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-600 hover:text-orange-600 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-600 hover:text-orange-600 text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-600 hover:text-orange-600 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-600 hover:text-orange-600 text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link 
                  to="/services/maid" 
                  className="text-gray-600 hover:text-orange-600 text-sm"
                >
                  Maid Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/electrician" 
                  className="text-gray-600 hover:text-orange-600 text-sm"
                >
                  Electrician
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/plumbing" 
                  className="text-gray-600 hover:text-orange-600 text-sm"
                >
                  Plumbing
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/painting" 
                  className="text-gray-600 hover:text-orange-600 text-sm"
                >
                  Painting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="mr-2 text-orange-600">📍</span>
                33.10.02 Kolkata, India
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-orange-600">📞</span>
                +91 98765 43210
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-orange-600">✉️</span>
                contact@servicehub.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} ServiceHub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-xs text-gray-500 hover:text-orange-600">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-gray-500 hover:text-orange-600">
              Terms of Service
            </Link>
            <Link to="/cancellation" className="text-xs text-gray-500 hover:text-orange-600">
              Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;