import React from "react";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <img className="navbar_logo_img" src={logo} alt="logo" />
        <p className="navbar_logo_text">Let's Go !</p>
      </div>
    </div>
  );
}

export default Navbar;
