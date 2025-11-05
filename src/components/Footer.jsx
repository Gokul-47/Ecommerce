import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* ---- Brand ---- */}
        <div className="footer-brand">
          <h2>Stackly Mart</h2>
          <p>Your one-stop online store for quality products and amazing deals.</p>
        </div>

        {/* ---- Quick Links ---- */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category/fashion">Fashion</Link></li>
            <li><Link to="/category/electronics">Electronics</Link></li>
            <li><Link to="/category/appliances">TV & Appliances</Link></li>
            <li><Link to="/category/beauty">Beauty</Link></li>
          </ul>
        </div>

        {/* ---- Contact ---- */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email : support@stacklymart.com</p>
          <p>Phone : +91 98765 43210</p>
        </div>

        {/* ---- Socials ---- */}
        <div className="footer-socials">
          <h3>Follow Us</h3>
          <div className="icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Stackly Mart – All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
