import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaLock, FaEnvelope, FaPhone, FaArrowRight } from 'react-icons/fa';

const AuthContainer = ({ children, title, subtitle }) => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-600 mt-2">{subtitle}</p>
        </div>
        {children}
      </div>
    </motion.div>
  </div>
);

const InputField = ({ icon, type, placeholder, value, onChange, name }) => (
  <div className="mb-4">
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {icon}
      </div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
        required
      />
    </div>
  </div>
);

const AuthButton = ({ children, onClick, isLoading }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    disabled={isLoading}
    className={`w-full py-3 px-6 rounded-lg font-medium text-white ${
      isLoading ? 'bg-orange-400' : 'bg-orange-600 hover:bg-orange-700'
    } transition-colors flex items-center justify-center`}
  >
    {isLoading ? (
      'Processing...'
    ) : (
      <>
        {children}
        <FaArrowRight className="ml-2" />
      </>
    )}
  </motion.button>
);

export function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Login data:', formData);
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <AnimatePresence mode='wait'>
      {!showRegister ? (
        <AuthContainer 
          key="login" 
          title="Welcome Back" 
          subtitle="Sign in to your account"
        >
          <form onSubmit={handleSubmit}>
            <InputField
              icon={<FaEnvelope className="text-gray-400" />}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
            />
            <InputField
              icon={<FaLock className="text-gray-400" />}
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Your password"
            />
            <div className="flex justify-end mb-6">
              <Link to="/forgot-password" className="text-sm text-orange-600 hover:underline">
                Forgot password?
              </Link>
            </div>
            <AuthButton isLoading={isLoading}>Login</AuthButton>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <button 
                onClick={() => setShowRegister(true)}
                className="text-orange-600 font-medium hover:underline"
              >
                Sign up
              </button>
            </p>
          </div>
        </AuthContainer>
      ) : (
        <Register onBack={() => setShowRegister(false)} />
      )}
    </AnimatePresence>
  );
}

export function Register({ onBack }) {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    password: '', 
    confirmPassword: '' 
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      // console.log('Registration data:', formData);
      setIsLoading(false);
      onBack(); // Go back to login after registration
    }, 1500);
  };

  return (
    <AuthContainer 
      title="Create Account" 
      subtitle="Join us to get started"
    >
      <form onSubmit={handleSubmit}>
        <InputField
          icon={<FaUser className="text-gray-400" />}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
        />
        <InputField
          icon={<FaEnvelope className="text-gray-400" />}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email address"
        />
        <InputField
          icon={<FaPhone className="text-gray-400" />}
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your phone number"
        />
        <InputField
          icon={<FaLock className="text-gray-400" />}
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Create password"
        />
        <InputField
          icon={<FaLock className="text-gray-400" />}
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm password"
        />
        <AuthButton isLoading={isLoading}>Register</AuthButton>
      </form>
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Already have an account?{' '}
          <button 
            onClick={()=>navigate('/login')}
            className="text-orange-600 font-medium hover:underline"
          >
            Sign in
          </button>
        </p>
      </div>
    </AuthContainer>
  );
}