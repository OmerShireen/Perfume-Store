import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {
  const cItems = useSelector((state) => state.cart.items)

  return (

    <>
      <nav className="navbar navbar-expand-lg navbar-dark "
        style={{ backgroundColor: '#000000', height: '130px' }}>
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
          <Link className="navbar-brand mx-auto text-center"
            href="#"
            style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}
            to="/">
            <img
              src="/images/logo.png"
              alt="Logo"
              style={{ height: '120px', width: '250px' }}
            />
          </Link>

          {/* Right Section */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link"
                  href="#"
                  style={{
                    fontFamily: 'Futura, sans-serif',
                    fontSize: '14px',
                    color: '#ffffff',
                    fontWeight: '200px',
                    padding: '16px 12px'
                  }} to="/login">
                  <i className="fas fa-user me-2" ></i> ACCOUNTS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    fontFamily: 'Futura, sans-serif',
                    fontSize: '14px',
                    color: '#ffffff',
                    padding: '16px 12px',
                  }}
                  to="/cart"
                >
                  <span className="position-relative me-2">
                    <i className="fas fa-shopping-cart"></i>

                    {cItems.length > 0 && (
                      <span
                      className="position-absolute top-0 start-100 translate-middle "
                      style={{
                        fontSize: '0.55rem',
                        transform: 'translate(-30%, -50%)',
                        zIndex: 1,
                        borderRadius: '50%', // 👈 Thodi kam golai
                        padding: '2px 4px',   // Optional: adjust padding for rectangle shape
                        color: 'white',
                        backgroundColor: '#f6b116',
                      }}
                    >
                      {cItems.reduce((sum, item) => sum + item.quantity, 0)}
                    </span>
                    
                    )}
                  </span>
                  CART
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
