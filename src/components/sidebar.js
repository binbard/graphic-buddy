import React from "react";
import logo from '../assets/tux-161406.svg'

function Sidebar() {
    function changePage(c,id) {
        if(id===1){
            console.log("1");
        }
        else if(id==2){
            console.log("2");
        }
    }
    return (
        <div>
            <div className="ui left fixed vertical menu" style={{ marginTop: "60px" }}>
                <div className="item">
                    <img className="ui mini image" src={logo} style={{ width: "100px", marginTop: "10%", marginLeft: "14%" }} />
                </div>
                <div style={{ height: "50px" }}></div>
                <a className="item" onClick={changePage(this,1)}>GEU</a>
                <a className="item" onClick={changePage(this,2)}>GEHU Dehradun</a>
            </div>
        </div>
    )
}

export default Sidebar