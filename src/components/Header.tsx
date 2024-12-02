import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="navbar">
        {/* Logo */}
        <a href="/" className="navbar-brand">
          London Underground Navigator
        </a>

        {/* Navigation Links */}
        <div className="navbar-links">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/routes" className="nav-link">
            Find a Route
          </a>
          <a href="/about" className="nav-link">
            About
          </a>
          <a href="/contact" className="nav-link">
            Contact
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="auth-buttons">
          <a href="/login" className="btn login-button">
            Log In
          </a>
          <a href="/signup" className="btn signup-button">
            Sign Up
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
