import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="ui stackable menu">
      <div className="item">
        <img src="https://pbs.twimg.com/profile_images/976683214201765888/Wy4LUm8Q_400x400.jpg" alt="GEU Logo" />
      </div>
      <a className="item active" onClick={() => navigate("/")}>Home</a>
      <a className="item" onClick={() => navigate("/about")}>About</a>
      <a className="item" onClick={() => navigate("/contact")}>Contact</a>
      <a className="item" onClick={() => navigate("/contact")}>Team</a>
      <a className="item" onClick={() => navigate("/contact")}>Terms</a>
      <div className="item center">
        <span className="ui medium red text">Unsanctioned GEU Events </span> &nbsp; | &nbsp;
        <span className="ui medium yellow text">For Students by students</span>
      </div>
      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <input type="text" placeholder="Search..." />
            <i className="search link icon"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;