import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const API_BASE_URL = 'http://localhost:8080/api/users'; // 🌐 Base URL

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    emailid: '',
    password: '',
    role: 'USER',
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post(`${API_BASE_URL}/create`, formData);
      console.log(res.data);
      navigate('/login'); // ✅ Navigate on success
    } catch (err) {
      alert('Signup failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full mb-4 p-3 border rounded-md"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="emailid"
            placeholder="Email ID"
            className="w-full mb-4 p-3 border rounded-md"
            value={formData.emailid}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full mb-4 p-3 border rounded-md"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full mb-6 p-3 border rounded-md"
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
          </select>

          <motion.button 
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isLoading}
            className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition"
          >
            {isLoading ? 'Registering...' : 'Register'}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default SignUp;