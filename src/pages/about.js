import React from "react";
import BannerSlider from "../components/banner-slider";

function About() {
    return (
        <div style={{ marginLeft: "18vw", marginRight: "18vw", marginTop: "5vh" }}>
            <div style={{ marginLeft: "10vw", marginBottom: "30px" }}>
                <span className="ui huge brown text">Okk
                    <span className="ui yellow text"> Where </span> of Our Events
                </span>
            </div>
            <BannerSlider />
        </div>
    )
}

export default About