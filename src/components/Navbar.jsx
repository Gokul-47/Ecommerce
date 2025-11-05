import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <span className="blue">Stackly</span>
          <span className="black">Mart</span>
        </Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/fashion">Fashion</Link></li>
        <li><Link to="/electronics">Electronics</Link></li>
        <li><Link to="/appliances">TV & Appliances</Link></li>
        <li><Link to="/beauty">Beauty</Link></li>
      </ul>

      <div className="nav-right">
        <Link to="#">Login</Link>
        <Link to="#" className="cart">🛒 Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
