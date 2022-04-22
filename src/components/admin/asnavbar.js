import Logout from "./logout";

export default function AsNavbar(props) {
    return (
        <div>
            <div class="ui secondary  menu">
                <a class="item">
                    Home
                </a>
                <a class="item active">
                    Messages
                </a>
                <a class="item">
                    Friends
                </a>
                <div class="right menu">
                    <div style={{ paddingTop: "8px" }}>
                        <sub>{props.id}</sub>
                    </div>
                    <a class="ui item" onClick={Logout}>
                        Logout
                    </a>
                </div>
            </div>
            <hr />
        </div>
    )
}