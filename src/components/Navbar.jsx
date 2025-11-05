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

      

      <div className="nav-right">
        <Link to="login" className="nav-login">Login</Link>
        <Link to="Cart" className="cart">🛒 Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
