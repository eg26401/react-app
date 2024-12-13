import React from "react";
import "./Footer.css"; // Import the styles

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <a href="/" className="footer-brand">
        router
      </a>
      <div className="footer-links">
        <a href="/about" className="footer-link">
          About
        </a>
        <a href="/contact" className="footer-link">
          Contact
        </a>
        <a href="/privacy" className="footer-link">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
