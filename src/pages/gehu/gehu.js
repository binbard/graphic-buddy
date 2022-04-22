import EventCard from "../../components/event-card";

function makeActive(e) {
    let fc = e.currentTarget.parentNode.children;
    let afc=[...fc];
    afc.forEach(el => {
        el.classList.remove("active");
    });
    e.currentTarget.classList.toggle("active");
}

export default function Gehu() {
    return (
        <div className="ps">
            <div className="ui secondary pointing menu">
                <button className="item" onClick={makeActive}>
                    IEEE
                </button>
                <button className="item active"  onClick={makeActive}>
                    ACM-W
                </button>
            </div>
            <div className="ui segment">
                <EventCard/>
            </div>
        </div>
    )
}