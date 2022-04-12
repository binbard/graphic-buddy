import React from "react";
import logo from '../assets/tux-161406.svg'

function Sidebar() {
    return (
        <div>
            <div class="ui left fixed vertical menu" style={{ marginTop: "60px" }}>
                <div class="item">
                    <img class="ui mini image" src={logo} style={{ width: "100px", marginTop: "10%", marginLeft: "14%" }} />
                </div>
                <div style={{ height: "50px" }}></div>
                <a class="item">GEU</a>
                <a class="item">GEHU Dehradun</a>
            </div>
        </div>
    )
}

export default Sidebar