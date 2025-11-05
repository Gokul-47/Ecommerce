import React, { useState } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple demo check — you can later replace with backend auth
    if (email && password) {
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back to Stackly Mart</h2>
        <p className="subtitle">Sign in to continue shopping</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="signup-text">
          Don’t have an account? <span onClick={() => navigate("/signup")}>Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
