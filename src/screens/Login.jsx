import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import styles from './Login.module.css'; // Import the CSS module
import { Link, useNavigate } from 'react-router-dom'; // For navigation after login
import axios from 'axios'; // For HTTP requests

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // To redirect user after successful login

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://perfume-store-backend.vercel.app/login', formData);
      setMessage(response.data.message);
      console.log('User logged in:', response.data);

      // Store the token in local storage (optional)
      localStorage.setItem('token', response.data.token);

      // Navigate to a protected page after login
      navigate('/user'); // Replace '/dashboard' with your desired route
    } catch (error) {
      console.error('Error during login:', error.response?.data || error.message);
      setMessage(error.response?.data.message || 'An error occurred');
    }
  };
  return (
    <>
      <div><Navbar />
      </div>
      <div className={styles.loginContainer}>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <h2>Login</h2>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.forgotPassword}>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className={styles.btnSignin}>Sign In</button>

          <div className={styles.createAccount}>
            <p><Link to="/signup">Create Account</Link></p>
          </div>

          {message && <p className={styles.message}>{message}</p>} {/* Display message */}
        </form>
      </div>
    </>
  );
}
