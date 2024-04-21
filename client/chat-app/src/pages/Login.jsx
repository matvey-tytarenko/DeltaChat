import React, { useEffect, useState } from "react";
import "../styles/register.scss";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { loginRoute } from "../utils/API";

function Login() {
  const navigate = useNavigate();

  const [values, SetValues] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      // console.log("in validate", registerRoute);
      const { username, password } = values;
      const { data } = await axios.post(loginRoute, {
        username,
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

  useEffect(() => {
    if (localStorage.getItem("chat-app-user")) {
      navigate("/");
    }
  }, []);

  const handleValidation = () => {
    const { username, password } = values;
    if (username.length < 1 || password.length < 1) {
      toast.error("Please fill in all fields", ToastOpt);
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
            <h2>Log In</h2>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
            min="3"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />

          <button type="submit">Log In</button>
          <span>
            Don't have an account?
            <Link to="/register" className="link">
              Create
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

export default Login;
