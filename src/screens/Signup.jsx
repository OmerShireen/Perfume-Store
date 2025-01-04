import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Frontend validation
    if (!formData.username || !formData.email || !formData.password) {
      setMessage('All fields are required');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:3000/register', formData);
      setMessage(response.data.message);
      console.log('User registered:', response.data);
    } catch (error) {
      console.error('Error during registration:', error.response?.data || error.message);
      setMessage(error.response?.data.message || 'An error occurred');
    }
  };
  

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className={styles.loginContainer}>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <h2>Signup</h2>

          <div className={styles.inputGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your name"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
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
            />
          </div>

          <button type="submit" className={styles.btnSignin}>
            Sign Up
          </button>

          {message && <p>{message}</p>}
        </form>
      </div>
      <div className={styles.createAccount}>
        <p>
          <Link to="/login">Go to signin</Link>
        </p>
      </div>
    </>
  );
}
