import { Outlet, useNavigate } from "react-router-dom";
import EventCard from "../../components/event-card";

export default function Geu() {
    var navigate=useNavigate();
    function makeActive(e) {
    
        let fc = e.currentTarget.parentNode.children;
        let afc=[...fc];
        afc.forEach(el => {
            el.classList.remove("active");
        });
        e.currentTarget.classList.toggle("active");
        if(e.currentTarget.innerHTML=="IEEE") { console.log("ieee"); navigate('/geu/ieee'); }
        else if(e.currentTarget.innerHTML=="ACM-W"){ console.log("acm"); navigate('/geu/acm-w'); }
    }
    
    return (
        <div className="ps">
            <div className="ui secondary pointing menu">
                <button className="item" onClick={makeActive}>
                    IEEE
                </button>
                <button className="item active"  onClick={makeActive}>
                    ACM
                </button>
                <button className="item active"  onClick={makeActive}>
                    Kavyanjali
                </button>
            </div>
            <div className="ui segment">
                {/* <EventCard/> */}
            </div>
            <Outlet/>
        </div>
        
    )
}