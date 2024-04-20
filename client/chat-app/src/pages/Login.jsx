import React from 'react'
import '../styles/register.scss';
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Login() {
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
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => handleSubmit(e)}
        />
        <button type="submit">Log In</button>
        <span>
          Don't have an account?
          <Link to="/signup" className="link">
            Create User
          </Link>
        </span>
      </form>

      <div className="links">
        <Link
          to="https://github.com/matvey-tytarenko/DeltaChat"
          className="github Link"
          alt="Source Code"
        >
          <i className="fab fa-github-square github-icon"></i>
        </Link>
      </div>
    </div>
  );
}

export default Login