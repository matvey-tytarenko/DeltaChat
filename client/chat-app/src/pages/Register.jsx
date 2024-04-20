import React, { useEffect, useState } from "react";
import "../styles/register.scss";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { registerRoute } from "../utils/API";

function Register() {
  const navigate = useNavigate();

  const [values, SetValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      // console.log("in validate", registerRoute);
      const { username, email, password } = values;
      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
      });

      if (data.status === false) {
        toast.error(data.msg, ToastOpt);
      }
      if (data.status === true) {
        localStorage.setItem("chat-app-user", JSON.stringify(data.user));
        navigate("/");
      }
    }
  };

  const ToastOpt = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  };

  const handleValidation = () => {
    const { username, email, password, confirmPassword } = values;

    if (password !== confirmPassword) {
      toast.error("Password & Confirm Password should be the same", ToastOpt);
      return false;
    } else if (username.length < 3) {
      toast.error("Username should be at least 3 characters long", ToastOpt);
      return false;
    } else if (email.length < 4) {
      toast.error("Email should be at least 4 characters long", ToastOpt);
      return false;
    } else if (password.length < 8) {
      toast.error("Password should be at least 8 characters long", ToastOpt);
      return false;
    } else if (email.indexOf("@") === -1) {
      toast.error("Email should contain @", ToastOpt);
      return false;
    } else if (
      password == "12345678" ||
      password == "abcdefghijklmnopqrstuvwxyz"
    ) {
      toast.error("Password is to simple", ToastOpt);
      return false;
    } else {
      return true;
    }
  };

  const handleChange = (e) => {
    SetValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="FormContainer">
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={logo} alt="brand-logo" />
            <h1>Delta Chat</h1>
            <h2>Register</h2>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
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
          <Link
            to="https://github.com/matvey-tytarenko/DeltaChat"
            className="github Link"
            alt="Source Code"
          >
            <i className="fab fa-github-square github-icon"></i>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Register;
