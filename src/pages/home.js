import React from "react"
import BannerSlider from "../components/banner-slider";

function Home() {
    return (
        <div class="ps">
            <div style={{ marginLeft: "10vw", marginBottom: "30px" }}>
                <span className="ui huge brown text">Some
                    <span className="ui yellow text"> Glimpses </span> of Our Events
                </span>
            </div>
            <BannerSlider />
        </div>
    )
}

export default Home