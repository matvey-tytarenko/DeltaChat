import React from 'react'
import '../styles/Chat.scss'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

function Chat() {
  return (
    <>
      <div className="container">
        <div className="chat-container">
          <div className="links">
            <Link to="/login">Log In</Link>
            <Link to="/register">Register</Link>
          </div>
          <div className="logo-chat">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>

      <div className="text"></div>
    </>
  );
}

export default Chat