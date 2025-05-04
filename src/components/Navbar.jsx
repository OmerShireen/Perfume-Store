import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark "
      style={{backgroundColor:'#000000',height:'130px'}}>
        <div className="container-fluid">
          {/* Left Section */}
          <div className="d-flex">
            <button
              className="navbar-toggler me-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          {/* Center Section: Logo */}
          <Link  className="navbar-brand mx-auto text-center"
            href="#"
            style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}
            to="/">
            <img
              src="public/img/logo.png"
              alt="Logo"
              style={{ height: '120px', width: '250px' }}
            />
          </Link>

          {/* Right Section */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link  className="nav-link"
            href="#"
            style={{
              fontFamily: 'Futura, sans-serif',
              fontSize: '14px',
              color: '#ffffff',
              fontWeight:'200px',
             padding:'16px 12px'
            }}to="/login">
                  <i className="fas fa-user me-2" ></i> ACCOUNTS
                </Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link"
            href="#"
            style={{
              fontFamily: 'Futura, sans-serif',
              fontSize: '14px',
              color: '#ffffff',
              padding:'16px 12px'
            }}to="/cart">
                  <i className="fas fa-shopping-cart me-2"></i> CART
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
