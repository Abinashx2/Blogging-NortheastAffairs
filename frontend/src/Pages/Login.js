import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Style1/Login.css'
const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Basic client-side validation
    if (!username || !password) {
      setError('Both username and password are required');
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5555/api/auth/login', {
        username,
        password
      });

      // Store the token in localStorage
      const { token } = response.data;
      localStorage.setItem('adminToken', token);
      
      // Redirect to admin dashboard
      navigate('/admin/dashboard');
    } catch (err) {
      // Handle different error responses
      if (err.response) {
        // The request was made and the server responded with a status code
        setError(err.response.data.message || 'Login failed');
      } else if (err.request) {
        // The request was made but no response was received
        setError('No response from server. Please try again.');
      } else {
        // Something happened in setting up the request
        setError('Login error: ' + err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 admin-login-container">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md login-box">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 login-title">Admin Login</h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} login-form>
          <div className="mb-4 form-group">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2 form-label">
              Username
            </label>
            <input
              id="username"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 form-input"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-6 form-group">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2 form-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 form-input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 login-button"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;