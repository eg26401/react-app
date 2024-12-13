import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header bg-light shadow-sm">
      <nav className="navbar navbar-expand-lg container">
        {/* Logo */}
        <a href="/" className="navbar-brand text-primary fw-bold">
          Router
        </a>

        {/* Navbar Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="/" className="nav-link text-dark">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/routes" className="nav-link text-dark">
                Find a Route
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link text-dark">
                About
              </a>
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="d-flex">
            <a href="/login" className="btn btn-outline-primary me-2">
              Log In
            </a>
            <a href="/signup" className="btn btn-primary">
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
