import React from "react";
import "../styles/register.scss";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Hello Form!");
  };
  return (
    <div className="FormContainer">
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="brand">
          <img src={logo} alt="brand-logo" />
          <h1>Delta Chat</h1>
        </div>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={(e) => handleSubmit(e)}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => handleSubmit(e)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => handleSubmit(e)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={(e) => handleSubmit(e)}
        />
        <button type="submit">Create Account</button>
        <span>
          Already have an account?
          <Link to="/login" className="link">
            Log In
          </Link>
        </span>
      </form>

      <div className="links">
        <Link to=""></Link>
      </div>
    </div>
  );
}

export default Register;
