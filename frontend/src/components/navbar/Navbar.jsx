import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <Link
        className="navbar_logo"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        to="/"
      >
        <img className="navbar_logo_img" src={logo} alt="logo" />
        <p className="navbar_logo_text">Let's Go !</p>
      </Link>

      <div className="multi-button">
        <Link
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          to="/"
        >
          <button type="button" className="multi-button_btn1">
            Home
          </button>
        </Link>
        <Link
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          to="/"
        >
          <button type="button" className="multi-button_btn2">
            Admin
          </button>
        </Link>
        <Link
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          to="/flotte"
        >
          <button type="button" className="multi-button_btn3">
            Race
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
