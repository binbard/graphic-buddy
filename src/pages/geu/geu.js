import EventCard from "../../components/event-card";

function makeActive(e) {
    let fc = e.currentTarget.parentNode.children;
    let afc = [...fc];
    afc.forEach(el => {
        el.classList.remove("active");
    });
    e.currentTarget.classList.toggle("active");
}

export default function Geu() {
    return (
        <div className="ps">
            <div className="ui secondary pointing menu">
                <a className="item" onClick={makeActive}>
                    IEEE
                </a>
                <a className="item active" onClick={makeActive}>
                    ACM
                </a>
                <a className="item" onClick={makeActive}>
                    Kavyanjali
                </a>
            </div>
            <div className="ui segment">
                <EventCard/>
            </div>
        </div>
    )
}