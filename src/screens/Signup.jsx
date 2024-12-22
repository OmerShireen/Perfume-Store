import React from 'react'
import Navbar from '../components/Navbar'
import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import { left } from '@popperjs/core';
export default function Signup() {
  return (
  <>
    <div><Navbar />
      </div>
      <div className={styles.loginContainer}>
        <form className={styles.loginForm}>
          <h2>Signup</h2>

          <div className={styles.inputGroup}>
            <label htmlFor="name">Username</label>
            <input type="text" id="name" placeholder="Enter your name " />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>

          <button type="submit" className={styles.btnSignin}>Sign Up</button>

          <div className={styles.createAccount}>
            
          </div>
        </form>
      </div>
      <div className={styles.createAccount}>
      <p><Link to="/login" style={{}}>Go to signin </Link></p>
          </div>
    </>
  )
}
