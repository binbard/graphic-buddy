import { useNavigate } from "react-router-dom";
import Admin from '../../pages/admin';
import Logout from "./logout";

export default function AsNavbar(props) {
    var navigate = useNavigate();
    var user = props.user;
    return (
        <div className="ps">
            <div className="ui secondary menu">
                <a className="item">
                    Home
                </a>
                <a className="item active">
                    By You
                </a>
                <a className="item" onClick={() => navigate("/admin/create-event")}>
                    Create Event
                </a>
                <a className="item">
                    Your Profile
                </a>
                <div className="right menu">
                    <div style={{ paddingTop: "8px" }}>
                        <sub>{user.id}</sub>
                    </div>
                    <a className="ui item" onClick={() => {
                        Logout();
                        <Admin />; navigate("/")
                    }}>
                        Logout
                    </a>
                </div>
            </div>
            <hr />
        </div>
    )
}