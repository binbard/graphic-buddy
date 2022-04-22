import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/tux-161406.svg'

function Sidebar() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="ui left fixed vertical menu" style={{ marginTop: "60px" }}>
                <div className="item">
                    <img className="ui mini image" src={logo} style={{ width: "100px", marginTop: "10%", marginLeft: "14%" }} />
                </div>
                <div style={{ height: "50px" }}></div>
                <a className="item" onClick={() => navigate("/geu")}>GEU</a>
                <a className="item" onClick={() => navigate("/gehu")}>GEHU Dehradun</a>
            </div>
        </div>
    )
}

export default Sidebar;