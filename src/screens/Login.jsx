import React from 'react';
import Navbar from '../components/Navbar';
import styles from './Login.module.css'; // Import the CSS module
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <div><Navbar />
      </div>
      <div className={styles.loginContainer}>
        <form className={styles.loginForm}>
          <h2>Login</h2>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>

          <div className={styles.forgotPassword}>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className={styles.btnSignin}>Sign In</button>

          <div className={styles.createAccount}>
            <p><Link to="/signup">Create Account</Link></p>
          </div>
        </form>
      </div>
    </>
  );
}
