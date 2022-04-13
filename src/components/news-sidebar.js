import React from "react";
import logo from '../assets/tux-161406.svg'

function NewsSidebar() {
    return (
        <div>
            <div className="ui right fixed vertical menu" style={{ marginTop: "60px" }}>
                <a className="item">
                    <h4 className="ui header">Promotions</h4>
                    <p>Check out our new promotions</p>
                </a>
                <a className="item">
                    <h4 className="ui header">Coupons</h4>
                    <p>Check out our collection of coupons</p>
                </a>
                <a className="item active">
                    <h4 className="ui header">Rebates</h4>
                    <p>Visit our rebate forum for information on claiming rebates</p>
                </a>
            </div>
        </div>
    )
}

export default NewsSidebar