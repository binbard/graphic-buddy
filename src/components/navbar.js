import React from "react";
import logo from '../assets/geu-logo.jpg'
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="ui stackable menu">
      <div className="item" onClick={() => navigate("/")}>
        <img src={logo} alt="GEU Logo" />
      </div>
      <a className="item active" onClick={() => navigate("/")}>Home</a>
      <a className="item" onClick={() => navigate("/about")}>About</a>
      <a className="item" onClick={() => navigate("/contact")}>Contact</a>
      <a className="item" onClick={() => navigate("/contribute")}>Contribute</a>
      <a className="item" onClick={() => navigate("/admin")}>Admin</a>
      <div className="item center">
        <span className="ui medium red text">The Unsanctioned GEU</span> &nbsp; | &nbsp;
        <span className="ui medium yellow text">For Students by students</span>
      </div>
      <div className="right menu">
        <div className="item">
          <div className="ui icon input" style={{width:"90%"}}>
            <input type="text" placeholder="Search..." />
            <i className="search link icon"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;